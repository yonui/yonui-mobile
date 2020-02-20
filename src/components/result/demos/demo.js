/**
 * @name: Button
 * @description: sss
 */
import React, { Component } from 'react';
import Result from '../index';
// import Icon from '../../icon'
import '../style';
import './demo.less';
export default class Demo extends Component {
  render () {
    return (
      <Result
      // img={<Icon type="check-circle" className="spe" style={{ fill: '#1F90E6' }} />}
      title="验证成功"
      message="所提交内容已成功完成验证"
    />
    )
  }
}
