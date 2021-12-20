# Calendar 基础组件-日历组件
## 如何使用

```
import { Calendar } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
enterDirection | 入场方向 vertical: 垂直 horizontal: 水平 | 'horizontal'/'vertical' | 'vertical' | false
locale | 本地化 | Models.Locale | 无 | false
onCancel | 关闭时回调 | () => void | 无 | false
onClear | 清除时回调 | () => void | 无 | false
onConfirm | 确认时回调 | (startDateTime, endDateTime) => void | 无 | false
pickTime | 是否选择时间 | boolean | false | false
renderShortcut | 替换快捷选择栏，需要设置showShortcut为true | (select: (startDate, endDate) => void) => React.ReactNode | 无 | false
renderHeader | 替换标题栏 | () => React.ReactNode | 无 | false
showShortcut | 快捷日期选择 | boolean | false | false
title | 头部标题 | string | '日期选择' | false
type | 选择类型 one: 单日 range: 日期区间 | 'one'/'range'| 'range' | false
visible | 是否显示 | boolean | false | false
defaultValue | 默认日历选择范围 | [Date, Date]/[Date] | 无 | false
defaultDate | 显示开始日期 | Date/string | today | false
infiniteOpt | 无限滚动优化（大范围选择）| boolean | false | false
initalMonths | 初始化月个数 | number | 6 | false
maxDate | 最大日期 | Date | 无 | false
minDate | 最小日期 | Date | 无 | false
onSelectHasDisableDate | 选择区间包含不可用日期 | (date) => void | 无 | false
rowSize | 行大小 | 'normal'/'xl' | 无 | false
defaultTimeValue | 默认时间选择值 | Date | 无 | false
dateExtra | 日期扩展数据 | Object | {} | false
onClickDay | 选择日期时回调 | ({isRange, range, now}) => void | 无 | false


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
onConfirm | 确认时回调 | ({startTime, endTime}) => void | 无 | false
onCancel | 关闭时回调 | () => void | 无 | false


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
minDate | 最小日期 | Date/string | 无 | false
maxDate | 最大日期 | Date/string | 无 | false
value | 当前选中时间 | string[] | 无 | false
minuteStep | 分钟的步长 | number | 30 | false
onOk | 选中时回调 | (date) => void | 无 | false
onDismiss | 取消时回调 | () => void | 无 | false


# TimeRangePicker 基础组件-时间选择器
## 如何使用

```
import { TimeRangePicker } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
visible | 是否显示 | boolean | false | false
minDate | 最小日期 | Date/string | 无 | false
maxDate | 最大日期 | Date/string | 无 | false
value | 当前选中时间 | string[] | 无 | false
minuteStep | 分钟的步长 | number | 30 | false
mode | 日期选择格式 time: 时间 datetime: 日期时间 date: 日期 year: 年 month: 年月 | 'time'/'datetime'/'date'/'year'/'month' | 无 | false
disabled | 是否禁用 | boolean | false | false
mReadOnly | 是否只读 | boolean | false | false
startTime | 开始时间 | string | 无 | false
endTime | 结束时间 | string | 无 | false
onOk | 选中时回调 | (date) => void | 无 | false
onDismiss | 取消时回调 | () => void | 无 | false


# TabBottom/TabBar 基础组件-底部标签栏
## 如何使用

```
import { TabBottom } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
activeKey | 活动的标签 | string | itemList第一项的key | false
itemList | 显示的标签 | any[] | [] | false
onSwitch | 切换时的回调 | (key, item) => void | 无 | false


# Table 基础组件-表格
## 如何使用

```
import { Table } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
columns | 表头定义 | any[] | [] | false
data | 内容定义 | any[] | 无 | false
orderSpanColors | 序号列颜色 | string[] | [] | false
addOrderColumn | 是否添加序号列 | boolean | true | false
showMore | 是否展示加载更多 | boolean | false | false
loadMore | 点击加载更多时回调 | () => void | 无 | false
onSort | 某列排序时回调 | (column) => void | 无 | false



# CalendarPanel 基础组件-日历面板 
## 如何使用

