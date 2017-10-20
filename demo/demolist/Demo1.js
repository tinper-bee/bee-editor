/**
 *
 * @title 基本示例
 * @description 简单的富文本编辑器
 *
 */
import React, { Component } from 'react';
import Editor from '../../src';
class Demo1 extends Component {
    componentDidMount(){

    }
    created=(editor)=>{

    }
    render() {
        return (
            <Editor created={this.created}>
                这是内容
            </Editor>
        )
    }
}
export default Demo1;