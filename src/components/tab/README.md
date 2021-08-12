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








