# Calendar 基础组件-日历组件
## 如何使用

```
import { Calendar } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
enterDirection | 入场方向(vertical:垂直 horizontal:水平) | 'horizontal'/'vertical' | 'vertical' | false
locale | 本地化 | Models.Locale | 无 | false
onCancel | 关闭时回调 | () => void | 无 | false
onConfirm | 确认时回调 | (startDateTime?: Date, endDateTime?: Date) => void | 无 | false
pickTime |是否选择时间 | boolean | false | false
prefixCls | 样式前缀 | string | 'rmc-calendar' | false
renderShortcut | 替换快捷选择栏,需要设置showShortcut: true | (select: (startDate?: Date, endDate?: Date) => void) => React.ReactNode | 无 | false
renderHeader | 替换标题栏 | () => React.ReactNode | 无 | false
showShortcut | 快捷日期选择 | boolean | false | false
title | 标题 | string | {locale.title} | false
type | 选择类型(one:单日 range:日期区间) | 'one'/'range'| 'range' | false
visible | 是否显示 | boolean | false | false
defaultDate | 显示开始日期 | Date | today | false
getDateExtra | 获取日期扩展数据 | (date: Date) => Models.ExtraData | 无 | false
infiniteOpt | 无限滚动优化（大范围选择）| boolean | false | false
initalMonths | 初始化月个数 | number | 6 | false
maxDate | 最大日期 | Date | 无 | false
minDate | 最小日期 | Date | 无 | false
onSelect | 选择区间回调 | (date: Date, state?: [Date/undefined, Date/undefined]) => [Date, Date]/[Date]/void | 无 | false
onSelectHasDisableDate | 选择区间包含不可用日期 | (date: Date[]) => void | 无 | false
rowSize | 行大小 | 'normal'/'xl' | 无 | false
defaultValue | 默认日历选择范围 | [Date, Date]/[Date] | 无 | false
defaultTimeValue | 默认时间选择值 | Date | 无 | false
dateExtra | 日期扩展数据 | Object | {} | false
onClickDay | 选择日期时回调 | ({isRange?: boolean, range?: Date[], now?: Date[]}) => void | 无 | false


# NavBar 基础组件-导航栏
## 如何使用

```
import { NavBar } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
rightIcon1 | 右一图标 | string | 无 | false
rightIcon2 | 右二图标 | string | 无 | false
rightIcon1Text | 右一图标文字 | string | 无 | false
rightIcon2Text | 右二图标文字 | string | 无 | false
onRight1Click | 右一图标点击时回调 | ():void | 无 | false
onRight2Click | 右二图标点击时回调 | ():void | 无 | false
title | 标题 | string | '标题' | false
subTitle | 副标题 | string | 无 | false
titleIcon | 标题图标 | string | 无 | false
backIcon | 返回图标 | string | 'left' | false
backIconText | 返回图标文字 | string | 无 | false
closeIcon | 关闭图标 | string | 无 | false
closeIconText | 关闭图标文字 | string | 无 | false
onBackClick | 返回图标点击时回调 | ():void | 无 | false
onCloseClick | 关闭图标点击时回调 | ():void | 无 | false
mode | 模式 | string | 'light' | false
nid | 编辑态id | string | 无 | false
reghtIcons | 自定义右边栏 | any | 无 | false
style | 自定义样式 | React.CSSProperties | 无 | false
autoShow | 是否根据平台自动展示 | boolean | false | false


# CalendarPanel 基础组件-日历面板 
## 如何使用

```
import { CalendarPanel } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
enterDirection | 入场方向(vertical:垂直 horizontal:水平) | 'horizontal'/'vertical' | 'vertical' | false
locale | 本地化 | Models.Locale | 无 | false
onCancel | 关闭时回调 | () => void | 无 | false
onConfirm | 确认时回调 | (startDateTime?: Date, endDateTime?: Date) => void | 无 | false
pickTime |是否选择时间 | boolean | false | false
prefixCls | 样式前缀 | string | 'rmc-calendar' | false
renderShortcut | 替换快捷选择栏,需要设置showShortcut: true | (select: (startDate?: Date, endDate?: Date) => void) => React.ReactNode | 无 | false
renderHeader | 替换标题栏 | () => React.ReactNode | 无 | false
showShortcut | 快捷日期选择 | boolean | false | false
title | 标题 | string | {locale.title} | false
type | 选择类型(one:单日 range:日期区间) | 'one'/'range'| 'range' | false
visible | 是否显示 | boolean | false | false
defaultDate | 显示开始日期 | Date | today | false
getDateExtra | 获取日期扩展数据 | (date: Date) => Models.ExtraData | 无 | false
infiniteOpt | 无限滚动优化（大范围选择）| boolean | false | false
initalMonths | 初始化月个数 | number | 6 | false
maxDate | 最大日期 | Date | 无 | false
minDate | 最小日期 | Date | 无 | false
onSelect | 选择区间回调 | (date: Date, state?: [Date/undefined, Date/undefined]) => [Date, Date]/[Date]/void | 无 | false
onSelectHasDisableDate | 选择区间包含不可用日期 | (date: Date[]) => void | 无 | false
rowSize | 行大小 | 'normal'/'xl' | 无 | false
defaultValue | 默认日历选择范围 | [Date, Date]/[Date] | 无 | false
defaultTimeValue | 默认时间选择值 | Date | 无 | false
dateExtra | 日期扩展数据 | Object | {} | false
onClickDay | 选择日期时回调 | ({isRange?: boolean, range?: Date[], now?: Date[]}) => void | | false
hintDays | 应用默认样式(浅红色)的日期 | string[] | [] | false


# TabBottom/TabBar 基础组件-底部标签栏
## 如何使用

```
import { TabBottom } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
activeKey | 活动的标签 | string | itemList[0] | false
itemList | 显示的标签 | TabBarItem[] | [] | false
onSwitch | 切换时的回调 | (key?: string, item?: TabBarItem) => void | 无 | false


