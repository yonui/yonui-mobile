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
