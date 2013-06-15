/*
 * BZ Studio v1.0 - Plugins JavaScript
 *
 * This file is part of BZ Studio, a HTML template build for sale at ThemeForest.
 * For questions, suggestions or support request, please mail me at maimairel@yahoo.com
 *
 * Development Started:
 * February 13, 2013
 *
 */

// Sticky Plugin v1.0.0 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 2/14/2011
// Date: 2/12/2012
// Website: http://labs.anthonygarand.com/sticky
// Description: Makes an element on the page stick on the screen as you scroll
//       It will only set the 'top' and 'position' of your element, you
//       might need to adjust the width in some cases.
(function(d){var p={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:""},k=d(window),q=d(document),g=[],m=k.height(),j=function(){for(var a=k.scrollTop(),c=q.height(),h=c-m,h=a>h?h-a:0,f=0;f<g.length;f++){var b=g[f],e=b.stickyWrapper.offset().top-b.topSpacing-h;a<=e?null!==b.currentTop&&(b.stickyElement.css("position","").css("top",""),b.stickyElement.parent().removeClass(b.className),b.currentTop=null):(e=c-b.stickyElement.outerHeight()-
b.topSpacing-b.bottomSpacing-a-h,e=0>e?e+b.topSpacing:b.topSpacing,b.currentTop!=e&&(b.stickyElement.css("position","fixed").css("top",e),"undefined"!==typeof b.getWidthFrom&&b.stickyElement.css("width",d(b.getWidthFrom).width()),b.stickyElement.parent().addClass(b.className),b.currentTop=e))}},n=function(){m=k.height();for(var a=0;a<g.length;a++){var c=g[a];c.stickyWrapper.css("height",c.stickyElement.outerHeight())}},l={init:function(a){var c=d.extend(p,a);return this.each(function(){var a=d(this);
stickyId=a.attr("id");wrapper=d("<div></div>").attr("id",stickyId+"-sticky-wrapper").addClass(c.wrapperClassName);a.wrapAll(wrapper);c.center&&a.parent().css({width:a.outerWidth(),marginLeft:"auto",marginRight:"auto"});"right"==a.css("float")&&a.css({"float":"none"}).parent().css({"float":"right"});var f=a.parent();f.css("height",a.outerHeight());g.push({topSpacing:c.topSpacing,bottomSpacing:c.bottomSpacing,stickyElement:a,currentTop:null,stickyWrapper:f,className:c.className,getWidthFrom:c.getWidthFrom})})},
update:j};window.addEventListener?(window.addEventListener("scroll",j,!1),window.addEventListener("resize",n,!1)):window.attachEvent&&(window.attachEvent("onscroll",j),window.attachEvent("onresize",n));d.fn.sticky=function(a){if(l[a])return l[a].apply(this,Array.prototype.slice.call(arguments,1));if("object"===typeof a||!a)return l.init.apply(this,arguments);d.error("Method "+a+" does not exist on jQuery.sticky")};d(function(){setTimeout(j,0)})})(jQuery);

/*
 * smartresize: special jQuery event that happens once after a window resize
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery-smartresize
 *
 * Copyright 2012 @louis_remi
 * Licensed under the MIT license.
 *
 * This saved you an hour of work? 
 * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
 */
;(function(a){var d=a.event,b,c;b=d.special.smartresize={setup:function(){a(this).on("resize",b.handler)},teardown:function(){a(this).off("resize",b.handler)},handler:function(a,f){var g=this,h=arguments,e=function(){a.type="smartresize";d.dispatch.apply(g,h)};c&&clearTimeout(c);f?e():c=setTimeout(e,b.threshold)},threshold:150}})(jQuery);

/*!
 * jQuery imagesLoaded plugin v2.1.1
 * http://github.com/desandro/imagesloaded
 *
 * MIT License. by Paul Irish et al.
 */
