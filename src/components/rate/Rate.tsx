import React, { PureComponent } from 'react'
import RcRate from 'rc-rate'
import StarEmpty from './style/star.svg'
import StarFull from './style/star_full.svg'
import StarHalf from './style/star_half.svg'
import ListItemWrapper, { getListItemProps } from '../list-item-wrapper'
interface RateProps extends React.defaultProps{
  count: number
  allowHalf?: boolean
  defaultValue?: number
  value?: number
  disabled?: boolean
  onChange?: (value: number) => void
}
export default class Rate extends PureComponent<RateProps> {
  characterRender = (dom: any, props: any) => {
    const { index, value, onClick, disabled } = props
    const onClickIcon = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, half?: boolean) => {
      event.stopPropagation()
      const _index = half ? (index - 0.5) : index
      !disabled && onClick(event, _index)
    }
    let icon
    if (index >= value) {
      icon = <StarEmpty />
    } else if (value - index === 0.5) {
      icon = [<StarHalf key='half' {...{className: 'star-half'}} />, <StarEmpty key='half-wrapper' />]
    } else {
      icon = <StarFull />
    }
    return <li className='rc-rate-star yonui-mobile-rate-star' key={index}>
      <span onClick={onClickIcon} className='yonui-mobile-rate-star-icon'>{icon}</span>
    </li>
  }

  render () {
    const { allowHalf, defaultValue, value, count, disabled, onChange } = this.props
    const wrapperProps = getListItemProps(this.props, {
      contentCls: 'yonui-mobile-rate'
    })
    return (
      <ListItemWrapper {...wrapperProps}>
        <RcRate
          allowHalf={allowHalf}
          characterRender={this.characterRender}
          value={value || defaultValue}
          // defaultValue={defaultValue}
          onChange={onChange}
          count={count}
          disabled={disabled}
        />
      </ListItemWrapper>
    )
  }
}
