import React, { Component } from 'react'
import { ListView as ListViewAntd, ActivityIndicator, PullToRefresh, Icon } from 'antd-mobile'
import { ListViewProps } from 'antd-mobile/lib/list-view'
import {manifest,ReactWrapper}from './manifest'

interface YSListViewProps extends ListViewProps {
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
  pageSize: number
  value?: any[]
  showPullToReresh?: boolean,
  DataSource:any
}
const  initialHeight = document.documentElement.clientHeight * 3 / 4

class YSListView extends Component<YSListViewProps> {
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

  onEndReached = (event: React.MouseEvent) => {
    if(this.props.onEndReached){
      this.props.onEndReached()
    }
  }

  onRefresh = () => {
    this.props.onRefresh && this.props.onRefresh()
  }

  onRowClick = (e: React.MouseEvent, rowID: any) => {
    this.props.onRowClick && this.props.onRowClick(e, rowID)
  }

  renderRow = (rowData: any[], sectionID: string, rowID: any) => {
    const { dataSource, value, children } = this.props
    const { showNum } = this.state
    const length = value ? value.length : dataSource.length
    if ((!dataSource[rowID] && !(value || [])[rowID]) || !children || !children.length) return null
    let controls: any = []
    // 如果value不为空，说明是受控组件，渲染时取 children[rowId]
    if (value && value.length) {
      controls.push(children[rowID] || '')
    } else {
      children.forEach(child => {
        controls.push(React.cloneElement(child, {}))
      })
    }
    if (length > showNum) controls = controls.slice(0, showNum)
    return (
      <div className="listview-row" key={`listview-row-${rowID}`} onClick={e => this.onRowClick(e, rowID)}>
        {controls}
      </div>
    )
  }

  renderSeparator = (sectionID: any, rowID: any) => {
    if (!this.props.showSeparator) {
      return <React.Fragment></React.Fragment>
    }
    return (
      <div
        className="listview-separator"
        key={`${sectionID}-${rowID}`}
      />
    )
  }

  renderFooter = () => {
    const { footerContent, dataSource, value } = this.props
    const length = value ? value.length : dataSource.length
    const { showNum } = this.state
    if (!footerContent) {
      if (length > showNum) {
        return (
          <div className="listview-footer" onClick={() => { this.setState({ showNum: length }) }}>
            <span>展开剩余{length - showNum}商品</span>
            <Icon type="down"></Icon>
          </div>
        )
      }
      return <div></div>
    }
    return (
      <div className="listview-footer">
        <span>{footerContent}</span>
      </div>
    )
  }

  // 滚动事件监听
  scrollListener = (e: React.MouseEvent) => {
    if (this.props.onScroll) this.props.onScroll()
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.UNSAFE_componentWillReceiveProps(this.props)
    }, 300)
  }

  render () {
    const { dataSource, showNum } = this.state
    const { refreshing, height=initialHeight, pageSize, renderRow, showPullToReresh = true } = this.props
    
    if (dataSource && dataSource.length === 0) {
      return <div style={{ height: height }} className="no_data">暂无数据</div>
    }

    let hasPullToRereshProps = {}

    if (showPullToReresh) {
      hasPullToRereshProps = {
        pullToRefresh: <PullToRefresh
          {... {} as any}
          refreshing={refreshing}
          indicator={{ release: <ActivityIndicator /> }}
          className="listview-pulltorefresh"
          direction={'down'}
          onRefresh={this.onRefresh}
        />
      }
    }

    return (
      <ListViewAntd
        className='ys-listview'
        ref={ref => { this.listViewRef = ref }}
        key={this.listViewRef}
        initialListSize={showNum}
        pageSize={pageSize || 4}
        dataSource={dataSource}
        renderSeparator={this.renderSeparator}
        renderFooter={this.renderFooter}
        renderRow={renderRow || this.renderRow as any}
        style={{ height: height, overflow: 'auto' }}
        onScroll={(e) => { this.scrollListener(e) }}
        scrollRenderAheadDistance={500}
        scrollEventThrottle={200}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
        {...hasPullToRereshProps}
        
      />
    )
  }
}

// const WrappedListView = ReactWrapper(YSListView, manifest)
// WrappedListView.DataSource = ListView.DataSource
// YSListView.DataSource = ListView.DataSource
export default YSListView