;(function(c,q){var m="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";c.fn.imagesLoaded=function(f){function n(){var b=c(j),a=c(h);d&&(h.length?d.reject(e,b,a):d.resolve(e));c.isFunction(f)&&f.call(g,e,b,a)}function p(b){k(b.target,"error"===b.type)}function k(b,a){b.src===m||-1!==c.inArray(b,l)||(l.push(b),a?h.push(b):j.push(b),c.data(b,"imagesLoaded",{isBroken:a,src:b.src}),r&&d.notifyWith(c(b),[a,e,c(j),c(h)]),e.length===l.length&&(setTimeout(n),e.unbind(".imagesLoaded",
p)))}var g=this,d=c.isFunction(c.Deferred)?c.Deferred():0,r=c.isFunction(d.notify),e=g.find("img").add(g.filter("img")),l=[],j=[],h=[];c.isPlainObject(f)&&c.each(f,function(b,a){if("callback"===b)f=a;else if(d)d[b](a)});e.length?e.bind("load.imagesLoaded error.imagesLoaded",p).each(function(b,a){var d=a.src,e=c.data(a,"imagesLoaded");if(e&&e.src===d)k(a,e.isBroken);else if(a.complete&&a.naturalWidth!==q)k(a,0===a.naturalWidth||0===a.naturalHeight);else if(a.readyState||a.complete)a.src=m,a.src=d}):
n();return d?d.promise(g):g}})(jQuery);

/*! http://tinynav.viljamis.com v1.1 by @viljamis */
(function(a,i,g){a.fn.tinyNav=function(j){var b=a.extend({active:"selected",header:"",label:""},j);return this.each(function(){g++;var h=a(this),d="tinynav"+g,f=".l_"+d,e=a("<select/>").attr("id",d).addClass("tinynav "+d);if(h.is("ul,ol")){""!==b.header&&e.append(a("<option/>").text(b.header));var c="";h.addClass("l_"+d).find("a").each(function(){c+='<option value="'+a(this).attr("href")+'">';var b;for(b=0;b<a(this).parents("ul, ol").length-1;b++)c+="- ";c+=a(this).text()+"</option>"});e.append(c);
b.header||e.find(":eq("+a(f+" li").index(a(f+" li."+b.active))+")").attr("selected",!0);e.change(function(){i.location.href=a(this).val()});a(f).after(e);b.label&&e.before(a("<label/>").attr("for",d).addClass("tinynav_label "+d+"_label").append(b.label))}})}})(jQuery,this,0);

