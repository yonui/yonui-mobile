import React, { Component } from 'react'
import { Grid } from 'antd-mobile' 
export default class GridComponent extends Component {
  renderItem = (dataItem) => {
    const { icon, text } = dataItem;
    return (
      <React.Fragment>
        <div className='custom-item'>
          <div className='out-content'>
            <img class="custom-grid-icon" src={icon}/>
          </div>
        </div>
        <div class="am-grid-text custom-text">{text}</div>
      </React.Fragment>)
  }
  render() {
    const { outContent } = this.props;  
    return (
      <Grid {...this.props}
        className={outContent&&'outContent'}
        renderItem={outContent?this.renderItem:this.props.renderItem}/>
    )
  }
}