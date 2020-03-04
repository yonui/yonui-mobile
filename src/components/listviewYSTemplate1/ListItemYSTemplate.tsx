import React, { Component } from 'react'
import TopSection from './components/TopSection';
import FooterSection from './components/FooterSection';
import {manifest,ReactWrapper}from './manifest'

const listTemplate1PrefixCls = "am-list-template1";
interface YSTemplateProps {
  refreshing: boolean
  showSeparator: boolean
  dataSource: Object[]
  onEndReached: () => void
  onRefresh: () => void
  onRowClick: (e: React.MouseEvent, rowID: any) => void
  height: number
  onScroll: () => void
  footerContent: string
  children: React.ReactElement[]
  initialListSize: number
  showNum: number
  pageSize: number
  value?: any[]
  showPullToReresh?: boolean,
  DataSource:any
  
}

class ListItemYSTemplate1 extends Component<YSTemplateProps,any>{
  public static defaultProps = {
  }
  render(){
    return <div className={listTemplate1PrefixCls}>
      <TopSection/>
      <FooterSection/>
    </div>
  }
}

export default ReactWrapper(ListItemYSTemplate1,manifest)