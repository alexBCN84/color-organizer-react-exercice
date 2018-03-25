"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var ParagraphsList = function ParagraphsList(_ref) {
    var title = _ref.title,
        paragraphs = _ref.paragraphs;
    return React.createElement(
        "section",
        { className: "instructions" },
        React.createElement(
            "h2",
            null,
            title
        ),
        paragraphs.map(function (paragraph, i) {
            return React.createElement(
                "p",
                { key: i },
                paragraph
            );
        })
    );
};

ParagraphsList.displayName = 'Paragraph List';

exports.default = ParagraphsList;