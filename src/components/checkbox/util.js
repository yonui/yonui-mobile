import classnames from 'classnames';
export const checkboxWarpPrefixCls =  'am-checkbox'
export function getClassName(props){
  if(props.mode){
    let _className = classnames(props.className,`${checkboxWarpPrefixCls}-${props.mode}`)
    return _className
  }
}