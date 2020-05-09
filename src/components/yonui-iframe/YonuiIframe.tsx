import React, { memo } from 'react'
import classnames from 'classnames'
interface YonuiIframeProps extends React.defaultProps{
  url?: string
  width?: string
  height?: string
}

const YonuiIframe = (props: YonuiIframeProps) => {
  const { url, className, style, width, height } = props
  const cls = classnames(className, 'yonui-mobile-iframe')
  const sty: React.CSSProperties = { ...style, width, height }
  const _iframe = url ? <iframe src={url} className={cls} style={sty} /> : <div className={cls} style={sty}></div>
  return _iframe
}

export default memo(YonuiIframe)
