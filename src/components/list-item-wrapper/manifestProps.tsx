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
    defaultValue: false,
    showDesign: true,
    designConfig: {
      type: EditTypes.Bool,
      props: {},
      label: '单行展示'
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
    showDesign: false,
    designConfig: {
      type: EditTypes.Json,
      props: {},
      label: '标题的style属性'
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
      type: EditTypes.Json,
      props: {},
      label: '内容的style属性'
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
export default propsArray
