/**
* @file
* Javascript, modifications of DOM.
*
* Manipulates links to include jquery load funciton
*/

(function ($) {
  Drupal.behaviors.parallax_bg = {
    attach: function (context, settings) {
      var triggers = Drupal.settings.parallax_bg.triggers_fieldset;
      //.parallax(xPosition, speedFactor, outerHeight) options:
      //xPosition - Horizontal position of the element
      //inertia - speed to move relative to vertical scroll. 
      //Example: 0.1 is one tenth the speed of scrolling, 2 is twice the
      //speed of scrolling
      //outerHeight (true/false) - Whether or not jQuery should use it's 
      //outerHeight option to determine when a section is in the     viewport
      $.each(triggers, function(key, trigger) {
        $(trigger.element).parallax(trigger.position, parseFloat(trigger.speed));
      });
    }
  };  

}(jQuery));
;
/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);;
/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

(function( $ ){
	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});

	$.fn.parallax = function(xpos, speedFactor, outerHeight) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;
		
		//get the starting position of each element to have parallax applied to it		
		$this.each(function(){
		    firstTop = $this.offset().top;
		});

		if (outerHeight) {
			getHeight = function(jqo) {
				return jqo.outerHeight(true);
			};
		} else {
			getHeight = function(jqo) {
				return jqo.height();
			};
		}
			
		// setup defaults if arguments aren't specified
		if (arguments.length < 1 || xpos === null) xpos = "50%";
		if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
		if (arguments.length < 3 || outerHeight === null) outerHeight = true;
		
		// function to be called whenever the window is scrolled or resized
		function update(){
			var pos = $window.scrollTop();				

			$this.each(function(){
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);

				// Check if totally above or totally below viewport
				if (top + height < pos || top > pos + windowHeight) {
					return;
				}

				$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
			});
		}		

		$window.bind('scroll', update).resize(update);
		update();
	};
})(jQuery);
;
/*!
 * jQuery meanMenu v2.0.6 (Drupal Responsive Menus version)
 * @Copyright (C) 2012-2013 Chris Wharton (https://github.com/weare2ndfloor/meanMenu)
 *
 */
