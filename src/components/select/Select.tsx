import * as React from 'react'
import { Menu, List, Icon } from 'antd-mobile'
import { MenuProps } from 'antd-mobile/es/menu/PropsType'
import shallowequal from 'shallowequal'

export interface MenuInfoProps extends MenuProps {
  prefixCls?: string
  listPrefixCls?: string
  className?: string
  title?: string// list item左侧title
  required?: boolean
  disabled?: boolean
}
const ListItem = List.Item
export default class SelectControl extends React.Component<MenuInfoProps, any> {
  static defaultProps = {
    prefixCls: 'am-select',
    listPrefixCls: 'am-select-list',
    radioProps: {}
  };

  getValue = (value: any) => {
    const { data = [] } = this.props
    const res = []
    for (const item of data) {
      if (~value.indexOf(item.value)) res.push(item.label)
    }
    return res
  }

  state = {
    menuVisible: false,
    menuValue: this.props.defaultValue,
    menuShowValue: (Array.isArray(this.props.defaultValue) && this.getValue(this.props.defaultValue).join(',')) || ''
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps (nextProps: any) {
    if (!shallowequal(this.props.value, nextProps.value) && Array.isArray(nextProps.value)) {
      this.setState({
        menuShowValue: this.getValue(nextProps.value).join(','),
        menuValue: nextProps.value
      })
    }
  }

  menuShow = () => {
    this.setState({
      menuVisible: !this.state.menuVisible
    })
  }

  innerOnOk = (value: any) => {
    const res = this.getValue(value)
    this.setState({
      menuShowValue: res.join(','),
      menuValue: value
    }, () => {
      this.menuShow()
    })
  }

  innerOnCancel = () => {
    this.menuShow()
    if (this.props.onCancel) this.props.onCancel()
  }

  innerOnChange = (value: any) => {
    const { multiSelect, level = 1, onChange } = this.props
    const res = this.getValue(value)
    if (!multiSelect && level === 1) {
      this.setState({
        menuValue: value,
        menuShowValue: res.join(',')
      }, () => {
        this.menuShow()
        onChange && onChange()
      })
    }
    console.log('onchange的操作', value)
  }

  getMenuTitle = (hasValue?: boolean, disabled?: boolean) => {
    if (disabled) return '不可选'
    else return hasValue ? <Icon type='right' className='menu-title'/> : <span className='menu-title'>选项<Icon type='right'/></span>
  }

  render () {
    const {
      title = 'Title',
      required,
      data,
      disabled
    } = this.props
    const {
      menuVisible,
      menuValue,
      menuShowValue
    } = this.state

    const menuTitle = this.getMenuTitle(!!menuShowValue, disabled)
    const extraProps: any = {}
    const needProps = ['data', 'defaultValue', 'value', 'multiSelect', 'className', 'onOk', 'onChange', 'onCancel']
    needProps.forEach(i => {
      if (i in this.props) {
        extraProps[i] = (this.props as any)[i]
      }
    })
    if (disabled) {
      return (
        <div className="am-select">
          <ListItem className={'am-select-list-item disabled'} extra={menuTitle} align='top'>
            {title}
            {required && <span style={{ color: '#EE3D4B' }}>*</span>}
          </ListItem>
        </div>
      )
    }

    return (
      <div className="am-select">
        <ListItem className={'am-select-list-item'} extra={menuTitle} onClick={this.menuShow} align='top'>
          {title}
          {required && <span style={{ color: '#EE3D4B' }}>*</span>}
          <List.Item.Brief>
            {menuShowValue}
          </List.Item.Brief>
        </ListItem>
        {
          menuVisible && <Menu
            level={1}
            data={data}
            value={menuValue}
            {...extraProps}
            onOk={this.innerOnOk}
            onCancel={this.innerOnCancel}
            onChange={this.innerOnChange}
          />
        }
      </div>
    )
  }
}
