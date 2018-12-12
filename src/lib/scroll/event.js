export function addEvent(el, type, fn, capture) {
  el.addEventListener(type, fn, !!capture);
}

export function removeEvent(el, type, fn, capture) {
  el.removeEventListener(type, fn, !!capture);
}

export function tapEvent(e, eventName) {
  const ev = document.createEvent("Event");
  ev.initEvent(eventName, true, true);
  ev.pageX = e.pageX;
  ev.pageY = e.pageY;
  e.target.dispatchEvent(ev);
}

export function clickEvent(e) {
  const target = e.target;
  let ev;

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

export function getTouchEventByDirection(eventPassthrough, addPinch) {
  let touchAction = "none";
  if (eventPassthrough === "vertical") {
    touchAction = "pan-y";
  } else if (eventPassthrough === "horizontal") {
    touchAction = "pan-x";
  }
  if (addPinch && touchAction != "none") {
    // add pinch-zoom support if the browser supports it, but if not (eg. Chrome <55) do nothing
    touchAction += " pinch-zoom";
  }
  return touchAction;
}