// jQuery OmniWindow plugin
// @version:  0.7.0
// @author:   Rudenka Alexander (mur.mailbox@gmail.com)
// @license:  MIT
;(function(d){d.fn.extend({omniWindow:function(b){b=d.extend(!0,{animationsPriority:{show:["overlay","modal"],hide:["modal","overlay"]},overlay:{selector:".ow-overlay",hideClass:"ow-closed",animations:{show:function(a,b){return b(a)},hide:function(a,b){return b(a)},internal:{show:function(a){a.overlay.removeClass(b.overlay.hideClass)},hide:function(a){a.overlay.addClass(b.overlay.hideClass)}}}},modal:{hideClass:"ow-closed",animations:{show:function(a,b){return b(a)},hide:function(a,b){return b(a)},
internal:{show:function(a){a.modal.removeClass(b.modal.hideClass)},hide:function(a){a.modal.addClass(b.modal.hideClass)}}},internal:{stateAttribute:"ow-active"}},eventsNames:{show:"show.ow",hide:"hide.ow",internal:{overlayClick:"click.ow",keyboardKeyUp:"keyup.ow"}},callbacks:{beforeShow:function(a,b){return b(a)},positioning:function(a,b){return b(a)},afterShow:function(a,b){return b(a)},beforeHide:function(a,b){return b(a)},afterHide:function(a,b){return b(a)},internal:{beforeShow:function(a){if(a.modal.data(b.modal.internal.stateAttribute))return!1;
a.modal.data(b.modal.internal.stateAttribute,!0);return!0},afterShow:function(a){d(document).on(b.eventsNames.internal.keyboardKeyUp,function(c){27===c.keyCode&&a.modal.trigger(b.eventsNames.hide)});a.overlay.on(b.eventsNames.internal.overlayClick,function(){a.modal.trigger(b.eventsNames.hide)})},positioning:function(a){a.modal.css("margin-left",Math.round(a.modal.outerWidth()/-2))},beforeHide:function(a){return a.modal.data(b.modal.internal.stateAttribute)?(a.modal.data(b.modal.internal.stateAttribute,
!1),!0):!1},afterHide:function(a){a.overlay.off(b.eventsNames.internal.overlayClick);d(document).off(b.eventsNames.internal.keyboardKeyUp);a.overlay.css("display","");a.modal.css("display","")}}}},b);var e=function(a,c,d){var e=b.animationsPriority[a][0],g=b.animationsPriority[a][1];b[e].animations[a](c,function(f){b[e].animations.internal[a](f);b[g].animations[a](c,function(e){b[g].animations.internal[a](e);b.callbacks[d](c,b.callbacks.internal[d])})})},f=d(b.overlay.selector);return this.each(function(){var a=
d(this),c={modal:a,overlay:f};a.bind(b.eventsNames.show,function(){b.callbacks.beforeShow(c,b.callbacks.internal.beforeShow)&&(b.callbacks.positioning(c,b.callbacks.internal.positioning),e("show",c,"afterShow"))}).bind(b.eventsNames.hide,function(){b.callbacks.beforeHide(c,b.callbacks.internal.beforeHide)&&e("hide",c,"afterHide")})})}})})(jQuery);

