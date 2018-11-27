(function() {
  var is_ios = navigator.appVersion.match(/(iphone|ipad|ipod)/gi),
    adr_v = navigator.userAgent.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),
    v_p =
      document.getElementsByName("viewport")[0] ||
      (function() {
        var vpDom = document.createElement("meta");
        vpDom.setAttribute("name", "viewport");
        document.head.appendChild(vpDom);
        return vpDom;
      })();
  var dpr = !is_ios && adr_v[1] > 534 ? 1 : window.devicePixelRatio;
  var r = 1 / dpr,
    f_s = parseInt(getComputedStyle(document.body).fontSize) * dpr;
  document
    .getElementsByTagName("html")[0]
    .setAttribute("style", "font-size:" + f_s + "px");
  v_p.setAttribute(
    "content",
    "width=device-width, initial-scale=" +
      r +
      ", maximum-scale=" +
      r +
      ", minimum-scale=" +
      r +
      ", user-scalable=no"
  );
  v_p = null;
})();
