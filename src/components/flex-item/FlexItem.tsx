import React from "react";

import { Flex } from 'antd-mobile'


export interface FlexItemProps {

  flex?: string
  content?: string
}
export default class FlexItem extends React.Component<FlexItemProps, any>  {

  constructor(props: FlexItemProps) {
    super(props)
  }


  render() {
    console.log("FlexItemProps: ",this.props)
    return (
      <Flex.Item className={this.props.flex === "1" ? "am-flexbox-item-flex" : "am-flexbox-item-auto"}>
        {this.props.children && this.props.children.length ? this.props.children : this.props.content}
      </Flex.Item>
    )
  }
}



