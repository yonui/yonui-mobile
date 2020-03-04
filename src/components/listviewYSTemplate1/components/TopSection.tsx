import React, { Component } from 'react'

import TopSectionLine1 from './TopSectionLine1';
import TopSectionLine2 from './TopSectionLine2'

const TopSectionPreCls = 'top-section';
interface TopSectionProps {
  
}
export default class TopSection extends Component<TopSectionProps, any>{
  
  render() {
    return (
      <div className={TopSectionPreCls}>
        <TopSectionLine1/>
        <TopSectionLine2/>
      </div>

    )
  }
}