```
import { CalendarPanel } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
enterDirection | 入场方向 vertical: 垂直 horizontal: 水平 | 'horizontal'/'vertical' | 'vertical' | false
locale | 本地化 | Models.Locale | 无 | false
onCancel | 关闭时回调 | () => void | 无 | false
onClear | 清除时回调 | () => void | 无 | false
onConfirm | 确认时回调 | (startDateTime, endDateTime) => void | 无 | false
pickTime | 是否选择时间 | boolean | false | false
renderShortcut | 替换快捷选择栏，需要设置showShortcut为true | (select: (startDate, endDate) => void) => React.ReactNode | 无 | false
renderHeader | 替换标题栏 | () => React.ReactNode | 无 | false
showShortcut | 快捷日期选择 | boolean | false | false
title | 头部标题 | string | '日期选择' | false
type | 选择类型 one: 单日 range: 日期区间 | 'one'/'range'| 'range' | false
visible | 是否显示 | boolean | false | false
defaultValue | 默认日历选择范围 | [Date, Date]/[Date] | 无 | false
defaultDate | 显示开始日期 | Date/string | today | false
infiniteOpt | 无限滚动优化（大范围选择）| boolean | false | false
initalMonths | 初始化月个数 | number | 6 | false
maxDate | 最大日期 | Date | 无 | false
minDate | 最小日期 | Date | 无 | false
onSelectHasDisableDate | 选择区间包含不可用日期 | (date) => void | 无 | false
rowSize | 行大小 | 'normal'/'xl' | 无 | false
defaultTimeValue | 默认时间选择值 | Date | 无 | false
dateExtra | 日期扩展数据 | Object | {} | false
onClickDay | 选择日期时回调 | ({isRange, range, now}) => void | 无 | false
scrollToBottom | 是否自动滚到底部 | boolean | false | false
hintDays | 应用默认样式(浅红色)的日期 | string[] | [] | false


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
vertical | 是否垂直显示 | Boolean | false | false
autoplay | 是否自动切换 | Boolean | false | false
autoplayInterval | 自动切换的时间间隔 | Number | 3 | false
infinite | 是否循环播放 | Boolean | false | false
dotStyle | 指示点样式 | Object | 无 | false
dotActiveStyle | 当前激活的指示点样式 | Object | 无 | false
frameOverflow | slider-frame的overflow样式 | 'visible'/'hidden' | 'hidden' | false
cellSpacing | 项目之间的间距,以px为单位 | number | 无 | false
slideWidth | 手动设置项目宽度,可以是"20px"，也可以是百分比"0.8" | string | 无 | false
swipeSpeed | 滑动灵敏度 | number | 12 | false
ratio | 长宽比例 | string | 4:2 | false
children | 子项 | any[] | [] | false
className| 样式class | string | 无 | false
style | 样式 | React.CSSProperties | 无 | false


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
style | 样式style | React.CSSProperties | 无 | false
autoShow | 是否展示（微信/友空间/ios/android）平台自有头部 | boolean | false | false


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
children | 子项 | any[] | [] | false
className | 样式class | string | 无 | false
style | 样式style | React.CSSProperties | 无 | false


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
onSubmit | 点击搜索时回调 | (value) => void | 无 | false
onChange | 搜索框修改时回调 | (value) => void | 无 | false
onFocus | 获取焦点时回调 | () => void | 无 | false
onBlur | 失去焦点时回调 | () => void | 无 | false
onClear | 清空时回调 | (value) => void | 无 | false


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
visible | 是否可见 | boolean | true | false
style | 样式style | React.CSSProperties | 无 | false


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


# Empty 基础组件-空页面
## 如何使用

```
import { Empty } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
mode | 模式 noData: 无数据 client: 404 blankPage: 空白页 error: 错误 review: 审核中 server: 500 noNetwork: 无网络 | 'noData'/'client'/'blankPage'/'error'/'review'/'server'/'noNetwork' | 'noData' | false
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
text | 展示的数字或文案 | string/number | 无 | false
corner | 置于角落 | boolean | false | false
dot | 不展示数字，只有一个小红点 | boolean | false | false
overflowCount | 展示封顶的数字值 | number | 99 | false
hot | 营销样式 | boolean | false | false


# Icon 基础组件-图标
## 如何使用

