var PageWidth = 640;
var lastW;

function __resize() {
   console.log('__resize');
    var w = Math.min(window.innerWidth, document.body.clientWidth);
    var h = Math.min(window.innerHeight, document.body.clientHeight);

    if (lastW == w){
        return
    };
    lastW = w;

    var _fontsize = w / PageWidth * 100;
    // $("html").css("font-size", fontsize);
    document.getElementsByTagName('html')[0].style.fontSize = _fontsize;
    var realFontsize = parseFloat(document.getElementsByTagName('html')[0].style.fontSize);
    if (_fontsize != realFontsize) {
        _fontsize *= _fontsize / realFontsize;
        // $("html").css("font-size", fontsize);
        document.getElementsByTagName('html')[0].style.fontSize = _fontsize;
    }
    window.FontSize = _fontsize;
}

    window.onresize = function () {
        __resize();
        setTimeout(__resize, 300);
    }
    window.onresize();
//使用rem代替px
// $(window).on("resize", function () {
//     __resize();
//     setTimeout(__resize, 300);
// });
// $(window).resize();