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
|full|是否通栏| boolean | false |
|isCarousel	|是否跑马灯|	boolean|	false|
|itemSize|item上icon的大小,可选sm,md,lg [小,中,大]| string | 'sm' |
|carouselMaxRow	|如果是跑马灯, 一页跑马灯需要展示的行数|	number|	2|
|renderItem	|自定义每个 grid 条目的创建函数	|(el, index) => React.Node	|-|
|square|	每个格子是否固定为正方形|	boolean	|true|
|activeStyle|	点击反馈的自定义样式 (设为 false 时表示禁止点击反馈)	|{}/false|	{}|
|activeClassName	|点击反馈的自定义类名	|string	||
|itemStyle	|每个格子自定义样式	|object	|{}|