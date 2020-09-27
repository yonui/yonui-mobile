import { EditTypes, FieldTypes, ComponentManifest, UIObject, TypeProps } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'NavBar',
  label: '导航',
  description: '位于 app 内容区的上方，系统状态栏的下方，并且提供在一系列页面中的导航能力。', // 描述
  type: TypeProps.FunctionalControls,
  uiObject: UIObject.Containers,
  icon: 'chaxunmoban',
  props: [// adapter适配层数据
    {
      name: 'mode',
      type: FieldTypes.string,
      defaultValue: 'light',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options:
            [
              { value: 'dark', text: 'dark' },
              { value: 'light', text: 'light' }
            ]
        },
        label: '模式',
        help: '模式'
      }
    },
    {
      name: 'title',
      type: FieldTypes.string,
      defaultValue: '标题',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: '标题'
      }
    },
    {
      name: 'subTitle',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: '副标题'
      }
    },
    {
      name: 'backIcon',
      type: FieldTypes.string,
      defaultValue: 'left',
      showDesign: true,
      designConfig: {
        type: EditTypes.IframeModal,
        props: {
          caption: '图标库',
          addText: '添加图标',
          editText: '更换图标',
          iframeUrl: '/IconSelect?iframeId=backIcon',
          iframeId: 'iconSelectIframebackIcon',
          message: true,
          footer: true
        },
        label: '最左边图标',
        help: '出现在最左边的图标占位符'
      }
    },
    {
      name: 'titleIcon',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.IframeModal,
        props: {
          caption: '图标库',
          addText: '添加图标',
          editText: '更换图标',
          iframeUrl: '/IconSelect?iframeId=titleIcon',
          iframeId: 'iconSelectIframetitleIcon',
          message: true,
          footer: true
        },
        label: '标题图标',
        help: '出现在标题下边的图标占位符'
      }
    },
    {
      name: 'closeIcon',
      type: FieldTypes.string,
      defaultValue: 'cross',
      showDesign: true,
      designConfig: {
        type: EditTypes.IframeModal,
        props: {
          caption: '图标库',
          addText: '添加图标',
          editText: '更换图标',
          iframeUrl: '/IconSelect?iframeId=closeIcon',
          iframeId: 'iconSelectIframecloseIcon',
          message: true,
          footer: true
        },
        label: '左关闭图标',
        help: '出现在最左边第二个的图标占位符'
      }
    },
    {
      name: 'rightIcon1',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.IframeModal,
        props: {
          caption: '图标库',
          addText: '添加图标',
          editText: '更换图标',
          iframeUrl: '/IconSelect?iframeId=rightIcon1',
          iframeId: 'iconSelectIframerightIcon1',
          message: true,
          footer: true
        },
        label: '右一图标',
        help: '出现在最右边第一个的图标占位符'
      }
    },
    {
      name: 'rightIcon1Text',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {
        },
        label: '右一图标文本'
      }
    },
    {
      name: 'rightIcon2',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.IframeModal,
        props: {
          caption: '图标库',
          addText: '添加图标',
          editText: '更换图标',
          iframeUrl: '/IconSelect?iframeId=rightIcon2',
          iframeId: 'iconSelectIframerightIcon2',
          message: true,
          footer: true
        },
        label: '右二图标',
        help: '出现在最右边第二个的图标占位符'
      }
    },
    {
      name: 'rightIcon2Text',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {
        },
        label: '右二图标文本'
      }
    }
    // {
    //   name: 'onBackClick',
    //   type: FieldTypes.action,
    //   defaultValue: '',
    //   value: '',
    //   showDesign: true,
    //   designConfig: {
    //     type: EditTypes.Text,
    //     props: {},
    //     label: 'onBackClick',
    //     help: '导航左边点击回调'
    //   }
    // },
    // {
    //   name: 'onCloseClick',
    //   type: FieldTypes.action,
    //   defaultValue: '',
    //   value: '',
    //   showDesign: true,
    //   designConfig: {
    //     type: EditTypes.Text,
    //     props: {},
    //     label: 'onCloseClick',
    //     help: '导航左边关闭点击回调'
    //   }
    // },
    // {
    //   name: 'onRight1Click',
    //   type: FieldTypes.action,
    //   defaultValue: '',
    //   value: '',
    //   showDesign: true,
    //   designConfig: {
    //     type: EditTypes.Text,
    //     props: {},
    //     label: 'onRight1Click',
    //     help: '右边第一个按钮回调'
    //   }
    // },
    // {
    //   name: 'onRight2Click',
    //   type: FieldTypes.action,
    //   defaultValue: '',
    //   value: '',
    //   showDesign: true,
    //   designConfig: {
    //     type: EditTypes.Text,
    //     props: {},
    //     label: 'onRight2Click',
    //     help: '右边第2个按钮回调'
    //   }
    // }
  ],
  children: []
}

export default manifest
