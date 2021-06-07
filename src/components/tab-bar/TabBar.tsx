import React from 'react';
import { TabBar } from 'antd-mobile'

interface TabBarItem {
  key?: string
  title?: string
  icon?: any
  selectedIcon?: any
}

export interface TabBarProps {
  activeKey?: string
  itemList?: TabBarItem[]
  onSwitch?: (key?: string, item?: TabBarItem) => void
}

export interface TabBarState {
  selectedTab?: string
}

class yonuiTabBar extends React.Component<TabBarProps, TabBarState> {
  constructor (props: TabBarProps) {
    super(props);
    const { activeKey, itemList = [] } = props
    let selectedTab = activeKey
    if (!selectedTab) {
      selectedTab = itemList.length ? itemList[0].key : ''
    }
    this.state = { selectedTab };
  }

  shouldComponentUpdate (nextProps) {
    if (nextProps.activeKey !== this.props.activeKey) {
      this.setState({
        selectedTab: nextProps.activeKey,
      });
    }
    return true
  }

  switchTab = (item) => {
    const { onSwitch } = this.props
    this.setState({
      selectedTab: item.key,
    });
    onSwitch?.(item.key, item)
  }

  render () {
    const { itemList = [] } = this.props
    const tablist = itemList.map(item => {
      return <TabBar.Item
        selected={this.state.selectedTab === item.key}
        key={item.key}
        title={item.title}
        icon={item.icon}
        selectedIcon={item.selectedIcon}
        onPress={() => { this.switchTab(item) }}
      />
    })
    return (<TabBar tintColor='#E14C46'>
      {tablist}
    </TabBar>);
  }
}

export default yonuiTabBar;
