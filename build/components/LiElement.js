"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var LiElement = function LiElement(_ref) {
    var prop1 = _ref.prop1,
        prop2 = _ref.prop2,
        prop3 = _ref.prop3;
    return React.createElement(
        "li",
        null,
        React.createElement(
            "span",
            { className: "amount" },
            prop1,
            " "
        ),
        React.createElement(
            "span",
            { className: "measurement" },
            prop2,
            " "
        ),
        React.createElement(
            "span",
            { className: "name" },
            prop3
        )
    );
};

LiElement.displayName = 'Li Element';

exports.default = LiElement;