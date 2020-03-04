import React, { Component } from 'react'
import { Flex,Icon } from 'antd-mobile'
import classnames from 'classnames';
import { manifest, ReactWrapper } from './manifest'

const listTemplate1PrefixCls = "am-list-template1"
interface YSTemplateProps {
  
  children?:React.ReactElement[]
}

class Container extends Component<YSTemplateProps, any>{
  public static defaultProps = {
   

  }
 

  render() {
    return (
      <div className={listTemplate1PrefixCls} >
       {this.props.children}
      </div>
    )
  }
}

export default ReactWrapper(Container, manifest)