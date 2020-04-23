import React from 'react'
import { List, AutoSizer, CellMeasurerCache, CellMeasurer, InfiniteLoader } from 'react-virtualized'
import { PullToRefresh } from 'antd-mobile'
import 'react-virtualized/styles.css'
const cache = new CellMeasurerCache({ defaultHeight: 30, fixedWidth: true })

interface cellRendererProps { index: number, key: number | string, parent: any, style: React.CSSProperties }
interface VirtualListProps {
  dataSource: any[]
  rowRender: (props: cellRendererProps) => React.ReactChild
  onReachFooter: () => void
}
class VirtualList extends React.Component<VirtualListProps> {
  render () {
    const { rowRender, dataSource, onReachFooter } = this.props
    const remoteRowCount = 100 // dataSource.length
    const isRowLoaded = ({ index }) => {
      console.log(index, dataSource[index], !!dataSource[index])
      return !!dataSource[index]
    }

    const loadMoreRows = async () => {
      await new Promise(function (resolve) {
        resolve()
      })
      onReachFooter && onReachFooter()
    }

    const cellRenderer = (rowRender: (props: any, param: cellRendererProps) => React.ReactChild) => (param: cellRendererProps) => {
      const { index, key, parent, style } = param
      const content = rowRender(dataSource[index], param)
      return (
        <CellMeasurer
          cache={cache}
          columnIndex={0}
          key={key}
          parent={parent}
          rowIndex={index}
        >
          <div
            style={style}
          >
            {content}
          </div>
        </CellMeasurer>
      )
    }
    return (
      <PullToRefresh
        style={{ height: 200 }}
      >
        <div style={{ height: '200px', width: '100%', backgroundColor: '#ffffff' }}>
          <AutoSizer>
            {({ height, width }) => (
              <InfiniteLoader
                isRowLoaded={isRowLoaded}
                loadMoreRows={loadMoreRows}
                rowCount={remoteRowCount}
              >

                {({ onRowsRendered, registerChild }) => (
                  <List
                    height={height}
                    onRowsRendered={onRowsRendered}
                    ref={registerChild}
                    rowCount={remoteRowCount}
                    rowHeight={cache.rowHeight}
                    rowRenderer={cellRenderer(rowRender)}
                    width={width}
                    deferredMeasurementCache={cache}
                  />
                )}
              </InfiniteLoader>
            )}
          </AutoSizer>
        </div>
      </PullToRefresh>)
  }
}

export default VirtualList
