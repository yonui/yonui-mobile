import React, { Component } from 'react'
import { ListView as ListViewAntd, ActivityIndicator, PullToRefresh, Icon } from 'antd-mobile'
import { ListViewProps } from 'antd-mobile/lib/list-view'
import {manifest,ReactWrapper}from './manifest'

interface YSListViewProps extends ListViewProps {
  refreshing?: boolean
  showSeparator?: boolean
  onEndReached?: () => void
  onRefresh?: () => void
  onRowClick?: (e: React.MouseEvent, rowID: any) => void
  height?: number
  onScroll?: () => void
  footerContent?: string
  children?: React.ReactElement[]
  initialListSize?: number
  pageSize?: number
  value?: any[]
  showPullToReresh?: boolean,
  DataSource:any
  className:string
}
const  initialHeight = document.documentElement.clientHeight * 3 / 4

class YSListView extends Component<YSListViewProps,any> {
  public static defaultProps = {
  }

  listViewDataSource = new ListViewAntd.DataSource({
    rowHasChanged: (row1: any, row2: any) => row1 !== row2
  })

  dataIndex: string[] = [];

  listViewRef: any

  state = {
    dataSource: this.listViewDataSource.cloneWithRows(this.dataIndex),
    showNum: this.props.initialListSize || 10
  }

  
  componentDidMount = () => {
    setTimeout(() => {
      this.UNSAFE_componentWillReceiveProps(this.props)
    }, 300)
  }


  UNSAFE_componentWillReceiveProps (nextProps: any): void {
    this.initListData(nextProps.value || nextProps.dataSource)
  }

  /* 初始化ListView 需要dataSource */
  initListData = (data: []) => {
    if (!data) return ;
    const newData = data
    this.dataIndex = []
    newData.map((item, index: number) => {
      this.dataIndex.push(`row-${index}`)
    })
    this.setState({
      dataSource: this.listViewDataSource.cloneWithRows(this.dataIndex)
    })
  }


  render () {
    const { dataSource, showNum } = this.state
    const { refreshing, height=initialHeight, pageSize, showPullToReresh = true } = this.props

    return (
      <ListViewAntd
        {...this.props}
        className='ys-listview'
        ref={ref => { this.listViewRef = ref }}
        key={this.listViewRef}
        style={{ height: 500, overflow: 'auto' }}
       />

    )
  }
}

const WrappedListView = ReactWrapper(YSListView, manifest)
WrappedListView.DataSource = ListViewAntd.DataSource
export default WrappedListView;