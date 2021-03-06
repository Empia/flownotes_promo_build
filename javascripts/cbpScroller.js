/**
 * cbpScroller.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
!function(t){"use strict";function e(){var e=c.clientHeight,i=t.innerHeight;return i>e?i:e}function i(){return t.pageYOffset||c.scrollTop}function o(t){var e=0,i=0;do isNaN(t.offsetTop)||(e+=t.offsetTop),isNaN(t.offsetLeft)||(i+=t.offsetLeft);while(t=t.offsetParent);return{top:e,left:i}}function n(t,n){var s=t.offsetHeight,r=i(),c=r+e(),l=o(t).top,a=l+s,n=n||0;return c>=l+s*n&&a>=r}function s(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}function r(t,e){this.el=t,this.options=s(this.defaults,e),this._init()}var c=t.document.documentElement;r.prototype={defaults:{viewportFactor:.2},_init:function(){if(!Modernizr.touch){this.sections=Array.prototype.slice.call(this.el.querySelectorAll(".cbp-so-section")),this.didScroll=!1;var e=this;this.sections.forEach(function(t){n(t)||classie.add(t,"cbp-so-init")});var i=function(){e.didScroll||(e.didScroll=!0,setTimeout(function(){e._scrollPage()},60))},o=function(){function t(){e._scrollPage(),e.resizeTimeout=null}e.resizeTimeout&&clearTimeout(e.resizeTimeout),e.resizeTimeout=setTimeout(t,200)};t.addEventListener("scroll",i,!1),t.addEventListener("resize",o,!1)}},_scrollPage:function(){var t=this;this.sections.forEach(function(e){n(e,t.options.viewportFactor)?classie.add(e,"cbp-so-animate"):(classie.add(e,"cbp-so-init"),classie.remove(e,"cbp-so-animate"))}),this.didScroll=!1}},t.cbpScroller=r}(window);