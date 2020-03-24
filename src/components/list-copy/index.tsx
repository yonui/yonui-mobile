import { List } from 'antd-mobile'
import { EditTypes, FieldTypes, ReactWrapper, ComponentManifest } from 'yonui-extension'
import ListItem from './ListItem'
const manifest: ComponentManifest = {
  name: 'List',
  label: '列表',
  type: 'basicControls',
  props: [
    {
      name: 'renderHeader',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        label: 'renderHeader',
        help: '渲染list header',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'renderFooter',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: {
        label: 'renderFooter',
        help: '渲染list footer',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    }
  ],
  children: ['ListItem']
}
const WrappedList = ReactWrapper(List, manifest)
WrappedList.Item = ListItem
export default WrappedList
