import classnames from 'classnames';
export const buttonWarpPrefixCls =  'am-button'
export function getClassName(props){
  
    let _className = classnames(props.className,`${buttonWarpPrefixCls}-${props.type}`)
    return _className
  
}