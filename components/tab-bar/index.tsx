/**
 * rc-from是否需要增加,如果增加rc-from,需要写一个from组件
 */
import { TabBar } from 'antd-mobile'
import { FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'

// todo 未配置 onChange
const manifest: ComponentManifest = {
  name: 'TabBar',
  label: '标签栏',
  description: '位于 APP 底部，方便用户在不同功能模块之间进行快速切换。',
  type: 'Navigation',
  props: [
    {
      name: 'prefixCls',
      type: FieldTypes.string,
      defaultValue: 'am-tab-bar',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '样式前缀'
      }
    },
    {
      name: 'barTintColor',
      type: FieldTypes.string,
      defaultValue: 'white',
      showDesign: true,
      designConfig: {
        type: EditTypes.Color,
        isRequired: false,
        props: {},
        label: '背景色',
        help: 'tabbar 背景色'
      }
    },
    {
      name: 'tintColor',
      type: FieldTypes.string,
      defaultValue: '#108ee9',
      showDesign: true,
      designConfig: {
        type: EditTypes.Color,
        isRequired: false,
        props: {},
        label: '选中字体颜色',
        help: '选中的字体颜色'
      }
    },
    {
      name: 'unselectedTintColor',
      type: FieldTypes.string,
      defaultValue: '#888',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '未选中颜色',
        help: '未选中的字体颜色'
      }
    },
    {
      name: 'hidden',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否隐藏',
        help: '是否隐藏'
      }
    },
    // {
    //   name: 'noRenderContent',
    //   type: FieldTypes.boolean,
    //   defaultValue: false,
    //   showDesign: false,
    //   designConfig: {
    //     type: EditTypes.Bool,
    //     isRequired: false,
    //     props: {},
    //     label: '不渲染',
    //     help: '不渲染内容部分'
    //   }
    // },
    {
      name: 'prerenderingSiblingsNumber',
      type: FieldTypes.number,
      defaultValue: 1,
      showDesign: false,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '预加载',
        help: ' Infinity: 加载所有的tab内容, 0: 仅加载当前tab内容, 当页面较复杂时，建议设为0，提升页面加载性能'
      }
    },
    {
      name: 'tabBarPosition',
      type: FieldTypes.string,
      defaultValue: 'bottom',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options:
            [
              { value: 'top', text: 'top' },
              { value: 'bottom', text: 'bottom' }
            ]
        },
        label: 'TabBar位置',
        help: 'TabBar位置'
      }
    }
  ],
  children: ['TabBarItem']
}
export default ReactWrapper(TabBar, manifest)
