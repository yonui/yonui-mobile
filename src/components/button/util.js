import classnames from 'classnames';
export const buttonWarpPrefixCls = 'am-button'
export function getClassName(props) {
  let _className;
  if (props.ghost) {
    return classnames(props.className, `${buttonWarpPrefixCls}-${props.ghost}`)
  }
  if (props.size === 'small') {
    _className = classnames(props.className, `${buttonWarpPrefixCls}-${props.type}-${props.size}`)
  } else {
    _className = classnames(props.className, `${buttonWarpPrefixCls}-${props.type}`)
  }
  return _className
}