```
import { Icon } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
type | 类型 | string | 无 | true
color | 颜色 | string | 无 | false
data | svg的data属性，数据为空icon不展示 | string | 无 | false
size | 尺寸 | 'xxs'/'xs'/'sm'/'md'/'lg'/'md' | 'md' |false
onClick | 点击时回调 | (): void | 无 | false
visible | 是否可见 | boolean | true | false
url | 图标路径 | string | 无 | false
iconBaseUrl | 图标地址的服务器地址 | string | 无 | false


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
textLength | 标签最长字数,超出加... | number | 无 | false
visible | 是否可见 | boolean | true | false
prefix | 标签前缀 | string | 无 | false
suffix | 标签后缀 | string | 无 | false
dataSource | 关联数据源 | string | 无 | false
controlType | 关联数据源类型 | string | 无 | false
multiple | 关联数据源是否多选 | boolean | false | false
dateMode | 关联数据源若为日期类型,日期格式 | string | 'picker-date' | false
showZero | 关联数据为0时是否显示 | boolean | false | false
showTitle | 是否展示备用标签 | boolean | false | false
className | 样式class | string | 无 | false
style | 样式style | React.CSSProperties | 无 | false


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


# Result 基础组件-反馈页面
## 如何使用

```
import { Result } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
mode | 模式 success: 成功 wait: 等待 reject: 驳回 | string | 'success' | false
message | 文字描述 | string | '成功' | false
style | 样式 | React.CSSProperties | 无 | false


# ListView 基础组件-长列表
## 如何使用

```
import { ListView } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
refreshing | 是否处于下拉刷新状态 | boolean | false | false
dataSource | ListView.DataSource 实例 | ListViewDataSource | 无 | false
onEndReached | 滚动到底部时回调 | () => void | 无 | false
onRefresh | 下拉刷新时回调 | () => void | 无 | false
onRowClick | 某行点击时回调 | (e, rowID) => void | 无 | false
height | 高度 | number | 600 | false
onScroll | 滚动时回调 | () => void | 无 | false
footerContent | 页面底部文案 | string | 无 | false
children | 子项 | React.ReactElement[] | 无 | false
initialListSize | 指定在组件刚挂载的时候渲染多少行数据，用这个属性来确保首屏显示合适数量的数据 | number | 10 | false
showNum | 显示的数据量 | number | 10 | false
pageSize | 每次渲染的行数 | number | 4 | false
value | 如果value不为空,说明是受控组件,渲染时取children里的数据 | any[] | 无 | false
showPullToReresh | 是否开启下拉刷新功能 | boolean | true | false
placeholdHeight | 页面底部文案高度 | number | 0 | false


# Radio 基础组件-选项
## 如何使用

```
import { Radio } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
mode | 模式 tag: tag类型 list: 列表类型 | 'tag'/'list' | 'list' | false
canMultiple | 是否多选 | boolean | false | false
label | 标题 | string | 无 | false
onClick | 点击后回调 | (data) => void | 无 | false
onChange | 值改变后回调 | (selectedValue, selectedData) => void | 无 | false
dataSource | 数据源 | dataType[] | [] | false
checkedValue | 已选中数据 | string[] | [] | false
tagSize | tag类型的tag尺寸 | 'sm'/ 'lg'/'md'/'default' | 'sm' | false
labelStyle | 标题样式 | React.CSSProperties | 无 | false
itemsStyle | 选项样式 | React.CSSProperties | 无 | false
disabled | 是否禁用 | boolean | false | false
singleLine | 单行显示 | boolean | false | false
mReadOnly | 是否只读 | boolean | false | false
className | 样式class | string | 无 | false


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
onChange | 改变后回调 | (checked) => void | 无 | false
color | 颜色 | string | '#4dd865' | false
name | 名字 | string | 无 | false
platform | 平台特有样式 | 'android'/'ios' | 'ios' | false
onClick | 点击后回调 | (checked) => void | 无 | false


# Menu 基础组件-菜单
## 如何使用

