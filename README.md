# bee-editor

[![npm version](https://img.shields.io/npm/v/bee-editor.svg)](https://www.npmjs.com/package/bee-editor)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-editor/master.svg)](https://travis-ci.org/tinper-bee/bee-editor)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-editor/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-editor?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-editor.svg)](https://david-dm.org/tinper-bee/bee-editor#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-editor.svg?style=flat)](https://npmjs.org/package/bee-editor)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-editor.svg)](http://isitmaintained.com/project/tinper-bee/bee-editor "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-editor.svg)](http://isitmaintained.com/project/tinper-bee/bee-editor "Percentage of issues still open")


react bee-editor component for tinper-bee

基于 wangEditor封装的react 富文本编辑器

## 依赖

- react >= 15.3.0
- react-dom >= 15.3.0
- prop-types >= 15.6.0

## 使用方法

```js

```



## API

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|created|创建完成editor的回调，参数为editor实例|function|-|
|disabled|是否禁用编辑器|boolean|false|
|onChange|编辑器内容变化的回调函数，参数为变化后的内容|function|-|
|zIndex|编辑器的z-index|number|10000|
|pasteFilterStyle|当从其他网页复制文本内容粘贴到编辑器中，编辑器会默认过滤掉复制文本中自带的样式，默认开启此功能|boolean|true|
|linkImgCallback|插入网络图片后的回调，参数为图片的url|function|-|
|linkCheck|插入链接后的回调，参数为插入的文字和链接|function|-|
|uploadImgServer|上传图片到服务器的地址，设置此值即打开上传图片到服务器的功能|string|-|
|uploadImgShowBase64|是否启用base64编码显示图片(此参数和uploadImgServer只能存在一个)|boolean|false|
|uploadImgMaxSize|限制图片大小，单位 kb (首先要设置uploadImgServer或者设置uploadImgShowBase64)|number|5120|
|uploadImgParams|自定义上传图片参数，需打开上传图片到服务器的功能|object|-|
|uploadFileName|自定义上传图片名称，需打开上传图片到服务器的功能|string|-|
|uploadImgHeaders|自定义上传图片header，需打开上传图片到服务器的功能|object|-|
|uploadImgHooks|上传图片的监听函数,详细说明见下，需打开上传图片到服务器的功能|object|-|

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-editor
$ cd bee-editor
$ npm install
$ npm run dev
```
