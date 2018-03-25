'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _PageSection = require('./PageSection');

var _PageSection2 = _interopRequireDefault(_PageSection);

require('../../stylesheets/myStyles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyPage = function MyPage(_ref) {
    var pageSections = _ref.pageSections;
    return React.createElement(
        'article',
        null,
        React.createElement(
            'header',
            null,
            React.createElement(
                'h1',
                null,
                'My Super Mega React Page'
            )
        ),
        React.createElement(
            'div',
            { className: 'recipes' },
            pageSections.map(function (pageSection, i) {
                return React.createElement(_PageSection2.default, _extends({ key: i }, pageSection));
            })
        )
    );
};

MyPage.displayName = 'my Page';

exports.default = MyPage;