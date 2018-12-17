export function tapEvent(e, eventName) {
  const ev = document.createEvent("Event");
  ev.initEvent(eventName, true, true);
  ev.pageX = e.pageX;
  ev.pageY = e.pageY;
  e.target.dispatchEvent(ev);
}

export function clickEvent(e) {
  let target = e.target,
    ev;

  if (!/(SELECT|INPUT|TEXTAREA)/i.test(target.tagName)) {
    // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/initMouseEvent
    // initMouseEvent is deprecated.
    ev = document.createEvent(window.MouseEvent ? "MouseEvents" : "Event");
    ev.initEvent("click", true, true);
    ev.view = e.view || window;
    ev.detail = 1;
    ev.screenX = target.screenX || 0;
    ev.screenY = target.screenY || 0;
    ev.clientX = target.clientX || 0;
    ev.clientY = target.clientY || 0;
    ev.ctrlKey = !!e.ctrlKey;
    ev.altKey = !!e.altKey;
    ev.shiftKey = !!e.shiftKey;
    ev.metaKey = !!e.metaKey;
    ev.button = 0;
    ev.relatedTarget = null;
    ev._constructed = true;
    target.dispatchEvent(ev);
  }
}
