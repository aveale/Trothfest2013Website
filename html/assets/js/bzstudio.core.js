/*
 * BZ Studio v1.0 - Internal Plugins JavaScript
 *
 * This file is part of BZ Studio, a HTML template build for sale at ThemeForest.
 * For questions, suggestions or support request, please mail me at maimairel@yahoo.com
 *
 * Development Started:
 * February 13, 2013
 *
 */

;(function( $, window, document, undefined ) {

	"use strict";

	/*	--------------------------------------------------------------------
	Check Handheld Devices
	------------------------------------------------------------------------ */
	$.isHandheld = (function (a) {return /(android|bb\d+|meego).+mobile|android|ipad|playbook|silk|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))})(navigator.userAgent || navigator.vendor || window.opera);


    /*	--------------------------------------------------------------------
	Set Handheld class name for Mobile Browsers
	------------------------------------------------------------------------ */
	$( 'html' ).toggleClass( 'handheld', $.isHandheld );


    /*	--------------------------------------------------------------------
	Work around for hover effect on iOS
	------------------------------------------------------------------------ */
	$( '.home-container, .portfolio .item, .team .photo' ).on( 'click', function() {});


	$( window ).load(function() {

	    /*	--------------------------------------------------------------------
		Set window-loaded class to defer loading of some assets
		------------------------------------------------------------------------ */
		$( 'html' ).addClass( 'window-loaded' );


	    /*	--------------------------------------------------------------------
		Detect, Preload and Enable CSS Mask
		------------------------------------------------------------------------ */
		if( !$.isHandheld && document.body.style[ '-webkit-mask-repeat' ] !== undefined ) {

			var maskImage = 'assets/img/grunge' + (window.devicePixelRatio > 1? '/@2x' : '') + '/mask.png';
			$( '<img>' )
				.one( 'load', function() {
					$( 'html ').addClass( 'mask-loaded' );
				})
				.attr( 'src', maskImage );
		}

	});

	
    /*	--------------------------------------------------------------------
	Parallax Backgrounds;
	Enhanced version of http://www.ianlunn.co.uk/plugins/jquery-parallax/
	------------------------------------------------------------------------ */

	var Parallax = function( element, options ) {
		if( arguments ) {
			this.init( element, options );
		}
	}

	Parallax.prototype = {
		defaults: {
			xpos: '50%', // the background-x position
			speedFactor: 0.4, // the scrolling speed relative to the window
			loadFirst: true, // load the background before displaying it, only available if data-background is specified
			loadingText: 'loading...' // the loading text to display on the target element
		}, 

		init: function( element, options ) {
			this.element = $( element );
			this.opts = $.extend({ windowHeight: $( window ).height() }, this.defaults, options );

			if( ( this.backgroundImage = this.element.data( 'background' ) ) ) {

				if( this.opts.loadFirst ) {

					this.loadingText = $( '<span class="loading"></span>' ).text( this.opts.loadingText );
					this.element.append( this.loadingText );

					$( '<img>' )
						.one( 'load.parallax', $.proxy( this.activate, this ) )
						.attr( 'src', this.backgroundImage  );

				} else {

					this.element.css({ 'backgroundImage': 'url(' + this.backgroundImage + ')' });
					this.activate();
				}
			} else {

				this.activate();
			}
		}, 

		activate: function() {

			if( this.backgroundImage && this.opts.loadFirst ) {
				this.element.css({ 'backgroundImage': 'url(' + this.backgroundImage + ')' });
				this.loadingText && this.loadingText.remove();
			}

			$( window )
				.on( 'scroll.parallax', $.proxy(function() { this.refresh(); }, this))
				.on( 'smartresize.parallax orientationchange.parallax', $.proxy(function() {
					this.opts.windowHeight = $( window ).height();
					this.refresh();
				}, this));
		}, 

		refresh: function() {

			var windowPos = $( window ).scrollTop();
			var currentPos = this.element.offset().top;
			var height = this.element.outerHeight();

			if (currentPos + height < windowPos || currentPos > windowPos + this.opts.windowHeight ) {
				return;
			}

			this.element.css('backgroundPosition', this.opts.xpos + " " + Math.round((currentPos - windowPos) * this.opts.speedFactor) + "px");
		}
	};

	$.fn.parallax = function( options ) {
		return this.each(function() {
			new Parallax( this, options );
		});
	};


    /*	--------------------------------------------------------------------
	AJAX Portfolio
	------------------------------------------------------------------------ */

	var PortfolioShowcase = function( element, options ) {
		this.init( element, options );
	}

	PortfolioShowcase.prototype = {
		defaults: {
			afterLoad: function( content ) {}, 
			beforeUnload: function( content ) {}, 
			isotopeAnimationComplete: function( items ) {}
		}, 

		init: function( element, options ) {
			this.element = $( element );
			this.options = $.extend( {}, this.defaults, options );

			// Cache elements
			this.container = $( '.items-wrap', this.element );
			this.filter = $( '.filter', this.element );
			this.ow = PortfolioShowcase.OmniWindow;

			// Responsive Filter
			this.filterActive = $( '<span class="active-label" data-toggle="dropdown"></span>' ).prependTo( this.filter );
			this.filterActive.text( $( 'ul li.active a', this.filter ).text() );

			// Wait for images to load
			if( $.fn.imagesLoaded ) {
				this.container.imagesLoaded($.proxy(function() {
					$.fn.isotope && this._initIsotope();
					this.ow && this._initOmniWindow();
				}, this));
			}
		}, 

		_initOmniWindow: function() {
			var _this = this;

			// Listen to OmniWindow events
			this.ow.getSubject()
				.on( 'closing', $.proxy(function( e ) { this.ow.cleanUp( $.proxy( this.options.beforeUnload ) ); }, this ))
				.on( 'navigating', $.proxy(function( e, direction ) { this.navigate( direction ); }, this ));

			// Bind click event on each image
			$( '.item', this.container ).on( 'click', '.item-link', function(e) {
				var url = $( this ).attr( 'href' );
				_this.currentItem = $( this ).closest( '.item' );

				_this.ow
					.updateNavButtons( $.proxy( _this.canNavigate, _this ) )
					.show()
					.load( url, $.proxy(_this.options.afterLoad, _this ) );

				e.preventDefault();
			});
		}, 

		_initIsotope: function() {
			var _this = this;
			this.container.isotope({
				masonry: { columnWidth: this.container.width() / 12 }, 
				animationOptions: {
					complete: this.options.isotopeAnimationComplete
				}
			});

			$( window ).on( 'smartresize', function(){
				_this.container.isotope({ masonry: { columnWidth: _this.container.width() / 12 } });
			});

			$( this.filter ).on( 'click', 'a', function( e ) {
				_this.container.isotope({ filter: $( this ).data( 'filter' ) });
				$( 'ul li', _this.filter ).removeClass( 'active' );
				$( '.active-label', _this.filter ).text( $( this ).text() );
				$( this ).parent().addClass( 'active' );

				e.preventDefault();
			});
		}, 

		navigate: function( dir ) {
			var item = this.currentItem[dir + 'All']( '.item' ).filter( ':not(.isotope-hidden)' ).first();
			if( item.length ) {
				var url = item.find( '.item-link' ).first().attr( 'href' ), _this = this;
				_this.ow.unload( $.proxy( this.options.beforeUnload ), function() {
					_this.currentItem = item;
					_this.ow
						.updateNavButtons( $.proxy( _this.canNavigate, _this ) )
						.load( url, $.proxy( _this.options.afterLoad, _this ) );
				});
			}
		}, 

		canNavigate: function( dir ) {
			return this.currentItem[dir + 'All']( '.item' ).filter( ':not(.isotope-hidden)' ).length;
		}
	};

	if( $.fn.omniWindow ) {

		PortfolioShowcase.OmniWindow = {
			wrappers: {
				master: $( '<div class="ow-container"></div>' ), 
				subjects: $( '<div class="ow-subjects-container"></div>' )
			}, 

			subjects: {
				overlay: $( '<div class="ow-overlay ow-closed"></div>' ), 
				modal: $( '<div class="portfolio-modal ow-modal ow-closed"></div>' )
			}, 

			buttons: {
				next: $( '<div class="ow-nav ow-next" data-direction="next"><i class="icon-chevron-right"></i></div>' ), 
				prev: $( '<div class="ow-nav ow-prev" data-direction="prev"><i class="icon-chevron-left"></i></div>' ), 
				close: $( '<div class="ow-close"><i class="icon-remove-2"></i></div>' )
			}, 

			containers: {
				outer: $( '<div class="ow-modal-outer"></div>' ), 
				inner: $( '<div class="ow-modal-inner"></div>' )
			}, 

			init: function() {
				// Attach OmniWindow wrappers to body
				this.wrappers.subjects.appendTo( this.wrappers.master );
				this.wrappers.master.appendTo( $( 'body' ) );

				// Attach OmniWindow subjects to main wrapper
				this.subjects.overlay.prependTo( this.wrappers.subjects );
				this.subjects.modal.prependTo( this.wrappers.subjects );

				// Attach outer container to OmniWindow
				this.subjects.modal.append( this.containers.outer );

				// Attach Buttons to OmniWindow
				this.buttons.next.add( this.buttons.prev ).add( this.buttons.close ).appendTo( this.subjects.modal );

				// Listen to buttons event
				this.buttons.next.add( this.buttons.prev )
					.on( 'click', $.proxy(function(e) { this.getSubject().trigger( 'navigating', [ $( e.currentTarget ).data( 'direction' ) ] ); }, this ));
				this.buttons.close.on( 'click', $.proxy(function() { this.hide(); }, this));

				// Initialize Spinner
				if( typeof Spinner !== 'undefined' ) {
					this.spinner = new Spinner({
						lines: 11, // The number of lines to draw
						width: 4, // The line thickness
						trail: 60, // Afterglow percentage
						hwaccel: true, 
						position: 'absolute'
					});
				}

				// Initialize OmniWindow
				var _this = this;
				this.subjects.modal.omniWindow({
					'callbacks': {
						'positioning': function( subjects, internalCallback ) {
							$( window ).on( 'resize.omniwindow', function() {
								internalCallback( subjects );
							});

							return internalCallback( subjects );
						}, 
						'beforeShow': function( subjects, internalCallback ) { 
							_this.wrappers.master.show();
							$( 'body' ).addClass( 'ow-active' );
							return internalCallback( subjects );
						}, 
						'beforeHide': function( subjects, internalCallback ) {
							_this.getSubject().trigger( 'closing' );
							return internalCallback( subjects );
						}, 
						'afterHide': function( subjects, internalCallback ) {
							_this.wrappers.master.hide();
							$( 'body' ).removeClass( 'ow-active' );
							return internalCallback( subjects );
						}
					}
				});

				return this;
			}, 

			getSubject: function() {
				return this.subjects.modal;
			}, 

			load: function( url, afterLoad ) {
				if( !this.subjects.modal.hasClass( 'loaded' ) ) {
					var _this = this;
					$.ajax({
						type: 'get', 
						url: url, 
						dataType: 'html', 
						cache: false, 
						beforeSend: function() {
							_this.subjects.modal.removeClass( 'loaded' );
							_this.spinner && (_this.spinner.spin(), _this.subjects.modal.append( _this.spinner.el ));
						}, 
						success: function( response, status, xhr ) {
							_this._processContent( response, afterLoad );
						}, 
						error: function( xhr, status, message ) {
							var div = $( '<div class="error-message"></div>' ).html( xhr.responseText.match(/.*<body.*>([\s\S]*)<\/body>.*/)[1] );
							_this._processContent( div, function() {} );
						}
					});
				}
				return this;
			}, 

			unload: function( beforeUnload, afterUnload ) {
				if( this.subjects.modal.hasClass( 'loaded' ) ) {
					this.containers.inner.stop(true, true).animate({ 'opacity': 0 }, $.proxy(function() {
						if( $.isFunction( beforeUnload ) ) {
							beforeUnload.apply( this, [ this.currentContent ] );
						}

						this.subjects.modal.removeClass( 'loaded' );
						this.containers.inner.empty().remove();

						if( $.isFunction( afterUnload ) ) {
							afterUnload.apply( this, [ this.currentContent ] );
						}
					}, this));
				}
				return this;
			}, 

			updateNavButtons: function( callback ) {
				this.buttons.next.add( this.buttons.prev ).each(function() {
					$( this ).toggleClass( 'disabled', !callback( $( this ).data( 'direction' ) ) );
				});
				return this;
			}, 

			cleanUp: function( beforeUnload ) {
				if( $.isFunction( beforeUnload ) ) {
					beforeUnload.apply( this, [ this.currentContent ] );
				}

				this.containers.inner.removeAttr( 'style' ).empty().remove();
				this.containers.outer.removeAttr( 'style' ).empty();
				this.subjects.modal.removeClass( 'loaded loading' );
				return this;
			}, 

			show: function() {
				this.subjects.modal.trigger( 'show' );
				return this;
			}, 

			hide: function() {
				this.subjects.modal.trigger( 'hide' );
				return this;
			}, 

			_processContent: function( content, afterLoad ) {
				var _this = this;
				this.currentContent = $( content );
				this.containers.inner.empty().append( this.currentContent );
				this.containers.outer.empty().append( this.containers.inner );

				this.currentContent.imagesLoaded(function() {
					if( $.isFunction( afterLoad ) ) {
						afterLoad.apply( _this, [ _this.currentContent ] );
					}

					_this.currentContent.off( 'ready' );
					_this.spinner && _this.spinner.stop();
					_this.containers.outer.stop(true, true).animate({ 'height': _this.containers.inner.outerHeight() }, function() {
						_this.containers.inner.stop(true, true).animate({ 'opacity': 1 }, function() {
							_this.subjects.modal.addClass( 'loaded' );
						});
					});
				});
			}
		};

		PortfolioShowcase.OmniWindow.init();
	}

	$.fn.portfolioShowcase = function( options ) {
		return this.each(function() {
			new PortfolioShowcase( this, options );
		});
	}


    /*	--------------------------------------------------------------------
	Testimonial Switcher
	------------------------------------------------------------------------ */

	var TestimonialSwitcher = function( element, options ) {
		this.init( element, options );
	}

	TestimonialSwitcher.prototype = {
		init: function( element, options ) {
			this.photos = $( '.photo img', element ).hide();
			this.articles = $( '.content article', element ).hide();

			this.indexCounter = 0;
			this.unlocked = true;
			this.show( 0 );

			$( '.nav-next, .nav-prev', element ).on( 'click', $.proxy(function(e) {
				this.navigate( $( e.currentTarget ).is( '.nav-next' ) );
			}, this));
		}, 

		hide: function( index, callback ) {
			var els = this.photos.eq( index ).add( this.articles.eq( index ) );
			els.stop(true, true).fadeOut( 'normal' ).promise().done(callback);
		}, 

		show: function( index ) {
			var els = this.photos.eq( index ).add( this.articles.eq( index ) );
			els.stop(true, true).fadeIn( 'normal' ).promise().done($.proxy(function() { this.unlocked = true; }, this));
		}, 

		navigate: function( forward ) {
			if( this.unlocked ) {
				this.unlocked = false;
				this.hide( this.indexCounter % this.articles.length, $.proxy(function() {
					this.indexCounter += (forward? 1 : -1);
					this.show( this.indexCounter % this.articles.length );
				}, this));
			}
		}
	};

	$.fn.testimonialSwitcher = function( options ) {
		return this.each(function() {
			new TestimonialSwitcher( this, options );
		});
	}

}) (jQuery, window, document);