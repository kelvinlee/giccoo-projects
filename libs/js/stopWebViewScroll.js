"use strict";

var stopWebViewScroll;

stopWebViewScroll = function stopWebViewScroll() {
  var el, i, len, overscroll, ref, results;
  overscroll = function overscroll(el) {
    el.addEventListener('touchstart', function () {
      var currentScroll, top, totalScroll;
      top = el.scrollTop;
      totalScroll = el.scrollHeight;
      currentScroll = top + el.offsetHeight;
      if (top === 0) {
        return el.scrollTop = 1;
      } else if (currentScroll === totalScroll) {
        return el.scrollTop = top - 1;
      }
    });
    // alert el.scrollTop
    return el.addEventListener("touchmove", function (evt) {
      if (el.offsetHeight < el.scrollHeight) {
        return evt._isScroller = true;
      }
    });
  };
  document.addEventListener("touchmove", function (evt) {
    if (!evt._isScroller) {
      return evt.preventDefault();
    }
  });
  ref = document.querySelectorAll(".touch");
  // console.log document.querySelectorAll(".touch")
  results = [];
  for (i = 0, len = ref.length; i < len; i++) {
    el = ref[i];
    results.push(overscroll(el));
  }
  return results;
};
