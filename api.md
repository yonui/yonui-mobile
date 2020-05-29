# README

# README

# README

# README

# README

# README

# README

# result 反馈页
## 反馈页面
**API**

| result |  |  |  |
| :---: | --- | --- | --- |
| 属性 | 设计器类型 | 默认值 | 说明 |
| mode | string | 'success' |  模式 取值范围 ['success','wait','reject']|
| message | string | '' |  文字描述|


# empty 情感化页面空数据
## 情感化页面
**API**

| empty |  |  |  |
| :---: | --- | --- | --- |
| 属性 | 设计器类型 | 默认值 | 说明 |
| mode | string | 'success' |  模式 取值范围 ['noData','client','blankPage','error','review','server','noNetwork']|
| message | string | '' |  文字描述|


# README
## tips 基础组件-徽标数
**API**

| label |  |  |  |
| :---: | --- | --- | --- |
| 属性 | 类型 | 默认值 | 说明 |
| text | string | - |  展示的数字或文案，当为数字时候，大于 overflowCount |
| corner | boolean | false |  置于角落 |
| dot | boolean | false |  不展示数字，只有一个小红点 |
| overflowCount | number | - |  展示封顶的数字值 |


# README
label组件可用作标签等单纯的数据展示。

### API

| 属性          | 说明                                            | 必填 | 类型                                                       | 默认值        |
| ------------- | ----------------------------------------------- | ---- | ---------------------------------------------------------- | ------------- |
| *type*        | 渲染类型              | 否 | 'default'\|'primary'\|'border'\|'label'    | 'default' |
| *label* | 文本内容 | 否 | string |  |
| *width* | 图片的尺寸                            | 否   | string                               |  |
| *textAlign* | 图片圆角百分值              | 否   | 'left'\|'center'\|'right' |  |
| *color* | 主题色                             | 否   | string                      |  |
| *bgColor* | 背景色 | 否   | string |               |
| *leftIcon* | 左侧插入图标 | 否 | ReactNode | |
| *rightIcon* | 右侧插入图标 | 否 | ReactNode | |



# README
## navbar 导航栏
**API**

| navbar |  |  |  |
| :---: | --- | --- | --- |
| 属性 | 类型 | 默认值 | 说明 |
| label | string | - |  标签 |
| style | object | - |  样式描述 |


# README

# README

# README

包含noticebar和notice

# README

# README

选项组件，支持单选和多选，支持标签和列表两种形态。

### API

| 属性                      | 说明                           | 必填 | 类型                                 | 默认值 |
| ------------------------- | ------------------------------ | ---- | ------------------------------------ | ------ |
| dataSource         | 渲染类型，支持标签和列表形式 | 否 | 'tag'\|'list'                  | 'tag' |
| multiple | 是否启用下拉刷新 | 否 | boolean | true |
| label | 底部区域文本，为空时不展示底部文字 | 否 | string | '' |
| dataSource | 数据源 | 是 | dataType[] | - |
| checkedValue | 已经选择数据的value数组 | 否 | number | - |
| tagSize | 渲染类型为标签时，标签的尺寸 | 否 | 'sm'\|'md'\|'g'\|'default' | 'default' |
| disabled | 禁用 | 否 | boolean | false |
| singleLine | 当行展示 | 否 | boolean | false |
| splitLine | 是否展示分割线 | 否 | boolean | true |
| required | 是否必填项 | 否 | boolean | false |
| onClick | 点击某个选项时的回调 | 否 | (selectedValue: string[], selectedData: dataType[]) => void | false |
| onChange | 选项值改变时的回调，列表多选时为确定时的回调 | 否 | (selectedValue: string[], selectedData: dataType[]) => void | false |

```typescript
interface dataType { text: string, value: string, disabled?: boolean }
```



# README

# README

# README

# README
## Grid 宫格
**API**