# Button 基础组件-按钮
## 如何使用

```
import { Button } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
prefixCls | 样式前缀 | string | 'mdf-button' | false
content | 内容 | string | '' | false
mode | 模式 | 'primary'/'warning'/'ghost'/'default'/'text'/'toolbar-default'/'toolbar-primary' | '' | false
type | 类型 | 'primary'/'warning'/'ghost'/'default'/'text'/'toolbar-default'/'toolbar-primary' | 'toolbar-primary' | false
size | 尺寸 | 'large'/'small' | 'small' | false
inline | 是否行内 | boolean | false | false
disabled | 是否禁用 | boolean | false | false
mReadOnly | 是否只读 | boolean | false | false
visible | 是否可见 | boolean | true | false
loading | 是否显示loading等待图标 | boolean | false | false
icon | 图标 | React.ReactNode | string | null | false
onClick | 点击后回调 | (): void | 无 | false


# TimeRangePiker 基础组件-时间选择器
## 如何使用

```
import { TimeRangePiker } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
visible | 是否显示 | boolean | false | false
minDate | 最小可选日期 | Date | 无 | false
maxDate | 最大可选日期 | Date | 无 | false
value | 当前选中时间 | Date | 无 | false
minuteStep | 分钟数递增步长设置 | Number | 1 | false
onOk | 点击选中时执行的回调 | (value): void | 无 | false
onDismiss | 点击取消时执行的回调 | (): void | 无 | false


# Carousel 基础组件-走马灯
## 如何使用

```
import { Carousel } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
prefixCls | carousel的class | string | 'am-carousel' | false
selectedIndex | 手动设置当前显示的索引 | number | 0 | false
dots | 是否显示面板指示点 | Boolean | true | false
vertical | 垂直显示 | Boolean | false | false
autoplay | 是否自动切换 | Boolean | false | false
autoplayInterval | 自动切换的时间间隔 | Number | 3000 | false
infinite | 是否循环播放 | Boolean | false | false
dotStyle | 指示点样式 | Object | 无 | false
dotActiveStyle | 当前激活的指示点样式 | Object | 无 | false
frameOverflow | 设置 slider frame 的 overflow 样式 | string | hidden | false
cellSpacing | 项目之间的间距，以px为单位 | number | 无 | false
slideWidth | 手动设置项目宽度. 可以是slideWidth="20px"，也可以是相对容器的百分比slideWidth={0.8} | string/number | 无 | false
easing | 缓动函数，你可以使用这里提供的其他函数 | Function | easeOutCirc | false
swipeSpeed | 滑动灵敏度 | number | 12 | false
ratio | 长宽比例 | string | 4:2 | false
children | 子项 | any[] | [] | false


# CarouselItem 基础组件-走马灯Item
## 如何使用

```
import { CarouselItem } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
prefixCls | 样式前缀 | string | 'am-carousel-item' | false
backgroundColor | 背景颜色 | string | 'transparent' | false
backgroundImage | 背景图片 | string | '' | false
backgroundSize | 背景尺寸 | string | 'cover' | false
height | 高度 | number/string | itemList[0] | false
children | 子项 | any[] | itemList[0] | false
className | 样式名字 | string | itemList[0] | false
style | 样式内容 | object | itemList[0] | false


# Divider 基础组件-分割线
## 如何使用

```
import { Divider } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
content | 内容 | string | '' | false
prefixCls | 样式前缀 | string | 'mdf-divider' | false
width | 线宽 | number | 1 | false
color | 颜色 | string | '#d0d0d0' | false
type | 线条类型 | 'solid'/'dashed'/'dotted'/'double'/'none' | 'solid' | false
visible | 是否可见 | boolean | true | false


# Search 基础组件-搜索框
## 如何使用

```
import { Search } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
prefixCls | 样式前缀 | string | 'mdf-search' | false
value | 初始值 | string | '' | false
defaultValue | 默认值 | string | '' | false
placeholder | 占位 | string | '输入进行搜索' | false
maxLength | 最长长度 | string | '' | false
autoFocus | 自动获取焦点 | boolean | false | false
disabled | 禁用 | boolean | false | false
color | 字体颜色 | string | '' | false
backgroundColor | 背景颜色 | string | '' | false
searchIconColor | 搜索图标颜色 | string | '' | false
clearIconColor | 清除图标颜色 | string | '' | false
solutionId | 搜索的值包装成的对象的solutionId | number | 无 | false
term | 搜索的值包装成的对象的term | any | 无 | false
onSubmit | 点击搜索时回调 | (value: object) => void | 无 | false
onChange | 搜索框修改时回调 | (value: object) => void | 无 | false
onFocus | 获取焦点时回调 | () => void | 无 | false
onBlur | 失去焦点时回调 | () => void | 无 | false
onClear | 清空时回调 | (value: object) => void | 无 | false
focus | 获取焦点的方法 | Function | 无 | false
clear | 清空的方法 | Function | 无 | false


# TimeRange 基础组件-时间选择器
## 如何使用

```
import { TimeRange } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
hoursData | 可选的小时范围 | Number[] | [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23] | false
minutesData | 可选的分钟范围 | Number[] | [0, 10, 20, 30, 40, 50] | false
onConfirm | 确定是回调 | (value): void | 无 | false
onCancel | 取消时回调 | (): void | 无 | false


# Flex 基础组件-流式布局
## 如何使用

```
import { Flex } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
style | 样式style | React.CSSProperties | 无 | false
className | 样式class | string | 无 | false
onClick | 点击后回调 | () => void | 无 | false
onLongPress | 长按后回调 | () => void | 无 | false


