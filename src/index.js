/**
 * @author Allen Liu
 * @desc A flexible mobile page adaptation scheme based on lib-flexible.
 */
(function strongRem(window, document) {
    var docEl = document.documentElement;
    var isIPhone = window.navigator.appVersion.match(/iphone/gi);
    var dpr = isIPhone ? window.devicePixelRatio : 1;
    //adjust html real font size
    function setRealFontSize () {
        if (!isIPhone) {
            var tmpBody = document.createElement('body');
            var div = document.createElement('div');
            div.style.width = '10rem';
            tmpBody.appendChild(div);
            docEl.appendChild(tmpBody);
            var realWidth = parseFloat(window.getComputedStyle(div).width);
            var clientWidth = docEl.clientWidth;
            //if the real width of 10rem is larger than the width of the current device, fontSize is scaled on the root element of the page
            if (realWidth > clientWidth) {
                var ratio = realWidth / clientWidth;
                var realFontSize = (clientWidth/(10*ratio)).toFixed(4);
                docEl.style.fontSize = realFontSize + 'px';
            }
            docEl.removeChild(tmpBody);
        }
    }
    //adjust body font size
    function setBodyFontSize () {
        if (document.body) {
            document.body.style.fontSize = (12 * dpr) + 'px';
        } else {
            document.addEventListener('DOMContentLoaded', setBodyFontSize);
        }
    }
    //set 1rem = viewWidth / 10
    function setRemUnit () {
        var width = docEl.clientWidth;
        if (width / dpr > 540) {
            width = 540 * dpr;
        }
        var rem = width / 10;
        docEl.style.fontSize = rem + 'px';
        setRealFontSize();
    }
    setBodyFontSize();
    setRemUnit();
    //reset rem unit on page resize
    window.addEventListener('resize', setRemUnit)
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            setTimeout(function(){
                setRemUnit();
            }, 10)
        }
    })
    //detect 0.5px supports
    if (dpr >= 2) {
        var fakeBody = document.createElement('body');
        var testElement = document.createElement('div');
        testElement.style.border = '.5px solid transparent';
        fakeBody.appendChild(testElement);
        docEl.appendChild(fakeBody);
        //you can use global variable "supportHairlines" to validate the compatibility of 0.5px in cssinjs mode
        window.supportHairlines = false;
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines');
            window.supportHairlines = true;
        }
        docEl.removeChild(fakeBody);
    }
}(window, document))
