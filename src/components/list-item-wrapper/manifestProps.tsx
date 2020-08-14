import { Props, FieldTypes, EditTypes } from 'yonui-extension'

const propsArray: Props[] = [
  // {
  //   name: 'label',
  //   type: FieldTypes.string,
  //   defaultValue: '',
  //   showDesign: true,
  //   designConfig: {
  //     type: EditTypes.Text,
  //     props: {},
  //     label: '标题'
  //   }
  // },
  {
    name: 'subLabel',
    type: FieldTypes.string,
    defaultValue: '',
    showDesign: true,
    designConfig: {
      type: EditTypes.Text,
      props: {},
      label: '副标题'
    }
  },
  // {
  //   name: 'required',
  //   type: FieldTypes.boolean,
  //   defaultValue: false,
  //   showDesign: true,
  //   designConfig: {
  //     type: EditTypes.Bool,
  //     props: {},
  //     label: '必填'
  //   }
  // },
  {
    name: 'splitLine',
    type: FieldTypes.boolean,
    defaultValue: true,
    showDesign: true,
    designConfig: {
      type: EditTypes.Bool,
      props: {},
      label: '分割线'
    }
  },
  {
    name: 'singleLine',
    type: FieldTypes.boolean,
    defaultValue: true,
    showDesign: true,
    designConfig: {
      type: EditTypes.Bool,
      props: {},
      label: '单行展示'
    }
  },
  {
    name: 'singleLineCenter',
    type: FieldTypes.boolean,
    defaultValue: false,
    showDesign: true,
    designConfig: {
      type: EditTypes.Bool,
      props: {},
      label: '单行集中'
    }
  },
  {
    name: 'labelCls',
    type: FieldTypes.string,
    defaultValue: '',
    showDesign: false,
    designConfig: {
      type: EditTypes.Text,
      props: {},
      label: '标题的className'
    }
  },
  {
    name: 'labelStyle',
    type: FieldTypes.object,
    showDesign: true,
    designConfig: {
      label: '标签样式',
      type: EditTypes.IframeModal,
      help: '',
      props: {
        caption: '标签样式',
        iframeUrl: '/CssSelect?iframeId=labelStyle',
        iframeId: 'mobileCssIframeModallabelStyle',
        iframeContext: 'mobileCssIframeModal',
        addText: '新增样式',
        editText: '修改样式',
        message: true,
        isRequired: false,
        footer: true
      }
    }
  },
  {
    name: 'contentCls',
    type: FieldTypes.string,
    defaultValue: '',
    showDesign: false,
    designConfig: {
      type: EditTypes.Text,
      props: {},
      label: '内容的className'
    }
  },
  {
    name: 'contentStyle',
    type: FieldTypes.object,
    showDesign: false,
    designConfig: {
      label: '内容样式',
      type: EditTypes.IframeModal,
      help: '',
      props: {
        caption: '内容样式',
        iframeUrl: '/CssSelect?iframeId=contentStyle',
        iframeId: 'mobileCssIframeModalcontentStyle',
        iframeContext: 'mobileCssIframeModal',
        addText: '新增样式',
        editText: '修改样式',
        message: true,
        isRequired: false,
        footer: true
      }
    }
  },
  {
    name: 'error',
    type: FieldTypes.boolean,
    defaultValue: false,
    showDesign: false,
    designConfig: {
      type: EditTypes.Bool,
      props: {},
      label: '是否错误'
    }
  },
  {
    name: 'errorText',
    type: FieldTypes.string,
    defaultValue: '',
    showDesign: true,
    designConfig: {
      type: EditTypes.Text,
      props: {},
      label: '错误展示文本'
    }
  },
  {
    name: 'showExtraLabelIcon',
    type: FieldTypes.boolean,
    defaultValue: false,
    showDesign: true,
    designConfig: {
      type: EditTypes.Bool,
      props: {},
      label: '标题左侧图标'
    }
  }
]

/**
 * 获取经过过滤的 propsArray 数组。如多行文本不需要`单行展示`属性
 * @param exclude 需要排除属性的 name 集合
 */

const getFilterProps: (exclude: string[]) => Props[] = (exclude = []) => {
  const res: Props[] = []
  propsArray.forEach(item => {
    if (!exclude.includes(item.name)) {
      res.push(item)
    }
  })
  return res
}

export { getFilterProps }
export default propsArray
