import getRect, { getOffset } from "./scroll/rect";
import { addEvent, removeEvent } from "./scroll/event";

export default function ScrollExtra(el, options) {
  this.$el = el;
  this.$children = this.$el.children[0];
  this.width = this.$el.clientWidth;
  this.height = this.$el.clientHeight;
  this.options = {
    ...options
  };
  this._init_();
}

ScrollExtra.prototype._init_ = function() {
  this._attchEvent();
};
ScrollExtra.prototype._attchEvent = function(status = true) {
  const pathEvent = status ? addEvent : removeEvent;
  if (window.PointerEvent) {
    pathEvent(this.$el, "pointerdown", this);
    pathEvent(this.$el, "pointermove", this);
    pathEvent(this.$el, "pointercancel", this);
    pathEvent(this.$el, "pointerup", this);
  } else {
    pathEvent(this.$el, "touchstart", this);
    pathEvent(this.$el, "touchmove", this);
    pathEvent(this.$el, "touchcancel", this);
    pathEvent(this.$el, "touchend", this);
  }
  pathEvent(this.$el, "scroll", this);
};
ScrollExtra.prototype.handleEvent = function(e) {
  switch (e.type) {
    case "scroll":
      this._scroll(e);
      break;
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
};
ScrollExtra.prototype._move = function(evt) {
  const { pageX, pageY } = evt.touches ? evt.touches[0] : evt;
  console.log(pageY, this.$children.scrollTop);
};
ScrollExtra.prototype._scroll = function(evt) {
  const scrollTop = Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop
  );
  console.log(scrollTop);
};