| Grid |  |  |  |
| :---: | --- | --- | --- |
| 属性 | 说明 | 类型 | 默认值 |
|data	|传入的菜单数据|	Array<{icon, text}>|	[]|
|onClick|	点击每个菜单的回调函数|	(el: Object, index: number): void	|-|
|columnNum|	列数|	number|	4|
|hasLine|	是否有边框|	boolean	|true|
|outContent| 是否有外框内容,注(当outContent为true,renderItem方法无效) | boolean | false |
|isCarousel	|是否跑马灯|	boolean|	false|
|carouselMaxRow	|如果是跑马灯, 一页跑马灯需要展示的行数|	number|	2|
|renderItem	|自定义每个 grid 条目的创建函数	|(el, index) => React.Node	|-|
|square|	每个格子是否固定为正方形|	boolean	|true|
|activeStyle|	点击反馈的自定义样式 (设为 false 时表示禁止点击反馈)	|{}/false|	{}|
|activeClassName	|点击反馈的自定义类名	|string	||
|itemStyle	|每个格子自定义样式	|object	|{}|


# README

### API

| 属性                      | 说明                           | 必填 | 类型                                 | 默认值 |
| ------------------------- | ------------------------------ | ---- | ------------------------------------ | ------ |
| *tabs*                    | tab数据源                      | 是   | array                                | []     |
| *animated*                | 是否使用切换动画效果           | 否   | boolean                              | true   |
| *initialPage*             | initialPage                    | 否   | number\|string                       |        |
| *page*                    | 当前Tab下标或key值             | 否   | number\|string                       |        |
| *pageSize*                | 单页最大标签数，超出后滑动展示 | 否   | number                               | 5      |
| *swipeable*              | 是否可滑动切换内容             | 否   | boolean                              | false  |
| *onChange*                | tab变化时触发                  | 否   | (tab: object, index: number) => void |        |
| *onTabClick*              | tab点击时时触发                | 否   | (tab: object, index: number) => void |        |
| *icons*                   | tab右侧图标                    | 否   | Array< JSX.Element > |        |
| *gather*                  | tab是否集中分布                | 否   | boolean                              | false  |
| *splitLine*               | 是否展示tab-bar下方的分隔符    | 否   | boolean                              | true   |
| *abBarBackgroundColor*    | 标签栏背景色                   | 否   | string                               |        |
| *tabBarActiveTextColor*   | 激活文字颜色                   | 否   | string                               |        |
| *tabBarInactiveTextColor* | 非激活文字颜色                 | 否   | string                               |        |
| *iconsOccupy* | icons是否占位 | 否 | boolean | true |
| *iconsClassName* | icons区域类名 | 否 | string |  |
| *iconsStyle* | icons区域样式 | 否 | CSSProperties |  |



# README

- Tabs组件的专属容器子组件


# README

筛选组件的容器部分



### API

| 属性           | 说明               | 必填 | 类型     | 默认  |
| -------------- | ------------------ | ---- | -------- | ----- |
| *open*         | 筛选组件是否显示   | true | boolean  | false |
| *onOpenChange* | open状态改变时调用 | 否   | ()=>void |       |
| *btn1*         | 左侧按钮名称       | 否   | String   | 重置  |
| *onBtn1Click*  | 左侧按钮点击事件   | 否   | ()=>void |       |
| *btn2*         | 右侧按钮名称       | 否   | string   | 确定  |
| *onBtn2Click*  | 右侧按钮点击事件   | 否   | ()=>void |       |



# README
工具栏

### API

| 属性          | 说明                                            | 必填 | 类型                                                       | 默认值        |
| ------------- | ----------------------------------------------- | ---- | ---------------------------------------------------------- | ------------- |


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







# README

加载



### api

