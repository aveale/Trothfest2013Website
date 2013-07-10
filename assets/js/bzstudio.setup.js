/*
 * BZ Studio v1.0 - Setup JavaScript
 *
 * This file is part of BZ Studio, a HTML template build for sale at ThemeForest.
 * For questions, suggestions or support request, please mail me at maimairel@yahoo.com
 *
 * Development Started:
 * February 13, 2013
 *
 */
 
;(function( $, window, document, undefined ) {

	$( window ).load(function() {

	    /*	--------------------------------------------------------------------
		Slab Text
		------------------------------------------------------------------------ */
		if( $.fn.slabText ) {
			$( '.subsection blockquote, .media .caption, .text-slab' ).slabText();
		}
		

	    /*	--------------------------------------------------------------------
		Subsection Parallax Backgrounds
		------------------------------------------------------------------------ */
		if( $.fn.parallax ) {
			$( '.subsection' ).parallax({
				speedFactor: 0.4, 
				loadFirst: true
			});
		}


	    /*	--------------------------------------------------------------------
		Google Maps
		------------------------------------------------------------------------ */
		if( $.fn.gmap3 ) {
			(function() {
				var wf = document.createElement('script');
				wf.src = 'http://maps.google.com/maps/api/js?v=3&sensor=false&language=en&callback=load_gmap';
				wf.type = 'text/javascript';
				wf.async = 'true';
				var s = document.getElementsByTagName('script')[0];
				s.parentNode.insertBefore(wf, s);			
			})();

			window.load_gmap = function() {
				$( '.gmap' ).each(function() {
					$( this ).gmap3({
						map: {
							options: {
								zoom: $( this ).data( 'zoom' ), 
								center: [ $( this ).data( 'center-lat' ), $( this ).data( 'center-lng' ) ], 
								scrollwheel: false, 
								mapTypeControl: false, 
								streetViewControl: false, 
								mapTypeId: google.maps.MapTypeId.TERRAIN
							}
						}, 
						marker: {
							latLng:[ $( this ).data( 'marker-lat' ), $( this ).data( 'marker-lng' ) ]
						}
					});
				});
			}
		}


	    /*	--------------------------------------------------------------------
		Twitter Widget
		------------------------------------------------------------------------ */
		if( $.fn.tweet ) {
			$( '.tweets' ).each(function() {
				var username = $( this ).data( 'twitter-username' );
				$( '.stream', this ).tweet({
					username: username, 
					template: '{text}{time}', 
					count: 1
				});
			});
		}


	    /*	--------------------------------------------------------------------
		Flickr Widget
		------------------------------------------------------------------------ */
		if( $.fn.jflickrfeed ) {
			$( '.flickr-stream' ).each(function() {
				var flickrId = $( this ).data( 'flickr-id' );
				var limit = $( this ).data( 'limit' );
				$( '<ul class="clearfix"></ul>' )
					.prependTo( this ).jflickrfeed({
						qstrings: {
							id: flickrId
						}, 
						limit: limit, 
						itemTemplate: '<li><a href="{{link}}" title="{{title}}" target="_blank"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
					});
			});
		}


	    /*	--------------------------------------------------------------------
		Refresh ScrollSpy
		------------------------------------------------------------------------ */
		$.fn.scrollspy && $( 'body' ).scrollspy( 'refresh' );

	});

	$(document).ready(function() {


	    /*	--------------------------------------------------------------------
		ScrollSpy
		------------------------------------------------------------------------ */
		if( $.fn.scrollspy ) {

			$( window ).on( 'smartresize.scrollspy orientationchange.scrollspy', function() {
				$( 'body' ).scrollspy( 'refresh' );
			});
			
			$( 'body' ).scrollspy({
				target: '#navigation'
			});
		}


	    /*	--------------------------------------------------------------------
		Sticky Navigation
		------------------------------------------------------------------------ */
		if( $.fn.sticky ) {
			$( '#header .header-container' ).sticky();
		}


	    /*	--------------------------------------------------------------------
		TinyNav Mobile Navigation
		------------------------------------------------------------------------ */
		if( $.fn.tinyNav ) {
			$( '#navigation > ul' ).tinyNav({
				active: 'active', 
				header: '-- Menu --'
			});
		}


	    /*	--------------------------------------------------------------------
		Scrolling Page Navigation
		------------------------------------------------------------------------ */
		$( '#navigation' ).on( 'click', 'a[href^=#]', function(e) {
			var el = $( this );
			var target = $( el.attr( 'href' ) );
			if( target && target.length ) {
				$( 'html, body' )
					.stop(true, true)
					.animate({ 'scrollTop': target.offset().top }, 'slow', 'swing');
			}
			e.preventDefault();
		});


	    /*	--------------------------------------------------------------------
		Wrap ampersands (&) in <span class="amp"></span> for headlines
		------------------------------------------------------------------------ */
		$( '.section-story' ).each(function() {
			$( this ).html( $( this ).html().replace( /&amp;/g, '<span class="amp">&amp;</span>' ) );
		});


	    /*	--------------------------------------------------------------------
		Home Fullscreen Slider
		------------------------------------------------------------------------ */
		if( $.fn.cycle ) {

			$( '.home-container .cycle-slider' ).one( 'cycle-bootstrap', function( e, opts ) {

				if( typeof Spinner !== 'undefined' ) {
					opts.spinner = new Spinner({
						lines: 11, 
						width: 4, 
						trail: 60, 
						color: '#fff', 
						position: 'absolute', 
						hwaccel: true, 
						zIndex: 298
					}).spin();
				}

				opts.progress = $( '<div class="slide-progress"></div>' ).prependTo( opts.container );
				opts.spinner && opts.container.prepend( opts.spinner.el );

			}).on( 'cycle-initialized', function( e, opts ) {

				opts.spinner.stop();
				opts.container.addClass( 'cycle-initialized' );

			}).on( 'cycle-initialized cycle-after', function( e, opts ) {

				opts.progress.stop(true, true).css( 'width', 0 ).animate({ width: '100%' }, opts.timeout, 'linear' );

			}).cycle({
				loader: 'wait', 
				timeout: 6000, 
				slides: '> .slide', 
				next: '> .slide-nav-wrap > .cycle-next', 
				prev: '> .slide-nav-wrap > .cycle-prev', 
				caption: '#slider-caption', 
				captionTemplate: '<h3>{{slideTitle}}</h3><p>{{slideText}}</p><a class="btn btn-jumbo {{buttonVisibility}}" href="{{buttonUrl}}">{{buttonLabel}}</a>'
			});

		}


	    /*	--------------------------------------------------------------------
		FitVids Fluid Videos
		------------------------------------------------------------------------ */
		if( $.fn.fitVids ) {
			$( '.media' ).fitVids();
		}


	    /*	--------------------------------------------------------------------
		Form Messages
		------------------------------------------------------------------------ */
		$( '.alert' ).on( 'click', function() {
			$( this )
				.animate({ 'opacity': 0 })
				.slideUp( 'normal', function() {
					$( this ).css({ 'opacity': 1 });
				});
		});
		

	    /*	--------------------------------------------------------------------
		Form Validation and Ajax Submit
		------------------------------------------------------------------------ */
		if( $.fn.validate && $.fn.ajaxSubmit ) {

			$( '#contact-form' ).validate({
				submitHandler: function( form ) {
					$( '#ajax-loader', form ).show();
					$( form ).ajaxSubmit(function( response ) {
						response = $.parseJSON( response );
						$( '#contact-message', form )
							.toggleClass( 'alert-error', !response.success )
							.toggleClass( 'alert-success', response.success )
							.html( response.message ).slideDown();

						$( form ).resetForm();
						$( '#ajax-loader', form ).hide();
					});
				}
			});
		}


	    /*	--------------------------------------------------------------------
		Page Header Parallax Backgrounds
		------------------------------------------------------------------------ */
		if( $.fn.parallax ) {
			$( '.page-header' ).parallax({
				speedFactor: 0.4, 
				loadFirst: false
			});
		}


	    /*	--------------------------------------------------------------------
		Testimonial Switcher
		------------------------------------------------------------------------ */
		if( $.fn.testimonialSwitcher ) {
			$( '.testimonial' ).testimonialSwitcher();
		}


	    /*	--------------------------------------------------------------------
		Portfolio Showcase
		------------------------------------------------------------------------ */
		if( $.fn.portfolioShowcase ) {
			$( '.portfolio' ).portfolioShowcase({
				afterLoad: function( content ) {
					if( $.fn.cycle ) {
						$( '.cycle-slideshow', content ).cycle({
							loader: 'wait', 
							swipe: true
						});
					}

					if( $.fn.fitVids ) {
						$( content ).fitVids();
					}

					if( $.fn.slabText ) {
						$( '.media .caption' ).slabText();
					}
				}, 
				beforeUnload: function( content ) {
					if( $.fn.cycle ) {
						$( '.cycle-slideshow', content ).cycle( 'destroy' );
					}
				}, 
				isotopeAnimationComplete: function( items ) {
					$.fn.scrollspy && $( 'body' ).scrollspy( 'refresh' );
				}
			});
		}

	});

}) (jQuery, window, document);
