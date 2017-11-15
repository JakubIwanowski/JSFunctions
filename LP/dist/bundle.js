/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener('DOMContentLoaded', function () {
 var images = $('.gallery-element');
  var next = $('.arrow-next');
  var prev = $('.arrow-prev');
  var count = 1;


$(images[0]).clone().insertAfter($(images[images.length -1])).removeClass('active');
$(images[images.length -1]).clone().insertBefore($(images[0]));
images = $('.gallery-element');
$(images[0]).css({marginLeft: '-100%'});
  next.click(function () {
    $('.active').first().animate({ marginLeft: '-100%' }).removeClass('active').next('.gallery-element').addClass('active');
    if (count == 1) {
      $(images[images.length - 1]).css('marginLeft', '0px');
    }
    count = count + 1;
    if (count == images.length - 1) {
      count = 1;

        $(images[images.length - 1]).removeClass('active');
        $(images[1]).addClass('active');
        setTimeout(() => {
      images.css('marginLeft', '0px');
    $(images[0]).css({marginLeft: '-100%'});

  },400);
    }

    console.log(count);
  });
  prev.click(function () {

    $('.active').removeClass('active').prev('.gallery-element').animate({ marginLeft: '0%' }).addClass('active');
    count = count - 1;
    if (count < 1) {
      count = images.length - 2;

      $(images).removeClass('active');
      $(images[images.length - 2]).addClass('active');
      setTimeout(() => {
    images.css('marginLeft', '-100%' );
    $(images[0]).css({marginLeft: '-100%'});
    $(images[images.length - 1]).css({marginLeft: '0px'});
    $(images[images.length - 2]).css({marginLeft: '0px'});


},500);
    }
    console.log(count);
  });
  setInterval(function () {
    $('.active').first().animate({ marginLeft: '-101%' }).removeClass('active').next('.gallery-element').addClass('active');
    count = count + 1;
    if (count == 1) {
      $(images[images.length - 1]).css('marginLeft', '0px');
    }
    if (count == images.length - 1) {
      count = 1;

        $(images[images.length - 1]).removeClass('active');
        $(images[1]).addClass('active');
        setTimeout(() => {
      images.css('marginLeft', '0px');
    $(images[0]).css({marginLeft: '-100%'});

  },400);
}
  }, 5000);

  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]').not('[href="#0"]').click(function (event) {
    // On-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
