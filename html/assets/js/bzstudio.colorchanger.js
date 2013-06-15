/*
 * BZ Studio v1.0 - Color Changer JavaScript
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

	function ColorChanger( element, options ) {
		if( arguments ) {
			this.init( element, options );
		}
	}

	ColorChanger.colors = [
		{ name: 'Brown', color: '#f0ecd6', classname: 'bz-brown' }, 
		{ name: 'Green', color: '#82af95', classname: 'bz-green' }, 
		{ name: 'Black', color: '#2e2e2e', classname: 'bz-black' }, 
		{ name: 'White', color: '#ffffff', classname: 'bz-white' }, 
		{ name: 'Yellow', color: '#d3a445', classname: 'bz-yellow' }
	];

	ColorChanger.prototype = {
		defaults: {

		}, 

		init: function( element, options ) {
			this.element = $( element );
			this.opts = $.extend( {}, this.defaults, options );

			// Get all available color class names
			this.allClassNames = $.map( ColorChanger.colors, function( el ) { return el.classname; } ).join( ' ' );

			// Attach the color changer
			this.menu = $( '<div class="color-changer sixteen columns"></div>' );
			this.menu.prependTo( this.element );
			this.menu.wrap( $( '<div class="container"></div>' ) );
			this.menu.wrap( $( '<div class="color-changer-container"></div>' ) );

			// Create color menu
			var _this = this;
			this.menu.append( this.createColorMenu() );
			this.menu.find( 'span' ).each( function() {
				if( _this.element.hasClass( $( this ).data( 'classname' ) ) ) {
					$( this ).siblings( 'span' ).removeClass( 'active' ).end().addClass( 'active' );
					return;
				}
			});

			this.menu.on( 'click', 'span', function( e ) {
				_this.menu.find( 'span' ).removeClass( 'active' );
				var colorClass = $( this ).addClass( 'active' ).data( 'classname' );
				_this.element.removeClass( _this.allClassNames ).addClass( colorClass );
			});
		}, 

		createColorMenu: function() {
			return $.map( ColorChanger.colors, function( c ) {
				return $( '<span></span>' )
					.attr( 'title', c.name )
					.attr( 'data-classname', c.classname )
					.css({ 'background-color': c.color });
			});
		}

	};

	$.fn.colorchanger = function( options ) {
		return this.each(function() {
			new ColorChanger( this, options );
		});
	}

}) (jQuery, window, document);