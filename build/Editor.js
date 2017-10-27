'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var E = require('wangeditor');
var propTypes = {
    created: _propTypes2["default"].func, //创建完成后的回调
    disabled: _propTypes2["default"].bool, //是否禁用
    onChange: _propTypes2["default"].func, //变化方法，返回变化之后的内容
    zIndex: _propTypes2["default"].number, //编辑器的z-index
    pasteFilterStyle: _propTypes2["default"].bool, //粘贴样式的过滤
    linkImgCallback: _propTypes2["default"].func, //插入网络图片后的回调
    linkCheck: _propTypes2["default"].func, //插入链接后的回调
    uploadImgServer: _propTypes2["default"].string, //图片上传到服务器地址
    uploadImgShowBase64: _propTypes2["default"].bool, //是否使用base64显示上传的图片
    uploadImgMaxSize: _propTypes2["default"].number, //限制上传图片大小，单位kb
    uploadImgMaxLength: _propTypes2["default"].number, //限制一次上传图片的个数
    uploadImgParams: _propTypes2["default"].object, //自定义上传参数
    uploadFileName: _propTypes2["default"].string, //自定义上传参数
    uploadImgHeaders: _propTypes2["default"].object, //自定义上传图片header
    uploadImgHooks: _propTypes2["default"].object //上传图片的钩子函数
};
var defaultProps = {
    created: function created() {}, //创建完成后的回调
    disabled: false, //是否禁用
    onChange: function onChange() {}, //变化方法，返回变化之后的内容
    zIndex: 10000,
    pasteFilterStyle: true,
    linkImgCallback: function linkImgCallback() {},
    linkCheck: function linkCheck() {},
    uploadImgServer: '',
    uploadImgShowBase64: false,
    uploadImgMaxSize: 5 * 1024,
    uploadImgMaxLength: 10000,
    uploadImgParams: {},
    uploadFileName: '', //自定义上传参数
    uploadImgHeaders: {}, //自定义上传图片header
    uploadImgHooks: {
        before: function before(xhr, editor, files) {},
        success: function success(xhr, editor, result) {},
        fail: function fail(xhr, editor, result) {},
        error: function error(xhr, editor) {},
        timeout: function timeout(xhr, editor) {},
        customInsert: function customInsert(insertImg, result, editor) {
            var url = result.url;
            insertImg(url);
        }
    } //上传图片的监听函数
};

var Editor = function (_Component) {
    _inherits(Editor, _Component);

    function Editor(props) {
        _classCallCheck(this, Editor);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            id: 'id' + Math.round(Math.random() * 1000 + 1) + new Date().getTime()
        };
        return _this;
    }

    Editor.prototype.componentDidMount = function componentDidMount() {
        var self = this;
        var id = this.state.id;
        var editor = new E('#' + id);
        editor.customConfig.onchange = function (html) {
            self.props.onChange(html);
        };
        editor.customConfig.zIndex = this.props.zIndex;
        editor.customConfig.linkImgCallback = function (url) {
            self.props.linkImgCallback(url);
        };
        editor.customConfig.linkCheck = function (text, link) {
            self.props.linkCheck(text, link);
            return true;
        };
        if (this.props.uploadImgShowBase64) {
            editor.customConfig.uploadImgShowBase64 = true;
        } else if (!this.props.uploadImgShowBase64 && this.props.uploadImgServer) {
            editor.customConfig.uploadImgServer = this.props.uploadImgServer;
        }
        if (this.props.uploadImgServer) {
            editor.customConfig.uploadImgMaxSize = Number(this.props.uploadImgMaxSize) * 1024;
            editor.customConfig.uploadImgMaxLength = this.props.uploadImgMaxLength;
            editor.customConfig.uploadImgParams = this.props.uploadImgParams;
            editor.customConfig.uploadFileName = this.props.uploadImgParams;
            editor.customConfig.uploadImgHeaders = this.props.uploadImgHeaders;
            editor.customConfig.uploadImgHooks = this.props.uploadImgHooks;
            editor.customConfig.customAlert = function (info) {};
        }
        editor.create();
        this.props.created(editor);
        editor.txt.html(this.props.children);
    };

    Editor.prototype.render = function render() {
        return _react2["default"].createElement('div', { id: this.state.id, className: 'u-editor' });
    };

    return Editor;
}(_react.Component);

;
Editor.propTypes = propTypes;
Editor.defaultProps = defaultProps;
exports["default"] = Editor;
module.exports = exports['default'];