'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _myPage = require('./components/myPage');

var _myPage2 = _interopRequireDefault(_myPage);

var _myData = require('../data/myData');

var _myData2 = _interopRequireDefault(_myData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.React = _react2.default;

(0, _reactDom.render)(_react2.default.createElement(_myPage2.default, { pageSections: _myData2.default }), document.getElementById("react-container"));