# Result 基础组件-反馈页面
## 如何使用

```
import { Result } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
mode | 模式 取值范围 ['success','wait','reject'] | style | 'success' | false
message | 文字描述 | string |  '' | false
style| 样式 | React.CSSProperties |  无 | false


# Empty 基础组件-空页面
## 如何使用

```
import { Empty } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
mode | 模式 | 'noData'/'client'/'blankPage'/'error'/'review'/'server'/'noNetwork' | 'noData' | false
message | 显示信息 | string | '暂无文件' | false
style | 样式style | React.CSSProperties | 无 | false


# Tips 基础组件-徽标
## 如何使用

```
import { Tips } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
size | 大小 | 'large'/'small' | 'small'  | false
text | 展示的数字或文案 | string|number | 无 | false
corner | 置于角落 | boolean | false | false
dot | 不展示数字，只有一个小红点 | boolean | false | false
overflowCount | 展示封顶的数字值 | number | 99 | false
hot | 营销样式 | boolean | false | false


# Table 基础组件-表格
## 如何使用

```
import { Table } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
columns | 表头定义 | Object[](格式见demo) | [] | false
data | 内容定义 | Object[](格式见demo) | [] | false
orderSpanColors | 列颜色 | string[] | [] | false
addOrderColumn | 是否添加序号列 | boolean | true | false
showMore | 是否展示加载更多 | boolean | false | false
loadMore | 点击加载更多的回调 | ():void | 无 | false
onSort | 点击某列排序的回调 | (column):void | 无 | false



# Div 基础组件-Div块
## 如何使用

```
import { Div } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
nowrap | 文本自动换行 | boolean | false | false
type | 类型 | 'normal'/'panel' | 无 | false
children | 子项 | JSX.Element[] | JSX.Element | 无 | false
className | 样式class | string | 无 | false
style | 样式style | React.CSSProperties | 无 | false


# Icon 基础组件-图标
## 如何使用

```
import { Icon } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
type | 类型 | string | 无 | false
color | 颜色 | string | 无 | false
data | 内容 | string | 无 | false
size | 尺寸 | 'xxs'/'xs'/'sm'/'md'/'lg'/'md' | 'md' |false
visible | 是否可见 | boolean | true | false
onClick | 点击时回调 | (): void | 无 | false


# Notice 基础组件-通告栏
## 如何使用

```
import { Notice } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
mode | 模式 | string | 无 | false
className | 样式类名 | string | '' | false
title | 标题 | string | 'Title' | false
content | 内容 | string | 无 | false
noticeModalShow | 是否可见 | boolean | false | false
icon | 按钮 | string | '' | false
onClick | 点击后回调 | Function | 无 | false


# Popover 基础组件-气泡
## 如何使用

```
import { Popover } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
dark | 是否是深色模式 | boolean | false | false
data | 数据 | any[] | 无 | false
overlayClassName | 样式类名 | string | 无 | false
size | 尺寸 | string | 'sm' | false
onVisibleChange | 气泡可见切换时回调 | any | 无 | false
placement | 弹窗位置 | 'top'/'bottom'/'bottomLeft'/'left'/'right'/'topLeft'/'topRight'/'bottomRight' | 'bottomLeft' | false


# ListView 基础组件-长列表
## 如何使用

```
import { ListView } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
refreshing | 是否显示下拉刷新 | boolean | false | false
showSeparator | 是否显示分隔符 | boolean | false | false
dataSource | ListView.DataSource 实例 | ListViewDataSource | 无 | false
onEndReached | 当所有的数据都已经渲染过，并且列表被滚动到距离最底部不足10个像素的距离时调用 | (event?) => {} | 无 | false
onRefresh | 下拉刷新时回调 | () => void | 无 | false
onRowClick | 某行点击时回调 | (e: React.MouseEvent, rowID: any) => void | 无 | false
height | 高度 | number | 600 | false
onScroll | 在滚动的过程中，每帧最多调用一次此回调函数。调用的频率可以用scrollEventThrottle属性来控制 | e => {} | 无 | false
initialListSize | 指定在组件刚挂载的时候渲染多少行数据，用这个属性来确保首屏显示合适数量的数据 | number | 10 | false
showNum | 显示的数据数量 | number | 无 | false
pageSize | 每次事件循环（每帧）渲染的行数 | number | 4 | false
value | 如果value不为空，说明是受控组件，渲染时取 children[rowId] | any[] | 无 | false
showPullToReresh | 是否显示下拉刷新 | boolean | true | false
placeholdHeight | 占位符高度 | number | 0 | false


# Slider 基础组件-滑动输入条
## 如何使用

```
import { Slider } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
max | 最大值 | Number/String | 100 | false
min | 最小值 | Number/String | 1 | false
step | 步长 | Number/String | 1 | false
defaultValue | 默认值 | Number/String | 0 | false


# Switch 基础组件-开关
## 如何使用

