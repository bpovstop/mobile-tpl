import { rAF } from "./rfa";
import getRect, { getOffset } from "./rect";
import ease from "./easing";
import Momentum from "./momentum";
import { preventDefaultException } from "./helper";
import {
  addEvent,
  clickEvent,
  getTouchEventByDirection,
  removeEvent,
  tapEvent
} from "./event";

export default function Scroll(dom, options = {}) {
  const { scrollbar, ...rest } = options;
  this.self = dom;
  this.body = this.self.children[0];
  this.bodyStyleCache = this.body.style; // cache style for better performance
  this.options = {
    resizeScrollbars: true,
    snapThreshold: 0.334,
    startX: 0,
    startY: 0,
    scrollY: true,
    directionLockThreshold: 5,
    momentum: true,

    bounce: true,
    bounceTime: 600,
    bounceEasing: "",

    useTransform: true,
    useTransition: true,
    preventDefault: true,
    preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },

    eventPassthrough: "horizontal", // horizontal
    ...rest
  };
  if (typeof scrollbar === "object") {
    this.options = {
      ...this.options,
      ...scrollbar
    };
  } else {
    this.options.scrollbar = scrollbar;
  }
  this._preventDefault = true;

  this.transformZ = " translateZ(0)";

  // If you want eventPassthrough I have to lock one of the axes
  this.options.scrollY =
    this.options.eventPassthrough !== "vertical" && this.options.scrollY;
  this.options.scrollX =
    this.options.eventPassthrough !== "horizontal" && this.options.scrollX;

  // todo free scroll

  this.options.directionLockThreshold = this.options.eventPassthrough
    ? 0
    : this.options.directionLockThreshold;

  this.options.bounceEasing =
    typeof this.options.bounceEasing === "string"
      ? ease[this.options.bounceEasing] || ease.bounce
      : this.options.bounceEasing;

  this.options.resizePolling =
    this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

  if (this.options.tap === true) {
    this.options.tap = "tap";
  }

  // https://github.com/cubiq/iscroll/issues/1029
  if (!this.options.useTransition && !this.options.useTransform) {
    if (!/relative|absolute/i.test(this.bodyStyleCache.position)) {
      this.bodyStyleCache.position = "relative";
    }
  }

  if (this.options.shrinkScrollbars == "scale") {
    this.options.useTransition = false;
  }

  if (this.options.probeType == 3) {
    this.options.useTransition = false;
  }

  this._x = 0;
  this._y = 0;
  this._direction_x = 0;
  this._direction_y = 0;
  this._events = {};
  this._eventType = {
    touchstart: 1,
    touchmove: 1,
    touchend: 1,

    pointerdown: 3,
    pointermove: 3,
    pointerup: 3
  };

  this._init();
  this.refresh();
  this.scrollTo(this.options.startX, this.options.startY);
}

