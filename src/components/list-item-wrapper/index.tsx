import ListItemWrapper from './ListItemWrapper'
import manifestProps, { getFilterProps } from './manifestProps'
interface ListItemWrapperPopsKeys {
  [key: string]: any
}
export interface ListItemWrapperProps extends ListItemWrapperPopsKeys {
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

export const selfPropsArray: string[] = [
  'label',
  'splitLine',
  'required',
  'singleLine',
  'singleLineCenter',
  'subLabel',
  'labelCls',
  'labelStyle',
  'contentCls',
  'contentStyle',
  'error',
  'errorText',
  'regRuleText',
  'showExtraLabelIcon',
  'onClick',
  'className',
  'style',
  'nid',
  'uitype',
  'notRequired',
  'previewMode',
  'mReadOnly',
  'disabled'
]

export const getListItemProps = (props: ListItemWrapperProps, other?: ListItemWrapperProps) => {
  const res: ListItemWrapperPopsKeys = {}
  selfPropsArray.forEach(key => {
    if (props[key] !== undefined) res[key] = props[key]
    if (other?.[key] !== undefined) res[key] = other[key]
  })
  return res
}
ListItemWrapper.getFilterProps = getFilterProps
ListItemWrapper.getListItemProps = getListItemProps
ListItemWrapper.manifestProps = manifestProps
export default ListItemWrapper
