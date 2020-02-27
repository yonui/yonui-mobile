import React from 'react'
import { List } from 'antd-mobile'

export default class MdfList extends React.Component<any, any> {
  static Item = 'Item';
  static ItemTitle = 'ItemTitle';
  static ItemBrief = 'ItemBrief';

  static defaultProps = {
    prefixCls: 'am-list'
  }
  constructor(props: any) {
    super(props)
  }
  render() {
    return (<List>{this.props.children}</List>)
  }
}