```
import { Menu } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
data | 数据(isLeaf设置的话children无效) | any[] | [] | false
level | 菜单级数,可选1/2 | number | 2 | false
value | 初始值，一级和二级筛选数据的value组成的数组。在多选状态下，如果为二级菜单，则数组的第一个元素为一级菜单的选项，数组的第二个元素是一个数组，里面包含了二级菜单的多选项；如果为一级菜单，则数组所有元素都是多选项 | Array | 无 | false
onChange | 选择后的回调 | (item) => void | 无 | false
onOk | 多选状态下确认按钮回调 | (value) => void | 无 | false
onCancel | 多选状态下取消按钮回调 | () => void | 无 | false
height | 筛选组件的高度 | number | document.documentElement.clientHeight / 2 | false
multiSelect | 是否支持菜单多选 | boolean | false | false


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
content | 按钮内文字 | string | '' | false
mode | 按钮模式 | 'primary'/'warning'/'ghost'/'default'/'text'/'toolbar-default'/'toolbar-primary' | 无 | false
type | 按钮类型,优先级低于mode | 'primary'/'warning'/'ghost'/'default'/'text'/'toolbar-default'/'toolbar-primary' | 'toolbar-primary' | false
iconPosition | 图标位置 | 'top'/'right'/'bottom'/'left' | 'left' | false
size | 按钮尺寸 | 'large'/'small' | 'small' | false
inline | 是否行内 | boolean | false | false
disabled | 是否禁用 | boolean | false | false
mReadOnly | 是否只读 | boolean | false | false
visible | 是否可见 | boolean | true | false
loading | 是否显示loading图标 | boolean | false | false
icon | 图标 | React.ReactNode/string | string | null | false
onClick | 点击后回调 | (e) => void | 无 | false
className| 样式class | string | 无 | false
style | 样式style | React.CSSProperties | 无 | false


# Tab 基础组件-页签
## 如何使用

```
import { Tab } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
tabs | tab数据 | Models.TabData[]/string | 无 | false
tabBarPosition | TabBar位置 | 'top'/'bottom'/'left'/'right' | 'top' | false
renderTabBar | 替换TabBar | ((props) => React.ReactNode)/false | false | false
page | 初始化Tab,index or key | number/string | 无 | false
swipeable | 是否可以滑动内容切换 | boolean | true | false
useOnPan | 使用跟手滚动 | boolean | true | false
prerenderingSiblingsNumber | 预加载两侧Tab数量 | number | 1 | false
animated | 是否开启切换动画 | boolean | true | false
onChange | tab变化时触发 | (tab, index) => void | 无 | false
onTabClick | tab被点击的回调 | (tab, index) => void | 无 | false
destroyInactiveTab | 销毁超出范围Tab | boolean | false | false
distanceToChangeTab | 滑动切换阈值(宽度比例) | number | 0.3 | false
usePaged | 是否启用分页模式 | boolean | true | false
tabDirection | Tab方向 | 'horizontal'/'vertical' | 'horizontal' | false
tabBarUnderlineStyle | tabBar下划线样式 | React.CSSProperties/any | 无 | false
tabBarBackgroundColor | tabBar背景色 | string | 无 | false
tabBarActiveTextColor | tabBar激活Tab文字颜色 | string | '#E14C46' | false
tabBarInactiveTextColor | tabBar非激活Tab文字颜色 | string | 无 | false
tabBarTextStyle | tabBar文字样式 | React.CSSProperties/any | 无 | false
renderTab | 替换TabBar的Tab | (tab) => React.ReactNode | 无 | false
mode | 模式 normal: 正常模式 transparent: 透明模式 | 'normal'/'transparent' | 'normal' | false
pageSize | Tab分页尺寸 | number | 3 | false
icons | 右侧按钮 | Array<JSX.Element/string >/JSX.Element/string | 无 | false
icon1 | 右1图标，icons为空时起作用 | string | 无 | false
icon2 | 右2图标，icons为空时起作用 | string | 无 | false
icon3 | 右3图标，icons为空时起作用 | string | 无 | false
onIcon1Click | 右1图标点击时回调，icons为空时起作用 | () => void | 无 | false
onIcon2Click | 右2图标点击时回调，icons为空时起作用 | () => void | 无 | false
onIcon3Click | 右3图标点击时回调，icons为空时起作用 | () => void | 无 | false
onTabClick | tab页选中后回调 | (tab, index) => void | 无 | false
splitLine | tab栏与内容区域分割线 | boolean | false | false
className | 样式class | string | 无 | false
style | 样式style | React.CSSProperties | 无 | false
iconsOccupy | 右侧icon浮空占位 | boolean | true | false
iconsClassName | icon样式class | string | 无 | false
iconsStyle | icon样式style | React.CSSProperties | 无 | false