```
import { Switch } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
required | 是否必填 | boolean | false | false
defaultValue | 默认值 | boolean | false | false
checked | 初始值 | boolean | false | false
visible | 是否可见 | boolean | true | false
disabled | 是否禁用 | boolean | false | false
onChange | 改变后回调 | (checked: bool): void | 无 | false
color | 颜色 | string | '#4dd865' | false
name | 名字 | string | 无 | false
platform | 平台 | 'android'/'ios' | 'ios' | false
onClick | 点击后回调 | (checked: bool): void | 无 | false


# Menu 基础组件-菜单
## 如何使用

```
import { Menu } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
data | 数据(isLeaf 设置后 children 无效) | Array<{label: ReactNode, value, disabled?, children<data>?, isLeaf?}> | [] | false
level | 菜单级数，可选1/2 | number | 2 | false
value | 初始值，一级和二级筛选数据的value组成的数组。在多选状态下，如果为二级菜单，则数组的第一个元素为一级菜单的选项，数组的第二个元素是一个数组，里面包含了二级菜单的多选项；如果为一级菜单，则数组所有元素都是多选项 | Array | 无 | false
onChange | 选择后的回调 | (item: Object): void | 无 | false
onOk | 多选状态下确认按钮回调 | (item: Object): void | 无 | false
onCancel | 多选状态下取消按钮回调 | (): void | 无 | false
height | 筛选组件的高度 | number | document.documentElement.clientHeight / 2 | false
multiSelect | 是否支持菜单多选 | boolean | false | false


# Checkbox 基础组件-复选框
## 如何使用

```
import { Checkbox } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
defaultChecked | 默认选中 | boolean | false | false
checked | 初始值 | boolean | false | false
disabled | 是否禁用 | boolean | false | false
type | 类型 | 'default'/'circle' | 'default' | false
content | 内容 | string | 无 | false
onChange | 改变后回调 | (value: boolean) => void | 无 | false


# Tab 基础组件-页签
## 如何使用

```
import { Tab } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
pageSize | Tab分页尺寸 | number | 3 | false
icons | 右侧按钮 | Array<JSX.Element/string >/JSX.Element/string | 无 | false
splitLine | 外部边框线 | boolean | false | false
className | 样式class | string | 无 | false
style | 样式style | object | 无 | false
iconsOccupy | icon浮动占位 | boolean | true | false
iconsClassName | icon样式class | string | 无 | false
iconsStyle | icon样式style | object | 无 | false
icon1 | 右1图标，icons为空时起作用 | string | 无 | false
icon2 | 右2图标，icons为空时起作用 | string | 无 | false
icon3 | 右3图标，icons为空时起作用 | string | 无 | false
onIcon1Click | 右1图标点击时回调，icons为空时起作用 | () => void | 无 | false
onIcon2Click | 右2图标点击时回调，icons为空时起作用 | () => void | 无 | false
onIcon3Click | 右3图标点击时回调，icons为空时起作用 | () => void | 无 | false
onTabClick | tab页选中后回调 | (tab: any, index: number) => void | 无 | false
mode | 模式 | string | 'normal' | false
nid | 编辑态id | string | 无 | false
uitype | ui类型 | string | 无 | false



# Radio 基础组件-选项
## 如何使用

```
import { Radio } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
mode | 模式 | 'tag'/'list' | 'list' | false
canMultiple | 是否多选 | boolean | false | false
label | 标题 | string | 无 | false
onClick | 点击后回调 | (data: dataType) => void | 无 | false
onChange | 修改后回调 | (selectedValue: string[], selectedData: dataType[]) => void | 无 | false
dataSource | 数据源 | dataType[] | [] | false
checkedValue | 已选中数据 | string[] | [] | false
tagSize | 标签尺寸 | 'sm'/ 'lg'/'md'/'default' | 'sm' | false
labelStyle | 标题样式 | React.CSSProperties | 无 | false
itemsStyle | 选项样式 | React.CSSProperties | 无 | false
disabled | 是否禁用 | boolean | false | false
singleLine | 单行显示 | boolean | false | false
mReadOnly | 是否只读 | boolean | false | false


# Toolbar 基础组件-工具栏
## 如何使用

```
import { Toolbar } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
children | 子项 | JSX.Element[]/JSX.Element | 无 | false
layout | 对其方式 | 'alignright'/'alignleft' | 'alignright' | false
runTime | 运行态样式开关 | boolean | false | false


# Loading 基础组件-加载中
## 如何使用

```
import { Loading } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
content | 加载文案 | string | '' | false
inline | 单行展示 | boolean | false | false
size | 尺寸 | 'small'/'large' | 'small' | false
show | 是否展示 | boolean | true | false
type | 类型 | 'toast'/'jump'/'top'/'local' | 'toast' | false
percent | 进度 | number | 50 | false
theme | 主题 | 'dark'/'primary'/'light'/'' | '' | false
className | 样式class | string | 无 | false
style | 样式style | object | 无 | false





# TabPane 基础组件-页签内容
## 如何使用

```
import { TabPane } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
children | 子项 | any | 无 | false
key | key | string | 无 | true
label | 标签 | string | 无 | false
className | 样式class | string | 无 | false
style | 样式style | object | 无 | false
minHeight | 最小高度 | string | 无 | false
width | 宽度 | string | 无 | false
bgColor | 背景颜色 | string | 无 | false
marginBottom | 下边距 | string | 无 | false


# Label 基础组件-标签
## 如何使用

