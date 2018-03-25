'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LiList = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _LiElement = require('./LiElement');

var _LiElement2 = _interopRequireDefault(_LiElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LiList = exports.LiList = function LiList(_ref) {
    var list = _ref.list;
    return React.createElement(
        'ul',
        { className: 'ingredients' },
        list.map(function (liElement, i) {
            return React.createElement(_LiElement2.default, _extends({ key: i }, liElement));
        })
    );
};

LiList.displayName = 'Li List';

exports.default = LiList;