| 属性      | 说明                      | 必填 | 类型                       | 默认值    |
| --------- | ------------------------- | ---- | -------------------------- | --------- |
| *show*    | 是否展示加载组件          | 否   | boolean                    | 'title'   |
| *theme*   | 主题                      | 否   | 'primary'\|'dark'\|'light' | 'primary' |
| *type*    | 加载类型                  | 否   | 'toast'\|'jump'\|'local'   | 'toast'   |
| *percent* | type='jump'时的百分比     | 否   | number                     |           |
| *inline*  | type='jump'时是否行内模式 | 否   | boolean                    | false     |
| *content* | typr='toast'时文字内容    | 否   | string                     | ''        |
| *size*    | type='local'时图标大小    | 否   | 'small' \| 'large'         | 'small'   |





# README
## Grid 宫格
**API**

| Grid |  |  |  |
| :---: | --- | --- | --- |
| 属性 | 说明 | 类型 | 默认值 |
|data	|传入的菜单数据|	Array<{icon, text}>|	[]|
|onClick|	点击每个菜单的回调函数|	(el: Object, index: number): void	|-|
|columnNum|	列数|	number|	4|
|hasLine|	是否有边框|	boolean	|false|
|outContent| 是否有外框内容,注(当outContent为true,renderItem方法无效) | boolean | false |
|full|是否通栏| boolean | false |
|transparent|是否透明|boolean|false|
|isCarousel	|是否跑马灯|	boolean|	false|
|mode|grid模式['image','number'] [图片,数字]| string | 'image' |
|itemSize|item上icon的大小,可选sm,md,lg [小,中,大]| string | 'sm' |
|carouselMaxRow	|如果是跑马灯, 一页跑马灯需要展示的行数|	number|	2|
|renderItem	|自定义每个 grid 条目的创建函数	|(el, index) => React.Node	|-|
|square|	每个格子是否固定为正方形|	boolean	|true|
|activeStyle|	点击反馈的自定义样式 (设为 false 时表示禁止点击反馈)	|{}/false|	{}|
|activeClassName	|点击反馈的自定义类名	|string	||
|itemStyle	|每个格子自定义样式	|object	|{}|

# TextareaItem 多行输入
**API**