//fgnass.github.com/spin.js#v1.2.8
!function(D,y,h){function q(b,a){var c=y.createElement(b||"div"),d;for(d in a)c[d]=a[d];return c}function k(b){for(var a=1,c=arguments.length;a<c;a++)b.appendChild(arguments[a]);return b}function w(b,a){var c=b.style,d,e;if(c[a]!==h)return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(e=0;e<z.length;e++)if(d=z[e]+a,c[d]!==h)return d}function l(b,a){for(var c in a)b.style[w(b,c)||c]=a[c];return b}function A(b){for(var a=1;a<arguments.length;a++){var c=arguments[a],d;for(d in c)b[d]===h&&(b[d]=c[d])}return b}
function B(b){for(var a={x:b.offsetLeft,y:b.offsetTop};b=b.offsetParent;)a.x+=b.offsetLeft,a.y+=b.offsetTop;return a}function f(b){if(!this.spin)return new f(b);this.opts=A(b||{},f.defaults,E)}var z=["webkit","Moz","ms","O"],C={},s,u,m=q("style",{type:"text/css"});k(y.getElementsByTagName("head")[0],m);u=m.sheet||m.styleSheet;var E={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",speed:1,trail:100,opacity:0.25,fps:20,zIndex:2E9,className:"spinner",top:"auto",left:"auto",position:"relative"};
f.defaults={};A(f.prototype,{spin:function(b){this.stop();var a=this,c=a.opts,d=a.el=l(q(0,{className:c.className}),{position:c.position,width:0,zIndex:c.zIndex}),e=c.radius+c.length+c.width,x,g;b&&(b.insertBefore(d,b.firstChild||null),g=B(b),x=B(d),l(d,{left:("auto"==c.left?g.x-x.x+(b.offsetWidth>>1):parseInt(c.left,10)+e)+"px",top:("auto"==c.top?g.y-x.y+(b.offsetHeight>>1):parseInt(c.top,10)+e)+"px"}));d.setAttribute("aria-role","progressbar");a.lines(d,a.opts);if(!s){var k=0,j=c.fps,p=j/c.speed,
n=(1-c.opacity)/(p*c.trail/100),f=p/c.lines;(function r(){k++;for(var b=c.lines;b;b--){var e=Math.max(1-(k+b*f)%p*n,c.opacity);a.opacity(d,c.lines-b,e,c)}a.timeout=a.el&&setTimeout(r,~~(1E3/j))})()}return a},stop:function(){var b=this.el;b&&(clearTimeout(this.timeout),b.parentNode&&b.parentNode.removeChild(b),this.el=h);return this},lines:function(b,a){function c(b,c){return l(q(),{position:"absolute",width:a.length+a.width+"px",height:a.width+"px",background:b,boxShadow:c,transformOrigin:"left",
transform:"rotate("+~~(360/a.lines*d+a.rotate)+"deg) translate("+a.radius+"px,0)",borderRadius:(a.corners*a.width>>1)+"px"})}for(var d=0,e;d<a.lines;d++){e=q();var f=1+~(a.width/2)+"px",g=a.hwaccel?"translate3d(0,0,0)":"",m=a.opacity,j;if(j=s){j=a.opacity;var p=a.trail,n=d,t=a.lines,h=["opacity",p,~~(100*j),n,t].join("-"),n=0.01+100*(n/t),t=Math.max(1-(1-j)/p*(100-n),j),r=s.substring(0,s.indexOf("Animation")).toLowerCase(),r=r&&"-"+r+"-"||"";C[h]||(u.insertRule("@"+r+"keyframes "+h+"{0%{opacity:"+
t+"}"+n+"%{opacity:"+j+"}"+(n+0.01)+"%{opacity:1}"+(n+p)%100+"%{opacity:"+j+"}100%{opacity:"+t+"}}",u.cssRules.length),C[h]=1);j=h+" "+1/a.speed+"s linear infinite"}e=l(e,{position:"absolute",top:f,transform:g,opacity:m,animation:j});a.shadow&&k(e,l(c("#000","0 0 4px #000"),{top:"2px"}));k(b,k(e,c(a.color,"0 0 1px rgba(0,0,0,.1)")))}return b},opacity:function(b,a,c){a<b.childNodes.length&&(b.childNodes[a].style.opacity=c)}});var v=function(b,a){return q("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',
a)},m=l(q("group"),{behavior:"url(#default#VML)"});!w(m,"transform")&&m.adj?(u.addRule(".spin-vml","behavior:url(#default#VML)"),f.prototype.lines=function(b,a){function c(){return l(v("group",{coordsize:f+" "+f,coordorigin:-e+" "+-e}),{width:f,height:f})}function d(b,d,f){k(h,k(l(c(),{rotation:360/a.lines*b+"deg",left:~~d}),k(l(v("roundrect",{arcsize:a.corners}),{width:e,height:a.width,left:a.radius,top:-a.width>>1,filter:f}),v("fill",{color:a.color,opacity:a.opacity}),v("stroke",{opacity:0}))))}
var e=a.length+a.width,f=2*e,g=2*-(a.width+a.length)+"px",h=l(c(),{position:"absolute",top:g,left:g});if(a.shadow)for(g=1;g<=a.lines;g++)d(g,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(g=1;g<=a.lines;g++)d(g);return k(b,h)},f.prototype.opacity=function(b,a,c,d){b=b.firstChild;d=d.shadow&&d.lines||0;if(b&&a+d<b.childNodes.length&&(b=(b=(b=b.childNodes[a+d])&&b.firstChild)&&b.firstChild))b.opacity=c}):s=w(m,"animation");"function"==typeof define&&define.amd?
define(function(){return f}):D.Spinner=f}(window,document);

/**
* Bootstrap.js by @fat & @mdo
* plugins: bootstrap-dropdown.js, bootstrap-scrollspy.js
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(b){function h(){b(a).each(function(){f(b(this)).removeClass("open")})}function f(a){var c=a.attr("data-target");c||(c=(c=a.attr("href"))&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));c=c&&b(c);if(!c||!c.length)c=a.parent();return c}var a="[data-toggle=dropdown]",d=function(a){var c=b(a).on("click.dropdown.data-api",this.toggle);b("html").on("click.dropdown.data-api",function(){c.parent().removeClass("open")})};d.prototype={constructor:d,toggle:function(){var a=b(this),c,d;if(!a.is(".disabled, :disabled"))return c=
f(a),d=c.hasClass("open"),h(),d||c.toggleClass("open"),a.focus(),!1},keydown:function(d){var c,e,g;if(/(38|40|27)/.test(d.keyCode)&&(c=b(this),d.preventDefault(),d.stopPropagation(),!c.is(".disabled, :disabled"))){e=f(c);g=e.hasClass("open");if(!g||g&&27==d.keyCode)return 27==d.which&&e.find(a).focus(),c.click();c=b("[role=menu] li:not(.divider):visible a",e);c.length&&(e=c.index(c.filter(":focus")),38==d.keyCode&&0<e&&e--,40==d.keyCode&&e<c.length-1&&e++,~e||(e=0),c.eq(e).focus())}}};var g=b.fn.dropdown;
b.fn.dropdown=function(a){return this.each(function(){var c=b(this),e=c.data("dropdown");e||c.data("dropdown",e=new d(this));"string"==typeof a&&e[a].call(c)})};b.fn.dropdown.Constructor=d;b.fn.dropdown.noConflict=function(){b.fn.dropdown=g;return this};b(document).on("click.dropdown.data-api",h).on("click.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.dropdown-menu",function(a){a.stopPropagation()}).on("click.dropdown.data-api",a,d.prototype.toggle).on("keydown.dropdown.data-api",
a+", [role=menu]",d.prototype.keydown)}(window.jQuery);
!function(b){function h(a,d){var g=b.proxy(this.process,this),f=b(a).is("body")?b(window):b(a),c;this.options=b.extend({},b.fn.scrollspy.defaults,d);this.$scrollElement=f.on("scroll.scroll-spy.data-api",g);this.selector=(this.options.target||(c=b(a).attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a";this.$body=b("body");this.refresh();this.process()}h.prototype={constructor:h,refresh:function(){var a=this;this.offsets=b([]);this.targets=b([]);this.$body.find(this.selector).map(function(){var d=
b(this),d=d.data("target")||d.attr("href"),g=/^#\w/.test(d)&&b(d);return g&&g.length&&[[g.position().top+(!b.isWindow(a.$scrollElement.get(0))&&a.$scrollElement.scrollTop()),d]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){a.offsets.push(this[0]);a.targets.push(this[1])})},process:function(){var a=document.body,b=document.documentElement,g=this.$scrollElement.scrollTop()+this.options.offset,a=Math.max(a.scrollHeight,a.offsetHeight,b.clientHeight,b.scrollHeight,b.offsetHeight)-this.$scrollElement.height(),
b=this.offsets,f=this.targets,c=this.activeTarget,e;if(g>=a)return c!=(e=f.last()[0])&&this.activate(e);for(e=b.length;e--;)c!=f[e]&&g>=b[e]&&(!b[e+1]||g<=b[e+1])&&this.activate(f[e])},activate:function(a){this.activeTarget=a;b(this.selector).parent(".active").removeClass("active");a=b(this.selector+'[data-target="'+a+'"],'+this.selector+'[href="'+a+'"]').parent("li").addClass("active");a.parent(".dropdown-menu").length&&(a=a.closest("li.dropdown").addClass("active"));a.trigger("activate")}};var f=
b.fn.scrollspy;b.fn.scrollspy=function(a){return this.each(function(){var d=b(this),g=d.data("scrollspy"),f="object"==typeof a&&a;g||d.data("scrollspy",g=new h(this,f));if("string"==typeof a)g[a]()})};b.fn.scrollspy.Constructor=h;b.fn.scrollspy.defaults={offset:10};b.fn.scrollspy.noConflict=function(){b.fn.scrollspy=f;return this};b(window).on("load",function(){b('[data-spy="scroll"]').each(function(){var a=b(this);a.scrollspy(a.data())})})}(window.jQuery);