Scroll.prototype = {
  version: "0.1.0",
  destroy: function() {
    this._initEvents(false);
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = null;
    this._execEvent("destroy");
  },
  refresh: function() {
    getRect(this.self); // Force reflow
    const body = getRect(this.body);
    this._self_width = this.self.clientWidth;
    this._self_height = this.self.clientHeight;

    this._body_width = body.width;
    this._body_height = body.height;

    this._max_scroll_x = this._self_width - this._body_width;
    this._max_scroll_y = this._self_height - this._body_height;

    this._has_horizontal_scroll =
      this.options.scrollX && this._max_scroll_x < 0;
    this._has_vertical_scroll = this.options.scrollY && this._max_scroll_y < 0;

    if (!this._has_horizontal_scroll) {
      this._max_scroll_x = 0;
      this._body_width = this._self_width;
    }
    if (!this._has_vertical_scroll) {
      this._max_scroll_y = 0;
      this._body_height = this._self_height;
    }

    this._end_time = 0;
    this._direction_x = 0;
    this._direction_y = 0;

    if (window.PointerEvent) {
      // The wrapper should have `touchAction` property for using pointerEvent.
      this.self.style.touchAction = getTouchEventByDirection(
        this.options.eventPassthrough,
        true
      );

      // case. not support 'pinch-zoom'
      // https://github.com/cubiq/iscroll/issues/1118#issuecomment-270057583
      if (!this.self.style.touchAction) {
        this.self.style.touchAction = getTouchEventByDirection(
          this.options.eventPassthrough,
          false
        );
      }
    }
    this.self_offset = getOffset(this.self);

    this._execEvent("refresh");
    this.resetPosition();
  },
  resetPosition: function(time) {
    let x = this._x,
      y = this._y;
    time = time || 0;
    if (!this._has_horizontal_scroll || this._x > 0) {
      x = 0;
    } else if (this._x < this._max_scroll_x) {
      x = this._max_scroll_x;
    }

    if (!this._has_vertical_scroll || this._y > 0) {
      y = 0;
    } else if (this._y < this._max_scroll_y) {
      y = this._max_scroll_y;
    }

    if (x === this._x && y === this._y) {
      return false;
    }

    this.scrollTo(x, y, time, this.options.bounceEasing);
    return true;
  },
  updatePosition: function() {
    let x =
        (this._listen_x && Math.round(this._size_ratio_x * this.body.x)) || 0,
      y = (this._listen_y && Math.round(this._size_ratio_y * this.body.y)) || 0;

    if (this.options.ignoreBoundaries) {
    } else {
      if (x < this._min_boundary_x) {
        if (this.options.shrink === "scale") {
          this.width = Math.max(this._body_width + x, 8);
          // todo scrollbar body set
        }
        x = this._min_boundary_x;
      } else if (x > this._max_boundary_x) {
        if (this.options.shrink == "scale") {
          this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
          this.indicatorStyle.width = this.width + "px";
          x = this.maxPosX + this.indicatorWidth - this.width;
        } else {
          x = this.maxBoundaryX;
        }
      }
    }
  },
  transitionTime: function(time) {
    time = time || 0;
    // todo
  },
  scrollTo: function(x, y, time, easing) {
    easing = easing || ease.bounce
    this._is_in_transition = this.options.useTransition && time > 0;
    const t_Type = this.options.useTransition && easing.style;

    if (!time || t_Type) {
      if (t_Type) {
        this._transitionTimingFunction(easing.style);
        this._transitionTime(time);
      }
      this._translate(x, y);
    } else {
      console.log(easing)
      this._animate(x, y, time, easing.fn);
    }
  },
  config: function(options) {
    this.options = {
      ...this.options,
      options
    };
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "touchstart":
      case "pointerdown":
        this._start(e);
        break;
      case "touchmove":
      case "pointermove":
        this._move(e);
        break;
      case "touchend":
      case "pointerup":
      case "touchcancel":
      case "pointercancel":
        this._end(e);
        break;
      case "orientationchange":
      case "resize":
        this._resize();
        break;
      case "transitionend":
        this._transitionEnd(e);
        break;
      case "click":
        if (!e._constructed) {
          e.preventDefault();
          e.stopPropagation();
        }
        break;
    }
  },
  goToPage: function(x, y, time, easing = this.options.bounceEasing) {
    if (x >= this._pages.length) {
      x = this._pages.length - 1;
    } else if (x < 0) {
      x = 0;
    }

    if (y >= this._pages[x].length) {
      y = this._pages[x].length - 1;
    } else if (y < 0) {
      y = 0;
    }

    const posX = this._pages[x][y].x,
      posY = this._pages[x][y].y;

    time =
      time === undefined
        ? this.options.snapSpeed ||
          Math.max(
            Math.max(
              Math.min(Math.abs(posX - this._x), 1000),
              Math.min(Math.abs(posY - this._y), 1000)
            ),
            300
          )
        : time;

    this._current_page = {
      x: posX,
      y: posY,
      pageX: x,
      pageY: y
    };

    this.scrollTo(posX, posY, time, easing);
  },
  nextPage: function(time, easing) {
    let x = this._current_page.pageX,
      y = this._current_page.pageY;

    x++;

    if (x >= this._pages.length && this._has_vertical_scroll) {
      x = 0;
      y++;
    }

    this.goToPage(x, y, time, easing);
  },
  prevPage: function(time, easing) {
    let x = this._current_page.pageX,
      y = this._current_page.pageY;

    x--;

    if (x < 0 && this._has_vertical_scroll) {
      x = 0;
      y--;
    }

    this.goToPage(x, y, time, easing);
  },
  on: function(type, fn) {
    if (!this._events[type]) {
      this._events[type] = [];
    }

    this._events[type].push(fn);
  },
  off: function(type, fn) {
    if (!this._events[type]) {
      return;
    }

    const index = this._events[type].indexOf(fn);

    if (index > -1) {
      this._events[type].splice(index, 1);
    }
  },
  getComputedPosition: function() {
    let matrix = window.getComputedStyle(this.body, null),
      x,
      y;

    if (this.options.useTransform) {
      matrix = matrix.transform.split(")")[0].split(", ");
      x = +(matrix[12] || matrix[4]);
      y = +(matrix[13] || matrix[5]);
    } else {
      x = +matrix.left.replace(/[^-\d.]/g, "");
      y = +matrix.top.replace(/[^-\d.]/g, "");
    }

    return { x: x, y: y };
  },
  _init: function() {
    this._initEvents();
    if (this.options.scrollbar) {
      this._initScrollbar();
    }
    if (this.options.snap) {
      this._initSnap();
    }
  },
  _initEvents: function(init = true) {
    const pathEvent = init ? addEvent : removeEvent;

    pathEvent(window, "orientationchange", this);
    pathEvent(window, "resize", this);

    if (window.PointerEvent) {
      pathEvent(this.self, "pointerdown", this);
      pathEvent(this.self, "pointermove", this);
      pathEvent(this.self, "pointercancel", this);
      pathEvent(this.self, "pointerup", this);
    } else {
      pathEvent(this.self, "touchstart", this);
      pathEvent(this.self, "touchmove", this);
      pathEvent(this.self, "touchcancel", this);
      pathEvent(this.self, "touchend", this);
    }
    pathEvent(this.body, "transitionend", this);
  },
  _initSnap: function(x, y) {
    this._current_page = {};
    this.$snap = [...this.body.children];

    this.on("refresh", function() {
      let m = 0,
        n = -1,
        cx,
        cy,
        x = 0,
        y,
        step_x =
          this.options.snapStepX === true
            ? this._self_width
            : this.options.snapStepX,
        step_y =
          this.options.snapStepY === true
            ? this._self_height
            : this.options.snapStepY;

      this._pages = [];

      if (
        !this._self_width ||
        !this._self_height ||
        !this._body_width ||
        !this._body_height
      ) {
        return;
      }

      this.$snap.map((item, i) => {
        const item_rect = getRect(item);
        if (i === 0 || item_rect.left <= getRect(this.$snap[i - 1]).left) {
          m = 0;
          n++;
        }
        if (!this._pages[m]) {
          this._pages[m] = [];
        }
        x = Math.max(-item_rect.left, this._max_scroll_x);
        y = Math.max(-item_rect.top, this._max_scroll_y);
        cx = x - Math.round(item_rect.width / 2);
        cy = y - Math.round(item_rect.height / 2);

        this._pages[m][n] = {
          x,
          y,
          width: step_x || item_rect.width,
          height: step_y || item_rect.height,
          cx,
          cy
        };

        if (x > this._max_scroll_x) {
          m++;
        }
      });

      this.goToPage(
        this._current_page.pageX || 0,
        this._current_page.pageY || 0,
        0
      );

      // Update snap threshold if needed
      if (this.options.snapThreshold % 1 === 0) {
        this._snap_threshold_x = this.options.snapThreshold;
        this._snap_threshold_y = this.options.snapThreshold;
      } else {
        this._snap_threshold_x = Math.round(
          this._pages[this._current_page.pageX][this._current_page.pageY]
            .width * this.options.snapThreshold
        );
        this.snapThresholdY = Math.round(
          this._pages[this._current_page.pageX][this._current_page.pageY]
            .height * this.options.snapThreshold
        );
      }
    });

    this.on("flick", function() {
      const time =
        this.options.snapSpeed ||
        Math.max(
          Math.max(
            Math.min(Math.abs(this._x - this._start_x), 1000),
            Math.min(Math.abs(this._y - this._start_y), 1000)
          ),
          300
        );

      this.goToPage(
        this._current_page.pageX + this._direction_x,
        this._current_page.pageY + this._direction_y,
        time
      );
    });
  },
  _nearestSnap: function(x, y) {
    if (!this._pages.length) {
      return { x: 0, y: 0, pageX: 0, pageY: 0 };
    }

    let pageX = 0,
      l = this._pages.length,
      pageY = 0;

    // Check if we exceeded the snap threshold
    if (
      Math.abs(x - this._abs_start_x) < this._snap_threshold_x &&
      Math.abs(y - this._abs_start_y) < this._snap_threshold_y
    ) {
      return this._current_page;
    }

    if (x > 0) {
      x = 0;
    } else if (x < this._max_scroll_x) x = this._max_scroll_x;
    if (y > 0) {
      y = 0;
    } else if (y < this._max_scroll_y) y = this._max_scroll_y;

    for (; pageX < l; pageX++) {
      if (x >= this._pages[pageX][0].cx) {
        x = this._pages[pageX][0].x;
        break;
      }
    }

    l = this._pages[pageX].length;

    for (; pageY < l; pageY++) {
      if (y >= this._pages[0][pageY].cy) {
        y = this._pages[0][pageY].y;
        break;
      }
    }

    if (pageX == this._current_page.pageX) {
      pageX += this._direction_x;

      if (pageX < 0) {
        pageX = 0;
      } else if (pageX >= this._pages.length) {
        pageX = this._pages.length - 1;
      }

      x = this._pages[pageX][0].x;
    }

    if (pageY == this._current_page.pageY) {
      pageY += this._direction_y;

      if (pageY < 0) {
        pageY = 0;
      } else if (pageY >= this._pages[0].length) {
        pageY = this._pages[0].length - 1;
      }

      y = this._pages[0][pageY].y;
    }

    return { x, y, pageX, pageY };
  },
  _execEvent: function(type) {
    if (!this._events[type]) {
      return;
    }
    for (let i = 0; i < this._events[type].length; i += 1) {
      this._events[type][i].apply(this, [].slice.call(arguments, 1));
    }
  },
  _start: function(evt) {
    const { pageX, pageY } = evt.touches ? evt.touches[0] : evt;
    let _pos;
    if (
      this._preventDefault &&
      !preventDefaultException(evt.target, this.options.preventDefaultException)
    ) {
      evt.preventDefault();
    }

    this.initiated = this._eventType[evt.type];
    this._on_move = false;
    this._dist_x = 0;
    this._dist_y = 0;
    this._direction_x = 0;
    this._direction_y = 0;
    this._direction_locked = 0;

    this._start_time = Date.now();

    if (this.options.useTransition && this._is_in_transition) {
      this._transitionTime();
      this._is_in_transition = false;
      _pos = this.getComputedPosition();

      this._translate(Math.round(_pos.x), Math.round(_pos.y));
      this._execEvent("scrollEnd");
    } else if (!this.options.useTransition && this._is_animating) {
      this._is_animating = false;
      this._execEvent("scrollEnd");
    }

    this._start_x = this._x;
    this._start_y = this._y;
    this._abs_start_x = this._x;
    this._abs_start_y = this._y;
    this._point_x = pageX;
    this._point_y = pageY;
    this._execEvent("beforeScrollStart");
  },
  _move: function(evt) {
    if (this._eventType[evt.type] !== this.initiated) {
      return;
    }

    // increases performance on Android? TODO: check!
    if (this._preventDefault) {
      evt.preventDefault();
    }

    const { pageX, pageY } = evt.touches ? evt.touches[0] : evt;
    let delta_x = pageX - this._point_x,
      delta_y = pageY - this._point_y,
      time_stamp = Date.now(),
      _x,
      _y,
      abs_dist_x,
      abs_dist_y;

    this._point_x = pageX;
    this._point_y = pageY;

    this._dist_x += delta_x;
    this._dist_y += delta_y;

    abs_dist_x = Math.abs(this._dist_x);
    abs_dist_y = Math.abs(this._dist_y);

    // We need to move at least 10 pixels for the scrolling to initiate
    if (
      time_stamp - this._end_time > 300 &&
      (abs_dist_x < 10 && abs_dist_y < 10)
    ) {
      return;
    }

    // If you are scrolling in one direction lock the other
    if (!this._direction_locked) {
      if (abs_dist_x > abs_dist_y + this.options.directionLockThreshold) {
        this._direction_locked = "h"; // lock horizontally
      } else if (
        abs_dist_y >=
        abs_dist_x + this.options.directionLockThreshold
      ) {
        this._direction_locked = "v"; // lock vertically
      } else {
        this._direction_locked = "n"; // no lock
      }
    }

    if (this._direction_locked === "h") {
      if (this.options.eventPassthrough === "vertical") {
        evt.preventDefault();
      } else if (this.options.eventPassthrough === "horizontal") {
        this.initiated = false;
        return;
      }

      delta_y = 0;
    } else if (this._direction_locked === "v") {
      if (this.options.eventPassthrough === "horizontal") {
        evt.preventDefault();
      } else if (this.options.eventPassthrough === "vertical") {
        this.initiated = false;
        return;
      }

      delta_x = 0;
    }

    delta_x = this._has_horizontal_scroll ? delta_x : 0;
    delta_y = this._has_vertical_scroll ? delta_y : 0;

    _x = this._x + delta_x;
    _y = this._y + delta_y;

    // Slow down if outside of the boundaries
    if (_x > 0 || _x < this._max_scroll_x) {
      _x = this.options.bounce
        ? this._x + delta_x / 3
        : _x > 0
        ? 0
        : this._max_scroll_x;
    }
    if (_y > 0 || _y < this._max_scroll_y) {
      _y = this.options.bounce
        ? this._y + delta_y / 3
        : _y > 0
        ? 0
        : this._max_scroll_y;
    }

    this._direction_x = delta_x > 0 ? -1 : delta_x < 0 ? 1 : 0;
    this._direction_y = delta_y > 0 ? -1 : delta_y < 0 ? 1 : 0;

    if (!this._on_move) {
      this._execEvent("scrollStart");
    }

    this._on_move = true;
    this._translate(_x, _y);

    /* REPLACE START: _move */

    if (time_stamp - this._start_time > 300) {
      this._start_time = time_stamp;
      this._start_x = this._x;
      this._start_y = this._y;
      if (this.options.probeType == 1) {
        this._execEvent("scroll");
      }
    }
    if (this.options.probeType > 1) {
      this._execEvent("scroll");
    }
  },
  _end: function(evt) {
    if (this._eventType[evt.type] !== this.initiated) {
      return;
    }
    if (
      this._preventDefault &&
      !preventDefaultException(evt.target, this.options.preventDefaultException)
    ) {
      evt.preventDefault();
    }

    let moment_x,
      moment_y,
      _duration = Date.now() - this._start_time,
      _x = Math.round(this._x),
      _y = Math.round(this._y),
      _distance_x = Math.abs(_x - this._start_x),
      _distance_y = Math.abs(_y - this._start_y),
      _time = 0,
      _easing = "";

    this._is_in_transition = 0;
    this.initiated = 0;
    this._end_time = Date.now();

    // reset if we are outside of the boundaries
    if (this.resetPosition(this.options.bounceTime)) {
      return;
    }

    // ensures that the last position is rounded
    this.scrollTo(_x, _y);

    if (!this._on_move) {
      if (this.options.tap) {
        tapEvent(evt, this.options.tap);
      }
      if (this.options.click) {
        clickEvent(evt);
      }

      this._execEvent("scrollCancel");
      return;
    }
    if (
      this._events.flick &&
      _duration < 200 &&
      _distance_x < 100 &&
      _distance_y < 100
    ) {
      this._execEvent("flick");
      return;
    }

    // start momentum animation if needed
    if (this.options.momentum && _duration < 300) {
      moment_x = this._has_horizontal_scroll
        ? Momentum(
            this._x,
            this._start_x,
            _duration,
            this._max_scroll_x,
            this.options.bounce ? this._self_width : 0,
            this.options.deceleration
          )
        : { destination: _x, duration: 0 };
      moment_y = this._has_vertical_scroll
        ? Momentum(
            this._y,
            this._start_y,
            _duration,
            this._max_scroll_y,
            this.options.bounce ? this._self_height : 0,
            this.options.deceleration
          )
        : { destination: _y, duration: 0 };
      _x = moment_x.destination;
      _y = moment_y.destination;
      _time = Math.max(moment_x.duration, moment_y.duration);
      this._is_in_transition = 1;
    }

    if (this.options.snap) {
      const snap = this._nearestSnap(_x, _y);
      this._current_page = snap;
      _time =
        this.options.snapSpeed ||
        Math.max(
          Math.max(
            Math.min(Math.abs(_x - snap.x), 1000),
            Math.min(Math.abs(_y - snap.y), 1000)
          ),
          300
        );
      _x = snap.x;
      _y = snap.y;

      this._direction_x = 0;
      this._direction_y = 0;
      _easing = this.options.bounceEasing;
    }

    if (_x != this._x || _y != this._y) {
      // change easing function when scroller goes out of the boundaries
      if (
        _x > 0 ||
        _x < this._max_scroll_x ||
        _y > 0 ||
        _y < this._max_scroll_y
      ) {
        _easing = ease.quadratic;
      }

      this.scrollTo(_x, _y, _time, _easing);
      return;
    }

    this._execEvent("scrollEnd");
  },
  _resize: function() {
    const self = this;
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(function() {
      self.refresh();
    }, this.options.resizePolling);
  },
  _transitionTime: function(time) {
    if (!this.options.useTransition) {
      return;
    }

    time = time || 0;
    this.bodyStyleCache.transitionDuration = time + "ms";

    if (!time) {
      this.bodyStyleCache.transitionDuration = "0.0001ms";
      // remove 0.0001ms
      const self = this;
      rAF(function() {
        if (self.bodyStyleCache.transitionDuration === "0.0001ms") {
          self.bodyStyleCache.transitionDuration = "0s";
        }
      });
    }

    // todo scrollbar
    if (this.scrollbar) {
      for (let i = this.scrollbar.length; (i -= 1); ) {
        this.scrollbar[i].transitionTime(time);
      }
    }
  },
  _transitionTimingFunction: function(easing) {
    this.bodyStyleCache.transitionTimingFunction = easing;

    if (this.scrollbar) {
      for (var i = this.scrollbar.length; i--; ) {
        this.scrollbar[i].transitionTimingFunction(easing);
      }
    }
  },
  _animate: function(x, y, duration = 0, easingFn) {

    const _this = this,
      start_x = this._x,
      start_y = this._y,
      start_time = Date.now(),
      dest_time = start_time + duration;

    function step() {
      let _now = Date.now(),
        _x,
        _y,
        _easing;

      if (_now >= dest_time) {
        _this._is_animating = false;
        _this._translate(x, y);

        if (!_this.resetPosition(_this.options.bounceTime)) {
          _this._execEvent("scrollEnd");
        }
        return;
      }

      _now = (_now - start_time) / duration;
      _easing = easingFn(_now);
      console.log('animate', _easing, _now)
      _x = (x - start_x) * _easing + start_x;
      _y = (y - start_y) * _easing + start_y;
      _this._translate(_x, _y);

      if (_this._is_animating) {
        rAF(step);
      }
      if (_this.options.probeType == 3) {
        _this._execEvent("scroll");
      }
    }

    this._is_animating = true;
    step();
  },
  _translate: function(x, y) {
    if (this.options.useTransform) {
      this.bodyStyleCache.transform = `translate(${x}px, ${y}px) translateZ(0)`;
    } else {
      x = Math.round(x);
      y = Math.round(y);
      this.bodyStyleCache.left = x + "px";
      this.bodyStyleCache.top = y + "px";
    }

    this._x = x;
    this._y = y;
    // todo set scrollbar
  },
  _transitionEnd: function(evt) {
    if (evt.target !== this.body || !this._is_in_transition) {
      return;
    }

    this._transitionTime();
    if (!this.resetPosition(this.options.bounceTime)) {
      this._is_in_transition = false;
      this._execEvent("scrollEnd");
    }
  }
};
