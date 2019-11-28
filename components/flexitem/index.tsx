import * as React from 'react'
import Flex from './flex'
export default class metFlexItem implements Flex.Item {
  render = (props: any) => (<Flex.Item {...props}> {props.children}</Flex.Item>)
}
