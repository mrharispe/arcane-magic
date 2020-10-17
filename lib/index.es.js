Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_1 = tslib_1.__importDefault(require("@emotion/styled"));
var Wrapper = styled_1.default.button(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  letter-spacing: 1px;\n  background: #1d5ae0;\n  color: whitesmoke;\n  border: none;\n  border-radius: 5px;\n  padding: 10px 20px;\n  font-weight: 600;\n  cursor: pointer;\n"], ["\n  letter-spacing: 1px;\n  background: #1d5ae0;\n  color: whitesmoke;\n  border: none;\n  border-radius: 5px;\n  padding: 10px 20px;\n  font-weight: 600;\n  cursor: pointer;\n"])));
var Button = function (_a) {
    var text = _a.text;
    return (react_1.default.createElement(Wrapper, null, text));
};
exports.default = Button;
var templateObject_1;
