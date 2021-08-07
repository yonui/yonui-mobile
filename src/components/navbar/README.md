# NavBar 基础组件-导航栏
## 如何使用

```
import { NavBar } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
rightIcon1 | 右一icon的type | string | 无 | false
rightIcon2 | 右二icon的type | string | 无 | false
rightIcon1Text | 右一icon右侧文字 | string | 无 | false
rightIcon2Text | 右二icon右侧文字 | string | 无 | false
onRight1Click | 右一icon点击时回调 | () => void | 无 | false
onRight2Click | 右二icon点击时回调 | () => void | 无 | false
title | 标题 | string | '标题' | false
subTitle | 副标题 | string | 无 | false
titleIcon | 标题右侧icon的type | string | 无 | false
onTitleClick | 点击标题区域时回调 | () => void | 无 | false
backIcon | 左侧返回icon的type | string | 'left' | false
backIconText | 左侧返回icon右侧文字 | string | 无 | false
closeIcon | 关闭icon | string | 无 | false
closeIconText | 关闭icon右侧文字 | string | 无 | false
onBackClick | 返回icon点击时回调 | () => void | 无 | false
onCloseClick | 关闭icon点击时回调 | () => void | 无 | false
mode | 模式 light: 白底黑字模式 其他: 默认模式 | string | 'light' | false
rightIcons | 自定义右侧图标组 | any | 无 | false
style | 样式style | Object | {} | false
autoShow | 是否展示（微信/友空间/ios/android）平台自有头部 | boolean | false | false
