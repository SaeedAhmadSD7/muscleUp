/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );

/*!
 * jQuery Validation Plugin v1.16.0
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2016 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery"], factory );
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

$.extend( $.fn, {

	// http://jqueryvalidation.org/validate/
	validate: function( options ) {

		// If nothing is selected, return nothing; can't chain anyway
		if ( !this.length ) {
			if ( options && options.debug && window.console ) {
				console.warn( "Nothing selected, can't validate, returning nothing." );
			}
			return;
		}

		// Check if a validator for this form was already created
		var validator = $.data( this[ 0 ], "validator" );
		if ( validator ) {
			return validator;
		}

		// Add novalidate tag if HTML5.
		this.attr( "novalidate", "novalidate" );

		validator = new $.validator( options, this[ 0 ] );
		$.data( this[ 0 ], "validator", validator );

		if ( validator.settings.onsubmit ) {

			this.on( "click.validate", ":submit", function( event ) {
				if ( validator.settings.submitHandler ) {
					validator.submitButton = event.target;
				}

				// Allow suppressing validation by adding a cancel class to the submit button
				if ( $( this ).hasClass( "cancel" ) ) {
					validator.cancelSubmit = true;
				}

				// Allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
				if ( $( this ).attr( "formnovalidate" ) !== undefined ) {
					validator.cancelSubmit = true;
				}
			} );

			// Validate the form on submit
			this.on( "submit.validate", function( event ) {
				if ( validator.settings.debug ) {

					// Prevent form submit to be able to see console output
					event.preventDefault();
				}
				function handle() {
					var hidden, result;
					if ( validator.settings.submitHandler ) {
						if ( validator.submitButton ) {

							// Insert a hidden input as a replacement for the missing submit button
							hidden = $( "<input type='hidden'/>" )
								.attr( "name", validator.submitButton.name )
								.val( $( validator.submitButton ).val() )
								.appendTo( validator.currentForm );
						}
						result = validator.settings.submitHandler.call( validator, validator.currentForm, event );
						if ( validator.submitButton ) {

							// And clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						if ( result !== undefined ) {
							return result;
						}
						return false;
					}
					return true;
				}

				// Prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			} );
		}

		return validator;
	},

	// http://jqueryvalidation.org/valid/
	valid: function() {
		var valid, validator, errorList;

		if ( $( this[ 0 ] ).is( "form" ) ) {
			valid = this.validate().form();
		} else {
			errorList = [];
			valid = true;
			validator = $( this[ 0 ].form ).validate();
			this.each( function() {
				valid = validator.element( this ) && valid;
				if ( !valid ) {
					errorList = errorList.concat( validator.errorList );
				}
			} );
			validator.errorList = errorList;
		}
		return valid;
	},

	// http://jqueryvalidation.org/rules/
	rules: function( command, argument ) {
		var element = this[ 0 ],
			settings, staticRules, existingRules, data, param, filtered;

		// If nothing is selected, return empty object; can't chain anyway
		if ( element == null || element.form == null ) {
			return;
		}

		if ( command ) {
			settings = $.data( element.form, "validator" ).settings;
			staticRules = settings.rules;
			existingRules = $.validator.staticRules( element );
			switch ( command ) {
			case "add":
				$.extend( existingRules, $.validator.normalizeRule( argument ) );

				// Remove messages from rules, but allow them to be set separately
				delete existingRules.messages;
				staticRules[ element.name ] = existingRules;
				if ( argument.messages ) {
					settings.messages[ element.name ] = $.extend( settings.messages[ element.name ], argument.messages );
				}
				break;
			case "remove":
				if ( !argument ) {
					delete staticRules[ element.name ];
					return existingRules;
				}
				filtered = {};
				$.each( argument.split( /\s/ ), function( index, method ) {
					filtered[ method ] = existingRules[ method ];
					delete existingRules[ method ];
					if ( method === "required" ) {
						$( element ).removeAttr( "aria-required" );
					}
				} );
				return filtered;
			}
		}

		data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.classRules( element ),
			$.validator.attributeRules( element ),
			$.validator.dataRules( element ),
			$.validator.staticRules( element )
		), element );

		// Make sure required is at front
		if ( data.required ) {
			param = data.required;
			delete data.required;
			data = $.extend( { required: param }, data );
			$( element ).attr( "aria-required", "true" );
		}

		// Make sure remote is at back
		if ( data.remote ) {
			param = data.remote;
			delete data.remote;
			data = $.extend( data, { remote: param } );
		}

		return data;
	}
} );

// Custom selectors
$.extend( $.expr.pseudos || $.expr[ ":" ], {		// '|| $.expr[ ":" ]' here enables backwards compatibility to jQuery 1.7. Can be removed when dropping jQ 1.7.x support

	// http://jqueryvalidation.org/blank-selector/
	blank: function( a ) {
		return !$.trim( "" + $( a ).val() );
	},

	// http://jqueryvalidation.org/filled-selector/
	filled: function( a ) {
		var val = $( a ).val();
		return val !== null && !!$.trim( "" + val );
	},

	// http://jqueryvalidation.org/unchecked-selector/
	unchecked: function( a ) {
		return !$( a ).prop( "checked" );
	}
} );

// Constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

// http://jqueryvalidation.org/jQuery.validator.format/
$.validator.format = function( source, params ) {
	if ( arguments.length === 1 ) {
		return function() {
			var args = $.makeArray( arguments );
			args.unshift( source );
			return $.validator.format.apply( this, args );
		};
	}
	if ( params === undefined ) {
		return source;
	}
	if ( arguments.length > 2 && params.constructor !== Array  ) {
		params = $.makeArray( arguments ).slice( 1 );
	}
	if ( params.constructor !== Array ) {
		params = [ params ];
	}
	$.each( params, function( i, n ) {
		source = source.replace( new RegExp( "\\{" + i + "\\}", "g" ), function() {
			return n;
		} );
	} );
	return source;
};

$.extend( $.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		pendingClass: "pending",
		validClass: "valid",
		errorElement: "label",
		focusCleanup: false,
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function( element ) {
			this.lastActive = element;

			// Hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup ) {
				if ( this.settings.unhighlight ) {
					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				}
				this.hideThese( this.errorsFor( element ) );
			}
		},
		onfocusout: function( element ) {
			if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {
				this.element( element );
			}
		},
		onkeyup: function( element, event ) {

			// Avoid revalidate the field when pressing one of the following keys
			// Shift       => 16
			// Ctrl        => 17
			// Alt         => 18
			// Caps lock   => 20
			// End         => 35
			// Home        => 36
			// Left arrow  => 37
			// Up arrow    => 38
			// Right arrow => 39
			// Down arrow  => 40
			// Insert      => 45
			// Num lock    => 144
			// AltGr key   => 225
			var excludedKeys = [
				16, 17, 18, 20, 35, 36, 37,
				38, 39, 40, 45, 144, 225
			];

			if ( event.which === 9 && this.elementValue( element ) === "" || $.inArray( event.keyCode, excludedKeys ) !== -1 ) {
				return;
			} else if ( element.name in this.submitted || element.name in this.invalid ) {
				this.element( element );
			}
		},
		onclick: function( element ) {

			// Click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted ) {
				this.element( element );

			// Or option elements, check parent select in that case
			} else if ( element.parentNode.name in this.submitted ) {
				this.element( element.parentNode );
			}
		},
		highlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
			} else {
				$( element ).addClass( errorClass ).removeClass( validClass );
			}
		},
		unhighlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
			} else {
				$( element ).removeClass( errorClass ).addClass( validClass );
			}
		}
	},

	// http://jqueryvalidation.org/jQuery.validator.setDefaults/
	setDefaults: function( settings ) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		equalTo: "Please enter the same value again.",
		maxlength: $.validator.format( "Please enter no more than {0} characters." ),
		minlength: $.validator.format( "Please enter at least {0} characters." ),
		rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),
		range: $.validator.format( "Please enter a value between {0} and {1}." ),
		max: $.validator.format( "Please enter a value less than or equal to {0}." ),
		min: $.validator.format( "Please enter a value greater than or equal to {0}." ),
		step: $.validator.format( "Please enter a multiple of {0}." )
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $( this.settings.errorLabelContainer );
			this.errorContext = this.labelContainer.length && this.labelContainer || $( this.currentForm );
			this.containers = $( this.settings.errorContainer ).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var groups = ( this.groups = {} ),
				rules;
			$.each( this.settings.groups, function( key, value ) {
				if ( typeof value === "string" ) {
					value = value.split( /\s/ );
				}
				$.each( value, function( index, name ) {
					groups[ name ] = key;
				} );
			} );
			rules = this.settings.rules;
			$.each( rules, function( key, value ) {
				rules[ key ] = $.validator.normalizeRule( value );
			} );

			function delegate( event ) {

				// Set form expando on contenteditable
				if ( !this.form && this.hasAttribute( "contenteditable" ) ) {
					this.form = $( this ).closest( "form" )[ 0 ];
				}

				var validator = $.data( this.form, "validator" ),
					eventType = "on" + event.type.replace( /^validate/, "" ),
					settings = validator.settings;
				if ( settings[ eventType ] && !$( this ).is( settings.ignore ) ) {
					settings[ eventType ].call( validator, this, event );
				}
			}

			$( this.currentForm )
				.on( "focusin.validate focusout.validate keyup.validate",
					":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
					"[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
					"[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
					"[type='radio'], [type='checkbox'], [contenteditable], [type='button']", delegate )

				// Support: Chrome, oldIE
				// "select" is provided as event.target when clicking a option
				.on( "click.validate", "select, option, [type='radio'], [type='checkbox']", delegate );

			if ( this.settings.invalidHandler ) {
				$( this.currentForm ).on( "invalid-form.validate", this.settings.invalidHandler );
			}

			// Add aria-required to any Static/Data/Class required fields before first validation
			// Screen readers require this attribute to be present before the initial submission http://www.w3.org/TR/WCAG-TECHS/ARIA2.html
			$( this.currentForm ).find( "[required], [data-rule-required], .required" ).attr( "aria-required", "true" );
		},

		// http://jqueryvalidation.org/Validator.form/
		form: function() {
			this.checkForm();
			$.extend( this.submitted, this.errorMap );
			this.invalid = $.extend( {}, this.errorMap );
			if ( !this.valid() ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
			}
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = ( this.currentElements = this.elements() ); elements[ i ]; i++ ) {
				this.check( elements[ i ] );
			}
			return this.valid();
		},

		// http://jqueryvalidation.org/Validator.element/
		element: function( element ) {
			var cleanElement = this.clean( element ),
				checkElement = this.validationTargetFor( cleanElement ),
				v = this,
				result = true,
				rs, group;

			if ( checkElement === undefined ) {
				delete this.invalid[ cleanElement.name ];
			} else {
				this.prepareElement( checkElement );
				this.currentElements = $( checkElement );

				// If this element is grouped, then validate all group elements already
				// containing a value
				group = this.groups[ checkElement.name ];
				if ( group ) {
					$.each( this.groups, function( name, testgroup ) {
						if ( testgroup === group && name !== checkElement.name ) {
							cleanElement = v.validationTargetFor( v.clean( v.findByName( name ) ) );
							if ( cleanElement && cleanElement.name in v.invalid ) {
								v.currentElements.push( cleanElement );
								result = v.check( cleanElement ) && result;
							}
						}
					} );
				}

				rs = this.check( checkElement ) !== false;
				result = result && rs;
				if ( rs ) {
					this.invalid[ checkElement.name ] = false;
				} else {
					this.invalid[ checkElement.name ] = true;
				}

				if ( !this.numberOfInvalids() ) {

					// Hide error containers on last error
					this.toHide = this.toHide.add( this.containers );
				}
				this.showErrors();

				// Add aria-invalid status for screen readers
				$( element ).attr( "aria-invalid", !rs );
			}

			return result;
		},

		// http://jqueryvalidation.org/Validator.showErrors/
		showErrors: function( errors ) {
			if ( errors ) {
				var validator = this;

				// Add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = $.map( this.errorMap, function( message, name ) {
					return {
						message: message,
						element: validator.findByName( name )[ 0 ]
					};
				} );

				// Remove items from success list
				this.successList = $.grep( this.successList, function( element ) {
					return !( element.name in errors );
				} );
			}
			if ( this.settings.showErrors ) {
				this.settings.showErrors.call( this, this.errorMap, this.errorList );
			} else {
				this.defaultShowErrors();
			}
		},

		// http://jqueryvalidation.org/Validator.resetForm/
		resetForm: function() {
			if ( $.fn.resetForm ) {
				$( this.currentForm ).resetForm();
			}
			this.invalid = {};
			this.submitted = {};
			this.prepareForm();
			this.hideErrors();
			var elements = this.elements()
				.removeData( "previousValue" )
				.removeAttr( "aria-invalid" );

			this.resetElements( elements );
		},

		resetElements: function( elements ) {
			var i;

			if ( this.settings.unhighlight ) {
				for ( i = 0; elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ],
						this.settings.errorClass, "" );
					this.findByName( elements[ i ].name ).removeClass( this.settings.validClass );
				}
			} else {
				elements
					.removeClass( this.settings.errorClass )
					.removeClass( this.settings.validClass );
			}
		},

		numberOfInvalids: function() {
			return this.objectLength( this.invalid );
		},

		objectLength: function( obj ) {
			/* jshint unused: false */
			var count = 0,
				i;
			for ( i in obj ) {
				if ( obj[ i ] ) {
					count++;
				}
			}
			return count;
		},

		hideErrors: function() {
			this.hideThese( this.toHide );
		},

		hideThese: function( errors ) {
			errors.not( this.containers ).text( "" );
			this.addWrapper( errors ).hide();
		},

		valid: function() {
			return this.size() === 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if ( this.settings.focusInvalid ) {
				try {
					$( this.findLastActive() || this.errorList.length && this.errorList[ 0 ].element || [] )
					.filter( ":visible" )
					.focus()

					// Manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger( "focusin" );
				} catch ( e ) {

					// Ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep( this.errorList, function( n ) {
				return n.element.name === lastActive.name;
			} ).length === 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// Select all valid inputs inside the form (no submit or reset buttons)
			return $( this.currentForm )
			.find( "input, select, textarea, [contenteditable]" )
			.not( ":submit, :reset, :image, :disabled" )
			.not( this.settings.ignore )
			.filter( function() {
				var name = this.name || $( this ).attr( "name" ); // For contenteditable
				if ( !name && validator.settings.debug && window.console ) {
					console.error( "%o has no name assigned", this );
				}

				// Set form expando on contenteditable
				if ( this.hasAttribute( "contenteditable" ) ) {
					this.form = $( this ).closest( "form" )[ 0 ];
				}

				// Select only the first element for each name, and only those with rules specified
				if ( name in rulesCache || !validator.objectLength( $( this ).rules() ) ) {
					return false;
				}

				rulesCache[ name ] = true;
				return true;
			} );
		},

		clean: function( selector ) {
			return $( selector )[ 0 ];
		},

		errors: function() {
			var errorClass = this.settings.errorClass.split( " " ).join( "." );
			return $( this.settings.errorElement + "." + errorClass, this.errorContext );
		},

		resetInternals: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $( [] );
			this.toHide = $( [] );
		},

		reset: function() {
			this.resetInternals();
			this.currentElements = $( [] );
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor( element );
		},

		elementValue: function( element ) {
			var $element = $( element ),
				type = element.type,
				val, idx;

			if ( type === "radio" || type === "checkbox" ) {
				return this.findByName( element.name ).filter( ":checked" ).val();
			} else if ( type === "number" && typeof element.validity !== "undefined" ) {
				return element.validity.badInput ? "NaN" : $element.val();
			}

			if ( element.hasAttribute( "contenteditable" ) ) {
				val = $element.text();
			} else {
				val = $element.val();
			}

			if ( type === "file" ) {

				// Modern browser (chrome & safari)
				if ( val.substr( 0, 12 ) === "C:\\fakepath\\" ) {
					return val.substr( 12 );
				}

				// Legacy browsers
				// Unix-based path
				idx = val.lastIndexOf( "/" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

				// Windows-based path
				idx = val.lastIndexOf( "\\" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

				// Just the file name
				return val;
			}

			if ( typeof val === "string" ) {
				return val.replace( /\r/g, "" );
			}
			return val;
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $( element ).rules(),
				rulesCount = $.map( rules, function( n, i ) {
					return i;
				} ).length,
				dependencyMismatch = false,
				val = this.elementValue( element ),
				result, method, rule;

			// If a normalizer is defined for this element, then
			// call it to retreive the changed value instead
			// of using the real one.
			// Note that `this` in the normalizer is `element`.
			if ( typeof rules.normalizer === "function" ) {
				val = rules.normalizer.call( element, val );

				if ( typeof val !== "string" ) {
					throw new TypeError( "The normalizer should return a string value." );
				}

				// Delete the normalizer from rules to avoid treating
				// it as a pre-defined method.
				delete rules.normalizer;
			}

			for ( method in rules ) {
				rule = { method: method, parameters: rules[ method ] };
				try {
					result = $.validator.methods[ method ].call( this, val, element, rule.parameters );

					// If a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result === "dependency-mismatch" && rulesCount === 1 ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result === "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor( element ) );
						return;
					}

					if ( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch ( e ) {
					if ( this.settings.debug && window.console ) {
						console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
					}
					if ( e instanceof TypeError ) {
						e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
					}

					throw e;
				}
			}
			if ( dependencyMismatch ) {
				return;
			}
			if ( this.objectLength( rules ) ) {
				this.successList.push( element );
			}
			return true;
		},

		// Return the custom message for the given element and validation method
		// specified in the element's HTML5 data attribute
		// return the generic message if present and no method specific message is present
		customDataMessage: function( element, method ) {
			return $( element ).data( "msg" + method.charAt( 0 ).toUpperCase() +
				method.substring( 1 ).toLowerCase() ) || $( element ).data( "msg" );
		},

		// Return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[ name ];
			return m && ( m.constructor === String ? m : m[ method ] );
		},

		// Return the first defined argument, allowing empty strings
		findDefined: function() {
			for ( var i = 0; i < arguments.length; i++ ) {
				if ( arguments[ i ] !== undefined ) {
					return arguments[ i ];
				}
			}
			return undefined;
		},

		// The second parameter 'rule' used to be a string, and extended to an object literal
		// of the following form:
		// rule = {
		//     method: "method name",
		//     parameters: "the given method parameters"
		// }
		//
		// The old behavior still supported, kept to maintain backward compatibility with
		// old code, and will be removed in the next major release.
		defaultMessage: function( element, rule ) {
			if ( typeof rule === "string" ) {
				rule = { method: rule };
			}

			var message = this.findDefined(
					this.customMessage( element.name, rule.method ),
					this.customDataMessage( element, rule.method ),

					// 'title' is never undefined, so handle empty string as undefined
					!this.settings.ignoreTitle && element.title || undefined,
					$.validator.messages[ rule.method ],
					"<strong>Warning: No message defined for " + element.name + "</strong>"
				),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message === "function" ) {
				message = message.call( this, rule.parameters, element );
			} else if ( theregex.test( message ) ) {
				message = $.validator.format( message.replace( theregex, "{$1}" ), rule.parameters );
			}

			return message;
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule );

			this.errorList.push( {
				message: message,
				element: element,
				method: rule.method
			} );

			this.errorMap[ element.name ] = message;
			this.submitted[ element.name ] = message;
		},

		addWrapper: function( toToggle ) {
			if ( this.settings.wrapper ) {
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			}
			return toToggle;
		},

		defaultShowErrors: function() {
			var i, elements, error;
			for ( i = 0; this.errorList[ i ]; i++ ) {
				error = this.errorList[ i ];
				if ( this.settings.highlight ) {
					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				}
				this.showLabel( error.element, error.message );
			}
			if ( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if ( this.settings.success ) {
				for ( i = 0; this.successList[ i ]; i++ ) {
					this.showLabel( this.successList[ i ] );
				}
			}
			if ( this.settings.unhighlight ) {
				for ( i = 0, elements = this.validElements(); elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not( this.invalidElements() );
		},

		invalidElements: function() {
			return $( this.errorList ).map( function() {
				return this.element;
			} );
		},

		showLabel: function( element, message ) {
			var place, group, errorID, v,
				error = this.errorsFor( element ),
				elementID = this.idOrName( element ),
				describedBy = $( element ).attr( "aria-describedby" );

			if ( error.length ) {

				// Refresh error/success class
				error.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );

				// Replace message on existing label
				error.html( message );
			} else {

				// Create error element
				error = $( "<" + this.settings.errorElement + ">" )
					.attr( "id", elementID + "-error" )
					.addClass( this.settings.errorClass )
					.html( message || "" );

				// Maintain reference to the element to be placed into the DOM
				place = error;
				if ( this.settings.wrapper ) {

					// Make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					place = error.hide().show().wrap( "<" + this.settings.wrapper + "/>" ).parent();
				}
				if ( this.labelContainer.length ) {
					this.labelContainer.append( place );
				} else if ( this.settings.errorPlacement ) {
					this.settings.errorPlacement.call( this, place, $( element ) );
				} else {
					place.insertAfter( element );
				}

				// Link error back to the element
				if ( error.is( "label" ) ) {

					// If the error is a label, then associate using 'for'
					error.attr( "for", elementID );

					// If the element is not a child of an associated label, then it's necessary
					// to explicitly apply aria-describedby
				} else if ( error.parents( "label[for='" + this.escapeCssMeta( elementID ) + "']" ).length === 0 ) {
					errorID = error.attr( "id" );

					// Respect existing non-error aria-describedby
					if ( !describedBy ) {
						describedBy = errorID;
					} else if ( !describedBy.match( new RegExp( "\\b" + this.escapeCssMeta( errorID ) + "\\b" ) ) ) {

						// Add to end of list if not already present
						describedBy += " " + errorID;
					}
					$( element ).attr( "aria-describedby", describedBy );

					// If this element is grouped, then assign to all elements in the same group
					group = this.groups[ element.name ];
					if ( group ) {
						v = this;
						$.each( v.groups, function( name, testgroup ) {
							if ( testgroup === group ) {
								$( "[name='" + v.escapeCssMeta( name ) + "']", v.currentForm )
									.attr( "aria-describedby", error.attr( "id" ) );
							}
						} );
					}
				}
			}
			if ( !message && this.settings.success ) {
				error.text( "" );
				if ( typeof this.settings.success === "string" ) {
					error.addClass( this.settings.success );
				} else {
					this.settings.success( error, element );
				}
			}
			this.toShow = this.toShow.add( error );
		},

		errorsFor: function( element ) {
			var name = this.escapeCssMeta( this.idOrName( element ) ),
				describer = $( element ).attr( "aria-describedby" ),
				selector = "label[for='" + name + "'], label[for='" + name + "'] *";

			// 'aria-describedby' should directly reference the error element
			if ( describer ) {
				selector = selector + ", #" + this.escapeCssMeta( describer )
					.replace( /\s+/g, ", #" );
			}

			return this
				.errors()
				.filter( selector );
		},

		// See https://api.jquery.com/category/selectors/, for CSS
		// meta-characters that should be escaped in order to be used with JQuery
		// as a literal part of a name/id or any selector.
		escapeCssMeta: function( string ) {
			return string.replace( /([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1" );
		},

		idOrName: function( element ) {
			return this.groups[ element.name ] || ( this.checkable( element ) ? element.name : element.id || element.name );
		},

		validationTargetFor: function( element ) {

			// If radio/checkbox, validate first element in group instead
			if ( this.checkable( element ) ) {
				element = this.findByName( element.name );
			}

			// Always apply ignore filter
			return $( element ).not( this.settings.ignore )[ 0 ];
		},

		checkable: function( element ) {
			return ( /radio|checkbox/i ).test( element.type );
		},

		findByName: function( name ) {
			return $( this.currentForm ).find( "[name='" + this.escapeCssMeta( name ) + "']" );
		},

		getLength: function( value, element ) {
			switch ( element.nodeName.toLowerCase() ) {
			case "select":
				return $( "option:selected", element ).length;
			case "input":
				if ( this.checkable( element ) ) {
					return this.findByName( element.name ).filter( ":checked" ).length;
				}
			}
			return value.length;
		},

		depend: function( param, element ) {
			return this.dependTypes[ typeof param ] ? this.dependTypes[ typeof param ]( param, element ) : true;
		},

		dependTypes: {
			"boolean": function( param ) {
				return param;
			},
			"string": function( param, element ) {
				return !!$( param, element.form ).length;
			},
			"function": function( param, element ) {
				return param( element );
			}
		},

		optional: function( element ) {
			var val = this.elementValue( element );
			return !$.validator.methods.required.call( this, val, element ) && "dependency-mismatch";
		},

		startRequest: function( element ) {
			if ( !this.pending[ element.name ] ) {
				this.pendingRequest++;
				$( element ).addClass( this.settings.pendingClass );
				this.pending[ element.name ] = true;
			}
		},

		stopRequest: function( element, valid ) {
			this.pendingRequest--;

			// Sometimes synchronization fails, make sure pendingRequest is never < 0
			if ( this.pendingRequest < 0 ) {
				this.pendingRequest = 0;
			}
			delete this.pending[ element.name ];
			$( element ).removeClass( this.settings.pendingClass );
			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
				$( this.currentForm ).submit();
				this.formSubmitted = false;
			} else if ( !valid && this.pendingRequest === 0 && this.formSubmitted ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
				this.formSubmitted = false;
			}
		},

		previousValue: function( element, method ) {
			method = typeof method === "string" && method || "remote";

			return $.data( element, "previousValue" ) || $.data( element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, { method: method } )
			} );
		},

		// Cleans up all forms and elements, removes validator-specific events
		destroy: function() {
			this.resetForm();

			$( this.currentForm )
				.off( ".validate" )
				.removeData( "validator" )
				.find( ".validate-equalTo-blur" )
					.off( ".validate-equalTo" )
					.removeClass( "validate-equalTo-blur" );
		}

	},

	classRuleSettings: {
		required: { required: true },
		email: { email: true },
		url: { url: true },
		date: { date: true },
		dateISO: { dateISO: true },
		number: { number: true },
		digits: { digits: true },
		creditcard: { creditcard: true }
	},

	addClassRules: function( className, rules ) {
		if ( className.constructor === String ) {
			this.classRuleSettings[ className ] = rules;
		} else {
			$.extend( this.classRuleSettings, className );
		}
	},

	classRules: function( element ) {
		var rules = {},
			classes = $( element ).attr( "class" );

		if ( classes ) {
			$.each( classes.split( " " ), function() {
				if ( this in $.validator.classRuleSettings ) {
					$.extend( rules, $.validator.classRuleSettings[ this ] );
				}
			} );
		}
		return rules;
	},

	normalizeAttributeRule: function( rules, type, method, value ) {

		// Convert the value to a number for number inputs, and for text for backwards compability
		// allows type="date" and others to be compared as strings
		if ( /min|max|step/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
			value = Number( value );

			// Support Opera Mini, which returns NaN for undefined minlength
			if ( isNaN( value ) ) {
				value = undefined;
			}
		}

		if ( value || value === 0 ) {
			rules[ method ] = value;
		} else if ( type === method && type !== "range" ) {

			// Exception: the jquery validate 'range' method
			// does not test for the html5 'range' type
			rules[ method ] = true;
		}
	},

	attributeRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {

			// Support for <input required> in both html5 and older browsers
			if ( method === "required" ) {
				value = element.getAttribute( method );

				// Some browsers return an empty string for the required attribute
				// and non-HTML5 browsers might have required="" markup
				if ( value === "" ) {
					value = true;
				}

				// Force non-HTML5 browsers to return bool
				value = !!value;
			} else {
				value = $element.attr( method );
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}

		// 'maxlength' may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
		if ( rules.maxlength && /-1|2147483647|524288/.test( rules.maxlength ) ) {
			delete rules.maxlength;
		}

		return rules;
	},

	dataRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {
			value = $element.data( "rule" + method.charAt( 0 ).toUpperCase() + method.substring( 1 ).toLowerCase() );
			this.normalizeAttributeRule( rules, type, method, value );
		}
		return rules;
	},

	staticRules: function( element ) {
		var rules = {},
			validator = $.data( element.form, "validator" );

		if ( validator.settings.rules ) {
			rules = $.validator.normalizeRule( validator.settings.rules[ element.name ] ) || {};
		}
		return rules;
	},

	normalizeRules: function( rules, element ) {

		// Handle dependency check
		$.each( rules, function( prop, val ) {

			// Ignore rule when param is explicitly false, eg. required:false
			if ( val === false ) {
				delete rules[ prop ];
				return;
			}
			if ( val.param || val.depends ) {
				var keepRule = true;
				switch ( typeof val.depends ) {
				case "string":
					keepRule = !!$( val.depends, element.form ).length;
					break;
				case "function":
					keepRule = val.depends.call( element, element );
					break;
				}
				if ( keepRule ) {
					rules[ prop ] = val.param !== undefined ? val.param : true;
				} else {
					$.data( element.form, "validator" ).resetElements( $( element ) );
					delete rules[ prop ];
				}
			}
		} );

		// Evaluate parameters
		$.each( rules, function( rule, parameter ) {
			rules[ rule ] = $.isFunction( parameter ) && rule !== "normalizer" ? parameter( element ) : parameter;
		} );

		// Clean number parameters
		$.each( [ "minlength", "maxlength" ], function() {
			if ( rules[ this ] ) {
				rules[ this ] = Number( rules[ this ] );
			}
		} );
		$.each( [ "rangelength", "range" ], function() {
			var parts;
			if ( rules[ this ] ) {
				if ( $.isArray( rules[ this ] ) ) {
					rules[ this ] = [ Number( rules[ this ][ 0 ] ), Number( rules[ this ][ 1 ] ) ];
				} else if ( typeof rules[ this ] === "string" ) {
					parts = rules[ this ].replace( /[\[\]]/g, "" ).split( /[\s,]+/ );
					rules[ this ] = [ Number( parts[ 0 ] ), Number( parts[ 1 ] ) ];
				}
			}
		} );

		if ( $.validator.autoCreateRanges ) {

			// Auto-create ranges
			if ( rules.min != null && rules.max != null ) {
				rules.range = [ rules.min, rules.max ];
				delete rules.min;
				delete rules.max;
			}
			if ( rules.minlength != null && rules.maxlength != null ) {
				rules.rangelength = [ rules.minlength, rules.maxlength ];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function( data ) {
		if ( typeof data === "string" ) {
			var transformed = {};
			$.each( data.split( /\s/ ), function() {
				transformed[ this ] = true;
			} );
			data = transformed;
		}
		return data;
	},

	// http://jqueryvalidation.org/jQuery.validator.addMethod/
	addMethod: function( name, method, message ) {
		$.validator.methods[ name ] = method;
		$.validator.messages[ name ] = message !== undefined ? message : $.validator.messages[ name ];
		if ( method.length < 3 ) {
			$.validator.addClassRules( name, $.validator.normalizeRule( name ) );
		}
	},

	// http://jqueryvalidation.org/jQuery.validator.methods/
	methods: {

		// http://jqueryvalidation.org/required-method/
		required: function( value, element, param ) {

			// Check if dependency is met
			if ( !this.depend( param, element ) ) {
				return "dependency-mismatch";
			}
			if ( element.nodeName.toLowerCase() === "select" ) {

				// Could be an array for select-multiple or a string, both are fine this way
				var val = $( element ).val();
				return val && val.length > 0;
			}
			if ( this.checkable( element ) ) {
				return this.getLength( value, element ) > 0;
			}
			return value.length > 0;
		},

		// http://jqueryvalidation.org/email-method/
		email: function( value, element ) {

			// From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
			// Retrieved 2014-01-14
			// If you have a problem with this implementation, report a bug against the above spec
			// Or use custom methods to implement your own email validation
			return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
		},

		// http://jqueryvalidation.org/url-method/
		url: function( value, element ) {

			// Copyright (c) 2010-2013 Diego Perini, MIT licensed
			// https://gist.github.com/dperini/729294
			// see also https://mathiasbynens.be/demo/url-regex
			// modified to allow protocol-relative URLs
			return this.optional( element ) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( value );
		},

		// http://jqueryvalidation.org/date-method/
		date: function( value, element ) {
			return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );
		},

		// http://jqueryvalidation.org/dateISO-method/
		dateISO: function( value, element ) {
			return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
		},

		// http://jqueryvalidation.org/number-method/
		number: function( value, element ) {
			return this.optional( element ) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value );
		},

		// http://jqueryvalidation.org/digits-method/
		digits: function( value, element ) {
			return this.optional( element ) || /^\d+$/.test( value );
		},

		// http://jqueryvalidation.org/minlength-method/
		minlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length >= param;
		},

		// http://jqueryvalidation.org/maxlength-method/
		maxlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length <= param;
		},

		// http://jqueryvalidation.org/rangelength-method/
		rangelength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );
		},

		// http://jqueryvalidation.org/min-method/
		min: function( value, element, param ) {
			return this.optional( element ) || value >= param;
		},

		// http://jqueryvalidation.org/max-method/
		max: function( value, element, param ) {
			return this.optional( element ) || value <= param;
		},

		// http://jqueryvalidation.org/range-method/
		range: function( value, element, param ) {
			return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );
		},

		// http://jqueryvalidation.org/step-method/
		step: function( value, element, param ) {
			var type = $( element ).attr( "type" ),
				errorMessage = "Step attribute on input type " + type + " is not supported.",
				supportedTypes = [ "text", "number", "range" ],
				re = new RegExp( "\\b" + type + "\\b" ),
				notSupported = type && !re.test( supportedTypes.join() ),
				decimalPlaces = function( num ) {
					var match = ( "" + num ).match( /(?:\.(\d+))?$/ );
					if ( !match ) {
						return 0;
					}

					// Number of digits right of decimal point.
					return match[ 1 ] ? match[ 1 ].length : 0;
				},
				toInt = function( num ) {
					return Math.round( num * Math.pow( 10, decimals ) );
				},
				valid = true,
				decimals;

			// Works only for text, number and range input types
			// TODO find a way to support input types date, datetime, datetime-local, month, time and week
			if ( notSupported ) {
				throw new Error( errorMessage );
			}

			decimals = decimalPlaces( param );

			// Value can't have too many decimals
			if ( decimalPlaces( value ) > decimals || toInt( value ) % toInt( param ) !== 0 ) {
				valid = false;
			}

			return this.optional( element ) || valid;
		},

		// http://jqueryvalidation.org/equalTo-method/
		equalTo: function( value, element, param ) {

			// Bind to the blur event of the target in order to revalidate whenever the target field is updated
			var target = $( param );
			if ( this.settings.onfocusout && target.not( ".validate-equalTo-blur" ).length ) {
				target.addClass( "validate-equalTo-blur" ).on( "blur.validate-equalTo", function() {
					$( element ).valid();
				} );
			}
			return value === target.val();
		},

		// http://jqueryvalidation.org/remote-method/
		remote: function( value, element, param, method ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			}

			method = typeof method === "string" && method || "remote";

			var previous = this.previousValue( element, method ),
				validator, data, optionDataString;

			if ( !this.settings.messages[ element.name ] ) {
				this.settings.messages[ element.name ] = {};
			}
			previous.originalMessage = previous.originalMessage || this.settings.messages[ element.name ][ method ];
			this.settings.messages[ element.name ][ method ] = previous.message;

			param = typeof param === "string" && { url: param } || param;
			optionDataString = $.param( $.extend( { data: value }, param.data ) );
			if ( previous.old === optionDataString ) {
				return previous.valid;
			}

			previous.old = optionDataString;
			validator = this;
			this.startRequest( element );
			data = {};
			data[ element.name ] = value;
			$.ajax( $.extend( true, {
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				context: validator.currentForm,
				success: function( response ) {
					var valid = response === true || response === "true",
						errors, message, submitted;

					validator.settings.messages[ element.name ][ method ] = previous.originalMessage;
					if ( valid ) {
						submitted = validator.formSubmitted;
						validator.resetInternals();
						validator.toHide = validator.errorsFor( element );
						validator.formSubmitted = submitted;
						validator.successList.push( element );
						validator.invalid[ element.name ] = false;
						validator.showErrors();
					} else {
						errors = {};
						message = response || validator.defaultMessage( element, { method: method, parameters: value } );
						errors[ element.name ] = previous.message = message;
						validator.invalid[ element.name ] = true;
						validator.showErrors( errors );
					}
					previous.valid = valid;
					validator.stopRequest( element, valid );
				}
			}, param ) );
			return "pending";
		}
	}

} );

// Ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

var pendingRequests = {},
	ajax;

// Use a prefilter if available (1.5+)
if ( $.ajaxPrefilter ) {
	$.ajaxPrefilter( function( settings, _, xhr ) {
		var port = settings.port;
		if ( settings.mode === "abort" ) {
			if ( pendingRequests[ port ] ) {
				pendingRequests[ port ].abort();
			}
			pendingRequests[ port ] = xhr;
		}
	} );
} else {

	// Proxy ajax
	ajax = $.ajax;
	$.ajax = function( settings ) {
		var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
			port = ( "port" in settings ? settings : $.ajaxSettings ).port;
		if ( mode === "abort" ) {
			if ( pendingRequests[ port ] ) {
				pendingRequests[ port ].abort();
			}
			pendingRequests[ port ] = ajax.apply( this, arguments );
			return pendingRequests[ port ];
		}
		return ajax.apply( this, arguments );
	};
}
return $;
}));
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.7'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector === '#' ? [] : selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.7
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.7'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d).prop(d, true)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d).prop(d, false)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target).closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"], input[type="checkbox"]'))) {
        // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
        e.preventDefault()
        // The target component still receive the focus
        if ($btn.is('input,button')) $btn.trigger('focus')
        else $btn.find('input:visible,button:visible').first().trigger('focus')
      }
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.7'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.7'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.7'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.7'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (document !== e.target &&
            this.$element[0] !== e.target &&
            !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.7
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.7'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
        that.$element
          .removeAttr('aria-describedby')
          .trigger('hidden.bs.' + that.type)
      }
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var isSvg = window.SVGElement && el instanceof window.SVGElement
    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
    // See https://github.com/twbs/bootstrap/issues/20280
    var elOffset  = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset())
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
      that.$element = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.7
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.7'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.7
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.7'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.7
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.7'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.7'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

/*! WOW - v1.0.1 - 2014-08-15
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d=function(a,b){return function(){return a.apply(b,arguments)}},e=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),this.WOW=function(){function f(a){null==a&&(a={}),this.scrollCallback=d(this.scrollCallback,this),this.scrollHandler=d(this.scrollHandler,this),this.start=d(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c}return f.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0},f.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():document.addEventListener("DOMContentLoaded",this.start),this.finished=[]},f.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else{for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}return this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],g.push(function(){var a,b,e,f;for(e=d.addedNodes||[],f=[],a=0,b=e.length;b>a;a++)c=e[a],f.push(this.doSync(c));return f}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},f.prototype.stop=function(){return this.stopped=!0,window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},f.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},f.prototype.doSync=function(a){var b,c,d,f,g;if(!this.stopped){if(null==a&&(a=this.element),1!==a.nodeType)return;for(a=a.parentNode||a,f=a.querySelectorAll("."+this.config.boxClass),g=[],c=0,d=f.length;d>c;c++)b=f[c],e.call(this.all,b)<0?(this.applyStyle(b,!0),this.boxes.push(b),this.all.push(b),g.push(this.scrolled=!0)):g.push(void 0);return g}},f.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass},f.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},f.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),f.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.setAttribute("style","visibility: visible;"));return e},f.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},f.prototype.vendors=["moz","webkit"],f.prototype.vendorSet=function(a,b){var c,d,e,f;f=[];for(c in b)d=b[c],a[""+c]=d,f.push(function(){var b,f,g,h;for(g=this.vendors,h=[],b=0,f=g.length;f>b;b++)e=g[b],h.push(a[""+e+c.charAt(0).toUpperCase()+c.substr(1)]=d);return h}.call(this));return f},f.prototype.vendorCSS=function(a,b){var c,d,e,f,g,h;for(d=window.getComputedStyle(a),c=d.getPropertyCSSValue(b),h=this.vendors,f=0,g=h.length;g>f;f++)e=h[f],c=c||d.getPropertyCSSValue("-"+e+"-"+b);return c},f.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=window.getComputedStyle(a).getPropertyValue("animation-name")}return"none"===b?"":b},f.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},f.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},f.prototype.scrollHandler=function(){return this.scrolled=!0},f.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},f.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},f.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,innerHeight)-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},f.prototype.util=function(){return null!=this._util?this._util:this._util=new b},f.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},f}()}).call(this);
$(function($) {

    "use strict";

    //Loading gif calling
    function handlePreloader() {
            $('.preloader').delay(500).fadeOut(500);
    }

    //Change Header Style
    // function headerStyle() {
    //     if($('.main-header').length){
    //         var windowpos = $(window).scrollTop();
    //         if (windowpos >= 1) {
    //             $('.main-header').addClass('header-fixed');
    //         } else {
    //             $('.main-header').removeClass('header-fixed');
    //         }
    //     }
    // }
    function headerStyle() {
        if($('.main-header').length){
            var windowpos = $(window).scrollTop();
            if (windowpos >= 1) {
                $('.main-header').addClass('header-fixed');
            } else {
                $('.main-header').removeClass('header-fixed');
            }
        }
    }

    // back to top
    function backToTop () {
        var offset = 1;
        var duration = 700;
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > offset) {
                $('.back-to-top').fadeIn(duration);
            } else {
                $('.back-to-top').fadeOut(duration);
            }
        });

        $('.back-to-top').on('click', function(event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: 0}, duration);
            return false;
        });
    }

    // User define function
    function ScrollToActiveMenu () {
        var scrollPosition = $(document).scrollTop();
        $('.navbar-collapse .scroll > a').each(function () {
            var currentLink = $(this);
            var refElement = $(currentLink.attr("href"));
            console.log(refElement);
            if (refElement.position().top-80 <= scrollPosition) {
                $('.navbar-collapse ul li.scroll > a').parent().removeClass("current");
                currentLink.parent().addClass("current");
            }
            else{
                currentLink.parent().removeClass("current");
            }
        });

    }

    // Elements Animation
    if($('.wow').length){
        var wow = new WOW({
            mobile:       false
        });
        wow.init();
    }


    /* ==========================================================================
     When document is ready, do
     ========================================================================== */

    $(document).ready(function() {
        handlePreloader();
        headerStyle();
        backToTop();
    });

    /* ==========================================================================
     When document is Scrolling, do
     ========================================================================== */

    $(window).on('scroll', function() {
        headerStyle();
        ScrollToActiveMenu();
    });

});
(function(b){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],b)}else{b(jQuery)}}(function(ac){var S="left",T="right",ad="up",G="down",af="in",E="out",V="none",L="auto",W="swipe",K="pinch",R="tap",Y="doubletap",ag="longtap",F="hold",M="horizontal",J="vertical",Z="all",O=10,ab="start",X="move",aa="end",Q="cancel",ah="ontouchstart" in window,I=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,ae=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,P="TouchSwipe";var U={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe"};ac.fn.swipe=function(a){var b=ac(this),c=b.data(P);if(c&&typeof a==="string"){if(c[a]){return c[a].apply(this,Array.prototype.slice.call(arguments,1))}else{ac.error("Method "+a+" does not exist on jQuery.swipe")}}else{if(!c&&(typeof a==="object"||!a)){return H.apply(this,arguments)}}return b};ac.fn.swipe.defaults=U;ac.fn.swipe.phases={PHASE_START:ab,PHASE_MOVE:X,PHASE_END:aa,PHASE_CANCEL:Q};ac.fn.swipe.directions={LEFT:S,RIGHT:T,UP:ad,DOWN:G,IN:af,OUT:E};ac.fn.swipe.pageScroll={NONE:V,HORIZONTAL:M,VERTICAL:J,AUTO:L};ac.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:Z};function H(a){if(a&&(a.allowPageScroll===undefined&&(a.swipe!==undefined||a.swipeStatus!==undefined))){a.allowPageScroll=V}if(a.click!==undefined&&a.tap===undefined){a.tap=a.click}if(!a){a={}}a=ac.extend({},ac.fn.swipe.defaults,a);return this.each(function(){var b=ac(this);var c=b.data(P);if(!c){c=new N(this,a);b.data(P,c)}})}function N(bT,D){var v=(ah||ae||!D.fallbackToMouseEvents),t=v?(ae?(I?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",x=v?(ae?(I?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",h=v?(ae?(I?"MSPointerUp":"pointerup"):"touchend"):"mouseup",j=v?null:"mouseleave",bK=(ae?(I?"MSPointerCancel":"pointercancel"):"touchcancel");var bh=0,by=null,bm=0,bW=0,bo=0,y=1,ay=0,bE=0,q=null;var bw=ac(bT);var b="start";var f=0;var bx=null;var i=0,bV=0,bS=0,bk=0,p=0;var br=null,bi=null;try{bw.bind(t,bA);bw.bind(bK,bO)}catch(bd){ac.error("events not supported "+t+","+bK+" on jQuery.swipe")}this.enable=function(){bw.bind(t,bA);bw.bind(bK,bO);return bw};this.disable=function(){bD();return bw};this.destroy=function(){bD();bw.data(P,null);return bw};this.option=function(ai,aj){if(D[ai]!==undefined){if(aj===undefined){return D[ai]}else{D[ai]=aj}}else{ac.error("Option "+ai+" does not exist on jQuery.swipe.options")}return null};function bA(aj){if(bM()){return}if(ac(aj.target).closest(D.excludedElements,bw).length>0){return}var ai=aj.originalEvent?aj.originalEvent:aj;var ak,al=ah?ai.touches[0]:ai;b=ab;if(ah){f=ai.touches.length}else{aj.preventDefault()}bh=0;by=null;bE=null;bm=0;bW=0;bo=0;y=1;ay=0;bx=be();q=bn();k();if(!ah||(f===D.fingers||D.fingers===Z)||bq()){bf(0,al);i=aw();if(f==2){bf(1,ai.touches[1]);bW=bo=av(bx[0].start,bx[1].start)}if(D.swipeStatus||D.pinchStatus){ak=o(ai,b)}}else{ak=false}if(ak===false){b=Q;o(ai,b);return ak}else{if(D.hold){bi=setTimeout(ac.proxy(function(){bw.trigger("hold",[ai.target]);if(D.hold){ak=D.hold.call(bw,ai,ai.target)}},this),D.longTapThreshold)}a0(true)}return null}function bU(al){var ai=al.originalEvent?al.originalEvent:al;if(b===aa||b===Q||bb()){return}var am,an=ah?ai.touches[0]:ai;var ak=bG(an);bV=aw();if(ah){f=ai.touches.length}if(D.hold){clearTimeout(bi)}b=X;if(f==2){if(bW==0){bf(1,ai.touches[1]);bW=bo=av(bx[0].start,bx[1].start)}else{bG(ai.touches[1]);bo=av(bx[0].end,bx[1].end);bE=ax(bx[0].end,bx[1].end)}y=bQ(bW,bo);ay=Math.abs(bW-bo)}if((f===D.fingers||D.fingers===Z)||!ah||bq()){by=bC(ak.start,ak.end);bc(al,by);bh=bv(ak.start,ak.end);bm=bB();bF(by,bh);if(D.swipeStatus||D.pinchStatus){am=o(ai,b)}if(!D.triggerOnTouchEnd||D.triggerOnTouchLeave){var ao=true;if(D.triggerOnTouchLeave){var aj=bp(this);ao=C(ak.end,aj)}if(!D.triggerOnTouchEnd&&ao){b=bL(X)}else{if(D.triggerOnTouchLeave&&!ao){b=bL(aa)}}if(b==Q||b==aa){o(ai,b)}}}else{b=Q;o(ai,b)}if(am===false){b=Q;o(ai,b)}}function r(aj){var ai=aj.originalEvent;if(ah){if(ai.touches.length>0){B();return true}}if(bb()){f=bk}bV=aw();bm=bB();if(n()||!ba()){b=Q;o(ai,b)}else{if(D.triggerOnTouchEnd||(D.triggerOnTouchEnd==false&&b===X)){aj.preventDefault();b=aa;o(ai,b)}else{if(!D.triggerOnTouchEnd&&bR()){b=aa;bI(ai,b,R)}else{if(b===X){b=Q;o(ai,b)}}}}a0(false);return null}function bO(){f=0;bV=0;i=0;bW=0;bo=0;y=1;k();a0(false)}function s(aj){var ai=aj.originalEvent;if(D.triggerOnTouchLeave){b=bL(aa);o(ai,b)}}function bD(){bw.unbind(t,bA);bw.unbind(bK,bO);bw.unbind(x,bU);bw.unbind(h,r);if(j){bw.unbind(j,s)}a0(false)}function bL(ai){var aj=ai;var ak=bN();var al=ba();var am=n();if(!ak||am){aj=Q}else{if(al&&ai==X&&(!D.triggerOnTouchEnd||D.triggerOnTouchLeave)){aj=aa}else{if(!al&&ai==aa&&D.triggerOnTouchLeave){aj=Q}}}return aj}function o(ai,ak){var aj=undefined;if(u()||g()){aj=bI(ai,ak,W)}else{if((m()||bq())&&aj!==false){aj=bI(ai,ak,K)}}if(bH()&&aj!==false){aj=bI(ai,ak,Y)}else{if(az()&&aj!==false){aj=bI(ai,ak,ag)}else{if(bg()&&aj!==false){aj=bI(ai,ak,R)}}}if(ak===Q){bO(ai)}if(ak===aa){if(ah){if(ai.touches.length==0){bO(ai)}}else{bO(ai)}}return aj}function bI(ai,al,aj){var ak=undefined;if(aj==W){bw.trigger("swipeStatus",[al,by||null,bh||0,bm||0,f,bx]);if(D.swipeStatus){ak=D.swipeStatus.call(bw,ai,al,by||null,bh||0,bm||0,f,bx);if(ak===false){return false}}if(al==aa&&bs()){bw.trigger("swipe",[by,bh,bm,f,bx]);if(D.swipe){ak=D.swipe.call(bw,ai,by,bh,bm,f,bx);if(ak===false){return false}}switch(by){case S:bw.trigger("swipeLeft",[by,bh,bm,f,bx]);if(D.swipeLeft){ak=D.swipeLeft.call(bw,ai,by,bh,bm,f,bx)}break;case T:bw.trigger("swipeRight",[by,bh,bm,f,bx]);if(D.swipeRight){ak=D.swipeRight.call(bw,ai,by,bh,bm,f,bx)}break;case ad:bw.trigger("swipeUp",[by,bh,bm,f,bx]);if(D.swipeUp){ak=D.swipeUp.call(bw,ai,by,bh,bm,f,bx)}break;case G:bw.trigger("swipeDown",[by,bh,bm,f,bx]);if(D.swipeDown){ak=D.swipeDown.call(bw,ai,by,bh,bm,f,bx)}break}}}if(aj==K){bw.trigger("pinchStatus",[al,bE||null,ay||0,bm||0,f,y,bx]);if(D.pinchStatus){ak=D.pinchStatus.call(bw,ai,al,bE||null,ay||0,bm||0,f,y,bx);if(ak===false){return false}}if(al==aa&&bP()){switch(bE){case af:bw.trigger("pinchIn",[bE||null,ay||0,bm||0,f,y,bx]);if(D.pinchIn){ak=D.pinchIn.call(bw,ai,bE||null,ay||0,bm||0,f,y,bx)}break;case E:bw.trigger("pinchOut",[bE||null,ay||0,bm||0,f,y,bx]);if(D.pinchOut){ak=D.pinchOut.call(bw,ai,bE||null,ay||0,bm||0,f,y,bx)}break}}}if(aj==R){if(al===Q||al===aa){clearTimeout(br);clearTimeout(bi);if(c()&&!w()){p=aw();br=setTimeout(ac.proxy(function(){p=null;bw.trigger("tap",[ai.target]);if(D.tap){ak=D.tap.call(bw,ai,ai.target)}},this),D.doubleTapThreshold)}else{p=null;bw.trigger("tap",[ai.target]);if(D.tap){ak=D.tap.call(bw,ai,ai.target)}}}}else{if(aj==Y){if(al===Q||al===aa){clearTimeout(br);p=null;bw.trigger("doubletap",[ai.target]);if(D.doubleTap){ak=D.doubleTap.call(bw,ai,ai.target)}}}else{if(aj==ag){if(al===Q||al===aa){clearTimeout(br);p=null;bw.trigger("longtap",[ai.target]);if(D.longTap){ak=D.longTap.call(bw,ai,ai.target)}}}}}return ak}function ba(){var ai=true;if(D.threshold!==null){ai=bh>=D.threshold}return ai}function n(){var ai=false;if(D.cancelThreshold!==null&&by!==null){ai=(bu(by)-bh)>=D.cancelThreshold}return ai}function bj(){if(D.pinchThreshold!==null){return ay>=D.pinchThreshold}return true}function bN(){var ai;if(D.maxTimeThreshold){if(bm>=D.maxTimeThreshold){ai=false}else{ai=true}}else{ai=true}return ai}function bc(ak,aj){if(D.allowPageScroll===V||bq()){ak.preventDefault()}else{var ai=D.allowPageScroll===L;switch(aj){case S:if((D.swipeLeft&&ai)||(!ai&&D.allowPageScroll!=M)){ak.preventDefault()}break;case T:if((D.swipeRight&&ai)||(!ai&&D.allowPageScroll!=M)){ak.preventDefault()}break;case ad:if((D.swipeUp&&ai)||(!ai&&D.allowPageScroll!=J)){ak.preventDefault()}break;case G:if((D.swipeDown&&ai)||(!ai&&D.allowPageScroll!=J)){ak.preventDefault()}break}}}function bP(){var aj=bz();var ak=d();var ai=bj();return aj&&ak&&ai}function bq(){return !!(D.pinchStatus||D.pinchIn||D.pinchOut)}function m(){return !!(bP()&&bq())}function bs(){var ak=bN();var ai=ba();var al=bz();var an=d();var am=n();var aj=!am&&an&&al&&ai&&ak;return aj}function g(){return !!(D.swipe||D.swipeStatus||D.swipeLeft||D.swipeRight||D.swipeUp||D.swipeDown)}function u(){return !!(bs()&&g())}function bz(){return((f===D.fingers||D.fingers===Z)||!ah)}function d(){return bx[0].end.x!==0}function bR(){return !!(D.tap)}function c(){return !!(D.doubleTap)}function bt(){return !!(D.longTap)}function l(){if(p==null){return false}var ai=aw();return(c()&&((ai-p)<=D.doubleTapThreshold))}function w(){return l()}function z(){return((f===1||!ah)&&(isNaN(bh)||bh<D.threshold))}function a(){return((bm>D.longTapThreshold)&&(bh<O))}function bg(){return !!(z()&&bR())}function bH(){return !!(l()&&c())}function az(){return !!(a()&&bt())}function B(){bS=aw();bk=event.touches.length+1}function k(){bS=0;bk=0}function bb(){var aj=false;if(bS){var ai=aw()-bS;if(ai<=D.fingerReleaseThreshold){aj=true}}return aj}function bM(){return !!(bw.data(P+"_intouch")===true)}function a0(ai){if(ai===true){bw.bind(x,bU);bw.bind(h,r);if(j){bw.bind(j,s)}}else{bw.unbind(x,bU,false);bw.unbind(h,r,false);if(j){bw.unbind(j,s,false)}}bw.data(P+"_intouch",ai===true)}function bf(aj,ak){var ai=ak.identifier!==undefined?ak.identifier:0;bx[aj].identifier=ai;bx[aj].start.x=bx[aj].end.x=ak.pageX||ak.clientX;bx[aj].start.y=bx[aj].end.y=ak.pageY||ak.clientY;return bx[aj]}function bG(ak){var ai=ak.identifier!==undefined?ak.identifier:0;var aj=bl(ai);aj.end.x=ak.pageX||ak.clientX;aj.end.y=ak.pageY||ak.clientY;return aj}function bl(ai){for(var aj=0;aj<bx.length;aj++){if(bx[aj].identifier==ai){return bx[aj]}}}function be(){var aj=[];for(var ai=0;ai<=5;ai++){aj.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return aj}function bF(aj,ai){ai=Math.max(ai,bu(aj));q[aj].distance=ai}function bu(ai){if(q[ai]){return q[ai].distance}return undefined}function bn(){var ai={};ai[S]=A(S);ai[T]=A(T);ai[ad]=A(ad);ai[G]=A(G);return ai}function A(ai){return{direction:ai,distance:0}}function bB(){return bV-i}function av(ai,aj){var ak=Math.abs(ai.x-aj.x);var al=Math.abs(ai.y-aj.y);return Math.round(Math.sqrt(ak*ak+al*al))}function bQ(ak,aj){var ai=(aj/ak)*1;return ai.toFixed(2)}function ax(){if(y<1){return E}else{return af}}function bv(ai,aj){return Math.round(Math.sqrt(Math.pow(aj.x-ai.x,2)+Math.pow(aj.y-ai.y,2)))}function bJ(ak,am){var an=ak.x-am.x;var ai=am.y-ak.y;var al=Math.atan2(ai,an);var aj=Math.round(al*180/Math.PI);if(aj<0){aj=360-Math.abs(aj)}return aj}function bC(aj,ak){var ai=bJ(aj,ak);if((ai<=45)&&(ai>=0)){return S}else{if((ai<=360)&&(ai>=315)){return S}else{if((ai>=135)&&(ai<=225)){return T}else{if((ai>45)&&(ai<135)){return G}else{return ad}}}}}function aw(){var ai=new Date();return ai.getTime()}function bp(ak){ak=ac(ak);var ai=ak.offset();var aj={left:ai.left,right:ai.left+ak.outerWidth(),top:ai.top,bottom:ai.top+ak.outerHeight()};return aj}function C(aj,ai){return(aj.x>ai.left&&aj.x<ai.right&&aj.y>ai.top&&aj.y<ai.bottom)}}}));if(typeof(console)==="undefined"){var console={};console.log=console.error=console.info=console.debug=console.warn=console.trace=console.dir=console.dirxml=console.group=console.groupEnd=console.time=console.timeEnd=console.assert=console.profile=console.groupCollapsed=function(){}}if(window.tplogs==true){try{console.groupCollapsed("ThemePunch GreenSocks Logs")}catch(e){}}var oldgs=window.GreenSockGlobals;oldgs_queue=window._gsQueue;var punchgs=window.GreenSockGlobals={};if(window.tplogs==true){try{console.info("Build GreenSock SandBox for ThemePunch Plugins");console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin")}catch(e){}
/*!
 * VERSION: 1.14.2
 * DATE: 2014-10-28
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
}(function(aA,aP){var aL=aA.GreenSockGlobals=aA.GreenSockGlobals||aA;if(!aL.TweenLite){var aB,aC,aG,aT,aF,aI=function(a){var d,b=a.split("."),c=aL;for(d=0;b.length>d;d++){c[b[d]]=c=c[b[d]]||{}}return c},aM=aI("com.greensock"),aU=1e-10,az=function(b){var d,a=[],c=b.length;for(d=0;d!==c;a.push(b[d++])){}return a},aH=function(){},aO=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),aR={},aE=function(c,d,g,b){this.sc=aR[c]?aR[c].sc:[],aR[c]=this,this.gsClass=null,this.func=g;var f=[];this.check=function(l){for(var k,j,a,n,o=d.length,i=o;--o>-1;){(k=aR[d[o]]||new aE(d[o],[])).gsClass?(f[o]=k.gsClass,i--):l&&k.sc.push(this)}if(0===i&&g){for(j=("com.greensock."+c).split("."),a=j.pop(),n=aI(j.join("."))[a]=this.gsClass=g.apply(g,f),b&&(aL[a]=n,"function"==typeof define&&define.amd?define((aA.GreenSockAMDPath?aA.GreenSockAMDPath+"/":"")+c.split(".").pop(),[],function(){return n}):c===aP&&"undefined"!=typeof module&&module.exports&&(module.exports=n)),o=0;this.sc.length>o;o++){this.sc[o].check()}}},this.check(!0)},aQ=aA._gsDefine=function(b,d,a,c){return new aE(b,d,a,c)},ay=aM._class=function(b,c,a){return c=c||function(){},aQ(b,[],function(){return c},a),c};aQ.globals=aL;var aN=[0,0,1,1],Y=[],av=ay("easing.Ease",function(b,d,a,c){this._func=b,this._type=a||0,this._power=c||0,this._params=d?aN.concat(d):aN},!0),ax=av.map={},ac=av.register=function(p,h,g,q){for(var b,d,j,c,f=h.split(","),k=f.length,m=(g||"easeIn,easeOut,easeInOut").split(",");--k>-1;){for(d=f[k],b=q?ay("easing."+d,null,!0):aM.easing[d]||{},j=m.length;--j>-1;){c=m[j],ax[d+"."+c]=ax[c+d]=b[c]=p.getRatio?p:p[c]||new p}}};for(aG=av.prototype,aG._calcEnd=!1,aG.getRatio=function(b){if(this._func){return this._params[0]=b,this._func.apply(null,this._params)}var d=this._type,a=this._power,c=1===d?1-b:2===d?b:0.5>b?2*b:2*(1-b);return 1===a?c*=c:2===a?c*=c*c:3===a?c*=c*c*c:4===a&&(c*=c*c*c*c),1===d?1-c:2===d?c:0.5>b?c/2:1-c/2},aB=["Linear","Quad","Cubic","Quart","Quint,Strong"],aC=aB.length;--aC>-1;){aG=aB[aC]+",Power"+aC,ac(new av(null,null,1,aC),aG,"easeOut",!0),ac(new av(null,null,2,aC),aG,"easeIn"+(0===aC?",easeNone":"")),ac(new av(null,null,3,aC),aG,"easeInOut")}ax.linear=aM.easing.Linear.easeIn,ax.swing=aM.easing.Quad.easeInOut;var aS=ay("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});aG=aS.prototype,aG.addEventListener=function(k,g,d,m,a){a=a||0;var b,c,f=this._listeners[k],j=0;for(null==f&&(this._listeners[k]=f=[]),c=f.length;--c>-1;){b=f[c],b.c===g&&b.s===d?f.splice(c,1):0===j&&a>b.pr&&(j=c+1)}f.splice(j,0,{c:g,s:d,up:m,pr:a}),this!==aT||aF||aT.wake()},aG.removeEventListener=function(b,d){var a,c=this._listeners[b];if(c){for(a=c.length;--a>-1;){if(c[a].c===d){return c.splice(a,1),void 0}}}},aG.dispatchEvent=function(b){var f,a,c,d=this._listeners[b];if(d){for(f=d.length,a=this._eventTarget;--f>-1;){c=d[f],c&&(c.up?c.c.call(c.s||a,{type:b,target:a}):c.c.call(c.s||a))}}};var aJ=aA.requestAnimationFrame,ar=aA.cancelAnimationFrame,Z=Date.now||function(){return(new Date).getTime()},aw=Z();for(aB=["ms","moz","webkit","o"],aC=aB.length;--aC>-1&&!aJ;){aJ=aA[aB[aC]+"RequestAnimationFrame"],ar=aA[aB[aC]+"CancelAnimationFrame"]||aA[aB[aC]+"CancelRequestAnimationFrame"]}ay("Ticker",function(y,q){var k,z,a,g,j,m=this,x=Z(),o=q!==!1&&aJ,w=500,b=33,v=function(d){var f,c,h=Z()-aw;h>w&&(x+=h-b),aw+=h,m.time=(aw-x)/1000,f=m.time-j,(!k||f>0||d===!0)&&(m.frame++,j+=f+(f>=g?0.004:g-f),c=!0),d!==!0&&(a=z(v)),c&&m.dispatchEvent("tick")};aS.call(m),m.time=m.frame=0,m.tick=function(){v(!0)},m.lagSmoothing=function(c,d){w=c||1/aU,b=Math.min(d,w,0)},m.sleep=function(){null!=a&&(o&&ar?ar(a):clearTimeout(a),z=aH,a=null,m===aT&&(aF=!1))},m.wake=function(){null!==a?m.sleep():m.frame>10&&(aw=Z()-w+5),z=0===k?aH:o&&aJ?aJ:function(c){return setTimeout(c,0|1000*(j-m.time)+1)},m===aT&&(aF=!0),v(2)},m.fps=function(c){return arguments.length?(k=c,g=1/(k||60),j=this.time+g,m.wake(),void 0):k},m.useRAF=function(c){return arguments.length?(m.sleep(),o=c,m.fps(k),void 0):o},m.fps(y),setTimeout(function(){o&&(!a||5>m.frame)&&m.useRAF(!1)},1500)}),aG=aM.Ticker.prototype=new aM.events.EventDispatcher,aG.constructor=aM.Ticker;var aa=ay("core.Animation",function(b,c){if(this.vars=c=c||{},this._duration=this._totalDuration=b||0,this._delay=Number(c.delay)||0,this._timeScale=1,this._active=c.immediateRender===!0,this.data=c.data,this._reversed=c.reversed===!0,aq){aF||aT.wake();var a=this.vars.useFrames?aD:aq;a.add(this,a._time),this.vars.paused&&this.paused(!0)}});aT=aa.ticker=new aM.Ticker,aG=aa.prototype,aG._dirty=aG._gc=aG._initted=aG._paused=!1,aG._totalTime=aG._time=0,aG._rawPrevTime=-1,aG._next=aG._last=aG._onUpdate=aG._timeline=aG.timeline=null,aG._paused=!1;var ap=function(){aF&&Z()-aw>2000&&aT.wake(),setTimeout(ap,2000)};ap(),aG.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},aG.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},aG.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},aG.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},aG.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},aG.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},aG.render=function(){},aG.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},aG.isActive=function(){var b,c=this._timeline,a=this._startTime;return !c||!this._gc&&!this._paused&&c.isActive()&&(b=c.rawTime())>=a&&a+this.totalDuration()/this._timeScale>b},aG._enabled=function(a,b){return aF||aT.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},aG._kill=function(){return this._enabled(!1,!1)},aG.kill=function(a,b){return this._kill(a,b),this},aG._uncache=function(a){for(var b=a?this:this.timeline;b;){b._dirty=!0,b=b.timeline}return this},aG._swapSelfInParams=function(b){for(var c=b.length,a=b.concat();--c>-1;){"{self}"===b[c]&&(a[c]=this)}return a},aG.eventCallback=function(b,f,a,c){if("on"===(b||"").substr(0,2)){var d=this.vars;if(1===arguments.length){return d[b]}null==f?delete d[b]:(d[b]=f,d[b+"Params"]=aO(a)&&-1!==a.join("").indexOf("{self}")?this._swapSelfInParams(a):a,d[b+"Scope"]=c),"onUpdate"===b&&(this._onUpdate=f)}return this},aG.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},aG.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},aG.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},aG.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},aG.totalTime=function(b,f,a){if(aF||aT.wake(),!arguments.length){return this._totalTime}if(this._timeline){if(0>b&&!a&&(b+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var c=this._totalDuration,d=this._timeline;if(b>c&&!a&&(b=c),this._startTime=(this._paused?this._pauseTime:d._time)-(this._reversed?c-b:b)/this._timeScale,d._dirty||this._uncache(!1),d._timeline){for(;d._timeline;){d._timeline._time!==(d._startTime+d._totalTime)/d._timeScale&&d.totalTime(d._totalTime,!0),d=d._timeline}}}this._gc&&this._enabled(!0,!1),(this._totalTime!==b||0===this._duration)&&(this.render(b,f,!1),au.length&&af())}return this},aG.progress=aG.totalProgress=function(a,b){return arguments.length?this.totalTime(this.duration()*a,b):this._time/this.duration()},aG.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},aG.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},aG.timeScale=function(b){if(!arguments.length){return this._timeScale}if(b=b||aU,this._timeline&&this._timeline.smoothChildTiming){var c=this._pauseTime,a=c||0===c?c:this._timeline.totalTime();this._startTime=a-(a-this._startTime)*this._timeScale/b}return this._timeScale=b,this._uncache(!1)},aG.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},aG.paused=function(b){if(!arguments.length){return this._paused}if(b!=this._paused&&this._timeline){aF||b||aT.wake();var d=this._timeline,a=d.rawTime(),c=a-this._pauseTime;!b&&d.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=b?a:null,this._paused=b,this._active=this.isActive(),!b&&0!==c&&this._initted&&this.duration()&&this.render(d.smoothChildTiming?this._totalTime:(a-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!b&&this._enabled(!0,!1),this};var ao=ay("core.SimpleTimeline",function(a){aa.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});aG=ao.prototype=new aa,aG.constructor=ao,aG.kill()._gc=!1,aG._first=aG._last=aG._recent=null,aG._sortChildren=!1,aG.add=aG.insert=function(b,d){var a,c;if(b._startTime=Number(d||0)+b._delay,b._paused&&this!==b._timeline&&(b._pauseTime=b._startTime+(this.rawTime()-b._startTime)/b._timeScale),b.timeline&&b.timeline._remove(b,!0),b.timeline=b._timeline=this,b._gc&&b._enabled(!0,!0),a=this._last,this._sortChildren){for(c=b._startTime;a&&a._startTime>c;){a=a._prev}}return a?(b._next=a._next,a._next=b):(b._next=this._first,this._first=b),b._next?b._next._prev=b:this._last=b,b._prev=a,this._recent=b,this._timeline&&this._uncache(!0),this},aG._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},aG.render=function(b,f,a){var c,d=this._first;for(this._totalTime=this._time=this._rawPrevTime=b;d;){c=d._next,(d._active||b>=d._startTime&&!d._paused)&&(d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(b-d._startTime)*d._timeScale,f,a):d.render((b-d._startTime)*d._timeScale,f,a)),d=c}},aG.rawTime=function(){return aF||aT.wake(),this._totalTime};var aj=ay("TweenLite",function(h,d,f){if(aa.call(this,d,f),this.render=aj.prototype.render,null==h){throw"Cannot tween a null target."}this.target=h="string"!=typeof h?h:aj.selector(h)||h;var g,k,c,j=h.jquery||h.length&&h!==aA&&h[0]&&(h[0]===aA||h[0].nodeType&&h[0].style&&!h.nodeType),b=this.vars.overwrite;if(this._overwrite=b=null==b?ab[aj.defaultOverwrite]:"number"==typeof b?b>>0:ab[b],(j||h instanceof Array||h.push&&aO(h))&&"number"!=typeof h[0]){for(this._targets=c=az(h),this._propLookup=[],this._siblings=[],g=0;c.length>g;g++){k=c[g],k?"string"!=typeof k?k.length&&k!==aA&&k[0]&&(k[0]===aA||k[0].nodeType&&k[0].style&&!k.nodeType)?(c.splice(g--,1),this._targets=c=c.concat(az(k))):(this._siblings[g]=at(k,this,!1),1===b&&this._siblings[g].length>1&&ak(k,this,null,1,this._siblings[g])):(k=c[g--]=aj.selector(k),"string"==typeof k&&c.splice(g+1,1)):c.splice(g--,1)}}else{this._propLookup={},this._siblings=at(h,this,!1),1===b&&this._siblings.length>1&&ak(h,this,null,1,this._siblings)}(this.vars.immediateRender||0===d&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-aU,this.render(-this._delay))},!0),an=function(a){return a&&a.length&&a!==aA&&a[0]&&(a[0]===aA||a[0].nodeType&&a[0].style&&!a.nodeType)},ad=function(b,d){var a,c={};for(a in b){al[a]||a in d&&"transform"!==a&&"x"!==a&&"y"!==a&&"width"!==a&&"height"!==a&&"className"!==a&&"border"!==a||!(!X[a]||X[a]&&X[a]._autoCSS)||(c[a]=b[a],delete b[a])}b.css=c};aG=aj.prototype=new aa,aG.constructor=aj,aG.kill()._gc=!1,aG.ratio=0,aG._firstPT=aG._targets=aG._overwrittenProps=aG._startAt=null,aG._notifyPluginsOfEnabled=aG._lazy=!1,aj.version="1.14.2",aj.defaultEase=aG._ease=new av(null,null,1,1),aj.defaultOverwrite="auto",aj.ticker=aT,aj.autoSleep=!0,aj.lagSmoothing=function(a,b){aT.lagSmoothing(a,b)},aj.selector=aA.$||aA.jQuery||function(b){var a=aA.$||aA.jQuery;return a?(aj.selector=a,a(b)):"undefined"==typeof document?b:document.querySelectorAll?document.querySelectorAll(b):document.getElementById("#"===b.charAt(0)?b.substr(1):b)};var au=[],ag={},ae=aj._internals={isArray:aO,isSelector:an,lazyTweens:au},X=aj._plugins={},am=ae.tweenLookup={},aK=0,al=ae.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1},ab={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},aD=aa._rootFramesTimeline=new ao,aq=aa._rootTimeline=new ao,af=ae.lazyRender=function(){var a,b=au.length;for(ag={};--b>-1;){a=au[b],a&&a._lazy!==!1&&(a.render(a._lazy[0],a._lazy[1],!0),a._lazy=!1)}au.length=0};aq._startTime=aT.time,aD._startTime=aT.frame,aq._active=aD._active=!0,setTimeout(af,1),aa._updateRoot=aj.render=function(){var b,c,a;if(au.length&&af(),aq.render((aT.time-aq._startTime)*aq._timeScale,!1,!1),aD.render((aT.frame-aD._startTime)*aD._timeScale,!1,!1),au.length&&af(),!(aT.frame%120)){for(a in am){for(c=am[a].tweens,b=c.length;--b>-1;){c[b]._gc&&c.splice(b,1)}0===c.length&&delete am[a]}if(a=aq._first,(!a||a._paused)&&aj.autoSleep&&!aD._first&&1===aT._listeners.tick.length){for(;a&&a._paused;){a=a._next}a||aT.sleep()}}},aT.addEventListener("tick",aa._updateRoot);var at=function(b,f,a){var c,d,g=b._gsTweenID;if(am[g||(b._gsTweenID=g="t"+aK++)]||(am[g]={target:b,tweens:[]}),f&&(c=am[g].tweens,c[d=c.length]=f,a)){for(;--d>-1;){c[d]===f&&c.splice(d,1)}}return am[g].tweens},ah=function(d,h,c,f){var g,j,b=d.vars.onOverwrite;return b&&(g=b(d,h,c,f)),b=aj.onOverwrite,b&&(j=b(d,h,c,f)),g!==!1&&j!==!1},ak=function(A,w,p,B,b){var g,y,d,k;if(1===B||B>=4){for(k=b.length,g=0;k>g;g++){if((d=b[g])!==w){d._gc||ah(d,w)&&d._enabled(!1,!1)&&(y=!0)}else{if(5===B){break}}}return y}var q,z=w._startTime+aU,j=[],v=0,x=0===w._duration;for(g=b.length;--g>-1;){(d=b[g])===w||d._gc||d._paused||(d._timeline!==w._timeline?(q=q||ai(w,0,x),0===ai(d,q,x)&&(j[v++]=d)):z>=d._startTime&&d._startTime+d.totalDuration()/d._timeScale>z&&((x||!d._initted)&&2e-10>=z-d._startTime||(j[v++]=d)))}for(g=v;--g>-1;){if(d=j[g],2===B&&d._kill(p,A,w)&&(y=!0),2!==B||!d._firstPT&&d._initted){if(2!==B&&!ah(d,w)){continue}d._enabled(!1,!1)&&(y=!0)}}return y},ai=function(b,f,a){for(var c=b._timeline,d=c._timeScale,g=b._startTime;c._timeline;){if(g+=c._startTime,d*=c._timeScale,c._paused){return -100}c=c._timeline}return g/=d,g>f?g-f:a&&g===f||!b._initted&&2*aU>g-f?aU:(g+=b.totalDuration()/b._timeScale/d)>f+aU?0:g-f-aU};aG._init=function(){var p,k,g,q,b,d=this.vars,m=this._overwrittenProps,c=this._duration,f=!!d.immediateRender,j=d.ease;if(d.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),b={};for(q in d.startAt){b[q]=d.startAt[q]}if(b.overwrite=!1,b.immediateRender=!0,b.lazy=f&&d.lazy!==!1,b.startAt=b.delay=null,this._startAt=aj.to(this.target,0,b),f){if(this._time>0){this._startAt=null}else{if(0!==c){return}}}}else{if(d.runBackwards&&0!==c){if(this._startAt){this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null}else{0!==this._time&&(f=!1),g={};for(q in d){al[q]&&"autoCSS"!==q||(g[q]=d[q])}if(g.overwrite=0,g.data="isFromStart",g.lazy=f&&d.lazy!==!1,g.immediateRender=f,this._startAt=aj.to(this.target,0,g),f){if(0===this._time){return}}else{this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}}}}if(this._ease=j=j?j instanceof av?j:"function"==typeof j?new av(j,d.easeParams):ax[j]||aj.defaultEase:aj.defaultEase,d.easeParams instanceof Array&&j.config&&(this._ease=j.config.apply(j,d.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets){for(p=this._targets.length;--p>-1;){this._initProps(this._targets[p],this._propLookup[p]={},this._siblings[p],m?m[p]:null)&&(k=!0)}}else{k=this._initProps(this.target,this._propLookup,this._siblings,m)}if(k&&aj._onPluginEvent("_onInitAllProps",this),m&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),d.runBackwards){for(g=this._firstPT;g;){g.s+=g.c,g.c=-g.c,g=g._next}}this._onUpdate=d.onUpdate,this._initted=!0},aG._initProps=function(k,g,q,b){var d,m,c,f,j,p;if(null==k){return !1}ag[k._gsTweenID]&&af(),this.vars.css||k.style&&k!==aA&&k.nodeType&&X.css&&this.vars.autoCSS!==!1&&ad(this.vars,k);for(d in this.vars){if(p=this.vars[d],al[d]){p&&(p instanceof Array||p.push&&aO(p))&&-1!==p.join("").indexOf("{self}")&&(this.vars[d]=p=this._swapSelfInParams(p,this))}else{if(X[d]&&(f=new X[d])._onInitTween(k,this.vars[d],this)){for(this._firstPT=j={_next:this._firstPT,t:f,p:"setRatio",s:0,c:1,f:!0,n:d,pg:!0,pr:f._priority},m=f._overwriteProps.length;--m>-1;){g[f._overwriteProps[m]]=this._firstPT}(f._priority||f._onInitAllProps)&&(c=!0),(f._onDisable||f._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else{this._firstPT=g[d]=j={_next:this._firstPT,t:k,p:d,f:"function"==typeof k[d],n:d,pg:!1,pr:0},j.s=j.f?k[d.indexOf("set")||"function"!=typeof k["get"+d.substr(3)]?d:"get"+d.substr(3)]():parseFloat(k[d]),j.c="string"==typeof p&&"="===p.charAt(1)?parseInt(p.charAt(0)+"1",10)*Number(p.substr(2)):Number(p)-j.s||0}}j&&j._next&&(j._next._prev=j)}return b&&this._kill(b,k)?this._initProps(k,g,q,b):this._overwrite>1&&this._firstPT&&q.length>1&&ak(k,this,g,this._overwrite,q)?(this._kill(g,k),this._initProps(k,g,q,b)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(ag[k._gsTweenID]=!0),c)},aG.render=function(y,v,k){var z,b,d,w,c=this._time,j=this._duration,p=this._rawPrevTime;if(y>=j){this._totalTime=this._time=j,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(z=!0,b="onComplete"),0===j&&(this._initted||!this.vars.lazy||k)&&(this._startTime===this._timeline._duration&&(y=0),(0===y||0>p||p===aU)&&p!==y&&(k=!0,p>aU&&(b="onReverseComplete")),this._rawPrevTime=w=!v||y||p===y?y:aU)}else{if(1e-7>y){this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==c||0===j&&p>0&&p!==aU)&&(b="onReverseComplete",z=this._reversed),0>y&&(this._active=!1,0===j&&(this._initted||!this.vars.lazy||k)&&(p>=0&&(k=!0),this._rawPrevTime=w=!v||y||p===y?y:aU)),this._initted||(k=!0)}else{if(this._totalTime=this._time=y,this._easeType){var x=y/j,g=this._easeType,q=this._easePower;(1===g||3===g&&x>=0.5)&&(x=1-x),3===g&&(x*=2),1===q?x*=x:2===q?x*=x*x:3===q?x*=x*x*x:4===q&&(x*=x*x*x*x),this.ratio=1===g?1-x:2===g?x:0.5>y/j?x/2:1-x/2}else{this.ratio=this._ease.getRatio(y/j)}}}if(this._time!==c||k){if(!this._initted){if(this._init(),!this._initted||this._gc){return}if(!k&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)){return this._time=this._totalTime=c,this._rawPrevTime=p,au.push(this),this._lazy=[y,v],void 0}this._time&&!z?this.ratio=this._ease.getRatio(this._time/j):z&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==c&&y>=0&&(this._active=!0),0===c&&(this._startAt&&(y>=0?this._startAt.render(y,v,k):b||(b="_dummyGS")),this.vars.onStart&&(0!==this._time||0===j)&&(v||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||Y))),d=this._firstPT;d;){d.f?d.t[d.p](d.c*this.ratio+d.s):d.t[d.p]=d.c*this.ratio+d.s,d=d._next}this._onUpdate&&(0>y&&this._startAt&&y!==-0.0001&&this._startAt.render(y,v,k),v||(this._time!==c||z)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||Y)),b&&(!this._gc||k)&&(0>y&&this._startAt&&!this._onUpdate&&y!==-0.0001&&this._startAt.render(y,v,k),z&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!v&&this.vars[b]&&this.vars[b].apply(this.vars[b+"Scope"]||this,this.vars[b+"Params"]||Y),0===j&&this._rawPrevTime===aU&&w!==aU&&(this._rawPrevTime=0))}},aG._kill=function(v,k,g){if("all"===v&&(v=null),null==v&&(null==k||k===this.target)){return this._lazy=!1,this._enabled(!1,!1)}k="string"!=typeof k?k||this._targets||this.target:aj.selector(k)||k;var w,b,d,m,c,f,j,p,q;if((aO(k)||an(k))&&"number"!=typeof k[0]){for(w=k.length;--w>-1;){this._kill(v,k[w])&&(f=!0)}}else{if(this._targets){for(w=this._targets.length;--w>-1;){if(k===this._targets[w]){c=this._propLookup[w]||{},this._overwrittenProps=this._overwrittenProps||[],b=this._overwrittenProps[w]=v?this._overwrittenProps[w]||{}:"all";break}}}else{if(k!==this.target){return !1}c=this._propLookup,b=this._overwrittenProps=v?this._overwrittenProps||{}:"all"}if(c){if(j=v||c,p=v!==b&&"all"!==b&&v!==c&&("object"!=typeof v||!v._tempKill),g&&(aj.onOverwrite||this.vars.onOverwrite)){for(d in j){c[d]&&(q||(q=[]),q.push(d))}if(!ah(this,g,k,q)){return !1}}for(d in j){(m=c[d])&&(m.pg&&m.t._kill(j)&&(f=!0),m.pg&&0!==m.t._overwriteProps.length||(m._prev?m._prev._next=m._next:m===this._firstPT&&(this._firstPT=m._next),m._next&&(m._next._prev=m._prev),m._next=m._prev=null),delete c[d]),p&&(b[d]=1)}!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return f},aG.invalidate=function(){return this._notifyPluginsOfEnabled&&aj._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],aa.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-aU,this.render(-this._delay)),this},aG._enabled=function(b,d){if(aF||aT.wake(),b&&this._gc){var a,c=this._targets;if(c){for(a=c.length;--a>-1;){this._siblings[a]=at(c[a],this,!0)}}else{this._siblings=at(this.target,this,!0)}}return aa.prototype._enabled.call(this,b,d),this._notifyPluginsOfEnabled&&this._firstPT?aj._onPluginEvent(b?"_onEnable":"_onDisable",this):!1},aj.to=function(b,c,a){return new aj(b,c,a)},aj.from=function(b,c,a){return a.runBackwards=!0,a.immediateRender=0!=a.immediateRender,new aj(b,c,a)},aj.fromTo=function(b,d,a,c){return c.startAt=a,c.immediateRender=0!=c.immediateRender&&0!=a.immediateRender,new aj(b,d,c)},aj.delayedCall=function(b,f,a,c,d){return new aj(f,0,{delay:b,onComplete:f,onCompleteParams:a,onCompleteScope:c,onReverseComplete:f,onReverseCompleteParams:a,onReverseCompleteScope:c,immediateRender:!1,useFrames:d,overwrite:0})},aj.set=function(a,b){return new aj(a,0,b)},aj.getTweensOf=function(b,f){if(null==b){return[]}b="string"!=typeof b?b:aj.selector(b)||b;var a,c,d,g;if((aO(b)||an(b))&&"number"!=typeof b[0]){for(a=b.length,c=[];--a>-1;){c=c.concat(aj.getTweensOf(b[a],f))}for(a=c.length;--a>-1;){for(g=c[a],d=a;--d>-1;){g===c[d]&&c.splice(a,1)}}}else{for(c=at(b).concat(),a=c.length;--a>-1;){(c[a]._gc||f&&!c[a].isActive())&&c.splice(a,1)}}return c},aj.killTweensOf=aj.killDelayedCallsTo=function(b,f,a){"object"==typeof f&&(a=f,f=!1);for(var c=aj.getTweensOf(b,f),d=c.length;--d>-1;){c[d]._kill(a,b)}};var W=ay("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=W.prototype},!0);if(aG=W.prototype,W.version="1.10.1",W.API=2,aG._firstPT=null,aG._addTween=function(d,h,c,f,g,k){var b,j;return null!=f&&(b="number"==typeof f||"="!==f.charAt(1)?Number(f)-c:parseInt(f.charAt(0)+"1",10)*Number(f.substr(2)))?(this._firstPT=j={_next:this._firstPT,t:d,p:h,s:c,c:b,f:"function"==typeof d[h],n:g||h,r:k},j._next&&(j._next._prev=j),j):void 0},aG.setRatio=function(b){for(var d,a=this._firstPT,c=0.000001;a;){d=a.c*b+a.s,a.r?d=Math.round(d):c>d&&d>-c&&(d=0),a.f?a.t[a.p](d):a.t[a.p]=d,a=a._next}},aG._kill=function(b){var d,a=this._overwriteProps,c=this._firstPT;if(null!=b[this._propName]){this._overwriteProps=[]}else{for(d=a.length;--d>-1;){null!=b[a[d]]&&a.splice(d,1)}}for(;c;){null!=b[c.n]&&(c._next&&(c._next._prev=c._prev),c._prev?(c._prev._next=c._next,c._prev=null):this._firstPT===c&&(this._firstPT=c._next)),c=c._next}return !1},aG._roundProps=function(b,c){for(var a=this._firstPT;a;){(b[this._propName]||null!=a.n&&b[a.n.split(this._propName+"_").join("")])&&(a.r=c),a=a._next}},aj._onPluginEvent=function(d,h){var c,f,g,k,b,j=h._firstPT;if("_onInitAllProps"===d){for(;j;){for(b=j._next,f=g;f&&f.pr>j.pr;){f=f._next}(j._prev=f?f._prev:k)?j._prev._next=j:g=j,(j._next=f)?f._prev=j:k=j,j=b}j=h._firstPT=g}for(;j;){j.pg&&"function"==typeof j.t[d]&&j.t[d]()&&(c=!0),j=j._next}return c},W.activate=function(a){for(var b=a.length;--b>-1;){a[b].API===W.API&&(X[(new a[b])._propName]=a[b])}return !0},aQ.plugin=function(d){if(!(d&&d.propName&&d.init&&d.API)){throw"illegal plugin definition."}var h,c=d.propName,f=d.priority||0,g=d.overwriteProps,k={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},b=ay("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){W.call(this,c,f),this._overwriteProps=g||[]},d.global===!0),j=b.prototype=new W(c);j.constructor=b,b.API=d.API;for(h in k){"function"==typeof d[h]&&(j[k[h]]=d[h])}return b.version=d.version,W.activate([b]),b},aB=aA._gsQueue){for(aC=0;aB.length>aC;aC++){aB[aC]()}for(aG in aR){aR[aG].func||aA.console.log("GSAP encountered missing dependency: com.greensock."+aG)}}aF=!1}})("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenLite");
/*!
 * VERSION: 1.14.2
 * DATE: 2014-10-18
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(D,y,v){var E=function(c){y.call(this,c),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var a,f,h=this.vars;for(f in h){a=h[f],g(a)&&-1!==a.join("").indexOf("{self}")&&(h[f]=this._swapSelfInParams(a))}g(h.tweens)&&this.add(h.tweens,0,h.align,h.stagger)},b=1e-10,j=v._internals,A=j.isSelector,g=j.isArray,w=j.lazyTweens,q=j.lazyRender,B=[],C=_gsScope._gsDefine.globals,z=function(c){var f,a={};for(f in c){a[f]=c[f]}return a},d=function(c,l,a,f){var h=c._timeline._totalTime;(l||!this._forcingPlayhead)&&(c._timeline.pause(c._startTime),l&&l.apply(f||c._timeline,a||B),this._forcingPlayhead&&c._timeline.seek(h))},x=function(c){var h,a=[],f=c.length;for(h=0;h!==f;a.push(c[h++])){}return a},k=E.prototype=new y;return E.version="1.14.2",k.constructor=E,k.kill()._gc=k._forcingPlayhead=!1,k.to=function(a,h,c,f){var i=c.repeat&&C.TweenMax||v;return h?this.add(new i(a,h,c),f):this.set(a,c,f)},k.from=function(a,h,c,f){return this.add((c.repeat&&C.TweenMax||v).from(a,h,c),f)},k.fromTo=function(f,l,h,i,m){var c=i.repeat&&C.TweenMax||v;return l?this.add(c.fromTo(f,l,h,i),m):this.set(f,i,m)},k.staggerTo=function(I,F,a,i,f,s,m,G){var H,c=new E({onComplete:s,onCompleteParams:m,onCompleteScope:G,smoothChildTiming:this.smoothChildTiming});for("string"==typeof I&&(I=v.selector(I)||I),I=I||[],A(I)&&(I=x(I)),i=i||0,0>i&&(I=x(I),I.reverse(),i*=-1),H=0;I.length>H;H++){a.startAt&&(a.startAt=z(a.startAt)),c.to(I[H],F,z(a),H*i)}return this.add(c,f)},k.staggerFrom=function(h,p,f,l,m,F,c,u){return f.immediateRender=0!=f.immediateRender,f.runBackwards=!0,this.staggerTo(h,p,f,l,m,F,c,u)},k.staggerFromTo=function(G,u,m,H,c,l,F,f,p){return H.startAt=m,H.immediateRender=0!=H.immediateRender&&0!=m.immediateRender,this.staggerTo(G,u,H,c,l,F,f,p)},k.call=function(a,h,c,f){return this.add(v.delayedCall(0,a,h,c),f)},k.set=function(a,f,c){return c=this._parseTimeOrLabel(c,0,!0),null==f.immediateRender&&(f.immediateRender=c===this._time&&!this._paused),this.add(new v(a,0,f),c)},E.exportRoot=function(f,i){f=f||{},null==f.smoothChildTiming&&(f.smoothChildTiming=!0);var h,m,c=new E(f),l=c._timeline;for(null==i&&(i=!0),l._remove(c,!0),c._startTime=0,c._rawPrevTime=c._time=c._totalTime=l._time,h=l._first;h;){m=h._next,i&&h instanceof v&&h.target===h.vars.onComplete||c.add(h,h._startTime-h._delay),h=m}return l.add(c,0),c},k.add=function(i,o,H,t){var s,I,J,G,m,F;if("number"!=typeof o&&(o=this._parseTimeOrLabel(o,0,!0,i)),!(i instanceof D)){if(i instanceof Array||i&&i.push&&g(i)){for(H=H||"normal",t=t||0,s=o,I=i.length,J=0;I>J;J++){g(G=i[J])&&(G=new E({tweens:G})),this.add(G,s),"string"!=typeof G&&"function"!=typeof G&&("sequence"===H?s=G._startTime+G.totalDuration()/G._timeScale:"start"===H&&(G._startTime-=G.delay())),s+=t}return this._uncache(!0)}if("string"==typeof i){return this.addLabel(i,o)}if("function"!=typeof i){throw"Cannot add "+i+" into the timeline; it is not a tween, timeline, function, or string."}i=v.delayedCall(0,i)}if(y.prototype.add.call(this,i,o),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration()){for(m=this,F=m.rawTime()>i._startTime;m._timeline;){F&&m._timeline.smoothChildTiming?m.totalTime(m._totalTime,!0):m._gc&&m._enabled(!0,!1),m=m._timeline}}return this},k.remove=function(c){if(c instanceof D){return this._remove(c,!1)}if(c instanceof Array||c&&c.push&&g(c)){for(var a=c.length;--a>-1;){this.remove(c[a])}return this}return"string"==typeof c?this.removeLabel(c):this.kill(null,c)},k._remove=function(c,a){y.prototype._remove.call(this,c,a);var f=this._last;return f?this._time>f._startTime+f._totalDuration/f._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},k.append=function(a,c){return this.add(a,this._parseTimeOrLabel(null,c,!0,a))},k.insert=k.insertMultiple=function(c,h,a,f){return this.add(c,h||0,a,f)},k.appendMultiple=function(c,h,a,f){return this.add(c,this._parseTimeOrLabel(null,h,!0,c),a,f)},k.addLabel=function(a,c){return this._labels[a]=this._parseTimeOrLabel(c),this},k.addPause=function(c,h,a,f){return this.call(d,["{self}",h,a,f],this,c)},k.removeLabel=function(a){return delete this._labels[a],this},k.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},k._parseTimeOrLabel=function(h,a,c,f){var l;if(f instanceof D&&f.timeline===this){this.remove(f)}else{if(f&&(f instanceof Array||f.push&&g(f))){for(l=f.length;--l>-1;){f[l] instanceof D&&f[l].timeline===this&&this.remove(f[l])}}}if("string"==typeof a){return this._parseTimeOrLabel(a,c&&"number"==typeof h&&null==this._labels[a]?h-this.duration():0,c)}if(a=a||0,"string"!=typeof h||!isNaN(h)&&null==this._labels[h]){null==h&&(h=this.duration())}else{if(l=h.indexOf("="),-1===l){return null==this._labels[h]?c?this._labels[h]=this.duration()+a:a:this._labels[h]+a}a=parseInt(h.charAt(l-1)+"1",10)*Number(h.substr(l+1)),h=l>1?this._parseTimeOrLabel(h.substr(0,l-1),0,c):this.duration()}return Number(h)+a},k.seek=function(a,c){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),c!==!1)},k.stop=function(){return this.paused(!0)},k.gotoAndPlay=function(a,c){return this.play(a,c)},k.gotoAndStop=function(a,c){return this.pause(a,c)},k.render=function(N,I,G){this._gc&&this._enabled(!0,!1);var O,r,L,l,M,K=this._dirty?this.totalDuration():this._totalDuration,h=this._time,H=this._startTime,F=this._timeScale,J=this._paused;if(N>=K?(this._totalTime=this._time=K,this._reversed||this._hasPausedChild()||(r=!0,l="onComplete",0===this._duration&&(0===N||0>this._rawPrevTime||this._rawPrevTime===b)&&this._rawPrevTime!==N&&this._first&&(M=!0,this._rawPrevTime>b&&(l="onReverseComplete"))),this._rawPrevTime=this._duration||!I||N||this._rawPrevTime===N?N:b,N=K+0.0001):1e-7>N?(this._totalTime=this._time=0,(0!==h||0===this._duration&&this._rawPrevTime!==b&&(this._rawPrevTime>0||0>N&&this._rawPrevTime>=0))&&(l="onReverseComplete",r=this._reversed),0>N?(this._active=!1,this._rawPrevTime>=0&&this._first&&(M=!0),this._rawPrevTime=N):(this._rawPrevTime=this._duration||!I||N||this._rawPrevTime===N?N:b,N=0,this._initted||(M=!0))):this._totalTime=this._time=this._rawPrevTime=N,this._time!==h&&this._first||G||M){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==h&&N>0&&(this._active=!0),0===h&&this.vars.onStart&&0!==this._time&&(I||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||B)),this._time>=h){for(O=this._first;O&&(L=O._next,!this._paused||J);){(O._active||O._startTime<=this._time&&!O._paused&&!O._gc)&&(O._reversed?O.render((O._dirty?O.totalDuration():O._totalDuration)-(N-O._startTime)*O._timeScale,I,G):O.render((N-O._startTime)*O._timeScale,I,G)),O=L}}else{for(O=this._last;O&&(L=O._prev,!this._paused||J);){(O._active||h>=O._startTime&&!O._paused&&!O._gc)&&(O._reversed?O.render((O._dirty?O.totalDuration():O._totalDuration)-(N-O._startTime)*O._timeScale,I,G):O.render((N-O._startTime)*O._timeScale,I,G)),O=L}}this._onUpdate&&(I||(w.length&&q(),this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||B))),l&&(this._gc||(H===this._startTime||F!==this._timeScale)&&(0===this._time||K>=this.totalDuration())&&(r&&(w.length&&q(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!I&&this.vars[l]&&this.vars[l].apply(this.vars[l+"Scope"]||this,this.vars[l+"Params"]||B)))}},k._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof E&&a._hasPausedChild()){return !0}a=a._next}return !1},k.getChildren=function(f,l,h,i){i=i||-9999999999;for(var p=[],c=this._first,m=0;c;){i>c._startTime||(c instanceof v?l!==!1&&(p[m++]=c):(h!==!1&&(p[m++]=c),f!==!1&&(p=p.concat(c.getChildren(!0,l,h)),m=p.length))),c=c._next}return p},k.getTweensOf=function(f,l){var h,i,p=this._gc,c=[],m=0;for(p&&this._enabled(!0,!0),h=v.getTweensOf(f),i=h.length;--i>-1;){(h[i].timeline===this||l&&this._contains(h[i]))&&(c[m++]=h[i])}return p&&this._enabled(!1,!0),c},k.recent=function(){return this._recent},k._contains=function(a){for(var c=a.timeline;c;){if(c===this){return !0}c=c.timeline}return !1},k.shiftChildren=function(c,l,a){a=a||0;for(var f,h=this._first,m=this._labels;h;){h._startTime>=a&&(h._startTime+=c),h=h._next}if(l){for(f in m){m[f]>=a&&(m[f]+=c)}}return this._uncache(!0)},k._kill=function(c,l){if(!c&&!l){return this._enabled(!1,!1)}for(var a=l?this.getTweensOf(l):this.getChildren(!0,!0,!1),f=a.length,h=!1;--f>-1;){a[f]._kill(c,l)&&(h=!0)}return h},k.clear=function(c){var f=this.getChildren(!1,!0,!0),a=f.length;for(this._time=this._totalTime=0;--a>-1;){f[a]._enabled(!1,!1)}return c!==!1&&(this._labels={}),this._uncache(!0)},k.invalidate=function(){for(var a=this._first;a;){a.invalidate(),a=a._next}return D.prototype.invalidate.call(this)},k._enabled=function(c,a){if(c===this._gc){for(var f=this._first;f;){f._enabled(c,!0),f=f._next}}return y.prototype._enabled.call(this,c,a)},k.totalTime=function(){this._forcingPlayhead=!0;var a=D.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,a},k.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},k.totalDuration=function(c){if(!arguments.length){if(this._dirty){for(var l,a,f=0,h=this._last,m=999999999999;h;){l=h._prev,h._dirty&&h.totalDuration(),h._startTime>m&&this._sortChildren&&!h._paused?this.add(h,h._startTime-h._delay):m=h._startTime,0>h._startTime&&!h._paused&&(f-=h._startTime,this._timeline.smoothChildTiming&&(this._startTime+=h._startTime/this._timeScale),this.shiftChildren(-h._startTime,!1,-9999999999),m=0),a=h._startTime+h._totalDuration/h._timeScale,a>f&&(f=a),h=l}this._duration=this._totalDuration=f,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==c&&this.timeScale(this._totalDuration/c),this},k.usesFrames=function(){for(var a=this._timeline;a._timeline;){a=a._timeline}return a===D._rootFramesTimeline},k.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},E},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"function"==typeof define&&define.amd?define(["TweenLite"],b):"undefined"!=typeof module&&module.exports&&(require("./TweenLite.js"),module.exports=b())}("TimelineLite");
/*!
 * VERSION: beta 1.9.4
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){_gsScope._gsDefine("easing.Back",["easing.Ease"],function(F){var z,w,G,b=_gsScope.GreenSockGlobals||_gsScope,k=b.com.greensock,C=2*Math.PI,j=Math.PI/2,x=k._class,v=function(f,a){var c=x("easing."+f,function(){},!0),d=c.prototype=new F;return d.constructor=c,d.getRatio=a,c},D=F.register||function(){},E=function(c,h,a,d){var f=x("easing."+c,{easeOut:new h,easeIn:new a,easeInOut:new d},!0);return D(f,c),f},B=function(c,d,a){this.t=c,this.v=d,a&&(this.next=a,a.prev=this,this.c=a.v-d,this.gap=a.t-c)},g=function(f,a){var c=x("easing."+f,function(h){this._p1=h||0===h?h:1.70158,this._p2=1.525*this._p1},!0),d=c.prototype=new F;return d.constructor=c,d.getRatio=a,d.config=function(h){return new c(h)},c},y=E("Back",g("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),g("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),g("BackInOut",function(a){return 1>(a*=2)?0.5*a*a*((this._p2+1)*a-this._p2):0.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),q=x("easing.SlowMo",function(c,d,a){d=d||0===d?d:0.7,null==c?c=0.7:c>1&&(c=1),this._p=1!==c?d:0,this._p1=(1-c)/2,this._p2=c,this._p3=this._p1+this._p2,this._calcEnd=a===!0},!0),A=q.prototype=new F;return A.constructor=q,A.getRatio=function(a){var c=a+(0.5-a)*this._p;return this._p1>a?this._calcEnd?1-(a=1-a/this._p1)*a:c-(a=1-a/this._p1)*a*a*a*c:a>this._p3?this._calcEnd?1-(a=(a-this._p3)/this._p1)*a:c+(a-c)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:c},q.ease=new q(0.7,0.7),A.config=q.config=function(c,d,a){return new q(c,d,a)},z=x("easing.SteppedEase",function(a){a=a||1,this._p1=1/a,this._p2=a+1},!0),A=z.prototype=new F,A.constructor=z,A.getRatio=function(a){return 0>a?a=0:a>=1&&(a=0.999999999),(this._p2*a>>0)*this._p1},A.config=z.config=function(a){return new z(a)},w=x("easing.RoughEase",function(P){P=P||{};for(var L,U,c,I,R,H,M=P.taper||"none",K=[],S=0,T=0|(P.points||20),t=T,O=P.randomize!==!1,J=P.clamp===!0,Q=P.template instanceof F?P.template:null,N="number"==typeof P.strength?0.4*P.strength:0.4;--t>-1;){L=O?Math.random():1/T*t,U=Q?Q.getRatio(L):L,"none"===M?c=N:"out"===M?(I=1-L,c=I*I*N):"in"===M?c=L*L*N:0.5>L?(I=2*L,c=0.5*I*I*N):(I=2*(1-L),c=0.5*I*I*N),O?U+=Math.random()*c-0.5*c:t%2?U+=0.5*c:U-=0.5*c,J&&(U>1?U=1:0>U&&(U=0)),K[S++]={x:L,y:U}}for(K.sort(function(a,d){return a.x-d.x}),H=new B(1,1,null),t=T;--t>-1;){R=K[t],H=new B(R.x,R.y,H)}this._prev=new B(0,0,0!==H.t?H:H.next)},!0),A=w.prototype=new F,A.constructor=w,A.getRatio=function(a){var c=this._prev;if(a>c.t){for(;c.next&&a>=c.t;){c=c.next}c=c.prev}else{for(;c.prev&&c.t>=a;){c=c.prev}}return this._prev=c,c.v+(a-c.t)/c.gap*c.c},A.config=function(a){return new w(a)},w.ease=new w,E("Bounce",v("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+0.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375}),v("BounceIn",function(a){return 1/2.75>(a=1-a)?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+0.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+0.9375):1-(7.5625*(a-=2.625/2.75)*a+0.984375)}),v("BounceInOut",function(a){var c=0.5>a;return a=c?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+0.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375,c?0.5*(1-a):0.5*a+0.5})),E("Circ",v("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),v("CircIn",function(a){return -(Math.sqrt(1-a*a)-1)}),v("CircInOut",function(a){return 1>(a*=2)?-0.5*(Math.sqrt(1-a*a)-1):0.5*(Math.sqrt(1-(a-=2)*a)+1)})),G=function(f,a,c){var d=x("easing."+f,function(i,l){this._p1=i||1,this._p2=l||c,this._p3=this._p2/C*(Math.asin(1/this._p1)||0)},!0),h=d.prototype=new F;return h.constructor=d,h.getRatio=a,h.config=function(i,l){return new d(i,l)},d},E("Elastic",G("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*C/this._p2)+1},0.3),G("ElasticIn",function(a){return -(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*C/this._p2))},0.3),G("ElasticInOut",function(a){return 1>(a*=2)?-0.5*this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*C/this._p2):0.5*this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*C/this._p2)+1},0.45)),E("Expo",v("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),v("ExpoIn",function(a){return Math.pow(2,10*(a-1))-0.001}),v("ExpoInOut",function(a){return 1>(a*=2)?0.5*Math.pow(2,10*(a-1)):0.5*(2-Math.pow(2,-10*(a-1)))})),E("Sine",v("SineOut",function(a){return Math.sin(a*j)}),v("SineIn",function(a){return -Math.cos(a*j)+1}),v("SineInOut",function(a){return -0.5*(Math.cos(Math.PI*a)-1)})),x("easing.EaseLookup",{find:function(a){return F.map[a]}},!0),D(b.SlowMo,"SlowMo","ease,"),D(w,"RoughEase","ease,"),D(z,"SteppedEase","ease,"),y},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();
/*!
 * VERSION: 1.14.2
 * DATE: 2014-10-28
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(au,aN){var aI,aw,av,aB,aT=function(){au.call(this,"css"),this._overwriteProps.length=0,this.setRatio=aT.prototype.setRatio},aA={},aF=aT.prototype=new au("css");aF.constructor=aT,aT.version="1.14.2",aT.API=2,aT.defaultTransformPerspective=0,aT.defaultSkewType="compensated",aF="px",aT.suffixMap={top:aF,right:aF,bottom:aF,left:aF,width:aF,height:aF,fontSize:aF,padding:aF,margin:aF,perspective:aF,lineHeight:""};var aJ,at,aM,az,aU,aP,aO=/(?:\d|\-\d|\.\d|\-\.\d)+/g,aC=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,aL=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,ar=/(?![+-]?\d*\.?\d+|e[+-]\d+)[^0-9]/g,ao=/(?:\d|\-|\+|=|#|\.)*/g,ap=/opacity *= *([^)]*)/i,a1=/opacity:([^;]*)/i,aq=/alpha\(opacity *=.+?\)/i,aS=/^(rgb|hsl)/,a6=/([A-Z])/g,a3=/-([a-z])/gi,a4=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,bq=function(a,b){return b.toUpperCase()},aG=/(?:Left|Right|Width)/i,a7=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,bs=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,bn=/,(?=[^\)]*(?:\(|$))/gi,bb=Math.PI/180,bc=180/Math.PI,a9={},an=document,aX=an.createElement("div"),bg=an.createElement("img"),bm=aT._internals={_specialProps:aA},bl=navigator.userAgent,aW=function(){var b,c=bl.indexOf("Android"),a=an.createElement("div");return aM=-1!==bl.indexOf("Safari")&&-1===bl.indexOf("Chrome")&&(-1===c||Number(bl.substr(c+8,1))>3),aU=aM&&6>Number(bl.substr(bl.indexOf("Version/")+8,1)),az=-1!==bl.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(bl)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(bl))&&(aP=parseFloat(RegExp.$1)),a.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",b=a.getElementsByTagName("a")[0],b?/^0.55/.test(b.style.opacity):!1}(),br=function(a){return ap.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},a0=function(a){window.console&&console.log(a)},aH="",aY="",aZ=function(b,f){f=f||aX;var a,d,c=f.style;if(void 0!==c[b]){return b}for(b=b.charAt(0).toUpperCase()+b.substr(1),a=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===c[a[d]+b];){}return d>=0?(aY=3===d?"ms":a[d],aH="-"+aY.toLowerCase()+"-",aY+b):null},ay=an.defaultView?an.defaultView.getComputedStyle:function(){},bj=aT.getStyle=function(b,f,a,d,c){var g;return aW||"opacity"!==f?(!d&&b.style[f]?g=b.style[f]:(a=a||ay(b))?g=a[f]||a.getPropertyValue(f)||a.getPropertyValue(f.replace(a6,"-$1").toLowerCase()):b.currentStyle&&(g=b.currentStyle[f]),null==c||g&&"none"!==g&&"auto"!==g&&"auto auto"!==g?g:c):br(b)},bk=bm.convertToPixels=function(w,j,a,x,d){if("px"===x||!x){return a}if("auto"===x||!a){return 0}var c,g,k,v=aG.test(j),m=w,b=aX.style,q=0>a;if(q&&(a=-a),"%"===x&&-1!==j.indexOf("border")){c=a/100*(v?w.clientWidth:w.clientHeight)}else{if(b.cssText="border:0 solid red;position:"+bj(w,"position")+";line-height:0;","%"!==x&&m.appendChild){b[v?"borderLeftWidth":"borderTopWidth"]=a+x}else{if(m=w.parentNode||an.body,g=m._gsCache,k=aN.ticker.frame,g&&v&&g.time===k){return g.width*a/100}b[v?"width":"height"]=a+x}m.appendChild(aX),c=parseFloat(aX[v?"offsetWidth":"offsetHeight"]),m.removeChild(aX),v&&"%"===x&&aT.cacheWidths!==!1&&(g=m._gsCache=m._gsCache||{},g.time=k,g.width=100*(c/a)),0!==c||d||(c=bk(w,j,a,x,!0))}return q?-c:c},a5=bm.calculateOffset=function(b,f,a){if("absolute"!==bj(b,"position",a)){return 0}var d="left"===f?"Left":"Top",c=bj(b,"margin"+d,a);return b["offset"+d]-(bk(b,f,parseFloat(c),c.replace(ao,""))||0)},aV=function(b,f){var a,d,c={};if(f=f||ay(b,null)){if(a=f.length){for(;--a>-1;){c[f[a].replace(a3,bq)]=f.getPropertyValue(f[a])}}else{for(a in f){c[a]=f[a]}}}else{if(f=b.currentStyle||b.style){for(a in f){"string"==typeof a&&void 0===c[a]&&(c[a.replace(a3,bq)]=f[a])}}}return aW||(c.opacity=br(b)),d=bD(b,f,!1),c.rotation=d.rotation,c.skewX=d.skewX,c.scaleX=d.scaleX,c.scaleY=d.scaleY,c.x=d.x,c.y=d.y,a2&&(c.z=d.z,c.rotationX=d.rotationX,c.rotationY=d.rotationY,c.scaleZ=d.scaleZ),c.filters&&delete c.filters,c},bz=function(p,k,g,b,q){var d,m,c,f={},j=p.style;for(m in g){"cssText"!==m&&"length"!==m&&isNaN(m)&&(k[m]!==(d=g[m])||q&&q[m])&&-1===m.indexOf("Origin")&&("number"==typeof d||"string"==typeof d)&&(f[m]="auto"!==d||"left"!==m&&"top"!==m?""!==d&&"auto"!==d&&"none"!==d||"string"!=typeof k[m]||""===k[m].replace(ar,"")?d:0:a5(p,m),void 0!==j[m]&&(c=new bC(j,m,j[m],c)))}if(b){for(m in b){"className"!==m&&(f[m]=b[m])}}return{difs:f,firstMPT:c}},bd={width:["Left","Right"],height:["Top","Bottom"]},bf=["marginLeft","marginRight","marginTop","marginBottom"],bo=function(b,f,a){var d=parseFloat("width"===f?b.offsetWidth:b.offsetHeight),c=bd[f],g=c.length;for(a=a||ay(b,null);--g>-1;){d-=parseFloat(bj(b,"padding"+c[g],a,!0))||0,d-=parseFloat(bj(b,"border"+c[g]+"Width",a,!0))||0}return d},ab=function(b,f){(null==b||""===b||"auto"===b||"auto auto"===b)&&(b="0 0");var a=b.split(" "),d=-1!==b.indexOf("left")?"0%":-1!==b.indexOf("right")?"100%":a[0],c=-1!==b.indexOf("top")?"0%":-1!==b.indexOf("bottom")?"100%":a[1];return null==c?c="0":"center"===c&&(c="50%"),("center"===d||isNaN(parseFloat(d))&&-1===(d+"").indexOf("="))&&(d="50%"),f&&(f.oxp=-1!==d.indexOf("%"),f.oyp=-1!==c.indexOf("%"),f.oxr="="===d.charAt(1),f.oyr="="===c.charAt(1),f.ox=parseFloat(d.replace(ar,"")),f.oy=parseFloat(c.replace(ar,""))),d+" "+c+(a.length>2?" "+a[2]:"")},aD=function(a,b){return"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)},bF=function(a,b){return null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)},bx=function(k,h,g,b){var m,d,j,c,f=0.000001;return null==k?c=h:"number"==typeof k?c=k:(m=360,d=k.split("_"),j=Number(d[0].replace(ar,""))*(-1===k.indexOf("rad")?1:bc)-("="===k.charAt(1)?0:h),d.length&&(b&&(b[g]=h+j),-1!==k.indexOf("short")&&(j%=m,j!==j%(m/2)&&(j=0>j?j+m:j-m)),-1!==k.indexOf("_cw")&&0>j?j=(j+9999999999*m)%m-(0|j/m)*m:-1!==k.indexOf("ccw")&&j>0&&(j=(j-9999999999*m)%m-(0|j/m)*m)),c=h+j),f>c&&c>-f&&(c=0),c},bh={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},bu=function(b,c,a){return b=0>b?b+1:b>1?b-1:b,0|255*(1>6*b?c+6*(a-c)*b:0.5>b?a:2>3*b?c+6*(a-c)*(2/3-b):c)+0.5},aK=aT.parseColor=function(d){var h,c,g,f,j,b;return d&&""!==d?"number"==typeof d?[d>>16,255&d>>8,255&d]:(","===d.charAt(d.length-1)&&(d=d.substr(0,d.length-1)),bh[d]?bh[d]:"#"===d.charAt(0)?(4===d.length&&(h=d.charAt(1),c=d.charAt(2),g=d.charAt(3),d="#"+h+h+c+c+g+g),d=parseInt(d.substr(1),16),[d>>16,255&d>>8,255&d]):"hsl"===d.substr(0,3)?(d=d.match(aO),f=Number(d[0])%360/360,j=Number(d[1])/100,b=Number(d[2])/100,c=0.5>=b?b*(j+1):b+j-b*j,h=2*b-c,d.length>3&&(d[3]=Number(d[3])),d[0]=bu(f+1/3,h,c),d[1]=bu(f,h,c),d[2]=bu(f-1/3,h,c),d):(d=d.match(aO)||bh.transparent,d[0]=Number(d[0]),d[1]=Number(d[1]),d[2]=Number(d[2]),d.length>3&&(d[3]=Number(d[3])),d)):bh.black},bE="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(aF in bh){bE+="|"+aF+"\\b"}bE=RegExp(bE+")","gi");var a8=function(w,p,j,b){if(null==w){return function(a){return a}}var x,d=p?(w.match(bE)||[""])[0]:"",q=w.split(d).join("").match(aL)||[],c=w.substr(0,w.indexOf(q[0])),g=")"===w.charAt(w.length-1)?")":"",k=-1!==w.indexOf(" ")?" ":",",v=q.length,m=v>0?q[0].replace(aO,""):"";return v?x=p?function(f){var i,h,a,l;if("number"==typeof f){f+=m}else{if(b&&bn.test(f)){for(l=f.replace(bn,"|").split("|"),a=0;l.length>a;a++){l[a]=x(l[a])}return l.join(",")}}if(i=(f.match(bE)||[d])[0],h=f.split(i).join("").match(aL)||[],a=h.length,v>a--){for(;v>++a;){h[a]=j?h[0|(a-1)/2]:q[a]}}return c+h.join(k)+k+i+g+(-1!==f.indexOf("inset")?" inset":"")}:function(a){var h,i,f;if("number"==typeof a){a+=m}else{if(b&&bn.test(a)){for(i=a.replace(bn,"|").split("|"),f=0;i.length>f;f++){i[f]=x(i[f])}return i.join(",")}}if(h=a.match(aL)||[],f=h.length,v>f--){for(;v>++f;){h[f]=j?h[0|(f-1)/2]:q[f]}}return c+h.join(k)+g}:function(a){return a}},aQ=function(a){return a=a.split(","),function(k,g,b,p,d,m,c){var f,j=(g+"").split(" ");for(c={},f=0;4>f;f++){c[a[f]]=j[f]=j[f]||j[(f-1)/2>>0]}return p.parse(k,c,d,m)}},bC=(bm._setPluginRatio=function(k){this.plugin.setRatio(k);for(var h,g,b,m,d=this.data,j=d.proxy,c=d.firstMPT,f=0.000001;c;){h=j[c.v],c.r?h=Math.round(h):f>h&&h>-f&&(h=0),c.t[c.p]=h,c=c._next}if(d.autoRotate&&(d.autoRotate.rotation=j.rotation),1===k){for(c=d.firstMPT;c;){if(g=c.t,g.type){if(1===g.type){for(m=g.xs0+g.s+g.xs1,b=1;g.l>b;b++){m+=g["xn"+b]+g["xs"+(b+1)]}g.e=m}}else{g.e=g.s+g.xs0}c=c._next}}},function(b,f,a,d,c){this.t=b,this.p=f,this.v=a,this.r=c,d&&(d._prev=this,this._next=d)}),al=(bm._parseToProxy=function(D,x,q,b,E,k){var A,j,m,v,C,w=b,g={},B={},z=q._transform,y=a9;for(q._transform=null,a9=x,b=C=q.parse(D,x,b,E),a9=y,k&&(q._transform=z,w&&(w._prev=null,w._prev&&(w._prev._next=null)));b&&b!==w;){if(1>=b.type&&(j=b.p,B[j]=b.s+b.c,g[j]=b.s,k||(v=new bC(b,"s",j,v,b.r),b.c=0),1===b.type)){for(A=b.l;--A>0;){m="xn"+A,j=b.p+"_"+m,B[j]=b.data[m],g[j]=b[m],k||(v=new bC(b,m,j,v,b.rxp[m]))}}b=b._next}return{proxy:g,end:B,firstMPT:v,pt:C}},bm.CSSPropTween=function(q,k,b,v,m,d,g,i,n,j,c){this.t=q,this.p=k,this.s=b,this.c=v,this.n=g||k,q instanceof al||aB.push(this.n),this.r=i,this.type=d||0,n&&(this.pr=n,aI=!0),this.b=void 0===j?b:j,this.e=void 0===c?b+v:c,m&&(this._next=m,m._prev=this)}),aa=aT.parseComplex=function(E,V,N,H,F,K,X,J,L,D){N=N||K||"",X=new al(E,V,0,0,X,D?2:1,null,!1,J,N,H),H+="";var U,I,Y,W,Q,B,q,z,b,A,j,d,h=N.split(", ").join(",").split(" "),G=H.split(", ").join(",").split(" "),M=h.length,m=aJ!==!1;for((-1!==H.indexOf(",")||-1!==N.indexOf(","))&&(h=h.join(" ").replace(bn,", ").split(" "),G=G.join(" ").replace(bn,", ").split(" "),M=h.length),M!==G.length&&(h=(K||"").split(" "),M=h.length),X.plugin=L,X.setRatio=D,U=0;M>U;U++){if(W=h[U],Q=G[U],z=parseFloat(W),z||0===z){X.appendXtra("",z,aD(Q,z),Q.replace(aC,""),m&&-1!==Q.indexOf("px"),!0)}else{if(F&&("#"===W.charAt(0)||bh[W]||aS.test(W))){d=","===Q.charAt(Q.length-1)?"),":")",W=aK(W),Q=aK(Q),b=W.length+Q.length>6,b&&!aW&&0===Q[3]?(X["xs"+X.l]+=X.l?" transparent":"transparent",X.e=X.e.split(G[U]).join("transparent")):(aW||(b=!1),X.appendXtra(b?"rgba(":"rgb(",W[0],Q[0]-W[0],",",!0,!0).appendXtra("",W[1],Q[1]-W[1],",",!0).appendXtra("",W[2],Q[2]-W[2],b?",":d,!0),b&&(W=4>W.length?1:W[3],X.appendXtra("",W,(4>Q.length?1:Q[3])-W,d,!1)))}else{if(B=W.match(aO)){if(q=Q.match(aC),!q||q.length!==B.length){return X}for(Y=0,I=0;B.length>I;I++){j=B[I],A=W.indexOf(j,Y),X.appendXtra(W.substr(Y,A-Y),Number(j),aD(q[I],j),"",m&&"px"===W.substr(A+j.length,2),0===I),Y=A+j.length}X["xs"+X.l]+=W.substr(Y)}else{X["xs"+X.l]+=X.l?" "+W:W}}}}if(-1!==H.indexOf("=")&&X.data){for(d=X.xs0+X.data.s,U=1;X.l>U;U++){d+=X["xs"+U]+X.data["xn"+U]}X.e=d+X["xs"+U]}return X.l||(X.type=-1,X.xs0=X.e),X.xfirst||X},ax=9;for(aF=al.prototype,aF.l=aF.pr=0;--ax>0;){aF["xn"+ax]=0,aF["xs"+ax]=""}aF.xs0="",aF._next=aF._prev=aF.xfirst=aF.data=aF.plugin=aF.setRatio=aF.rxp=null,aF.appendXtra=function(d,h,c,g,f,k){var b=this,j=b.l;return b["xs"+j]+=k&&j?" "+d:d||"",c||0===j||b.plugin?(b.l++,b.type=b.setRatio?2:1,b["xs"+b.l]=g||"",j>0?(b.data["xn"+j]=h+c,b.rxp["xn"+j]=f,b["xn"+j]=h,b.plugin||(b.xfirst=new al(b,"xn"+j,h,c,b.xfirst||b,0,b.n,f,b.pr),b.xfirst.xs0=0),b):(b.data={s:h+c},b.rxp={},b.s=h,b.c=c,b.r=f,b)):(b["xs"+j]+=h+(g||""),b)};var aj=function(a,b){b=b||{},this.p=b.prefix?aZ(a)||a:a,aA[a]=aA[this.p]=this,this.format=b.formatter||a8(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},bw=bm._registerComplexSpecialProp=function(d,h,c){"object"!=typeof h&&(h={parser:c});var g,f,j=d.split(","),b=h.defaultValue;for(c=c||[b],g=0;j.length>g;g++){h.prefix=0===g&&h.prefix,h.defaultValue=c[g]||b,f=new aj(j[g],h)}},bv=function(a){if(!aA[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";bw(a,{parser:function(g,f,m,k,o,d,c){var j=(_gsScope.GreenSockGlobals||_gsScope).com.greensock.plugins[b];return j?(j._cssRegister(),aA[m].parse(g,f,m,k,o,d,c)):(a0("Error: "+b+" js file not loaded."),o)}})}};aF=aj.prototype,aF.parseComplex=function(y,v,k,b,z,g){var w,d,j,m,x,q,c=this.keyword;if(this.multi&&(bn.test(k)||bn.test(v)?(d=v.replace(bn,"|").split("|"),j=k.replace(bn,"|").split("|")):c&&(d=[v],j=[k])),j){for(m=j.length>d.length?j.length:d.length,w=0;m>w;w++){v=d[w]=d[w]||this.dflt,k=j[w]=j[w]||this.dflt,c&&(x=v.indexOf(c),q=k.indexOf(c),x!==q&&(k=-1===q?j:d,k[w]+=" "+c))}v=d.join(", "),k=j.join(", ")}return aa(y,this.p,v,k,this.clrs,this.dflt,b,this.pr,z,g)},aF.parse=function(d,g,c,f,h,b){return this.parseComplex(d.style,this.format(bj(d,this.p,av,!1,this.dflt)),this.format(g),h,b)},aT.registerSpecialProp=function(b,c,a){bw(b,{parser:function(g,i,h,k,f,j){var d=new al(g,h,0,0,f,2,h,!1,a);return d.plugin=j,d.setRatio=c(g,i,k._tween,h),d},priority:a})};var am,bA="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),bH=aZ("transform"),bB=aH+"transform",ag=aZ("transformOrigin"),a2=null!==aZ("perspective"),aR=bm.Transform=function(){this.skewY=0},bI=window.SVGElement,ah=function(b,f,a){var d,c=an.createElementNS("http://www.w3.org/2000/svg",b),g=/([a-z])([A-Z])/g;for(d in a){c.setAttributeNS(null,d.replace(g,"$1-$2").toLowerCase(),a[d])}return f.appendChild(c),c},ba=document.documentElement,ac=function(){var b,d,a,c=aP||/Android/i.test(bl)&&!window.chrome;return an.createElementNS&&!c&&(b=ah("svg",ba),d=ah("rect",b,{width:100,height:50,x:100}),a=d.getBoundingClientRect().left,d.style[ag]="50% 50%",d.style[bH]="scale(0.5,0.5)",c=a===d.getBoundingClientRect().left,ba.removeChild(b)),c}(),bp=function(b,d,a){var c=b.getBBox();d=ab(d).split(" "),a.xOrigin=(-1!==d[0].indexOf("%")?parseFloat(d[0])/100*c.width:parseFloat(d[0]))+c.x,a.yOrigin=(-1!==d[1].indexOf("%")?parseFloat(d[1])/100*c.height:parseFloat(d[1]))+c.y},bD=bm.getTransform=function(b9,cn,cj,ca){if(b9._gsTransform&&cj&&!ca){return b9._gsTransform}var ce,cd,cg,ck,b8,cm,cc,cs,cp,co,cf,cl,b7,b3=cj?b9._gsTransform||new aR:new aR,b5=0>b3.scaleX,bJ=0.00002,b6=100000,cq=179.99,bN=cq*bb,bK=a2?parseFloat(bj(b9,ag,cn,!1,"0 0 0").split(" ")[2])||b3.zOrigin||0:0,bL=parseFloat(aT.defaultTransformPerspective)||0;if(bH?ce=bj(b9,bB,cn,!0):b9.currentStyle&&(ce=b9.currentStyle.filter.match(a7),ce=ce&&4===ce.length?[ce[0].substr(4),Number(ce[2].substr(4)),Number(ce[1].substr(4)),ce[3].substr(4),b3.x||0,b3.y||0].join(","):""),ce&&"none"!==ce&&"matrix(1, 0, 0, 1, 0, 0)"!==ce){for(cd=(ce||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],cg=cd.length;--cg>-1;){ck=Number(cd[cg]),cd[cg]=(b8=ck-(ck|=0))?(0|b8*b6+(0>b8?-0.5:0.5))/b6+ck:ck}if(16===cd.length){var bW=cd[8],ch=cd[9],bY=cd[10],bV=cd[12],bO=cd[13],b2=cd[14];if(b3.zOrigin&&(b2=-b3.zOrigin,bV=bW*b2-cd[12],bO=ch*b2-cd[13],b2=bY*b2+b3.zOrigin-cd[14]),!cj||ca||null==b3.rotationX){var L,bR,bU,bT,H,bX,be,ci=cd[0],O=cd[1],ae=cd[2],cb=cd[3],bS=cd[4],bM=cd[5],s=cd[6],b0=cd[7],bP=cd[11],bQ=Math.atan2(s,bY),M=-bN>bQ||bQ>bN;b3.rotationX=bQ*bc,bQ&&(bT=Math.cos(-bQ),H=Math.sin(-bQ),L=bS*bT+bW*H,bR=bM*bT+ch*H,bU=s*bT+bY*H,bW=bS*-H+bW*bT,ch=bM*-H+ch*bT,bY=s*-H+bY*bT,bP=b0*-H+bP*bT,bS=L,bM=bR,s=bU),bQ=Math.atan2(bW,ci),b3.rotationY=bQ*bc,bQ&&(bX=-bN>bQ||bQ>bN,bT=Math.cos(-bQ),H=Math.sin(-bQ),L=ci*bT-bW*H,bR=O*bT-ch*H,bU=ae*bT-bY*H,ch=O*H+ch*bT,bY=ae*H+bY*bT,bP=cb*H+bP*bT,ci=L,O=bR,ae=bU),bQ=Math.atan2(O,bM),b3.rotation=bQ*bc,bQ&&(be=-bN>bQ||bQ>bN,bT=Math.cos(-bQ),H=Math.sin(-bQ),ci=ci*bT+bS*H,bR=O*bT+bM*H,bM=O*-H+bM*bT,s=ae*-H+s*bT,O=bR),be&&M?b3.rotation=b3.rotationX=0:be&&bX?b3.rotation=b3.rotationY=0:bX&&M&&(b3.rotationY=b3.rotationX=0),b3.scaleX=(0|Math.sqrt(ci*ci+O*O)*b6+0.5)/b6,b3.scaleY=(0|Math.sqrt(bM*bM+ch*ch)*b6+0.5)/b6,b3.scaleZ=(0|Math.sqrt(s*s+bY*bY)*b6+0.5)/b6,b3.skewX=0,b3.perspective=bP?1/(0>bP?-bP:bP):0,b3.x=bV,b3.y=bO,b3.z=b2}}else{if(!(a2&&!ca&&cd.length&&b3.x===cd[4]&&b3.y===cd[5]&&(b3.rotationX||b3.rotationY)||void 0!==b3.x&&"none"===bj(b9,"display",cn))){var cr=cd.length>=6,b1=cr?cd[0]:1,b4=cd[1]||0,bZ=cd[2]||0,a=cr?cd[3]:1;b3.x=cd[4]||0,b3.y=cd[5]||0,cm=Math.sqrt(b1*b1+b4*b4),cc=Math.sqrt(a*a+bZ*bZ),cs=b1||b4?Math.atan2(b4,b1)*bc:b3.rotation||0,cp=bZ||a?Math.atan2(bZ,a)*bc+cs:b3.skewX||0,co=cm-Math.abs(b3.scaleX||0),cf=cc-Math.abs(b3.scaleY||0),Math.abs(cp)>90&&270>Math.abs(cp)&&(b5?(cm*=-1,cp+=0>=cs?180:-180,cs+=0>=cs?180:-180):(cc*=-1,cp+=0>=cp?180:-180)),cl=(cs-b3.rotation)%180,b7=(cp-b3.skewX)%180,(void 0===b3.skewX||co>bJ||-bJ>co||cf>bJ||-bJ>cf||cl>-cq&&cq>cl&&false|cl*b6||b7>-cq&&cq>b7&&false|b7*b6)&&(b3.scaleX=cm,b3.scaleY=cc,b3.rotation=cs,b3.skewX=cp),a2&&(b3.rotationX=b3.rotationY=b3.z=0,b3.perspective=bL,b3.scaleZ=1)}}b3.zOrigin=bK;for(cg in b3){bJ>b3[cg]&&b3[cg]>-bJ&&(b3[cg]=0)}}else{b3={x:0,y:0,z:0,scaleX:1,scaleY:1,scaleZ:1,skewX:0,skewY:0,perspective:bL,rotation:0,rotationX:0,rotationY:0,zOrigin:0}}return cj&&(b9._gsTransform=b3),b3.svg=bI&&b9 instanceof bI&&b9.parentNode instanceof bI,b3.svg&&(bp(b9,bj(b9,ag,av,!1,"50% 50%")+"",b3),am=aT.useSVGTransformAttr||ac),b3.xPercent=b3.yPercent=0,b3},aE=function(A){var O,K,E=this.data,B=-E.rotation*bb,H=B+E.skewX*bb,V=100000,G=(0|Math.cos(B)*E.scaleX*V)/V,J=(0|Math.sin(B)*E.scaleX*V)/V,L=(0|Math.sin(H)*-E.scaleY*V)/V,z=(0|Math.cos(H)*E.scaleY*V)/V,N=this.t.style,F=this.t.currentStyle;if(F){K=J,J=-L,L=-K,O=F.filter,N.filter="";var W,Q,I=this.t.offsetWidth,M=this.t.offsetHeight,y="absolute"!==F.position,c="progid:DXImageTransform.Microsoft.Matrix(M11="+G+", M12="+J+", M21="+L+", M22="+z,x=E.x+I*E.xPercent/100,U=E.y+M*E.yPercent/100;if(null!=E.ox&&(W=(E.oxp?0.01*I*E.ox:E.ox)-I/2,Q=(E.oyp?0.01*M*E.oy:E.oy)-M/2,x+=W-(W*G+Q*J),U+=Q-(W*L+Q*z)),y?(W=I/2,Q=M/2,c+=", Dx="+(W-(W*G+Q*J)+x)+", Dy="+(Q-(W*L+Q*z)+U)+")"):c+=", sizingMethod='auto expand')",N.filter=-1!==O.indexOf("DXImageTransform.Microsoft.Matrix(")?O.replace(bs,c):c+" "+O,(0===A||1===A)&&1===G&&0===J&&0===L&&1===z&&(y&&-1===c.indexOf("Dx=0, Dy=0")||ap.test(O)&&100!==parseFloat(RegExp.$1)||-1===O.indexOf("gradient("&&O.indexOf("Alpha"))&&N.removeAttribute("filter")),!y){var q,j,k,D=8>aP?1:-1;for(W=E.ieOffsetX||0,Q=E.ieOffsetY||0,E.ieOffsetX=Math.round((I-((0>G?-G:G)*I+(0>J?-J:J)*M))/2+x),E.ieOffsetY=Math.round((M-((0>z?-z:z)*M+(0>L?-L:L)*I))/2+U),ax=0;4>ax;ax++){j=bf[ax],q=F[j],K=-1!==q.indexOf("px")?parseFloat(q):bk(this.t,j,parseFloat(q),q.replace(ao,""))||0,k=K!==E[j]?2>ax?-E.ieOffsetX:-E.ieOffsetY:2>ax?W-E.ieOffsetX:Q-E.ieOffsetY,N[j]=(E[j]=Math.round(K-k*(0===ax||2===ax?1:D)))+"px"}}}},bG=bm.set3DTransformRatio=function(V){var bS,bO,ae,Y,bK,bW,bJ,bM,bP,U,bR,bX,bU,bT,bL,bQ,Q,J,K,p,M,bV,E,q=this.data,B=this.t.style,Z=q.rotation*bb,bN=q.scaleX,F=q.scaleY,be=q.scaleZ,W=q.x,H=q.y,G=q.z,I=q.perspective;if(!(1!==V&&0!==V||"auto"!==q.force3D||q.rotationY||q.rotationX||1!==be||I||G)){return af.call(this,V),void 0}if(az){var j=0.0001;j>bN&&bN>-j&&(bN=be=0.00002),j>F&&F>-j&&(F=be=0.00002),!I||q.z||q.rotationX||q.rotationY||(I=0)}if(Z||q.skewX){J=Math.cos(Z),K=Math.sin(Z),bS=J,bK=K,q.skewX&&(Z-=q.skewX*bb,J=Math.cos(Z),K=Math.sin(Z),"simple"===q.skewType&&(p=Math.tan(q.skewX*bb),p=Math.sqrt(1+p*p),J*=p,K*=p)),bO=-K,bW=J}else{if(!(q.rotationY||q.rotationX||1!==be||I||q.svg)){return B[bH]=(q.xPercent||q.yPercent?"translate("+q.xPercent+"%,"+q.yPercent+"%) translate3d(":"translate3d(")+W+"px,"+H+"px,"+G+"px)"+(1!==bN||1!==F?" scale("+bN+","+F+")":""),void 0}bS=bW=1,bO=bK=0}bR=1,ae=Y=bJ=bM=bP=U=bX=bU=bT=0,bL=I?-1/I:0,bQ=q.zOrigin,Q=100000,Z=q.rotationY*bb,Z&&(J=Math.cos(Z),K=Math.sin(Z),bP=bR*-K,bU=bL*-K,ae=bS*K,bJ=bK*K,bR*=J,bL*=J,bS*=J,bK*=J),Z=q.rotationX*bb,Z&&(J=Math.cos(Z),K=Math.sin(Z),p=bO*J+ae*K,M=bW*J+bJ*K,bV=U*J+bR*K,E=bT*J+bL*K,ae=bO*-K+ae*J,bJ=bW*-K+bJ*J,bR=U*-K+bR*J,bL=bT*-K+bL*J,bO=p,bW=M,U=bV,bT=E),1!==be&&(ae*=be,bJ*=be,bR*=be,bL*=be),1!==F&&(bO*=F,bW*=F,U*=F,bT*=F),1!==bN&&(bS*=bN,bK*=bN,bP*=bN,bU*=bN),bQ&&(bX-=bQ,Y=ae*bX,bM=bJ*bX,bX=bR*bX+bQ),q.svg&&(Y+=q.xOrigin-(q.xOrigin*bS+q.yOrigin*bO),bM+=q.yOrigin-(q.xOrigin*bK+q.yOrigin*bW)),Y=(p=(Y+=W)-(Y|=0))?(0|p*Q+(0>p?-0.5:0.5))/Q+Y:Y,bM=(p=(bM+=H)-(bM|=0))?(0|p*Q+(0>p?-0.5:0.5))/Q+bM:bM,bX=(p=(bX+=G)-(bX|=0))?(0|p*Q+(0>p?-0.5:0.5))/Q+bX:bX,B[bH]=(q.xPercent||q.yPercent?"translate("+q.xPercent+"%,"+q.yPercent+"%) matrix3d(":"matrix3d(")+[(0|bS*Q)/Q,(0|bK*Q)/Q,(0|bP*Q)/Q,(0|bU*Q)/Q,(0|bO*Q)/Q,(0|bW*Q)/Q,(0|U*Q)/Q,(0|bT*Q)/Q,(0|ae*Q)/Q,(0|bJ*Q)/Q,(0|bR*Q)/Q,(0|bL*Q)/Q,Y,bM,bX,I?1+-bX/I:1].join(",")+")"},af=bm.set2DTransformRatio=function(F){var z,w,b,G,k,C,j,v,x,E,y,g=this.data,D=this.t,B=D.style,A=g.x,q=g.y;return !(g.rotationX||g.rotationY||g.z||g.force3D===!0||"auto"===g.force3D&&1!==F&&0!==F)||g.svg&&am||!a2?(G=g.scaleX,k=g.scaleY,g.rotation||g.skewX||g.svg?(z=g.rotation*bb,w=z-g.skewX*bb,b=100000,C=Math.cos(z)*G,j=Math.sin(z)*G,v=Math.sin(w)*-k,x=Math.cos(w)*k,g.svg&&(A+=g.xOrigin-(g.xOrigin*C+g.yOrigin*v),q+=g.yOrigin-(g.xOrigin*j+g.yOrigin*x),y=0.000001,y>A&&A>-y&&(A=0),y>q&&q>-y&&(q=0)),E=(0|C*b)/b+","+(0|j*b)/b+","+(0|v*b)/b+","+(0|x*b)/b+","+A+","+q+")",g.svg&&am?D.setAttribute("transform","matrix("+E):B[bH]=(g.xPercent||g.yPercent?"translate("+g.xPercent+"%,"+g.yPercent+"%) matrix(":"matrix(")+E):B[bH]=(g.xPercent||g.yPercent?"translate("+g.xPercent+"%,"+g.yPercent+"%) matrix(":"matrix(")+G+",0,0,"+k+","+A+","+q+")",void 0):(this.setRatio=bG,bG.call(this,F),void 0)};bw("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent",{parser:function(s,I,E,w,B,A,D){if(w._transform){return B}var F,q,H,z,L,K,J,C=w._transform=bD(s,av,!0,D.parseTransform),G=s.style,k=0.000001,b=bA.length,j=D,a={};if("string"==typeof j.transform&&bH){H=aX.style,H[bH]=j.transform,H.display="block",H.position="absolute",an.body.appendChild(aX),F=bD(aX,null,!1),an.body.removeChild(aX)}else{if("object"==typeof j){if(F={scaleX:bF(null!=j.scaleX?j.scaleX:j.scale,C.scaleX),scaleY:bF(null!=j.scaleY?j.scaleY:j.scale,C.scaleY),scaleZ:bF(j.scaleZ,C.scaleZ),x:bF(j.x,C.x),y:bF(j.y,C.y),z:bF(j.z,C.z),xPercent:bF(j.xPercent,C.xPercent),yPercent:bF(j.yPercent,C.yPercent),perspective:bF(j.transformPerspective,C.perspective)},J=j.directionalRotation,null!=J){if("object"==typeof J){for(H in J){j[H]=J[H]}}else{j.rotation=J}}"string"==typeof j.x&&-1!==j.x.indexOf("%")&&(F.x=0,F.xPercent=bF(j.x,C.xPercent)),"string"==typeof j.y&&-1!==j.y.indexOf("%")&&(F.y=0,F.yPercent=bF(j.y,C.yPercent)),F.rotation=bx("rotation" in j?j.rotation:"shortRotation" in j?j.shortRotation+"_short":"rotationZ" in j?j.rotationZ:C.rotation,C.rotation,"rotation",a),a2&&(F.rotationX=bx("rotationX" in j?j.rotationX:"shortRotationX" in j?j.shortRotationX+"_short":C.rotationX||0,C.rotationX,"rotationX",a),F.rotationY=bx("rotationY" in j?j.rotationY:"shortRotationY" in j?j.shortRotationY+"_short":C.rotationY||0,C.rotationY,"rotationY",a)),F.skewX=null==j.skewX?C.skewX:bx(j.skewX,C.skewX),F.skewY=null==j.skewY?C.skewY:bx(j.skewY,C.skewY),(q=F.skewY-C.skewY)&&(F.skewX+=q,F.rotation+=q)}}for(a2&&null!=j.force3D&&(C.force3D=j.force3D,K=!0),C.skewType=j.skewType||C.skewType||aT.defaultSkewType,L=C.force3D||C.z||C.rotationX||C.rotationY||F.z||F.rotationX||F.rotationY||F.perspective,L||null==j.scale||(F.scaleZ=1);--b>-1;){E=bA[b],z=F[E]-C[E],(z>k||-k>z||null!=j[E]||null!=a9[E])&&(K=!0,B=new al(C,E,C[E],z,B),E in a&&(B.e=a[E]),B.xs0=0,B.plugin=A,w._overwriteProps.push(B.n))}return z=j.transformOrigin,z&&C.svg&&(bp(s,z,F),B=new al(C,"xOrigin",C.xOrigin,F.xOrigin-C.xOrigin,B,-1,"transformOrigin"),B.b=C.xOrigin,B.e=B.xs0=F.xOrigin,B=new al(C,"yOrigin",C.yOrigin,F.yOrigin-C.yOrigin,B,-1,"transformOrigin"),B.b=C.yOrigin,B.e=B.xs0=F.yOrigin,z="0px 0px"),(z||a2&&L&&C.zOrigin)&&(bH?(K=!0,E=ag,z=(z||bj(s,E,av,!1,"50% 50%"))+"",B=new al(G,E,0,0,B,-1,"transformOrigin"),B.b=G[E],B.plugin=A,a2?(H=C.zOrigin,z=z.split(" "),C.zOrigin=(z.length>2&&(0===H||"0px"!==z[2])?parseFloat(z[2]):H)||0,B.xs0=B.e=z[0]+" "+(z[1]||"50%")+" 0px",B=new al(C,"zOrigin",0,0,B,-1,B.n),B.b=H,B.xs0=B.e=C.zOrigin):B.xs0=B.e=z):ab(z+"",C)),K&&(w._transformType=C.svg&&am||!L&&3!==this._transformType?2:3),B},prefix:!0}),bw("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),bw("borderRadius",{defaultValue:"0px",parser:function(B,L,H,E,Q){L=this.format(L);var D,G,I,A,K,C,R,N,M,F,J,z,q,r,j,s,O=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],k=B.style;for(M=parseFloat(B.offsetWidth),F=parseFloat(B.offsetHeight),D=L.split(" "),G=0;O.length>G;G++){this.p.indexOf("border")&&(O[G]=aZ(O[G])),K=A=bj(B,O[G],av,!1,"0px"),-1!==K.indexOf(" ")&&(A=K.split(" "),K=A[0],A=A[1]),C=I=D[G],R=parseFloat(K),z=K.substr((R+"").length),q="="===C.charAt(1),q?(N=parseInt(C.charAt(0)+"1",10),C=C.substr(2),N*=parseFloat(C),J=C.substr((N+"").length-(0>N?1:0))||""):(N=parseFloat(C),J=C.substr((N+"").length)),""===J&&(J=aw[H]||z),J!==z&&(r=bk(B,"borderLeft",R,z),j=bk(B,"borderTop",R,z),"%"===J?(K=100*(r/M)+"%",A=100*(j/F)+"%"):"em"===J?(s=bk(B,"borderLeft",1,"em"),K=r/s+"em",A=j/s+"em"):(K=r+"px",A=j+"px"),q&&(C=parseFloat(K)+N+J,I=parseFloat(A)+N+J)),Q=aa(k,O[G],K+" "+A,C+" "+I,!1,"0px",Q)}return Q},prefix:!0,formatter:a8("0px 0px 0px 0px",!1,!0)}),bw("backgroundPosition",{defaultValue:"0 0",parser:function(E,z,v,b,k,B){var j,s,w,D,y,c,C="background-position",A=av||ay(E,null),q=this.format((A?aP?A.getPropertyValue(C+"-x")+" "+A.getPropertyValue(C+"-y"):A.getPropertyValue(C):E.currentStyle.backgroundPositionX+" "+E.currentStyle.backgroundPositionY)||"0 0"),x=this.format(z);if(-1!==q.indexOf("%")!=(-1!==x.indexOf("%"))&&(c=bj(E,"backgroundImage").replace(a4,""),c&&"none"!==c)){for(j=q.split(" "),s=x.split(" "),bg.setAttribute("src",c),w=2;--w>-1;){q=j[w],D=-1!==q.indexOf("%"),D!==(-1!==s[w].indexOf("%"))&&(y=0===w?E.offsetWidth-bg.width:E.offsetHeight-bg.height,j[w]=D?parseFloat(q)/100*y+"px":100*(parseFloat(q)/y)+"%")}q=j.join(" ")}return this.parseComplex(E.style,q,x,k,B)},formatter:ab}),bw("backgroundSize",{defaultValue:"0 0",formatter:ab}),bw("perspective",{defaultValue:"0px",prefix:!0}),bw("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),bw("transformStyle",{prefix:!0}),bw("backfaceVisibility",{prefix:!0}),bw("userSelect",{prefix:!0}),bw("margin",{parser:aQ("marginTop,marginRight,marginBottom,marginLeft")}),bw("padding",{parser:aQ("paddingTop,paddingRight,paddingBottom,paddingLeft")}),bw("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(p,k,g,b,d,m){var c,f,j;return 9>aP?(f=p.currentStyle,j=8>aP?" ":",",c="rect("+f.clipTop+j+f.clipRight+j+f.clipBottom+j+f.clipLeft+")",k=this.format(k).split(",").join(j)):(c=this.format(bj(p,this.p,av,!1,this.dflt)),k=this.format(k)),this.parseComplex(p.style,c,k,d,m)}}),bw("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),bw("autoRound,strictUnits",{parser:function(b,f,a,d,c){return c}}),bw("border",{defaultValue:"0px solid #000",parser:function(d,g,c,f,h,b){return this.parseComplex(d.style,this.format(bj(d,"borderTopWidth",av,!1,"0px")+" "+bj(d,"borderTopStyle",av,!1,"solid")+" "+bj(d,"borderTopColor",av,!1,"#000")),this.format(g),h,b)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(bE)||["#000"])[0]}}),bw("borderWidth",{parser:aQ("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),bw("float,cssFloat,styleFloat",{parser:function(d,h,c,g,f){var j=d.style,b="cssFloat" in j?"cssFloat":"styleFloat";return new al(j,b,0,0,f,-1,c,!1,0,j[b],h)}});var by=function(b){var f,a=this.t,d=a.filter||bj(this.data,"filter")||"",c=0|this.s+this.c*b;100===c&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(a.removeAttribute("filter"),f=!bj(this.data,"filter")):(a.filter=d.replace(aq,""),f=!0)),f||(this.xn1&&(a.filter=d=d||"alpha(opacity="+c+")"),-1===d.indexOf("pacity")?0===c&&this.xn1||(a.filter=d+" alpha(opacity="+c+")"):a.filter=d.replace(ap,"opacity="+c))};bw("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(p,k,g,b,d,m){var c=parseFloat(bj(p,"opacity",av,!1,"1")),f=p.style,j="autoAlpha"===g;return"string"==typeof k&&"="===k.charAt(1)&&(k=("-"===k.charAt(0)?-1:1)*parseFloat(k.substr(2))+c),j&&1===c&&"hidden"===bj(p,"visibility",av)&&0!==k&&(c=0),aW?d=new al(f,"opacity",c,k-c,d):(d=new al(f,"opacity",100*c,100*(k-c),d),d.xn1=j?1:0,f.zoom=1,d.type=2,d.b="alpha(opacity="+d.s+")",d.e="alpha(opacity="+(d.s+d.c)+")",d.data=p,d.plugin=m,d.setRatio=by),j&&(d=new al(f,"visibility",0,0,d,-1,null,!1,0,0!==c?"inherit":"hidden",0===k?"hidden":"inherit"),d.xs0="inherit",b._overwriteProps.push(d.n),b._overwriteProps.push(g)),d}});var bt=function(a,b){b&&(a.removeProperty?("ms"===b.substr(0,2)&&(b="M"+b.substr(1)),a.removeProperty(b.replace(a6,"-$1").toLowerCase())):a.removeAttribute(b))},ai=function(b){if(this.t._gsClassPT=this,1===b||0===b){this.t.setAttribute("class",0===b?this.b:this.e);for(var c=this.data,a=this.t.style;c;){c.v?a[c.p]=c.v:bt(a,c.p),c=c._next}1===b&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else{this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)}};bw("className",{parser:function(A,s,b,j,x,i,k){var m,z,q,g,y,w=A.getAttribute("class")||"",v=A.style.cssText;if(x=j._classNamePT=new al(A,b,0,0,x,2),x.setRatio=ai,x.pr=-11,aI=!0,x.b=w,z=aV(A,av),q=A._gsClassPT){for(g={},y=q.data;y;){g[y.p]=1,y=y._next}q.setRatio(1)}return A._gsClassPT=x,x.e="="!==s.charAt(1)?s:w.replace(RegExp("\\s*\\b"+s.substr(2)+"\\b"),"")+("+"===s.charAt(0)?" "+s.substr(2):""),j._tween._duration&&(A.setAttribute("class",x.e),m=bz(A,z,aV(A),k,g),A.setAttribute("class",w),x.data=m.firstMPT,A.style.cssText=v,x=x.xfirst=j.parse(A,m.difs,x,i)),x}});var bi=function(d){if((1===d||0===d)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var h,c,g,f,j=this.t.style,b=aA.transform.parse;if("all"===this.e){j.cssText="",f=!0}else{for(h=this.e.split(" ").join("").split(","),g=h.length;--g>-1;){c=h[g],aA[c]&&(aA[c].parse===b?f=!0:c="transformOrigin"===c?ag:aA[c].p),bt(j,c)}}f&&(bt(j,bH),this.t._gsTransform&&delete this.t._gsTransform)}};for(bw("clearProps",{parser:function(a,d,c,b,f){return f=new al(a,c,0,0,f,2),f.setRatio=bi,f.e=d,f.pr=-10,f.data=b._tween,aI=!0,f}}),aF="bezier,throwProps,physicsProps,physics2D".split(","),ax=aF.length;ax--;){bv(aF[ax])}aF=aT.prototype,aF._firstPT=null,aF._onInitTween=function(z,j,b){if(!z.nodeType){return !1}this._target=z,this._tween=b,this._vars=j,aJ=j.autoRound,aI=!1,aw=j.suffixMap||aT.suffixMap,av=ay(z,""),aB=this._overwriteProps;var h,a,n,k,f,i,u,q,r,s=z.style;if(at&&""===s.zIndex&&(h=bj(z,"zIndex",av),("auto"===h||""===h)&&this._addLazySet(s,"zIndex",0)),"string"==typeof j&&(k=s.cssText,h=aV(z,av),s.cssText=k+";"+j,h=bz(z,h,aV(z)).difs,!aW&&a1.test(j)&&(h.opacity=parseFloat(RegExp.$1)),j=h,s.cssText=k),this._firstPT=a=this.parse(z,j,null),this._transformType){for(r=3===this._transformType,bH?aM&&(at=!0,""===s.zIndex&&(u=bj(z,"zIndex",av),("auto"===u||""===u)&&this._addLazySet(s,"zIndex",0)),aU&&this._addLazySet(s,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(r?"visible":"hidden"))):s.zoom=1,n=a;n&&n._next;){n=n._next}q=new al(z,"transform",0,0,null,2),this._linkCSSP(q,null,n),q.setRatio=r&&a2?bG:bH?af:aE,q.data=this._transform||bD(z,av,!0),aB.pop()}if(aI){for(;a;){for(i=a._next,n=k;n&&n.pr>a.pr;){n=n._next}(a._prev=n?n._prev:f)?a._prev._next=a:k=a,(a._next=n)?n._prev=a:f=a,a=i}this._firstPT=k}return !0},aF.parse=function(C,s,o,h){var y,k,B,r,b,A,x,w,j,q,z=C.style;for(y in s){A=s[y],k=aA[y],k?o=k.parse(C,A,y,this,o,h,s):(b=bj(C,y,av)+"",j="string"==typeof A,"color"===y||"fill"===y||"stroke"===y||-1!==y.indexOf("Color")||j&&aS.test(A)?(j||(A=aK(A),A=(A.length>3?"rgba(":"rgb(")+A.join(",")+")"),o=aa(z,y,b,A,!0,"transparent",o,0,h)):!j||-1===A.indexOf(" ")&&-1===A.indexOf(",")?(B=parseFloat(b),x=B||0===B?b.substr((B+"").length):"",(""===b||"auto"===b)&&("width"===y||"height"===y?(B=bo(C,y,av),x="px"):"left"===y||"top"===y?(B=a5(C,y,av),x="px"):(B="opacity"!==y?0:1,x="")),q=j&&"="===A.charAt(1),q?(r=parseInt(A.charAt(0)+"1",10),A=A.substr(2),r*=parseFloat(A),w=A.replace(ao,"")):(r=parseFloat(A),w=j?A.substr((r+"").length)||"":""),""===w&&(w=y in aw?aw[y]:x),A=r||0===r?(q?r+B:r)+w:s[y],x!==w&&""!==w&&(r||0===r)&&B&&(B=bk(C,y,B,x),"%"===w?(B/=bk(C,y,100,"%")/100,s.strictUnits!==!0&&(b=B+"%")):"em"===w?B/=bk(C,y,1,"em"):"px"!==w&&(r=bk(C,y,r,w),w="px"),q&&(r||0===r)&&(A=r+B+w)),q&&(r+=B),!B&&0!==B||!r&&0!==r?void 0!==z[y]&&(A||"NaN"!=A+""&&null!=A)?(o=new al(z,y,r||B||0,0,o,-1,y,!1,0,b,A),o.xs0="none"!==A||"display"!==y&&-1===y.indexOf("Style")?A:b):a0("invalid "+y+" tween value: "+s[y]):(o=new al(z,y,B,r-B,o,0,y,aJ!==!1&&("px"===w||"zIndex"===y),0,b,A),o.xs0=w)):o=aa(z,y,b,A,!0,null,o,0,h)),h&&o&&!o.plugin&&(o.plugin=h)}return o},aF.setRatio=function(b){var f,a,d,c=this._firstPT,g=0.000001;if(1!==b||this._tween._time!==this._tween._duration&&0!==this._tween._time){if(b||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-0.000001){for(;c;){if(f=c.c*b+c.s,c.r?f=Math.round(f):g>f&&f>-g&&(f=0),c.type){if(1===c.type){if(d=c.l,2===d){c.t[c.p]=c.xs0+f+c.xs1+c.xn1+c.xs2}else{if(3===d){c.t[c.p]=c.xs0+f+c.xs1+c.xn1+c.xs2+c.xn2+c.xs3}else{if(4===d){c.t[c.p]=c.xs0+f+c.xs1+c.xn1+c.xs2+c.xn2+c.xs3+c.xn3+c.xs4}else{if(5===d){c.t[c.p]=c.xs0+f+c.xs1+c.xn1+c.xs2+c.xn2+c.xs3+c.xn3+c.xs4+c.xn4+c.xs5}else{for(a=c.xs0+f+c.xs1,d=1;c.l>d;d++){a+=c["xn"+d]+c["xs"+(d+1)]}c.t[c.p]=a}}}}}else{-1===c.type?c.t[c.p]=c.xs0:c.setRatio&&c.setRatio(b)}}else{c.t[c.p]=f+c.xs0}c=c._next}}else{for(;c;){2!==c.type?c.t[c.p]=c.b:c.setRatio(b),c=c._next}}}else{for(;c;){2!==c.type?c.t[c.p]=c.e:c.setRatio(b),c=c._next}}},aF._enableTransforms=function(a){this._transform=this._transform||bD(this._target,av,!0),this._transformType=this._transform.svg&&am||!a&&3!==this._transformType?2:3};var ak=function(){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};aF._addLazySet=function(b,d,a){var c=this._firstPT=new al(b,d,0,0,this._firstPT,2);c.e=a,c.setRatio=ak,c.data=this},aF._linkCSSP=function(b,d,a,c){return b&&(d&&(d._prev=b),b._next&&(b._next._prev=b._prev),b._prev?b._prev._next=b._next:this._firstPT===b&&(this._firstPT=b._next,c=!0),a?a._next=b:c||null!==this._firstPT||(this._firstPT=b),b._next=d,b._prev=a),b},aF._kill=function(d){var a,c,b,f=d;if(d.autoAlpha||d.alpha){f={};for(c in d){f[c]=d[c]}f.opacity=1,f.autoAlpha&&(f.visibility=1)}return d.className&&(a=this._classNamePT)&&(b=a.xfirst,b&&b._prev?this._linkCSSP(b._prev,a._next,b._prev._prev):b===this._firstPT&&(this._firstPT=a._next),a._next&&this._linkCSSP(a._next,a._next._next,b._prev),this._classNamePT=null),au.prototype._kill.call(this,f)};var ad=function(d,h,c){var g,f,j,b;if(d.slice){for(f=d.length;--f>-1;){ad(d[f],h,c)}}else{for(g=d.childNodes,f=g.length;--f>-1;){j=g[f],b=j.type,j.style&&(h.push(aV(j)),c&&c.push(j)),1!==b&&9!==b&&11!==b||!j.childNodes.length||ad(j,h,c)}}};return aT.cascadeTo=function(x,k,b){var y,g,v,d=aN.to(x,k,b),j=[d],m=[],w=[],q=[],c=aN._internals.reservedProps;for(x=d._targets||d.target,ad(x,m,q),d.render(k,!0),ad(x,w),d.render(0,!0),d._enabled(!0),y=q.length;--y>-1;){if(g=bz(q[y],m[y],w[y]),g.firstMPT){g=g.difs;for(v in b){c[v]&&(g[v]=b[v])}j.push(aN.to(q[y],k,g))}}return j},au.activate([aT]),aT},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"function"==typeof define&&define.amd?define(["TweenLite"],b):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=b())}("CSSPlugin");
/*!
 * VERSION: beta 0.3.3
 * DATE: 2014-10-29
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(function(w){var J=w.GreenSockGlobals||w,F=function(c){var a,d=c.split("."),f=J;for(a=0;d.length>a;a++){f[d[a]]=f=f[d[a]]||{}}return f},x=F("com.greensock.utils"),z=function(c){var d=c.nodeType,a="";if(1===d||9===d||11===d){if("string"==typeof c.textContent){return c.textContent}for(c=c.firstChild;c;c=c.nextSibling){a+=z(c)}}else{if(3===d||4===d){return c.nodeValue}}return a},C=document,M=C.defaultView?C.defaultView.getComputedStyle:function(){},B=/([A-Z])/g,G=function(c,g,a,d){var f;return(a=a||M(c,null))?(c=a.getPropertyValue(g.replace(B,"-$1").toLowerCase()),f=c||a.length?c:a[g]):c.currentStyle&&(a=c.currentStyle,f=a[g]),d?f:parseInt(f,10)||0},E=function(a){return a.length&&a[0]&&(a[0].nodeType&&a[0].style&&!a.nodeType||a[0].length&&a[0][0])?!0:!1},N=function(c){var g,a,d,f=[],h=c.length;for(g=0;h>g;g++){if(a=c[g],E(a)){for(d=a.length,d=0;a.length>d;d++){f.push(a[d])}}else{f.push(a)}}return f},q=")eefec303079ad17405c",L=/(?:<br>|<br\/>|<br \/>)/gi,A=C.all&&!C.addEventListener,I="<div style='position:relative;display:inline-block;"+(A?"*display:inline;*zoom:1;'":"'"),D=function(c){c=c||"";var d=-1!==c.indexOf("++"),a=1;return d&&(c=c.split("++").join("")),function(){return I+(c?" class='"+c+(d?a++:"")+"'>":">")}},K=x.SplitText=J.SplitText=function(a,c){if("string"==typeof a&&(a=K.selector(a)),!a){throw"cannot split a null element."}this.elements=E(a)?N(a):[a],this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=c||{},this.split(c)},H=function(c,f,a){var d=c.nodeType;if(1===d||9===d||11===d){for(c=c.firstChild;c;c=c.nextSibling){H(c,f,a)}}else{(3===d||4===d)&&(c.nodeValue=c.nodeValue.split(f).join(a))}},k=function(c,d){for(var a=d.length;--a>-1;){c.push(d[a])}},j=function(ay,aI,aG,az,aC){L.test(ay.innerHTML)&&(ay.innerHTML=ay.innerHTML.replace(L,q));var aD,aL,aB,aH,aJ,av,u,ax,aK,aw,ac,v,ap,aE,aa=z(ay),ar=aI.type||aI.split||"chars,words,lines",ad=-1!==ar.indexOf("lines")?[]:null,ao=-1!==ar.indexOf("words"),af=-1!==ar.indexOf("chars"),ag="absolute"===aI.position||aI.absolute===!0,au=ag?"&#173; ":" ",aj=-999,an=M(ay),ae=G(ay,"paddingLeft",an),am=G(ay,"borderBottomWidth",an)+G(ay,"borderTopWidth",an),g=G(ay,"borderLeftWidth",an)+G(ay,"borderRightWidth",an),r=G(ay,"paddingTop",an)+G(ay,"paddingBottom",an),aq=G(ay,"paddingLeft",an)+G(ay,"paddingRight",an),aF=G(ay,"textAlign",an,!0),c=ay.clientHeight,aA=ay.clientWidth,al="</div>",n=D(aI.wordsClass),ab=D(aI.charsClass),m=-1!==(aI.linesClass||"").indexOf("++"),ak=aI.linesClass,a=-1!==aa.indexOf("<"),at=!0,ah=[],ai=[],h=[];for(m&&(ak=ak.split("++").join("")),a&&(aa=aa.split("<").join("{{LT}}")),aD=aa.length,aH=n(),aJ=0;aD>aJ;aJ++){if(u=aa.charAt(aJ),")"===u&&aa.substr(aJ,20)===q){aH+=(at?al:"")+"<BR/>",at=!1,aJ!==aD-20&&aa.substr(aJ+20,20)!==q&&(aH+=" "+n(),at=!0),aJ+=19}else{if(" "===u&&" "!==aa.charAt(aJ-1)&&aJ!==aD-1&&aa.substr(aJ-20,20)!==q){for(aH+=at?al:"",at=!1;" "===aa.charAt(aJ+1);){aH+=au,aJ++}(")"!==aa.charAt(aJ+1)||aa.substr(aJ+1,20)!==q)&&(aH+=au+n(),at=!0)}else{aH+=af&&" "!==u?ab()+u+"</div>":u}}}for(ay.innerHTML=aH+(at?al:""),a&&H(ay,"{{LT}}","<"),av=ay.getElementsByTagName("*"),aD=av.length,ax=[],aJ=0;aD>aJ;aJ++){ax[aJ]=av[aJ]}if(ad||ag){for(aJ=0;aD>aJ;aJ++){aK=ax[aJ],aB=aK.parentNode===ay,(aB||ag||af&&!ao)&&(aw=aK.offsetTop,ad&&aB&&aw!==aj&&"BR"!==aK.nodeName&&(aL=[],ad.push(aL),aj=aw),ag&&(aK._x=aK.offsetLeft,aK._y=aw,aK._w=aK.offsetWidth,aK._h=aK.offsetHeight),ad&&(ao!==aB&&af||(aL.push(aK),aK._x-=ae),aB&&aJ&&(ax[aJ-1]._wordEnd=!0),"BR"===aK.nodeName&&aK.nextSibling&&"BR"===aK.nextSibling.nodeName&&ad.push([])))}}for(aJ=0;aD>aJ;aJ++){aK=ax[aJ],aB=aK.parentNode===ay,"BR"!==aK.nodeName?(ag&&(v=aK.style,ao||aB||(aK._x+=aK.parentNode._x,aK._y+=aK.parentNode._y),v.left=aK._x+"px",v.top=aK._y+"px",v.position="absolute",v.display="block",v.width=aK._w+1+"px",v.height=aK._h+"px"),ao?aB&&""!==aK.innerHTML?ai.push(aK):af&&ah.push(aK):aB?(ay.removeChild(aK),ax.splice(aJ--,1),aD--):!aB&&af&&(aw=!ad&&!ag&&aK.nextSibling,ay.appendChild(aK),aw||ay.appendChild(C.createTextNode(" ")),ah.push(aK))):ad||ag?(ay.removeChild(aK),ax.splice(aJ--,1),aD--):ao||ay.appendChild(aK)}if(ad){for(ag&&(ac=C.createElement("div"),ay.appendChild(ac),ap=ac.offsetWidth+"px",aw=ac.offsetParent===ay?0:ay.offsetLeft,ay.removeChild(ac)),v=ay.style.cssText,ay.style.cssText="display:none;";ay.firstChild;){ay.removeChild(ay.firstChild)}for(aE=!ag||!ao&&!af,aJ=0;ad.length>aJ;aJ++){for(aL=ad[aJ],ac=C.createElement("div"),ac.style.cssText="display:block;text-align:"+aF+";position:"+(ag?"absolute;":"relative;"),ak&&(ac.className=ak+(m?aJ+1:"")),h.push(ac),aD=aL.length,av=0;aD>av;av++){"BR"!==aL[av].nodeName&&(aK=aL[av],ac.appendChild(aK),aE&&(aK._wordEnd||ao)&&ac.appendChild(C.createTextNode(" ")),ag&&(0===av&&(ac.style.top=aK._y+"px",ac.style.left=ae+aw+"px"),aK.style.top="0px",aw&&(aK.style.left=aK._x-aw+"px")))}0===aD&&(ac.innerHTML="&nbsp;"),ao||af||(ac.innerHTML=z(ac).split(String.fromCharCode(160)).join(" ")),ag&&(ac.style.width=ap,ac.style.height=aK._h+"px"),ay.appendChild(ac)}ay.style.cssText=v}ag&&(c>ay.clientHeight&&(ay.style.height=c-r+"px",c>ay.clientHeight&&(ay.style.height=c+am+"px")),aA>ay.clientWidth&&(ay.style.width=aA-aq+"px",aA>ay.clientWidth&&(ay.style.width=aA+g+"px"))),k(aG,ah),k(az,ai),k(aC,h)},b=K.prototype;b.split=function(a){this.isSplit&&this.revert(),this.vars=a||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var c=this.elements.length;--c>-1;){this._originals[c]=this.elements[c].innerHTML,j(this.elements[c],this.vars,this.chars,this.words,this.lines)}return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},b.revert=function(){if(!this._originals){throw"revert() call wasn't scoped properly."}for(var a=this._originals.length;--a>-1;){this.elements[a].innerHTML=this._originals[a]}return this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},K.selector=w.$||w.jQuery||function(c){var a=w.$||w.jQuery;return a?(K.selector=a,a(c)):"undefined"==typeof document?c:document.querySelectorAll?document.querySelectorAll(c):document.getElementById("#"===c.charAt(0)?c.substr(1):c)},K.version="0.3.3"})(_gsScope),function(a){var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"function"==typeof define&&define.amd?define(["TweenLite"],b):"undefined"!=typeof module&&module.exports&&(module.exports=b())}("SplitText");try{window.GreenSockGlobals=null;window._gsQueue=null;window._gsDefine=null;delete (window.GreenSockGlobals);delete (window._gsQueue);delete (window._gsDefine)}catch(e){}try{window.GreenSockGlobals=oldgs;window._gsQueue=oldgs_queue}catch(e){}if(window.tplogs==true){try{console.groupEnd()}catch(e){}}(function(b,a){b.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage"]};b.expr[":"].uncached=function(c){var d=document.createElement("img");d.src=c.src;return b(c).is('img[src!=""]')&&!d.complete};b.fn.waitForImages=function(c,f,d){if(b.isPlainObject(arguments[0])){f=c.each;d=c.waitForAll;c=c.finished}c=c||b.noop;f=f||b.noop;d=!!d;if(!b.isFunction(c)||!b.isFunction(f)){throw new TypeError("An invalid callback was supplied.")}return this.each(function(){var j=b(this),k=[];if(d){var n=b.waitForImages.hasImageProperties||[],h=/url\((['"]?)(.*?)\1\)/g;j.find("*").each(function(){var i=b(this);if(i.is("img:uncached")){k.push({src:i.attr("src"),element:i[0]})}b.each(n,function(p,q){var o=i.css(q);if(!o){return true}var l;while(l=h.exec(o)){k.push({src:l[2],element:i[0]})}})})}else{j.find("img:uncached").each(function(){k.push({src:this.src,element:this})})}var m=k.length,g=0;if(m==0){c.call(j[0])}b.each(k,function(l,i){var p=new Image;b(p).bind("load error",function(o){g++;f.call(i.element,g,m,o.type=="load");if(g==m){c.call(j[0]);return false}});p.src=i.src})})}})(jQuery);function revslider_showDoubleJqueryError(b){var a="Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";a+="<br> This includes make eliminates the revolution slider libraries, and make it not work.";a+="<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";a+="<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";a="<span style='font-size:16px;color:#BC0C06;'>"+a+"</span>";jQuery(b).show().html(a)}(function(a2,aK){function aR(){var a=false;if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)){if(navigator.userAgent.match(/OS 4_\d like Mac OS X/i)){a=true}}else{a=false}return a}function aM(G,R){if(G==aK){return false}if(G.data("aimg")!=aK){if(G.data("aie8")=="enabled"&&a6(8)||G.data("amobile")=="enabled"&&aq()){G.html('<img class="tp-slider-alternative-image" src="'+G.data("aimg")+'">')}}if(R.navigationStyle=="preview1"||R.navigationStyle=="preview3"||R.navigationStyle=="preview4"){R.soloArrowLeftHalign="left";R.soloArrowLeftValign="center";R.soloArrowLeftHOffset=0;R.soloArrowLeftVOffset=0;R.soloArrowRightHalign="right";R.soloArrowRightValign="center";R.soloArrowRightHOffset=0;R.soloArrowRightVOffset=0;R.navigationArrows="solo"}if(R.simplifyAll=="on"&&(a6(8)||aR())){G.find(".tp-caption").each(function(){var b=a2(this);b.removeClass("customin").removeClass("customout").addClass("fadein").addClass("fadeout");b.data("splitin","");b.data("speed",400)});G.find(">ul>li").each(function(){var b=a2(this);b.data("transition","fade");b.data("masterspeed",500);b.data("slotamount",1);var f=b.find(">img").first();f.data("kenburns","off")})}R.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);if(R.fullWidth!="on"&&R.fullScreen!="on"){R.autoHeight="off"}if(R.fullScreen=="on"){R.autoHeight="on"}if(R.fullWidth!="on"&&R.fullScreen!="on"){forceFulWidth="off"}if(R.fullWidth=="on"&&R.autoHeight=="off"){G.css({maxHeight:R.startheight+"px"})}if(aq()&&R.hideThumbsOnMobile=="on"&&R.navigationType=="thumb"){R.navigationType="none"}if(aq()&&R.hideBulletsOnMobile=="on"&&R.navigationType=="bullet"){R.navigationType="none"}if(aq()&&R.hideBulletsOnMobile=="on"&&R.navigationType=="both"){R.navigationType="none"}if(aq()&&R.hideArrowsOnMobile=="on"){R.navigationArrows="none"}if(R.forceFullWidth=="on"&&G.closest(".forcefullwidth_wrapper_tp_banner").length==0){var V=G.parent().offset().left;var s=G.parent().css("marginBottom");var K=G.parent().css("marginTop");if(s==aK){s=0}if(K==aK){K=0}G.parent().wrap('<div style="position:relative;width:100%;height:auto;margin-top:'+K+";margin-bottom:"+s+'" class="forcefullwidth_wrapper_tp_banner"></div>');G.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:'+G.height()+'px"></div>');G.css({backgroundColor:G.parent().css("backgroundColor"),backgroundImage:G.parent().css("backgroundImage")});G.parent().css({left:0-V+"px",position:"absolute",width:a2(window).width()});R.width=a2(window).width()}try{if(R.hideThumbsUnderResolution>a2(window).width()&&R.hideThumbsUnderResolution!=0){G.parent().find(".tp-bullets.tp-thumbs").css({display:"none"})}else{G.parent().find(".tp-bullets.tp-thumbs").css({display:"block"})}}catch(U){}if(!G.hasClass("revslider-initialised")){G.addClass("revslider-initialised");if(G.attr("id")==aK){G.attr("id","revslider-"+Math.round(Math.random()*1000+5))}R.firefox13=false;R.ie=!a2.support.opacity;R.ie9=document.documentMode==9;R.origcd=R.delay;var W=a2.fn.jquery.split("."),q=parseFloat(W[0]),u=parseFloat(W[1]),c=parseFloat(W[2]||"0");if(q==1&&u<7){G.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:'+W+" <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>")}if(q>1){R.ie=false}if(!a2.support.transition){a2.fn.transition=a2.fn.animate}G.find(".caption").each(function(){a2(this).addClass("tp-caption")});if(aq()){G.find(".tp-caption").each(function(){var b=a2(this);if(b.data("autoplayonlyfirsttime")==true||b.data("autoplayonlyfirsttime")=="true"){b.data("autoplayonlyfirsttime","false")}if(b.data("autoplay")==true||b.data("autoplay")=="true"){b.data("autoplay",false)}})}var o=0;var a=0;var z=0;var N="http";if(location.protocol==="https:"){N="https"}G.find(".tp-caption").each(function(v){try{if((a2(this).data("ytid")!=aK||a2(this).find("iframe").attr("src").toLowerCase().indexOf("youtube")>0)&&o==0){o=1;var k=document.createElement("script");var g="https";k.src=g+"://www.youtube.com/iframe_api";var j=document.getElementsByTagName("script")[0];var m=true;a2("head").find("*").each(function(){if(a2(this).attr("src")==g+"://www.youtube.com/iframe_api"){m=false}});if(m){j.parentNode.insertBefore(k,j)}}}catch(f){}try{if((a2(this).data("vimeoid")!=aK||a2(this).find("iframe").attr("src").toLowerCase().indexOf("vimeo")>0)&&a==0){a=1;var b=document.createElement("script");b.src=N+"://a.vimeocdn.com/js/froogaloop2.min.js";var j=document.getElementsByTagName("script")[0];var m=true;a2("head").find("*").each(function(){if(a2(this).attr("src")==N+"://a.vimeocdn.com/js/froogaloop2.min.js"){m=false}});if(m){j.parentNode.insertBefore(b,j)}}}catch(f){}try{if(a2(this).data("videomp4")!=aK||a2(this).data("videowebm")!=aK){}}catch(f){}});G.find(".tp-caption video").each(function(b){a2(this).removeClass("video-js").removeClass("vjs-default-skin");a2(this).attr("preload","");a2(this).css({display:"none"})});G.find(">ul:first-child >li").each(function(){var b=a2(this);b.data("origindex",b.index())});if(R.shuffle=="on"){var n=new Object,J=G.find(">ul:first-child >li:first-child");n.fstransition=J.data("fstransition");n.fsmasterspeed=J.data("fsmasterspeed");n.fsslotamount=J.data("fsslotamount");for(var h=0;h<G.find(">ul:first-child >li").length;h++){var l=Math.round(Math.random()*G.find(">ul:first-child >li").length);G.find(">ul:first-child >li:eq("+l+")").prependTo(G.find(">ul:first-child"))}var X=G.find(">ul:first-child >li:first-child");X.data("fstransition",n.fstransition);X.data("fsmasterspeed",n.fsmasterspeed);X.data("fsslotamount",n.fsslotamount)}R.slots=4;R.act=-1;R.next=0;if(R.startWithSlide!=aK){R.next=R.startWithSlide}var y=aQ("#")[0];if(y.length<9){if(y.split("slide").length>1){var d=parseInt(y.split("slide")[1],0);if(d<1){d=1}if(d>G.find(">ul:first >li").length){d=G.find(">ul:first >li").length}R.next=d-1}}R.firststart=1;if(R.navigationHOffset==aK){R.navOffsetHorizontal=0}if(R.navigationVOffset==aK){R.navOffsetVertical=0}G.append('<div class="tp-loader '+R.spinner+'"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>');if(G.find(".tp-bannertimer").length==0){G.append('<div class="tp-bannertimer" style="visibility:hidden"></div>')}var p=G.find(".tp-bannertimer");if(p.length>0){p.css({width:"0%"})}G.addClass("tp-simpleresponsive");R.container=G;R.slideamount=G.find(">ul:first >li").length;if(G.height()==0){G.height(R.startheight)}if(R.startwidth==aK||R.startwidth==0){R.startwidth=G.width()}if(R.startheight==aK||R.startheight==0){R.startheight=G.height()}R.width=G.width();R.height=G.height();R.bw=R.startwidth/G.width();R.bh=R.startheight/G.height();if(R.width!=R.startwidth){R.height=Math.round(R.startheight*(R.width/R.startwidth));G.height(R.height)}if(R.shadow!=0){G.parent().append('<div class="tp-bannershadow tp-shadow'+R.shadow+'"></div>');var V=0;if(R.forceFullWidth=="on"){V=0-R.container.parent().offset().left}G.parent().find(".tp-bannershadow").css({width:R.width,left:V})}G.find("ul").css({display:"none"});var I=G;G.find("ul").css({display:"block"});aF(G,R);if(R.parallax!="off"){aO(G,R)}if(R.slideamount>1){aT(G,R)}if(R.slideamount>1&&R.navigationType=="thumb"){aV(G,R)}if(R.slideamount>1){a4(G,R)}if(R.keyboardNavigation=="on"){aY(G,R)}aP(G,R);if(R.hideThumbs>0){a3(G,R)}setTimeout(function(){am(G,R)},R.startDelay);R.startDelay=0;if(R.slideamount>1){aD(G,R)}setTimeout(function(){G.trigger("revolution.slide.onloaded")},500);a2("body").data("rs-fullScreenMode",false);a2(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange",function(){a2("body").data("rs-fullScreenMode",!a2("body").data("rs-fullScreenMode"));if(a2("body").data("rs-fullScreenMode")){setTimeout(function(){a2(window).trigger("resize")},200)}});var Q="resize.revslider-"+G.attr("id");a2(window).on(Q,function(){if(G==aK){return false}if(a2("body").find(G)!=0){if(R.forceFullWidth=="on"){var b=R.container.closest(".forcefullwidth_wrapper_tp_banner").offset().left;R.container.parent().css({left:0-b+"px",width:a2(window).width()})}}if(G.outerWidth(true)!=R.width||G.is(":hidden")){aJ(G,R)}});try{if(R.hideThumbsUnderResoluition!=0&&R.navigationType=="thumb"){if(R.hideThumbsUnderResoluition>a2(window).width()){a2(".tp-bullets").css({display:"none"})}else{a2(".tp-bullets").css({display:"block"})}}}catch(U){}G.find(".tp-scrollbelowslider").on("click",function(){var b=0;try{b=a2("body").find(R.fullScreenOffsetContainer).height()}catch(f){}try{b=b-parseInt(a2(this).data("scrolloffset"),0)}catch(f){}a2("body,html").animate({scrollTop:G.offset().top+G.find(">ul >li").height()-b+"px"},{duration:400})});var t=G.parent();if(a2(window).width()<R.hideSliderAtLimit){G.trigger("stoptimer");if(t.css("display")!="none"){t.data("olddisplay",t.css("display"))}t.css({display:"none"})}aL(G,R)}}a2.fn.extend({revolution:function(b){var a={delay:9000,startheight:500,startwidth:960,fullScreenAlignForce:"off",autoHeight:"off",hideTimerBar:"off",hideThumbs:200,hideNavDelayOnMobile:1500,thumbWidth:100,thumbHeight:50,thumbAmount:3,navigationType:"bullet",navigationArrows:"solo",navigationInGrid:"off",hideThumbsOnMobile:"off",hideBulletsOnMobile:"off",hideArrowsOnMobile:"off",hideThumbsUnderResoluition:0,navigationStyle:"round",navigationHAlign:"center",navigationVAlign:"bottom",navigationHOffset:0,navigationVOffset:20,soloArrowLeftHalign:"left",soloArrowLeftValign:"center",soloArrowLeftHOffset:20,soloArrowLeftVOffset:0,soloArrowRightHalign:"right",soloArrowRightValign:"center",soloArrowRightHOffset:20,soloArrowRightVOffset:0,keyboardNavigation:"on",touchenabled:"on",onHoverStop:"on",stopAtSlide:-1,stopAfterLoops:-1,hideCaptionAtLimit:0,hideAllCaptionAtLimit:0,hideSliderAtLimit:0,shadow:0,fullWidth:"off",fullScreen:"off",minFullScreenHeight:0,fullScreenOffsetContainer:"",fullScreenOffset:"0",dottedOverlay:"none",forceFullWidth:"off",spinner:"spinner0",swipe_treshold:75,swipe_min_touches:1,drag_block_vertical:false,isJoomla:false,parallax:"off",parallaxLevels:[10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],parallaxBgFreeze:"off",parallaxOpacity:"on",parallaxDisableOnMobile:"off",panZoomDisableOnMobile:"off",simplifyAll:"on",minHeight:0,nextSlideOnWindowFocus:"off",startDelay:0};b=a2.extend({},a,b);return this.each(function(){if(window.tplogs==true){try{console.groupCollapsed("Slider Revolution 4.6.3 Initialisation on "+a2(this).attr("id"));console.groupCollapsed("Used Options:");console.info(b);console.groupEnd();console.groupCollapsed("Tween Engine:")}catch(c){}}if(punchgs.TweenLite==aK){if(window.tplogs==true){try{console.error("GreenSock Engine Does not Exist!")}catch(c){}}return false}punchgs.force3D=true;if(window.tplogs==true){try{console.info("GreenSock Engine Version in Slider Revolution:"+punchgs.TweenLite.version)}catch(c){}}if(b.simplifyAll=="on"){}else{punchgs.TweenLite.lagSmoothing(1000,16);punchgs.force3D="true"}if(window.tplogs==true){try{console.groupEnd();console.groupEnd()}catch(c){}}aM(a2(this),b)})},revscroll:function(a){return this.each(function(){var b=a2(this);if(b!=aK&&b.length>0&&a2("body").find("#"+b.attr("id")).length>0){a2("body,html").animate({scrollTop:b.offset().top+b.find(">ul >li").height()-a+"px"},{duration:400})}})},revredraw:function(a){return this.each(function(){var d=a2(this);if(d!=aK&&d.length>0&&a2("body").find("#"+d.attr("id")).length>0){var c=d.parent().find(".tp-bannertimer");var b=c.data("opt");aJ(d,b)}})},revkill:function(j){var g=this,d=a2(this);if(d!=aK&&d.length>0&&a2("body").find("#"+d.attr("id")).length>0){d.data("conthover",1);d.data("conthover-changed",1);d.trigger("revolution.slide.onpause");var f=d.parent().find(".tp-bannertimer");var h=f.data("opt");h.bannertimeronpause=true;d.trigger("stoptimer");punchgs.TweenLite.killTweensOf(d.find("*"),false);punchgs.TweenLite.killTweensOf(d,false);d.unbind("hover, mouseover, mouseenter,mouseleave, resize");var c="resize.revslider-"+d.attr("id");a2(window).off(c);d.find("*").each(function(){var a=a2(this);a.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer");a.off("on, hover, mouseenter,mouseleave,mouseover, resize");a.data("mySplitText",null);a.data("ctl",null);if(a.data("tween")!=aK){a.data("tween").kill()}if(a.data("kenburn")!=aK){a.data("kenburn").kill()}a.remove();a.empty();a=null});punchgs.TweenLite.killTweensOf(d.find("*"),false);punchgs.TweenLite.killTweensOf(d,false);f.remove();try{d.closest(".forcefullwidth_wrapper_tp_banner").remove()}catch(b){}try{d.closest(".rev_slider_wrapper").remove()}catch(b){}try{d.remove()}catch(b){}d.empty();d.html();d=null;h=null;delete g.container;delete g.opt;return true}else{return false}},revpause:function(a){return this.each(function(){var d=a2(this);if(d!=aK&&d.length>0&&a2("body").find("#"+d.attr("id")).length>0){d.data("conthover",1);d.data("conthover-changed",1);d.trigger("revolution.slide.onpause");var c=d.parent().find(".tp-bannertimer");var b=c.data("opt");b.bannertimeronpause=true;d.trigger("stoptimer")}})},revresume:function(a){return this.each(function(){var d=a2(this);if(d!=aK&&d.length>0&&a2("body").find("#"+d.attr("id")).length>0){d.data("conthover",0);d.data("conthover-changed",1);d.trigger("revolution.slide.onresume");var c=d.parent().find(".tp-bannertimer");var b=c.data("opt");b.bannertimeronpause=false;d.trigger("starttimer")}})},revnext:function(a){return this.each(function(){var b=a2(this);if(b!=aK&&b.length>0&&a2("body").find("#"+b.attr("id")).length>0){b.parent().find(".tp-rightarrow").click()}})},revprev:function(a){return this.each(function(){var b=a2(this);if(b!=aK&&b.length>0&&a2("body").find("#"+b.attr("id")).length>0){b.parent().find(".tp-leftarrow").click()}})},revmaxslide:function(a){return a2(this).find(">ul:first-child >li").length},revcurrentslide:function(d){var c=a2(this);if(c!=aK&&c.length>0&&a2("body").find("#"+c.attr("id")).length>0){var a=c.parent().find(".tp-bannertimer");var b=a.data("opt");return b.act}},revlastslide:function(d){var c=a2(this);if(c!=aK&&c.length>0&&a2("body").find("#"+c.attr("id")).length>0){var a=c.parent().find(".tp-bannertimer");var b=a.data("opt");return b.lastslide}},revshowslide:function(a){return this.each(function(){var b=a2(this);if(b!=aK&&b.length>0&&a2("body").find("#"+b.attr("id")).length>0){b.data("showus",a);b.parent().find(".tp-rightarrow").click()}})}});var aX=function(){var b,a,c={hidden:"visibilitychange",webkitHidden:"webkitvisibilitychange",mozHidden:"mozvisibilitychange",msHidden:"msvisibilitychange"};for(b in c){if(b in document){a=c[b];break}}return function(d){if(d){document.addEventListener(a,d)}return !document[b]}}();var aL=function(d,c){var a=document.documentMode===aK,b=window.chrome;if(a&&!b){a2(window).on("focusin",function(){if(d==aK){return false}setTimeout(function(){if(c.nextSlideOnWindowFocus=="on"){d.revnext()}d.revredraw()},300)}).on("focusout",function(){})}else{if(window.addEventListener){window.addEventListener("focus",function(f){if(d==aK){return false}setTimeout(function(){if(c.nextSlideOnWindowFocus=="on"){d.revnext()}d.revredraw()},300)},false);window.addEventListener("blur",function(f){},false)}else{window.attachEvent("focus",function(f){setTimeout(function(){if(d==aK){return false}if(c.nextSlideOnWindowFocus=="on"){d.revnext()}d.revredraw()},300)});window.attachEvent("blur",function(f){})}}};var aQ=function(d){var b=[],f;var c=window.location.href.slice(window.location.href.indexOf(d)+1).split("_");for(var a=0;a<c.length;a++){c[a]=c[a].replace("%3D","=");f=c[a].split("=");b.push(f[0]);b[f[0]]=f[1]}return b};var aJ=function(g,b){if(g==aK){return false}try{if(b.hideThumbsUnderResoluition!=0&&b.navigationType=="thumb"){if(b.hideThumbsUnderResoluition>a2(window).width()){a2(".tp-bullets").css({display:"none"})}else{a2(".tp-bullets").css({display:"block"})}}}catch(j){}g.find(".defaultimg").each(function(a){aZ(a2(this),b)});var q=g.parent();if(a2(window).width()<b.hideSliderAtLimit){g.trigger("stoptimer");if(q.css("display")!="none"){q.data("olddisplay",q.css("display"))}q.css({display:"none"})}else{if(g.is(":hidden")){if(q.data("olddisplay")!=aK&&q.data("olddisplay")!="undefined"&&q.data("olddisplay")!="none"){q.css({display:q.data("olddisplay")})}else{q.css({display:"block"})}g.trigger("restarttimer");setTimeout(function(){aJ(g,b)},150)}}var d=0;if(b.forceFullWidth=="on"){d=0-b.container.parent().offset().left}try{g.parent().find(".tp-bannershadow").css({width:b.width,left:d})}catch(j){}var p=g.find(">ul >li:eq("+b.act+") .slotholder");var k=g.find(">ul >li:eq("+b.next+") .slotholder");aw(g,b,g);punchgs.TweenLite.set(k.find(".defaultimg"),{opacity:0});p.find(".defaultimg").css({opacity:1});k.find(".defaultimg").each(function(){var a=a2(this);if(b.panZoomDisableOnMobile=="on"){}else{if(a.data("kenburn")!=aK){a.data("kenburn").restart();aj(g,b,true)}}});var h=g.find(">ul >li:eq("+b.next+")");var m=g.parent().find(".tparrows");if(m.hasClass("preview2")){m.css({width:parseInt(m.css("minWidth"),0)})}aW(h,b,true);aI(g,b)};var a6=function(b,d){var c=a2('<div style="display:none;"/>').appendTo(a2("body"));c.html("<!--[if "+(d||"")+" IE "+(b||"")+"]><a>&nbsp;</a><![endif]-->");var a=c.find("a").length;c.remove();return a};var a1=function(b,a){if(b.next==a.find(">ul >li").length-1){b.looptogo=b.looptogo-1;if(b.looptogo<=0){b.stopLoop="on"}}am(a,b)};var aT=function(b,d){var c="hidebullets";if(d.hideThumbs==0){c=""}if(d.navigationType=="bullet"||d.navigationType=="both"){b.parent().append('<div class="tp-bullets '+c+" simplebullets "+d.navigationStyle+'"></div>')}var a=b.parent().find(".tp-bullets");b.find(">ul:first >li").each(function(g){var h=b.find(">ul:first >li:eq("+g+") img:first").attr("src");a.append('<div class="bullet"></div>');var f=a.find(".bullet:first")});a.find(".bullet").each(function(g){var f=a2(this);if(g==d.slideamount-1){f.addClass("last")}if(g==0){f.addClass("first")}f.click(function(){var i=false,h=f.index();if(d.navigationArrows=="withbullet"||d.navigationArrows=="nexttobullets"){h=f.index()-1}if(h==d.act){i=true}if(d.transition==0&&!i){d.next=h;a1(d,b)}})});a.append('<div class="tpclear"></div>');aI(b,d)};var a4=function(f,h){function a(i){f.parent().append('<div style="'+b+'" class="tp-'+i+"arrow "+c+" tparrows "+g+'"><div class="tp-arr-allwrapper"><div class="tp-arr-iwrapper"><div class="tp-arr-imgholder"></div><div class="tp-arr-imgholder2"></div><div class="tp-arr-titleholder"></div><div class="tp-arr-subtitleholder"></div></div></div></div>')}var d=f.find(".tp-bullets"),b="",c="hidearrows",g=h.navigationStyle;if(h.hideThumbs==0){c=""}if(h.navigationArrows=="none"){b="visibility:hidden;display:none"}h.soloArrowStyle="default "+h.navigationStyle;if(h.navigationArrows!="none"&&h.navigationArrows!="nexttobullets"){g=h.soloArrowStyle}a("left");a("right");f.parent().find(".tp-rightarrow").click(function(){if(h.transition==0){if(f.data("showus")!=aK&&f.data("showus")!=-1){h.next=f.data("showus")-1}else{h.next=h.next+1}f.data("showus",-1);if(h.next>=h.slideamount){h.next=0}if(h.next<0){h.next=0}if(h.act!=h.next){a1(h,f)}}});f.parent().find(".tp-leftarrow").click(function(){if(h.transition==0){h.next=h.next-1;h.leftarrowpressed=1;if(h.next<0){h.next=h.slideamount-1}a1(h,f)}});aI(f,h)};var aY=function(b,a){a2(document).keydown(function(c){if(a.transition==0&&c.keyCode==39){if(b.data("showus")!=aK&&b.data("showus")!=-1){a.next=b.data("showus")-1}else{a.next=a.next+1}b.data("showus",-1);if(a.next>=a.slideamount){a.next=0}if(a.next<0){a.next=0}if(a.act!=a.next){a1(a,b)}}if(a.transition==0&&c.keyCode==37){a.next=a.next-1;a.leftarrowpressed=1;if(a.next<0){a.next=a.slideamount-1}a1(a,b)}});aI(b,a)};var aP=function(a,c){var b="vertical";if(c.touchenabled=="on"){if(c.drag_block_vertical==true){b="none"}a.swipe({allowPageScroll:b,fingers:c.swipe_min_touches,treshold:c.swipe_treshold,swipe:function(h,j,k,g,f,d){switch(j){case"left":if(c.transition==0){c.next=c.next+1;if(c.next==c.slideamount){c.next=0}a1(c,a)}break;case"right":if(c.transition==0){c.next=c.next-1;c.leftarrowpressed=1;if(c.next<0){c.next=c.slideamount-1}a1(c,a)}break;case"up":if(b=="none"){a2("html, body").animate({scrollTop:a.offset().top+a.height()+"px"})}break;case"down":if(b=="none"){a2("html, body").animate({scrollTop:a.offset().top-a2(window).height()+"px"})}break}}})}};var a3=function(d,b){var f=d.parent().find(".tp-bullets"),c=d.parent().find(".tparrows");if(f==null){d.append('<div class=".tp-bullets"></div>');var f=d.parent().find(".tp-bullets")}if(c==null){d.append('<div class=".tparrows"></div>');var c=d.parent().find(".tparrows")}d.data("hideThumbs",b.hideThumbs);f.addClass("hidebullets");c.addClass("hidearrows");if(aq()){try{d.hammer().on("touch",function(){d.addClass("hovered");if(b.onHoverStop=="on"){d.trigger("stoptimer")}clearTimeout(d.data("hideThumbs"));f.removeClass("hidebullets");c.removeClass("hidearrows")});d.hammer().on("release",function(){d.removeClass("hovered");d.trigger("starttimer");if(!d.hasClass("hovered")&&!f.hasClass("hovered")){d.data("hideThumbs",setTimeout(function(){f.addClass("hidebullets");c.addClass("hidearrows");d.trigger("starttimer")},b.hideNavDelayOnMobile))}})}catch(a){}}else{f.hover(function(){b.overnav=true;if(b.onHoverStop=="on"){d.trigger("stoptimer")}f.addClass("hovered");clearTimeout(d.data("hideThumbs"));f.removeClass("hidebullets");c.removeClass("hidearrows")},function(){b.overnav=false;d.trigger("starttimer");f.removeClass("hovered");if(!d.hasClass("hovered")&&!f.hasClass("hovered")){d.data("hideThumbs",setTimeout(function(){f.addClass("hidebullets");c.addClass("hidearrows")},b.hideThumbs))}});c.hover(function(){b.overnav=true;if(b.onHoverStop=="on"){d.trigger("stoptimer")}f.addClass("hovered");clearTimeout(d.data("hideThumbs"));f.removeClass("hidebullets");c.removeClass("hidearrows")},function(){b.overnav=false;d.trigger("starttimer");f.removeClass("hovered")});d.on("mouseenter",function(){d.addClass("hovered");if(b.onHoverStop=="on"){d.trigger("stoptimer")}clearTimeout(d.data("hideThumbs"));f.removeClass("hidebullets");c.removeClass("hidearrows")});d.on("mouseleave",function(){d.removeClass("hovered");d.trigger("starttimer");if(!d.hasClass("hovered")&&!f.hasClass("hovered")){d.data("hideThumbs",setTimeout(function(){f.addClass("hidebullets");c.addClass("hidearrows")},b.hideThumbs))}})}};var aI=function(B,H){var D=B.parent();var K=D.find(".tp-bullets");if(H.navigationType=="thumb"){K.find(".thumb").each(function(a){var b=a2(this);b.css({width:H.thumbWidth*H.bw+"px",height:H.thumbHeight*H.bh+"px"})});var C=K.find(".tp-mask");C.width(H.thumbWidth*H.thumbAmount*H.bw);C.height(H.thumbHeight*H.bh);C.parent().width(H.thumbWidth*H.thumbAmount*H.bw);C.parent().height(H.thumbHeight*H.bh)}var G=D.find(".tp-leftarrow");var z=D.find(".tp-rightarrow");if(H.navigationType=="thumb"&&H.navigationArrows=="nexttobullets"){H.navigationArrows="solo"}if(H.navigationArrows=="nexttobullets"){G.prependTo(K).css({"float":"left"});z.insertBefore(K.find(".tpclear")).css({"float":"left"})}var R=0;if(H.forceFullWidth=="on"){R=0-H.container.parent().offset().left}var N=0,J=0;if(H.navigationInGrid=="on"){N=B.width()>H.startwidth?(B.width()-H.startwidth)/2:0,J=B.height()>H.startheight?(B.height()-H.startheight)/2:0}if(H.navigationArrows!="none"&&H.navigationArrows!="nexttobullets"){var P=H.soloArrowLeftValign,L=H.soloArrowLeftHalign,F=H.soloArrowRightValign,O=H.soloArrowRightHalign,x=H.soloArrowLeftVOffset,I=H.soloArrowLeftHOffset,M=H.soloArrowRightVOffset,k=H.soloArrowRightHOffset;G.css({position:"absolute"});z.css({position:"absolute"});if(P=="center"){G.css({top:"50%",marginTop:x-Math.round(G.innerHeight()/2)+"px"})}else{if(P=="bottom"){G.css({top:"auto",bottom:0+x+"px"})}else{if(P=="top"){G.css({bottom:"auto",top:0+x+"px"})}}}if(L=="center"){G.css({left:"50%",marginLeft:R+I-Math.round(G.innerWidth()/2)+"px"})}else{if(L=="left"){G.css({left:N+I+R+"px"})}else{if(L=="right"){G.css({right:N+I-R+"px"})}}}if(F=="center"){z.css({top:"50%",marginTop:M-Math.round(z.innerHeight()/2)+"px"})}else{if(F=="bottom"){z.css({top:"auto",bottom:0+M+"px"})}else{if(F=="top"){z.css({bottom:"auto",top:0+M+"px"})}}}if(O=="center"){z.css({left:"50%",marginLeft:R+k-Math.round(z.innerWidth()/2)+"px"})}else{if(O=="left"){z.css({left:N+k+R+"px"})}else{if(O=="right"){z.css({right:N+k-R+"px"})}}}if(G.position()!=null){G.css({top:Math.round(parseInt(G.position().top,0))+"px"})}if(z.position()!=null){z.css({top:Math.round(parseInt(z.position().top,0))+"px"})}}if(H.navigationArrows=="none"){G.css({visibility:"hidden"});z.css({visibility:"hidden"})}var Q=H.navigationVAlign,q=H.navigationHAlign,A=H.navigationVOffset*H.bh,j=H.navigationHOffset*H.bw;if(Q=="center"){K.css({top:"50%",marginTop:A-Math.round(K.innerHeight()/2)+"px"})}if(Q=="bottom"){K.css({bottom:0+A+"px"})}if(Q=="top"){K.css({top:0+A+"px"})}if(q=="center"){K.css({left:"50%",marginLeft:R+j-Math.round(K.innerWidth()/2)+"px"})}if(q=="left"){K.css({left:0+j+R+"px"})}if(q=="right"){K.css({right:0+j-R+"px"})}};var aS=function(q){var b=q.container;q.beforli=q.next-1;q.comingli=q.next+1;if(q.beforli<0){q.beforli=q.slideamount-1}if(q.comingli>=q.slideamount){q.comingli=0}var x=b.find(">ul:first-child >li:eq("+q.comingli+")"),G=b.find(">ul:first-child >li:eq("+q.beforli+")"),k=G.find(".defaultimg").attr("src"),F=x.find(".defaultimg").attr("src");if(q.arr==aK){q.arr=b.parent().find(".tparrows"),q.rar=b.parent().find(".tp-rightarrow"),q.lar=b.parent().find(".tp-leftarrow"),q.raimg=q.rar.find(".tp-arr-imgholder"),q.laimg=q.lar.find(".tp-arr-imgholder"),q.raimg_b=q.rar.find(".tp-arr-imgholder2"),q.laimg_b=q.lar.find(".tp-arr-imgholder2"),q.ratit=q.rar.find(".tp-arr-titleholder"),q.latit=q.lar.find(".tp-arr-titleholder")}var D=q.arr,A=q.rar,w=q.lar,C=q.raimg,y=q.laimg,j=q.raimg_b,B=q.laimg_b,E=q.ratit,t=q.latit;if(x.data("title")!=aK){E.html(x.data("title"))}if(G.data("title")!=aK){t.html(G.data("title"))}if(A.hasClass("itishovered")){A.width(E.outerWidth(true)+parseInt(A.css("minWidth"),0))}if(w.hasClass("itishovered")){w.width(t.outerWidth(true)+parseInt(w.css("minWidth"),0))}if(D.hasClass("preview2")&&!D.hasClass("hashoveralready")){D.addClass("hashoveralready");if(!aq()){D.hover(function(){var a=a2(this),c=a.find(".tp-arr-titleholder");if(a2(window).width()>767){a.width(c.outerWidth(true)+parseInt(a.css("minWidth"),0))}a.addClass("itishovered")},function(){var a=a2(this),c=a.find(".tp-arr-titleholder");a.css({width:parseInt(a.css("minWidth"),0)});a.removeClass("itishovered")})}else{var D=a2(this),z=D.find(".tp-arr-titleholder");z.addClass("alwayshidden");punchgs.TweenLite.set(z,{autoAlpha:0})}}if(G.data("thumb")!=aK){k=G.data("thumb")}if(x.data("thumb")!=aK){F=x.data("thumb")}if(!D.hasClass("preview4")){punchgs.TweenLite.to(C,0.5,{autoAlpha:0,onComplete:function(){C.css({backgroundImage:"url("+F+")"});y.css({backgroundImage:"url("+k+")"})}});punchgs.TweenLite.to(y,0.5,{autoAlpha:0,onComplete:function(){punchgs.TweenLite.to(C,0.5,{autoAlpha:1,delay:0.2});punchgs.TweenLite.to(y,0.5,{autoAlpha:1,delay:0.2})}})}else{j.css({backgroundImage:"url("+F+")"});B.css({backgroundImage:"url("+k+")"});punchgs.TweenLite.fromTo(j,0.8,{force3D:punchgs.force3d,x:0},{x:-C.width(),ease:punchgs.Power3.easeOut,delay:1,onComplete:function(){C.css({backgroundImage:"url("+F+")"});punchgs.TweenLite.set(j,{x:0})}});punchgs.TweenLite.fromTo(B,0.8,{force3D:punchgs.force3d,x:0},{x:C.width(),ease:punchgs.Power3.easeOut,delay:1,onComplete:function(){y.css({backgroundImage:"url("+k+")"});punchgs.TweenLite.set(B,{x:0})}});punchgs.TweenLite.fromTo(C,0.8,{x:0},{force3D:punchgs.force3d,x:-C.width(),ease:punchgs.Power3.easeOut,delay:1,onComplete:function(){punchgs.TweenLite.set(C,{x:0})}});punchgs.TweenLite.fromTo(y,0.8,{x:0},{force3D:punchgs.force3d,x:C.width(),ease:punchgs.Power3.easeOut,delay:1,onComplete:function(){punchgs.TweenLite.set(y,{x:0})}})}if(A.hasClass("preview4")&&!A.hasClass("hashoveralready")){A.addClass("hashoveralready");A.hover(function(){var a=a2(this).find(".tp-arr-iwrapper");var c=a2(this).find(".tp-arr-allwrapper");punchgs.TweenLite.fromTo(a,0.4,{x:a.width()},{x:0,delay:0.3,ease:punchgs.Power3.easeOut,overwrite:"all"});punchgs.TweenLite.to(c,0.2,{autoAlpha:1,overwrite:"all"})},function(){var a=a2(this).find(".tp-arr-iwrapper");var c=a2(this).find(".tp-arr-allwrapper");punchgs.TweenLite.to(a,0.4,{x:a.width(),ease:punchgs.Power3.easeOut,delay:0.2,overwrite:"all"});punchgs.TweenLite.to(c,0.2,{delay:0.6,autoAlpha:0,overwrite:"all"})});w.hover(function(){var a=a2(this).find(".tp-arr-iwrapper");var c=a2(this).find(".tp-arr-allwrapper");punchgs.TweenLite.fromTo(a,0.4,{x:0-a.width()},{x:0,delay:0.3,ease:punchgs.Power3.easeOut,overwrite:"all"});punchgs.TweenLite.to(c,0.2,{autoAlpha:1,overwrite:"all"})},function(){var a=a2(this).find(".tp-arr-iwrapper");var c=a2(this).find(".tp-arr-allwrapper");punchgs.TweenLite.to(a,0.4,{x:0-a.width(),ease:punchgs.Power3.easeOut,delay:0.2,overwrite:"all"});punchgs.TweenLite.to(c,0.2,{delay:0.6,autoAlpha:0,overwrite:"all"})})}};var aZ=function(g,d){d.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css({height:d.container.height()});d.container.closest(".rev_slider_wrapper").css({height:d.container.height()});d.width=parseInt(d.container.width(),0);d.height=parseInt(d.container.height(),0);d.bw=d.width/d.startwidth;d.bh=d.height/d.startheight;if(d.bh>d.bw){d.bh=d.bw}if(d.bh<d.bw){d.bw=d.bh}if(d.bw<d.bh){d.bh=d.bw}if(d.bh>1){d.bw=1;d.bh=1}if(d.bw>1){d.bw=1;d.bh=1}d.height=Math.round(d.startheight*(d.width/d.startwidth));if(d.height>d.startheight&&d.autoHeight!="on"){d.height=d.startheight}if(d.fullScreen=="on"){d.height=d.bw*d.startheight;var b=d.container.parent().width();var c=a2(window).height();if(d.fullScreenOffsetContainer!=aK){try{var f=d.fullScreenOffsetContainer.split(",");a2.each(f,function(h,i){c=c-a2(i).outerHeight(true);if(c<d.minFullScreenHeight){c=d.minFullScreenHeight}})}catch(a){}try{if(d.fullScreenOffset.split("%").length>1&&d.fullScreenOffset!=aK&&d.fullScreenOffset.length>0){c=c-a2(window).height()*parseInt(d.fullScreenOffset,0)/100}else{if(d.fullScreenOffset!=aK&&d.fullScreenOffset.length>0){c=c-parseInt(d.fullScreenOffset,0)}}if(c<d.minFullScreenHeight){c=d.minFullScreenHeight}}catch(a){}}d.container.parent().height(c);d.container.closest(".rev_slider_wrapper").height(c);d.container.css({height:"100%"});d.height=c;if(d.minHeight!=aK&&d.height<d.minHeight){d.height=d.minHeight}}else{if(d.minHeight!=aK&&d.height<d.minHeight){d.height=d.minHeight}d.container.height(d.height)}d.slotw=Math.ceil(d.width/d.slots);if(d.fullScreen=="on"){d.sloth=Math.ceil(a2(window).height()/d.slots)}else{d.sloth=Math.ceil(d.height/d.slots)}if(d.autoHeight=="on"){d.sloth=Math.ceil(g.height()/d.slots)}};var aF=function(b,a){b.find(".tp-caption").each(function(){a2(this).addClass(a2(this).data("transition"));a2(this).addClass("start")});b.find(">ul:first").css({overflow:"hidden",width:"100%",height:"100%",maxHeight:b.parent().css("maxHeight")}).addClass("tp-revslider-mainul");if(a.autoHeight=="on"){b.find(">ul:first").css({overflow:"hidden",width:"100%",height:"100%",maxHeight:"none"});b.css({maxHeight:"none"});b.parent().css({maxHeight:"none"})}b.find(">ul:first >li").each(function(j){var g=a2(this);g.addClass("tp-revslider-slidesli");g.css({width:"100%",height:"100%",overflow:"hidden"});if(g.data("link")!=aK){var h=g.data("link");var l="_self";var d=60;if(g.data("slideindex")=="back"){d=0}var c=checksl=g.data("linktoslide");if(c!=aK){if(c!="next"&&c!="prev"){b.find(">ul:first-child >li").each(function(){var f=a2(this);if(f.data("origindex")+1==checksl){c=f.index()+1}})}}if(g.data("target")!=aK){l=g.data("target")}if(h!="slide"){c="no"}var k='<div class="tp-caption sft slidelink" style="width:100%;height:100%;z-index:'+d+';" data-x="center" data-y="center" data-linktoslide="'+c+'" data-start="0"><a style="width:100%;height:100%;display:block"';if(h!="slide"){k=k+' target="'+l+'" href="'+h+'"'}k=k+'><span style="width:100%;height:100%;display:block"></span></a></div>';g.append(k)}});b.parent().css({overflow:"visible"});b.find(">ul:first >li >img").each(function(q){var h=a2(this);h.addClass("defaultimg");if(h.data("lazyload")!=aK&&h.data("lazydone")!=1){}else{aZ(h,a)}if(a6(8)){h.data("kenburns","off")}if(a.panZoomDisableOnMobile=="on"&&aq()){h.data("kenburns","off");h.data("bgfit","cover")}h.wrap('<div class="slotholder" style="width:100%;height:100%;"data-duration="'+h.data("duration")+'"data-zoomstart="'+h.data("zoomstart")+'"data-zoomend="'+h.data("zoomend")+'"data-rotationstart="'+h.data("rotationstart")+'"data-rotationend="'+h.data("rotationend")+'"data-ease="'+h.data("ease")+'"data-duration="'+h.data("duration")+'"data-bgpositionend="'+h.data("bgpositionend")+'"data-bgposition="'+h.data("bgposition")+'"data-duration="'+h.data("duration")+'"data-kenburns="'+h.data("kenburns")+'"data-easeme="'+h.data("ease")+'"data-bgfit="'+h.data("bgfit")+'"data-bgfitend="'+h.data("bgfitend")+'"data-owidth="'+h.data("owidth")+'"data-oheight="'+h.data("oheight")+'"></div>');if(a.dottedOverlay!="none"&&a.dottedOverlay!=aK){h.closest(".slotholder").append('<div class="tp-dottedoverlay '+a.dottedOverlay+'"></div>')}var j=h.attr("src"),m=h.data("lazyload"),g=h.data("bgfit"),k=h.data("bgrepeat"),d=h.data("bgposition");if(g==aK){g="cover"}if(k==aK){k="no-repeat"}if(d==aK){d="center center"}var p=h.closest(".slotholder");h.replaceWith('<div class="tp-bgimg defaultimg" data-lazyload="'+h.data("lazyload")+'" data-bgfit="'+g+'"data-bgposition="'+d+'" data-bgrepeat="'+k+'" data-lazydone="'+h.data("lazydone")+'" src="'+j+'" data-src="'+j+'" style="background-color:'+h.css("backgroundColor")+";background-repeat:"+k+";background-image:url("+j+");background-size:"+g+";background-position:"+d+';width:100%;height:100%;"></div>');if(a6(8)){p.find(".tp-bgimg").css({backgroundImage:"none","background-image":"none"});p.find(".tp-bgimg").append('<img class="ieeightfallbackimage defaultimg" src="'+j+'" style="width:100%">')}h.css({opacity:0});h.data("li-id",q)})};var a5=function(Q,I,F,M){var B=Q,H=B.find(".defaultimg"),z=B.data("zoomstart"),P=B.data("rotationstart");if(H.data("currotate")!=aK){P=H.data("currotate")}if(H.data("curscale")!=aK&&M=="box"){z=H.data("curscale")*100}else{if(H.data("curscale")!=aK){z=H.data("curscale")}}aZ(H,I);var K=H.data("src"),U=H.css("backgroundColor"),O=I.width,G=I.height,R=H.data("fxof"),w=0;if(I.autoHeight=="on"){G=I.container.height()}if(R==aK){R=0}var J=0,q=H.data("bgfit"),V=H.data("bgrepeat"),A=H.data("bgposition");if(q==aK){q="cover"}if(V==aK){V="no-repeat"}if(A==aK){A="center center"}if(a6(8)){B.data("kenburns","off");var g=K;K=""}switch(M){case"box":var t=0,a=0,j=0;if(I.sloth>I.slotw){t=I.sloth}else{t=I.slotw}if(!F){var J=0-t}I.slotw=t;I.sloth=t;var a=0;var j=0;if(B.data("kenburns")=="on"){q=z;if(q.toString().length<4){q=ap(q,B,I)}}for(var D=0;D<I.slots;D++){j=0;for(var L=0;L<I.slots;L++){B.append('<div class="slot" style="position:absolute;top:'+(w+j)+"px;left:"+(R+a)+"px;width:"+t+"px;height:"+t+'px;overflow:hidden;"><div class="slotslide" data-x="'+a+'" data-y="'+j+'" style="position:absolute;top:'+0+"px;left:"+0+"px;width:"+t+"px;height:"+t+'px;overflow:hidden;"><div style="position:absolute;top:'+(0-j)+"px;left:"+(0-a)+"px;width:"+O+"px;height:"+G+"px;background-color:"+U+";background-image:url("+K+");background-repeat:"+V+";background-size:"+q+";background-position:"+A+';"></div></div></div>');j=j+t;if(a6(8)){B.find(".slot ").last().find(".slotslide").append('<img src="'+g+'">');aH(B,I)}if(z!=aK&&P!=aK){punchgs.TweenLite.set(B.find(".slot").last(),{rotationZ:P})}}a=a+t}break;case"vertical":case"horizontal":if(B.data("kenburns")=="on"){q=z;if(q.toString().length<4){q=ap(q,B,I)}}if(M=="horizontal"){if(!F){var J=0-I.slotw}for(var L=0;L<I.slots;L++){B.append('<div class="slot" style="position:absolute;top:'+(0+w)+"px;left:"+(R+L*I.slotw)+"px;overflow:hidden;width:"+(I.slotw+0.6)+"px;height:"+G+'px"><div class="slotslide" style="position:absolute;top:0px;left:'+J+"px;width:"+(I.slotw+0.6)+"px;height:"+G+'px;overflow:hidden;"><div style="background-color:'+U+";position:absolute;top:0px;left:"+(0-L*I.slotw)+"px;width:"+O+"px;height:"+G+"px;background-image:url("+K+");background-repeat:"+V+";background-size:"+q+";background-position:"+A+';"></div></div></div>');if(z!=aK&&P!=aK){punchgs.TweenLite.set(B.find(".slot").last(),{rotationZ:P})}if(a6(8)){B.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="'+g+'" style="width:100%;height:auto">');aH(B,I)}}}else{if(!F){var J=0-I.sloth}for(var L=0;L<I.slots+2;L++){B.append('<div class="slot" style="position:absolute;top:'+(w+L*I.sloth)+"px;left:"+R+"px;overflow:hidden;width:"+O+"px;height:"+I.sloth+'px"><div class="slotslide" style="position:absolute;top:'+J+"px;left:0px;width:"+O+"px;height:"+I.sloth+'px;overflow:hidden;"><div style="background-color:'+U+";position:absolute;top:"+(0-L*I.sloth)+"px;left:0px;width:"+O+"px;height:"+G+"px;background-image:url("+K+");background-repeat:"+V+";background-size:"+q+";background-position:"+A+';"></div></div></div>');if(z!=aK&&P!=aK){punchgs.TweenLite.set(B.find(".slot").last(),{rotationZ:P})}if(a6(8)){B.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="'+g+'" style="width:100%;height:auto;">');aH(B,I)}}}break}};var aH=function(d,b){if(a6(8)){var f=d.find(".ieeightfallbackimage");var c=f.width(),a=f.height();if(b.startwidth/b.startheight<d.data("owidth")/d.data("oheight")){f.css({width:"auto",height:"100%"})}else{f.css({width:"100%",height:"auto"})}setTimeout(function(){var j=f.width(),g=f.height(),h=d.data("bgposition");if(h=="center center"){f.css({position:"absolute",top:b.height/2-g/2+"px",left:b.width/2-j/2+"px"})}if(h=="center top"||h=="top center"){f.css({position:"absolute",top:"0px",left:b.width/2-j/2+"px"})}if(h=="center bottom"||h=="bottom center"){f.css({position:"absolute",bottom:"0px",left:b.width/2-j/2+"px"})}if(h=="right top"||h=="top right"){f.css({position:"absolute",top:"0px",right:"0px"})}if(h=="right bottom"||h=="bottom right"){f.css({position:"absolute",bottom:"0px",right:"0px"})}if(h=="right center"||h=="center right"){f.css({position:"absolute",top:b.height/2-g/2+"px",right:"0px"})}if(h=="left bottom"||h=="bottom left"){f.css({position:"absolute",bottom:"0px",left:"0px"})}if(h=="left center"||h=="center left"){f.css({position:"absolute",top:b.height/2-g/2+"px",left:"0px"})}},20)}};var aw=function(a,c,b){b.find(".slot").each(function(){a2(this).remove()});c.transition=0};var ah=function(b,a){b.find("img, .defaultimg").each(function(g){var c=a2(this),d=c.data("lazyload");if(d!=c.attr("src")&&a<3&&d!=aK&&d!="undefined"){if(d!=aK&&d!="undefined"){c.attr("src",d);var f=new Image;f.onload=function(h){c.data("lazydone",1);if(c.hasClass("defaultimg")){aG(c,f)}};f.error=function(){c.data("lazydone",1)};f.src=c.attr("src");if(f.complete){if(c.hasClass("defaultimg")){aG(c,f)}c.data("lazydone",1)}}}else{if((d===aK||d==="undefined")&&c.data("lazydone")!=1){var f=new Image;f.onload=function(){if(c.hasClass("defaultimg")){aG(c,f)}c.data("lazydone",1)};f.error=function(){c.data("lazydone",1)};if(c.attr("src")!=aK&&c.attr("src")!="undefined"){f.src=c.attr("src")}else{f.src=c.data("src")}if(f.complete){if(c.hasClass("defaultimg")){aG(c,f)}c.data("lazydone",1)}}}})};var aG=function(d,b){var f=d.closest("li"),c=b.width,a=b.height;f.data("owidth",c);f.data("oheight",a);f.find(".slotholder").data("owidth",c);f.find(".slotholder").data("oheight",a);f.data("loadeddone",1)};var ag=function(d,c,a){ah(d,0);var b=setInterval(function(){a.bannertimeronpause=true;a.container.trigger("stoptimer");a.cd=0;var f=0;d.find("img, .defaultimg").each(function(g){if(a2(this).data("lazydone")!=1){f++}});if(f>0){ah(d,f)}else{clearInterval(b);if(c!=aK){c()}}},100)};var am=function(d,g){try{var c=d.find(">ul:first-child >li:eq("+g.act+")")}catch(a){var c=d.find(">ul:first-child >li:eq(1)")}g.lastslide=g.act;var b=d.find(">ul:first-child >li:eq("+g.next+")");var f=b.find(".defaultimg");g.bannertimeronpause=true;d.trigger("stoptimer");g.cd=0;if(f.data("lazyload")!=aK&&f.data("lazyload")!="undefined"&&f.data("lazydone")!=1){if(!a6(8)){f.css({backgroundImage:'url("'+b.find(".defaultimg").data("lazyload")+'")'})}else{f.attr("src",b.find(".defaultimg").data("lazyload"))}f.data("src",b.find(".defaultimg").data("lazyload"));f.data("lazydone",1);f.data("orgw",0);b.data("loadeddone",1);d.find(".tp-loader").css({display:"block"});ag(d.find(".tp-static-layers"),function(){ag(b,function(){var h=b.find(".slotholder");if(h.data("kenburns")=="on"){var i=setInterval(function(){var j=h.data("owidth");if(j>=0){clearInterval(i);ay(g,f,d)}},10)}else{ay(g,f,d)}},g)},g)}else{if(b.data("loadeddone")===aK){b.data("loadeddone",1);ag(b,function(){ay(g,f,d)},g)}else{ay(g,f,d)}}};var ay=function(b,a,c){b.bannertimeronpause=false;b.cd=0;c.trigger("nulltimer");c.find(".tp-loader").css({display:"none"});aZ(a,b);aI(c,b);aZ(a,b);aU(c,b)};var aU=function(h,k){h.trigger("revolution.slide.onbeforeswap");k.transition=1;k.videoplaying=false;try{var g=h.find(">ul:first-child >li:eq("+k.act+")")}catch(d){var g=h.find(">ul:first-child >li:eq(1)")}k.lastslide=k.act;var f=h.find(">ul:first-child >li:eq("+k.next+")");setTimeout(function(){aS(k)},200);var j=g.find(".slotholder"),c=f.find(".slotholder");if(c.data("kenburns")=="on"||j.data("kenburns")=="on"){aa(h,k);h.find(".kenburnimg").remove()}if(f.data("delay")!=aK){k.cd=0;k.delay=f.data("delay")}else{k.delay=k.origcd}if(k.firststart==1){punchgs.TweenLite.set(g,{autoAlpha:0})}punchgs.TweenLite.set(g,{zIndex:18});punchgs.TweenLite.set(f,{autoAlpha:0,zIndex:20});var b=0;if(g.index()!=f.index()&&k.firststart!=1){b=aE(g,k)}if(g.data("saveperformance")!="on"){b=0}setTimeout(function(){h.trigger("restarttimer");ao(h,k,f,g,j,c)},b)};var ao=function(bQ,bK,bV,bJ,bO,bI){function bF(){a2.each(bZ,function(d,c){if(c[0]==bW||c[8]==bW){bY=c[1];bN=c[2];bX=bE}bE=bE+1})}if(bV.data("differentissplayed")=="prepared"){bV.data("differentissplayed","done");bV.data("transition",bV.data("savedtransition"));bV.data("slotamount",bV.data("savedslotamount"));bV.data("masterspeed",bV.data("savedmasterspeed"))}if(bV.data("fstransition")!=aK&&bV.data("differentissplayed")!="done"){bV.data("savedtransition",bV.data("transition"));bV.data("savedslotamount",bV.data("slotamount"));bV.data("savedmasterspeed",bV.data("masterspeed"));bV.data("transition",bV.data("fstransition"));bV.data("slotamount",bV.data("fsslotamount"));bV.data("masterspeed",bV.data("fsmasterspeed"));bV.data("differentissplayed","prepared")}bQ.find(".active-revslide").removeClass(".active-revslide");bV.addClass("active-revslide");if(bV.data("transition")==aK){bV.data("transition","random")}var bY=0,bS=bV.data("transition").split(","),b0=bV.data("nexttransid")==aK?-1:bV.data("nexttransid");if(bV.data("randomtransition")=="on"){b0=Math.round(Math.random()*bS.length)}else{b0=b0+1}if(b0==bS.length){b0=0}bV.data("nexttransid",b0);var bW=bS[b0];if(bK.ie){if(bW=="boxfade"){bW="boxslide"}if(bW=="slotfade-vertical"){bW="slotzoom-vertical"}if(bW=="slotfade-horizontal"){bW="slotzoom-horizontal"}}if(a6(8)){bW=11}var bN=0;if(bK.parallax=="scroll"&&bK.parallaxFirstGo==aK){bK.parallaxFirstGo=true;a0(bQ,bK);setTimeout(function(){a0(bQ,bK)},210);setTimeout(function(){a0(bQ,bK)},420)}if(bW=="slidehorizontal"){bW="slideleft";if(bK.leftarrowpressed==1){bW="slideright"}}if(bW=="slidevertical"){bW="slideup";if(bK.leftarrowpressed==1){bW="slidedown"}}if(bW=="parallaxhorizontal"){bW="parallaxtoleft";if(bK.leftarrowpressed==1){bW="parallaxtoright"}}if(bW=="parallaxvertical"){bW="parallaxtotop";if(bK.leftarrowpressed==1){bW="parallaxtobottom"}}var bZ=[["boxslide",0,1,10,0,"box",false,null,0],["boxfade",1,0,10,0,"box",false,null,1],["slotslide-horizontal",2,0,0,200,"horizontal",true,false,2],["slotslide-vertical",3,0,0,200,"vertical",true,false,3],["curtain-1",4,3,0,0,"horizontal",true,true,4],["curtain-2",5,3,0,0,"horizontal",true,true,5],["curtain-3",6,3,25,0,"horizontal",true,true,6],["slotzoom-horizontal",7,0,0,400,"horizontal",true,true,7],["slotzoom-vertical",8,0,0,0,"vertical",true,true,8],["slotfade-horizontal",9,0,0,500,"horizontal",true,null,9],["slotfade-vertical",10,0,0,500,"vertical",true,null,10],["fade",11,0,1,300,"horizontal",true,null,11],["slideleft",12,0,1,0,"horizontal",true,true,12],["slideup",13,0,1,0,"horizontal",true,true,13],["slidedown",14,0,1,0,"horizontal",true,true,14],["slideright",15,0,1,0,"horizontal",true,true,15],["papercut",16,0,0,600,"",null,null,16],["3dcurtain-horizontal",17,0,20,100,"vertical",false,true,17],["3dcurtain-vertical",18,0,10,100,"horizontal",false,true,18],["cubic",19,0,20,600,"horizontal",false,true,19],["cube",19,0,20,600,"horizontal",false,true,20],["flyin",20,0,4,600,"vertical",false,true,21],["turnoff",21,0,1,1600,"horizontal",false,true,22],["incube",22,0,20,200,"horizontal",false,true,23],["cubic-horizontal",23,0,20,500,"vertical",false,true,24],["cube-horizontal",23,0,20,500,"vertical",false,true,25],["incube-horizontal",24,0,20,500,"vertical",false,true,26],["turnoff-vertical",25,0,1,200,"horizontal",false,true,27],["fadefromright",12,1,1,0,"horizontal",true,true,28],["fadefromleft",15,1,1,0,"horizontal",true,true,29],["fadefromtop",14,1,1,0,"horizontal",true,true,30],["fadefrombottom",13,1,1,0,"horizontal",true,true,31],["fadetoleftfadefromright",12,2,1,0,"horizontal",true,true,32],["fadetorightfadetoleft",15,2,1,0,"horizontal",true,true,33],["fadetobottomfadefromtop",14,2,1,0,"horizontal",true,true,34],["fadetotopfadefrombottom",13,2,1,0,"horizontal",true,true,35],["parallaxtoright",12,3,1,0,"horizontal",true,true,36],["parallaxtoleft",15,3,1,0,"horizontal",true,true,37],["parallaxtotop",14,3,1,0,"horizontal",true,true,38],["parallaxtobottom",13,3,1,0,"horizontal",true,true,39],["scaledownfromright",12,4,1,0,"horizontal",true,true,40],["scaledownfromleft",15,4,1,0,"horizontal",true,true,41],["scaledownfromtop",14,4,1,0,"horizontal",true,true,42],["scaledownfrombottom",13,4,1,0,"horizontal",true,true,43],["zoomout",13,5,1,0,"horizontal",true,true,44],["zoomin",13,6,1,0,"horizontal",true,true,45],["notransition",26,0,1,0,"horizontal",true,null,46]];var bH=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];var bR=[16,17,18,19,20,21,22,23,24,25,26,27];var bY=0;var bN=1;var bX=0;var bE=0;var bG=new Array;if(bI.data("kenburns")=="on"){if(bW=="boxslide"||bW==0||bW=="boxfade"||bW==1||bW=="papercut"||bW==16){bW=11}aj(bQ,bK,true,true)}if(bW=="random"){bW=Math.round(Math.random()*bZ.length-1);if(bW>bZ.length-1){bW=bZ.length-1}}if(bW=="random-static"){bW=Math.round(Math.random()*bH.length-1);if(bW>bH.length-1){bW=bH.length-1}bW=bH[bW]}if(bW=="random-premium"){bW=Math.round(Math.random()*bR.length-1);if(bW>bR.length-1){bW=bR.length-1}bW=bR[bW]}var br=[12,13,14,15,16,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];if(bK.isJoomla==true&&window.MooTools!=aK&&br.indexOf(bW)!=-1){var ba=Math.round(Math.random()*(bR.length-2))+1;if(ba>bR.length-1){ba=bR.length-1}if(ba==0){ba=1}bW=bR[ba]}bF();if(a6(8)&&bY>15&&bY<28){bW=Math.round(Math.random()*bH.length-1);if(bW>bH.length-1){bW=bH.length-1}bW=bH[bW];bE=0;bF()}var a8=-1;if(bK.leftarrowpressed==1||bK.act>bK.next){a8=1}bK.leftarrowpressed=0;if(bY>26){bY=26}if(bY<0){bY=0}var bf=300;if(bV.data("masterspeed")!=aK&&bV.data("masterspeed")>99&&bV.data("masterspeed")<bK.delay){bf=bV.data("masterspeed")}if(bV.data("masterspeed")!=aK&&bV.data("masterspeed")>bK.delay){bf=bK.delay}bG=bZ[bX];bQ.parent().find(".bullet").each(function(){var c=a2(this),d=c.index();c.removeClass("selected");if(bK.navigationArrows=="withbullet"||bK.navigationArrows=="nexttobullets"){d=c.index()-1}if(d==bK.next){c.addClass("selected")}});var bt=new punchgs.TimelineLite({onComplete:function(){aA(bQ,bK,bI,bO,bV,bJ,bt)}});bt.add(punchgs.TweenLite.set(bI.find(".defaultimg"),{opacity:0}));bt.pause();if(bV.data("slotamount")==aK||bV.data("slotamount")<1){bK.slots=Math.round(Math.random()*12+4);if(bW=="boxslide"){bK.slots=Math.round(Math.random()*6+3)}else{if(bW=="flyin"){bK.slots=Math.round(Math.random()*4+1)}}}else{bK.slots=bV.data("slotamount")}if(bV.data("rotate")==aK){bK.rotate=0}else{if(bV.data("rotate")==999){bK.rotate=Math.round(Math.random()*360)}else{bK.rotate=bV.data("rotate")}}if(!a2.support.transition||bK.ie||bK.ie9){bK.rotate=0}if(bK.firststart==1){bK.firststart=0}bf=bf+bG[4];if((bY==4||bY==5||bY==6)&&bK.slots<3){bK.slots=3}if(bG[3]!=0){bK.slots=Math.min(bK.slots,bG[3])}if(bY==9){bK.slots=bK.width/20}if(bY==10){bK.slots=bK.height/20}if(bG[7]!=null){a5(bO,bK,bG[7],bG[5])}if(bG[6]!=null){a5(bI,bK,bG[6],bG[5])}if(bY==0){var bT=Math.ceil(bK.height/bK.sloth);var bh=0;bI.find(".slotslide").each(function(c){var d=a2(this);bh=bh+1;if(bh==bT){bh=0}bt.add(punchgs.TweenLite.from(d,bf/600,{opacity:0,top:0-bK.sloth,left:0-bK.slotw,rotation:bK.rotate,force3D:"auto",ease:punchgs.Power2.easeOut}),(c*15+bh*30)/1500)})}if(bY==1){var be,bg=0;bI.find(".slotslide").each(function(d){var g=a2(this),c=Math.random()*bf+300,f=Math.random()*500+200;if(c+f>be){be=f+f;bg=d}bt.add(punchgs.TweenLite.from(g,c/1000,{autoAlpha:0,force3D:"auto",rotation:bK.rotate,ease:punchgs.Power2.easeInOut}),f/1000)})}if(bY==2){var b1=new punchgs.TimelineLite;bO.find(".slotslide").each(function(){var c=a2(this);b1.add(punchgs.TweenLite.to(c,bf/1000,{left:bK.slotw,force3D:"auto",rotation:0-bK.rotate}),0);bt.add(b1,0)});bI.find(".slotslide").each(function(){var c=a2(this);b1.add(punchgs.TweenLite.from(c,bf/1000,{left:0-bK.slotw,force3D:"auto",rotation:bK.rotate}),0);bt.add(b1,0)})}if(bY==3){var b1=new punchgs.TimelineLite;bO.find(".slotslide").each(function(){var c=a2(this);b1.add(punchgs.TweenLite.to(c,bf/1000,{top:bK.sloth,rotation:bK.rotate,force3D:"auto",transformPerspective:600}),0);bt.add(b1,0)});bI.find(".slotslide").each(function(){var c=a2(this);b1.add(punchgs.TweenLite.from(c,bf/1000,{top:0-bK.sloth,rotation:bK.rotate,ease:punchgs.Power2.easeOut,force3D:"auto",transformPerspective:600}),0);bt.add(b1,0)})}if(bY==4||bY==5){setTimeout(function(){bO.find(".defaultimg").css({opacity:0})},100);var bs=bf/1000,bd=bs,b1=new punchgs.TimelineLite;bO.find(".slotslide").each(function(d){var f=a2(this);var c=d*bs/bK.slots;if(bY==5){c=(bK.slots-d-1)*bs/bK.slots/1.5}b1.add(punchgs.TweenLite.to(f,bs*3,{transformPerspective:600,force3D:"auto",top:0+bK.height,opacity:0.5,rotation:bK.rotate,ease:punchgs.Power2.easeInOut,delay:c}),0);bt.add(b1,0)});bI.find(".slotslide").each(function(d){var f=a2(this);var c=d*bs/bK.slots;if(bY==5){c=(bK.slots-d-1)*bs/bK.slots/1.5}b1.add(punchgs.TweenLite.from(f,bs*3,{top:0-bK.height,opacity:0.5,rotation:bK.rotate,force3D:"auto",ease:punchgs.Power2.easeInOut,delay:c}),0);bt.add(b1,0)})}if(bY==6){if(bK.slots<2){bK.slots=2}if(bK.slots%2){bK.slots=bK.slots+1}var b1=new punchgs.TimelineLite;setTimeout(function(){bO.find(".defaultimg").css({opacity:0})},100);bO.find(".slotslide").each(function(d){var f=a2(this);if(d+1<bK.slots/2){var c=(d+2)*90}else{var c=(2+bK.slots-d)*90}b1.add(punchgs.TweenLite.to(f,(bf+c)/1000,{top:0+bK.height,opacity:1,force3D:"auto",rotation:bK.rotate,ease:punchgs.Power2.easeInOut}),0);bt.add(b1,0)});bI.find(".slotslide").each(function(d){var f=a2(this);if(d+1<bK.slots/2){var c=(d+2)*90}else{var c=(2+bK.slots-d)*90}b1.add(punchgs.TweenLite.from(f,(bf+c)/1000,{top:0-bK.height,opacity:1,force3D:"auto",rotation:bK.rotate,ease:punchgs.Power2.easeInOut}),0);bt.add(b1,0)})}if(bY==7){bf=bf*2;if(bf>bK.delay){bf=bK.delay}var b1=new punchgs.TimelineLite;setTimeout(function(){bO.find(".defaultimg").css({opacity:0})},100);bO.find(".slotslide").each(function(){var c=a2(this).find("div");b1.add(punchgs.TweenLite.to(c,bf/1000,{left:0-bK.slotw/2+"px",top:0-bK.height/2+"px",width:bK.slotw*2+"px",height:bK.height*2+"px",opacity:0,rotation:bK.rotate,force3D:"auto",ease:punchgs.Power2.easeOut}),0);bt.add(b1,0)});bI.find(".slotslide").each(function(c){var d=a2(this).find("div");b1.add(punchgs.TweenLite.fromTo(d,bf/1000,{left:0,top:0,opacity:0,transformPerspective:600},{left:0-c*bK.slotw+"px",ease:punchgs.Power2.easeOut,force3D:"auto",top:0+"px",width:bK.width,height:bK.height,opacity:1,rotation:0,delay:0.1}),0);bt.add(b1,0)})}if(bY==8){bf=bf*3;if(bf>bK.delay){bf=bK.delay}var b1=new punchgs.TimelineLite;bO.find(".slotslide").each(function(){var c=a2(this).find("div");b1.add(punchgs.TweenLite.to(c,bf/1000,{left:0-bK.width/2+"px",top:0-bK.sloth/2+"px",width:bK.width*2+"px",height:bK.sloth*2+"px",force3D:"auto",opacity:0,rotation:bK.rotate}),0);bt.add(b1,0)});bI.find(".slotslide").each(function(c){var d=a2(this).find("div");b1.add(punchgs.TweenLite.fromTo(d,bf/1000,{left:0,top:0,opacity:0,force3D:"auto"},{left:0+"px",top:0-c*bK.sloth+"px",width:bI.find(".defaultimg").data("neww")+"px",height:bI.find(".defaultimg").data("newh")+"px",opacity:1,rotation:0}),0);bt.add(b1,0)})}if(bY==9||bY==10){var bm=0;bI.find(".slotslide").each(function(c){var d=a2(this);bm++;bt.add(punchgs.TweenLite.fromTo(d,bf/1000,{autoAlpha:0,force3D:"auto",transformPerspective:600},{autoAlpha:1,ease:punchgs.Power2.easeInOut,delay:c*5/1000}),0)})}if(bY==11||bY==26){var bm=0;if(bY==26){bf=0}bI.find(".slotslide").each(function(c){var d=a2(this);bt.add(punchgs.TweenLite.from(d,bf/1000,{autoAlpha:0,force3D:"auto",ease:punchgs.Power2.easeInOut}),0)})}if(bY==12||bY==13||bY==14||bY==15){bf=bf;if(bf>bK.delay){bf=bK.delay}setTimeout(function(){punchgs.TweenLite.set(bO.find(".defaultimg"),{autoAlpha:0})},100);var bu=bK.width,bp=bK.height,bl=bI.find(".slotslide"),bL=0,bb=0,Q=1,bD=1,t=1,j=punchgs.Power2.easeInOut,A=punchgs.Power2.easeInOut,bC=bf/1000,bj=bC;if(bK.fullWidth=="on"||bK.fullScreen=="on"){bu=bl.width();bp=bl.height()}if(bY==12){bL=bu}else{if(bY==15){bL=0-bu}else{if(bY==13){bb=bp}else{if(bY==14){bb=0-bp}}}}if(bN==1){Q=0}if(bN==2){Q=0}if(bN==3){j=punchgs.Power2.easeInOut;A=punchgs.Power1.easeInOut;bC=bf/1200}if(bN==4||bN==5){bD=0.6}if(bN==6){bD=1.4}if(bN==5||bN==6){t=1.4;Q=0;bu=0;bp=0;bL=0;bb=0}if(bN==6){t=0.6}var bi=0;bt.add(punchgs.TweenLite.from(bl,bC,{left:bL,top:bb,scale:t,opacity:Q,rotation:bK.rotate,ease:A,force3D:"auto"}),0);var bo=bO.find(".slotslide");if(bN==4||bN==5){bu=0;bp=0}if(bN!=1){switch(bY){case 12:bt.add(punchgs.TweenLite.to(bo,bj,{left:0-bu+"px",force3D:"auto",scale:bD,opacity:Q,rotation:bK.rotate,ease:j}),0);break;case 15:bt.add(punchgs.TweenLite.to(bo,bj,{left:bu+"px",force3D:"auto",scale:bD,opacity:Q,rotation:bK.rotate,ease:j}),0);break;case 13:bt.add(punchgs.TweenLite.to(bo,bj,{top:0-bp+"px",force3D:"auto",scale:bD,opacity:Q,rotation:bK.rotate,ease:j}),0);break;case 14:bt.add(punchgs.TweenLite.to(bo,bj,{top:bp+"px",force3D:"auto",scale:bD,opacity:Q,rotation:bK.rotate,ease:j}),0);break}}}if(bY==16){var b1=new punchgs.TimelineLite;bt.add(punchgs.TweenLite.set(bJ,{position:"absolute","z-index":20}),0);bt.add(punchgs.TweenLite.set(bV,{position:"absolute","z-index":15}),0);bJ.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>');bJ.find(".tp-half-one").clone(true).appendTo(bJ).addClass("tp-half-two");bJ.find(".tp-half-two").removeClass("tp-half-one");var bu=bK.width,bp=bK.height;if(bK.autoHeight=="on"){bp=bQ.height()}bJ.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:'+bu+"px;height:"+bp+'px;"></div>');bJ.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:'+bu+"px;height:"+bp+'px;"></div>');bJ.find(".tp-half-two .defaultimg").css({position:"absolute",top:"-50%"});bJ.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>');bt.add(punchgs.TweenLite.set(bJ.find(".tp-half-two"),{width:bu,height:bp,overflow:"hidden",zIndex:15,position:"absolute",top:bp/2,left:"0px",transformPerspective:600,transformOrigin:"center bottom"}),0);bt.add(punchgs.TweenLite.set(bJ.find(".tp-half-one"),{width:bu,height:bp/2,overflow:"visible",zIndex:10,position:"absolute",top:"0px",left:"0px",transformPerspective:600,transformOrigin:"center top"}),0);var b=bJ.find(".defaultimg"),a=Math.round(Math.random()*20-10),bM=Math.round(Math.random()*20-10),bU=Math.round(Math.random()*20-10),bA=Math.random()*0.4-0.2,bx=Math.random()*0.4-0.2,bn=Math.random()*1+1,bz=Math.random()*1+1,bB=Math.random()*0.3+0.3;bt.add(punchgs.TweenLite.set(bJ.find(".tp-half-one"),{overflow:"hidden"}),0);bt.add(punchgs.TweenLite.fromTo(bJ.find(".tp-half-one"),bf/800,{width:bu,height:bp/2,position:"absolute",top:"0px",left:"0px",force3D:"auto",transformOrigin:"center top"},{scale:bn,rotation:a,y:0-bp-bp/4,autoAlpha:0,ease:punchgs.Power2.easeInOut}),0);bt.add(punchgs.TweenLite.fromTo(bJ.find(".tp-half-two"),bf/800,{width:bu,height:bp,overflow:"hidden",position:"absolute",top:bp/2,left:"0px",force3D:"auto",transformOrigin:"center bottom"},{scale:bz,rotation:bM,y:bp+bp/4,ease:punchgs.Power2.easeInOut,autoAlpha:0,onComplete:function(){punchgs.TweenLite.set(bJ,{position:"absolute","z-index":15});punchgs.TweenLite.set(bV,{position:"absolute","z-index":20});if(bJ.find(".tp-half-one").length>0){bJ.find(".tp-half-one .defaultimg").unwrap();bJ.find(".tp-half-one .slotholder").unwrap()}bJ.find(".tp-half-two").remove()}}),0);b1.add(punchgs.TweenLite.set(bI.find(".defaultimg"),{autoAlpha:1}),0);if(bJ.html()!=null){bt.add(punchgs.TweenLite.fromTo(bV,(bf-200)/1000,{scale:bB,x:bK.width/4*bA,y:bp/4*bx,rotation:bU,force3D:"auto",transformOrigin:"center center",ease:punchgs.Power2.easeOut},{autoAlpha:1,scale:1,x:0,y:0,rotation:0}),0)}bt.add(b1,0)}if(bY==17){bI.find(".slotslide").each(function(c){var d=a2(this);bt.add(punchgs.TweenLite.fromTo(d,bf/800,{opacity:0,rotationY:0,scale:0.9,rotationX:-110,force3D:"auto",transformPerspective:600,transformOrigin:"center center"},{opacity:1,top:0,left:0,scale:1,rotation:0,rotationX:0,force3D:"auto",rotationY:0,ease:punchgs.Power3.easeOut,delay:c*0.06}),0)})}if(bY==18){bI.find(".slotslide").each(function(c){var d=a2(this);bt.add(punchgs.TweenLite.fromTo(d,bf/500,{autoAlpha:0,rotationY:310,scale:0.9,rotationX:10,force3D:"auto",transformPerspective:600,transformOrigin:"center center"},{autoAlpha:1,top:0,left:0,scale:1,rotation:0,rotationX:0,force3D:"auto",rotationY:0,ease:punchgs.Power3.easeOut,delay:c*0.06}),0)})}if(bY==19||bY==22){var b1=new punchgs.TimelineLite;bt.add(punchgs.TweenLite.set(bJ,{zIndex:20}),0);bt.add(punchgs.TweenLite.set(bV,{zIndex:20}),0);setTimeout(function(){bO.find(".defaultimg").css({opacity:0})},100);var a9=bV.css("z-index"),bw=bJ.css("z-index"),by=90,Q=1,bv="center center ";if(a8==1){by=-90}if(bY==19){bv=bv+"-"+bK.height/2;Q=0}else{bv=bv+bK.height/2}punchgs.TweenLite.set(bQ,{transformStyle:"flat",backfaceVisibility:"hidden",transformPerspective:600});bI.find(".slotslide").each(function(c){var d=a2(this);b1.add(punchgs.TweenLite.fromTo(d,bf/1000,{transformStyle:"flat",backfaceVisibility:"hidden",left:0,rotationY:bK.rotate,z:10,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:bv,rotationX:by},{left:0,rotationY:0,top:0,z:0,scale:1,force3D:"auto",rotationX:0,delay:c*50/1000,ease:punchgs.Power2.easeInOut}),0);b1.add(punchgs.TweenLite.to(d,0.1,{autoAlpha:1,delay:c*50/1000}),0);bt.add(b1)});bO.find(".slotslide").each(function(d){var f=a2(this);var c=-90;if(a8==1){c=90}b1.add(punchgs.TweenLite.fromTo(f,bf/1000,{transformStyle:"flat",backfaceVisibility:"hidden",autoAlpha:1,rotationY:0,top:0,z:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:bv,rotationX:0},{autoAlpha:1,rotationY:bK.rotate,top:0,z:10,scale:1,rotationX:c,delay:d*50/1000,force3D:"auto",ease:punchgs.Power2.easeInOut}),0);bt.add(b1)})}if(bY==20){setTimeout(function(){bO.find(".defaultimg").css({opacity:0})},100);var a9=bV.css("z-index"),bw=bJ.css("z-index");if(a8==1){var bP=-bK.width;var by=70;var bv="left center -"+bK.height/2}else{var bP=bK.width;var by=-70;var bv="right center -"+bK.height/2}bI.find(".slotslide").each(function(c){var d=a2(this);bt.add(punchgs.TweenLite.fromTo(d,bf/1500,{left:bP,rotationX:40,z:-600,opacity:Q,top:0,force3D:"auto",transformPerspective:600,transformOrigin:bv,rotationY:by},{left:0,delay:c*50/1000,ease:punchgs.Power2.easeInOut}),0);bt.add(punchgs.TweenLite.fromTo(d,bf/1000,{rotationX:40,z:-600,opacity:Q,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:bv,rotationY:by},{rotationX:0,opacity:1,top:0,z:0,scale:1,rotationY:0,delay:c*50/1000,ease:punchgs.Power2.easeInOut}),0);bt.add(punchgs.TweenLite.to(d,0.1,{opacity:1,force3D:"auto",delay:c*50/1000+bf/2000}),0)});bO.find(".slotslide").each(function(d){var h=a2(this);if(a8!=1){var c=-bK.width;var f=70;var g="left center -"+bK.height/2}else{var c=bK.width;var f=-70;var g="right center -"+bK.height/2}bt.add(punchgs.TweenLite.fromTo(h,bf/1000,{opacity:1,rotationX:0,top:0,z:0,scale:1,left:0,force3D:"auto",transformPerspective:600,transformOrigin:g,rotationY:0},{opacity:1,rotationX:40,top:0,z:-600,left:c,force3D:"auto",scale:0.8,rotationY:f,delay:d*50/1000,ease:punchgs.Power2.easeInOut}),0);bt.add(punchgs.TweenLite.to(h,0.1,{force3D:"auto",opacity:0,delay:d*50/1000+(bf/1000-bf/10000)}),0)})}if(bY==21||bY==25){setTimeout(function(){bO.find(".defaultimg").css({opacity:0})},100);var a9=bV.css("z-index"),bw=bJ.css("z-index"),by=90,bP=-bK.width,bk=-by;if(a8==1){if(bY==25){var bv="center top 0";by=bK.rotate}else{var bv="left center 0";bk=bK.rotate}}else{bP=bK.width;by=-90;if(bY==25){var bv="center bottom 0";bk=-by;by=bK.rotate}else{var bv="right center 0";bk=bK.rotate}}bI.find(".slotslide").each(function(c){var d=a2(this);bt.add(punchgs.TweenLite.fromTo(d,bf/1000,{left:0,transformStyle:"flat",rotationX:bk,z:0,autoAlpha:0,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:bv,rotationY:by},{left:0,rotationX:0,top:0,z:0,autoAlpha:1,scale:1,rotationY:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),0)});if(a8!=1){bP=-bK.width;by=90;if(bY==25){bv="center top 0";bk=-by;by=bK.rotate}else{bv="left center 0";bk=bK.rotate}}else{bP=bK.width;by=-90;if(bY==25){bv="center bottom 0";bk=-by;by=bK.rotate}else{bv="right center 0";bk=bK.rotate}}bO.find(".slotslide").each(function(c){var d=a2(this);bt.add(punchgs.TweenLite.fromTo(d,bf/1000,{left:0,transformStyle:"flat",rotationX:0,z:0,autoAlpha:1,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:bv,rotationY:0},{left:0,rotationX:bk,top:0,z:0,autoAlpha:1,force3D:"auto",scale:1,rotationY:by,ease:punchgs.Power1.easeInOut}),0)})}if(bY==23||bY==24){setTimeout(function(){bO.find(".defaultimg").css({opacity:0})},100);var a9=bV.css("z-index"),bw=bJ.css("z-index"),by=-90,Q=1,bc=0;if(a8==1){by=90}if(bY==23){var bv="center center -"+bK.width/2;Q=0}else{var bv="center center "+bK.width/2}punchgs.TweenLite.set(bQ,{transformStyle:"preserve-3d",backfaceVisibility:"hidden",perspective:2500});bI.find(".slotslide").each(function(c){var d=a2(this);bt.add(punchgs.TweenLite.fromTo(d,bf/1000,{left:bc,rotationX:bK.rotate,force3D:"auto",opacity:Q,top:0,scale:1,transformPerspective:600,transformOrigin:bv,rotationY:by},{left:0,rotationX:0,autoAlpha:1,top:0,z:0,scale:1,rotationY:0,delay:c*50/500,ease:punchgs.Power2.easeInOut}),0)});by=90;if(a8==1){by=-90}bO.find(".slotslide").each(function(c){var d=a2(this);bt.add(punchgs.TweenLite.fromTo(d,bf/1000,{left:0,autoAlpha:1,rotationX:0,top:0,z:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:bv,rotationY:0},{left:bc,autoAlpha:1,rotationX:bK.rotate,top:0,scale:1,rotationY:by,delay:c*50/500,ease:punchgs.Power2.easeInOut}),0)})}bt.pause();aW(bV,bK,null,bt);punchgs.TweenLite.to(bV,0.001,{autoAlpha:1});var bq={};bq.slideIndex=bK.next+1;bq.slide=bV;bQ.trigger("revolution.slide.onchange",bq);setTimeout(function(){bQ.trigger("revolution.slide.onafterswap")},bf);bQ.trigger("revolution.slide.onvideostop")};var aA=function(f,b,h,d,a,c,g){punchgs.TweenLite.to(h.find(".defaultimg"),0.001,{autoAlpha:1,onComplete:function(){aw(f,b,a)}});if(a.index()!=c.index()){punchgs.TweenLite.to(c,0.2,{autoAlpha:0,onComplete:function(){aw(f,b,c)}})}b.act=b.next;if(b.navigationType=="thumb"){aC(f)}if(h.data("kenburns")=="on"){aj(f,b)}f.find(".current-sr-slide-visible").removeClass("current-sr-slide-visible");a.addClass("current-sr-slide-visible");if(b.parallax=="scroll"||b.parallax=="scroll+mouse"||b.parallax=="mouse+scroll"){a0(f,b)}g.clear()};var al=function(c){var h=c.target.getVideoEmbedCode();var f=a2("#"+h.split('id="')[1].split('"')[0]);var b=f.closest(".tp-simpleresponsive");var d=f.parent().data("player");if(c.data==YT.PlayerState.PLAYING){var g=b.find(".tp-bannertimer");var a=g.data("opt");if(f.closest(".tp-caption").data("volume")=="mute"){d.mute()}a.videoplaying=true;b.trigger("stoptimer");b.trigger("revolution.slide.onvideoplay")}else{var g=b.find(".tp-bannertimer");var a=g.data("opt");if(c.data!=-1&&c.data!=3){a.videoplaying=false;b.trigger("starttimer");b.trigger("revolution.slide.onvideostop")}if(c.data==0&&a.nextslideatend==true){a.container.revnext()}else{a.videoplaying=false;b.trigger("starttimer");b.trigger("revolution.slide.onvideostop")}}};var an=function(b,a,c){if(b.addEventListener){b.addEventListener(a,c,false)}else{b.attachEvent(a,c,false)}};var a7=function(b,g){var d=$f(b),a=a2("#"+b),c=a.closest(".tp-simpleresponsive"),f=a.closest(".tp-caption");setTimeout(function(){d.addEvent("ready",function(h){if(g){d.api("play")}d.addEvent("play",function(j){var i=c.find(".tp-bannertimer");var k=i.data("opt");k.videoplaying=true;c.trigger("stoptimer");if(f.data("volume")=="mute"){d.api("setVolume","0")}});d.addEvent("finish",function(j){var i=c.find(".tp-bannertimer");var k=i.data("opt");k.videoplaying=false;c.trigger("starttimer");c.trigger("revolution.slide.onvideoplay");if(k.nextslideatend==true){k.container.revnext()}});d.addEvent("pause",function(j){var i=c.find(".tp-bannertimer");var k=i.data("opt");k.videoplaying=false;c.trigger("starttimer");c.trigger("revolution.slide.onvideostop")});f.find(".tp-thumb-image").click(function(){punchgs.TweenLite.to(a2(this),0.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut});d.api("play")})})},150)};var ax=function(f,h){var d=h.width();var b=h.height();var c=f.data("mediaAspect");if(c==aK){c=1}var g=d/b;f.css({position:"absolute"});var a=f.find("video");if(g<c){punchgs.TweenLite.to(f,0.0001,{width:b*c,force3D:"auto",top:0,left:0-(b*c-d)/2,height:b})}else{punchgs.TweenLite.to(f,0.0001,{width:d,force3D:"auto",top:0-(d/c-b)/2,left:0,height:d/c})}};var ak=function(){var a=new Object;a.x=0;a.y=0;a.rotationX=0;a.rotationY=0;a.rotationZ=0;a.scale=1;a.scaleX=1;a.scaleY=1;a.skewX=0;a.skewY=0;a.opacity=0;a.transformOrigin="center, center";a.transformPerspective=400;a.rotation=0;return a};var at=function(a,c){var b=c.split(";");a2.each(b,function(g,h){h=h.split(":");var f=h[0],d=h[1];if(f=="rotationX"){a.rotationX=parseInt(d,0)}if(f=="rotationY"){a.rotationY=parseInt(d,0)}if(f=="rotationZ"){a.rotationZ=parseInt(d,0)}if(f=="rotationZ"){a.rotation=parseInt(d,0)}if(f=="scaleX"){a.scaleX=parseFloat(d)}if(f=="scaleY"){a.scaleY=parseFloat(d)}if(f=="opacity"){a.opacity=parseFloat(d)}if(f=="skewX"){a.skewX=parseInt(d,0)}if(f=="skewY"){a.skewY=parseInt(d,0)}if(f=="x"){a.x=parseInt(d,0)}if(f=="y"){a.y=parseInt(d,0)}if(f=="z"){a.z=parseInt(d,0)}if(f=="transformOrigin"){a.transformOrigin=d.toString()}if(f=="transformPerspective"){a.transformPerspective=parseInt(d,0)}});return a};var az=function(b){var d=b.split("animation:");var c=new Object;c.animation=at(ak(),d[1]);var a=d[0].split(";");a2.each(a,function(h,g){g=g.split(":");var j=g[0],f=g[1];if(j=="typ"){c.typ=f}if(j=="speed"){c.speed=parseInt(f,0)/1000}if(j=="start"){c.start=parseInt(f,0)/1000}if(j=="elementdelay"){c.elementdelay=parseFloat(f)}if(j=="ease"){c.ease=f}});return c};var aW=function(j,a,m,y){function g(){}function x(){}if(j.data("ctl")==aK){j.data("ctl",new punchgs.TimelineLite)}var t=j.data("ctl"),k=0,w=0,q=j.find(".tp-caption"),b=a.container.find(".tp-static-layers").find(".tp-caption");t.pause();a2.each(b,function(d,c){q.push(c)});q.each(function(bA){var bv=m,bI=-1,bF=a2(this);if(bF.hasClass("tp-static-layer")){var by=bF.data("startslide"),bL=bF.data("endslide");if(by==-1||by=="-1"){bF.data("startslide",0)}if(bL==-1||bL=="-1"){bF.data("endslide",a.slideamount)}if(by==0&&bL==a.slideamount-1){bF.data("endslide",a.slideamount+1)}by=bF.data("startslide"),bL=bF.data("endslide");if(!bF.hasClass("tp-is-shown")){if(by<=a.next&&bL>=a.next||by==a.next||bL==a.next){bF.addClass("tp-is-shown");bI=1}else{bI=0}}else{if(bL==a.next||by>a.next||bL<a.next){bI=2}else{bI=0}}}k=a.width/2-a.startwidth*a.bw/2;var bu=a.bw;var bB=a.bh;if(a.fullScreen=="on"){w=a.height/2-a.startheight*a.bh/2}if(a.autoHeight=="on"||a.minHeight!=aK&&a.minHeight>0){w=a.container.height()/2-a.startheight*a.bh/2}if(w<0){w=0}var bH=0;if(a.width<a.hideCaptionAtLimit&&bF.data("captionhidden")=="on"){bF.addClass("tp-hidden-caption");bH=1}else{if(a.width<a.hideAllCaptionAtLimit||a.width<a.hideAllCaptionAtLilmit){bF.addClass("tp-hidden-caption");bH=1}else{bF.removeClass("tp-hidden-caption")}}if(bH==0){if(bF.data("linktoslide")!=aK&&!bF.hasClass("hasclicklistener")){bF.addClass("hasclicklistener");bF.css({cursor:"pointer"});if(bF.data("linktoslide")!="no"){bF.click(function(){var d=a2(this);var f=d.data("linktoslide");if(f!="next"&&f!="prev"){a.container.data("showus",f);a.container.parent().find(".tp-rightarrow").click()}else{if(f=="next"){a.container.parent().find(".tp-rightarrow").click()}else{if(f=="prev"){a.container.parent().find(".tp-leftarrow").click()}}}})}}if(k<0){k=0}if(bF.hasClass("tp-videolayer")||bF.find("iframe").length>0||bF.find("video").length>0){var bq="iframe"+Math.round(Math.random()*100000+1),bM=bF.data("videowidth"),bs=bF.data("videoheight"),a9=bF.data("videoattributes"),u=bF.data("ytid"),br=bF.data("vimeoid"),o=bF.data("videpreload"),H=bF.data("videomp4"),bb=bF.data("videowebm"),bC=bF.data("videoogv"),J=bF.data("videocontrols"),bc="http",bE=bF.data("videoloop")=="loop"?"loop":bF.data("videoloop")=="loopandnoslidestop"?"loop":"";if(bF.data("thumbimage")!=aK&&bF.data("videoposter")==aK){bF.data("videoposter",bF.data("thumbimage"))}if(u!=aK&&String(u).length>1&&bF.find("iframe").length==0){bc="https";if(J=="none"){a9=a9.replace("controls=1","controls=0");if(a9.toLowerCase().indexOf("controls")==-1){a9=a9+"&controls=0"}}bF.append('<iframe style="visible:hidden" src="'+bc+"://www.youtube.com/embed/"+u+"?"+a9+'" width="'+bM+'" height="'+bs+'" style="width:'+bM+"px;height:"+bs+'px"></iframe>')}if(br!=aK&&String(br).length>1&&bF.find("iframe").length==0){if(location.protocol==="https:"){bc="https"}bF.append('<iframe style="visible:hidden" src="'+bc+"://player.vimeo.com/video/"+br+"?"+a9+'" width="'+bM+'" height="'+bs+'" style="width:'+bM+"px;height:"+bs+'px"></iframe>')}if((H!=aK||bb!=aK)&&bF.find("video").length==0){if(J!="controls"){J=""}var R='<video style="visible:hidden" class="" '+bE+' preload="'+o+'" width="'+bM+'" height="'+bs+'"';if(bF.data("videoposter")!=aK){if(bF.data("videoposter")!=aK){R=R+'poster="'+bF.data("videoposter")+'">'}}if(bb!=aK&&av().toLowerCase()=="firefox"){R=R+'<source src="'+bb+'" type="video/webm" />'}if(H!=aK){R=R+'<source src="'+H+'" type="video/mp4" />'}if(bC!=aK){R=R+'<source src="'+bC+'" type="video/ogg" />'}R=R+"</video>";bF.append(R);if(J=="controls"){bF.append('<div class="tp-video-controls"><div class="tp-video-button-wrap"><button type="button" class="tp-video-button tp-vid-play-pause">Play</button></div><div class="tp-video-seek-bar-wrap"><input  type="range" class="tp-seek-bar" value="0"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-mute">Mute</button></div><div class="tp-video-vol-bar-wrap"><input  type="range" class="tp-volume-bar" min="0" max="1" step="0.1" value="1"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-full-screen">Full-Screen</button></div></div>')}}var bp=false;if(bF.data("autoplayonlyfirsttime")==true||bF.data("autoplayonlyfirsttime")=="true"||bF.data("autoplay")==true){bF.data("autoplay",true);bp=true}bF.find("iframe").each(function(){var z=a2(this);punchgs.TweenLite.to(z,0.1,{autoAlpha:1,zIndex:0,transformStyle:"preserve-3d",z:0,rotationX:0,force3D:"auto"});if(aq()){var s=z.attr("src");z.attr("src","");z.attr("src",s)}a.nextslideatend=bF.data("nextslideatend");if(bF.data("videoposter")!=aK&&bF.data("videoposter").length>2&&bF.data("autoplay")!=true&&!bv){if(bF.find(".tp-thumb-image").length==0){bF.append('<div class="tp-thumb-image" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url('+bF.data("videoposter")+'); background-size:cover"></div>')}else{punchgs.TweenLite.set(bF.find(".tp-thumb-image"),{autoAlpha:1})}}if(z.attr("src").toLowerCase().indexOf("youtube")>=0){if(!z.hasClass("HasListener")){try{z.attr("id",bq);var S;var N=setInterval(function(){if(YT!=aK){if(typeof YT.Player!=aK&&typeof YT.Player!="undefined"){S=new YT.Player(bq,{events:{onStateChange:al,onReady:function(Y){var T=Y.target.getVideoEmbedCode(),f=a2("#"+T.split('id="')[1].split('"')[0]),p=f.closest(".tp-caption"),V=p.data("videorate"),d=p.data("videostart");if(V!=aK){Y.target.setPlaybackRate(parseFloat(V))}if(!aq()&&p.data("autoplay")==true||bp){p.data("timerplay",setTimeout(function(){Y.target.playVideo()},p.data("start")))}p.find(".tp-thumb-image").click(function(){punchgs.TweenLite.to(a2(this),0.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut});if(!aq()){S.playVideo()}})}}})}}z.addClass("HasListener");bF.data("player",S);clearInterval(N)},100)}catch(G){}}else{if(!m){var S=bF.data("player");if(bF.data("forcerewind")=="on"&&!aq()){S.seekTo(0)}if(!aq()&&bF.data("autoplay")==true||bp){bF.data("timerplay",setTimeout(function(){S.playVideo()},bF.data("start")))}}}}else{if(z.attr("src").toLowerCase().indexOf("vimeo")>=0){if(!z.hasClass("HasListener")){z.addClass("HasListener");z.attr("id",bq);var C=z.attr("src");var K={},h=C,I=/([^&=]+)=([^&]*)/g,Q;while(Q=I.exec(h)){K[decodeURIComponent(Q[1])]=decodeURIComponent(Q[2])}if(K.player_id!=aK){C=C.replace(K.player_id,bq)}else{C=C+"&player_id="+bq}try{C=C.replace("api=0","api=1")}catch(G){}C=C+"&api=1";z.attr("src",C);var S=bF.find("iframe")[0];var A=setInterval(function(){if($f!=aK){if(typeof $f(bq).api!=aK&&typeof $f(bq).api!="undefined"){$f(S).addEvent("ready",function(){a7(bq,bp)});clearInterval(A)}}},100)}else{if(!m){if(!aq()&&(bF.data("autoplay")==true||bF.data("forcerewind")=="on")){var z=bF.find("iframe");var E=z.attr("id");var L=$f(E);if(bF.data("forcerewind")=="on"){L.api("seekTo",0)}bF.data("timerplay",setTimeout(function(){if(bF.data("autoplay")==true){L.api("play")}},bF.data("start")))}}}}}});if(aq()&&bF.data("disablevideoonmobile")==1||a6(8)){bF.find("video").remove()}if(bF.find("video").length>0){bF.find("video").each(function(p){var d=this,f=a2(this);if(!f.parent().hasClass("html5vid")){f.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:auto;height:auto"></div>')}var h=f.parent();an(d,"loadedmetadata",function(n){n.data("metaloaded",1)}(h));clearInterval(h.data("interval"));h.data("interval",setInterval(function(){if(h.data("metaloaded")==1||d.duration!=NaN){clearInterval(h.data("interval"));if(!h.hasClass("HasListener")){h.addClass("HasListener");if(bF.data("dottedoverlay")!="none"&&bF.data("dottedoverlay")!=aK){if(bF.find(".tp-dottedoverlay").length!=1){h.append('<div class="tp-dottedoverlay '+bF.data("dottedoverlay")+'"></div>')}}if(f.attr("control")==aK){if(h.find(".tp-video-play-button").length==0){h.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><div class="tp-revstop"></div></div>')}h.find("video, .tp-poster, .tp-video-play-button").click(function(){if(h.hasClass("videoisplaying")){d.pause()}else{d.play()}})}if(bF.data("forcecover")==1||bF.hasClass("fullscreenvideo")){if(bF.data("forcecover")==1){ax(h,a.container);h.addClass("fullcoveredvideo");bF.addClass("fullcoveredvideo")}h.css({width:"100%",height:"100%"})}var G=bF.find(".tp-vid-play-pause")[0],K=bF.find(".tp-vid-mute")[0],A=bF.find(".tp-vid-full-screen")[0],z=bF.find(".tp-seek-bar")[0],C=bF.find(".tp-volume-bar")[0];if(G!=aK){an(G,"click",function(){if(d.paused==true){d.play()}else{d.pause()}});an(K,"click",function(){if(d.muted==false){d.muted=true;K.innerHTML="Unmute"}else{d.muted=false;K.innerHTML="Mute"}});an(A,"click",function(){if(d.requestFullscreen){d.requestFullscreen()}else{if(d.mozRequestFullScreen){d.mozRequestFullScreen()}else{if(d.webkitRequestFullscreen){d.webkitRequestFullscreen()}}}});an(z,"change",function(){var n=d.duration*(z.value/100);d.currentTime=n});an(d,"timeupdate",function(){var n=100/d.duration*d.currentTime;z.value=n});an(z,"mousedown",function(){d.pause()});an(z,"mouseup",function(){d.play()});an(C,"change",function(){d.volume=C.value})}an(d,"play",function(){if(bF.data("volume")=="mute"){d.muted=true}h.addClass("videoisplaying");if(bF.data("videoloop")=="loopandnoslidestop"){a.videoplaying=false;a.container.trigger("starttimer");a.container.trigger("revolution.slide.onvideostop")}else{a.videoplaying=true;a.container.trigger("stoptimer");a.container.trigger("revolution.slide.onvideoplay")}var L=bF.find(".tp-vid-play-pause")[0],N=bF.find(".tp-vid-mute")[0];if(L!=aK){L.innerHTML="Pause"}if(N!=aK&&d.muted){N.innerHTML="Unmute"}});an(d,"pause",function(){h.removeClass("videoisplaying");a.videoplaying=false;a.container.trigger("starttimer");a.container.trigger("revolution.slide.onvideostop");var n=bF.find(".tp-vid-play-pause")[0];if(n!=aK){n.innerHTML="Play"}});an(d,"ended",function(){h.removeClass("videoisplaying");a.videoplaying=false;a.container.trigger("starttimer");a.container.trigger("revolution.slide.onvideostop");if(a.nextslideatend==true){a.container.revnext()}})}var s=false;if(bF.data("autoplayonlyfirsttime")==true||bF.data("autoplayonlyfirsttime")=="true"){s=true}var I=16/9;if(bF.data("aspectratio")=="4:3"){I=4/3}h.data("mediaAspect",I);if(h.closest(".tp-caption").data("forcecover")==1){ax(h,a.container);h.addClass("fullcoveredvideo")}f.css({display:"block"});a.nextslideatend=bF.data("nextslideatend");if(bF.data("autoplay")==true||s==true){if(bF.data("videoloop")=="loopandnoslidestop"){a.videoplaying=false;a.container.trigger("starttimer");a.container.trigger("revolution.slide.onvideostop")}else{a.videoplaying=true;a.container.trigger("stoptimer");a.container.trigger("revolution.slide.onvideoplay")}if(bF.data("forcerewind")=="on"&&!h.hasClass("videoisplaying")){if(d.currentTime>0){d.currentTime=0}}if(bF.data("volume")=="mute"){d.muted=true}h.data("timerplay",setTimeout(function(){if(bF.data("forcerewind")=="on"&&!h.hasClass("videoisplaying")){if(d.currentTime>0){d.currentTime=0}}if(bF.data("volume")=="mute"){d.muted=true}d.play()},10+bF.data("start")))}if(h.data("ww")==aK){h.data("ww",f.attr("width"))}if(h.data("hh")==aK){h.data("hh",f.attr("height"))}if(!bF.hasClass("fullscreenvideo")&&bF.data("forcecover")==1){try{h.width(h.data("ww")*a.bw);h.height(h.data("hh")*a.bh)}catch(E){}}clearInterval(h.data("interval"))}}),100)})}if(bF.data("autoplay")==true){setTimeout(function(){if(bF.data("videoloop")!="loopandnoslidestop"){a.videoplaying=true;a.container.trigger("stoptimer")}},200);if(bF.data("videoloop")!="loopandnoslidestop"){a.videoplaying=true;a.container.trigger("stoptimer")}if(bF.data("autoplayonlyfirsttime")==true||bF.data("autoplayonlyfirsttime")=="true"){bF.data("autoplay",false);bF.data("autoplayonlyfirsttime",false)}}}var l=0;var bn=0;if(bF.find("img").length>0){var O=bF.find("img");if(O.width()==0){O.css({width:"auto"})}if(O.height()==0){O.css({height:"auto"})}if(O.data("ww")==aK&&O.width()>0){O.data("ww",O.width())}if(O.data("hh")==aK&&O.height()>0){O.data("hh",O.height())}var D=O.data("ww");var W=O.data("hh");if(D==aK){D=0}if(W==aK){W=0}O.width(D*a.bw);O.height(W*a.bh);l=O.width();bn=O.height()}else{if(bF.find("iframe").length>0||bF.find("video").length>0){var i=false,O=bF.find("iframe");if(O.length==0){O=bF.find("video");i=true}O.css({display:"block"});if(bF.data("ww")==aK){bF.data("ww",O.width())}if(bF.data("hh")==aK){bF.data("hh",O.height())}var D=bF.data("ww"),W=bF.data("hh");var c=bF;if(c.data("fsize")==aK){c.data("fsize",parseInt(c.css("font-size"),0)||0)}if(c.data("pt")==aK){c.data("pt",parseInt(c.css("paddingTop"),0)||0)}if(c.data("pb")==aK){c.data("pb",parseInt(c.css("paddingBottom"),0)||0)}if(c.data("pl")==aK){c.data("pl",parseInt(c.css("paddingLeft"),0)||0)}if(c.data("pr")==aK){c.data("pr",parseInt(c.css("paddingRight"),0)||0)}if(c.data("mt")==aK){c.data("mt",parseInt(c.css("marginTop"),0)||0)}if(c.data("mb")==aK){c.data("mb",parseInt(c.css("marginBottom"),0)||0)}if(c.data("ml")==aK){c.data("ml",parseInt(c.css("marginLeft"),0)||0)}if(c.data("mr")==aK){c.data("mr",parseInt(c.css("marginRight"),0)||0)}if(c.data("bt")==aK){c.data("bt",parseInt(c.css("borderTop"),0)||0)}if(c.data("bb")==aK){c.data("bb",parseInt(c.css("borderBottom"),0)||0)}if(c.data("bl")==aK){c.data("bl",parseInt(c.css("borderLeft"),0)||0)}if(c.data("br")==aK){c.data("br",parseInt(c.css("borderRight"),0)||0)}if(c.data("lh")==aK){c.data("lh",parseInt(c.css("lineHeight"),0)||0)}if(c.data("lh")=="auto"){c.data("lh",c.data("fsize")+4)}var bx=a.width,bJ=a.height;if(bx>a.startwidth){bx=a.startwidth}if(bJ>a.startheight){bJ=a.startheight}if(!bF.hasClass("fullscreenvideo")){bF.css({"font-size":c.data("fsize")*a.bw+"px","padding-top":c.data("pt")*a.bh+"px","padding-bottom":c.data("pb")*a.bh+"px","padding-left":c.data("pl")*a.bw+"px","padding-right":c.data("pr")*a.bw+"px","margin-top":c.data("mt")*a.bh+"px","margin-bottom":c.data("mb")*a.bh+"px","margin-left":c.data("ml")*a.bw+"px","margin-right":c.data("mr")*a.bw+"px","border-top":c.data("bt")*a.bh+"px","border-bottom":c.data("bb")*a.bh+"px","border-left":c.data("bl")*a.bw+"px","border-right":c.data("br")*a.bw+"px","line-height":c.data("lh")*a.bh+"px",height:W*a.bh+"px"})}else{k=0;w=0;bF.data("x",0);bF.data("y",0);var bD=a.height;if(a.autoHeight=="on"){bD=a.container.height()}bF.css({width:a.width,height:bD})}if(i==false){O.width(D*a.bw);O.height(W*a.bh)}else{if(bF.data("forcecover")!=1&&!bF.hasClass("fullscreenvideo")){O.width(D*a.bw);O.height(W*a.bh)}}l=O.width();bn=O.height()}else{bF.find(".tp-resizeme, .tp-resizeme *").each(function(){aN(a2(this),a)});if(bF.hasClass("tp-resizeme")){bF.find("*").each(function(){aN(a2(this),a)})}aN(bF,a);bn=bF.outerHeight(true);l=bF.outerWidth(true);var bk=bF.outerHeight();var bh=bF.css("backgroundColor");bF.find(".frontcorner").css({borderWidth:bk+"px",left:0-bk+"px",borderRight:"0px solid transparent",borderTopColor:bh});bF.find(".frontcornertop").css({borderWidth:bk+"px",left:0-bk+"px",borderRight:"0px solid transparent",borderBottomColor:bh});bF.find(".backcorner").css({borderWidth:bk+"px",right:0-bk+"px",borderLeft:"0px solid transparent",borderBottomColor:bh});bF.find(".backcornertop").css({borderWidth:bk+"px",right:0-bk+"px",borderLeft:"0px solid transparent",borderTopColor:bh})}}if(a.fullScreenAlignForce=="on"){k=0;w=0}if(bF.data("voffset")==aK){bF.data("voffset",0)}if(bF.data("hoffset")==aK){bF.data("hoffset",0)}var U=bF.data("voffset")*bu;var bj=bF.data("hoffset")*bu;var bl=a.startwidth*bu;var r=a.startheight*bu;if(a.fullScreenAlignForce=="on"){bl=a.container.width();r=a.container.height()}if(bF.data("x")=="center"||bF.data("xcenter")=="center"){bF.data("xcenter","center");bF.data("x",bl/2-bF.outerWidth(true)/2+bj)}if(bF.data("x")=="left"||bF.data("xleft")=="left"){bF.data("xleft","left");bF.data("x",0/bu+bj)}if(bF.data("x")=="right"||bF.data("xright")=="right"){bF.data("xright","right");bF.data("x",(bl-bF.outerWidth(true)+bj)/bu)}if(bF.data("y")=="center"||bF.data("ycenter")=="center"){bF.data("ycenter","center");bF.data("y",r/2-bF.outerHeight(true)/2+U)}if(bF.data("y")=="top"||bF.data("ytop")=="top"){bF.data("ytop","top");bF.data("y",0/a.bh+U)}if(bF.data("y")=="bottom"||bF.data("ybottom")=="bottom"){bF.data("ybottom","bottom");bF.data("y",(r-bF.outerHeight(true)+U)/bu)}if(bF.data("start")==aK){bF.data("start",1000)}var bg=bF.data("easing");if(bg==aK){bg="punchgs.Power1.easeOut"}var bi=bF.data("start")/1000,bf=bF.data("speed")/1000;if(bF.data("x")=="center"||bF.data("xcenter")=="center"){var bz=bF.data("x")+k}else{var bz=bu*bF.data("x")+k}if(bF.data("y")=="center"||bF.data("ycenter")=="center"){var P=bF.data("y")+w}else{var P=a.bh*bF.data("y")+w}punchgs.TweenLite.set(bF,{top:P,left:bz,overwrite:"auto"});if(bI==0){bv=true}if(bF.data("timeline")!=aK&&!bv){if(bI!=2){bF.data("timeline").gotoAndPlay(0)}bv=true}if(!bv){if(bF.data("timeline")!=aK){}var B=new punchgs.TimelineLite({smoothChildTiming:true,onStart:x});B.pause();if(a.fullScreenAlignForce=="on"){}var a8=bF;if(bF.data("mySplitText")!=aK){bF.data("mySplitText").revert()}if(bF.data("splitin")=="chars"||bF.data("splitin")=="words"||bF.data("splitin")=="lines"||bF.data("splitout")=="chars"||bF.data("splitout")=="words"||bF.data("splitout")=="lines"){if(bF.find("a").length>0){bF.data("mySplitText",new punchgs.SplitText(bF.find("a"),{type:"lines,words,chars",charsClass:"tp-splitted",wordsClass:"tp-splitted",linesClass:"tp-splitted"}))}else{if(bF.find(".tp-layer-inner-rotation").length>0){bF.data("mySplitText",new punchgs.SplitText(bF.find(".tp-layer-inner-rotation"),{type:"lines,words,chars",charsClass:"tp-splitted",wordsClass:"tp-splitted",linesClass:"tp-splitted"}))}else{bF.data("mySplitText",new punchgs.SplitText(bF,{type:"lines,words,chars",charsClass:"tp-splitted",wordsClass:"tp-splitted",linesClass:"tp-splitted"}))}}bF.addClass("splitted")}if(bF.data("splitin")=="chars"){a8=bF.data("mySplitText").chars}if(bF.data("splitin")=="words"){a8=bF.data("mySplitText").words}if(bF.data("splitin")=="lines"){a8=bF.data("mySplitText").lines}var M=ak();var F=ak();if(bF.data("repeat")!=aK){repeatV=bF.data("repeat")}if(bF.data("yoyo")!=aK){yoyoV=bF.data("yoyo")}if(bF.data("repeatdelay")!=aK){repeatdelayV=bF.data("repeatdelay")}var ba=bF.attr("class");if(ba.match("customin")){M=at(M,bF.data("customin"))}else{if(ba.match("randomrotate")){M.scale=Math.random()*3+1;M.rotation=Math.round(Math.random()*200-100);M.x=Math.round(Math.random()*200-100);M.y=Math.round(Math.random()*200-100)}else{if(ba.match("lfr")||ba.match("skewfromright")){M.x=15+a.width}else{if(ba.match("lfl")||ba.match("skewfromleft")){M.x=-15-l}else{if(ba.match("sfl")||ba.match("skewfromleftshort")){M.x=-50}else{if(ba.match("sfr")||ba.match("skewfromrightshort")){M.x=50}else{if(ba.match("lft")){M.y=-25-bn}else{if(ba.match("lfb")){M.y=25+a.height}else{if(ba.match("sft")){M.y=-50}else{if(ba.match("sfb")){M.y=50}}}}}}}}}}if(ba.match("skewfromright")||bF.hasClass("skewfromrightshort")){M.skewX=-85}else{if(ba.match("skewfromleft")||bF.hasClass("skewfromleftshort")){M.skewX=85}}if(ba.match("fade")||ba.match("sft")||ba.match("sfl")||ba.match("sfb")||ba.match("skewfromleftshort")||ba.match("sfr")||ba.match("skewfromrightshort")){M.opacity=0}if(av().toLowerCase()=="safari"){}var bw=bF.data("elementdelay")==aK?0:bF.data("elementdelay");F.ease=M.ease=bF.data("easing")==aK?punchgs.Power1.easeInOut:bF.data("easing");M.data=new Object;M.data.oldx=M.x;M.data.oldy=M.y;F.data=new Object;F.data.oldx=F.x;F.data.oldy=F.y;M.x=M.x*bu;M.y=M.y*bu;var bK=new punchgs.TimelineLite;if(bI!=2){if(ba.match("customin")){if(a8!=bF){B.add(punchgs.TweenLite.set(bF,{force3D:"auto",opacity:1,scaleX:1,scaleY:1,rotationX:0,rotationY:0,rotationZ:0,skewX:0,skewY:0,z:0,x:0,y:0,visibility:"visible",delay:0,overwrite:"all"}))}M.visibility="hidden";F.visibility="visible";F.overwrite="all";F.opacity=1;F.onComplete=g();F.delay=bi;F.force3D="auto";B.add(bK.staggerFromTo(a8,bf,M,F,bw),"frame0")}else{M.visibility="visible";M.transformPerspective=600;if(a8!=bF){B.add(punchgs.TweenLite.set(bF,{force3D:"auto",opacity:1,scaleX:1,scaleY:1,rotationX:0,rotationY:0,rotationZ:0,skewX:0,skewY:0,z:0,x:0,y:0,visibility:"visible",delay:0,overwrite:"all"}))}F.visibility="visible";F.delay=bi;F.onComplete=g();F.opacity=1;F.force3D="auto";if(ba.match("randomrotate")&&a8!=bF){for(var bA=0;bA<a8.length;bA++){var X=new Object;var bo=new Object;a2.extend(X,M);a2.extend(bo,F);M.scale=Math.random()*3+1;M.rotation=Math.round(Math.random()*200-100);M.x=Math.round(Math.random()*200-100);M.y=Math.round(Math.random()*200-100);if(bA!=0){bo.delay=bi+bA*bw}B.append(punchgs.TweenLite.fromTo(a8[bA],bf,X,bo),"frame0")}}else{B.add(bK.staggerFromTo(a8,bf,M,F,bw),"frame0")}}}bF.data("timeline",B);var bm=new Array;if(bF.data("frames")!=aK){var be=bF.data("frames");be=be.replace(/\s+/g,"");be=be.replace("{","");var bd=be.split("}");a2.each(bd,function(f,d){if(d.length>0){var h=az(d);ad(bF,a,h,"frame"+(f+10),bu)}})}B=bF.data("timeline");if(bF.data("end")!=aK&&(bI==-1||bI==2)){ac(bF,a,bF.data("end")/1000,M,"frame99",bu)}else{if(bI==-1||bI==2){ac(bF,a,999999,M,"frame99",bu)}else{ac(bF,a,200,M,"frame99",bu)}}B=bF.data("timeline");bF.data("timeline",B);ai(bF,bu);B.resume()}}if(bv){af(bF);ai(bF,bu);if(bF.data("timeline")!=aK){var bG=bF.data("timeline").getTweensOf();a2.each(bG,function(p,z){if(z.vars.data!=aK){var h=z.vars.data.oldx*bu;var d=z.vars.data.oldy*bu;if(z.progress()!=1&&z.progress()!=0){try{z.vars.x=h;z.vary.y=d}catch(f){}}else{if(z.progress()==1){punchgs.TweenLite.set(z.target,{x:h,y:d})}}}})}}});var v=a2("body").find("#"+a.container.attr("id")).find(".tp-bannertimer");v.data("opt",a);if(y!=aK){setTimeout(function(){y.resume()},30)}};var av=function(){var c=navigator.appName,a=navigator.userAgent,d;var b=a.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);if(b&&(d=a.match(/version\/([\.\d]+)/i))!=null){b[2]=d[1]}b=b?[b[1],b[2]]:[c,navigator.appVersion,"-?"];return b[0]};var ar=function(){var c=navigator.appName,a=navigator.userAgent,d;var b=a.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);if(b&&(d=a.match(/version\/([\.\d]+)/i))!=null){b[2]=d[1]}b=b?[b[1],b[2]]:[c,navigator.appVersion,"-?"];return b[1]};var aN=function(a,b){if(a.data("fsize")==aK){a.data("fsize",parseInt(a.css("font-size"),0)||0)}if(a.data("pt")==aK){a.data("pt",parseInt(a.css("paddingTop"),0)||0)}if(a.data("pb")==aK){a.data("pb",parseInt(a.css("paddingBottom"),0)||0)}if(a.data("pl")==aK){a.data("pl",parseInt(a.css("paddingLeft"),0)||0)}if(a.data("pr")==aK){a.data("pr",parseInt(a.css("paddingRight"),0)||0)}if(a.data("mt")==aK){a.data("mt",parseInt(a.css("marginTop"),0)||0)}if(a.data("mb")==aK){a.data("mb",parseInt(a.css("marginBottom"),0)||0)}if(a.data("ml")==aK){a.data("ml",parseInt(a.css("marginLeft"),0)||0)}if(a.data("mr")==aK){a.data("mr",parseInt(a.css("marginRight"),0)||0)}if(a.data("bt")==aK){a.data("bt",parseInt(a.css("borderTopWidth"),0)||0)}if(a.data("bb")==aK){a.data("bb",parseInt(a.css("borderBottomWidth"),0)||0)}if(a.data("bl")==aK){a.data("bl",parseInt(a.css("borderLeftWidth"),0)||0)}if(a.data("br")==aK){a.data("br",parseInt(a.css("borderRightWidth"),0)||0)}if(a.data("ls")==aK){a.data("ls",parseInt(a.css("letterSpacing"),0)||0)}if(a.data("lh")==aK){a.data("lh",parseInt(a.css("lineHeight"),0)||"auto")}if(a.data("minwidth")==aK){a.data("minwidth",parseInt(a.css("minWidth"),0)||0)}if(a.data("minheight")==aK){a.data("minheight",parseInt(a.css("minHeight"),0)||0)}if(a.data("maxwidth")==aK){a.data("maxwidth",parseInt(a.css("maxWidth"),0)||"none")}if(a.data("maxheight")==aK){a.data("maxheight",parseInt(a.css("maxHeight"),0)||"none")}if(a.data("wii")==aK){a.data("wii",parseInt(a.css("width"),0)||0)}if(a.data("hii")==aK){a.data("hii",parseInt(a.css("height"),0)||0)}if(a.data("wan")==aK){a.data("wan",a.css("-webkit-transition"))}if(a.data("moan")==aK){a.data("moan",a.css("-moz-animation-transition"))}if(a.data("man")==aK){a.data("man",a.css("-ms-animation-transition"))}if(a.data("ani")==aK){a.data("ani",a.css("transition"))}if(a.data("lh")=="auto"){a.data("lh",a.data("fsize")+4)}if(!a.hasClass("tp-splitted")){a.css("-webkit-transition","none");a.css("-moz-transition","none");a.css("-ms-transition","none");a.css("transition","none");punchgs.TweenLite.set(a,{fontSize:Math.round(a.data("fsize")*b.bw)+"px",letterSpacing:Math.floor(a.data("ls")*b.bw)+"px",paddingTop:Math.round(a.data("pt")*b.bh)+"px",paddingBottom:Math.round(a.data("pb")*b.bh)+"px",paddingLeft:Math.round(a.data("pl")*b.bw)+"px",paddingRight:Math.round(a.data("pr")*b.bw)+"px",marginTop:a.data("mt")*b.bh+"px",marginBottom:a.data("mb")*b.bh+"px",marginLeft:a.data("ml")*b.bw+"px",marginRight:a.data("mr")*b.bw+"px",borderTopWidth:Math.round(a.data("bt")*b.bh)+"px",borderBottomWidth:Math.round(a.data("bb")*b.bh)+"px",borderLeftWidth:Math.round(a.data("bl")*b.bw)+"px",borderRightWidth:Math.round(a.data("br")*b.bw)+"px",lineHeight:Math.round(a.data("lh")*b.bh)+"px",minWidth:a.data("minwidth")*b.bw+"px",minHeight:a.data("minheight")*b.bh+"px",overwrite:"auto"});setTimeout(function(){a.css("-webkit-transition",a.data("wan"));a.css("-moz-transition",a.data("moan"));a.css("-ms-transition",a.data("man"));a.css("transition",a.data("ani"))},30);if(a.data("maxheight")!="none"){a.css({maxHeight:a.data("maxheight")*b.bh+"px"})}if(a.data("maxwidth")!="none"){a.css({maxWidth:a.data("maxwidth")*b.bw+"px"})}}};var ai=function(b,a){b.find(".rs-pendulum").each(function(){var j=a2(this);if(j.data("timeline")==aK){j.data("timeline",new punchgs.TimelineLite);var f=j.data("startdeg")==aK?-20:j.data("startdeg"),g=j.data("enddeg")==aK?20:j.data("enddeg"),h=j.data("speed")==aK?2:j.data("speed"),d=j.data("origin")==aK?"50% 50%":j.data("origin"),c=j.data("easing")==aK?punchgs.Power2.easeInOut:j.data("ease");f=f*a;g=g*a;j.data("timeline").append(new punchgs.TweenLite.fromTo(j,h,{force3D:"auto",rotation:f,transformOrigin:d},{rotation:g,ease:c}));j.data("timeline").append(new punchgs.TweenLite.fromTo(j,h,{force3D:"auto",rotation:g,transformOrigin:d},{rotation:f,ease:c,onComplete:function(){j.data("timeline").restart()}}))}});b.find(".rs-rotate").each(function(){var f=a2(this);if(f.data("timeline")==aK){f.data("timeline",new punchgs.TimelineLite);var c=f.data("startdeg")==aK?0:f.data("startdeg"),d=f.data("enddeg")==aK?360:f.data("enddeg");speed=f.data("speed")==aK?2:f.data("speed"),origin=f.data("origin")==aK?"50% 50%":f.data("origin"),easing=f.data("easing")==aK?punchgs.Power2.easeInOut:f.data("easing");c=c*a;d=d*a;f.data("timeline").append(new punchgs.TweenLite.fromTo(f,speed,{force3D:"auto",rotation:c,transformOrigin:origin},{rotation:d,ease:easing,onComplete:function(){f.data("timeline").restart()}}))}});b.find(".rs-slideloop").each(function(){var l=a2(this);if(l.data("timeline")==aK){l.data("timeline",new punchgs.TimelineLite);var g=l.data("xs")==aK?0:l.data("xs"),h=l.data("ys")==aK?0:l.data("ys"),k=l.data("xe")==aK?0:l.data("xe"),d=l.data("ye")==aK?0:l.data("ye"),c=l.data("speed")==aK?2:l.data("speed"),j=l.data("easing")==aK?punchgs.Power2.easeInOut:l.data("easing");g=g*a;h=h*a;k=k*a;d=d*a;l.data("timeline").append(new punchgs.TweenLite.fromTo(l,c,{force3D:"auto",x:g,y:h},{x:k,y:d,ease:j}));l.data("timeline").append(new punchgs.TweenLite.fromTo(l,c,{force3D:"auto",x:k,y:d},{x:g,y:h,onComplete:function(){l.data("timeline").restart()}}))}});b.find(".rs-pulse").each(function(){var h=a2(this);if(h.data("timeline")==aK){h.data("timeline",new punchgs.TimelineLite);var f=h.data("zoomstart")==aK?0:h.data("zoomstart"),c=h.data("zoomend")==aK?0:h.data("zoomend"),d=h.data("speed")==aK?2:h.data("speed"),g=h.data("easing")==aK?punchgs.Power2.easeInOut:h.data("easing");h.data("timeline").append(new punchgs.TweenLite.fromTo(h,d,{force3D:"auto",scale:f},{scale:c,ease:g}));h.data("timeline").append(new punchgs.TweenLite.fromTo(h,d,{force3D:"auto",scale:c},{scale:f,onComplete:function(){h.data("timeline").restart()}}))}});b.find(".rs-wave").each(function(){var j=a2(this);if(j.data("timeline")==aK){j.data("timeline",new punchgs.TimelineLite);var f=j.data("angle")==aK?10:j.data("angle"),g=j.data("radius")==aK?10:j.data("radius"),h=j.data("speed")==aK?-20:j.data("speed"),d=j.data("origin")==aK?-20:j.data("origin");f=f*a;g=g*a;var c={a:0,ang:f,element:j,unit:g};j.data("timeline").append(new punchgs.TweenLite.fromTo(c,h,{a:360},{a:0,force3D:"auto",ease:punchgs.Linear.easeNone,onUpdate:function(){var i=c.a*(Math.PI/180);punchgs.TweenLite.to(c.element,0.1,{force3D:"auto",x:Math.cos(i)*c.unit,y:c.unit*(1-Math.sin(i))})},onComplete:function(){j.data("timeline").restart()}}))}})};var af=function(a){a.find(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function(){var b=a2(this);if(b.data("timeline")!=aK){b.data("timeline").pause();b.data("timeline",null)}})};var aE=function(f,c){var a=0;var b=f.find(".tp-caption"),d=c.container.find(".tp-static-layers").find(".tp-caption");a2.each(d,function(h,g){b.push(g)});b.each(function(j){var B=-1;var i=a2(this);if(i.hasClass("tp-static-layer")){if(i.data("startslide")==-1||i.data("startslide")=="-1"){i.data("startslide",0)}if(i.data("endslide")==-1||i.data("endslide")=="-1"){i.data("endslide",c.slideamount)}if(i.hasClass("tp-is-shown")){if(i.data("startslide")>c.next||i.data("endslide")<c.next){B=2;i.removeClass("tp-is-shown")}else{B=0}}else{B=2}}if(B!=0){af(i);if(i.find("iframe").length>0){punchgs.TweenLite.to(i.find("iframe"),0.2,{autoAlpha:0});if(aq()){i.find("iframe").remove()}try{var A=i.find("iframe");var y=A.attr("id");var t=$f(y);t.api("pause");clearTimeout(i.data("timerplay"))}catch(q){}try{var x=i.data("player");x.stopVideo();clearTimeout(i.data("timerplay"))}catch(q){}}if(i.find("video").length>0){try{i.find("video").each(function(l){var o=a2(this).parent();var m=o.attr("id");clearTimeout(o.data("timerplay"));var h=this;h.pause()})}catch(q){}}try{var r=i.data("timeline");var g=r.getLabelTime("frame99");var w=r.time();if(g>w){var z=r.getTweensOf(i);a2.each(z,function(l,h){if(l!=0){h.pause()}});if(i.css("opacity")!=0){var k=i.data("endspeed")==aK?i.data("speed"):i.data("endspeed");if(k>a){a=k}r.play("frame99")}else{r.progress(1,false)}}}catch(q){}}});return a};var ad=function(h,k,g,d,f){var j=h.data("timeline");var c=new punchgs.TimelineLite;var b=h;if(g.typ=="chars"){b=h.data("mySplitText").chars}else{if(g.typ=="words"){b=h.data("mySplitText").words}else{if(g.typ=="lines"){b=h.data("mySplitText").lines}}}g.animation.ease=g.ease;if(g.animation.rotationZ!=aK){g.animation.rotation=g.animation.rotationZ}g.animation.data=new Object;g.animation.data.oldx=g.animation.x;g.animation.data.oldy=g.animation.y;g.animation.x=g.animation.x*f;g.animation.y=g.animation.y*f;j.add(c.staggerTo(b,g.speed,g.animation,g.elementdelay),g.start);j.addLabel(d,g.start);h.data("timeline",j)};var ac=function(v,j,b,m,z,g){var y=v.data("timeline"),x=new punchgs.TimelineLite;var t=ak(),k=v.data("endspeed")==aK?v.data("speed"):v.data("endspeed"),w=v.attr("class");t.ease=v.data("endeasing")==aK?punchgs.Power1.easeInOut:v.data("endeasing");k=k/1000;if(w.match("ltr")||w.match("ltl")||w.match("str")||w.match("stl")||w.match("ltt")||w.match("ltb")||w.match("stt")||w.match("stb")||w.match("skewtoright")||w.match("skewtorightshort")||w.match("skewtoleft")||w.match("skewtoleftshort")||w.match("fadeout")||w.match("randomrotateout")){if(w.match("skewtoright")||w.match("skewtorightshort")){t.skewX=35}else{if(w.match("skewtoleft")||w.match("skewtoleftshort")){t.skewX=-35}}if(w.match("ltr")||w.match("skewtoright")){t.x=j.width+60}else{if(w.match("ltl")||w.match("skewtoleft")){t.x=0-(j.width+60)}else{if(w.match("ltt")){t.y=0-(j.height+60)}else{if(w.match("ltb")){t.y=j.height+60}else{if(w.match("str")||w.match("skewtorightshort")){t.x=50;t.opacity=0}else{if(w.match("stl")||w.match("skewtoleftshort")){t.x=-50;t.opacity=0}else{if(w.match("stt")){t.y=-50;t.opacity=0}else{if(w.match("stb")){t.y=50;t.opacity=0}else{if(w.match("randomrotateout")){t.x=Math.random()*j.width;t.y=Math.random()*j.height;t.scale=Math.random()*2+0.3;t.rotation=Math.random()*360-180;t.opacity=0}else{if(w.match("fadeout")){t.opacity=0}}}}}}}}}}if(w.match("skewtorightshort")){t.x=270}else{if(w.match("skewtoleftshort")){t.x=-270}}t.data=new Object;t.data.oldx=t.x;t.data.oldy=t.y;t.x=t.x*g;t.y=t.y*g;t.overwrite="auto";var q=v;var q=v;if(v.data("splitout")=="chars"){q=v.data("mySplitText").chars}else{if(v.data("splitout")=="words"){q=v.data("mySplitText").words}else{if(v.data("splitout")=="lines"){q=v.data("mySplitText").lines}}}var d=v.data("endelementdelay")==aK?0:v.data("endelementdelay");y.add(x.staggerTo(q,k,t,d),b)}else{if(v.hasClass("customout")){t=at(t,v.data("customout"));var q=v;if(v.data("splitout")=="chars"){q=v.data("mySplitText").chars}else{if(v.data("splitout")=="words"){q=v.data("mySplitText").words}else{if(v.data("splitout")=="lines"){q=v.data("mySplitText").lines}}}var d=v.data("endelementdelay")==aK?0:v.data("endelementdelay");t.onStart=function(){punchgs.TweenLite.set(v,{transformPerspective:t.transformPerspective,transformOrigin:t.transformOrigin,overwrite:"auto"})};t.data=new Object;t.data.oldx=t.x;t.data.oldy=t.y;t.x=t.x*g;t.y=t.y*g;y.add(x.staggerTo(q,k,t,d),b)}else{m.delay=0;y.add(punchgs.TweenLite.to(v,k,m),b)}}y.addLabel(z,b);v.data("timeline",y)};var ae=function(a,c){a.children().each(function(){try{a2(this).die("click")}catch(d){}try{a2(this).die("mouseenter")}catch(d){}try{a2(this).die("mouseleave")}catch(d){}try{a2(this).unbind("hover")}catch(d){}});try{a.die("click","mouseenter","mouseleave")}catch(b){}clearInterval(c.cdint);a=null};var aD=function(d,c){c.cd=0;c.loop=0;if(c.stopAfterLoops!=aK&&c.stopAfterLoops>-1){c.looptogo=c.stopAfterLoops}else{c.looptogo=9999999}if(c.stopAtSlide!=aK&&c.stopAtSlide>-1){c.lastslidetoshow=c.stopAtSlide}else{c.lastslidetoshow=999}c.stopLoop="off";if(c.looptogo==0){c.stopLoop="on"}if(c.slideamount>1&&!(c.stopAfterLoops==0&&c.stopAtSlide==1)){var a=d.find(".tp-bannertimer");d.on("stoptimer",function(){var f=a2(this).find(".tp-bannertimer");f.data("tween").pause();if(c.hideTimerBar=="on"){f.css({visibility:"hidden"})}});d.on("starttimer",function(){if(c.conthover!=1&&c.videoplaying!=true&&c.width>c.hideSliderAtLimit&&c.bannertimeronpause!=true&&c.overnav!=true){if(c.stopLoop=="on"&&c.next==c.lastslidetoshow-1||c.noloopanymore==1){c.noloopanymore=1}else{a.css({visibility:"visible"});a.data("tween").resume()}}if(c.hideTimerBar=="on"){a.css({visibility:"hidden"})}});d.on("restarttimer",function(){var f=a2(this).find(".tp-bannertimer");if(c.stopLoop=="on"&&c.next==c.lastslidetoshow-1||c.noloopanymore==1){c.noloopanymore=1}else{f.css({visibility:"visible"});f.data("tween").kill();f.data("tween",punchgs.TweenLite.fromTo(f,c.delay/1000,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:b,delay:1}))}if(c.hideTimerBar=="on"){f.css({visibility:"hidden"})}});d.on("nulltimer",function(){a.data("tween").pause(0);if(c.hideTimerBar=="on"){a.css({visibility:"hidden"})}});var b=function(){if(a2("body").find(d).length==0){ae(d,c);clearInterval(c.cdint)}d.trigger("revolution.slide.slideatend");if(d.data("conthover-changed")==1){c.conthover=d.data("conthover");d.data("conthover-changed",0)}c.act=c.next;c.next=c.next+1;if(c.next>d.find(">ul >li").length-1){c.next=0;c.looptogo=c.looptogo-1;if(c.looptogo<=0){c.stopLoop="on"}}if(c.stopLoop=="on"&&c.next==c.lastslidetoshow-1){d.find(".tp-bannertimer").css({visibility:"hidden"});d.trigger("revolution.slide.onstop");c.noloopanymore=1}else{a.data("tween").restart()}am(d,c)};a.data("tween",punchgs.TweenLite.fromTo(a,c.delay/1000,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:b,delay:1}));a.data("opt",c);d.hover(function(){if(c.onHoverStop=="on"&&!aq()){d.trigger("stoptimer");d.trigger("revolution.slide.onpause");var f=d.find(">ul >li:eq("+c.next+") .slotholder");f.find(".defaultimg").each(function(){var g=a2(this);if(g.data("kenburn")!=aK){g.data("kenburn").pause()}})}},function(){if(d.data("conthover")!=1){d.trigger("revolution.slide.onresume");d.trigger("starttimer");var f=d.find(">ul >li:eq("+c.next+") .slotholder");f.find(".defaultimg").each(function(){var g=a2(this);if(g.data("kenburn")!=aK){g.data("kenburn").play()}})}})}};var aq=function(){var b=["android","webos","iphone","ipad","blackberry","Android","webos",,"iPod","iPhone","iPad","Blackberry","BlackBerry"];var a=false;for(var c in b){if(navigator.userAgent.split(b[c]).length>1){a=true}}return a};var ap=function(g,c,j){var f=c.data("owidth");var b=c.data("oheight");if(f/b>j.width/j.height){var d=j.container.width()/f;var h=b*d;var a=h/j.container.height()*g;g=g*(100/a);a=100;g=g;return g+"% "+a+"% 1"}else{var d=j.container.width()/f;var h=b*d;var a=h/j.container.height()*g;return g+"% "+a+"%"}};var aj=function(I,F,L,D){try{var H=I.find(">ul:first-child >li:eq("+F.act+")")}catch(B){var H=I.find(">ul:first-child >li:eq(1)")}F.lastslide=F.act;var P=I.find(">ul:first-child >li:eq("+F.next+")"),K=P.find(".slotholder"),R=K.data("bgposition"),M=K.data("bgpositionend"),G=K.data("zoomstart")/100,Q=K.data("zoomend")/100,A=K.data("rotationstart"),J=K.data("rotationend"),O=K.data("bgfit"),q=K.data("bgfitend"),U=K.data("easeme"),z=K.data("duration")/1000,C=100;if(O==aK){O=100}if(q==aK){q=100}var j=O,t=q;O=ap(O,K,F);q=ap(q,K,F);C=ap(100,K,F);if(G==aK){G=1}if(Q==aK){Q=1}if(A==aK){A=0}if(J==aK){J=0}if(G<1){G=1}if(Q<1){Q=1}var a=new Object;a.w=parseInt(C.split(" ")[0],0),a.h=parseInt(C.split(" ")[1],0);var k=false;if(C.split(" ")[2]=="1"){k=true}K.find(".defaultimg").each(function(){var w=a2(this);if(K.find(".kenburnimg").length==0){K.append('<div class="kenburnimg" style="position:absolute;z-index:1;width:100%;height:100%;top:0px;left:0px;"><img src="'+w.attr("src")+'" style="-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;position:absolute;width:'+a.w+"%;height:"+a.h+'%;"></div>')}else{K.find(".kenburnimg img").css({width:a.w+"%",height:a.h+"%"})}var g=K.find(".kenburnimg img");var h=au(F,R,O,g,k),c=au(F,M,q,g,k);if(k){h.w=j/100;c.w=t/100}if(D){punchgs.TweenLite.set(g,{autoAlpha:0,transformPerspective:1200,transformOrigin:"0% 0%",top:0,left:0,scale:h.w,x:h.x,y:h.y});var s=h.w,l=s*g.width()-F.width,b=s*g.height()-F.height,m=Math.abs(h.x/l*100),r=Math.abs(h.y/b*100);if(b==0){r=0}if(l==0){m=0}w.data("bgposition",m+"% "+r+"%");if(!a6(8)){w.data("currotate",ab(g))}if(!a6(8)){w.data("curscale",a.w*s+"%  "+(a.h*s+"%"))}K.find(".kenburnimg").remove()}else{w.data("kenburn",punchgs.TweenLite.fromTo(g,z,{autoAlpha:1,force3D:punchgs.force3d,transformOrigin:"0% 0%",top:0,left:0,scale:h.w,x:h.x,y:h.y},{autoAlpha:1,rotationZ:J,ease:U,x:c.x,y:c.y,scale:c.w,onUpdate:function(){var p=g[0]._gsTransform.scaleX;var f=p*g.width()-F.width,n=p*g.height()-F.height,v=Math.abs(g[0]._gsTransform.x/f*100),d=Math.abs(g[0]._gsTransform.y/n*100);if(n==0){d=0}if(f==0){v=0}w.data("bgposition",v+"% "+d+"%");if(!a6(8)){w.data("currotate",ab(g))}if(!a6(8)){w.data("curscale",a.w*p+"%  "+(a.h*p+"%"))}}}))}})};var au=function(f,b,g,d,a){var c=new Object;if(!a){c.w=parseInt(g.split(" ")[0],0)/100}else{c.w=parseInt(g.split(" ")[1],0)/100}switch(b){case"left top":case"top left":c.x=0;c.y=0;break;case"center top":case"top center":c.x=((0-d.width())*c.w+parseInt(f.width,0))/2;c.y=0;break;case"top right":case"right top":c.x=(0-d.width())*c.w+parseInt(f.width,0);c.y=0;break;case"center left":case"left center":c.x=0;c.y=((0-d.height())*c.w+parseInt(f.height,0))/2;break;case"center center":c.x=((0-d.width())*c.w+parseInt(f.width,0))/2;c.y=((0-d.height())*c.w+parseInt(f.height,0))/2;break;case"center right":case"right center":c.x=(0-d.width())*c.w+parseInt(f.width,0);c.y=((0-d.height())*c.w+parseInt(f.height,0))/2;break;case"bottom left":case"left bottom":c.x=0;c.y=(0-d.height())*c.w+parseInt(f.height,0);break;case"bottom center":case"center bottom":c.x=((0-d.width())*c.w+parseInt(f.width,0))/2;c.y=(0-d.height())*c.w+parseInt(f.height,0);break;case"bottom right":case"right bottom":c.x=(0-d.width())*c.w+parseInt(f.width,0);c.y=(0-d.height())*c.w+parseInt(f.height,0);break}return c};var ab=function(f){var b=f.css("-webkit-transform")||f.css("-moz-transform")||f.css("-ms-transform")||f.css("-o-transform")||f.css("transform");if(b!=="none"){var g=b.split("(")[1].split(")")[0].split(",");var d=g[0];var a=g[1];var c=Math.round(Math.atan2(a,d)*(180/Math.PI))}else{var c=0}return c<0?c+=360:c};var aa=function(j,g){try{var d=j.find(">ul:first-child >li:eq("+g.act+")")}catch(f){var d=j.find(">ul:first-child >li:eq(1)")}g.lastslide=g.act;var h=j.find(">ul:first-child >li:eq("+g.next+")");var c=d.find(".slotholder");var b=h.find(".slotholder");j.find(".defaultimg").each(function(){var a=a2(this);punchgs.TweenLite.killTweensOf(a,false);punchgs.TweenLite.set(a,{scale:1,rotationZ:0});punchgs.TweenLite.killTweensOf(a.data("kenburn img"),false);if(a.data("kenburn")!=aK){a.data("kenburn").pause()}if(a.data("currotate")!=aK&&a.data("bgposition")!=aK&&a.data("curscale")!=aK){punchgs.TweenLite.set(a,{rotation:a.data("currotate"),backgroundPosition:a.data("bgposition"),backgroundSize:a.data("curscale")})}if(a!=aK&&a.data("kenburn img")!=aK&&a.data("kenburn img").length>0){punchgs.TweenLite.set(a.data("kenburn img"),{autoAlpha:0})}})};var aO=function(a,b){if(aq()&&b.parallaxDisableOnMobile=="on"){return false}a.find(">ul:first-child >li").each(function(){var c=a2(this);for(var d=1;d<=10;d++){c.find(".rs-parallaxlevel-"+d).each(function(){var f=a2(this);f.wrap('<div style="position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:'+f.css("zIndex")+'" class="tp-parallax-container" data-parallaxlevel="'+b.parallaxLevels[d-1]+'"></div>')})}});if(b.parallax=="mouse"||b.parallax=="scroll+mouse"||b.parallax=="mouse+scroll"){a.mouseenter(function(g){var j=a.find(".current-sr-slide-visible");var f=a.offset().top,c=a.offset().left,d=g.pageX-c,h=g.pageY-f;j.data("enterx",d);j.data("entery",h)});a.on("mousemove.hoverdir, mouseleave.hoverdir",function(k){var h=a.find(".current-sr-slide-visible");switch(k.type){case"mousemove":var j=a.offset().top,n=a.offset().left,g=h.data("enterx"),d=h.data("entery"),m=g-(k.pageX-n),c=d-(k.pageY-j);h.find(".tp-parallax-container").each(function(){var l=a2(this),p=parseInt(l.data("parallaxlevel"),0)/100,f=m*p,o=c*p;if(b.parallax=="scroll+mouse"||b.parallax=="mouse+scroll"){punchgs.TweenLite.to(l,0.4,{force3D:"auto",x:f,ease:punchgs.Power3.easeOut,overwrite:"all"})}else{punchgs.TweenLite.to(l,0.4,{force3D:"auto",x:f,y:o,ease:punchgs.Power3.easeOut,overwrite:"all"})}});break;case"mouseleave":h.find(".tp-parallax-container").each(function(){var f=a2(this);if(b.parallax=="scroll+mouse"||b.parallax=="mouse+scroll"){punchgs.TweenLite.to(f,1.5,{force3D:"auto",x:0,ease:punchgs.Power3.easeOut})}else{punchgs.TweenLite.to(f,1.5,{force3D:"auto",x:0,y:0,ease:punchgs.Power3.easeOut})}});break}});if(aq()){window.ondeviceorientation=function(k){var h=Math.round(k.beta||0),f=Math.round(k.gamma||0);var g=a.find(".current-sr-slide-visible");if(a2(window).width()>a2(window).height()){var j=f;f=h;h=j}var d=360/a.width()*f,c=180/a.height()*h;g.find(".tp-parallax-container").each(function(){var m=a2(this),p=parseInt(m.data("parallaxlevel"),0)/100,o=d*p,l=c*p;punchgs.TweenLite.to(m,0.2,{force3D:"auto",x:o,y:l,ease:punchgs.Power3.easeOut})})}}}if(b.parallax=="scroll"||b.parallax=="scroll+mouse"||b.parallax=="mouse+scroll"){a2(window).on("scroll",function(c){a0(a,b)})}};var a0=function(v,g){if(aq()&&g.parallaxDisableOnMobile=="on"){return false}var b=v.offset().top,j=a2(window).scrollTop(),w=b+v.height()/2,d=b+v.height()/2-j,q=a2(window).height()/2,p=q-d;if(w<q){p=p-(q-w)}var k=v.find(".current-sr-slide-visible");v.find(".tp-parallax-container").each(function(c){var l=a2(this),f=parseInt(l.data("parallaxlevel"),0)/100,a=p*f;l.data("parallaxoffset",a);punchgs.TweenLite.to(l,0.2,{force3D:"auto",y:a,ease:punchgs.Power3.easeOut})});if(g.parallaxBgFreeze!="on"){var h=g.parallaxLevels[0]/100,m=p*h;punchgs.TweenLite.to(v,0.2,{force3D:"auto",y:m,ease:punchgs.Power3.easeOut})}};var aV=function(k,h){var f=k.parent();if(h.navigationType=="thumb"||h.navsecond=="both"){f.append('<div class="tp-bullets tp-thumbs '+h.navigationStyle+'"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>')}var g=f.find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer");var j=g.parent();j.width(h.thumbWidth*h.thumbAmount);j.height(h.thumbHeight);j.parent().width(h.thumbWidth*h.thumbAmount);j.parent().height(h.thumbHeight);k.find(">ul:first >li").each(function(p){var n=k.find(">ul:first >li:eq("+p+")");var q=n.find(".defaultimg").css("backgroundColor");if(n.data("thumb")!=aK){var m=n.data("thumb")}else{var m=n.find("img:first").attr("src")}g.append('<div class="bullet thumb" style="background-color:'+q+";position:relative;width:"+h.thumbWidth+"px;height:"+h.thumbHeight+"px;background-image:url("+m+') !important;background-size:cover;background-position:center center;"></div>');var l=g.find(".bullet:first")});var d=10;g.find(".bullet").each(function(l){var a=a2(this);if(l==h.slideamount-1){a.addClass("last")}if(l==0){a.addClass("first")}a.width(h.thumbWidth);a.height(h.thumbHeight);if(d<a.outerWidth(true)){d=a.outerWidth(true)}a.click(function(){if(h.transition==0&&a.index()!=h.act){h.next=a.index();a1(h,k)}})});var c=d*k.find(">ul:first >li").length;var b=g.parent().width();h.thumbWidth=d;if(b<c){a2(document).mousemove(function(a){a2("body").data("mousex",a.pageX)});g.parent().mouseenter(function(){var y=a2(this);var m=y.offset(),q=a2("body").data("mousex")-m.left,z=y.width(),n=y.find(".bullet:first").outerWidth(true),x=n*k.find(">ul:first >li").length,w=x-z+15,v=w/z;y.addClass("over");q=q-30;var p=0-q*v;if(p>0){p=0}if(p<0-x+z){p=0-x+z}aB(y,p,200)});g.parent().mousemove(function(){var y=a2(this),m=y.offset(),q=a2("body").data("mousex")-m.left,z=y.width(),n=y.find(".bullet:first").outerWidth(true),x=n*k.find(">ul:first >li").length-1,w=x-z+15,v=w/z;q=q-3;if(q<6){q=0}if(q+3>z-6){q=z}var p=0-q*v;if(p>0){p=0}if(p<0-x+z){p=0-x+z}aB(y,p,0)});g.parent().mouseleave(function(){var a=a2(this);a.removeClass("over");aC(k)})}};var aC=function(k){var q=k.parent().find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"),d=q.parent(),b=d.offset(),h=d.find(".bullet:first").outerWidth(true),v=d.find(".bullet.selected").index()*h,c=d.width(),h=d.find(".bullet:first").outerWidth(true),p=h*k.find(">ul:first >li").length,m=p-c,j=m/c,g=0-v;if(g>0){g=0}if(g<0-p+c){g=0-p+c}if(!d.hasClass("over")){aB(d,g,200)}};var aB=function(b,a,c){punchgs.TweenLite.to(b.find(".tp-thumbcontainer"),0.2,{force3D:"auto",left:a,ease:punchgs.Power3.easeOut,overwrite:"auto"})}})(jQuery);
/**
 * bxSlider v4.2.12
 * Copyright 2013-2015 Steven Wanderski
 * Written while drinking Belgian ales and listening to jazz
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */

;(function($) {

  var defaults = {

    // GENERAL
    mode: 'horizontal',
    slideSelector: '',
    infiniteLoop: true,
    hideControlOnEnd: false,
    speed: 500,
    easing: null,
    slideMargin: 0,
    startSlide: 0,
    randomStart: false,
    captions: false,
    ticker: false,
    tickerHover: false,
    adaptiveHeight: false,
    adaptiveHeightSpeed: 500,
    video: false,
    useCSS: true,
    preloadImages: 'visible',
    responsive: true,
    slideZIndex: 50,
    wrapperClass: 'bx-wrapper',

    // TOUCH
    touchEnabled: true,
    swipeThreshold: 50,
    oneToOneTouch: true,
    preventDefaultSwipeX: true,
    preventDefaultSwipeY: false,

    // ACCESSIBILITY
    ariaLive: true,
    ariaHidden: true,

    // KEYBOARD
    keyboardEnabled: false,

    // PAGER
    pager: true,
    pagerType: 'full',
    pagerShortSeparator: ' / ',
    pagerSelector: null,
    buildPager: null,
    pagerCustom: null,

    // CONTROLS
    controls: true,
    nextText: 'Next',
    prevText: 'Prev',
    nextSelector: null,
    prevSelector: null,
    autoControls: false,
    startText: 'Start',
    stopText: 'Stop',
    autoControlsCombine: false,
    autoControlsSelector: null,

    // AUTO
    auto: false,
    pause: 4000,
    autoStart: true,
    autoDirection: 'next',
    stopAutoOnClick: false,
    autoHover: false,
    autoDelay: 0,
    autoSlideForOnePage: false,

    // CAROUSEL
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 0,
    slideWidth: 0,
    shrinkItems: false,

    // CALLBACKS
    onSliderLoad: function() { return true; },
    onSlideBefore: function() { return true; },
    onSlideAfter: function() { return true; },
    onSlideNext: function() { return true; },
    onSlidePrev: function() { return true; },
    onSliderResize: function() { return true; }
  };

  $.fn.bxSlider = function(options) {

    if (this.length === 0) {
      return this;
    }

    // support multiple elements
    if (this.length > 1) {
      this.each(function() {
        $(this).bxSlider(options);
      });
      return this;
    }

    // create a namespace to be used throughout the plugin
    var slider = {},
    // set a reference to our slider element
    el = this,
    // get the original window dimens (thanks a lot IE)
    windowWidth = $(window).width(),
    windowHeight = $(window).height();

    // Return if slider is already initialized
    if ($(el).data('bxSlider')) { return; }

    /**
     * ===================================================================================
     * = PRIVATE FUNCTIONS
     * ===================================================================================
     */

    /**
     * Initializes namespace settings to be used throughout plugin
     */
    var init = function() {
      // Return if slider is already initialized
      if ($(el).data('bxSlider')) { return; }
      // merge user-supplied options with the defaults
      slider.settings = $.extend({}, defaults, options);
      // parse slideWidth setting
      slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
      // store the original children
      slider.children = el.children(slider.settings.slideSelector);
      // check if actual number of slides is less than minSlides / maxSlides
      if (slider.children.length < slider.settings.minSlides) { slider.settings.minSlides = slider.children.length; }
      if (slider.children.length < slider.settings.maxSlides) { slider.settings.maxSlides = slider.children.length; }
      // if random start, set the startSlide setting to random number
      if (slider.settings.randomStart) { slider.settings.startSlide = Math.floor(Math.random() * slider.children.length); }
      // store active slide information
      slider.active = { index: slider.settings.startSlide };
      // store if the slider is in carousel mode (displaying / moving multiple slides)
      slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1 ? true : false;
      // if carousel, force preloadImages = 'all'
      if (slider.carousel) { slider.settings.preloadImages = 'all'; }
      // calculate the min / max width thresholds based on min / max number of slides
      // used to setup and update carousel slides dimensions
      slider.minThreshold = (slider.settings.minSlides * slider.settings.slideWidth) + ((slider.settings.minSlides - 1) * slider.settings.slideMargin);
      slider.maxThreshold = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
      // store the current state of the slider (if currently animating, working is true)
      slider.working = false;
      // initialize the controls object
      slider.controls = {};
      // initialize an auto interval
      slider.interval = null;
      // determine which property to use for transitions
      slider.animProp = slider.settings.mode === 'vertical' ? 'top' : 'left';
      // determine if hardware acceleration can be used
      slider.usingCSS = slider.settings.useCSS && slider.settings.mode !== 'fade' && (function() {
        // create our test div element
        var div = document.createElement('div'),
        // css transition properties
        props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
        // test for each property
        for (var i = 0; i < props.length; i++) {
          if (div.style[props[i]] !== undefined) {
            slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
            slider.animProp = '-' + slider.cssPrefix + '-transform';
            return true;
          }
        }
        return false;
      }());
      // if vertical mode always make maxSlides and minSlides equal
      if (slider.settings.mode === 'vertical') { slider.settings.maxSlides = slider.settings.minSlides; }
      // save original style data
      el.data('origStyle', el.attr('style'));
      el.children(slider.settings.slideSelector).each(function() {
        $(this).data('origStyle', $(this).attr('style'));
      });

      // perform all DOM / CSS modifications
      setup();
    };

    /**
     * Performs all DOM and CSS modifications
     */
    var setup = function() {
      var preloadSelector = slider.children.eq(slider.settings.startSlide); // set the default preload selector (visible)

      // wrap el in a wrapper
      el.wrap('<div class="' + slider.settings.wrapperClass + '"><div class="bx-viewport"></div></div>');
      // store a namespace reference to .bx-viewport
      slider.viewport = el.parent();

      // add aria-live if the setting is enabled and ticker mode is disabled
      if (slider.settings.ariaLive && !slider.settings.ticker) {
        slider.viewport.attr('aria-live', 'polite');
      }
      // add a loading div to display while images are loading
      slider.loader = $('<div class="bx-loading" />');
      slider.viewport.prepend(slider.loader);
      // set el to a massive width, to hold any needed slides
      // also strip any margin and padding from el
      el.css({
        width: slider.settings.mode === 'horizontal' ? (slider.children.length * 1000 + 215) + '%' : 'auto',
        position: 'relative'
      });
      // if using CSS, add the easing property
      if (slider.usingCSS && slider.settings.easing) {
        el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing);
      // if not using CSS and no easing value was supplied, use the default JS animation easing (swing)
      } else if (!slider.settings.easing) {
        slider.settings.easing = 'swing';
      }
      // make modifications to the viewport (.bx-viewport)
      slider.viewport.css({
        width: '100%',
        overflow: 'hidden',
        position: 'relative'
      });
      slider.viewport.parent().css({
        maxWidth: getViewportMaxWidth()
      });
      // apply css to all slider children
      slider.children.css({
        float: slider.settings.mode === 'horizontal' ? 'left' : 'none',
        listStyle: 'none',
        position: 'relative'
      });
      // apply the calculated width after the float is applied to prevent scrollbar interference
      slider.children.css('width', getSlideWidth());
      // if slideMargin is supplied, add the css
      if (slider.settings.mode === 'horizontal' && slider.settings.slideMargin > 0) { slider.children.css('marginRight', slider.settings.slideMargin); }
      if (slider.settings.mode === 'vertical' && slider.settings.slideMargin > 0) { slider.children.css('marginBottom', slider.settings.slideMargin); }
      // if "fade" mode, add positioning and z-index CSS
      if (slider.settings.mode === 'fade') {
        slider.children.css({
          position: 'absolute',
          zIndex: 0,
          display: 'none'
        });
        // prepare the z-index on the showing element
        slider.children.eq(slider.settings.startSlide).css({zIndex: slider.settings.slideZIndex, display: 'block'});
      }
      // create an element to contain all slider controls (pager, start / stop, etc)
      slider.controls.el = $('<div class="bx-controls" />');
      // if captions are requested, add them
      if (slider.settings.captions) { appendCaptions(); }
      // check if startSlide is last slide
      slider.active.last = slider.settings.startSlide === getPagerQty() - 1;
      // if video is true, set up the fitVids plugin
      if (slider.settings.video) { el.fitVids(); }
      if (slider.settings.preloadImages === 'all' || slider.settings.ticker) { preloadSelector = slider.children; }
      // only check for control addition if not in "ticker" mode
      if (!slider.settings.ticker) {
        // if controls are requested, add them
        if (slider.settings.controls) { appendControls(); }
        // if auto is true, and auto controls are requested, add them
        if (slider.settings.auto && slider.settings.autoControls) { appendControlsAuto(); }
        // if pager is requested, add it
        if (slider.settings.pager) { appendPager(); }
        // if any control option is requested, add the controls wrapper
        if (slider.settings.controls || slider.settings.autoControls || slider.settings.pager) { slider.viewport.after(slider.controls.el); }
      // if ticker mode, do not allow a pager
      } else {
        slider.settings.pager = false;
      }
      loadElements(preloadSelector, start);
    };

    var loadElements = function(selector, callback) {
      var total = selector.find('img:not([src=""]), iframe').length,
      count = 0;
      if (total === 0) {
        callback();
        return;
      }
      selector.find('img:not([src=""]), iframe').each(function() {
        $(this).one('load error', function() {
          if (++count === total) { callback(); }
        }).each(function() {
          if (this.complete) { $(this).trigger('load'); }
        });
      });
    };

    /**
     * Start the slider
     */
    var start = function() {
      // if infinite loop, prepare additional slides
      if (slider.settings.infiniteLoop && slider.settings.mode !== 'fade' && !slider.settings.ticker) {
        var slice    = slider.settings.mode === 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides,
        sliceAppend  = slider.children.slice(0, slice).clone(true).addClass('bx-clone'),
        slicePrepend = slider.children.slice(-slice).clone(true).addClass('bx-clone');
        if (slider.settings.ariaHidden) {
          sliceAppend.attr('aria-hidden', true);
          slicePrepend.attr('aria-hidden', true);
        }
        el.append(sliceAppend).prepend(slicePrepend);
      }
      // remove the loading DOM element
      slider.loader.remove();
      // set the left / top position of "el"
      setSlidePosition();
      // if "vertical" mode, always use adaptiveHeight to prevent odd behavior
      if (slider.settings.mode === 'vertical') { slider.settings.adaptiveHeight = true; }
      // set the viewport height
      slider.viewport.height(getViewportHeight());
      // make sure everything is positioned just right (same as a window resize)
      el.redrawSlider();
      // onSliderLoad callback
      slider.settings.onSliderLoad.call(el, slider.active.index);
      // slider has been fully initialized
      slider.initialized = true;
      // bind the resize call to the window
      if (slider.settings.responsive) { $(window).bind('resize', resizeWindow); }
      // if auto is true and has more than 1 page, start the show
      if (slider.settings.auto && slider.settings.autoStart && (getPagerQty() > 1 || slider.settings.autoSlideForOnePage)) { initAuto(); }
      // if ticker is true, start the ticker
      if (slider.settings.ticker) { initTicker(); }
      // if pager is requested, make the appropriate pager link active
      if (slider.settings.pager) { updatePagerActive(slider.settings.startSlide); }
      // check for any updates to the controls (like hideControlOnEnd updates)
      if (slider.settings.controls) { updateDirectionControls(); }
      // if touchEnabled is true, setup the touch events
      if (slider.settings.touchEnabled && !slider.settings.ticker) { initTouch(); }
      // if keyboardEnabled is true, setup the keyboard events
      if (slider.settings.keyboardEnabled && !slider.settings.ticker) {
        $(document).keydown(keyPress);
      }
    };

    /**
     * Returns the calculated height of the viewport, used to determine either adaptiveHeight or the maxHeight value
     */
    var getViewportHeight = function() {
      var height = 0;
      // first determine which children (slides) should be used in our height calculation
      var children = $();
      // if mode is not "vertical" and adaptiveHeight is false, include all children
      if (slider.settings.mode !== 'vertical' && !slider.settings.adaptiveHeight) {
        children = slider.children;
      } else {
        // if not carousel, return the single active child
        if (!slider.carousel) {
          children = slider.children.eq(slider.active.index);
        // if carousel, return a slice of children
        } else {
          // get the individual slide index
          var currentIndex = slider.settings.moveSlides === 1 ? slider.active.index : slider.active.index * getMoveBy();
          // add the current slide to the children
          children = slider.children.eq(currentIndex);
          // cycle through the remaining "showing" slides
          for (i = 1; i <= slider.settings.maxSlides - 1; i++) {
            // if looped back to the start
            if (currentIndex + i >= slider.children.length) {
              children = children.add(slider.children.eq(i - 1));
            } else {
              children = children.add(slider.children.eq(currentIndex + i));
            }
          }
        }
      }
      // if "vertical" mode, calculate the sum of the heights of the children
      if (slider.settings.mode === 'vertical') {
        children.each(function(index) {
          height += $(this).outerHeight();
        });
        // add user-supplied margins
        if (slider.settings.slideMargin > 0) {
          height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
        }
      // if not "vertical" mode, calculate the max height of the children
      } else {
        height = Math.max.apply(Math, children.map(function() {
          return $(this).outerHeight(false);
        }).get());
      }

      if (slider.viewport.css('box-sizing') === 'border-box') {
        height += parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom')) +
              parseFloat(slider.viewport.css('border-top-width')) + parseFloat(slider.viewport.css('border-bottom-width'));
      } else if (slider.viewport.css('box-sizing') === 'padding-box') {
        height += parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom'));
      }

      return height;
    };

    /**
     * Returns the calculated width to be used for the outer wrapper / viewport
     */
    var getViewportMaxWidth = function() {
      var width = '100%';
      if (slider.settings.slideWidth > 0) {
        if (slider.settings.mode === 'horizontal') {
          width = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
        } else {
          width = slider.settings.slideWidth;
        }
      }
      return width;
    };

    /**
     * Returns the calculated width to be applied to each slide
     */
    var getSlideWidth = function() {
      var newElWidth = slider.settings.slideWidth, // start with any user-supplied slide width
      wrapWidth      = slider.viewport.width();    // get the current viewport width
      // if slide width was not supplied, or is larger than the viewport use the viewport width
      if (slider.settings.slideWidth === 0 ||
        (slider.settings.slideWidth > wrapWidth && !slider.carousel) ||
        slider.settings.mode === 'vertical') {
        newElWidth = wrapWidth;
      // if carousel, use the thresholds to determine the width
      } else if (slider.settings.maxSlides > 1 && slider.settings.mode === 'horizontal') {
        if (wrapWidth > slider.maxThreshold) {
          return newElWidth;
        } else if (wrapWidth < slider.minThreshold) {
          newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.minSlides - 1))) / slider.settings.minSlides;
        } else if (slider.settings.shrinkItems) {
          newElWidth = Math.floor((wrapWidth + slider.settings.slideMargin) / (Math.ceil((wrapWidth + slider.settings.slideMargin) / (newElWidth + slider.settings.slideMargin))) - slider.settings.slideMargin);
        }
      }
      return newElWidth;
    };

    /**
     * Returns the number of slides currently visible in the viewport (includes partially visible slides)
     */
    var getNumberSlidesShowing = function() {
      var slidesShowing = 1,
      childWidth = null;
      if (slider.settings.mode === 'horizontal' && slider.settings.slideWidth > 0) {
        // if viewport is smaller than minThreshold, return minSlides
        if (slider.viewport.width() < slider.minThreshold) {
          slidesShowing = slider.settings.minSlides;
        // if viewport is larger than maxThreshold, return maxSlides
        } else if (slider.viewport.width() > slider.maxThreshold) {
          slidesShowing = slider.settings.maxSlides;
        // if viewport is between min / max thresholds, divide viewport width by first child width
        } else {
          childWidth = slider.children.first().width() + slider.settings.slideMargin;
          slidesShowing = Math.floor((slider.viewport.width() +
            slider.settings.slideMargin) / childWidth);
        }
      // if "vertical" mode, slides showing will always be minSlides
      } else if (slider.settings.mode === 'vertical') {
        slidesShowing = slider.settings.minSlides;
      }
      return slidesShowing;
    };

    /**
     * Returns the number of pages (one full viewport of slides is one "page")
     */
    var getPagerQty = function() {
      var pagerQty = 0,
      breakPoint = 0,
      counter = 0;
      // if moveSlides is specified by the user
      if (slider.settings.moveSlides > 0) {
        if (slider.settings.infiniteLoop) {
          pagerQty = Math.ceil(slider.children.length / getMoveBy());
        } else {
          // when breakpoint goes above children length, counter is the number of pages
          while (breakPoint < slider.children.length) {
            ++pagerQty;
            breakPoint = counter + getNumberSlidesShowing();
            counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
          }
        }
      // if moveSlides is 0 (auto) divide children length by sides showing, then round up
      } else {
        pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
      }
      return pagerQty;
    };

    /**
     * Returns the number of individual slides by which to shift the slider
     */
    var getMoveBy = function() {
      // if moveSlides was set by the user and moveSlides is less than number of slides showing
      if (slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()) {
        return slider.settings.moveSlides;
      }
      // if moveSlides is 0 (auto)
      return getNumberSlidesShowing();
    };

    /**
     * Sets the slider's (el) left or top position
     */
    var setSlidePosition = function() {
      var position, lastChild, lastShowingIndex;
      // if last slide, not infinite loop, and number of children is larger than specified maxSlides
      if (slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop) {
        if (slider.settings.mode === 'horizontal') {
          // get the last child's position
          lastChild = slider.children.last();
          position = lastChild.position();
          // set the left position
          setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.outerWidth())), 'reset', 0);
        } else if (slider.settings.mode === 'vertical') {
          // get the last showing index's position
          lastShowingIndex = slider.children.length - slider.settings.minSlides;
          position = slider.children.eq(lastShowingIndex).position();
          // set the top position
          setPositionProperty(-position.top, 'reset', 0);
        }
      // if not last slide
      } else {
        // get the position of the first showing slide
        position = slider.children.eq(slider.active.index * getMoveBy()).position();
        // check for last slide
        if (slider.active.index === getPagerQty() - 1) { slider.active.last = true; }
        // set the respective position
        if (position !== undefined) {
          if (slider.settings.mode === 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
          else if (slider.settings.mode === 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
        }
      }
    };

    /**
     * Sets the el's animating property position (which in turn will sometimes animate el).
     * If using CSS, sets the transform property. If not using CSS, sets the top / left property.
     *
     * @param value (int)
     *  - the animating property's value
     *
     * @param type (string) 'slide', 'reset', 'ticker'
     *  - the type of instance for which the function is being
     *
     * @param duration (int)
     *  - the amount of time (in ms) the transition should occupy
     *
     * @param params (array) optional
     *  - an optional parameter containing any variables that need to be passed in
     */
    var setPositionProperty = function(value, type, duration, params) {
      var animateObj, propValue;
      // use CSS transform
      if (slider.usingCSS) {
        // determine the translate3d value
        propValue = slider.settings.mode === 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)';
        // add the CSS transition-duration
        el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');
        if (type === 'slide') {
          // set the property value
          el.css(slider.animProp, propValue);
          if (duration !== 0) {
            // bind a callback method - executes when CSS transition completes
            el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {
              //make sure it's the correct one
              if (!$(e.target).is(el)) { return; }
              // unbind the callback
              el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
              updateAfterSlideTransition();
            });
          } else { //duration = 0
            updateAfterSlideTransition();
          }
        } else if (type === 'reset') {
          el.css(slider.animProp, propValue);
        } else if (type === 'ticker') {
          // make the transition use 'linear'
          el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
          el.css(slider.animProp, propValue);
          if (duration !== 0) {
            el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {
              //make sure it's the correct one
              if (!$(e.target).is(el)) { return; }
              // unbind the callback
              el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
              // reset the position
              setPositionProperty(params.resetValue, 'reset', 0);
              // start the loop again
              tickerLoop();
            });
          } else { //duration = 0
            setPositionProperty(params.resetValue, 'reset', 0);
            tickerLoop();
          }
        }
      // use JS animate
      } else {
        animateObj = {};
        animateObj[slider.animProp] = value;
        if (type === 'slide') {
          el.animate(animateObj, duration, slider.settings.easing, function() {
            updateAfterSlideTransition();
          });
        } else if (type === 'reset') {
          el.css(slider.animProp, value);
        } else if (type === 'ticker') {
          el.animate(animateObj, duration, 'linear', function() {
            setPositionProperty(params.resetValue, 'reset', 0);
            // run the recursive loop after animation
            tickerLoop();
          });
        }
      }
    };

    /**
     * Populates the pager with proper amount of pages
     */
    var populatePager = function() {
      var pagerHtml = '',
      linkContent = '',
      pagerQty = getPagerQty();
      // loop through each pager item
      for (var i = 0; i < pagerQty; i++) {
        linkContent = '';
        // if a buildPager function is supplied, use it to get pager link value, else use index + 1
        if (slider.settings.buildPager && $.isFunction(slider.settings.buildPager) || slider.settings.pagerCustom) {
          linkContent = slider.settings.buildPager(i);
          slider.pagerEl.addClass('bx-custom-pager');
        } else {
          linkContent = i + 1;
          slider.pagerEl.addClass('bx-default-pager');
        }
        // var linkContent = slider.settings.buildPager && $.isFunction(slider.settings.buildPager) ? slider.settings.buildPager(i) : i + 1;
        // add the markup to the string
        pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + '</a></div>';
      }
      // populate the pager element with pager links
      slider.pagerEl.html(pagerHtml);
    };

    /**
     * Appends the pager to the controls element
     */
    var appendPager = function() {
      if (!slider.settings.pagerCustom) {
        // create the pager DOM element
        slider.pagerEl = $('<div class="bx-pager" />');
        // if a pager selector was supplied, populate it with the pager
        if (slider.settings.pagerSelector) {
          $(slider.settings.pagerSelector).html(slider.pagerEl);
        // if no pager selector was supplied, add it after the wrapper
        } else {
          slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
        }
        // populate the pager
        populatePager();
      } else {
        slider.pagerEl = $(slider.settings.pagerCustom);
      }
      // assign the pager click binding
      slider.pagerEl.on('click touchend', 'a', clickPagerBind);
    };

    /**
     * Appends prev / next controls to the controls element
     */
    var appendControls = function() {
      slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
      slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>');
      // bind click actions to the controls
      slider.controls.next.bind('click touchend', clickNextBind);
      slider.controls.prev.bind('click touchend', clickPrevBind);
      // if nextSelector was supplied, populate it
      if (slider.settings.nextSelector) {
        $(slider.settings.nextSelector).append(slider.controls.next);
      }
      // if prevSelector was supplied, populate it
      if (slider.settings.prevSelector) {
        $(slider.settings.prevSelector).append(slider.controls.prev);
      }
      // if no custom selectors were supplied
      if (!slider.settings.nextSelector && !slider.settings.prevSelector) {
        // add the controls to the DOM
        slider.controls.directionEl = $('<div class="bx-controls-direction" />');
        // add the control elements to the directionEl
        slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);
        // slider.viewport.append(slider.controls.directionEl);
        slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
      }
    };

    /**
     * Appends start / stop auto controls to the controls element
     */
    var appendControlsAuto = function() {
      slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
      slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>');
      // add the controls to the DOM
      slider.controls.autoEl = $('<div class="bx-controls-auto" />');
      // bind click actions to the controls
      slider.controls.autoEl.on('click', '.bx-start', clickStartBind);
      slider.controls.autoEl.on('click', '.bx-stop', clickStopBind);
      // if autoControlsCombine, insert only the "start" control
      if (slider.settings.autoControlsCombine) {
        slider.controls.autoEl.append(slider.controls.start);
      // if autoControlsCombine is false, insert both controls
      } else {
        slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
      }
      // if auto controls selector was supplied, populate it with the controls
      if (slider.settings.autoControlsSelector) {
        $(slider.settings.autoControlsSelector).html(slider.controls.autoEl);
      // if auto controls selector was not supplied, add it after the wrapper
      } else {
        slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
      }
      // update the auto controls
      updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
    };

    /**
     * Appends image captions to the DOM
     */
    var appendCaptions = function() {
      // cycle through each child
      slider.children.each(function(index) {
        // get the image title attribute
        var title = $(this).find('img:first').attr('title');
        // append the caption
        if (title !== undefined && ('' + title).length) {
          $(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
        }
      });
    };

    /**
     * Click next binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickNextBind = function(e) {
      e.preventDefault();
      if (slider.controls.el.hasClass('disabled')) { return; }
      // if auto show is running, stop it
      if (slider.settings.auto && slider.settings.stopAutoOnClick) { el.stopAuto(); }
      el.goToNextSlide();
    };

    /**
     * Click prev binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickPrevBind = function(e) {
      e.preventDefault();
      if (slider.controls.el.hasClass('disabled')) { return; }
      // if auto show is running, stop it
      if (slider.settings.auto && slider.settings.stopAutoOnClick) { el.stopAuto(); }
      el.goToPrevSlide();
    };

    /**
     * Click start binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickStartBind = function(e) {
      el.startAuto();
      e.preventDefault();
    };

    /**
     * Click stop binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickStopBind = function(e) {
      el.stopAuto();
      e.preventDefault();
    };

    /**
     * Click pager binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickPagerBind = function(e) {
      var pagerLink, pagerIndex;
      e.preventDefault();
      if (slider.controls.el.hasClass('disabled')) {
        return;
      }
      // if auto show is running, stop it
      if (slider.settings.auto  && slider.settings.stopAutoOnClick) { el.stopAuto(); }
      pagerLink = $(e.currentTarget);
      if (pagerLink.attr('data-slide-index') !== undefined) {
        pagerIndex = parseInt(pagerLink.attr('data-slide-index'));
        // if clicked pager link is not active, continue with the goToSlide call
        if (pagerIndex !== slider.active.index) { el.goToSlide(pagerIndex); }
      }
    };

    /**
     * Updates the pager links with an active class
     *
     * @param slideIndex (int)
     *  - index of slide to make active
     */
    var updatePagerActive = function(slideIndex) {
      // if "short" pager type
      var len = slider.children.length; // nb of children
      if (slider.settings.pagerType === 'short') {
        if (slider.settings.maxSlides > 1) {
          len = Math.ceil(slider.children.length / slider.settings.maxSlides);
        }
        slider.pagerEl.html((slideIndex + 1) + slider.settings.pagerShortSeparator + len);
        return;
      }
      // remove all pager active classes
      slider.pagerEl.find('a').removeClass('active');
      // apply the active class for all pagers
      slider.pagerEl.each(function(i, el) { $(el).find('a').eq(slideIndex).addClass('active'); });
    };

    /**
     * Performs needed actions after a slide transition
     */
    var updateAfterSlideTransition = function() {
      // if infinite loop is true
      if (slider.settings.infiniteLoop) {
        var position = '';
        // first slide
        if (slider.active.index === 0) {
          // set the new position
          position = slider.children.eq(0).position();
        // carousel, last slide
        } else if (slider.active.index === getPagerQty() - 1 && slider.carousel) {
          position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position();
        // last slide
        } else if (slider.active.index === slider.children.length - 1) {
          position = slider.children.eq(slider.children.length - 1).position();
        }
        if (position) {
          if (slider.settings.mode === 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
          else if (slider.settings.mode === 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
        }
      }
      // declare that the transition is complete
      slider.working = false;
      // onSlideAfter callback
      slider.settings.onSlideAfter.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
    };

    /**
     * Updates the auto controls state (either active, or combined switch)
     *
     * @param state (string) "start", "stop"
     *  - the new state of the auto show
     */
    var updateAutoControls = function(state) {
      // if autoControlsCombine is true, replace the current control with the new state
      if (slider.settings.autoControlsCombine) {
        slider.controls.autoEl.html(slider.controls[state]);
      // if autoControlsCombine is false, apply the "active" class to the appropriate control
      } else {
        slider.controls.autoEl.find('a').removeClass('active');
        slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
      }
    };

    /**
     * Updates the direction controls (checks if either should be hidden)
     */
    var updateDirectionControls = function() {
      if (getPagerQty() === 1) {
        slider.controls.prev.addClass('disabled');
        slider.controls.next.addClass('disabled');
      } else if (!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd) {
        // if first slide
        if (slider.active.index === 0) {
          slider.controls.prev.addClass('disabled');
          slider.controls.next.removeClass('disabled');
        // if last slide
        } else if (slider.active.index === getPagerQty() - 1) {
          slider.controls.next.addClass('disabled');
          slider.controls.prev.removeClass('disabled');
        // if any slide in the middle
        } else {
          slider.controls.prev.removeClass('disabled');
          slider.controls.next.removeClass('disabled');
        }
      }
    };

    /**
     * Initializes the auto process
     */
    var initAuto = function() {
      // if autoDelay was supplied, launch the auto show using a setTimeout() call
      if (slider.settings.autoDelay > 0) {
        var timeout = setTimeout(el.startAuto, slider.settings.autoDelay);
      // if autoDelay was not supplied, start the auto show normally
      } else {
        el.startAuto();

        //add focus and blur events to ensure its running if timeout gets paused
        $(window).focus(function() {
          el.startAuto();
        }).blur(function() {
          el.stopAuto();
        });
      }
      // if autoHover is requested
      if (slider.settings.autoHover) {
        // on el hover
        el.hover(function() {
          // if the auto show is currently playing (has an active interval)
          if (slider.interval) {
            // stop the auto show and pass true argument which will prevent control update
            el.stopAuto(true);
            // create a new autoPaused value which will be used by the relative "mouseout" event
            slider.autoPaused = true;
          }
        }, function() {
          // if the autoPaused value was created be the prior "mouseover" event
          if (slider.autoPaused) {
            // start the auto show and pass true argument which will prevent control update
            el.startAuto(true);
            // reset the autoPaused value
            slider.autoPaused = null;
          }
        });
      }
    };

    /**
     * Initializes the ticker process
     */
    var initTicker = function() {
      var startPosition = 0,
      position, transform, value, idx, ratio, property, newSpeed, totalDimens;
      // if autoDirection is "next", append a clone of the entire slider
      if (slider.settings.autoDirection === 'next') {
        el.append(slider.children.clone().addClass('bx-clone'));
      // if autoDirection is "prev", prepend a clone of the entire slider, and set the left position
      } else {
        el.prepend(slider.children.clone().addClass('bx-clone'));
        position = slider.children.first().position();
        startPosition = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
      }
      setPositionProperty(startPosition, 'reset', 0);
      // do not allow controls in ticker mode
      slider.settings.pager = false;
      slider.settings.controls = false;
      slider.settings.autoControls = false;
      // if autoHover is requested
      if (slider.settings.tickerHover) {
        if (slider.usingCSS) {
          idx = slider.settings.mode === 'horizontal' ? 4 : 5;
          slider.viewport.hover(function() {
            transform = el.css('-' + slider.cssPrefix + '-transform');
            value = parseFloat(transform.split(',')[idx]);
            setPositionProperty(value, 'reset', 0);
          }, function() {
            totalDimens = 0;
            slider.children.each(function(index) {
              totalDimens += slider.settings.mode === 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
            });
            // calculate the speed ratio (used to determine the new speed to finish the paused animation)
            ratio = slider.settings.speed / totalDimens;
            // determine which property to use
            property = slider.settings.mode === 'horizontal' ? 'left' : 'top';
            // calculate the new speed
            newSpeed = ratio * (totalDimens - (Math.abs(parseInt(value))));
            tickerLoop(newSpeed);
          });
        } else {
          // on el hover
          slider.viewport.hover(function() {
            el.stop();
          }, function() {
            // calculate the total width of children (used to calculate the speed ratio)
            totalDimens = 0;
            slider.children.each(function(index) {
              totalDimens += slider.settings.mode === 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
            });
            // calculate the speed ratio (used to determine the new speed to finish the paused animation)
            ratio = slider.settings.speed / totalDimens;
            // determine which property to use
            property = slider.settings.mode === 'horizontal' ? 'left' : 'top';
            // calculate the new speed
            newSpeed = ratio * (totalDimens - (Math.abs(parseInt(el.css(property)))));
            tickerLoop(newSpeed);
          });
        }
      }
      // start the ticker loop
      tickerLoop();
    };

    /**
     * Runs a continuous loop, news ticker-style
     */
    var tickerLoop = function(resumeSpeed) {
      var speed = resumeSpeed ? resumeSpeed : slider.settings.speed,
      position = {left: 0, top: 0},
      reset = {left: 0, top: 0},
      animateProperty, resetValue, params;

      // if "next" animate left position to last child, then reset left to 0
      if (slider.settings.autoDirection === 'next') {
        position = el.find('.bx-clone').first().position();
      // if "prev" animate left position to 0, then reset left to first non-clone child
      } else {
        reset = slider.children.first().position();
      }
      animateProperty = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
      resetValue = slider.settings.mode === 'horizontal' ? -reset.left : -reset.top;
      params = {resetValue: resetValue};
      setPositionProperty(animateProperty, 'ticker', speed, params);
    };

    /**
     * Check if el is on screen
     */
    var isOnScreen = function(el) {
      var win = $(window),
      viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
      },
      bounds = el.offset();

      viewport.right = viewport.left + win.width();
      viewport.bottom = viewport.top + win.height();
      bounds.right = bounds.left + el.outerWidth();
      bounds.bottom = bounds.top + el.outerHeight();

      return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    };

    /**
     * Initializes keyboard events
     */
    var keyPress = function(e) {
      var activeElementTag = document.activeElement.tagName.toLowerCase(),
      tagFilters = 'input|textarea',
      p = new RegExp(activeElementTag,['i']),
      result = p.exec(tagFilters);

      if (result == null && isOnScreen(el)) {
        if (e.keyCode === 39) {
          clickNextBind(e);
          return false;
        } else if (e.keyCode === 37) {
          clickPrevBind(e);
          return false;
        }
      }
    };

    /**
     * Initializes touch events
     */
    var initTouch = function() {
      // initialize object to contain all touch values
      slider.touch = {
        start: {x: 0, y: 0},
        end: {x: 0, y: 0}
      };
      slider.viewport.bind('touchstart MSPointerDown pointerdown', onTouchStart);

      //for browsers that have implemented pointer events and fire a click after
      //every pointerup regardless of whether pointerup is on same screen location as pointerdown or not
      slider.viewport.on('click', '.bxslider a', function(e) {
        if (slider.viewport.hasClass('click-disabled')) {
          e.preventDefault();
          slider.viewport.removeClass('click-disabled');
        }
      });
    };

    /**
     * Event handler for "touchstart"
     *
     * @param e (event)
     *  - DOM event object
     */
    var onTouchStart = function(e) {
      //disable slider controls while user is interacting with slides to avoid slider freeze that happens on touch devices when a slide swipe happens immediately after interacting with slider controls
      slider.controls.el.addClass('disabled');

      if (slider.working) {
        e.preventDefault();
        slider.controls.el.removeClass('disabled');
      } else {
        // record the original position when touch starts
        slider.touch.originalPos = el.position();
        var orig = e.originalEvent,
        touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig];
        // record the starting touch x, y coordinates
        slider.touch.start.x = touchPoints[0].pageX;
        slider.touch.start.y = touchPoints[0].pageY;

        if (slider.viewport.get(0).setPointerCapture) {
          slider.pointerId = orig.pointerId;
          slider.viewport.get(0).setPointerCapture(slider.pointerId);
        }
        // bind a "touchmove" event to the viewport
        slider.viewport.bind('touchmove MSPointerMove pointermove', onTouchMove);
        // bind a "touchend" event to the viewport
        slider.viewport.bind('touchend MSPointerUp pointerup', onTouchEnd);
        slider.viewport.bind('MSPointerCancel pointercancel', onPointerCancel);
      }
    };

    /**
     * Cancel Pointer for Windows Phone
     *
     * @param e (event)
     *  - DOM event object
     */
    var onPointerCancel = function(e) {
      /* onPointerCancel handler is needed to deal with situations when a touchend
      doesn't fire after a touchstart (this happens on windows phones only) */
      setPositionProperty(slider.touch.originalPos.left, 'reset', 0);

      //remove handlers
      slider.controls.el.removeClass('disabled');
      slider.viewport.unbind('MSPointerCancel pointercancel', onPointerCancel);
      slider.viewport.unbind('touchmove MSPointerMove pointermove', onTouchMove);
      slider.viewport.unbind('touchend MSPointerUp pointerup', onTouchEnd);
      if (slider.viewport.get(0).releasePointerCapture) {
        slider.viewport.get(0).releasePointerCapture(slider.pointerId);
      }
    };

    /**
     * Event handler for "touchmove"
     *
     * @param e (event)
     *  - DOM event object
     */
    var onTouchMove = function(e) {
      var orig = e.originalEvent,
      touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig],
      // if scrolling on y axis, do not prevent default
      xMovement = Math.abs(touchPoints[0].pageX - slider.touch.start.x),
      yMovement = Math.abs(touchPoints[0].pageY - slider.touch.start.y),
      value = 0,
      change = 0;

      // x axis swipe
      if ((xMovement * 3) > yMovement && slider.settings.preventDefaultSwipeX) {
        e.preventDefault();
      // y axis swipe
      } else if ((yMovement * 3) > xMovement && slider.settings.preventDefaultSwipeY) {
        e.preventDefault();
      }
      if (slider.settings.mode !== 'fade' && slider.settings.oneToOneTouch) {
        // if horizontal, drag along x axis
        if (slider.settings.mode === 'horizontal') {
          change = touchPoints[0].pageX - slider.touch.start.x;
          value = slider.touch.originalPos.left + change;
        // if vertical, drag along y axis
        } else {
          change = touchPoints[0].pageY - slider.touch.start.y;
          value = slider.touch.originalPos.top + change;
        }
        setPositionProperty(value, 'reset', 0);
      }
    };

    /**
     * Event handler for "touchend"
     *
     * @param e (event)
     *  - DOM event object
     */
    var onTouchEnd = function(e) {
      slider.viewport.unbind('touchmove MSPointerMove pointermove', onTouchMove);
      //enable slider controls as soon as user stops interacing with slides
      slider.controls.el.removeClass('disabled');
      var orig    = e.originalEvent,
      touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig],
      value       = 0,
      distance    = 0;
      // record end x, y positions
      slider.touch.end.x = touchPoints[0].pageX;
      slider.touch.end.y = touchPoints[0].pageY;
      // if fade mode, check if absolute x distance clears the threshold
      if (slider.settings.mode === 'fade') {
        distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
        if (distance >= slider.settings.swipeThreshold) {
          if (slider.touch.start.x > slider.touch.end.x) {
            el.goToNextSlide();
          } else {
            el.goToPrevSlide();
          }
          el.stopAuto();
        }
      // not fade mode
      } else {
        // calculate distance and el's animate property
        if (slider.settings.mode === 'horizontal') {
          distance = slider.touch.end.x - slider.touch.start.x;
          value = slider.touch.originalPos.left;
        } else {
          distance = slider.touch.end.y - slider.touch.start.y;
          value = slider.touch.originalPos.top;
        }
        // if not infinite loop and first / last slide, do not attempt a slide transition
        if (!slider.settings.infiniteLoop && ((slider.active.index === 0 && distance > 0) || (slider.active.last && distance < 0))) {
          setPositionProperty(value, 'reset', 200);
        } else {
          // check if distance clears threshold
          if (Math.abs(distance) >= slider.settings.swipeThreshold) {
            if (distance < 0) {
              el.goToNextSlide();
            } else {
              el.goToPrevSlide();
            }
            el.stopAuto();
          } else {
            // el.animate(property, 200);
            setPositionProperty(value, 'reset', 200);
          }
        }
      }
      slider.viewport.unbind('touchend MSPointerUp pointerup', onTouchEnd);
      if (slider.viewport.get(0).releasePointerCapture) {
        slider.viewport.get(0).releasePointerCapture(slider.pointerId);
      }
    };

    /**
     * Window resize event callback
     */
    var resizeWindow = function(e) {
      // don't do anything if slider isn't initialized.
      if (!slider.initialized) { return; }
      // Delay if slider working.
      if (slider.working) {
        window.setTimeout(resizeWindow, 10);
      } else {
        // get the new window dimens (again, thank you IE)
        var windowWidthNew = $(window).width(),
        windowHeightNew = $(window).height();
        // make sure that it is a true window resize
        // *we must check this because our dinosaur friend IE fires a window resize event when certain DOM elements
        // are resized. Can you just die already?*
        if (windowWidth !== windowWidthNew || windowHeight !== windowHeightNew) {
          // set the new window dimens
          windowWidth = windowWidthNew;
          windowHeight = windowHeightNew;
          // update all dynamic elements
          el.redrawSlider();
          // Call user resize handler
          slider.settings.onSliderResize.call(el, slider.active.index);
        }
      }
    };

    /**
     * Adds an aria-hidden=true attribute to each element
     *
     * @param startVisibleIndex (int)
     *  - the first visible element's index
     */
    var applyAriaHiddenAttributes = function(startVisibleIndex) {
      var numberOfSlidesShowing = getNumberSlidesShowing();
      // only apply attributes if the setting is enabled and not in ticker mode
      if (slider.settings.ariaHidden && !slider.settings.ticker) {
        // add aria-hidden=true to all elements
        slider.children.attr('aria-hidden', 'true');
        // get the visible elements and change to aria-hidden=false
        slider.children.slice(startVisibleIndex, startVisibleIndex + numberOfSlidesShowing).attr('aria-hidden', 'false');
      }
    };

    /**
     * Returns index according to present page range
     *
     * @param slideOndex (int)
     *  - the desired slide index
     */
    var setSlideIndex = function(slideIndex) {
      if (slideIndex < 0) {
        if (slider.settings.infiniteLoop) {
          return getPagerQty() - 1;
        }else {
          //we don't go to undefined slides
          return slider.active.index;
        }
      // if slideIndex is greater than children length, set active index to 0 (this happens during infinite loop)
      } else if (slideIndex >= getPagerQty()) {
        if (slider.settings.infiniteLoop) {
          return 0;
        } else {
          //we don't move to undefined pages
          return slider.active.index;
        }
      // set active index to requested slide
      } else {
        return slideIndex;
      }
    };

    /**
     * ===================================================================================
     * = PUBLIC FUNCTIONS
     * ===================================================================================
     */

    /**
     * Performs slide transition to the specified slide
     *
     * @param slideIndex (int)
     *  - the destination slide's index (zero-based)
     *
     * @param direction (string)
     *  - INTERNAL USE ONLY - the direction of travel ("prev" / "next")
     */
    el.goToSlide = function(slideIndex, direction) {
      // onSlideBefore, onSlideNext, onSlidePrev callbacks
      // Allow transition canceling based on returned value
      var performTransition = true,
      moveBy = 0,
      position = {left: 0, top: 0},
      lastChild = null,
      lastShowingIndex, eq, value, requestEl;
      // store the old index
      slider.oldIndex = slider.active.index;
      //set new index
      slider.active.index = setSlideIndex(slideIndex);

      // if plugin is currently in motion, ignore request
      if (slider.working || slider.active.index === slider.oldIndex) { return; }
      // declare that plugin is in motion
      slider.working = true;

      performTransition = slider.settings.onSlideBefore.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);

      // If transitions canceled, reset and return
      if (typeof (performTransition) !== 'undefined' && !performTransition) {
        slider.active.index = slider.oldIndex; // restore old index
        slider.working = false; // is not in motion
        return;
      }

      if (direction === 'next') {
        // Prevent canceling in future functions or lack there-of from negating previous commands to cancel
        if (!slider.settings.onSlideNext.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)) {
          performTransition = false;
        }
      } else if (direction === 'prev') {
        // Prevent canceling in future functions or lack there-of from negating previous commands to cancel
        if (!slider.settings.onSlidePrev.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)) {
          performTransition = false;
        }
      }

      // check if last slide
      slider.active.last = slider.active.index >= getPagerQty() - 1;
      // update the pager with active class
      if (slider.settings.pager || slider.settings.pagerCustom) { updatePagerActive(slider.active.index); }
      // // check for direction control update
      if (slider.settings.controls) { updateDirectionControls(); }
      // if slider is set to mode: "fade"
      if (slider.settings.mode === 'fade') {
        // if adaptiveHeight is true and next height is different from current height, animate to the new height
        if (slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()) {
          slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
        }
        // fade out the visible child and reset its z-index value
        slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex: 0});
        // fade in the newly requested slide
        slider.children.eq(slider.active.index).css('zIndex', slider.settings.slideZIndex + 1).fadeIn(slider.settings.speed, function() {
          $(this).css('zIndex', slider.settings.slideZIndex);
          updateAfterSlideTransition();
        });
      // slider mode is not "fade"
      } else {
        // if adaptiveHeight is true and next height is different from current height, animate to the new height
        if (slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()) {
          slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
        }
        // if carousel and not infinite loop
        if (!slider.settings.infiniteLoop && slider.carousel && slider.active.last) {
          if (slider.settings.mode === 'horizontal') {
            // get the last child position
            lastChild = slider.children.eq(slider.children.length - 1);
            position = lastChild.position();
            // calculate the position of the last slide
            moveBy = slider.viewport.width() - lastChild.outerWidth();
          } else {
            // get last showing index position
            lastShowingIndex = slider.children.length - slider.settings.minSlides;
            position = slider.children.eq(lastShowingIndex).position();
          }
          // horizontal carousel, going previous while on first slide (infiniteLoop mode)
        } else if (slider.carousel && slider.active.last && direction === 'prev') {
          // get the last child position
          eq = slider.settings.moveSlides === 1 ? slider.settings.maxSlides - getMoveBy() : ((getPagerQty() - 1) * getMoveBy()) - (slider.children.length - slider.settings.maxSlides);
          lastChild = el.children('.bx-clone').eq(eq);
          position = lastChild.position();
        // if infinite loop and "Next" is clicked on the last slide
        } else if (direction === 'next' && slider.active.index === 0) {
          // get the last clone position
          position = el.find('> .bx-clone').eq(slider.settings.maxSlides).position();
          slider.active.last = false;
        // normal non-zero requests
        } else if (slideIndex >= 0) {
          //parseInt is applied to allow floats for slides/page
          requestEl = slideIndex * parseInt(getMoveBy());
          position = slider.children.eq(requestEl).position();
        }

        /* If the position doesn't exist
         * (e.g. if you destroy the slider on a next click),
         * it doesn't throw an error.
         */
        if (typeof (position) !== 'undefined') {
          value = slider.settings.mode === 'horizontal' ? -(position.left - moveBy) : -position.top;
          // plugin values to be animated
          setPositionProperty(value, 'slide', slider.settings.speed);
        } else {
          slider.working = false;
        }
      }
      if (slider.settings.ariaHidden) { applyAriaHiddenAttributes(slider.active.index * getMoveBy()); }
    };

    /**
     * Transitions to the next slide in the show
     */
    el.goToNextSlide = function() {
      // if infiniteLoop is false and last page is showing, disregard call
      if (!slider.settings.infiniteLoop && slider.active.last) { return; }
      var pagerIndex = parseInt(slider.active.index) + 1;
      el.goToSlide(pagerIndex, 'next');
    };

    /**
     * Transitions to the prev slide in the show
     */
    el.goToPrevSlide = function() {
      // if infiniteLoop is false and last page is showing, disregard call
      if (!slider.settings.infiniteLoop && slider.active.index === 0) { return; }
      var pagerIndex = parseInt(slider.active.index) - 1;
      el.goToSlide(pagerIndex, 'prev');
    };

    /**
     * Starts the auto show
     *
     * @param preventControlUpdate (boolean)
     *  - if true, auto controls state will not be updated
     */
    el.startAuto = function(preventControlUpdate) {
      // if an interval already exists, disregard call
      if (slider.interval) { return; }
      // create an interval
      slider.interval = setInterval(function() {
        if (slider.settings.autoDirection === 'next') {
          el.goToNextSlide();
        } else {
          el.goToPrevSlide();
        }
      }, slider.settings.pause);
      // if auto controls are displayed and preventControlUpdate is not true
      if (slider.settings.autoControls && preventControlUpdate !== true) { updateAutoControls('stop'); }
    };

    /**
     * Stops the auto show
     *
     * @param preventControlUpdate (boolean)
     *  - if true, auto controls state will not be updated
     */
    el.stopAuto = function(preventControlUpdate) {
      // if no interval exists, disregard call
      if (!slider.interval) { return; }
      // clear the interval
      clearInterval(slider.interval);
      slider.interval = null;
      // if auto controls are displayed and preventControlUpdate is not true
      if (slider.settings.autoControls && preventControlUpdate !== true) { updateAutoControls('start'); }
    };

    /**
     * Returns current slide index (zero-based)
     */
    el.getCurrentSlide = function() {
      return slider.active.index;
    };

    /**
     * Returns current slide element
     */
    el.getCurrentSlideElement = function() {
      return slider.children.eq(slider.active.index);
    };

    /**
     * Returns a slide element
     * @param index (int)
     *  - The index (zero-based) of the element you want returned.
     */
    el.getSlideElement = function(index) {
      return slider.children.eq(index);
    };

    /**
     * Returns number of slides in show
     */
    el.getSlideCount = function() {
      return slider.children.length;
    };

    /**
     * Return slider.working variable
     */
    el.isWorking = function() {
      return slider.working;
    };

    /**
     * Update all dynamic slider elements
     */
    el.redrawSlider = function() {
      // resize all children in ratio to new screen size
      slider.children.add(el.find('.bx-clone')).outerWidth(getSlideWidth());
      // adjust the height
      slider.viewport.css('height', getViewportHeight());
      // update the slide position
      if (!slider.settings.ticker) { setSlidePosition(); }
      // if active.last was true before the screen resize, we want
      // to keep it last no matter what screen size we end on
      if (slider.active.last) { slider.active.index = getPagerQty() - 1; }
      // if the active index (page) no longer exists due to the resize, simply set the index as last
      if (slider.active.index >= getPagerQty()) { slider.active.last = true; }
      // if a pager is being displayed and a custom pager is not being used, update it
      if (slider.settings.pager && !slider.settings.pagerCustom) {
        populatePager();
        updatePagerActive(slider.active.index);
      }
      if (slider.settings.ariaHidden) { applyAriaHiddenAttributes(slider.active.index * getMoveBy()); }
    };

    /**
     * Destroy the current instance of the slider (revert everything back to original state)
     */
    el.destroySlider = function() {
      // don't do anything if slider has already been destroyed
      if (!slider.initialized) { return; }
      slider.initialized = false;
      $('.bx-clone', this).remove();
      slider.children.each(function() {
        if ($(this).data('origStyle') !== undefined) {
          $(this).attr('style', $(this).data('origStyle'));
        } else {
          $(this).removeAttr('style');
        }
      });
      if ($(this).data('origStyle') !== undefined) {
        this.attr('style', $(this).data('origStyle'));
      } else {
        $(this).removeAttr('style');
      }
      $(this).unwrap().unwrap();
      if (slider.controls.el) { slider.controls.el.remove(); }
      if (slider.controls.next) { slider.controls.next.remove(); }
      if (slider.controls.prev) { slider.controls.prev.remove(); }
      if (slider.pagerEl && slider.settings.controls && !slider.settings.pagerCustom) { slider.pagerEl.remove(); }
      $('.bx-caption', this).remove();
      if (slider.controls.autoEl) { slider.controls.autoEl.remove(); }
      clearInterval(slider.interval);
      if (slider.settings.responsive) { $(window).unbind('resize', resizeWindow); }
      if (slider.settings.keyboardEnabled) { $(document).unbind('keydown', keyPress); }
      //remove self reference in data
      $(this).removeData('bxSlider');
    };

    /**
     * Reload the slider (revert all DOM changes, and re-initialize)
     */
    el.reloadSlider = function(settings) {
      if (settings !== undefined) { options = settings; }
      el.destroySlider();
      init();
      //store reference to self in order to access public functions later
      $(el).data('bxSlider', this);
    };

    init();

    $(el).data('bxSlider', this);

    // returns the current jQuery object
    return this;
  };

})(jQuery);

/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 * http://bas2k.ru/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012-2014 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function($) {
    $.fn.appear = function(fn, options) {

        var settings = $.extend({

            //arbitrary data to pass to fn
            data: undefined,

            //call fn only on the first appear?
            one: true,

            // X & Y accuracy
            accX: 0,
            accY: 0

        }, options);

        return this.each(function() {

            var t = $(this);

            //whether the element is currently visible
            t.appeared = false;

            if (!fn) {

                //trigger the custom event
                t.trigger('appear', settings.data);
                return;
            }

            var w = $(window);

            //fires the appear event when appropriate
            var check = function() {

                //is the element hidden?
                if (!t.is(':visible')) {

                    //it became hidden
                    t.appeared = false;
                    return;
                }

                //is the element inside the visible window?
                var a = w.scrollLeft();
                var b = w.scrollTop();
                var o = t.offset();
                var x = o.left;
                var y = o.top;

                var ax = settings.accX;
                var ay = settings.accY;
                var th = t.height();
                var wh = w.height();
                var tw = t.width();
                var ww = w.width();

                if (y + th + ay >= b &&
                    y <= b + wh + ay &&
                    x + tw + ax >= a &&
                    x <= a + ww + ax) {

                    //trigger the custom event
                    if (!t.appeared) t.trigger('appear', settings.data);

                } else {

                    //it scrolled out of view
                    t.appeared = false;
                }
            };

            //create a modified fn with some additional logic
            var modifiedFn = function() {

                //mark the element as visible
                t.appeared = true;

                //is this supposed to happen only once?
                if (settings.one) {

                    //remove the check
                    w.unbind('scroll', check);
                    var i = $.inArray(check, $.fn.appear.checks);
                    if (i >= 0) $.fn.appear.checks.splice(i, 1);
                }

                //trigger the original fn
                fn.apply(this, arguments);
            };

            //bind the modified fn to the element
            if (settings.one) t.one('appear', settings.data, modifiedFn);
            else t.bind('appear', settings.data, modifiedFn);

            //check whenever the window scrolls
            w.scroll(check);

            //check whenever the dom changes
            $.fn.appear.checks.push(check);

            //check now
            (check)();
        });
    };

    //keep a queue of appearance checks
    $.extend($.fn.appear, {

        checks: [],
        timeout: null,

        //process the queue
        checkAll: function() {
            var length = $.fn.appear.checks.length;
            if (length > 0) while (length--) ($.fn.appear.checks[length])();
        },

        //check the queue asynchronously
        run: function() {
            if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
            $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
        }
    });

    //run checks when these methods are called
    $.each(['append', 'prepend', 'after', 'before', 'attr',
        'removeAttr', 'addClass', 'removeClass', 'toggleClass',
        'remove', 'css', 'show', 'hide'], function(i, n) {
        var old = $.fn[n];
        if (old) {
            $.fn[n] = function() {
                var r = old.apply(this, arguments);
                $.fn.appear.run();
                return r;
            }
        }
    });

})(jQuery);

/*!jQuery Knob*/
/**
 * Downward compatible, touchable dial
 *
 * Version: 1.2.12
 * Requires: jQuery v1.7+
 *
 * Copyright (c) 2012 Anthony Terrien
 * Under MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Thanks to vor, eskimoblood, spiffistan, FabrizioC
 */
(function (factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('jquery'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    /**
     * Kontrol library
     */
    "use strict";

    /**
     * Definition of globals and core
     */
    var k = {}, // kontrol
        max = Math.max,
        min = Math.min;

    k.c = {};
    k.c.d = $(document);
    k.c.t = function (e) {
        return e.originalEvent.touches.length - 1;
    };

    /**
     * Kontrol Object
     *
     * Definition of an abstract UI control
     *
     * Each concrete component must call this one.
     * <code>
     * k.o.call(this);
     * </code>
     */
    k.o = function () {
        var s = this;

        this.o = null; // array of options
        this.$ = null; // jQuery wrapped element
        this.i = null; // mixed HTMLInputElement or array of HTMLInputElement
        this.g = null; // deprecated 2D graphics context for 'pre-rendering'
        this.v = null; // value ; mixed array or integer
        this.cv = null; // change value ; not commited value
        this.x = 0; // canvas x position
        this.y = 0; // canvas y position
        this.w = 0; // canvas width
        this.h = 0; // canvas height
        this.$c = null; // jQuery canvas element
        this.c = null; // rendered canvas context
        this.t = 0; // touches index
        this.isInit = false;
        this.fgColor = null; // main color
        this.pColor = null; // previous color
        this.dH = null; // draw hook
        this.cH = null; // change hook
        this.eH = null; // cancel hook
        this.rH = null; // release hook
        this.scale = 1; // scale factor
        this.relative = false;
        this.relativeWidth = false;
        this.relativeHeight = false;
        this.$div = null; // component div

        this.run = function () {
            var cf = function (e, conf) {
                var k;
                for (k in conf) {
                    s.o[k] = conf[k];
                }
                s._carve().init();
                s._configure()
                 ._draw();
            };

            if (this.$.data('kontroled')) return;
            this.$.data('kontroled', true);

            this.extend();
            this.o = $.extend({
                    // Config
                    min: this.$.data('min') !== undefined ? this.$.data('min') : 0,
                    max: this.$.data('max') !== undefined ? this.$.data('max') : 100,
                    stopper: true,
                    readOnly: this.$.data('readonly') || (this.$.attr('readonly') === 'readonly'),

                    // UI
                    cursor: this.$.data('cursor') === true && 30
                            || this.$.data('cursor') || 0,
                    thickness: this.$.data('thickness')
                               && Math.max(Math.min(this.$.data('thickness'), 1), 0.01)
                               || 0.35,
                    lineCap: this.$.data('linecap') || 'butt',
                    width: this.$.data('width') || 200,
                    height: this.$.data('height') || 200,
                    displayInput: this.$.data('displayinput') == null || this.$.data('displayinput'),
                    displayPrevious: this.$.data('displayprevious'),
                    fgColor: this.$.data('fgcolor') || '#87CEEB',
                    inputColor: this.$.data('inputcolor'),
                    font: this.$.data('font') || 'Arial',
                    fontWeight: this.$.data('font-weight') || 'bold',
                    inline: false,
                    step: this.$.data('step') || 1,
                    rotation: this.$.data('rotation'),

                    // Hooks
                    draw: null, // function () {}
                    change: null, // function (value) {}
                    cancel: null, // function () {}
                    release: null, // function (value) {}

                    // Output formatting, allows to add unit: %, ms ...
                    format: function(v) {
                        return v;
                    },
                    parse: function (v) {
                        return parseFloat(v);
                    }
                }, this.o
            );

            // finalize options
            this.o.flip = this.o.rotation === 'anticlockwise' || this.o.rotation === 'acw';
            if (!this.o.inputColor) {
                this.o.inputColor = this.o.fgColor;
            }

            // routing value
            if (this.$.is('fieldset')) {

                // fieldset = array of integer
                this.v = {};
                this.i = this.$.find('input');
                this.i.each(function(k) {
                    var $this = $(this);
                    s.i[k] = $this;
                    s.v[k] = s.o.parse($this.val());

                    $this.bind(
                        'change blur',
                        function () {
                            var val = {};
                            val[k] = $this.val();
                            s.val(s._validate(val));
                        }
                    );
                });
                this.$.find('legend').remove();
            } else {

                // input = integer
                this.i = this.$;
                this.v = this.o.parse(this.$.val());
                this.v === '' && (this.v = this.o.min);
                this.$.bind(
                    'change blur',
                    function () {
                        s.val(s._validate(s.o.parse(s.$.val())));
                    }
                );

            }

            !this.o.displayInput && this.$.hide();

            // adds needed DOM elements (canvas, div)
            this.$c = $(document.createElement('canvas')).attr({
                width: this.o.width,
                height: this.o.height
            });

            // wraps all elements in a div
            // add to DOM before Canvas init is triggered
            this.$div = $('<div style="'
                + (this.o.inline ? 'display:inline;' : '')
                + 'width:' + this.o.width + 'px;height:' + this.o.height + 'px;'
                + '"></div>');

            this.$.wrap(this.$div).before(this.$c);
            this.$div = this.$.parent();

            if (typeof G_vmlCanvasManager !== 'undefined') {
                G_vmlCanvasManager.initElement(this.$c[0]);
            }

            this.c = this.$c[0].getContext ? this.$c[0].getContext('2d') : null;

            if (!this.c) {
                throw {
                    name:        "CanvasNotSupportedException",
                    message:     "Canvas not supported. Please use excanvas on IE8.0.",
                    toString:    function(){return this.name + ": " + this.message}
                }
            }

            // hdpi support
            this.scale = (window.devicePixelRatio || 1) / (
                            this.c.webkitBackingStorePixelRatio ||
                            this.c.mozBackingStorePixelRatio ||
                            this.c.msBackingStorePixelRatio ||
                            this.c.oBackingStorePixelRatio ||
                            this.c.backingStorePixelRatio || 1
                         );

            // detects relative width / height
            this.relativeWidth =  this.o.width % 1 !== 0
                                  && this.o.width.indexOf('%');
            this.relativeHeight = this.o.height % 1 !== 0
                                  && this.o.height.indexOf('%');
            this.relative = this.relativeWidth || this.relativeHeight;

            // computes size and carves the component
            this._carve();

            // prepares props for transaction
            if (this.v instanceof Object) {
                this.cv = {};
                this.copy(this.v, this.cv);
            } else {
                this.cv = this.v;
            }

            // binds configure event
            this.$
                .bind("configure", cf)
                .parent()
                .bind("configure", cf);

            // finalize init
            this._listen()
                ._configure()
                ._xy()
                .init();

            this.isInit = true;

            this.$.val(this.o.format(this.v));
            this._draw();

            return this;
        };

        this._carve = function() {
            if (this.relative) {
                var w = this.relativeWidth ?
                        this.$div.parent().width() *
                        parseInt(this.o.width) / 100
                        : this.$div.parent().width(),
                    h = this.relativeHeight ?
                        this.$div.parent().height() *
                        parseInt(this.o.height) / 100
                        : this.$div.parent().height();

                // apply relative
                this.w = this.h = Math.min(w, h);
            } else {
                this.w = this.o.width;
                this.h = this.o.height;
            }

            // finalize div
            this.$div.css({
                'width': this.w + 'px',
                'height': this.h + 'px'
            });

            // finalize canvas with computed width
            this.$c.attr({
                width: this.w,
                height: this.h
            });

            // scaling
            if (this.scale !== 1) {
                this.$c[0].width = this.$c[0].width * this.scale;
                this.$c[0].height = this.$c[0].height * this.scale;
                this.$c.width(this.w);
                this.$c.height(this.h);
            }

            return this;
        };

        this._draw = function () {

            // canvas pre-rendering
            var d = true;

            s.g = s.c;

            s.clear();

            s.dH && (d = s.dH());

            d !== false && s.draw();
        };

        this._touch = function (e) {
            var touchMove = function (e) {
                var v = s.xy2val(
                            e.originalEvent.touches[s.t].pageX,
                            e.originalEvent.touches[s.t].pageY
                        );

                if (v == s.cv) return;

                if (s.cH && s.cH(v) === false) return;

                s.change(s._validate(v));
                s._draw();
            };

            // get touches index
            this.t = k.c.t(e);

            // First touch
            touchMove(e);

            // Touch events listeners
            k.c.d
                .bind("touchmove.k", touchMove)
                .bind(
                    "touchend.k",
                    function () {
                        k.c.d.unbind('touchmove.k touchend.k');
                        s.val(s.cv);
                    }
                );

            return this;
        };

        this._mouse = function (e) {
            var mouseMove = function (e) {
                var v = s.xy2val(e.pageX, e.pageY);

                if (v == s.cv) return;

                if (s.cH && (s.cH(v) === false)) return;

                s.change(s._validate(v));
                s._draw();
            };

            // First click
            mouseMove(e);

            // Mouse events listeners
            k.c.d
                .bind("mousemove.k", mouseMove)
                .bind(
                    // Escape key cancel current change
                    "keyup.k",
                    function (e) {
                        if (e.keyCode === 27) {
                            k.c.d.unbind("mouseup.k mousemove.k keyup.k");

                            if (s.eH && s.eH() === false)
                                return;

                            s.cancel();
                        }
                    }
                )
                .bind(
                    "mouseup.k",
                    function (e) {
                        k.c.d.unbind('mousemove.k mouseup.k keyup.k');
                        s.val(s.cv);
                    }
                );

            return this;
        };

        this._xy = function () {
            var o = this.$c.offset();
            this.x = o.left;
            this.y = o.top;

            return this;
        };

        this._listen = function () {
            if (!this.o.readOnly) {
                this.$c
                    .bind(
                        "mousedown",
                        function (e) {
                            e.preventDefault();
                            s._xy()._mouse(e);
                        }
                    )
                    .bind(
                        "touchstart",
                        function (e) {
                            e.preventDefault();
                            s._xy()._touch(e);
                        }
                    );

                this.listen();
            } else {
                this.$.attr('readonly', 'readonly');
            }

            if (this.relative) {
                $(window).resize(function() {
                    s._carve().init();
                    s._draw();
                });
            }

            return this;
        };

        this._configure = function () {

            // Hooks
            if (this.o.draw) this.dH = this.o.draw;
            if (this.o.change) this.cH = this.o.change;
            if (this.o.cancel) this.eH = this.o.cancel;
            if (this.o.release) this.rH = this.o.release;

            if (this.o.displayPrevious) {
                this.pColor = this.h2rgba(this.o.fgColor, "0.4");
                this.fgColor = this.h2rgba(this.o.fgColor, "0.6");
            } else {
                this.fgColor = this.o.fgColor;
            }

            return this;
        };

        this._clear = function () {
            this.$c[0].width = this.$c[0].width;
        };

        this._validate = function (v) {
            var val = (~~ (((v < 0) ? -0.5 : 0.5) + (v/this.o.step))) * this.o.step;
            return Math.round(val * 100) / 100;
        };

        // Abstract methods
        this.listen = function () {}; // on start, one time
        this.extend = function () {}; // each time configure triggered
        this.init = function () {}; // each time configure triggered
        this.change = function (v) {}; // on change
        this.val = function (v) {}; // on release
        this.xy2val = function (x, y) {}; //
        this.draw = function () {}; // on change / on release
        this.clear = function () { this._clear(); };

        // Utils
        this.h2rgba = function (h, a) {
            var rgb;
            h = h.substring(1,7);
            rgb = [
                parseInt(h.substring(0,2), 16),
                parseInt(h.substring(2,4), 16),
                parseInt(h.substring(4,6), 16)
            ];

            return "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + a + ")";
        };

        this.copy = function (f, t) {
            for (var i in f) {
                t[i] = f[i];
            }
        };
    };


    /**
     * k.Dial
     */
    k.Dial = function () {
        k.o.call(this);

        this.startAngle = null;
        this.xy = null;
        this.radius = null;
        this.lineWidth = null;
        this.cursorExt = null;
        this.w2 = null;
        this.PI2 = 2*Math.PI;

        this.extend = function () {
            this.o = $.extend({
                bgColor: this.$.data('bgcolor') || '#EEEEEE',
                angleOffset: this.$.data('angleoffset') || 0,
                angleArc: this.$.data('anglearc') || 360,
                inline: true
            }, this.o);
        };

        this.val = function (v, triggerRelease) {
            if (null != v) {

                // reverse format
                v = this.o.parse(v);

                if (triggerRelease !== false
                    && v != this.v
                    && this.rH
                    && this.rH(v) === false) { return; }

                this.cv = this.o.stopper ? max(min(v, this.o.max), this.o.min) : v;
                this.v = this.cv;
                this.$.val(this.o.format(this.v));
                this._draw();
            } else {
                return this.v;
            }
        };

        this.xy2val = function (x, y) {
            var a, ret;

            a = Math.atan2(
                        x - (this.x + this.w2),
                        - (y - this.y - this.w2)
                    ) - this.angleOffset;

            if (this.o.flip) {
                a = this.angleArc - a - this.PI2;
            }

            if (this.angleArc != this.PI2 && (a < 0) && (a > -0.5)) {

                // if isset angleArc option, set to min if .5 under min
                a = 0;
            } else if (a < 0) {
                a += this.PI2;
            }

            ret = (a * (this.o.max - this.o.min) / this.angleArc) + this.o.min;

            this.o.stopper && (ret = max(min(ret, this.o.max), this.o.min));

            return ret;
        };

        this.listen = function () {

            // bind MouseWheel
            var s = this, mwTimerStop,
                mwTimerRelease,
                mw = function (e) {
                    e.preventDefault();

                    var ori = e.originalEvent,
                        deltaX = ori.detail || ori.wheelDeltaX,
                        deltaY = ori.detail || ori.wheelDeltaY,
                        v = s._validate(s.o.parse(s.$.val()))
                            + (
                                deltaX > 0 || deltaY > 0
                                ? s.o.step
                                : deltaX < 0 || deltaY < 0 ? -s.o.step : 0
                              );

                    v = max(min(v, s.o.max), s.o.min);

                    s.val(v, false);

                    if (s.rH) {
                        // Handle mousewheel stop
                        clearTimeout(mwTimerStop);
                        mwTimerStop = setTimeout(function () {
                            s.rH(v);
                            mwTimerStop = null;
                        }, 100);

                        // Handle mousewheel releases
                        if (!mwTimerRelease) {
                            mwTimerRelease = setTimeout(function () {
                                if (mwTimerStop)
                                    s.rH(v);
                                mwTimerRelease = null;
                            }, 200);
                        }
                    }
                },
                kval,
                to,
                m = 1,
                kv = {
                    37: -s.o.step,
                    38: s.o.step,
                    39: s.o.step,
                    40: -s.o.step
                };

            this.$
                .bind(
                    "keydown",
                    function (e) {
                        var kc = e.keyCode;

                        // numpad support
                        if (kc >= 96 && kc <= 105) {
                            kc = e.keyCode = kc - 48;
                        }

                        kval = parseInt(String.fromCharCode(kc));

                        if (isNaN(kval)) {
                            (kc !== 13)                     // enter
                            && kc !== 8                     // bs
                            && kc !== 9                     // tab
                            && kc !== 189                   // -
                            && (kc !== 190
                                || s.$.val().match(/\./))   // . allowed once
                            && e.preventDefault();

                            // arrows
                            if ($.inArray(kc,[37,38,39,40]) > -1) {
                                e.preventDefault();

                                var v = s.o.parse(s.$.val()) + kv[kc] * m;
                                s.o.stopper && (v = max(min(v, s.o.max), s.o.min));

                                s.change(s._validate(v));
                                s._draw();

                                // long time keydown speed-up
                                to = window.setTimeout(function () {
                                    m *= 2;
                                }, 30);
                            }
                        }
                    }
                )
                .bind(
                    "keyup",
                    function (e) {
                        if (isNaN(kval)) {
                            if (to) {
                                window.clearTimeout(to);
                                to = null;
                                m = 1;
                                s.val(s.$.val());
                            }
                        } else {
                            // kval postcond
                            (s.$.val() > s.o.max && s.$.val(s.o.max))
                            || (s.$.val() < s.o.min && s.$.val(s.o.min));
                        }
                    }
                );

            this.$c.bind("mousewheel DOMMouseScroll", mw);
            this.$.bind("mousewheel DOMMouseScroll", mw);
        };

        this.init = function () {
            if (this.v < this.o.min
                || this.v > this.o.max) { this.v = this.o.min; }

            this.$.val(this.v);
            this.w2 = this.w / 2;
            this.cursorExt = this.o.cursor / 100;
            this.xy = this.w2 * this.scale;
            this.lineWidth = this.xy * this.o.thickness;
            this.lineCap = this.o.lineCap;
            this.radius = this.xy - this.lineWidth / 2;

            this.o.angleOffset
            && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset);

            this.o.angleArc
            && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc);

            // deg to rad
            this.angleOffset = this.o.angleOffset * Math.PI / 180;
            this.angleArc = this.o.angleArc * Math.PI / 180;

            // compute start and end angles
            this.startAngle = 1.5 * Math.PI + this.angleOffset;
            this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;

            var s = max(
                String(Math.abs(this.o.max)).length,
                String(Math.abs(this.o.min)).length,
                2
            ) + 2;

            this.o.displayInput
                && this.i.css({
                        'width' : ((this.w / 2 + 4) >> 0) + 'px',
                        'height' : ((this.w / 3) >> 0) + 'px',
                        'position' : 'absolute',
                        'vertical-align' : 'middle',
                        'margin-top' : ((this.w / 3) >> 0) + 'px',
                        'margin-left' : '-' + ((this.w * 3 / 4 + 2) >> 0) + 'px',
                        'border' : 0,
                        'background' : 'none',
                        'font' : this.o.fontWeight + ' ' + ((this.w / s) >> 0) + 'px ' + this.o.font,
                        'text-align' : 'center',
                        'color' : this.o.inputColor || this.o.fgColor,
                        'padding' : '0px',
                        '-webkit-appearance': 'none'
                        }) || this.i.css({
                            'width': '0px',
                            'visibility': 'hidden'
                        });
        };

        this.change = function (v) {
            this.cv = v;
            this.$.val(this.o.format(v));
        };

        this.angle = function (v) {
            return (v - this.o.min) * this.angleArc / (this.o.max - this.o.min);
        };

        this.arc = function (v) {
          var sa, ea;
          v = this.angle(v);
          if (this.o.flip) {
              sa = this.endAngle + 0.00001;
              ea = sa - v - 0.00001;
          } else {
              sa = this.startAngle - 0.00001;
              ea = sa + v + 0.00001;
          }
          this.o.cursor
              && (sa = ea - this.cursorExt)
              && (ea = ea + this.cursorExt);

          return {
              s: sa,
              e: ea,
              d: this.o.flip && !this.o.cursor
          };
        };

        this.draw = function () {
            var c = this.g,                 // context
                a = this.arc(this.cv),      // Arc
                pa,                         // Previous arc
                r = 1;

            c.lineWidth = this.lineWidth;
            c.lineCap = this.lineCap;

            if (this.o.bgColor !== "none") {
                c.beginPath();
                    c.strokeStyle = this.o.bgColor;
                    c.arc(this.xy, this.xy, this.radius, this.endAngle - 0.00001, this.startAngle + 0.00001, true);
                c.stroke();
            }

            if (this.o.displayPrevious) {
                pa = this.arc(this.v);
                c.beginPath();
                c.strokeStyle = this.pColor;
                c.arc(this.xy, this.xy, this.radius, pa.s, pa.e, pa.d);
                c.stroke();
                r = this.cv == this.v;
            }

            c.beginPath();
            c.strokeStyle = r ? this.o.fgColor : this.fgColor ;
            c.arc(this.xy, this.xy, this.radius, a.s, a.e, a.d);
            c.stroke();
        };

        this.cancel = function () {
            this.val(this.v);
        };
    };

    $.fn.dial = $.fn.knob = function (o) {
        return this.each(
            function () {
                var d = new k.Dial();
                d.o = o;
                d.$ = $(this);
                d.run();
            }
        ).parent();
    };

}));

$(function($) {

	"use strict";

	//Main Slider
	if($('#main-slider').length){

		jQuery('.tp-banner').show().revolution({
		  delay:7000,
		  startwidth:1170,
		  startheight:650,
		  hideThumbs:1400,

		  thumbWidth:80,
		  thumbHeight:50,
		  thumbAmount:5,

		  navigationType:"bullet",
		  navigationArrows:"0",
		  navigationStyle:"preview4",

		  touchenabled:"on",
		  onHoverStop:"off",

		  swipe_velocity: 0.7,
		  swipe_min_touches: 1,
		  swipe_max_touches: 1,
		  drag_block_vertical: false,

		  parallax:"mouse",
		  parallaxBgFreeze:"on",
		  parallaxLevels:[7,4,3,2,5,4,3,2,1,0],

		  keyboardNavigation:"off",

		  navigationHAlign:"center",
		  navigationVAlign:"bottom",
		  navigationHOffset:0,
		  navigationVOffset:20,

		  soloArrowLeftHalign:"left",
		  soloArrowLeftValign:"center",
		  soloArrowLeftHOffset:20,
		  soloArrowLeftVOffset:0,

		  soloArrowRightHalign:"right",
		  soloArrowRightValign:"center",
		  soloArrowRightHOffset:20,
		  soloArrowRightVOffset:0,

		  shadow:0,
		  fullWidth:"on",
		  fullScreen:"off",

		  spinner:"spinner4",

		  stopLoop:"off",
		  stopAfterLoops:-1,
		  stopAtSlide:-1,

		  shuffle:"off",

		  autoHeight:"off",
		  forceFullWidth:"on",

		  hideThumbsOnMobile:"off",
		  hideNavDelayOnMobile:1500,
		  hideBulletsOnMobile:"on",
		  hideArrowsOnMobile:"off",
		  hideThumbsUnderResolution:0,

		  hideSliderAtLimit:0,
		  hideCaptionAtLimit:0,
		  hideAllCaptionAtLilmit:0,
		  startWithSlide:0,
		  videoJsPath:"../video/",
		  fullScreenOffsetContainer: "#main-slider"
	  });


	}

	//Curved Carousel Slider
	if($('.curved-carousel .slider').length){
		$('.curved-carousel .slider').bxSlider({
			adaptiveHeight: true,
			auto:true,
			controls: false,
			mode:'fade',
			pause: 7000,
			speed: 1000,
			pager:true
		});

	}

	//Tweets Slider
	if($('.tweets-slider').length){
		$('.tweets-slider').bxSlider({
			adaptiveHeight: true,
			auto:true,
			controls: false,
			mode:'fade',
			pause: 5000,
			speed: 1000,
			pager:false
		});
	}

	//Image Scroller
	if($(".image-scroller").length){

		$('.image-scroller').bxSlider({
		  minSlides: 1,
		  maxSlides: 1,
		  slideWidth: 600,
		  slideMargin: 0,
		  useCSS: false,
		  ticker: true,
		  autoHover:true,
		  tickerHover:true,
		  speed: 30000,
		  infiniteLoop: true
		});
	}

	//Jquery Knob animation -- Fact Counter
	if($('.dial').length){
		$('.dial').appear(function(){
          var elm = $(this);
          var color = elm.attr("data-fgColor");
          var perc = elm.attr("value");

          elm.knob({
               'value':0,
                'min':0,
                'max':100,
                "skin":"tron",
                "readOnly":true,
                "thickness":.15,
				'dynamicDraw': true,
				"displayInput":false
          });

          $({value: 0}).animate({ value: perc }, {
			  duration: 1000,
              easing: 'swing',
              progress: function () {
				  elm.val(Math.ceil(this.value)).trigger('change')
              }
          });

          //circular progress bar color
          $(this).append(function() {
              elm.parent().parent().find('.circular-bar-content').css('color',color);
              elm.parent().parent().find('.circular-bar-content label').text(perc+'%');
          });

          },{accY: 10});
    }
});
/*!
 * Select2 4.0.3
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function (jQuery) {
  // This is needed so we can catch the AMD loader configuration and use it
  // The inner file should be wrapped (by `banner.start.js`) in a function that
  // returns the AMD loader references.
  var S2 =
(function () {
  // Restore the Select2 AMD loader so it can be used
  // Needed mostly in the language files, where the loader is not inserted
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
    var S2 = jQuery.fn.select2.amd;
  }
var S2;(function () { if (!S2 || !S2.requirejs) {
if (!S2) { S2 = {}; } else { require = S2; }
/**
 * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*jslint sloppy: true */
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name && name.charAt(0) === ".") {
            //If have a base name, try to normalize against it,
            //otherwise, assume it is a top-level require that will
            //be relative to baseUrl in the end.
            if (baseName) {
                name = name.split('/');
                lastIndex = name.length - 1;

                // Node .js allowance:
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                }

                //Lop off the last part of baseParts, so that . matches the
                //"directory" and not name of the baseName's module. For instance,
                //baseName of "one/two/three", maps to "one/two/three.js", but we
                //want the directory, "one/two" for this normalization.
                name = baseParts.slice(0, baseParts.length - 1).concat(name);

                //start trimDots
                for (i = 0; i < name.length; i += 1) {
                    part = name[i];
                    if (part === ".") {
                        name.splice(i, 1);
                        i -= 1;
                    } else if (part === "..") {
                        if (i === 1 && (name[2] === '..' || name[0] === '..')) {
                            //End of the line. Keep at least one non-dot
                            //path segment at the front so it can be mapped
                            //correctly to disk. Otherwise, there is likely
                            //no path mapping for a path starting with '..'.
                            //This can still fail, but catches the most reasonable
                            //uses of ..
                            break;
                        } else if (i > 0) {
                            name.splice(i - 1, 2);
                            i -= 2;
                        }
                    }
                }
                //end trimDots

                name = name.join("/");
            } else if (name.indexOf('./') === 0) {
                // No baseName, so this is ID is resolved relative
                // to baseUrl, pull off the leading dot.
                name = name.substring(2);
            }
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            var args = aps.call(arguments, 0);

            //If first arg is not require('string'), and there is only
            //one arg, it is the array form without a callback. Insert
            //a null so that the following concat is correct.
            if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
            }
            return req.apply(undef, args.concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relName) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relName));
            } else {
                name = normalize(name, relName);
            }
        } else {
            name = normalize(name, relName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i,
            args = [],
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relName);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                           hasProp(waiting, depName) ||
                           hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback ? callback.apply(defined[name], args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                        cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, callback).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
            }
            if (!callback) {
                return;
            }

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
    };

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {
        if (typeof name !== 'string') {
            throw new Error('See almond README: incorrect module build, no module name');
        }

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());

S2.requirejs = requirejs;S2.require = require;S2.define = define;
}
}());
S2.define("almond", function(){});

/* global jQuery:false, $:false */
S2.define('jquery',[],function () {
  var _$ = jQuery || $;

  if (_$ == null && console && console.error) {
    console.error(
      'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
      'found. Make sure that you are including jQuery before Select2 on your ' +
      'web page.'
    );
  }

  return _$;
});

S2.define('select2/utils',[
  'jquery'
], function ($) {
  var Utils = {};

  Utils.Extend = function (ChildClass, SuperClass) {
    var __hasProp = {}.hasOwnProperty;

    function BaseConstructor () {
      this.constructor = ChildClass;
    }

    for (var key in SuperClass) {
      if (__hasProp.call(SuperClass, key)) {
        ChildClass[key] = SuperClass[key];
      }
    }

    BaseConstructor.prototype = SuperClass.prototype;
    ChildClass.prototype = new BaseConstructor();
    ChildClass.__super__ = SuperClass.prototype;

    return ChildClass;
  };

  function getMethods (theClass) {
    var proto = theClass.prototype;

    var methods = [];

    for (var methodName in proto) {
      var m = proto[methodName];

      if (typeof m !== 'function') {
        continue;
      }

      if (methodName === 'constructor') {
        continue;
      }

      methods.push(methodName);
    }

    return methods;
  }

  Utils.Decorate = function (SuperClass, DecoratorClass) {
    var decoratedMethods = getMethods(DecoratorClass);
    var superMethods = getMethods(SuperClass);

    function DecoratedClass () {
      var unshift = Array.prototype.unshift;

      var argCount = DecoratorClass.prototype.constructor.length;

      var calledConstructor = SuperClass.prototype.constructor;

      if (argCount > 0) {
        unshift.call(arguments, SuperClass.prototype.constructor);

        calledConstructor = DecoratorClass.prototype.constructor;
      }

      calledConstructor.apply(this, arguments);
    }

    DecoratorClass.displayName = SuperClass.displayName;

    function ctr () {
      this.constructor = DecoratedClass;
    }

    DecoratedClass.prototype = new ctr();

    for (var m = 0; m < superMethods.length; m++) {
        var superMethod = superMethods[m];

        DecoratedClass.prototype[superMethod] =
          SuperClass.prototype[superMethod];
    }

    var calledMethod = function (methodName) {
      // Stub out the original method if it's not decorating an actual method
      var originalMethod = function () {};

      if (methodName in DecoratedClass.prototype) {
        originalMethod = DecoratedClass.prototype[methodName];
      }

      var decoratedMethod = DecoratorClass.prototype[methodName];

      return function () {
        var unshift = Array.prototype.unshift;

        unshift.call(arguments, originalMethod);

        return decoratedMethod.apply(this, arguments);
      };
    };

    for (var d = 0; d < decoratedMethods.length; d++) {
      var decoratedMethod = decoratedMethods[d];

      DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
    }

    return DecoratedClass;
  };

  var Observable = function () {
    this.listeners = {};
  };

  Observable.prototype.on = function (event, callback) {
    this.listeners = this.listeners || {};

    if (event in this.listeners) {
      this.listeners[event].push(callback);
    } else {
      this.listeners[event] = [callback];
    }
  };

  Observable.prototype.trigger = function (event) {
    var slice = Array.prototype.slice;
    var params = slice.call(arguments, 1);

    this.listeners = this.listeners || {};

    // Params should always come in as an array
    if (params == null) {
      params = [];
    }

    // If there are no arguments to the event, use a temporary object
    if (params.length === 0) {
      params.push({});
    }

    // Set the `_type` of the first object to the event
    params[0]._type = event;

    if (event in this.listeners) {
      this.invoke(this.listeners[event], slice.call(arguments, 1));
    }

    if ('*' in this.listeners) {
      this.invoke(this.listeners['*'], arguments);
    }
  };

  Observable.prototype.invoke = function (listeners, params) {
    for (var i = 0, len = listeners.length; i < len; i++) {
      listeners[i].apply(this, params);
    }
  };

  Utils.Observable = Observable;

  Utils.generateChars = function (length) {
    var chars = '';

    for (var i = 0; i < length; i++) {
      var randomChar = Math.floor(Math.random() * 36);
      chars += randomChar.toString(36);
    }

    return chars;
  };

  Utils.bind = function (func, context) {
    return function () {
      func.apply(context, arguments);
    };
  };

  Utils._convertData = function (data) {
    for (var originalKey in data) {
      var keys = originalKey.split('-');

      var dataLevel = data;

      if (keys.length === 1) {
        continue;
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k];

        // Lowercase the first letter
        // By default, dash-separated becomes camelCase
        key = key.substring(0, 1).toLowerCase() + key.substring(1);

        if (!(key in dataLevel)) {
          dataLevel[key] = {};
        }

        if (k == keys.length - 1) {
          dataLevel[key] = data[originalKey];
        }

        dataLevel = dataLevel[key];
      }

      delete data[originalKey];
    }

    return data;
  };

  Utils.hasScroll = function (index, el) {
    // Adapted from the function created by @ShadowScripter
    // and adapted by @BillBarry on the Stack Exchange Code Review website.
    // The original code can be found at
    // http://codereview.stackexchange.com/q/13338
    // and was designed to be used with the Sizzle selector engine.

    var $el = $(el);
    var overflowX = el.style.overflowX;
    var overflowY = el.style.overflowY;

    //Check both x and y declarations
    if (overflowX === overflowY &&
        (overflowY === 'hidden' || overflowY === 'visible')) {
      return false;
    }

    if (overflowX === 'scroll' || overflowY === 'scroll') {
      return true;
    }

    return ($el.innerHeight() < el.scrollHeight ||
      $el.innerWidth() < el.scrollWidth);
  };

  Utils.escapeMarkup = function (markup) {
    var replaceMap = {
      '\\': '&#92;',
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#39;',
      '/': '&#47;'
    };

    // Do not try to escape the markup if it's not a string
    if (typeof markup !== 'string') {
      return markup;
    }

    return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
      return replaceMap[match];
    });
  };

  // Append an array of jQuery nodes to a given element.
  Utils.appendMany = function ($element, $nodes) {
    // jQuery 1.7.x does not support $.fn.append() with an array
    // Fall back to a jQuery object collection using $.fn.add()
    if ($.fn.jquery.substr(0, 3) === '1.7') {
      var $jqNodes = $();

      $.map($nodes, function (node) {
        $jqNodes = $jqNodes.add(node);
      });

      $nodes = $jqNodes;
    }

    $element.append($nodes);
  };

  return Utils;
});

S2.define('select2/results',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Results ($element, options, dataAdapter) {
    this.$element = $element;
    this.data = dataAdapter;
    this.options = options;

    Results.__super__.constructor.call(this);
  }

  Utils.Extend(Results, Utils.Observable);

  Results.prototype.render = function () {
    var $results = $(
      '<ul class="select2-results__options" role="tree"></ul>'
    );

    if (this.options.get('multiple')) {
      $results.attr('aria-multiselectable', 'true');
    }

    this.$results = $results;

    return $results;
  };

  Results.prototype.clear = function () {
    this.$results.empty();
  };

  Results.prototype.displayMessage = function (params) {
    var escapeMarkup = this.options.get('escapeMarkup');

    this.clear();
    this.hideLoading();

    var $message = $(
      '<li role="treeitem" aria-live="assertive"' +
      ' class="select2-results__option"></li>'
    );

    var message = this.options.get('translations').get(params.message);

    $message.append(
      escapeMarkup(
        message(params.args)
      )
    );

    $message[0].className += ' select2-results__message';

    this.$results.append($message);
  };

  Results.prototype.hideMessages = function () {
    this.$results.find('.select2-results__message').remove();
  };

  Results.prototype.append = function (data) {
    this.hideLoading();

    var $options = [];

    if (data.results == null || data.results.length === 0) {
      if (this.$results.children().length === 0) {
        this.trigger('results:message', {
          message: 'noResults'
        });
      }

      return;
    }

    data.results = this.sort(data.results);

    for (var d = 0; d < data.results.length; d++) {
      var item = data.results[d];

      var $option = this.option(item);

      $options.push($option);
    }

    this.$results.append($options);
  };

  Results.prototype.position = function ($results, $dropdown) {
    var $resultsContainer = $dropdown.find('.select2-results');
    $resultsContainer.append($results);
  };

  Results.prototype.sort = function (data) {
    var sorter = this.options.get('sorter');

    return sorter(data);
  };

  Results.prototype.highlightFirstItem = function () {
    var $options = this.$results
      .find('.select2-results__option[aria-selected]');

    var $selected = $options.filter('[aria-selected=true]');

    // Check if there are any selected options
    if ($selected.length > 0) {
      // If there are selected options, highlight the first
      $selected.first().trigger('mouseenter');
    } else {
      // If there are no selected options, highlight the first option
      // in the dropdown
      $options.first().trigger('mouseenter');
    }

    this.ensureHighlightVisible();
  };

  Results.prototype.setClasses = function () {
    var self = this;

    this.data.current(function (selected) {
      var selectedIds = $.map(selected, function (s) {
        return s.id.toString();
      });

      var $options = self.$results
        .find('.select2-results__option[aria-selected]');

      $options.each(function () {
        var $option = $(this);

        var item = $.data(this, 'data');

        // id needs to be converted to a string when comparing
        var id = '' + item.id;

        if ((item.element != null && item.element.selected) ||
            (item.element == null && $.inArray(id, selectedIds) > -1)) {
          $option.attr('aria-selected', 'true');
        } else {
          $option.attr('aria-selected', 'false');
        }
      });

    });
  };

  Results.prototype.showLoading = function (params) {
    this.hideLoading();

    var loadingMore = this.options.get('translations').get('searching');

    var loading = {
      disabled: true,
      loading: true,
      text: loadingMore(params)
    };
    var $loading = this.option(loading);
    $loading.className += ' loading-results';

    this.$results.prepend($loading);
  };

  Results.prototype.hideLoading = function () {
    this.$results.find('.loading-results').remove();
  };

  Results.prototype.option = function (data) {
    var option = document.createElement('li');
    option.className = 'select2-results__option';

    var attrs = {
      'role': 'treeitem',
      'aria-selected': 'false'
    };

    if (data.disabled) {
      delete attrs['aria-selected'];
      attrs['aria-disabled'] = 'true';
    }

    if (data.id == null) {
      delete attrs['aria-selected'];
    }

    if (data._resultId != null) {
      option.id = data._resultId;
    }

    if (data.title) {
      option.title = data.title;
    }

    if (data.children) {
      attrs.role = 'group';
      attrs['aria-label'] = data.text;
      delete attrs['aria-selected'];
    }

    for (var attr in attrs) {
      var val = attrs[attr];

      option.setAttribute(attr, val);
    }

    if (data.children) {
      var $option = $(option);

      var label = document.createElement('strong');
      label.className = 'select2-results__group';

      var $label = $(label);
      this.template(data, label);

      var $children = [];

      for (var c = 0; c < data.children.length; c++) {
        var child = data.children[c];

        var $child = this.option(child);

        $children.push($child);
      }

      var $childrenContainer = $('<ul></ul>', {
        'class': 'select2-results__options select2-results__options--nested'
      });

      $childrenContainer.append($children);

      $option.append(label);
      $option.append($childrenContainer);
    } else {
      this.template(data, option);
    }

    $.data(option, 'data', data);

    return option;
  };

  Results.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-results';

    this.$results.attr('id', id);

    container.on('results:all', function (params) {
      self.clear();
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
        self.highlightFirstItem();
      }
    });

    container.on('results:append', function (params) {
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
      }
    });

    container.on('query', function (params) {
      self.hideMessages();
      self.showLoading(params);
    });

    container.on('select', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();
      self.highlightFirstItem();
    });

    container.on('unselect', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();
      self.highlightFirstItem();
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expended="true"
      self.$results.attr('aria-expanded', 'true');
      self.$results.attr('aria-hidden', 'false');

      self.setClasses();
      self.ensureHighlightVisible();
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expended="false"
      self.$results.attr('aria-expanded', 'false');
      self.$results.attr('aria-hidden', 'true');
      self.$results.removeAttr('aria-activedescendant');
    });

    container.on('results:toggle', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      $highlighted.trigger('mouseup');
    });

    container.on('results:select', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      var data = $highlighted.data('data');

      if ($highlighted.attr('aria-selected') == 'true') {
        self.trigger('close', {});
      } else {
        self.trigger('select', {
          data: data
        });
      }
    });

    container.on('results:previous', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected]');

      var currentIndex = $options.index($highlighted);

      // If we are already at te top, don't move further
      if (currentIndex === 0) {
        return;
      }

      var nextIndex = currentIndex - 1;

      // If none are highlighted, highlight the first
      if ($highlighted.length === 0) {
        nextIndex = 0;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top;
      var nextTop = $next.offset().top;
      var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextTop - currentOffset < 0) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:next', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected]');

      var currentIndex = $options.index($highlighted);

      var nextIndex = currentIndex + 1;

      // If we are at the last option, stay there
      if (nextIndex >= $options.length) {
        return;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var nextBottom = $next.offset().top + $next.outerHeight(false);
      var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextBottom > currentOffset) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:focus', function (params) {
      params.element.addClass('select2-results__option--highlighted');
    });

    container.on('results:message', function (params) {
      self.displayMessage(params);
    });

    if ($.fn.mousewheel) {
      this.$results.on('mousewheel', function (e) {
        var top = self.$results.scrollTop();

        var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;

        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

        if (isAtTop) {
          self.$results.scrollTop(0);

          e.preventDefault();
          e.stopPropagation();
        } else if (isAtBottom) {
          self.$results.scrollTop(
            self.$results.get(0).scrollHeight - self.$results.height()
          );

          e.preventDefault();
          e.stopPropagation();
        }
      });
    }

    this.$results.on('mouseup', '.select2-results__option[aria-selected]',
      function (evt) {
      var $this = $(this);

      var data = $this.data('data');

      if ($this.attr('aria-selected') === 'true') {
        if (self.options.get('multiple')) {
          self.trigger('unselect', {
            originalEvent: evt,
            data: data
          });
        } else {
          self.trigger('close', {});
        }

        return;
      }

      self.trigger('select', {
        originalEvent: evt,
        data: data
      });
    });

    this.$results.on('mouseenter', '.select2-results__option[aria-selected]',
      function (evt) {
      var data = $(this).data('data');

      self.getHighlightedResults()
          .removeClass('select2-results__option--highlighted');

      self.trigger('results:focus', {
        data: data,
        element: $(this)
      });
    });
  };

  Results.prototype.getHighlightedResults = function () {
    var $highlighted = this.$results
    .find('.select2-results__option--highlighted');

    return $highlighted;
  };

  Results.prototype.destroy = function () {
    this.$results.remove();
  };

  Results.prototype.ensureHighlightVisible = function () {
    var $highlighted = this.getHighlightedResults();

    if ($highlighted.length === 0) {
      return;
    }

    var $options = this.$results.find('[aria-selected]');

    var currentIndex = $options.index($highlighted);

    var currentOffset = this.$results.offset().top;
    var nextTop = $highlighted.offset().top;
    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

    var offsetDelta = nextTop - currentOffset;
    nextOffset -= $highlighted.outerHeight(false) * 2;

    if (currentIndex <= 2) {
      this.$results.scrollTop(0);
    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
      this.$results.scrollTop(nextOffset);
    }
  };

  Results.prototype.template = function (result, container) {
    var template = this.options.get('templateResult');
    var escapeMarkup = this.options.get('escapeMarkup');

    var content = template(result, container);

    if (content == null) {
      container.style.display = 'none';
    } else if (typeof content === 'string') {
      container.innerHTML = escapeMarkup(content);
    } else {
      $(container).append(content);
    }
  };

  return Results;
});

S2.define('select2/keys',[

], function () {
  var KEYS = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46
  };

  return KEYS;
});

S2.define('select2/selection/base',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function BaseSelection ($element, options) {
    this.$element = $element;
    this.options = options;

    BaseSelection.__super__.constructor.call(this);
  }

  Utils.Extend(BaseSelection, Utils.Observable);

  BaseSelection.prototype.render = function () {
    var $selection = $(
      '<span class="select2-selection" role="combobox" ' +
      ' aria-haspopup="true" aria-expanded="false">' +
      '</span>'
    );

    this._tabindex = 0;

    if (this.$element.data('old-tabindex') != null) {
      this._tabindex = this.$element.data('old-tabindex');
    } else if (this.$element.attr('tabindex') != null) {
      this._tabindex = this.$element.attr('tabindex');
    }

    $selection.attr('title', this.$element.attr('title'));
    $selection.attr('tabindex', this._tabindex);

    this.$selection = $selection;

    return $selection;
  };

  BaseSelection.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-container';
    var resultsId = container.id + '-results';

    this.container = container;

    this.$selection.on('focus', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('blur', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      if (evt.which === KEYS.SPACE) {
        evt.preventDefault();
      }
    });

    container.on('results:focus', function (params) {
      self.$selection.attr('aria-activedescendant', params.data._resultId);
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expanded="true"
      self.$selection.attr('aria-expanded', 'true');
      self.$selection.attr('aria-owns', resultsId);

      self._attachCloseHandler(container);
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expanded="false"
      self.$selection.attr('aria-expanded', 'false');
      self.$selection.removeAttr('aria-activedescendant');
      self.$selection.removeAttr('aria-owns');

      self.$selection.focus();

      self._detachCloseHandler(container);
    });

    container.on('enable', function () {
      self.$selection.attr('tabindex', self._tabindex);
    });

    container.on('disable', function () {
      self.$selection.attr('tabindex', '-1');
    });
  };

  BaseSelection.prototype._handleBlur = function (evt) {
    var self = this;

    // This needs to be delayed as the active element is the body when the tab
    // key is pressed, possibly along with others.
    window.setTimeout(function () {
      // Don't trigger `blur` if the focus is still in the selection
      if (
        (document.activeElement == self.$selection[0]) ||
        ($.contains(self.$selection[0], document.activeElement))
      ) {
        return;
      }

      self.trigger('blur', evt);
    }, 1);
  };

  BaseSelection.prototype._attachCloseHandler = function (container) {
    var self = this;

    $(document.body).on('mousedown.select2.' + container.id, function (e) {
      var $target = $(e.target);

      var $select = $target.closest('.select2');

      var $all = $('.select2.select2-container--open');

      $all.each(function () {
        var $this = $(this);

        if (this == $select[0]) {
          return;
        }

        var $element = $this.data('element');

        $element.select2('close');
      });
    });
  };

  BaseSelection.prototype._detachCloseHandler = function (container) {
    $(document.body).off('mousedown.select2.' + container.id);
  };

  BaseSelection.prototype.position = function ($selection, $container) {
    var $selectionContainer = $container.find('.selection');
    $selectionContainer.append($selection);
  };

  BaseSelection.prototype.destroy = function () {
    this._detachCloseHandler(this.container);
  };

  BaseSelection.prototype.update = function (data) {
    throw new Error('The `update` method must be defined in child classes.');
  };

  return BaseSelection;
});

S2.define('select2/selection/single',[
  'jquery',
  './base',
  '../utils',
  '../keys'
], function ($, BaseSelection, Utils, KEYS) {
  function SingleSelection () {
    SingleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(SingleSelection, BaseSelection);

  SingleSelection.prototype.render = function () {
    var $selection = SingleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--single');

    $selection.html(
      '<span class="select2-selection__rendered"></span>' +
      '<span class="select2-selection__arrow" role="presentation">' +
        '<b role="presentation"></b>' +
      '</span>'
    );

    return $selection;
  };

  SingleSelection.prototype.bind = function (container, $container) {
    var self = this;

    SingleSelection.__super__.bind.apply(this, arguments);

    var id = container.id + '-container';

    this.$selection.find('.select2-selection__rendered').attr('id', id);
    this.$selection.attr('aria-labelledby', id);

    this.$selection.on('mousedown', function (evt) {
      // Only respond to left clicks
      if (evt.which !== 1) {
        return;
      }

      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on('focus', function (evt) {
      // User focuses on the container
    });

    this.$selection.on('blur', function (evt) {
      // User exits the container
    });

    container.on('focus', function (evt) {
      if (!container.isOpen()) {
        self.$selection.focus();
      }
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });
  };

  SingleSelection.prototype.clear = function () {
    this.$selection.find('.select2-selection__rendered').empty();
  };

  SingleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  SingleSelection.prototype.selectionContainer = function () {
    return $('<span></span>');
  };

  SingleSelection.prototype.update = function (data) {
    if (data.length === 0) {
      this.clear();
      return;
    }

    var selection = data[0];

    var $rendered = this.$selection.find('.select2-selection__rendered');
    var formatted = this.display(selection, $rendered);

    $rendered.empty().append(formatted);
    $rendered.prop('title', selection.title || selection.text);
  };

  return SingleSelection;
});

S2.define('select2/selection/multiple',[
  'jquery',
  './base',
  '../utils'
], function ($, BaseSelection, Utils) {
  function MultipleSelection ($element, options) {
    MultipleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(MultipleSelection, BaseSelection);

  MultipleSelection.prototype.render = function () {
    var $selection = MultipleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--multiple');

    $selection.html(
      '<ul class="select2-selection__rendered"></ul>'
    );

    return $selection;
  };

  MultipleSelection.prototype.bind = function (container, $container) {
    var self = this;

    MultipleSelection.__super__.bind.apply(this, arguments);

    this.$selection.on('click', function (evt) {
      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on(
      'click',
      '.select2-selection__choice__remove',
      function (evt) {
        // Ignore the event if it is disabled
        if (self.options.get('disabled')) {
          return;
        }

        var $remove = $(this);
        var $selection = $remove.parent();

        var data = $selection.data('data');

        self.trigger('unselect', {
          originalEvent: evt,
          data: data
        });
      }
    );
  };

  MultipleSelection.prototype.clear = function () {
    this.$selection.find('.select2-selection__rendered').empty();
  };

  MultipleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  MultipleSelection.prototype.selectionContainer = function () {
    var $container = $(
      '<li class="select2-selection__choice">' +
        '<span class="select2-selection__choice__remove" role="presentation">' +
          '&times;' +
        '</span>' +
      '</li>'
    );

    return $container;
  };

  MultipleSelection.prototype.update = function (data) {
    this.clear();

    if (data.length === 0) {
      return;
    }

    var $selections = [];

    for (var d = 0; d < data.length; d++) {
      var selection = data[d];

      var $selection = this.selectionContainer();
      var formatted = this.display(selection, $selection);

      $selection.append(formatted);
      $selection.prop('title', selection.title || selection.text);

      $selection.data('data', selection);

      $selections.push($selection);
    }

    var $rendered = this.$selection.find('.select2-selection__rendered');

    Utils.appendMany($rendered, $selections);
  };

  return MultipleSelection;
});

S2.define('select2/selection/placeholder',[
  '../utils'
], function (Utils) {
  function Placeholder (decorated, $element, options) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options);
  }

  Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
    var $placeholder = this.selectionContainer();

    $placeholder.html(this.display(placeholder));
    $placeholder.addClass('select2-selection__placeholder')
                .removeClass('select2-selection__choice');

    return $placeholder;
  };

  Placeholder.prototype.update = function (decorated, data) {
    var singlePlaceholder = (
      data.length == 1 && data[0].id != this.placeholder.id
    );
    var multipleSelections = data.length > 1;

    if (multipleSelections || singlePlaceholder) {
      return decorated.call(this, data);
    }

    this.clear();

    var $placeholder = this.createPlaceholder(this.placeholder);

    this.$selection.find('.select2-selection__rendered').append($placeholder);
  };

  return Placeholder;
});

S2.define('select2/selection/allowClear',[
  'jquery',
  '../keys'
], function ($, KEYS) {
  function AllowClear () { }

  AllowClear.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    if (this.placeholder == null) {
      if (this.options.get('debug') && window.console && console.error) {
        console.error(
          'Select2: The `allowClear` option should be used in combination ' +
          'with the `placeholder` option.'
        );
      }
    }

    this.$selection.on('mousedown', '.select2-selection__clear',
      function (evt) {
        self._handleClear(evt);
    });

    container.on('keypress', function (evt) {
      self._handleKeyboardClear(evt, container);
    });
  };

  AllowClear.prototype._handleClear = function (_, evt) {
    // Ignore the event if it is disabled
    if (this.options.get('disabled')) {
      return;
    }

    var $clear = this.$selection.find('.select2-selection__clear');

    // Ignore the event if nothing has been selected
    if ($clear.length === 0) {
      return;
    }

    evt.stopPropagation();

    var data = $clear.data('data');

    for (var d = 0; d < data.length; d++) {
      var unselectData = {
        data: data[d]
      };

      // Trigger the `unselect` event, so people can prevent it from being
      // cleared.
      this.trigger('unselect', unselectData);

      // If the event was prevented, don't clear it out.
      if (unselectData.prevented) {
        return;
      }
    }

    this.$element.val(this.placeholder.id).trigger('change');

    this.trigger('toggle', {});
  };

  AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
    if (container.isOpen()) {
      return;
    }

    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
      this._handleClear(evt);
    }
  };

  AllowClear.prototype.update = function (decorated, data) {
    decorated.call(this, data);

    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
        data.length === 0) {
      return;
    }

    var $remove = $(
      '<span class="select2-selection__clear">' +
        '&times;' +
      '</span>'
    );
    $remove.data('data', data);

    this.$selection.find('.select2-selection__rendered').prepend($remove);
  };

  return AllowClear;
});

S2.define('select2/selection/search',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function Search (decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  Search.prototype.render = function (decorated) {
    var $search = $(
      '<li class="select2-search select2-search--inline">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +
        ' spellcheck="false" role="textbox" aria-autocomplete="list" />' +
      '</li>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    var $rendered = decorated.call(this);

    this._transferTabIndex();

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self.$search.trigger('focus');
    });

    container.on('close', function () {
      self.$search.val('');
      self.$search.removeAttr('aria-activedescendant');
      self.$search.trigger('focus');
    });

    container.on('enable', function () {
      self.$search.prop('disabled', false);

      self._transferTabIndex();
    });

    container.on('disable', function () {
      self.$search.prop('disabled', true);
    });

    container.on('focus', function (evt) {
      self.$search.trigger('focus');
    });

    container.on('results:focus', function (params) {
      self.$search.attr('aria-activedescendant', params.id);
    });

    this.$selection.on('focusin', '.select2-search--inline', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('focusout', '.select2-search--inline', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', '.select2-search--inline', function (evt) {
      evt.stopPropagation();

      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();

      var key = evt.which;

      if (key === KEYS.BACKSPACE && self.$search.val() === '') {
        var $previousChoice = self.$searchContainer
          .prev('.select2-selection__choice');

        if ($previousChoice.length > 0) {
          var item = $previousChoice.data('data');

          self.searchRemoveChoice(item);

          evt.preventDefault();
        }
      }
    });

    // Try to detect the IE version should the `documentMode` property that
    // is stored on the document. This is only implemented in IE and is
    // slightly cleaner than doing a user agent check.
    // This property is not available in Edge, but Edge also doesn't have
    // this bug.
    var msie = document.documentMode;
    var disableInputEvents = msie && msie <= 11;

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$selection.on(
      'input.searchcheck',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents) {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        // Unbind the duplicated `keyup` event
        self.$selection.off('keyup.search');
      }
    );

    this.$selection.on(
      'keyup.search input.search',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents && evt.type === 'input') {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        var key = evt.which;

        // We can freely ignore events from modifier keys
        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
          return;
        }

        // Tabbing will be handled during the `keydown` phase
        if (key == KEYS.TAB) {
          return;
        }

        self.handleSearch(evt);
      }
    );
  };

  /**
   * This method will transfer the tabindex attribute from the rendered
   * selection to the search box. This allows for the search box to be used as
   * the primary focus instead of the selection container.
   *
   * @private
   */
  Search.prototype._transferTabIndex = function (decorated) {
    this.$search.attr('tabindex', this.$selection.attr('tabindex'));
    this.$selection.attr('tabindex', '-1');
  };

  Search.prototype.createPlaceholder = function (decorated, placeholder) {
    this.$search.attr('placeholder', placeholder.text);
  };

  Search.prototype.update = function (decorated, data) {
    var searchHadFocus = this.$search[0] == document.activeElement;

    this.$search.attr('placeholder', '');

    decorated.call(this, data);

    this.$selection.find('.select2-selection__rendered')
                   .append(this.$searchContainer);

    this.resizeSearch();
    if (searchHadFocus) {
      this.$search.focus();
    }
  };

  Search.prototype.handleSearch = function () {
    this.resizeSearch();

    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.searchRemoveChoice = function (decorated, item) {
    this.trigger('unselect', {
      data: item
    });

    this.$search.val(item.text);
    this.handleSearch();
  };

  Search.prototype.resizeSearch = function () {
    this.$search.css('width', '25px');

    var width = '';

    if (this.$search.attr('placeholder') !== '') {
      width = this.$selection.find('.select2-selection__rendered').innerWidth();
    } else {
      var minimumWidth = this.$search.val().length + 1;

      width = (minimumWidth * 0.75) + 'em';
    }

    this.$search.css('width', width);
  };

  return Search;
});

S2.define('select2/selection/eventRelay',[
  'jquery'
], function ($) {
  function EventRelay () { }

  EventRelay.prototype.bind = function (decorated, container, $container) {
    var self = this;
    var relayEvents = [
      'open', 'opening',
      'close', 'closing',
      'select', 'selecting',
      'unselect', 'unselecting'
    ];

    var preventableEvents = ['opening', 'closing', 'selecting', 'unselecting'];

    decorated.call(this, container, $container);

    container.on('*', function (name, params) {
      // Ignore events that should not be relayed
      if ($.inArray(name, relayEvents) === -1) {
        return;
      }

      // The parameters should always be an object
      params = params || {};

      // Generate the jQuery event for the Select2 event
      var evt = $.Event('select2:' + name, {
        params: params
      });

      self.$element.trigger(evt);

      // Only handle preventable events if it was one
      if ($.inArray(name, preventableEvents) === -1) {
        return;
      }

      params.prevented = evt.isDefaultPrevented();
    });
  };

  return EventRelay;
});

S2.define('select2/translation',[
  'jquery',
  'require'
], function ($, require) {
  function Translation (dict) {
    this.dict = dict || {};
  }

  Translation.prototype.all = function () {
    return this.dict;
  };

  Translation.prototype.get = function (key) {
    return this.dict[key];
  };

  Translation.prototype.extend = function (translation) {
    this.dict = $.extend({}, translation.all(), this.dict);
  };

  // Static functions

  Translation._cache = {};

  Translation.loadPath = function (path) {
    if (!(path in Translation._cache)) {
      var translations = require(path);

      Translation._cache[path] = translations;
    }

    return new Translation(Translation._cache[path]);
  };

  return Translation;
});

S2.define('select2/diacritics',[

], function () {
  var diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03C9': '\u03C9',
    '\u03C2': '\u03C3'
  };

  return diacritics;
});

S2.define('select2/data/base',[
  '../utils'
], function (Utils) {
  function BaseAdapter ($element, options) {
    BaseAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(BaseAdapter, Utils.Observable);

  BaseAdapter.prototype.current = function (callback) {
    throw new Error('The `current` method must be defined in child classes.');
  };

  BaseAdapter.prototype.query = function (params, callback) {
    throw new Error('The `query` method must be defined in child classes.');
  };

  BaseAdapter.prototype.bind = function (container, $container) {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.destroy = function () {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.generateResultId = function (container, data) {
    var id = container.id + '-result-';

    id += Utils.generateChars(4);

    if (data.id != null) {
      id += '-' + data.id.toString();
    } else {
      id += '-' + Utils.generateChars(4);
    }
    return id;
  };

  return BaseAdapter;
});

S2.define('select2/data/select',[
  './base',
  '../utils',
  'jquery'
], function (BaseAdapter, Utils, $) {
  function SelectAdapter ($element, options) {
    this.$element = $element;
    this.options = options;

    SelectAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(SelectAdapter, BaseAdapter);

  SelectAdapter.prototype.current = function (callback) {
    var data = [];
    var self = this;

    this.$element.find(':selected').each(function () {
      var $option = $(this);

      var option = self.item($option);

      data.push(option);
    });

    callback(data);
  };

  SelectAdapter.prototype.select = function (data) {
    var self = this;

    data.selected = true;

    // If data.element is a DOM node, use it instead
    if ($(data.element).is('option')) {
      data.element.selected = true;

      this.$element.trigger('change');

      return;
    }

    if (this.$element.prop('multiple')) {
      this.current(function (currentData) {
        var val = [];

        data = [data];
        data.push.apply(data, currentData);

        for (var d = 0; d < data.length; d++) {
          var id = data[d].id;

          if ($.inArray(id, val) === -1) {
            val.push(id);
          }
        }

        self.$element.val(val);
        self.$element.trigger('change');
      });
    } else {
      var val = data.id;

      this.$element.val(val);
      this.$element.trigger('change');
    }
  };

  SelectAdapter.prototype.unselect = function (data) {
    var self = this;

    if (!this.$element.prop('multiple')) {
      return;
    }

    data.selected = false;

    if ($(data.element).is('option')) {
      data.element.selected = false;

      this.$element.trigger('change');

      return;
    }

    this.current(function (currentData) {
      var val = [];

      for (var d = 0; d < currentData.length; d++) {
        var id = currentData[d].id;

        if (id !== data.id && $.inArray(id, val) === -1) {
          val.push(id);
        }
      }

      self.$element.val(val);

      self.$element.trigger('change');
    });
  };

  SelectAdapter.prototype.bind = function (container, $container) {
    var self = this;

    this.container = container;

    container.on('select', function (params) {
      self.select(params.data);
    });

    container.on('unselect', function (params) {
      self.unselect(params.data);
    });
  };

  SelectAdapter.prototype.destroy = function () {
    // Remove anything added to child elements
    this.$element.find('*').each(function () {
      // Remove any custom data set by Select2
      $.removeData(this, 'data');
    });
  };

  SelectAdapter.prototype.query = function (params, callback) {
    var data = [];
    var self = this;

    var $options = this.$element.children();

    $options.each(function () {
      var $option = $(this);

      if (!$option.is('option') && !$option.is('optgroup')) {
        return;
      }

      var option = self.item($option);

      var matches = self.matches(params, option);

      if (matches !== null) {
        data.push(matches);
      }
    });

    callback({
      results: data
    });
  };

  SelectAdapter.prototype.addOptions = function ($options) {
    Utils.appendMany(this.$element, $options);
  };

  SelectAdapter.prototype.option = function (data) {
    var option;

    if (data.children) {
      option = document.createElement('optgroup');
      option.label = data.text;
    } else {
      option = document.createElement('option');

      if (option.textContent !== undefined) {
        option.textContent = data.text;
      } else {
        option.innerText = data.text;
      }
    }

    if (data.id) {
      option.value = data.id;
    }

    if (data.disabled) {
      option.disabled = true;
    }

    if (data.selected) {
      option.selected = true;
    }

    if (data.title) {
      option.title = data.title;
    }

    var $option = $(option);

    var normalizedData = this._normalizeItem(data);
    normalizedData.element = option;

    // Override the option's data with the combined data
    $.data(option, 'data', normalizedData);

    return $option;
  };

  SelectAdapter.prototype.item = function ($option) {
    var data = {};

    data = $.data($option[0], 'data');

    if (data != null) {
      return data;
    }

    if ($option.is('option')) {
      data = {
        id: $option.val(),
        text: $option.text(),
        disabled: $option.prop('disabled'),
        selected: $option.prop('selected'),
        title: $option.prop('title')
      };
    } else if ($option.is('optgroup')) {
      data = {
        text: $option.prop('label'),
        children: [],
        title: $option.prop('title')
      };

      var $children = $option.children('option');
      var children = [];

      for (var c = 0; c < $children.length; c++) {
        var $child = $($children[c]);

        var child = this.item($child);

        children.push(child);
      }

      data.children = children;
    }

    data = this._normalizeItem(data);
    data.element = $option[0];

    $.data($option[0], 'data', data);

    return data;
  };

  SelectAdapter.prototype._normalizeItem = function (item) {
    if (!$.isPlainObject(item)) {
      item = {
        id: item,
        text: item
      };
    }

    item = $.extend({}, {
      text: ''
    }, item);

    var defaults = {
      selected: false,
      disabled: false
    };

    if (item.id != null) {
      item.id = item.id.toString();
    }

    if (item.text != null) {
      item.text = item.text.toString();
    }

    if (item._resultId == null && item.id && this.container != null) {
      item._resultId = this.generateResultId(this.container, item);
    }

    return $.extend({}, defaults, item);
  };

  SelectAdapter.prototype.matches = function (params, data) {
    var matcher = this.options.get('matcher');

    return matcher(params, data);
  };

  return SelectAdapter;
});

S2.define('select2/data/array',[
  './select',
  '../utils',
  'jquery'
], function (SelectAdapter, Utils, $) {
  function ArrayAdapter ($element, options) {
    var data = options.get('data') || [];

    ArrayAdapter.__super__.constructor.call(this, $element, options);

    this.addOptions(this.convertToOptions(data));
  }

  Utils.Extend(ArrayAdapter, SelectAdapter);

  ArrayAdapter.prototype.select = function (data) {
    var $option = this.$element.find('option').filter(function (i, elm) {
      return elm.value == data.id.toString();
    });

    if ($option.length === 0) {
      $option = this.option(data);

      this.addOptions($option);
    }

    ArrayAdapter.__super__.select.call(this, data);
  };

  ArrayAdapter.prototype.convertToOptions = function (data) {
    var self = this;

    var $existing = this.$element.find('option');
    var existingIds = $existing.map(function () {
      return self.item($(this)).id;
    }).get();

    var $options = [];

    // Filter out all items except for the one passed in the argument
    function onlyItem (item) {
      return function () {
        return $(this).val() == item.id;
      };
    }

    for (var d = 0; d < data.length; d++) {
      var item = this._normalizeItem(data[d]);

      // Skip items which were pre-loaded, only merge the data
      if ($.inArray(item.id, existingIds) >= 0) {
        var $existingOption = $existing.filter(onlyItem(item));

        var existingData = this.item($existingOption);
        var newData = $.extend(true, {}, item, existingData);

        var $newOption = this.option(newData);

        $existingOption.replaceWith($newOption);

        continue;
      }

      var $option = this.option(item);

      if (item.children) {
        var $children = this.convertToOptions(item.children);

        Utils.appendMany($option, $children);
      }

      $options.push($option);
    }

    return $options;
  };

  return ArrayAdapter;
});

S2.define('select2/data/ajax',[
  './array',
  '../utils',
  'jquery'
], function (ArrayAdapter, Utils, $) {
  function AjaxAdapter ($element, options) {
    this.ajaxOptions = this._applyDefaults(options.get('ajax'));

    if (this.ajaxOptions.processResults != null) {
      this.processResults = this.ajaxOptions.processResults;
    }

    AjaxAdapter.__super__.constructor.call(this, $element, options);
  }

  Utils.Extend(AjaxAdapter, ArrayAdapter);

  AjaxAdapter.prototype._applyDefaults = function (options) {
    var defaults = {
      data: function (params) {
        return $.extend({}, params, {
          q: params.term
        });
      },
      transport: function (params, success, failure) {
        var $request = $.ajax(params);

        $request.then(success);
        $request.fail(failure);

        return $request;
      }
    };

    return $.extend({}, defaults, options, true);
  };

  AjaxAdapter.prototype.processResults = function (results) {
    return results;
  };

  AjaxAdapter.prototype.query = function (params, callback) {
    var matches = [];
    var self = this;

    if (this._request != null) {
      // JSONP requests cannot always be aborted
      if ($.isFunction(this._request.abort)) {
        this._request.abort();
      }

      this._request = null;
    }

    var options = $.extend({
      type: 'GET'
    }, this.ajaxOptions);

    if (typeof options.url === 'function') {
      options.url = options.url.call(this.$element, params);
    }

    if (typeof options.data === 'function') {
      options.data = options.data.call(this.$element, params);
    }

    function request () {
      var $request = options.transport(options, function (data) {
        var results = self.processResults(data, params);

        if (self.options.get('debug') && window.console && console.error) {
          // Check to make sure that the response included a `results` key.
          if (!results || !results.results || !$.isArray(results.results)) {
            console.error(
              'Select2: The AJAX results did not return an array in the ' +
              '`results` key of the response.'
            );
          }
        }

        callback(results);
      }, function () {
        // Attempt to detect if a request was aborted
        // Only works if the transport exposes a status property
        if ($request.status && $request.status === '0') {
          return;
        }

        self.trigger('results:message', {
          message: 'errorLoading'
        });
      });

      self._request = $request;
    }

    if (this.ajaxOptions.delay && params.term != null) {
      if (this._queryTimeout) {
        window.clearTimeout(this._queryTimeout);
      }

      this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
    } else {
      request();
    }
  };

  return AjaxAdapter;
});

S2.define('select2/data/tags',[
  'jquery'
], function ($) {
  function Tags (decorated, $element, options) {
    var tags = options.get('tags');

    var createTag = options.get('createTag');

    if (createTag !== undefined) {
      this.createTag = createTag;
    }

    var insertTag = options.get('insertTag');

    if (insertTag !== undefined) {
        this.insertTag = insertTag;
    }

    decorated.call(this, $element, options);

    if ($.isArray(tags)) {
      for (var t = 0; t < tags.length; t++) {
        var tag = tags[t];
        var item = this._normalizeItem(tag);

        var $option = this.option(item);

        this.$element.append($option);
      }
    }
  }

  Tags.prototype.query = function (decorated, params, callback) {
    var self = this;

    this._removeOldTags();

    if (params.term == null || params.page != null) {
      decorated.call(this, params, callback);
      return;
    }

    function wrapper (obj, child) {
      var data = obj.results;

      for (var i = 0; i < data.length; i++) {
        var option = data[i];

        var checkChildren = (
          option.children != null &&
          !wrapper({
            results: option.children
          }, true)
        );

        var checkText = option.text === params.term;

        if (checkText || checkChildren) {
          if (child) {
            return false;
          }

          obj.data = data;
          callback(obj);

          return;
        }
      }

      if (child) {
        return true;
      }

      var tag = self.createTag(params);

      if (tag != null) {
        var $option = self.option(tag);
        $option.attr('data-select2-tag', true);

        self.addOptions([$option]);

        self.insertTag(data, tag);
      }

      obj.results = data;

      callback(obj);
    }

    decorated.call(this, params, wrapper);
  };

  Tags.prototype.createTag = function (decorated, params) {
    var term = $.trim(params.term);

    if (term === '') {
      return null;
    }

    return {
      id: term,
      text: term
    };
  };

  Tags.prototype.insertTag = function (_, data, tag) {
    data.unshift(tag);
  };

  Tags.prototype._removeOldTags = function (_) {
    var tag = this._lastTag;

    var $options = this.$element.find('option[data-select2-tag]');

    $options.each(function () {
      if (this.selected) {
        return;
      }

      $(this).remove();
    });
  };

  return Tags;
});

S2.define('select2/data/tokenizer',[
  'jquery'
], function ($) {
  function Tokenizer (decorated, $element, options) {
    var tokenizer = options.get('tokenizer');

    if (tokenizer !== undefined) {
      this.tokenizer = tokenizer;
    }

    decorated.call(this, $element, options);
  }

  Tokenizer.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    this.$search =  container.dropdown.$search || container.selection.$search ||
      $container.find('.select2-search__field');
  };

  Tokenizer.prototype.query = function (decorated, params, callback) {
    var self = this;

    function createAndSelect (data) {
      // Normalize the data object so we can use it for checks
      var item = self._normalizeItem(data);

      // Check if the data object already exists as a tag
      // Select it if it doesn't
      var $existingOptions = self.$element.find('option').filter(function () {
        return $(this).val() === item.id;
      });

      // If an existing option wasn't found for it, create the option
      if (!$existingOptions.length) {
        var $option = self.option(item);
        $option.attr('data-select2-tag', true);

        self._removeOldTags();
        self.addOptions([$option]);
      }

      // Select the item, now that we know there is an option for it
      select(item);
    }

    function select (data) {
      self.trigger('select', {
        data: data
      });
    }

    params.term = params.term || '';

    var tokenData = this.tokenizer(params, this.options, createAndSelect);

    if (tokenData.term !== params.term) {
      // Replace the search term if we have the search box
      if (this.$search.length) {
        this.$search.val(tokenData.term);
        this.$search.focus();
      }

      params.term = tokenData.term;
    }

    decorated.call(this, params, callback);
  };

  Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
    var separators = options.get('tokenSeparators') || [];
    var term = params.term;
    var i = 0;

    var createTag = this.createTag || function (params) {
      return {
        id: params.term,
        text: params.term
      };
    };

    while (i < term.length) {
      var termChar = term[i];

      if ($.inArray(termChar, separators) === -1) {
        i++;

        continue;
      }

      var part = term.substr(0, i);
      var partParams = $.extend({}, params, {
        term: part
      });

      var data = createTag(partParams);

      if (data == null) {
        i++;
        continue;
      }

      callback(data);

      // Reset the term to not include the tokenized portion
      term = term.substr(i + 1) || '';
      i = 0;
    }

    return {
      term: term
    };
  };

  return Tokenizer;
});

S2.define('select2/data/minimumInputLength',[

], function () {
  function MinimumInputLength (decorated, $e, options) {
    this.minimumInputLength = options.get('minimumInputLength');

    decorated.call(this, $e, options);
  }

  MinimumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (params.term.length < this.minimumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooShort',
        args: {
          minimum: this.minimumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MinimumInputLength;
});

S2.define('select2/data/maximumInputLength',[

], function () {
  function MaximumInputLength (decorated, $e, options) {
    this.maximumInputLength = options.get('maximumInputLength');

    decorated.call(this, $e, options);
  }

  MaximumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (this.maximumInputLength > 0 &&
        params.term.length > this.maximumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooLong',
        args: {
          maximum: this.maximumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MaximumInputLength;
});

S2.define('select2/data/maximumSelectionLength',[

], function (){
  function MaximumSelectionLength (decorated, $e, options) {
    this.maximumSelectionLength = options.get('maximumSelectionLength');

    decorated.call(this, $e, options);
  }

  MaximumSelectionLength.prototype.query =
    function (decorated, params, callback) {
      var self = this;

      this.current(function (currentData) {
        var count = currentData != null ? currentData.length : 0;
        if (self.maximumSelectionLength > 0 &&
          count >= self.maximumSelectionLength) {
          self.trigger('results:message', {
            message: 'maximumSelected',
            args: {
              maximum: self.maximumSelectionLength
            }
          });
          return;
        }
        decorated.call(self, params, callback);
      });
  };

  return MaximumSelectionLength;
});

S2.define('select2/dropdown',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Dropdown ($element, options) {
    this.$element = $element;
    this.options = options;

    Dropdown.__super__.constructor.call(this);
  }

  Utils.Extend(Dropdown, Utils.Observable);

  Dropdown.prototype.render = function () {
    var $dropdown = $(
      '<span class="select2-dropdown">' +
        '<span class="select2-results"></span>' +
      '</span>'
    );

    $dropdown.attr('dir', this.options.get('dir'));

    this.$dropdown = $dropdown;

    return $dropdown;
  };

  Dropdown.prototype.bind = function () {
    // Should be implemented in subclasses
  };

  Dropdown.prototype.position = function ($dropdown, $container) {
    // Should be implmented in subclasses
  };

  Dropdown.prototype.destroy = function () {
    // Remove the dropdown from the DOM
    this.$dropdown.remove();
  };

  return Dropdown;
});

S2.define('select2/dropdown/search',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function Search () { }

  Search.prototype.render = function (decorated) {
    var $rendered = decorated.call(this);

    var $search = $(
      '<span class="select2-search select2-search--dropdown">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +
        ' spellcheck="false" role="textbox" />' +
      '</span>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    $rendered.prepend($search);

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    this.$search.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();
    });

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$search.on('input', function (evt) {
      // Unbind the duplicated `keyup` event
      $(this).off('keyup');
    });

    this.$search.on('keyup input', function (evt) {
      self.handleSearch(evt);
    });

    container.on('open', function () {
      self.$search.attr('tabindex', 0);

      self.$search.focus();

      window.setTimeout(function () {
        self.$search.focus();
      }, 0);
    });

    container.on('close', function () {
      self.$search.attr('tabindex', -1);

      self.$search.val('');
    });

    container.on('focus', function () {
      if (container.isOpen()) {
        self.$search.focus();
      }
    });

    container.on('results:all', function (params) {
      if (params.query.term == null || params.query.term === '') {
        var showSearch = self.showSearch(params);

        if (showSearch) {
          self.$searchContainer.removeClass('select2-search--hide');
        } else {
          self.$searchContainer.addClass('select2-search--hide');
        }
      }
    });
  };

  Search.prototype.handleSearch = function (evt) {
    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.showSearch = function (_, params) {
    return true;
  };

  return Search;
});

S2.define('select2/dropdown/hidePlaceholder',[

], function () {
  function HidePlaceholder (decorated, $element, options, dataAdapter) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options, dataAdapter);
  }

  HidePlaceholder.prototype.append = function (decorated, data) {
    data.results = this.removePlaceholder(data.results);

    decorated.call(this, data);
  };

  HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  HidePlaceholder.prototype.removePlaceholder = function (_, data) {
    var modifiedData = data.slice(0);

    for (var d = data.length - 1; d >= 0; d--) {
      var item = data[d];

      if (this.placeholder.id === item.id) {
        modifiedData.splice(d, 1);
      }
    }

    return modifiedData;
  };

  return HidePlaceholder;
});

S2.define('select2/dropdown/infiniteScroll',[
  'jquery'
], function ($) {
  function InfiniteScroll (decorated, $element, options, dataAdapter) {
    this.lastParams = {};

    decorated.call(this, $element, options, dataAdapter);

    this.$loadingMore = this.createLoadingMore();
    this.loading = false;
  }

  InfiniteScroll.prototype.append = function (decorated, data) {
    this.$loadingMore.remove();
    this.loading = false;

    decorated.call(this, data);

    if (this.showLoadingMore(data)) {
      this.$results.append(this.$loadingMore);
    }
  };

  InfiniteScroll.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('query', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    container.on('query:append', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    this.$results.on('scroll', function () {
      var isLoadMoreVisible = $.contains(
        document.documentElement,
        self.$loadingMore[0]
      );

      if (self.loading || !isLoadMoreVisible) {
        return;
      }

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var loadingMoreOffset = self.$loadingMore.offset().top +
        self.$loadingMore.outerHeight(false);

      if (currentOffset + 50 >= loadingMoreOffset) {
        self.loadMore();
      }
    });
  };

  InfiniteScroll.prototype.loadMore = function () {
    this.loading = true;

    var params = $.extend({}, {page: 1}, this.lastParams);

    params.page++;

    this.trigger('query:append', params);
  };

  InfiniteScroll.prototype.showLoadingMore = function (_, data) {
    return data.pagination && data.pagination.more;
  };

  InfiniteScroll.prototype.createLoadingMore = function () {
    var $option = $(
      '<li ' +
      'class="select2-results__option select2-results__option--load-more"' +
      'role="treeitem" aria-disabled="true"></li>'
    );

    var message = this.options.get('translations').get('loadingMore');

    $option.html(message(this.lastParams));

    return $option;
  };

  return InfiniteScroll;
});

S2.define('select2/dropdown/attachBody',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function AttachBody (decorated, $element, options) {
    this.$dropdownParent = options.get('dropdownParent') || $(document.body);

    decorated.call(this, $element, options);
  }

  AttachBody.prototype.bind = function (decorated, container, $container) {
    var self = this;

    var setupResultsEvents = false;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self._showDropdown();
      self._attachPositioningHandler(container);

      if (!setupResultsEvents) {
        setupResultsEvents = true;

        container.on('results:all', function () {
          self._positionDropdown();
          self._resizeDropdown();
        });

        container.on('results:append', function () {
          self._positionDropdown();
          self._resizeDropdown();
        });
      }
    });

    container.on('close', function () {
      self._hideDropdown();
      self._detachPositioningHandler(container);
    });

    this.$dropdownContainer.on('mousedown', function (evt) {
      evt.stopPropagation();
    });
  };

  AttachBody.prototype.destroy = function (decorated) {
    decorated.call(this);

    this.$dropdownContainer.remove();
  };

  AttachBody.prototype.position = function (decorated, $dropdown, $container) {
    // Clone all of the container classes
    $dropdown.attr('class', $container.attr('class'));

    $dropdown.removeClass('select2');
    $dropdown.addClass('select2-container--open');

    $dropdown.css({
      position: 'absolute',
      top: -999999
    });

    this.$container = $container;
  };

  AttachBody.prototype.render = function (decorated) {
    var $container = $('<span></span>');

    var $dropdown = decorated.call(this);
    $container.append($dropdown);

    this.$dropdownContainer = $container;

    return $container;
  };

  AttachBody.prototype._hideDropdown = function (decorated) {
    this.$dropdownContainer.detach();
  };

  AttachBody.prototype._attachPositioningHandler =
      function (decorated, container) {
    var self = this;

    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.each(function () {
      $(this).data('select2-scroll-position', {
        x: $(this).scrollLeft(),
        y: $(this).scrollTop()
      });
    });

    $watchers.on(scrollEvent, function (ev) {
      var position = $(this).data('select2-scroll-position');
      $(this).scrollTop(position.y);
    });

    $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
      function (e) {
      self._positionDropdown();
      self._resizeDropdown();
    });
  };

  AttachBody.prototype._detachPositioningHandler =
      function (decorated, container) {
    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.off(scrollEvent);

    $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
  };

  AttachBody.prototype._positionDropdown = function () {
    var $window = $(window);

    var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
    var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');

    var newDirection = null;

    var offset = this.$container.offset();

    offset.bottom = offset.top + this.$container.outerHeight(false);

    var container = {
      height: this.$container.outerHeight(false)
    };

    container.top = offset.top;
    container.bottom = offset.top + container.height;

    var dropdown = {
      height: this.$dropdown.outerHeight(false)
    };

    var viewport = {
      top: $window.scrollTop(),
      bottom: $window.scrollTop() + $window.height()
    };

    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

    var css = {
      left: offset.left,
      top: container.bottom
    };

    // Determine what the parent element is to use for calciulating the offset
    var $offsetParent = this.$dropdownParent;

    // For statically positoned elements, we need to get the element
    // that is determining the offset
    if ($offsetParent.css('position') === 'static') {
      $offsetParent = $offsetParent.offsetParent();
    }

    var parentOffset = $offsetParent.offset();

    css.top -= parentOffset.top;
    css.left -= parentOffset.left;

    if (!isCurrentlyAbove && !isCurrentlyBelow) {
      newDirection = 'below';
    }

    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
      newDirection = 'above';
    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
      newDirection = 'below';
    }

    if (newDirection == 'above' ||
      (isCurrentlyAbove && newDirection !== 'below')) {
      css.top = container.top - parentOffset.top - dropdown.height;
    }

    if (newDirection != null) {
      this.$dropdown
        .removeClass('select2-dropdown--below select2-dropdown--above')
        .addClass('select2-dropdown--' + newDirection);
      this.$container
        .removeClass('select2-container--below select2-container--above')
        .addClass('select2-container--' + newDirection);
    }

    this.$dropdownContainer.css(css);
  };

  AttachBody.prototype._resizeDropdown = function () {
    var css = {
      width: this.$container.outerWidth(false) + 'px'
    };

    if (this.options.get('dropdownAutoWidth')) {
      css.minWidth = css.width;
      css.position = 'relative';
      css.width = 'auto';
    }

    this.$dropdown.css(css);
  };

  AttachBody.prototype._showDropdown = function (decorated) {
    this.$dropdownContainer.appendTo(this.$dropdownParent);

    this._positionDropdown();
    this._resizeDropdown();
  };

  return AttachBody;
});

S2.define('select2/dropdown/minimumResultsForSearch',[

], function () {
  function countResults (data) {
    var count = 0;

    for (var d = 0; d < data.length; d++) {
      var item = data[d];

      if (item.children) {
        count += countResults(item.children);
      } else {
        count++;
      }
    }

    return count;
  }

  function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
    this.minimumResultsForSearch = options.get('minimumResultsForSearch');

    if (this.minimumResultsForSearch < 0) {
      this.minimumResultsForSearch = Infinity;
    }

    decorated.call(this, $element, options, dataAdapter);
  }

  MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
    if (countResults(params.data.results) < this.minimumResultsForSearch) {
      return false;
    }

    return decorated.call(this, params);
  };

  return MinimumResultsForSearch;
});

S2.define('select2/dropdown/selectOnClose',[

], function () {
  function SelectOnClose () { }

  SelectOnClose.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('close', function (params) {
      self._handleSelectOnClose(params);
    });
  };

  SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
    if (params && params.originalSelect2Event != null) {
      var event = params.originalSelect2Event;

      // Don't select an item if the close event was triggered from a select or
      // unselect event
      if (event._type === 'select' || event._type === 'unselect') {
        return;
      }
    }

    var $highlightedResults = this.getHighlightedResults();

    // Only select highlighted results
    if ($highlightedResults.length < 1) {
      return;
    }

    var data = $highlightedResults.data('data');

    // Don't re-select already selected resulte
    if (
      (data.element != null && data.element.selected) ||
      (data.element == null && data.selected)
    ) {
      return;
    }

    this.trigger('select', {
        data: data
    });
  };

  return SelectOnClose;
});

S2.define('select2/dropdown/closeOnSelect',[

], function () {
  function CloseOnSelect () { }

  CloseOnSelect.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('select', function (evt) {
      self._selectTriggered(evt);
    });

    container.on('unselect', function (evt) {
      self._selectTriggered(evt);
    });
  };

  CloseOnSelect.prototype._selectTriggered = function (_, evt) {
    var originalEvent = evt.originalEvent;

    // Don't close if the control key is being held
    if (originalEvent && originalEvent.ctrlKey) {
      return;
    }

    this.trigger('close', {
      originalEvent: originalEvent,
      originalSelect2Event: evt
    });
  };

  return CloseOnSelect;
});

S2.define('select2/i18n/en',[],function () {
  // English
  return {
    errorLoading: function () {
      return 'The results could not be loaded.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Please delete ' + overChars + ' character';

      if (overChars != 1) {
        message += 's';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Please enter ' + remainingChars + ' or more characters';

      return message;
    },
    loadingMore: function () {
      return 'Loading more results…';
    },
    maximumSelected: function (args) {
      var message = 'You can only select ' + args.maximum + ' item';

      if (args.maximum != 1) {
        message += 's';
      }

      return message;
    },
    noResults: function () {
      return 'No results found';
    },
    searching: function () {
      return 'Searching…';
    }
  };
});

S2.define('select2/defaults',[
  'jquery',
  'require',

  './results',

  './selection/single',
  './selection/multiple',
  './selection/placeholder',
  './selection/allowClear',
  './selection/search',
  './selection/eventRelay',

  './utils',
  './translation',
  './diacritics',

  './data/select',
  './data/array',
  './data/ajax',
  './data/tags',
  './data/tokenizer',
  './data/minimumInputLength',
  './data/maximumInputLength',
  './data/maximumSelectionLength',

  './dropdown',
  './dropdown/search',
  './dropdown/hidePlaceholder',
  './dropdown/infiniteScroll',
  './dropdown/attachBody',
  './dropdown/minimumResultsForSearch',
  './dropdown/selectOnClose',
  './dropdown/closeOnSelect',

  './i18n/en'
], function ($, require,

             ResultsList,

             SingleSelection, MultipleSelection, Placeholder, AllowClear,
             SelectionSearch, EventRelay,

             Utils, Translation, DIACRITICS,

             SelectData, ArrayData, AjaxData, Tags, Tokenizer,
             MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

             Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
             AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,

             EnglishTranslation) {
  function Defaults () {
    this.reset();
  }

  Defaults.prototype.apply = function (options) {
    options = $.extend(true, {}, this.defaults, options);

    if (options.dataAdapter == null) {
      if (options.ajax != null) {
        options.dataAdapter = AjaxData;
      } else if (options.data != null) {
        options.dataAdapter = ArrayData;
      } else {
        options.dataAdapter = SelectData;
      }

      if (options.minimumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MinimumInputLength
        );
      }

      if (options.maximumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumInputLength
        );
      }

      if (options.maximumSelectionLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumSelectionLength
        );
      }

      if (options.tags) {
        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
      }

      if (options.tokenSeparators != null || options.tokenizer != null) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Tokenizer
        );
      }

      if (options.query != null) {
        var Query = require(options.amdBase + 'compat/query');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Query
        );
      }

      if (options.initSelection != null) {
        var InitSelection = require(options.amdBase + 'compat/initSelection');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          InitSelection
        );
      }
    }

    if (options.resultsAdapter == null) {
      options.resultsAdapter = ResultsList;

      if (options.ajax != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          InfiniteScroll
        );
      }

      if (options.placeholder != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          HidePlaceholder
        );
      }

      if (options.selectOnClose) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          SelectOnClose
        );
      }
    }

    if (options.dropdownAdapter == null) {
      if (options.multiple) {
        options.dropdownAdapter = Dropdown;
      } else {
        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

        options.dropdownAdapter = SearchableDropdown;
      }

      if (options.minimumResultsForSearch !== 0) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          MinimumResultsForSearch
        );
      }

      if (options.closeOnSelect) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          CloseOnSelect
        );
      }

      if (
        options.dropdownCssClass != null ||
        options.dropdownCss != null ||
        options.adaptDropdownCssClass != null
      ) {
        var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');

        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          DropdownCSS
        );
      }

      options.dropdownAdapter = Utils.Decorate(
        options.dropdownAdapter,
        AttachBody
      );
    }

    if (options.selectionAdapter == null) {
      if (options.multiple) {
        options.selectionAdapter = MultipleSelection;
      } else {
        options.selectionAdapter = SingleSelection;
      }

      // Add the placeholder mixin if a placeholder was specified
      if (options.placeholder != null) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          Placeholder
        );
      }

      if (options.allowClear) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          AllowClear
        );
      }

      if (options.multiple) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          SelectionSearch
        );
      }

      if (
        options.containerCssClass != null ||
        options.containerCss != null ||
        options.adaptContainerCssClass != null
      ) {
        var ContainerCSS = require(options.amdBase + 'compat/containerCss');

        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          ContainerCSS
        );
      }

      options.selectionAdapter = Utils.Decorate(
        options.selectionAdapter,
        EventRelay
      );
    }

    if (typeof options.language === 'string') {
      // Check if the language is specified with a region
      if (options.language.indexOf('-') > 0) {
        // Extract the region information if it is included
        var languageParts = options.language.split('-');
        var baseLanguage = languageParts[0];

        options.language = [options.language, baseLanguage];
      } else {
        options.language = [options.language];
      }
    }

    if ($.isArray(options.language)) {
      var languages = new Translation();
      options.language.push('en');

      var languageNames = options.language;

      for (var l = 0; l < languageNames.length; l++) {
        var name = languageNames[l];
        var language = {};

        try {
          // Try to load it with the original name
          language = Translation.loadPath(name);
        } catch (e) {
          try {
            // If we couldn't load it, check if it wasn't the full path
            name = this.defaults.amdLanguageBase + name;
            language = Translation.loadPath(name);
          } catch (ex) {
            // The translation could not be loaded at all. Sometimes this is
            // because of a configuration problem, other times this can be
            // because of how Select2 helps load all possible translation files.
            if (options.debug && window.console && console.warn) {
              console.warn(
                'Select2: The language file for "' + name + '" could not be ' +
                'automatically loaded. A fallback will be used instead.'
              );
            }

            continue;
          }
        }

        languages.extend(language);
      }

      options.translations = languages;
    } else {
      var baseTranslation = Translation.loadPath(
        this.defaults.amdLanguageBase + 'en'
      );
      var customTranslation = new Translation(options.language);

      customTranslation.extend(baseTranslation);

      options.translations = customTranslation;
    }

    return options;
  };

  Defaults.prototype.reset = function () {
    function stripDiacritics (text) {
      // Used 'uni range + named function' from http://jsperf.com/diacritics/18
      function match(a) {
        return DIACRITICS[a] || a;
      }

      return text.replace(/[^\u0000-\u007E]/g, match);
    }

    function matcher (params, data) {
      // Always return the object if there is nothing to compare
      if ($.trim(params.term) === '') {
        return data;
      }

      // Do a recursive check for options with children
      if (data.children && data.children.length > 0) {
        // Clone the data object if there are children
        // This is required as we modify the object to remove any non-matches
        var match = $.extend(true, {}, data);

        // Check each child of the option
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          var matches = matcher(params, child);

          // If there wasn't a match, remove the object in the array
          if (matches == null) {
            match.children.splice(c, 1);
          }
        }

        // If any children matched, return the new object
        if (match.children.length > 0) {
          return match;
        }

        // If there were no matching children, check just the plain object
        return matcher(params, match);
      }

      var original = stripDiacritics(data.text).toUpperCase();
      var term = stripDiacritics(params.term).toUpperCase();

      // Check if the text contains the term
      if (original.indexOf(term) > -1) {
        return data;
      }

      // If it doesn't contain the term, don't return anything
      return null;
    }

    this.defaults = {
      amdBase: './',
      amdLanguageBase: './i18n/',
      closeOnSelect: true,
      debug: false,
      dropdownAutoWidth: false,
      escapeMarkup: Utils.escapeMarkup,
      language: EnglishTranslation,
      matcher: matcher,
      minimumInputLength: 0,
      maximumInputLength: 0,
      maximumSelectionLength: 0,
      minimumResultsForSearch: 0,
      selectOnClose: false,
      sorter: function (data) {
        return data;
      },
      templateResult: function (result) {
        return result.text;
      },
      templateSelection: function (selection) {
        return selection.text;
      },
      theme: 'default',
      width: 'resolve'
    };
  };

  Defaults.prototype.set = function (key, value) {
    var camelKey = $.camelCase(key);

    var data = {};
    data[camelKey] = value;

    var convertedData = Utils._convertData(data);

    $.extend(this.defaults, convertedData);
  };

  var defaults = new Defaults();

  return defaults;
});

S2.define('select2/options',[
  'require',
  'jquery',
  './defaults',
  './utils'
], function (require, $, Defaults, Utils) {
  function Options (options, $element) {
    this.options = options;

    if ($element != null) {
      this.fromElement($element);
    }

    this.options = Defaults.apply(this.options);

    if ($element && $element.is('input')) {
      var InputCompat = require(this.get('amdBase') + 'compat/inputData');

      this.options.dataAdapter = Utils.Decorate(
        this.options.dataAdapter,
        InputCompat
      );
    }
  }

  Options.prototype.fromElement = function ($e) {
    var excludedData = ['select2'];

    if (this.options.multiple == null) {
      this.options.multiple = $e.prop('multiple');
    }

    if (this.options.disabled == null) {
      this.options.disabled = $e.prop('disabled');
    }

    if (this.options.language == null) {
      if ($e.prop('lang')) {
        this.options.language = $e.prop('lang').toLowerCase();
      } else if ($e.closest('[lang]').prop('lang')) {
        this.options.language = $e.closest('[lang]').prop('lang');
      }
    }

    if (this.options.dir == null) {
      if ($e.prop('dir')) {
        this.options.dir = $e.prop('dir');
      } else if ($e.closest('[dir]').prop('dir')) {
        this.options.dir = $e.closest('[dir]').prop('dir');
      } else {
        this.options.dir = 'ltr';
      }
    }

    $e.prop('disabled', this.options.disabled);
    $e.prop('multiple', this.options.multiple);

    if ($e.data('select2Tags')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-select2-tags` attribute has been changed to ' +
          'use the `data-data` and `data-tags="true"` attributes and will be ' +
          'removed in future versions of Select2.'
        );
      }

      $e.data('data', $e.data('select2Tags'));
      $e.data('tags', true);
    }

    if ($e.data('ajaxUrl')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-ajax-url` attribute has been changed to ' +
          '`data-ajax--url` and support for the old attribute will be removed' +
          ' in future versions of Select2.'
        );
      }

      $e.attr('ajax--url', $e.data('ajaxUrl'));
      $e.data('ajax--url', $e.data('ajaxUrl'));
    }

    var dataset = {};

    // Prefer the element's `dataset` attribute if it exists
    // jQuery 1.x does not correctly handle data attributes with multiple dashes
    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
      dataset = $.extend(true, {}, $e[0].dataset, $e.data());
    } else {
      dataset = $e.data();
    }

    var data = $.extend(true, {}, dataset);

    data = Utils._convertData(data);

    for (var key in data) {
      if ($.inArray(key, excludedData) > -1) {
        continue;
      }

      if ($.isPlainObject(this.options[key])) {
        $.extend(this.options[key], data[key]);
      } else {
        this.options[key] = data[key];
      }
    }

    return this;
  };

  Options.prototype.get = function (key) {
    return this.options[key];
  };

  Options.prototype.set = function (key, val) {
    this.options[key] = val;
  };

  return Options;
});

S2.define('select2/core',[
  'jquery',
  './options',
  './utils',
  './keys'
], function ($, Options, Utils, KEYS) {
  var Select2 = function ($element, options) {
    if ($element.data('select2') != null) {
      $element.data('select2').destroy();
    }

    this.$element = $element;

    this.id = this._generateId($element);

    options = options || {};

    this.options = new Options(options, $element);

    Select2.__super__.constructor.call(this);

    // Set up the tabindex

    var tabindex = $element.attr('tabindex') || 0;
    $element.data('old-tabindex', tabindex);
    $element.attr('tabindex', '-1');

    // Set up containers and adapters

    var DataAdapter = this.options.get('dataAdapter');
    this.dataAdapter = new DataAdapter($element, this.options);

    var $container = this.render();

    this._placeContainer($container);

    var SelectionAdapter = this.options.get('selectionAdapter');
    this.selection = new SelectionAdapter($element, this.options);
    this.$selection = this.selection.render();

    this.selection.position(this.$selection, $container);

    var DropdownAdapter = this.options.get('dropdownAdapter');
    this.dropdown = new DropdownAdapter($element, this.options);
    this.$dropdown = this.dropdown.render();

    this.dropdown.position(this.$dropdown, $container);

    var ResultsAdapter = this.options.get('resultsAdapter');
    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
    this.$results = this.results.render();

    this.results.position(this.$results, this.$dropdown);

    // Bind events

    var self = this;

    // Bind the container to all of the adapters
    this._bindAdapters();

    // Register any DOM event handlers
    this._registerDomEvents();

    // Register any internal event handlers
    this._registerDataEvents();
    this._registerSelectionEvents();
    this._registerDropdownEvents();
    this._registerResultsEvents();
    this._registerEvents();

    // Set the initial state
    this.dataAdapter.current(function (initialData) {
      self.trigger('selection:update', {
        data: initialData
      });
    });

    // Hide the original select
    $element.addClass('select2-hidden-accessible');
    $element.attr('aria-hidden', 'true');

    // Synchronize any monitored attributes
    this._syncAttributes();

    $element.data('select2', this);
  };

  Utils.Extend(Select2, Utils.Observable);

  Select2.prototype._generateId = function ($element) {
    var id = '';

    if ($element.attr('id') != null) {
      id = $element.attr('id');
    } else if ($element.attr('name') != null) {
      id = $element.attr('name') + '-' + Utils.generateChars(2);
    } else {
      id = Utils.generateChars(4);
    }

    id = id.replace(/(:|\.|\[|\]|,)/g, '');
    id = 'select2-' + id;

    return id;
  };

  Select2.prototype._placeContainer = function ($container) {
    $container.insertAfter(this.$element);

    var width = this._resolveWidth(this.$element, this.options.get('width'));

    if (width != null) {
      $container.css('width', width);
    }
  };

  Select2.prototype._resolveWidth = function ($element, method) {
    var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

    if (method == 'resolve') {
      var styleWidth = this._resolveWidth($element, 'style');

      if (styleWidth != null) {
        return styleWidth;
      }

      return this._resolveWidth($element, 'element');
    }

    if (method == 'element') {
      var elementWidth = $element.outerWidth(false);

      if (elementWidth <= 0) {
        return 'auto';
      }

      return elementWidth + 'px';
    }

    if (method == 'style') {
      var style = $element.attr('style');

      if (typeof(style) !== 'string') {
        return null;
      }

      var attrs = style.split(';');

      for (var i = 0, l = attrs.length; i < l; i = i + 1) {
        var attr = attrs[i].replace(/\s/g, '');
        var matches = attr.match(WIDTH);

        if (matches !== null && matches.length >= 1) {
          return matches[1];
        }
      }

      return null;
    }

    return method;
  };

  Select2.prototype._bindAdapters = function () {
    this.dataAdapter.bind(this, this.$container);
    this.selection.bind(this, this.$container);

    this.dropdown.bind(this, this.$container);
    this.results.bind(this, this.$container);
  };

  Select2.prototype._registerDomEvents = function () {
    var self = this;

    this.$element.on('change.select2', function () {
      self.dataAdapter.current(function (data) {
        self.trigger('selection:update', {
          data: data
        });
      });
    });

    this.$element.on('focus.select2', function (evt) {
      self.trigger('focus', evt);
    });

    this._syncA = Utils.bind(this._syncAttributes, this);
    this._syncS = Utils.bind(this._syncSubtree, this);

    if (this.$element[0].attachEvent) {
      this.$element[0].attachEvent('onpropertychange', this._syncA);
    }

    var observer = window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver
    ;

    if (observer != null) {
      this._observer = new observer(function (mutations) {
        $.each(mutations, self._syncA);
        $.each(mutations, self._syncS);
      });
      this._observer.observe(this.$element[0], {
        attributes: true,
        childList: true,
        subtree: false
      });
    } else if (this.$element[0].addEventListener) {
      this.$element[0].addEventListener(
        'DOMAttrModified',
        self._syncA,
        false
      );
      this.$element[0].addEventListener(
        'DOMNodeInserted',
        self._syncS,
        false
      );
      this.$element[0].addEventListener(
        'DOMNodeRemoved',
        self._syncS,
        false
      );
    }
  };

  Select2.prototype._registerDataEvents = function () {
    var self = this;

    this.dataAdapter.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerSelectionEvents = function () {
    var self = this;
    var nonRelayEvents = ['toggle', 'focus'];

    this.selection.on('toggle', function () {
      self.toggleDropdown();
    });

    this.selection.on('focus', function (params) {
      self.focus(params);
    });

    this.selection.on('*', function (name, params) {
      if ($.inArray(name, nonRelayEvents) !== -1) {
        return;
      }

      self.trigger(name, params);
    });
  };

  Select2.prototype._registerDropdownEvents = function () {
    var self = this;

    this.dropdown.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerResultsEvents = function () {
    var self = this;

    this.results.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerEvents = function () {
    var self = this;

    this.on('open', function () {
      self.$container.addClass('select2-container--open');
    });

    this.on('close', function () {
      self.$container.removeClass('select2-container--open');
    });

    this.on('enable', function () {
      self.$container.removeClass('select2-container--disabled');
    });

    this.on('disable', function () {
      self.$container.addClass('select2-container--disabled');
    });

    this.on('blur', function () {
      self.$container.removeClass('select2-container--focus');
    });

    this.on('query', function (params) {
      if (!self.isOpen()) {
        self.trigger('open', {});
      }

      this.dataAdapter.query(params, function (data) {
        self.trigger('results:all', {
          data: data,
          query: params
        });
      });
    });

    this.on('query:append', function (params) {
      this.dataAdapter.query(params, function (data) {
        self.trigger('results:append', {
          data: data,
          query: params
        });
      });
    });

    this.on('keypress', function (evt) {
      var key = evt.which;

      if (self.isOpen()) {
        if (key === KEYS.ESC || key === KEYS.TAB ||
            (key === KEYS.UP && evt.altKey)) {
          self.close();

          evt.preventDefault();
        } else if (key === KEYS.ENTER) {
          self.trigger('results:select', {});

          evt.preventDefault();
        } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
          self.trigger('results:toggle', {});

          evt.preventDefault();
        } else if (key === KEYS.UP) {
          self.trigger('results:previous', {});

          evt.preventDefault();
        } else if (key === KEYS.DOWN) {
          self.trigger('results:next', {});

          evt.preventDefault();
        }
      } else {
        if (key === KEYS.ENTER || key === KEYS.SPACE ||
            (key === KEYS.DOWN && evt.altKey)) {
          self.open();

          evt.preventDefault();
        }
      }
    });
  };

  Select2.prototype._syncAttributes = function () {
    this.options.set('disabled', this.$element.prop('disabled'));

    if (this.options.get('disabled')) {
      if (this.isOpen()) {
        this.close();
      }

      this.trigger('disable', {});
    } else {
      this.trigger('enable', {});
    }
  };

  Select2.prototype._syncSubtree = function (evt, mutations) {
    var changed = false;
    var self = this;

    // Ignore any mutation events raised for elements that aren't options or
    // optgroups. This handles the case when the select element is destroyed
    if (
      evt && evt.target && (
        evt.target.nodeName !== 'OPTION' && evt.target.nodeName !== 'OPTGROUP'
      )
    ) {
      return;
    }

    if (!mutations) {
      // If mutation events aren't supported, then we can only assume that the
      // change affected the selections
      changed = true;
    } else if (mutations.addedNodes && mutations.addedNodes.length > 0) {
      for (var n = 0; n < mutations.addedNodes.length; n++) {
        var node = mutations.addedNodes[n];

        if (node.selected) {
          changed = true;
        }
      }
    } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
      changed = true;
    }

    // Only re-pull the data if we think there is a change
    if (changed) {
      this.dataAdapter.current(function (currentData) {
        self.trigger('selection:update', {
          data: currentData
        });
      });
    }
  };

  /**
   * Override the trigger method to automatically trigger pre-events when
   * there are events that can be prevented.
   */
  Select2.prototype.trigger = function (name, args) {
    var actualTrigger = Select2.__super__.trigger;
    var preTriggerMap = {
      'open': 'opening',
      'close': 'closing',
      'select': 'selecting',
      'unselect': 'unselecting'
    };

    if (args === undefined) {
      args = {};
    }

    if (name in preTriggerMap) {
      var preTriggerName = preTriggerMap[name];
      var preTriggerArgs = {
        prevented: false,
        name: name,
        args: args
      };

      actualTrigger.call(this, preTriggerName, preTriggerArgs);

      if (preTriggerArgs.prevented) {
        args.prevented = true;

        return;
      }
    }

    actualTrigger.call(this, name, args);
  };

  Select2.prototype.toggleDropdown = function () {
    if (this.options.get('disabled')) {
      return;
    }

    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  };

  Select2.prototype.open = function () {
    if (this.isOpen()) {
      return;
    }

    this.trigger('query', {});
  };

  Select2.prototype.close = function () {
    if (!this.isOpen()) {
      return;
    }

    this.trigger('close', {});
  };

  Select2.prototype.isOpen = function () {
    return this.$container.hasClass('select2-container--open');
  };

  Select2.prototype.hasFocus = function () {
    return this.$container.hasClass('select2-container--focus');
  };

  Select2.prototype.focus = function (data) {
    // No need to re-trigger focus events if we are already focused
    if (this.hasFocus()) {
      return;
    }

    this.$container.addClass('select2-container--focus');
    this.trigger('focus', {});
  };

  Select2.prototype.enable = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("enable")` method has been deprecated and will' +
        ' be removed in later Select2 versions. Use $element.prop("disabled")' +
        ' instead.'
      );
    }

    if (args == null || args.length === 0) {
      args = [true];
    }

    var disabled = !args[0];

    this.$element.prop('disabled', disabled);
  };

  Select2.prototype.data = function () {
    if (this.options.get('debug') &&
        arguments.length > 0 && window.console && console.warn) {
      console.warn(
        'Select2: Data can no longer be set using `select2("data")`. You ' +
        'should consider setting the value instead using `$element.val()`.'
      );
    }

    var data = [];

    this.dataAdapter.current(function (currentData) {
      data = currentData;
    });

    return data;
  };

  Select2.prototype.val = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("val")` method has been deprecated and will be' +
        ' removed in later Select2 versions. Use $element.val() instead.'
      );
    }

    if (args == null || args.length === 0) {
      return this.$element.val();
    }

    var newVal = args[0];

    if ($.isArray(newVal)) {
      newVal = $.map(newVal, function (obj) {
        return obj.toString();
      });
    }

    this.$element.val(newVal).trigger('change');
  };

  Select2.prototype.destroy = function () {
    this.$container.remove();

    if (this.$element[0].detachEvent) {
      this.$element[0].detachEvent('onpropertychange', this._syncA);
    }

    if (this._observer != null) {
      this._observer.disconnect();
      this._observer = null;
    } else if (this.$element[0].removeEventListener) {
      this.$element[0]
        .removeEventListener('DOMAttrModified', this._syncA, false);
      this.$element[0]
        .removeEventListener('DOMNodeInserted', this._syncS, false);
      this.$element[0]
        .removeEventListener('DOMNodeRemoved', this._syncS, false);
    }

    this._syncA = null;
    this._syncS = null;

    this.$element.off('.select2');
    this.$element.attr('tabindex', this.$element.data('old-tabindex'));

    this.$element.removeClass('select2-hidden-accessible');
    this.$element.attr('aria-hidden', 'false');
    this.$element.removeData('select2');

    this.dataAdapter.destroy();
    this.selection.destroy();
    this.dropdown.destroy();
    this.results.destroy();

    this.dataAdapter = null;
    this.selection = null;
    this.dropdown = null;
    this.results = null;
  };

  Select2.prototype.render = function () {
    var $container = $(
      '<span class="select2 select2-container">' +
        '<span class="selection"></span>' +
        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
      '</span>'
    );

    $container.attr('dir', this.options.get('dir'));

    this.$container = $container;

    this.$container.addClass('select2-container--' + this.options.get('theme'));

    $container.data('element', this.$element);

    return $container;
  };

  return Select2;
});

S2.define('select2/compat/utils',[
  'jquery'
], function ($) {
  function syncCssClasses ($dest, $src, adapter) {
    var classes, replacements = [], adapted;

    classes = $.trim($dest.attr('class'));

    if (classes) {
      classes = '' + classes; // for IE which returns object

      $(classes.split(/\s+/)).each(function () {
        // Save all Select2 classes
        if (this.indexOf('select2-') === 0) {
          replacements.push(this);
        }
      });
    }

    classes = $.trim($src.attr('class'));

    if (classes) {
      classes = '' + classes; // for IE which returns object

      $(classes.split(/\s+/)).each(function () {
        // Only adapt non-Select2 classes
        if (this.indexOf('select2-') !== 0) {
          adapted = adapter(this);

          if (adapted != null) {
            replacements.push(adapted);
          }
        }
      });
    }

    $dest.attr('class', replacements.join(' '));
  }

  return {
    syncCssClasses: syncCssClasses
  };
});

S2.define('select2/compat/containerCss',[
  'jquery',
  './utils'
], function ($, CompatUtils) {
  // No-op CSS adapter that discards all classes by default
  function _containerAdapter (clazz) {
    return null;
  }

  function ContainerCSS () { }

  ContainerCSS.prototype.render = function (decorated) {
    var $container = decorated.call(this);

    var containerCssClass = this.options.get('containerCssClass') || '';

    if ($.isFunction(containerCssClass)) {
      containerCssClass = containerCssClass(this.$element);
    }

    var containerCssAdapter = this.options.get('adaptContainerCssClass');
    containerCssAdapter = containerCssAdapter || _containerAdapter;

    if (containerCssClass.indexOf(':all:') !== -1) {
      containerCssClass = containerCssClass.replace(':all:', '');

      var _cssAdapter = containerCssAdapter;

      containerCssAdapter = function (clazz) {
        var adapted = _cssAdapter(clazz);

        if (adapted != null) {
          // Append the old one along with the adapted one
          return adapted + ' ' + clazz;
        }

        return clazz;
      };
    }

    var containerCss = this.options.get('containerCss') || {};

    if ($.isFunction(containerCss)) {
      containerCss = containerCss(this.$element);
    }

    CompatUtils.syncCssClasses($container, this.$element, containerCssAdapter);

    $container.css(containerCss);
    $container.addClass(containerCssClass);

    return $container;
  };

  return ContainerCSS;
});

S2.define('select2/compat/dropdownCss',[
  'jquery',
  './utils'
], function ($, CompatUtils) {
  // No-op CSS adapter that discards all classes by default
  function _dropdownAdapter (clazz) {
    return null;
  }

  function DropdownCSS () { }

  DropdownCSS.prototype.render = function (decorated) {
    var $dropdown = decorated.call(this);

    var dropdownCssClass = this.options.get('dropdownCssClass') || '';

    if ($.isFunction(dropdownCssClass)) {
      dropdownCssClass = dropdownCssClass(this.$element);
    }

    var dropdownCssAdapter = this.options.get('adaptDropdownCssClass');
    dropdownCssAdapter = dropdownCssAdapter || _dropdownAdapter;

    if (dropdownCssClass.indexOf(':all:') !== -1) {
      dropdownCssClass = dropdownCssClass.replace(':all:', '');

      var _cssAdapter = dropdownCssAdapter;

      dropdownCssAdapter = function (clazz) {
        var adapted = _cssAdapter(clazz);

        if (adapted != null) {
          // Append the old one along with the adapted one
          return adapted + ' ' + clazz;
        }

        return clazz;
      };
    }

    var dropdownCss = this.options.get('dropdownCss') || {};

    if ($.isFunction(dropdownCss)) {
      dropdownCss = dropdownCss(this.$element);
    }

    CompatUtils.syncCssClasses($dropdown, this.$element, dropdownCssAdapter);

    $dropdown.css(dropdownCss);
    $dropdown.addClass(dropdownCssClass);

    return $dropdown;
  };

  return DropdownCSS;
});

S2.define('select2/compat/initSelection',[
  'jquery'
], function ($) {
  function InitSelection (decorated, $element, options) {
    if (options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `initSelection` option has been deprecated in favor' +
        ' of a custom data adapter that overrides the `current` method. ' +
        'This method is now called multiple times instead of a single ' +
        'time when the instance is initialized. Support will be removed ' +
        'for the `initSelection` option in future versions of Select2'
      );
    }

    this.initSelection = options.get('initSelection');
    this._isInitialized = false;

    decorated.call(this, $element, options);
  }

  InitSelection.prototype.current = function (decorated, callback) {
    var self = this;

    if (this._isInitialized) {
      decorated.call(this, callback);

      return;
    }

    this.initSelection.call(null, this.$element, function (data) {
      self._isInitialized = true;

      if (!$.isArray(data)) {
        data = [data];
      }

      callback(data);
    });
  };

  return InitSelection;
});

S2.define('select2/compat/inputData',[
  'jquery'
], function ($) {
  function InputData (decorated, $element, options) {
    this._currentData = [];
    this._valueSeparator = options.get('valueSeparator') || ',';

    if ($element.prop('type') === 'hidden') {
      if (options.get('debug') && console && console.warn) {
        console.warn(
          'Select2: Using a hidden input with Select2 is no longer ' +
          'supported and may stop working in the future. It is recommended ' +
          'to use a `<select>` element instead.'
        );
      }
    }

    decorated.call(this, $element, options);
  }

  InputData.prototype.current = function (_, callback) {
    function getSelected (data, selectedIds) {
      var selected = [];

      if (data.selected || $.inArray(data.id, selectedIds) !== -1) {
        data.selected = true;
        selected.push(data);
      } else {
        data.selected = false;
      }

      if (data.children) {
        selected.push.apply(selected, getSelected(data.children, selectedIds));
      }

      return selected;
    }

    var selected = [];

    for (var d = 0; d < this._currentData.length; d++) {
      var data = this._currentData[d];

      selected.push.apply(
        selected,
        getSelected(
          data,
          this.$element.val().split(
            this._valueSeparator
          )
        )
      );
    }

    callback(selected);
  };

  InputData.prototype.select = function (_, data) {
    if (!this.options.get('multiple')) {
      this.current(function (allData) {
        $.map(allData, function (data) {
          data.selected = false;
        });
      });

      this.$element.val(data.id);
      this.$element.trigger('change');
    } else {
      var value = this.$element.val();
      value += this._valueSeparator + data.id;

      this.$element.val(value);
      this.$element.trigger('change');
    }
  };

  InputData.prototype.unselect = function (_, data) {
    var self = this;

    data.selected = false;

    this.current(function (allData) {
      var values = [];

      for (var d = 0; d < allData.length; d++) {
        var item = allData[d];

        if (data.id == item.id) {
          continue;
        }

        values.push(item.id);
      }

      self.$element.val(values.join(self._valueSeparator));
      self.$element.trigger('change');
    });
  };

  InputData.prototype.query = function (_, params, callback) {
    var results = [];

    for (var d = 0; d < this._currentData.length; d++) {
      var data = this._currentData[d];

      var matches = this.matches(params, data);

      if (matches !== null) {
        results.push(matches);
      }
    }

    callback({
      results: results
    });
  };

  InputData.prototype.addOptions = function (_, $options) {
    var options = $.map($options, function ($option) {
      return $.data($option[0], 'data');
    });

    this._currentData.push.apply(this._currentData, options);
  };

  return InputData;
});

S2.define('select2/compat/matcher',[
  'jquery'
], function ($) {
  function oldMatcher (matcher) {
    function wrappedMatcher (params, data) {
      var match = $.extend(true, {}, data);

      if (params.term == null || $.trim(params.term) === '') {
        return match;
      }

      if (data.children) {
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          // Check if the child object matches
          // The old matcher returned a boolean true or false
          var doesMatch = matcher(params.term, child.text, child);

          // If the child didn't match, pop it off
          if (!doesMatch) {
            match.children.splice(c, 1);
          }
        }

        if (match.children.length > 0) {
          return match;
        }
      }

      if (matcher(params.term, data.text, data)) {
        return match;
      }

      return null;
    }

    return wrappedMatcher;
  }

  return oldMatcher;
});

S2.define('select2/compat/query',[

], function () {
  function Query (decorated, $element, options) {
    if (options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `query` option has been deprecated in favor of a ' +
        'custom data adapter that overrides the `query` method. Support ' +
        'will be removed for the `query` option in future versions of ' +
        'Select2.'
      );
    }

    decorated.call(this, $element, options);
  }

  Query.prototype.query = function (_, params, callback) {
    params.callback = callback;

    var query = this.options.get('query');

    query.call(null, params);
  };

  return Query;
});

S2.define('select2/dropdown/attachContainer',[

], function () {
  function AttachContainer (decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  AttachContainer.prototype.position =
    function (decorated, $dropdown, $container) {
    var $dropdownContainer = $container.find('.dropdown-wrapper');
    $dropdownContainer.append($dropdown);

    $dropdown.addClass('select2-dropdown--below');
    $container.addClass('select2-container--below');
  };

  return AttachContainer;
});

S2.define('select2/dropdown/stopPropagation',[

], function () {
  function StopPropagation () { }

  StopPropagation.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    var stoppedEvents = [
    'blur',
    'change',
    'click',
    'dblclick',
    'focus',
    'focusin',
    'focusout',
    'input',
    'keydown',
    'keyup',
    'keypress',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseover',
    'mouseup',
    'search',
    'touchend',
    'touchstart'
    ];

    this.$dropdown.on(stoppedEvents.join(' '), function (evt) {
      evt.stopPropagation();
    });
  };

  return StopPropagation;
});

S2.define('select2/selection/stopPropagation',[

], function () {
  function StopPropagation () { }

  StopPropagation.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    var stoppedEvents = [
      'blur',
      'change',
      'click',
      'dblclick',
      'focus',
      'focusin',
      'focusout',
      'input',
      'keydown',
      'keyup',
      'keypress',
      'mousedown',
      'mouseenter',
      'mouseleave',
      'mousemove',
      'mouseover',
      'mouseup',
      'search',
      'touchend',
      'touchstart'
    ];

    this.$selection.on(stoppedEvents.join(' '), function (evt) {
      evt.stopPropagation();
    });
  };

  return StopPropagation;
});

/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */

(function (factory) {
    if ( typeof S2.define === 'function' && S2.define.amd ) {
        // AMD. Register as an anonymous module.
        S2.define('jquery-mousewheel',['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));

S2.define('jquery.select2',[
  'jquery',
  'jquery-mousewheel',

  './select2/core',
  './select2/defaults'
], function ($, _, Select2, Defaults) {
  if ($.fn.select2 == null) {
    // All methods that should return the element
    var thisMethods = ['open', 'close', 'destroy'];

    $.fn.select2 = function (options) {
      options = options || {};

      if (typeof options === 'object') {
        this.each(function () {
          var instanceOptions = $.extend(true, {}, options);

          var instance = new Select2($(this), instanceOptions);
        });

        return this;
      } else if (typeof options === 'string') {
        var ret;
        var args = Array.prototype.slice.call(arguments, 1);

        this.each(function () {
          var instance = $(this).data('select2');

          if (instance == null && window.console && console.error) {
            console.error(
              'The select2(\'' + options + '\') method was called on an ' +
              'element that is not using Select2.'
            );
          }

          ret = instance[options].apply(instance, args);
        });

        // Check if we should be returning `this`
        if ($.inArray(options, thisMethods) > -1) {
          return this;
        }

        return ret;
      } else {
        throw new Error('Invalid arguments for Select2: ' + options);
      }
    };
  }

  if ($.fn.select2.defaults == null) {
    $.fn.select2.defaults = Defaults;
  }

  return Select2;
});

  // Return the AMD loader configuration so it can be used outside of this file
  return {
    define: S2.define,
    require: S2.require
  };
}());

  // Autoload the jQuery bindings
  // We know that all of the modules exist above this, so we're safe
  var select2 = S2.require('jquery.select2');

  // Hold the AMD module references on the jQuery function that was just loaded
  // This allows Select2 to use the internal loader outside of this file, such
  // as in the language files.
  jQuery.fn.select2.amd = S2;

  // Return the Select2 instance for anyone who is importing it.
  return select2;
}));

/**
 * Created by mrashid on 12/15/2017.
 */

/**
 * goTo | This function is used to go to the specific url
 * @param url
 */
function goTo(url) {
    window.location.href = url;
}

//# sourceMappingURL=frontend-app.js.map