(function(e){"use strict";e.fn.meanmenu=function(t){var n={meanMenuTarget:jQuery(this),meanMenuContainer:"body",meanMenuClose:"X",meanMenuCloseSize:"18px",meanMenuOpen:"<span /><span /><span />",meanRevealPosition:"right",meanRevealPositionDistance:"0",meanRevealColour:"",meanRevealHoverColour:"",meanScreenWidth:"480",meanNavPush:"",meanShowChildren:true,meanExpandableChildren:true,meanExpand:"+",meanContract:"-",meanRemoveAttrs:false,onePage:false,removeElements:""};var t=e.extend(n,t);var r=document.documentElement.clientWidth||document.body.clientWidth;return this.each(function(){function x(){if(a=="center"){var e=document.documentElement.clientWidth||document.body.clientWidth;var t=e/2-22+"px";C="left:"+t+";right:auto;";if(!S){jQuery(".meanmenu-reveal").css("left",t)}else{jQuery(".meanmenu-reveal").animate({left:t})}}}function A(){if(jQuery(L).is(".meanmenu-reveal.meanclose")){L.html(s)}else{L.html(u)}}function O(){jQuery(".mean-bar,.mean-push").remove();jQuery(i).removeClass("mean-container");jQuery(e).show();T=false;N=false;jQuery(E).removeClass("mean-remove")}function M(){if(r<=h){jQuery(E).addClass("mean-remove");N=true;jQuery(i).addClass("mean-container");jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="'+k+'">Show Navigation</a><nav class="mean-nav"></nav></div>');var t=jQuery(n).html();jQuery(".mean-nav").html(t);if(b){jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function(){jQuery(this).removeAttr("class");jQuery(this).removeAttr("id")})}jQuery(e).before('<div class="mean-push" />');jQuery(".mean-push").css("margin-top",p);jQuery(e).hide();jQuery(".meanmenu-reveal").show();jQuery(d).html(u);L=jQuery(d);jQuery(".mean-nav ul").hide();if(v){if(m){jQuery(".mean-nav ul ul").each(function(){if(jQuery(this).children().length){jQuery(this,"li:first").parent().append('<a class="mean-expand" href="#" style="font-size: '+o+'">'+g+"</a>")}});jQuery(".mean-expand").on("click",function(e){e.preventDefault();if(jQuery(this).hasClass("mean-clicked")){jQuery(this).text(g);jQuery(this).prev("ul").slideUp(300,function(){})}else{jQuery(this).text(y);jQuery(this).prev("ul").slideDown(300,function(){})}jQuery(this).toggleClass("mean-clicked")})}else{jQuery(".mean-nav ul ul").show()}}else{jQuery(".mean-nav ul ul").hide()}jQuery(".mean-nav ul li").last().addClass("mean-last");L.removeClass("meanclose");jQuery(L).click(function(e){e.preventDefault();if(T==false){L.css("text-align","center");L.css("text-indent","0");L.css("font-size",o);jQuery(".mean-nav ul:first").slideDown();T=true}else{jQuery(".mean-nav ul:first").slideUp();T=false}L.toggleClass("meanclose");A();jQuery(E).addClass("mean-remove")});if(w){jQuery(".mean-nav ul > li > a:first-child").on("click",function(){jQuery(".mean-nav ul:first").slideUp();T=false;jQuery(L).toggleClass("meanclose").html(u)})}}else{O()}}var e=t.meanMenuTarget;var n=t.meanMenuTarget.clone();n.find(".contextual-links-wrapper").remove().find("ul.contextual-links").remove();var i=t.meanMenuContainer;var s=t.meanMenuClose;var o=t.meanMenuCloseSize;var u=t.meanMenuOpen;var a=t.meanRevealPosition;var f=t.meanRevealPositionDistance;var l=t.meanRevealColour;var c=t.meanRevealHoverColour;var h=t.meanScreenWidth;var p=t.meanNavPush;var d=".meanmenu-reveal";var v=t.meanShowChildren;var m=t.meanExpandableChildren;var g=t.meanExpand;var y=t.meanContract;var b=t.meanRemoveAttrs;var w=t.onePage;var E=t.removeElements;if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/Blackberry/i)||navigator.userAgent.match(/Windows Phone/i)){var S=true}if(navigator.userAgent.match(/MSIE 8/i)||navigator.userAgent.match(/MSIE 7/i)){jQuery("html").css("overflow-y","scroll")}var T=false;var N=false;if(a=="right"){C="right:"+f+";left:auto;"}if(a=="left"){var C="left:"+f+";right:auto;"}x();var k="background:"+l+";color:"+l+";"+C;var L="";if(!S){jQuery(window).resize(function(){r=document.documentElement.clientWidth||document.body.clientWidth;if(r>h){O()}else{O()}if(r<=h){M();x()}else{O()}})}window.onorientationchange=function(){x();r=document.documentElement.clientWidth||document.body.clientWidth;if(r>=h){O()}if(r<=h){if(N==false){M()}}};M()})}})(jQuery)
;
/**
 * @file
 * Integrate Mean Menu library with Responsive Menus module.
 */
(function ($) {
  Drupal.behaviors.responsive_menus_mean_menu = {
    attach: function (context, settings) {
      settings.responsive_menus = settings.responsive_menus || {};
      $.each(settings.responsive_menus, function(ind, iteration) {
        if (iteration.responsive_menus_style != 'mean_menu') {
          return true;
        }
        if (!iteration.selectors.length) {
          return;
        }
        // Set 1/0 to true/false respectively.
        $.each(iteration, function(key, value) {
          if (value == 0) {
            iteration[key] = false;
          }
          if (value == 1) {
            iteration[key] = true;
          }
        });
        // Call meanmenu() with our custom settings.
        $(iteration.selectors).once('responsive-menus-mean-menu', function() {
          $(this).meanmenu({
            meanMenuClose: iteration.close_txt || "X",
            meanMenuCloseSize: iteration.close_size || "18px",
            meanMenuOpen: iteration.trigger_txt || "<span /><span /><span />",
            meanRevealPosition: iteration.position || "right",
            meanScreenWidth: iteration.media_size || "480",
            meanExpand: iteration.expand_txt || "+",
            meanContract: iteration.contract_txt || "-",
            meanShowChildren: iteration.show_children,
            meanExpandableChildren: iteration.expand_children,
            meanRemoveAttrs: iteration.remove_attrs
          });
        });
      });

    }
  };
}(jQuery));
;
(function ($) {

Drupal.googleanalytics = {};

$(document).ready(function() {

  // Attach mousedown, keyup, touchstart events to document only and catch
  // clicks on all elements.
  $(document.body).bind("mousedown keyup touchstart", function(event) {

    // Catch the closest surrounding link of a clicked element.
    $(event.target).closest("a,area").each(function() {

      // Is the clicked URL internal?
      if (Drupal.googleanalytics.isInternal(this.href)) {
        // Skip 'click' tracking, if custom tracking events are bound.
        if ($(this).is('.colorbox') && (Drupal.settings.googleanalytics.trackColorbox)) {
          // Do nothing here. The custom event will handle all tracking.
          //console.info("Click on .colorbox item has been detected.");
        }
        // Is download tracking activated and the file extension configured for download tracking?
        else if (Drupal.settings.googleanalytics.trackDownload && Drupal.googleanalytics.isDownload(this.href)) {
          // Download link clicked.
          ga("send", {
            "hitType": "event",
            "eventCategory": "Downloads",
            "eventAction": Drupal.googleanalytics.getDownloadExtension(this.href).toUpperCase(),
            "eventLabel": Drupal.googleanalytics.getPageUrl(this.href),
            "transport": "beacon"
          });
        }
        else if (Drupal.googleanalytics.isInternalSpecial(this.href)) {
          // Keep the internal URL for Google Analytics website overlay intact.
          ga("send", {
            "hitType": "pageview",
            "page": Drupal.googleanalytics.getPageUrl(this.href),
            "transport": "beacon"
          });
        }
      }
      else {
        if (Drupal.settings.googleanalytics.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
          // Mailto link clicked.
          ga("send", {
            "hitType": "event",
            "eventCategory": "Mails",
            "eventAction": "Click",
            "eventLabel": this.href.substring(7),
            "transport": "beacon"
          });
        }
        else if (Drupal.settings.googleanalytics.trackOutbound && this.href.match(/^\w+:\/\//i)) {
          if (Drupal.settings.googleanalytics.trackDomainMode !== 2 || (Drupal.settings.googleanalytics.trackDomainMode === 2 && !Drupal.googleanalytics.isCrossDomain(this.hostname, Drupal.settings.googleanalytics.trackCrossDomains))) {
            // External link clicked / No top-level cross domain clicked.
            ga("send", {
              "hitType": "event",
              "eventCategory": "Outbound links",
              "eventAction": "Click",
              "eventLabel": this.href,
              "transport": "beacon"
            });
          }
        }
      }
    });
  });

  // Track hash changes as unique pageviews, if this option has been enabled.
  if (Drupal.settings.googleanalytics.trackUrlFragments) {
    window.onhashchange = function() {
      ga("send", {
        "hitType": "pageview",
        "page": location.pathname + location.search + location.hash
      });
    };
  }

  // Colorbox: This event triggers when the transition has completed and the
  // newly loaded content has been revealed.
  if (Drupal.settings.googleanalytics.trackColorbox) {
    $(document).bind("cbox_complete", function () {
      var href = $.colorbox.element().attr("href");
      if (href) {
        ga("send", {
          "hitType": "pageview",
          "page": Drupal.googleanalytics.getPageUrl(href)
        });
      }
    });
  }

});

/**
 * Check whether the hostname is part of the cross domains or not.
 *
 * @param string hostname
 *   The hostname of the clicked URL.
 * @param array crossDomains
 *   All cross domain hostnames as JS array.
 *
 * @return boolean
 */
Drupal.googleanalytics.isCrossDomain = function (hostname, crossDomains) {
  /**
   * jQuery < 1.6.3 bug: $.inArray crushes IE6 and Chrome if second argument is
   * `null` or `undefined`, http://bugs.jquery.com/ticket/10076,
   * https://github.com/jquery/jquery/commit/a839af034db2bd934e4d4fa6758a3fed8de74174
   *
   * @todo: Remove/Refactor in D8
   */
  if (!crossDomains) {
    return false;
  }
  else {
    return $.inArray(hostname, crossDomains) > -1 ? true : false;
  }
};

/**
 * Check whether this is a download URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isDownload = function (url) {
  var isDownload = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  return isDownload.test(url);
};

/**
 * Check whether this is an absolute internal URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternal = function (url) {
  var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return isInternal.test(url);
};

/**
 * Check whether this is a special URL or not.
 *
 * URL types:
 *  - gotwo.module /go/* links.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternalSpecial = function (url) {
  var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
  return isInternalSpecial.test(url);
};

/**
 * Extract the relative internal URL from an absolute internal URL.
 *
 * Examples:
 * - http://mydomain.com/node/1 -> /node/1
 * - http://example.com/foo/bar -> http://example.com/foo/bar
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   Internal website URL
 */
Drupal.googleanalytics.getPageUrl = function (url) {
  var extractInternalUrl = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return url.replace(extractInternalUrl, '');
};

/**
 * Extract the download file extension from the URL.
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   The file extension of the passed url. e.g. "zip", "txt"
 */
Drupal.googleanalytics.getDownloadExtension = function (url) {
  var extractDownloadextension = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  var extension = extractDownloadextension.exec(url);
  return (extension === null) ? '' : extension[1];
};

})(jQuery);
;