# Popover 基础组件-气泡
## 如何使用

```
import { Popover } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
children | 子项 | JSX.Element[] | 无 | false
data | 选项数据 | any[] | 无 | false
onSelect | 选中选项后回调 | any | 无 | false


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
style | 样式style | React.CSSProperties | 无 | false
minHeight | 最小高度 | string | 无 | false
width | 宽度 | string | 无 | false
bgColor | 背景颜色 | string | 无 | false
marginBottom | 下边距 | string | 无 | false


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
type | 类型 default: 默认样式 circle: 圆圈样式 | 'default'/'circle' | 'default' | false
content | 内容 | string | 无 | false
onChange | 改变后回调 | (value) => void | 无 | false
className | 样式class | string | 无 | false


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
style | 样式style | React.CSSProperties | 无 | false
show | 是否可见 | boolean | true | false
onClose | 取消时回调 | () => void | 无 | false
title | 标题 | string | '' | false
cancelButtonText | 取消按钮文案 | string | '取消' | false
options | 可选项 | Array<Array<{ icon: React.ReactNode, title: string }>>/Array<{ icon: React.ReactNode/string, title: string }> | 无 | false
type | 类型 slideable: 可滑动 fixed: 固定 | 'slideable'/'fixed' | 'fixed' | false
callback | 选中后回调 | (col, row) => void | 无 | false


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
style | 样式style | React.CSSProperties | 无 | false




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
className | 样式class | string | 无 | false
style | 样式style | React.CSSProperties | 无 | false


# Grid 基础组件-宫格
## 如何使用

```
import { Grid } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
mode | 模式 image: 展示图标 number: 展示数字 badge: 展示角标 | string | 'image' | false
style | 样式style | React.CSSProperties | 无 | false
itemSize | 图标尺寸 | 'lg'/'md'/'sm' | 'lg' | false
itemDir | 图标排列方向 | 'row'/'column' | 'column' | false
showHeader | 是否展示头部 | boolean | false | false
gridTitle | 宫格标题 | string | 无 | false
onSelect | 点击某项回调 | (value) => void | 无 | false
onShowMore | 点击更多回调 | () => void | 无 | false
data | 传入的菜单数据 | Array<{icon, text}> | [] | false
columnNum | 列数 | number | 4 | false
hasLine | 是否有边框 | boolean | false | false
isCarousel | 是否跑马灯形式 | boolean | false | false
carouselMaxRow | 如果是跑马灯,一页跑马灯需要展示的数量 | number | 2 | false


# Textarea 基础组件-多行文本
## 如何使用

