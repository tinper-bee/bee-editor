# Editor
## 代码演示
## API
|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
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



## 上传图片钩子函数说明
```
uploadImgHooks = {
        before: function (xhr, editor, files) {
            // 图片上传之前触发
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件
            // 如果返回的结果是 {prevent: true, msg: 'xxxx'} 则表示用户放弃上传
            // return {
            //     prevent: true,
            //     msg: '放弃上传'
            // }
        },
        success: function (xhr, editor, result) {
            // 图片上传并返回结果，图片插入成功之后触发
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
        },
        fail: function (xhr, editor, result) {
            // 图片上传并返回结果，但图片插入错误时触发
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
        },
        error: function (xhr, editor) {
            // 图片上传出错时触发
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
        },
        timeout: function (xhr, editor) {
            // 图片上传超时时触发
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
        },
        // 如果服务器端返回的不是 {errno:0, data: [...]} 这种格式，可使用该配置
        // （但是，服务器端返回的必须是一个 JSON 格式字符串！！！否则会报错）
        customInsert: function (insertImg, result, editor) {
            // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
            // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果
            // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
            let url = result.url;
            insertImg(url)
            // result 必须是一个 JSON 格式字符串！否则报错
        }
    }
```

## 编辑器菜单配置
```
[
    'head',  // 标题
    'bold',  // 粗体
    'italic',  // 斜体
    'underline',  // 下划线
    'strikeThrough',  // 删除线
    'foreColor',  // 文字颜色
    'backColor',  // 背景颜色
    'link',  // 插入链接
    'list',  // 列表
    'justify',  // 对齐方式
    'quote',  // 引用
    'emoticon',  // 表情
    'image',  // 插入图片
    'table',  // 表格
    'video',  // 插入视频
    'code',  // 插入代码
    'undo',  // 撤销
    'redo'  // 重复
]
```

