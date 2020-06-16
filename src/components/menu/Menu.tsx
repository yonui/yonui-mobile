import React, { Component } from 'react'
import { Menu } from 'antd-mobile'

class MdfMenu extends Component<any> {
  _onOk = (v: any) => {
    const { onOk } = this.props
    onOk?.(v)
  }

  render () {
    return (
      <Menu {...this.props} onOk={this._onOk} />
    )
  }
}
export default MdfMenu
