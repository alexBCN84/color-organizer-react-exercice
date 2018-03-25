'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _LiList = require('./LiList');

var _LiList2 = _interopRequireDefault(_LiList);

var _ParagraphsList = require('./ParagraphsList');

var _ParagraphsList2 = _interopRequireDefault(_ParagraphsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageSection = function PageSection(_ref) {
    var sectionName = _ref.sectionName,
        liElements = _ref.liElements,
        paragraphs = _ref.paragraphs;
    return React.createElement(
        'section',
        { id: sectionName.toLowerCase().replace(/ /g, '-') },
        React.createElement(
            'h1',
            null,
            sectionName
        ),
        React.createElement(_LiList2.default, { list: liElements }),
        React.createElement(_ParagraphsList2.default, { title: 'My Paragraph List',
            paragraphs: paragraphs })
    );
};

PageSection.displayName = 'Page Section';

exports.default = PageSection;