```
import { Textarea } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
maxLength | 计数功能和最长字数限制 | number | 无 | false
mReadOnly | 是否只读 | boolean | false | false
visible | 是否可见 | boolean | true | false
className | 样式class | string | 无 | false
name | 文本框name | string | 无 | false
value | 初始值 | string | 无 | false
defaultValue | 默认值 | string | 无 | false
placeholder | 占位符 | string | 无 | false
clear | 是否可清空 | boolean | false | false
rows | 显示几行 | number | 3 | false
autoHeight | 高度自适应, autoHeight 和 rows 请二选一 | boolean | false | false
disabled | 是否禁用 | boolean | false | false
labelNumber | 定宽枚举值：num * @input-label-width: 34px，可用2-7之间的数字，一般(不能保证全部)能对应显示出相应个数的中文文字(不考虑英文字符) | number | 5 | false
onChange | 修改后回调 | (val) => void | 无 | false
afterChange | 值变化后的处理函数 | (val) => void | 无 | false
onBlur | 失去焦点后回调 | (val) => void | 无 | false
onFocus | 获取焦点后回调 | (val) => void | 无 | false
singleLine | 是否单行展示 | boolean | false | false
required | 是否必填 | boolean | false | true
label | 标题 | string | '' | false
subLabel | 副标题 | string | '' | false
labelCls | 标题样式前缀 | string | 无 | false
labelStyle | 标题样式style | React.CSSProperties | 无 | false
contentCls | 内容样式前缀 | string | 无 | false
contentStyle | 内容样式style | React.CSSProperties | 无 | false
error | 是否有错误提示 | boolean | false | false
errorText | 错误文案 | string | '填写信息有误!请重新填写' | false
showExtraLabelIcon | 标签是否显示icon | boolean | false | false
onClick | 点击标签回调 | (e) => void | 无 | false


# Input 基础组件-输入框
## 如何使用

```
import { Input } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
subuitype | 类型,根据不同的类型对值格式化 | 'text'/'password'/'idCard'/'email'/'ipAddress'/'bankCard16'/'bankCard19'/'customized'/'' | 无 | false
value | 初始值 | string | 无 | false
defaultValue | 默认值 | string | 无 | false
regRule | 最终校验正则规则 | string/RegExp | 无 | false
regRuleText | 最终校验正则名称 | string | 无 | false
check | 是否进行错误检查 | boolean | true | false
formatReg | 数据格式化,value会按照formatReg的展示格式展示 | string | 无 | false
hiddenChart | 配合formatReg使用，表示要隐藏的字符 | string | '' | false
replaceChart | 配合formatReg使用，表示要替换的字符 | string | '' | false
checkMask | 输入过程校验规则 | string | 无 | false
inputStyle | 输入框样式 | React.CSSProperties | 无 | false
onFocus | 获取焦点时回调 | (value) => void | 无 | false
onBlur | 失去焦点时回调 | (value) => void | 无 | false
onChange | 修改时回调 | (value) => void | 无 | false
onClickClear | 点击清空时回调 | (value) => void | 无 | false
onError | 校验错误时回调 | (value, pattern) => void | 无 | false
onSuccess | 校验成功时回调 | (value) => void | 无 | false
visible | 是否可见 | boolean | true | false
singleLine | 是否单行展示 | boolean | false | false
label | 标题 | string | '' | false
subLabel | 副标题 | string | '' | false
labelCls | 标题样式前缀 | string | 无 | false
labelStyle | 标题样式style | React.CSSProperties | 无 | false
contentCls | 内容样式前缀 | string | 无 | false
contentStyle | 内容样式style | React.CSSProperties | 无 | false
showExtraLabelIcon | 标签是否显示icon | boolean | false | false
onClick | 点击标签回调 | (e) => void | 无 | false
className | 样式class | string | 无 | false
style | 样式style | React.CSSProperties | 无 | false


# ListPanelPicker 基础组件-底部弹出菜单
## 如何使用