| TextareaItem |  |  |  |
| :---: | --- | --- | --- |
| 属性 | 说明 | 类型 | 默认值 |
| value    | value 值(受控与否参考https://facebook.github.io/react/docs/forms.html)  | String |  无  |
| defaultValue    | 设置初始默认值        | String |  -  |
| placeholder      | placeholder        | String | ''  |
| editable    | 是否可编辑        | bool |  true  |
| disabled    | 是否禁用        | bool |  false  |
| clear      |  是否带清除功能(仅`editable`为`true`,`disabled`为`false`才生效) | bool | false  |
| rows      |   显示几行      | number |   1 |
| count      |  计数功能,兼具最大长度,默认为0,代表不开启计数功能      | number | -  |
| onChange    | change 事件触发的回调函数 | (val: string): void |  -  |
| onBlur     | blur 事件触发的回调函数 | (val: string): void |   -  |
| onFocus    | focus 事件触发的回调函数 | (val: string): void |  -  |
| error       | 报错样式        | bool |  false  |
| onErrorClick       | 点击报错 icon 触发的回调   | (): void |  无  |
| autoHeight       | 高度自适应, autoHeight 和 rows 请二选一    | bool  | false  |
| name   | textarea 的 name       | String |   -  |
| prefixListCls   |   列表 className 前缀      | String |  `am-list`  |
| title   | 文案说明        | String/node |  '' |


# README
## Input 基础组件-输入框
**API**

| Input |  |  |  |
| :---: | --- | --- | --- |
| 属性 | 类型 | 默认值 | 说明 |
| type | string | text | 可以是银行卡bankCard; 手机号phone(此时最大长度固定为11,maxLength设置无效); 密码password; 数字number(为了尽量唤起带小数点的数字键盘，此类型并不是原生 number，而是'<'input type="text" pattern="[0-9]*"'/>'); digit(表示原生的 number 类型); money(带小数点的模拟的数字键盘) 以及其他标准 html input type 类型 |
| label | string | - |  标签 |
| defaultValue | string | - |  设置初始默认值 |
| value | string | - |  value 值|
| placeholder | string | '' |  placeholder |
| labelNumber | number | 5 | 标签的文字个数，可用2-7之间的数字 |
| maxLength |	number | 无。除money类型外，仅当text, email, search, password, tel, or url 有效。| 最大长度 |
| required | boolean | false | 是否必填 |
| editable | boolean | true | 是否可编辑 |
| disabled | boolean | false | 是否禁用 |
| clear | boolean | false | 是否带清除功能(仅editable为true,disabled为false才生效) |
<!-- | extra	| string or node | '' | 右边注释 | -->
| onChange | (val: string): void | - | change 事件触发的回调函数 |
| onBlur | (val: string): void | - | blur 事件触发的回调函数 |	
| onFocus |	(val: string): void	| - | focus 事件触发的回调函数 |

# README

# README
## ListPanelPicker 基础组件-操作列表
**API**

| ListPanelPicker |  |  |  |
| :---: | --- | --- | --- |
属性 | 说明 | 类型 | 默认值 |
visible | 是否显示 | boolean | false |
header | 头部的值 | string | - |
data | 传入的列表数据 | Array<{key, text, delete?}>,delete为true,操作列表项颜色为红色,key为主键,text为显示文本,不需要可以不写delete属性 | [] |
onClose | 关闭时回调 | () => void | |
onClick | 点击时回调 | (object: DataItem) => void | |

# README
卡片容器组件

### API

| 属性          | 说明                                            | 必填 | 类型                                                       | 默认值        |
| ------------- | ----------------------------------------------- | ---- | ---------------------------------------------------------- | ------------- |
| displayStyle       | 展示类型                               | 否   | 'normal'\|'detail'\|'slideable' | 'normal' |
| btnText | 删除按钮文本。slideable模式下有效 | 否   | string                               | '删除' |
| rightStyle | 删除按钮样式。slideable模式下有效 | 否   | number                            | {} |
| label | 标题文本，detail模式下有效             | 否   | string                              | '' |
| showDeleteIcon | 是否展示删除按钮，detail模式下有效 | 否   | boolean | true |
| showTitleExtraIcon | 是否展示标题左侧图标，detail模式下有效 | 否 | boolean | false |
| onDelete | 删除事件。detail/slideable模式下有效 | 否 | ()=>void |  |



# README

# README

# README

# README

```js
interface InputNumberPorps {
  label?: string
  precision?: number
  type?: 'normal' | 'money' | 'integer'
  min?: number | string
  max?: number | string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  thousands?: boolean
  defaultValue?: number | string
  value?: number | string
  disabled?: boolean
  placeholder?: string
  autoFill?: boolean
  textAlign?: 'left' | 'center' | 'right'
  inputWrapperWidth?: string
  labelWidth?: string
  onChange?: (value: string) => void
}
```


# README
列表行容器组件，用来规范同类组件样式。

### API

| 属性          | 说明                                            | 必填 | 类型                                                       | 默认值        |
| ------------- | ----------------------------------------------- | ---- | ---------------------------------------------------------- | ------------- |
| label  | 标题                            | 否   | string |  |
| subLabel | 副标题文本 | 否   | string                               |  |
| required | 是否必填 | 否   | boolean                     | false |
| splitLine | 是否展示分割线             | 否   | boolean                 | true |
| singleLine | 是否单行展示 | 否   | boolean | false |
| labelCls | 标题className | 否 | string |  |
| labelStyle | 标题style属性 | 否 | React.CSSProperties |  |
| contentCls | 内容className | 否 | string | |
| contentStyle | 内容style属性 | 否 | React.CSSProperties | |
| error | 是否错误 | 否 | boolean | false |
| errorText | 错误提示文本 | 否 | string | '填写信息有误!请重新填写' |
| showExtraLabelIcon | 是否展示标题左侧图标 | 否 | boolean | false |
| onClick | 行点击事件 | 否 | (*event*: React.MouseEvent<HTMLDivElement, MouseEvent>) => void | |



# README

# README

一个简单的列表组件，支持下拉刷新和触底加载。大数据浏览时使用会产生性能问题。

### API

| 属性                      | 说明                           | 必填 | 类型                                 | 默认值 |
| ------------------------- | ------------------------------ | ---- | ------------------------------------ | ------ |
| dataSource         | 列表数据源                 | 是   | array                                | []     |
| pullToRefresh | 是否启用下拉刷新 | 否 | boolean | true |
| footerText | 底部区域文本，为空时不展示底部文字 | 否 | string | '' |
| split | 列表项之间的分隔符号，分为无、分割线和分隔块 | 否 | 'none'\|'line'\|'blank' | 'line' |
| height | 列表高度 | 否 | number | - |
| reserverdHeight | 列表底部预留高度，设置height属性时无效 | 否 | number | - |
| renderRow | 渲染每一行数据的方法，参数为数据源的每一项 | 是 | (item: any, dataSource any[], index: number) => React.ReactChild | - |
| onRefresh | 触发下拉刷新事件的回调 | 否 | () => void | - |
| onReachFoot | 页面滑动到底部时的回调 | 否 | () => void | - |



# README

联系方式组件，支持通过设置mode，区分座机、手机、邮箱。

### API

| 属性                      | 说明                           | 必填 | 类型                                 | 默认值 |
| ------------------------- | ------------------------------ | ---- | ------------------------------------ | ------ |
| label         | 标题文本 | 否 | string | '电话' |
| singleLine | 是否单行展示 | 否 | boolean | true |
| mode         | 联系方式类型 | 否 | 'telephone' / 'mobilephone' / 'email' | 'telephone' |
| area | 是否显示国际区号(当mode为telephone和mobilephone时生效) | 否 | boolean | false |
| isSelect | 是否显示选择邮箱后缀(当mode为email时生效) | 否 | boolean | false |
| dataSource | 国际区号数据源(当mode为telephone和mobilephone时生效) | 否 | dataSourceType | - |
| emailDataSource | 邮箱后缀数据源(当mode为email时生效) | 否 | emailType | - |

``` typescript
type dataSourceType = Array<{ short: string, name: string, en: string, tel: string, pinyin: string }>

type emailType = Array<{type: string}>
```


# README
图片组件。该组件仅作为图片展示组件，可用作头像展示等。

### API

| 属性          | 说明                                            | 必填 | 类型                                                       | 默认值        |
| ------------- | ----------------------------------------------- | ---- | ---------------------------------------------------------- | ------------- |
| *url*        | 图片的链接或base64字符串                     | 是   | Array< string >                                              |               |
| *size* | 图片的尺寸                            | 否   | 'sm'\|'md'\|'lg'                                     | 'md' |
| *borderRadius* | 图片圆角百分值              | 否   | number                            | 0 |
| *showLabel* | 渲染选项的模式                                  | 否   | boolean                                    | false   |
| *label* | 标题文本 | 否   | string |               |



# README

### API

| 属性                      | 说明                           | 必填 | 类型                                 | 默认值 |
| ------------------------- | ------------------------------ | ---- | ------------------------------------ | ------ |
| *url*                    | 链接的url地址                      | 是   | string                                |      |
| *width*                | iframe的样式宽度属性，默认为100%           | 否   | string                              |    |
| *height*             | iframe的样式高度属性，默认为100%                    | 否   | string                       |        |


# README

# README

评分组件

### API

| 属性                      | 说明                           | 必填 | 类型                                 | 默认值 |
| ------------------------- | ------------------------------ | ---- | ------------------------------------ | ------ |
| count         | 评分总分 | 是 | number            | 5      |
| allowHalf | 是否允许半分 | 否 | boolean | false  |
| defaultValue | 默认值 | 否 | number | -      |
| disabled | 禁用 | 否 | boolean | -      |
| onChange | 评分变化时间 | 否 | (value: number)=>void |        |



# README

# README

