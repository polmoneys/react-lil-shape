'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () {
                        return e[k];
                    }
                });
            }
        });
    }
    n['default'] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians),
    };
}
function polygon(centerX, centerY, points, radius) {
    var degreeIncrement = 360 / points;
    var d = new Array(points).fill('#').map(function (p, i) {
        var point = polarToCartesian(centerX, centerY, radius, degreeIncrement * i);
        return point.x + "," + point.y;
    });
    return "M" + d + "Z";
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".lil-shape {\n  display: inline-flex; }\n";
styleInject(css_248z);

var Shape = function (props) {
    var _a = props.className, className = _a === void 0 ? undefined : _a, _b = props.sides, sides = _b === void 0 ? 3 : _b, _c = props.size, size = _c === void 0 ? 69 : _c, _d = props.fill, fill = _d === void 0 ? 'currentColor' : _d, _e = props.transforms, transforms = _e === void 0 ? undefined : _e;
    var clampedSize = sides < 3 ? 3 : sides > 60 ? 60 : sides;
    var center = size / 2;
    var box = "0 0 " + size + " " + size;
    var polyPath = polygon(center, center, clampedSize, size / 2);
    var containerClassName = ['lil-shape', className].filter(Boolean).join(' ');
    return (React__namespace.createElement("svg", { className: containerClassName, viewBox: box, width: size, height: size, fill: fill, style: __assign({}, (transforms && { transform: transforms })) },
        React__namespace.createElement("path", { d: polyPath })));
};
Shape.Triangle = function (props) { return React__namespace.createElement(Shape, __assign({}, props, { sides: 3 })); };
Shape.Square = function (props) { return React__namespace.createElement(Shape, __assign({}, props, { sides: 4 })); };
Shape.Circle = function (props) { return React__namespace.createElement(Shape, __assign({}, props, { sides: 25 })); };
var avoidRerenderIf = function (prevProps, nextProps) {
    return prevProps.sides === nextProps.sides;
};
Shape.Freeze = React__namespace.memo(function (props) { return React__namespace.createElement(Shape, __assign({}, props)); }, avoidRerenderIf);

exports.Shape = Shape;
//# sourceMappingURL=index.js.map