```
import { ListPanelPicker } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
visible | 是否展示 | boolean | false | false
header | 头部标题 | string | 无 | false
data | 数据 | any[] | 无 | false
onClose | 关闭时回调 | () => void | 无 | false
onSelect | 选中时回调 | (object) => void | 无 | false
style | 样式style | React.CSSProperties | 无 | false


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
label | 标签名字,displayStyle为slideable时起作用 | string | '明细' | false
splitLine | 标题跟内容分割线 | boolean | true | false
rightStyle | 右侧按钮样式,displayStyle为slideable时起作用 | React.CSSProperties | 无 | false
viewStatus | 卡片样式 | 'default'/'select'/'selected'/'detail'/'browse' | 'default' | false
displayStyle | 展示方式 normal: 普通 detail: 详细 slideable: 滑动(移动端) extra: 查看更多 editable: 可编辑 | 'normal'/'detail'/'slideable'/'extra'/'editable' | 无 | false
showDeleteIcon | 是否展示标题和删除按钮,displayStyle为detail时起作用 | boolean | true | false
showTitleExtraIcon | 是否展示标题左侧图标,displayStyle为detail时起作用 | boolean | false | false
className | 样式class | string | 无 | false
style | 样式 | React.CSSProperties | 无 | false



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
className| 样式class | string | 无 | false
style | 样式 | React.CSSProperties | 无 | false


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
format | 日期时间格式 | string | 'YYYY-MM-DD' | false
disabled | 是否禁用 | boolean | false | false
value | 初始值 | Date/string | 无 | false
extra | 显示文案 | string | '请选择' | false
title | 标题 | string | 无 | false
visible | 是否可见 | boolean | true | false
onChangeDate | 选中后回调 | (dateTime) => void | 无 | false
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
className| 样式class | string | 无 | false
style | 样式style | React.CSSProperties | 无 | false


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
isNumber | 输入模式,决定弹什么键盘 | boolean | false | false
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
customCheck | 自定义校验函数 | (value, final) => boolean | 无 | false
onFocus | 获取焦点时回调 | (value) => void | 无 | false
onBlur | 失去焦点时回调 | (value) => void | 无 | false
onChange | 修改时回调 | (value) => void | 无 | false
onClickClear | 点击清空时回调 | (value) => void | 无 | false
onError | 校验错误时回调 | (value, pattern) => void | 无 | false
onSuccess | 校验成功时回调 | (value) => void | 无 | false
beforeRender | 渲染前处理函数 | (value) => string | 无 | false
afterChange | 值修改后对值的处理 | (value) => string | 无 | false


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
pickTime | 是否可以选择时间 | boolean | true | false
renderShortcut | 替换快捷选择栏，需要设置showShortcut: true | (select: (startDate?: Date, endDate?: Date) => void) => React.ReactNode | 无 | false
renderHeader | 替换标题栏 | (prop: HeaderPropsType) => React.ReactNode | 无 | false
showShortcut | 快捷日期选择 | boolean | false | false
style | 样式style | React.CSSProperties | 无 | false
title | 标题 | string | 无 | false
type | 弹出日历样式 | 'one'/'range' | 'range' | false
defaultDate | 显示开始日期 | Date | 无 | false
getDateExtra | 日期扩展数据 | (date: Date) => Models.ExtraData | 无 | false
infiniteOpt | 无限滚动优化（大范围选择） | boolean | false | false
initalMonths | 初始化月个数 | number | 6 | false
maxDate | 最大日期 | Date | 无 | false
minDate | 最小日期 | Date | 无 | false
onSelectHasDisableDate | 选择区间包含不可用日期 | (date: Date[]) => void | 无 | false
onSelect | 选中时回调 | (date: Date, state?: [Date/undefined, Date/undefined]) => SelectDateType/void | 无 | false
rowSize | 行大小 | 'normal'/'xl' | 'normal' | false
defaultTimeValue | 默认时间 | Date | 无 | false
timePickerPrefixCls | timePicker样式前缀 | string | 无 | false
timePickerPickerPrefixCls | timePickerPicker样式前缀 | string | 无 | false


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
value | 初始值 | string/number | 无 | false
defaultValue | 默认值 | string/number | 无 | false
regRule | 最终校验正则规则 | string/RegExp | 无 | false
regRuleText | 最终校验正则错误文案 | string | 无 | false
check | 是否进行错误检查 | boolean | true | false
precision | 小数精度 | number | 2 | false
formatReg | 格式化,value会按照formatReg的格式包装 | string | 无 | false
hiddenChart | 配合formatReg使用,表示要隐藏的字符 | string | '' | false
replaceChart | 配合formatReg使用,表示要替换的字符 | string | '' | false
checkMask | 输入过程中校验规则 | string | 无 | false
placeholder | 占位符 | string | 无 | false
min | 最小值 | number/string | 无 | false
max | 最大值 | number/string | 无 | false
suffix | 前缀 | string | 无 | false
prefix | 后缀 | string | 无 | false
thousands | 是否有千分位的逗号 | boolean | false | false
disabled | 是否禁用 | boolean | false | false
bCanModify | 是否可修改 | boolean | true | false
inputBgColor | 背景颜色 | string | '' | false
bIsNull | 是否允许为空 | boolean | false | false
scaleValue | 规模值,输入值之后自动乘规模值 | number | 1 | false
visible | 是否可见 | boolean | true | false
onFocus | 获取焦点时回调 | (value) => void | 无 | false
onBlur | 失去焦点时回调 | (value) => void | 无 | false
onChange | 修改时回调 | (value) => void | 无 | false
onClickClear | 点击清空时回调 | (value) => void | 无 | false
onError | 校验错误时回调 | (value, pattern: { reg, text }) => void | 无 | false
onSuccess | 校验成功时回调 | (value) => void | 无 | false
singleLine | 是否单行展示 | boolean | false | false
required | 是否必填 | boolean | false | false
label | 标题 | string | '' | false
subLabel | 副标题 | string | '' | false
labelCls | 标题样式前缀 | string | 无 | false
labelStyle | 标题样式style | React.CSSProperties | 无 | false
contentCls | 内容样式前缀 | string | 无 | false
contentStyle | 内容样式style | React.CSSProperties | 无 | false
showExtraLabelIcon | 标签是否显示icon | boolean | false | false
onClick | 点击标签回调 | (event) => void | 无 | false
className | 样式class | string | 无 | false
style | 样式style | React.CSSProperties | 无 | false


# TabBottom/TabBar 基础组件-底部标签栏
## 如何使用

```
import { TabBottom } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
activeKey | 活动的标签 | string | itemList第一项的key | false
itemList | 显示的标签 | any[] | [] | false
onSwitch | 切换时的回调 | (key, item) => void | 无 | false


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
renderRow | 每行渲染函数,如果传此参数择按照此项展开,没有择渲染childern | (rowData, sectionId, rowId) => React.ReactChild | 无 | false
onRefresh | 下拉刷新时回调 | () => void | 无 | false
onReachFoot | 下拉到底回调 | () => void | 无 | false
pullToRefresh | 是否下拉刷新 | boolean | true | false
loadingText | 等待时文案 | string | '' | false
completeText | 完成时文案 | string | '' | false
reservedHeight | 上部保留高度 | number | 0 | false
children | 子项 | React.ReactChildren | 无 | false
editable | 可编辑 | boolean | false | false
hasMore | 是否展示更多 | boolean | true | false


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
duration | 自动关闭的延时,单位秒 | number | 3 | false
onClose | 关闭后回调 | () => void | 无 | false
mask | 是否显示透明蒙层,防止触摸穿透 | boolean | true | false


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
onChange | 变化后回调 | (value) => void | 无 | false
onBlur | 失去焦点是回调 | (value) => void | 无 | false
onFocus | 获取焦点时回调 | (value) => void | 无 | false
required | 是否必填 | boolean | false | false
bIsNull | 是否允许为空 | boolean | false | false
value | 初始值 | string | 无 | false
defaultValue | 默认值 | string | 无 | false
disabled | 是否禁用 | boolean | false | false
bCanModify | 是否可修改 | boolean | true | false
notVerify | 是否不需要校验 | boolean | false | false
visible | 是否可见 | boolean | true | false


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
regRuleText | 正则校验出错提示文案 | React.ReactNode | 无 | false
showExtraLabelIcon | 标签是否显示icon | boolean | false | false
mReadOnly | 是否只读 | boolean | false | false
disabled | 是否禁用 | boolean | false | false
onClick | 点击标签回调 | (event) => void | 无 | false
className| 样式class | string | 无 | false
style | 样式 | React.CSSProperties | 无 | false


