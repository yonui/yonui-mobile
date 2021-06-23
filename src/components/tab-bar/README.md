# README
## TabBottom/TabBar 基础组件-底部标签栏
## API

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
activeKey | 活动的标签 | string | itemList[0] | false
itemList | 显示的标签 | TabBarItem[] | [] | false
onSwitch | 切换时的回调 | (key?: string, item?: TabBarItem) => void | 无 | false
