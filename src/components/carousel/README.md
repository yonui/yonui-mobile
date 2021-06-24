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
