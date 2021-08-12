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
