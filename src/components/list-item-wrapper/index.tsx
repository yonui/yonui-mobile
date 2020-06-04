import ListItemWrapper from './ListItemWrapper'
import manifestProps from './manifestProps'
export interface ListItemWrapperProps {
  splitLine?: boolean
  singleLine?: boolean
  required?: boolean
  label?: React.ReactNode
  subLabel?: string
  labelCls?: string
  labelStyle?: React.CSSProperties
  contentCls?: string
  contentStyle?: React.CSSProperties
  error?: boolean
  errorText?: React.ReactNode
  showExtraLabelIcon?: boolean
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  className?: string
  style?: React.CSSProperties
  nid?: string
  uitype?: string
  // [other: string]: any
}

export const selfPropsArray = [
  'label',
  'splitLine',
  'required',
  'singleLine',
  'subLabel',
  'labelCls',
  'labelStyle',
  'contentCls',
  'contentStyle',
  'error',
  'errorText',
  'showExtraLabelIcon',
  'onClick',
  'className',
  'style',
  'nid',
  'uitype'
]

export const getListItemProps = (props: ListItemWrapperProps, other?: ListItemWrapperProps) => {
  const res = {}
  selfPropsArray.forEach(key => {
    if (props[key] !== undefined) res[key] = props[key]
    if (other?.[key] !== undefined) res[key] = other[key]
  })
  return res
}

ListItemWrapper.getListItemProps = getListItemProps
ListItemWrapper.manifestProps = manifestProps
export default ListItemWrapper
