# README
# SharePanel 分享活动面板

####使用说明####
  static showShareActionSheetWithOptions(options: Object, callback: Function)#
   options: {}
       属性名               类型                            默认值          描述
       data	               array<{icon, title}>           []             分享按钮列表 (required)可以是二维数组，能显示多行按钮，例如[[{icon,title},...],...]表示两行两列。当为二维数组时callback有两个参数，第一个为列序列、第二个为行序列。
       cancelButtonText    string                         取消            每个菜单被点击的回调
       title               string                                        顶部标题
       message             string/React.element                          顶部标题下的简要消息
       maskClosable        boolean                        允许(true)      点击蒙层是否允许关闭
       callback                                                           函数支持返回     
