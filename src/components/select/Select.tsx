import classnames from 'classnames';
import * as React from 'react';
import { Menu, List } from 'antd-mobile';
import { MenuProps } from 'antd-mobile/es/menu/PropsType';
import {manifest,ReactWrapper} from './manifest';
import shallowequal from 'shallowequal'
const initData = [
  {
    value: '1',
    label: 'Food',
    disabled:true
  }, {
    value: '2',
    label: 'Supermarket',
  },
  {
    value: '3',
    label: 'Extra'
  },
];
function noop(){}

export interface MenuInfoProps extends MenuProps {
  prefixCls?: string;
  listPrefixCls?: string;
  className?: string;
  title?: string;//list item左侧title
}
const ListItem = List.Item;
class SelectControl extends React.Component<MenuInfoProps, any> {
  static defaultProps = {
    prefixCls: 'am-select',
    listPrefixCls: 'am-select-list',
    radioProps: {},
  };

  getValue = (value:any) =>{
    const {data=initData} = this.props;
    let res = [];
    for(let item of data){
      if(!!~value.indexOf(item.value))res.push(item.label)
    }
    return res;
  }

  state = {
    menuVisible: false,
    menuValue:this.props.defaultValue,
    menuShowValue:(Array.isArray(this.props.defaultValue)&& this.getValue(this.props.defaultValue).join(',')) || 'select',
  }
  componentWillReceiveProps(nextProps:any){
    if(!shallowequal(this.props.value,nextProps.value) && Array.isArray(nextProps.value)){
      this.setState({
        menuShowValue:this.getValue(nextProps.value).join(','),
        menuValue:nextProps.value
      })
    }
  }

  menuShow = () => {
    this.setState({
      menuVisible: !this.state.menuVisible
    })
  }

  innerOnOk = (value:any) =>{
    let res = this.getValue(value)
    this.setState({
      menuShowValue:res.join(','),
      menuValue:value,
    },()=>{
      this.menuShow()
    })
  }

  innerOnCancel = () =>{
    this.menuShow()
    if(this.props.onCancel) this.props.onCancel();
  }

  innerOnChange = (value:any) =>{
    const {multiSelect,data=initData,level=1,onChange=noop} = this.props;
    let res = this.getValue(value);
    if(!multiSelect && level === 1){
      this.setState({
        menuValue:value,
        menuShowValue:res.join(','),
      },()=>{
        this.menuShow()
        onChange();
      })
    }
 console.log('onchange的操作',value);
  }
  render() {
    const {
      title='Title',
    } = this.props;
    const {
      menuVisible,
      menuValue,
      menuShowValue,
    } = this.state;

    const extraProps: any = {};
    const needProps = ['data', 'defaultValue', 'value','multiSelect','className','onOk','onChange','onCancel'];
    needProps.forEach(i => {
      if (i in this.props) {
        extraProps[i] = (this.props as any)[i];
      }
    });
    
    return (
      <div className="am-select">
        <ListItem className={'am-select-list-item'} extra={menuShowValue} onClick={this.menuShow}>{title}</ListItem>
        {
          menuVisible && <Menu
            level={1}
            data={initData}
            value={menuValue}
            {...extraProps}
            onOk={this.innerOnOk}
            onCancel={this.innerOnCancel}
            onChange={this.innerOnChange}
          />
        }
      </div>
    );
  }
}

export default ReactWrapper(SelectControl,manifest);