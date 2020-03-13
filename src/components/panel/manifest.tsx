import { FieldTypes, EditTypes, ComponentManifest, UITable } from 'libraui-extension'
const manifest: ComponentManifest = {
  name: 'Panel',
  label: '活动面板',
  description: '活动面板',
  uiTable: UITable.BillTplGroupBase,
  type: 'DataEntry',
  props: [
    {
      name: 'show',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否显示'
      }
    },
    {
      name: 'title',
      type: FieldTypes.string,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '标题'
      }
    },
    {
      name: 'options',
      type: FieldTypes.array,
      defaultValue: JSON.stringify([{ icon: 'https://gw.alipayobjects.com/zos/rmsportal/OpHiXAcYzmPQHcdlLFrc.png', title: '发送给朋友' }, { icon: 'https://gw.alipayobjects.com/zos/rmsportal/wvEzCMiDZjthhAOcwTOu.png', title: '新浪微博' }, { icon: 'https://gw.alipayobjects.com/zos/rmsportal/cTTayShKtEIdQVEMuiWt.png', title: '生活圈' }, { icon: 'https://gw.alipayobjects.com/zos/rmsportal/umnHwvEgSyQtXlZjNJTt.png', title: '微信好友' }, { icon: 'https://gw.alipayobjects.com/zos/rmsportal/SxpunpETIwdxNjcJamwB.png', title: 'QQ' }]),
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: false,
        props: {},
        label: '数据数组'
      }
    },
    {
      name: 'cancelButtonText',
      type: FieldTypes.string,
      defaultValue: '取消',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '取消按钮文本'
      }
    },
    {
      name: 'type',
      type: FieldTypes.string,
      defaultValue: 'fixed',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options:
            [
              { value: 'fixed', text: '固定' },
              { value: 'slideable', text: '滑动' }
            ]
        },
        label: '渲染模式'
      }
    },
    {
      name: 'onClose',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '关闭时回调函数'
      }
    },
    {
      name: 'callback',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '点击时回调函数'
      }
    }
  ],
  children: []
}

export default manifest
