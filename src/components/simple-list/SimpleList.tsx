import React, { useEffect, useState } from 'react'
import { PullToRefresh } from 'antd-mobile'
import classnames from 'classnames'
import { checkVisibleInDocument, debounce } from '../_utils'
interface SimpleListProps extends React.defaultProps{
  dataSource: any[]
  renderRow: (rowData: any, sectionId: any, rowId: number) => React.ReactChild
  onRefresh: () => void
  onReachFoot: () => void
  pullToRefresh?: boolean
  footerText?: string
  split?: 'none' | 'line' | 'blank'
  height?: number
  reservedHeight?: number
}
// const defaultFooterText = '加载中...'
const SimpleList = (props: SimpleListProps) => {
  const { dataSource, renderRow, onRefresh, pullToRefresh = true, split = 'line', onReachFoot, footerText, reservedHeight = 0, height } = props
  let __list: HTMLElement | null
  const [listHeight, setListHeight] = useState(0)
  useEffect(() => {
    console.log(__list)
    const topHeight = Math.min(__list?.offsetTop || 0, 1000)
    const listHeight = topHeight + reservedHeight
    setListHeight(listHeight)
  }, [])
  const onScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    event && event.stopPropagation()
    if (__list && __list.childElementCount && __list.lastChild && checkVisibleInDocument(__list.lastChild)) {
      onReachFoot && onReachFoot()
    }
  }
  const footerCls = classnames('yonui-simple-list-footer', {
    hidden: !footerText
  })
  const touch = (event: React.TouchEvent<HTMLDivElement>) => {
    console.log(event)
    event.stopPropagation()
  }
  const footerStyle: React.CSSProperties = { }
  const renderFooter = (text?: string) => (<div className={footerCls} style={footerStyle}>
    {text || ''}
  </div>)
  const _listItems = dataSource.map((item, index) => {
    return <div key={index} className='yonui-simple-list-item'>
      {renderRow && renderRow(item, dataSource, index)}
    </div>
  })

  const cls = classnames('yonui-simple-list', `split-${split}`)
  const style: React.CSSProperties = height ? { height } : { maxHeight: `calc(100vh - ${listHeight}px)` }
  console.log(style)
  const _list = (<div className={cls} onTouchMove={touch} onScroll={debounce(onScroll, 100)} ref={ (ref) => { __list = ref }}>
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
  >
    {_list}
  </PullToRefresh>)
}
export default SimpleList
