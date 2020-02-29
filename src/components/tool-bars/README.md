# README



### api

| 属性          | 说明                                            | 必填 | 类型                                                       | 默认值        |
| ------------- | ----------------------------------------------- | ---- | ---------------------------------------------------------- | ------------- |
| *values*        | 选项数组                                        | 是   | Array<string>                                              |               |
| *selectedIndex* | 选中数据下标                                    | 否   | number                                                     |               |
| *placement*     | 超出5个选项是弹出框位置                         | 否   | 'bottomRight'\|'topRight'                                  | 'bottomRight' |
| *mode*          | 渲染选项的模式                                  | 否   | 'text'\|'button'                                           | 'text'        |
| *btnsType*      | mode=`buttons`时按钮类型，默认展示'primary'类型 | 否   | Array<'default'\|'primary'\|'warning'\|'ghost'\|undefined> |               |
| *onChange*      | 选择时的回调函数                                | 否   | (var:string, num:number)=>void                             |               |
| *onValueChange* | 选择时的回调函数                                | 否   | (var:string) =>void                                        |               |

