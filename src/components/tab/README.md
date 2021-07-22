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
tabBarPosition | TabBar位置 | 'top'/'bottom'/'left'/'right' | top | false
renderTabBar | 替换TabBar | ((props: TabBarPropsType) => React.ReactNode)/false | false | false
page | 初始化Tab, index or key | number/string | 无 | false
swipeable | 是否可以滑动内容切换 | boolean | true | false
useOnPan | 使用跟手滚动 | boolean | true | false
prerenderingSiblingsNumber | 预加载两侧Tab数量 | number | 1 | false
animated | 是否开启切换动画 | boolean | true | false
onChange | tab变化时触发 | (tab: Models.TabData, index: number) => void | 无 | false
onTabClick | tab 被点击的回调 | (tab: Models.TabData, index: number) => void | 无 | false
destroyInactiveTab | 销毁超出范围Tab | boolean | false | false
distanceToChangeTab | 滑动切换阈值(宽度比例) | number | 0.3 | false
usePaged | 是否启用分页模式 | boolean | true | false
tabDirection | Tab方向 | 'horizontal'/'vertical' | 'horizontal' | false
tabBarUnderlineStyle | tabBar下划线样式 | React.CSSProperties/any | 无 | false
tabBarBackgroundColor | tabBar背景色 | string | 无 | false
tabBarActiveTextColor | tabBar激活Tab文字颜色 | string | '#E14C46' | false
tabBarInactiveTextColor | tabBar非激活Tab文字颜色 | string | 无 | false
tabBarTextStyle | tabBar文字样式 | React.CSSProperties/any | 无 | false
noRenderContent | 是否不加载内容 | boolean | false | false
useLeftInsteadTransform | 暂无 | boolean | false | false
renderTab | 替换TabBar的Tab | (tab: Models.TabData) => React.ReactNode | 无 | false
mode | 模式 | string | 'normal' | false
pageSize | Tab分页尺寸 | number | 3 | false
icons | 右侧按钮 | Array<JSX.Element/string >/JSX.Element/string | 无 | false
icon1 | 右1图标，icons为空时起作用 | string | 无 | false
icon2 | 右2图标，icons为空时起作用 | string | 无 | false
icon3 | 右3图标，icons为空时起作用 | string | 无 | false
onIcon1Click | 右1图标点击时回调，icons为空时起作用 | () => void | 无 | false
onIcon2Click | 右2图标点击时回调，icons为空时起作用 | () => void | 无 | false
onIcon3Click | 右3图标点击时回调，icons为空时起作用 | () => void | 无 | false
onTabClick | tab页选中后回调 | (tab: any, index: number) => void | 无 | false
splitLine | 外部边框线 | boolean | false | false
gather | tab文字居中 | boolean | false | false
className | 样式class | string | 无 | false
style | 样式style | object | 无 | false
iconsOccupy | icon浮动占位 | boolean | true | false
iconsClassName | icon样式class | string | 无 | false
iconsStyle | icon样式style | object | 无 | false
children | 子项 | any | 无 | false









