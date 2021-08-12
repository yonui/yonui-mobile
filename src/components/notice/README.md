# Notice 基础组件-通告栏
## 如何使用

```
import { Notice } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
mode | 模式 空: 无按钮 modal: 弹窗 link: 带链接按钮 closable: 带关闭按钮 light: 白底带链接按钮 pop: 气泡式 | string | 无 | false
className | 样式类名 | string | '' | false
title | 弹窗标题 | string | 'Title' | false
content | 内容 | React.ReactChild | 无 | false
noticeModalShow | 弹窗是否可见 | boolean | false | false
icon | 开始位置设置图标 | React.ReactNode | 无 | false
onClick | 点击后回调 | () => void | 无 | false
