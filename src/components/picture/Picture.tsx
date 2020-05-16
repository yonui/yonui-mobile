import React, { memo } from 'react'
import classnames from 'classnames'
interface PictureProps extends React.defaultProps{
  url: string
  showLabel?: boolean
  label?: string
  borderRadius?: number
  size?: 'sm' | 'md' | 'lg'
  labelStyle?: React.CSSProperties
}

const Picture = (props: PictureProps) => {
  const { url, label, borderRadius, size = 'md', showLabel, className, style, labelStyle } = props
  const cls = classnames(className, 'yonui-mobile-picture-wrapper')
  const imgCls = classnames('yonui-mobile-picture', `yonui-mobile-picture-size-${size}`)
  const imgStyle: React.CSSProperties = { borderRadius: `${borderRadius}%`, ...style }
  return (
    <div className={cls}>
      <img className={imgCls} style={imgStyle} src={url} />
      {showLabel && label && <div className='yonui-mobile-picture-label' style={labelStyle}>{label}</div>}
    </div>
  )
}

export default memo(Picture)
