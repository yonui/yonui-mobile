import React, { Component } from 'react'
import { Grid } from 'antd-mobile' 
import { GridPropsType } from 'antd-mobile/lib/grid/PropsType'
export interface GridProps extends GridPropsType {
  outContent?: boolean
}
export default class GridComponent extends Component<GridProps> {
  renderItem = (dataItem: any) => {
    const { icon, text } = dataItem;
    return (
      <React.Fragment>
        <div className='custom-item'>
          <div className='out-content'>
            <img className="custom-grid-icon" src={icon}/>
          </div>
        </div>
        <div className="am-grid-text custom-text">{text}</div>
      </React.Fragment>)
  }
  render() {
    const { outContent } = this.props; 
    const cusCls = outContent ? 'am-grid-outContent' : '' 
    return (
      <Grid className={cusCls} {...this.props} 
        renderItem={outContent?this.renderItem:this.props.renderItem}/>
    )
  }
}