```
import { Label } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
label | 标签文字 | string | 无 |false
spareLabel | 备用标签 | string | 无 | false
textAlign | 文字对齐方向 | 'left'/'right'/'center' | 'left' | false
leftIcon | 左侧按钮 | React.ReactNode | 无 | false
rightIcon | 右侧按钮 | React.ReactNode | 无 | false
textClamp | 文字指定行数 | number | 无 | false
textLangth | 标签最长字数,超出加... | number | 无 | false
visible | 是否可见 | boolean | true | false
prefix | 标签前缀 | string | 无 | false
suffix | 标签后缀 | string | 无 | false
dataSource | 关联数据的数据源 | string | 无 | false
controlType | 关联数据的数据源类型 | string | 无 | false
multiple | 关联数据的数据源是否多选 | boolean | false | false
dateMode | 关联数据的数据源若为日期类型,日期类型的格式 | string | 'picker-date' | false
showZero | 标签为0时的显示开关 | boolean | false | false
showTitle | 是否展示备用标签 | boolean | false | false



# Input 基础组件-输入框
## 如何使用

```
import { Input } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
subuitype | ui类型，根据不同的类型进行展示数据的格式化 | 'text'/'password'/'idCard'/'email'/'ipAddress'/'bankCard16'/'bankCard19'/'customized'/'' | 无 | false
value | 初始值 | string | 无 | false
defaultValue | 默认值 | string | 无 | false
regRule | 最终校验正则规则 | string/RegExp | 无 | false
regRuleText | 最终校验正则名称 | string | 无 | false
check | 是否进行错误检查 | boolean | true | false
formatReg | 数据格式化，value会按照formatReg的展示格式展示 | string | 无 | false
hiddenChart | 配合formatReg使用，表示要隐藏的字符 | string | '' | false
replaceChart | 配合formatReg使用，表示要替换的字符 | string | '' | false
checkMask | 中间校验规则 | string | 无 | false
inputStyle | 输入框样式 | React.CSSProperties | 无 | false
onFocus | 获取焦点时回调 | (value: string) => void | 无 | false
onBlur | 失去焦点时回调 | (value: string) => void | 无 | false
onChange | 修改时回调 | (value: string) => void | 无 | false
onClickClear | 点击清空时回调 | (value: string) => void | 无 | false
onError | 校验错误时回调 | (value: string, pattern: { reg?: RegExp, text?: string }) => void | 无 | false
onSuccess | 校验成功时回调 | React.CSSProperties | 无 | false
visible | 是否可见 | boolean | true | false
model | 运行态model | any | 无 | false
singleLine | 是否单行展示 | boolean | false | false
required | 是否必填 | boolean | false | false
label | 标题 | string | '' | false
subLabel | 副标题 | string | '' | false
labelCls | 标题样式前缀 | string | 无 | false
labelStyle | 标题样式style | React.CSSProperties | 无 | false
contentCls | 内容样式前缀 | string | 无 | false
contentStyle | 内容样式style | React.CSSProperties | 无 | false
error | 是否不显示错误 | boolean | false | false
errorText | 错误文案 | string | 无 | false
showExtraLabelIcon | 标签是否显示icon | boolean | false | false
onClick | 点击标签回调 | (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void | 无 | false
className | 样式class | string | 无 | false
style | 样式style | React.CSSProperties | 无 | false
nid | 运行态id | string | 无 | false
uitype | ui类型 | string | 无 | false


# Grid 基础组件-宫格
## 如何使用

```
import { Grid } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
prefixCls | 样式前缀 | string | 'am-grid' | false
className | 样式class | string | 无 | false
square | 每个格子是否固定为正方形 | boolean | true | false
activeClassName | 点击反馈的自定义class | string | 无 | false
activeStyle | 点击反馈的自定义style(设为 false 时表示禁止点击反馈) | object/false | 无 | false
itemStyle | 每个格子自定义样式 | object | 无 | false
outContent | 图标外有边框 | boolean | false | false
full | 是否占用全屏 | boolean | false | false
mdfPrefixCls | 外层mdf样式前缀 | string | 'mdf-grid' | false
itemSize | 图标尺寸 | string | 'sm' | false
transparent | 是否继承父样式 | boolean | false | false
mode | 模式 | string | 'image' | false
style | 样式style | object | 无 | false


# Footer 基础组件-页面底部
## 如何使用

```
import { Footer } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
children | 子项 | React.ReactChildren | 无 | false
className | 样式class | string | 无 | false
style | 样式style | React.CSSProperties | 无 | false


# SharePanel 基础组件-分享栏
## 如何使用

```
import { SharePanel } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
className | 样式class | string | 无 | false
style | 样式style | object | 无 | false
show | 是否可见 | boolean | true | false
onClose | 取消时回调 | () => void | 无 | false
title | 标题 | string | '' | false
cancelButtonText | 取消按钮文案 | string | '取消' | false
options | 可选项 | Array<Array<{ icon: React.ReactNode, title: string }>>/Array<{ icon: React.ReactNode/string, title: string }> | 无 | false
type | 类型('slideable': 跟随页面滑动，'fixed': 固定) | 'slideable'/'fixed' | 'fixed' | false
callback | 选中后回调 | (col: number, row: number) => void | 无 | false


# ListPanelPicker 基础组件-底部弹出菜单
## 如何使用

```
import { ListPanelPicker } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
visible | 是否展示 | boolean | 无 | false
header | 头部标题 | string | 无 | false
data | 数据 | DataItem[] | 无 | false
onClose | 关闭时回调 | () => void | 无 | false
onSelect | 选中时回调 | (object: DataItem) => void | 无 | false
style | 样式style | object | 无 | false
model | 运行态model | any | 无 | false


# InputBox 基础组件-输入框(只有框)
## 如何使用

```
import { InputBox } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
type | 类型 | 'text'/'number'/'tel'/'password' | 'text' | false
pattern | 输入过程中的校验规则 | RegExp | 无 | false
finalPattern | 焦点离开时的校验规则 | RegExp | 无 | false
value | 初始值 | string | 无 | false
defaultValue | 默认值 | string | 无 | false
textAlign | 文字对齐方向 | 'left'/'right'/'center' | 'left' | false
placeholder | 占位符 | string | 无 | false
maxLength | 最长长度 | number | 无 | false
inputStyle | 输入框样式 | React.CSSProperties | 无 | false
required | 是否必填 | boolean | false | false
bCanModify | 是否可修改 | boolean | 无 | false
disabled | 是否可修改 | boolean | 无 | false
mReadOnly | 是否可修改 | boolean | 无 | false
check | 是否启用校验 | boolean | 无 | false
customCheck | 自定义校验函数 | (value: string, final?: boolean) => boolean | 无 | false
onFocus | 获取焦点时回调 | (value: string) => void | 无 | false
onBlur | 失去焦点时回调 | (value: string) => void | 无 | false
onChange | 修改时回调 | (value: string) => void | 无 | false
onClickClear | 点击清空时回调 | (value: string) => void | 无 | false
onError | 校验错误时回调 | (value: string, pattern: { reg?: RegExp, text?: string }) => void | 无 | false
onSuccess | 校验成功时回调 | React.CSSProperties | 无 | false
beforeRender | 渲染前回调 | (value: string) => string | 无 | false
afterChange | 修改后回调 | (value: string) => string | 无 | false


# Cardbox 基础组件-卡片容器
## 如何使用

```
import { Cardbox } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
onDelete | 删除时回调 | () => void | 无 | false
onShowMore | 点击更多时回调 | () => void | 无 | false
onCloseMore | 收起更多时回调 | () => void | 无 | false
label | 标签名字 | string | '明细' | false
splitLine | 是否显示分割线 | boolean | true | false
rightStyle | 右侧按钮样式,displayStyle为slideable(可滑动删除)时起作用 | React.CSSProperties | 无 | false
viewStatus | 卡片样式 | 'default'/'select'/'selected'/'detail'/'browse' | 'default' | false
displayStyle | 展示方式 | 'normal'/'detail'/'slideable'/'extra'/'editable'/'listDetail' | 无 | false
selected | 是否选中,displayStyle为editable时起作用 | boolean | 无 | false
showDeleteIcon | 是否展示删除图标,displayStyle为detail时起作用 | boolean | true | false
showTitleExtraIcon | 是否展示标题图标,displayStyle为detail时起作用 | boolean | false | false



# Textarea 基础组件-多行文本
## 如何使用

```
import { Textarea } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
required | 是否必填 | boolean | false | true
maxLength | 最长字数 | number | 无 | false
disabled | 是否禁用 | boolean | false | false
mReadOnly | 是否制度 | boolean | false | false
visible | 是否可见 | boolean | true | false
singleLine | 是否单行展示 | boolean | false | false
label | 标题 | string | '' | false
subLabel | 副标题 | string | '' | false
labelCls | 标题样式前缀 | string | 无 | false
labelStyle | 标题样式style | React.CSSProperties | 无 | false
contentCls | 内容样式前缀 | string | 无 | false
contentStyle | 内容样式style | React.CSSProperties | 无 | false
error | 是否不显示错误 | boolean | false | false
errorText | 错误文案 | string | 无 | false
showExtraLabelIcon | 标签是否显示icon | boolean | false | false
onClick | 点击标签回调 | (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void | 无 | false
className | 样式class | string | 无 | false
style | 样式style | React.CSSProperties | 无 | false
nid | 运行态id | string | 无 | false
uitype | ui类型 | string | 无 | false
name | 文本框name | string | 无 | false
value | 初始值 | string | 无 | false
defaultValue | 默认值 | string | 无 | false
placeholder | 占位符 | string | 无 | false
clear | 是否可清空 | boolean | false | false
onErrorClick | 点击报错 icon 触发的回调 | (): void | 无 | false
rows | 显示几行 | number | 3 | false
labelNumber | 定宽枚举值：num * @input-label-width: 34px，可用2-7之间的数字，一般(不能保证全部)能对应显示出相应个数的中文文字(不考虑英文字符) | number | 5 | false
onChange | 修改后回调 | (val: string): void | 无 | false
onBlur | 失去焦点后回调 | (val: string): void | 无 | false
onFocus | 获取焦点后回调 | (val: string): void | 无 | false



# DateTimePicker 基础组件-日期时间选择
## 如何使用

```
import { DateTimePicker } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
dateMode | 日期选择模式 | 'picker-date'/'picker-time'/'picker-datetime'/'picker-year'/'picker-month'/'calendar-date'/'calendar-datetime' | 'picker-date' | false
minDate | 最小日期 | Date/string | 无 | false
maxDate | 最大日期 | Date/string | 无 | false
defaultValue | 默认值 | Date/string | 无 | false
format | 日期时间格式 | string | 无 | false
disabled | 是否禁用 | boolean | false | false
value | 初始值 | Date/string | 无 | false
extra | 显示文案 | string | '请选择' | false
title | 标题 | string | 无 | false
visible | 是否可见 | boolean | true | false
onChangeDate | 选中后回调 | (dateTime?: string) => void | 无 | false
onCancel | 取消后回调 | () => void | 无 | false
singleLine | 是否单行展示 | boolean | false | false
required | 是否必填 | boolean | false | false
label | 标题 | string | '' | false
subLabel | 副标题 | string | '' | false
labelCls | 标题样式前缀 | string | 无 | false
labelStyle | 标题样式style | React.CSSProperties | 无 | false
contentCls | 内容样式前缀 | string | 无 | false
contentStyle | 内容样式style | React.CSSProperties | 无 | false
error | 是否不显示错误 | boolean | false | false
errorText | 错误文案 | string | 无 | false
showExtraLabelIcon | 标签是否显示icon | boolean | false | false
onClick | 点击标签回调 | (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void | 无 | false
className | 样式class | string | 无 | false
style | 样式style | React.CSSProperties | 无 | false
nid | 运行态id | string | 无 | false
uitype | ui类型 | string | 无 | false


# DateTimeRange 基础组件-时间范围选择
## 如何使用

```
import { DateTimeRange } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
label | 标题 | string | 无 | false
required | 是否必填 | boolean | false | false
value | 初始值 | [Date, Date]/[Date] | 无 | false
format | 日期格式 | string | 'yyyy-MM-dd' | false
disabled | 是否禁用 | boolean | false | false
mode | 模式 | 'default'/'range' | 'default' | false
onChangeDate | 日期修改后回调 | (time: [string, string]) => void | 无 | false
onStartChange | 开始日期修改后回调 | (time?: string) => void | 无 | false
onEndChange | 结束日期修改后回调 | (time?: string) => void | 无 | false
splitLine | 显示分割线 | boolean | false | false
startLabel | 开始日期文案 | string | 无 | false
endLabel | 结束日期文案 | string | 无 | false
enterDirection | 入场方向 | 'horizontal'/'vertical' | 'vertical' | false
locale | 本地化 | Models.Locale | 无 | false
onCancel | 取消时回调 | () => void | 无 | false
onClear | 清除时回调 | () => void | false | false
onConfirm | 确认时回调 | (startDateTime?: Date, endDateTime?: Date) => void | 无 | false
pickTime | 是否可以选择时间 | boolean | true | false
renderShortcut | 替换快捷选择栏，需要设置showShortcut: true | (select: (startDate?: Date, endDate?: Date) => void) => React.ReactNode | 无 | false
renderHeader | 替换标题栏 | (prop: HeaderPropsType) => React.ReactNode | 无 | false
showShortcut | 快捷日期选择 | boolean | false | false
style | 样式style | string | 无 | false
title | 标题 | string | 无 | false
type | 弹出日历样式 | 'one'/'range' | 'range' | false
getDateExtra | 日期扩展数据 | (date: Date) => Models.ExtraData | 无 | false
infiniteOpt | 无限滚动优化（大范围选择） | boolean | false | false
initalMonths | 初始化月个数 | number | 6 | false
onSelectHasDisableDate | 选择区间包含不可用日期 | (date: Date[]) => void | 无 | false
onSelect | 选中时回调 | (date: Date, state?: [Date/undefined, Date/undefined]) => SelectDateType/void | 无 | false
rowSize | 行大小 | 'normal'/'xl' | 'normal' | false
defaultTimeValue | 默认时间 | Date | 无 | false
timePickerPrefixCls | timePicker样式前缀 | string | 无 | false
timePickerPickerPrefixCls | timePickerPicker样式前缀 | string | 无 | false


# CardBoxGroup 基础组件-卡片容器组
## 如何使用

```
import { CardBoxGroup } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
splitLine | 是否有分割线 | boolean | false | false
dataSource | 数据，若为空则直接渲染children | any[] | 无 | false
renderRow | 每行的渲染函数 | (rowData: object, sectionID: number, rowID: number) => void | 无 | false


# InputNumber 基础组件-数字输入框
## 如何使用

```
import { InputNumber } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
maxLength | 最长长度 | number | 无 | false
mode | 模式 | 'normal'/'percent'/'permillage'/'int' | 'normal' | false
value | 初始值 | string | 无 | false
defaultValue | 默认值 | string | 无 | false
regRule | 最终校验正则规则 | string/RegExp | 无 | false
regRuleText | 最终校验正则名称 | string | 无 | false
check | 是否进行错误检查 | boolean | true | false
precision | 精度 | number | 2 | false
formatReg | 数据格式化，value会按照formatReg的展示格式展示 | string | 无 | false
hiddenChart | 配合formatReg使用，表示要隐藏的字符 | string | '' | false
replaceChart | 配合formatReg使用，表示要替换的字符 | string | '' | false
checkMask | 中间校验规则 | string | 无 | false
placeholder | 占位符 | string | 无 | false
min | 最小值 | number/string | 无 | false
max | 最大值 | number/string | 无 | false
suffix | 前缀 | string | 无 | false
prefix | 后缀 | string | 无 | false
thousands | 千分位 | boolean | false | false
disabled | 是否禁用 | boolean | false | false
bCanModify | 是否可修改 | boolean | true | false
inputBgColor | 背景颜色 | string | '' | false
scaleValue | 规模值,输入值之后自动乘规模值 | number | 1 | false
visible | 是否可见 | boolean | true | false
onFocus | 获取焦点时回调 | (value: string) => void | 无 | false
onBlur | 失去焦点时回调 | (value: string) => void | 无 | false
onChange | 修改时回调 | (value: string) => void | 无 | false
onClickClear | 点击清空时回调 | (value: string) => void | 无 | false
onError | 校验错误时回调 | (value: string, pattern: { reg?: RegExp, text?: string }) => void | 无 | false
onSuccess | 校验成功时回调 | React.CSSProperties | 无 | false
singleLine | 是否单行展示 | boolean | false | false
required | 是否必填 | boolean | false | false
label | 标题 | string | '' | false
subLabel | 副标题 | string | '' | false
labelCls | 标题样式前缀 | string | 无 | false
labelStyle | 标题样式style | React.CSSProperties | 无 | false
contentCls | 内容样式前缀 | string | 无 | false
contentStyle | 内容样式style | React.CSSProperties | 无 | false
error | 是否不显示错误 | boolean | false | false
errorText | 错误文案 | string | 无 | false
showExtraLabelIcon | 标签是否显示icon | boolean | false | false
onClick | 点击标签回调 | (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void | 无 | false
className | 样式class | string | 无 | false
style | 样式style | React.CSSProperties | 无 | false
nid | 运行态id | string | 无 | false
uitype | ui类型 | string | 无 | false


# ListItemWrapper 基础组件-组件左侧标题
## 如何使用

```
import { ListItemWrapper } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
singleLine | 是否单行展示 | boolean | false | false
singleLineCenter | 是否单行居中 | boolean | false | false
singleAlignType | 单行对齐方式 | string | 无 | false
required | 是否必填 | boolean | false | false
notRequired | 是否不必填 | boolean | true | false
label | 标题 | string | '' | false
subLabel | 副标题 | string | '' | false
labelCls | 标题样式前缀 | string | 无 | false
labelStyle | 标题样式style | React.CSSProperties | 无 | false
contentCls | 内容样式前缀 | string | 无 | false
contentStyle | 内容样式style | React.CSSProperties | 无 | false
error | 是否不显示错误 | boolean | false | false
errorText | 错误文案 | string | 无 | false
regRuleText | 正则校验提示文案 | React.ReactNode | 无 | false
showExtraLabelIcon | 标签是否显示icon | boolean | false | false
previewMode | 预览模式 | 'design'/'edit'/'browse' | 无 | false
mReadOnly | 是否只读 | boolean | false | false
disabled | 是否禁用 | boolean | false | false
onClick | 点击标签回调 | (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void | 无 | false


# TabBottom/TabBar 基础组件-底部标签栏
## 如何使用

```
import { TabBottom } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
activeKey | 活动的标签 | string | itemList[0] | false
itemList | 显示的标签 | TabBarItem[] | [] | false
onSwitch | 切换时的回调 | (key?: string, item?: TabBarItem) => void | 无 | false


# SimpleList 基础组件-简单列表组件
## 如何使用

```
import { SimpleList } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
dataSource | 数据 | any[] | 无 | false
renderRow | 每行渲染函数 | (rowData: any, sectionId: any, rowId: number) => React.ReactChild | 无 | false
onRefresh | 下拉刷新时回调 | () => void | 无 | false
onReachFoot | 下拉到底回调 | () => void | 无 | false
pullToRefresh | 下拉是否可刷新 | boolean | true | false
loadingText | 等待时文案 | string | '' | false
completeText | 完成时文案 | string | '' | false
split | 分割 | 'none'/'line'/'blank' | 'none' | false
reservedHeight | 上部保留高度 | number | 0 | false
children | 子项 | React.ReactChildren | 无 | false
editable | 可编辑 | boolean | true | false
hasMore | 是否展示更多 | boolean | true | false
meta | 运行态meta数据 | object | 无 | false


# Mobile 基础组件-联系方式
## 如何使用

```
import { Mobile } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
label | 标签 | string | '电话' | false
singleLine | 是否单行展示 | boolean | true | false
area | 是否选择国际区号 | boolean | false | false
isSelect | 是否选择邮箱后缀 | boolean | 无 | false
mode | 模式 | 'telephone'/'mobilephone'/'email' | 'telephone' | false
dataSource | 数据源 | dataSourceType | 无 | false
emailDataSource | 邮箱数据源 | emailType | 无 | false
onChange | 变化后回调 | (value: string) => void | 无 | false
onBlur | 失去焦点是回调 | (value: string) => void | 无 | false
onFocus | 获取焦点时回调 | (value: string) => void | 无 | false
required | 是否必填 | boolean | false | false
bIsNull | 是否允许为空 | boolean | false | false
value | 初始值 | string | 无 | false
defaultValue | 默认值 | string | 无 | false
disabled | 是否禁用 | boolean | false | false
bCanModify | 是否可修改 | boolean | true | false
notVerify | 是否需要校验格式，暂时用于查询组件设置为true不需要校验 | boolean | false | false
visible | 是否可见 | boolean | true | false
splitLine | 是否展示分割线 | boolean | false | false


# Toast 基础组件-提示
## 如何使用

```
import { Toast } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
content | 提示内容 | React.Element/String | 无 | false
duration | 自动关闭的延时，单位秒 | number | 3 | false
onClose | 关闭后回调 | Function | 无 | false
mask | 是否显示透明蒙层，防止触摸穿透 | boolean | true | false


# YonuiIframe 基础组件-Iframe框
## 如何使用

```
import { YonuiIframe } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
url | 地址 | string | 无 | false


# YonuiIframe 基础组件-Iframe框
## 如何使用

```
import { YonuiIframe } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
label | 标签 | string | 无 | false
subLabel | 副标签 | string | 无 | false
extraIcon | 额外图标 | string | 无 | false
extraText | 额外文案 | string | 无 | false
showExtraLabelIcon | 展示标签额外图标 | string | 无 | false
onClick | 点击后回调 | () => void | 无 | false


# Rate 基础组件-评分
## 如何使用

```
import { Rate } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
count | 总分 | number | 无 | false
allowHalf | 允许半分 | boolean | false | false
value | 初始值 | string | 无 | false
defaultValue | 默认值 | string | 无 | false
disabled | 是否禁用 | boolean | false | false
visible | 是否可见 | boolean | true | false
onChange | 改变后回调 | (value: number) => void | 无 | false


# GroupContainer 基础组件-容器
## 如何使用

```
import { GroupContainer } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
children | 子项 | JSX.Element[]/JSX.Element | 无 | false
className | 样式class | string | 无 | false
style | 样式style | React.CSSProperties | 无 | false
drawerHeight | 高度 | string | 无 | false
onShow | 渲染后回调 | () => void | 无 | false
nid | 组件id | string | 无 | false


# GroupRefer 基础组件-引用
## 如何使用

```
import { GroupRefer } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
style | 样式 | React.CSSProperties | 无 | false


# README