# ListItemDisplay 基础组件-列表项
## 如何使用

```
import { ListItemDisplay } from 'yonui-mobile';

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
className| 样式class | string | 无 | false
style | 样式 | React.CSSProperties | 无 | false


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
onChange | 改变后回调 | (value) => void | 无 | false


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


# Noticebar 基础组件-小喇叭
## 如何使用

```
import { Noticebar } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
data | 数据 | any[] | [] | false
style | 样式 | React.CSSProperties | 无 | false
autoplayInterval | 自动播放间隔 | number | 3000 | false
speed | 速度 | number | 300 | false
showNum | 显示条数 | number | 3 | false
lineClamp | 一条消息显示几行 | number | 1 | false
typeColor | 喇叭后的标题颜色 | string | 无 | false
onSelect | 点击后回调 | (value) => void | 无 | false


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


# CustomSort 基础组件-自定义分组
## 如何使用

```
import { CustomSort } from 'yonui-mobile';

```

## 代码演示


## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
initialKey | 初始化选中的key | string | '' | false
data | 数据源 | any[] | [] | false
selectedColor | 选中项的颜色 | string | '' | false
extraTextColor | 额外文本的颜色 | string | '' | false
modelMarginTop | 弹窗顶部外边距 | number | 0 | false
onSelectItem | 选中某项回调 | (item) => void | 无 | false


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
className | 样式class | string | 无 | false


# README

# README

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


