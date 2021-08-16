import React from 'react'
import ReactDOM from 'react-dom'
import Icon from '../icon'

interface CustomSortProps {
  initialKey?: string
  sortItems?: any[]
  selectedColor?: string
  extraTextColor?: string
  modelMarginTop?: number
  onSelectItem?: (item: object) => void
}

interface CustomSortState {
  current: string
  showMenu: boolean
}

class CustomSort extends React.Component<CustomSortProps, CustomSortState> {
  sortRef: any = null;

  static defaultProps = {
    modelMarginTop: 0
  }

  constructor (props) {
    super(props)
    let current = props.initialKey ? props.initialKey : ''
    if (!current) {
      current = props.sortItems && props.sortItems.length > 0 ? props.sortItems[0].key : ''
    }
    this.state = {
      showMenu: false,
      current
    };
  }

  getLabel = (key) => {
    let selectedItem
    const { sortItems } = this.props
    const recursion = (list) => {
      for (const item of list) {
        if (item.key === key) selectedItem = item
        if (item.children && item.children.length > 0) recursion(item.children)
      }
    }
    recursion(sortItems)
    return <>
      {selectedItem?.label}
      {selectedItem?.rightIcon && <Icon className='arrow' size='xs' type={selectedItem.rightIcon} />}
    </>
  }

  switchShowMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  };

  selectMenuItem = (item) => {
    const { onSelectItem } = this.props
    this.setState({
      current: item.key,
      showMenu: !this.state.showMenu,
    });
    onSelectItem?.(item)
  }

  getModalContent = () => {
    const { sortItems, modelMarginTop } = this.props
    const sortNode = ReactDOM.findDOMNode(this.sortRef)
    const data = this.renderData(sortItems)
    return (
      <>
        <div
          className='yonui-custom-sort-mask'
          style={{ top: sortNode.parentNode.clientTop + sortNode.parentNode.clientHeight }}
          onClick={this.switchShowMenu}
        />
        <div
          className='yonui-custom-sort-modal'
          style={{ top: sortNode.parentNode.clientTop + sortNode.parentNode.clientHeight + modelMarginTop }}
        >
          {data}
        </div>
      </>
    );
  }

  renderData = (data) => {
    const { selectedColor, extraTextColor } = this.props
    return data.map(item => {
      return <>
        <div
          className='sort-item'
          style={{ color: item.key === this.state.current ? selectedColor : '' }}
          key={item.key}
          onClick={() => {
            this.selectMenuItem(item);
          }}
        >
          <div className='sort-item-content'>
            {item.label}
            {item.rightIcon && <Icon className='arrow' size='xs' type={item.rightIcon} />}
            {item.extraText !== undefined && <span className='sort-item-extra-text' style={{ color: item.key === this.state.current ? selectedColor : extraTextColor }}>{item.extraText}</span>}
          </div>
          {item.key === this.state.current ? <Icon className='selected' type='icon-shuruzhengque' /> : null}
        </div>
        {item.children && item.children.length > 0 && <div className='sort-item-children'>{this.renderData(item.children)}</div>}
      </>
    })
  }

  render () {
    const { selectedColor } = this.props
    const style = {
      color: ''
    }
    if (this.state.showMenu) style.color = selectedColor
    return (
      <>
        <div
          className='yonui-custom-sort'
          style={style}
          onClick={this.switchShowMenu}
          ref={(el) => (this.sortRef = el)}
        >
          <div className='yonui-custom-sort-content'>
            {this.getLabel(this.state.current)}
            <div className='yonui-custom-sort-arrow'>
              {this.state.showMenu ? <Icon size='xs' type='icon-treearrow-down' /> : <Icon size='xs' type='icon-gridcaretarrowup' />}
            </div>
          </div>
        </div>
        {this.state.showMenu ? this.getModalContent() : null}
      </>
    );
  }
}

export default CustomSort;
