import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
const E = require('wangeditor');
const propTypes = {
    created:PropTypes.func,//创建完成后的回调
    disabled:PropTypes.bool,//是否禁用
    onChange:PropTypes.func,//变化方法，返回变化之后的内容
    zIndex:PropTypes.number,//编辑器的z-index
    pasteFilterStyle:PropTypes.bool,//粘贴样式的过滤
    linkImgCallback:PropTypes.func,//插入网络图片后的回调
    linkCheck:PropTypes.func,//插入链接后的回调
    uploadImgServer:PropTypes.string,//图片上传到服务器地址
    uploadImgShowBase64:PropTypes.bool,//是否使用base64显示上传的图片
    uploadImgMaxSize:PropTypes.number,//限制上传图片大小，单位kb
    uploadImgMaxLength:PropTypes.number,//限制一次上传图片的个数
    uploadImgParams:PropTypes.object,//自定义上传参数
    uploadFileName:PropTypes.string,//自定义上传参数
    uploadImgHeaders:PropTypes.object,//自定义上传图片header
    uploadImgHooks :PropTypes.object,//上传图片的钩子函数
};
const defaultProps = {
    created:()=>{},//创建完成后的回调
    disabled:false,//是否禁用
    onChange:()=>{},//变化方法，返回变化之后的内容
    zIndex:10000,
    pasteFilterStyle:true,
    linkImgCallback:()=>{},
    linkCheck:()=>{},
    uploadImgServer:'',
    uploadImgShowBase64:false,
    uploadImgMaxSize:5*1024,
    uploadImgMaxLength:10000,
    uploadImgParams:{},
    uploadFileName:'',//自定义上传参数
    uploadImgHeaders:{},//自定义上传图片header
    uploadImgHooks:{
        before: function (xhr, editor, files) {

        },
        success: function (xhr, editor, result) {

        },
        fail: function (xhr, editor, result) {

        },
        error: function (xhr, editor) {

        },
        timeout: function (xhr, editor) {

        },
        customInsert: function (insertImg, result, editor) {
            let url = result.url;
            insertImg(url)
        }
    },//上传图片的监听函数
};
class Editor extends Component {
    constructor(props){
        super(props);
        this.state={
            id: 'id' + Math.round((Math.random() * 1000) + 1) + new Date().getTime(),
        }
    }
    componentDidMount(){
        let self=this;
        let id=this.state.id;
        let editor = new E('#'+id);
        editor.customConfig.onchange = function (html) {
           self.props.onChange(html);
        };
        editor.customConfig.zIndex = this.props.zIndex;
        editor.customConfig.linkImgCallback = function (url) {
            self.props.linkImgCallback(url);
        };
        editor.customConfig.linkCheck = function (text,link) {
            self.props.linkCheck(text,link);
            return true;
        };
        if(this.props.uploadImgShowBase64){
            editor.customConfig.uploadImgShowBase64 = true;
        }else if((!this.props.uploadImgShowBase64)&&this.props.uploadImgServer){
            editor.customConfig.uploadImgServer=this.props.uploadImgServer;
        }
        if(this.props.uploadImgServer){
            editor.customConfig.uploadImgMaxSize = Number(this.props.uploadImgMaxSize) * 1024;
            editor.customConfig.uploadImgMaxLength = this.props.uploadImgMaxLength;
            editor.customConfig.uploadImgParams = this.props.uploadImgParams;
            editor.customConfig.uploadFileName = this.props.uploadImgParams;
            editor.customConfig.uploadImgHeaders = this.props.uploadImgHeaders;
            editor.customConfig.uploadImgHooks =this.props.uploadImgHooks;
            editor.customConfig.customAlert = function (info) {};
        }
        editor.create();
        this.props.created(editor);
        editor.txt.html(this.props.children);
    }
    render() {
        return (
            <div id={this.state.id}>

            </div>
        )
    }
};
Editor.propTypes = propTypes;
Editor.defaultProps = defaultProps;
export default Editor;