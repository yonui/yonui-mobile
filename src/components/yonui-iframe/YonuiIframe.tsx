import React, { memo } from 'react'
import classnames from 'classnames'
interface YonuiIframeProps extends React.defaultProps{
  url?: string
}

const YonuiIframe = (props: YonuiIframeProps) => {
  const { url, className, ...other } = props
  const cls = classnames(className, 'yonui-mobile-iframe')
  const _props: any = {
    src: url,
    className: cls,
    ...other
  }
  const _iframe = url ? <iframe {..._props} /> : <div {..._props} />
  return _iframe
}

export default memo(YonuiIframe)
