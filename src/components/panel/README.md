# README

### 活动面板

分为固定模式和滑动模式。固定模式中，标题居中，选项内容平铺，每行最多显示5个；滑动模式中，标题居左，每个选项最小宽度为页面宽度的20%，超出部分可滑动展示。

### API

| 属性             | 说明                                                         | 必填    | 类型                                                         | 默认值  |
| ---------------- | ------------------------------------------------------------ | ------- | ------------------------------------------------------------ | ------- |
| show             | 是否显示                                                     | false   | boolean                                                      | false   |
| title            | 标题                                                         | false   | string                                                       | ''      |
| options          | 选项数组，可为一维数组或二维数组。icon字段为React.ReactNode或图片的url低值或base64编码。 | false   | Array<Array<{ icon: React.ReactNode , title: string }>> \|Array<{ icon: React.ReactNode |         |
| cancelButtonText | 取消按钮文本内容                                             | false   | string                                                       | 取消    |
| type             | 活动面板渲染模式                                             | false   | 'fixed'\|'slideable'                                         | 'fixed' |
| onClose          | 点击取消、遮罩时的回调函数                                   | false   | ()=>void                                                     |         |
| callback         | 点击选项内容时的回调函数。参数为选项所在列/行的下标，从0开始计数。当为一维数组时，row恒为0 | 发fasle | (col:number,row?:number)=>void                               |         |





