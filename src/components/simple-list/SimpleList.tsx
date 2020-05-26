import React, { useEffect, useState } from 'react'
import { PullToRefresh } from 'antd-mobile'
import classnames from 'classnames'
import { checkVisibleInDocument, debounce } from '../_utils'
interface SimpleListProps extends React.defaultProps{
  dataSource: any[]
  renderRow: (rowData: any, sectionId: any, rowId: number) => React.ReactChild
  onRefresh?: () => void
  onReachFoot?: () => void
  pullToRefresh?: boolean
  loadingText?: string
  completeText?: string
  split?: 'none' | 'line' | 'blank'
  height?: number
  reservedHeight?: number
  children?: React.ReactChildren
  editable?: boolean
  hasMore?: boolean
}
const SimpleList = (props: SimpleListProps) => {
  const {
    dataSource, renderRow, onRefresh, pullToRefresh = true, split = 'blank',
    onReachFoot, loadingText = '', completeText = '', reservedHeight = 0,
    height, children, editable, hasMore = true
  } = props
  let __list: HTMLElement | null
  const [listHeight, setListHeight] = useState(0)
  const footerText = hasMore ? loadingText : completeText
  useEffect(() => {
    // console.log(__list)
    const topHeight = Math.min(__list?.offsetTop || 0, 1000)
    const listHeight = topHeight + reservedHeight
    setListHeight(listHeight)
  }, [])
  const onScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    event && event.stopPropagation()
    if (__list && __list.childElementCount && __list.lastChild && checkVisibleInDocument(__list.lastChild)) {
      console.log('------ onReachFoot ！！！ ------')
      onReachFoot && onReachFoot()
    }
  }
  const footerCls = classnames('yonui-simple-list-footer', {
    hidden: !footerText
  })
  const touch = (event: React.TouchEvent<HTMLDivElement>) => {
    // console.log(event)
    event.stopPropagation()
  }
  const footerStyle: React.CSSProperties = { }
  const renderFooter = (text?: string) => (<div className={footerCls} style={footerStyle}>
    {text || ''}
  </div>)
  const itemCls = classnames('yonui-simple-list-item', { editable })
  const _listItems = dataSource.map((item, index) => {
    return (
      <div className={itemCls} key={index}>
        {renderRow ? renderRow(item, dataSource, index) : children}
      </div>
    )
  })

  const cls = classnames('yonui-simple-list', `split-${split}`)
  const style: React.CSSProperties = height ? { height } : { maxHeight: `calc(100vh - ${listHeight}px)` }
  // console.log(style)
  const _list = (<div className={cls} onTouchMove={touch} ref={(ref) => { __list = ref }}>
    {_listItems}
    {renderFooter(footerText)}
  </div>)
  if (!pullToRefresh) {
    return _list
  }

  return (<PullToRefresh
    onRefresh={onRefresh}
    distanceToRefresh={50}
    direction='down'
    refreshing={false}
    style={style}
    className='yonui-simple-list-pull'
    onScroll={hasMore && debounce(onScroll, 100)}
  >
    {_list}
  </PullToRefresh>)
}
export default SimpleList
