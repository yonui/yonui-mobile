import React from 'react'

export default class  ListItemTitle extends React.Component<any, any> {
  static defaultProps = {

  }
  constructor(props: any) {
    super(props)
  }
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}
