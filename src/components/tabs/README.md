# README

## API

| 属性                      | 说明                           | 必填 | 类型                                 | 默认值 |
| ------------------------- | ------------------------------ | ---- | ------------------------------------ | ------ |
| *tabs*                    | tab数据源                      | 是   | array                                | []     |
| *animated*                | 是否使用切换动画效果           | 否   | boolean                              | true   |
| *initialPage*             | initialPage                    | 否   | number\|string                       |        |
| *page*                    | 当前Tab下标或key值             | 否   | number\|string                       |        |
| *pageSize*                | 单页最大标签数，超出后滑动展示 | 否   | number                               | 5      |
| *swiperable*              | 是否可滑动切换内容             | 否   | boolean                              | false  |
| *onChange*                | tab变化时触发                  | 否   | (tab: object, index: number) => void |        |
| *onTabClick*              | tab点击时时触发                | 否   | (tab: object, index: number) => void |        |
| *icons*                   | tab右侧图标                    | 否   | [JSX.Element]                        |        |
| *gather*                  | tab是否集中分布                | 否   | boolean                              | false  |
| *splitLine*               | 是否展示tab-bar下方的分隔符    | 否   | boolean                              | true   |
| *abBarBackgroundColor*    | 标签栏背景色                   | 否   | string                               |        |
| *tabBarActiveTextColor*   | 激活文字颜色                   | 否   | string                               |        |
| *tabBarInactiveTextColor* | 非激活文字颜色                 | 否   | string                               |        |

