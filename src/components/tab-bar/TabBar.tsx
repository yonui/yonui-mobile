import React from 'react';
import { TabBar } from 'antd-mobile'

interface TabBarItem {
  key?: string
  title?: string
  icon?: any
  selectedIcon?: any
}

export interface TabBarProps {
  itemList?: TabBarItem[]
  onSwitch?: (key?: string) => void
}

export interface TabBarState {
  selectedTab?: string
}

class yonuiTabBar extends React.Component<TabBarProps, TabBarState> {
  constructor (props: TabBarProps) {
    super(props);
    const { itemList } = props
    const selectedTab = itemList.length ? itemList[0].key : ''
    this.state = { selectedTab: selectedTab };
  }

  switchTab = (key) => {
    const { onSwitch } = this.props
    this.setState({
      selectedTab: key,
    });
    onSwitch?.(key)
  }

  render () {
    const { itemList } = this.props
    const tablist = itemList.map(item => {
      return <TabBar.Item
        selected={this.state.selectedTab === item.key}
        key={item.key}
        title={item.title}
        icon={item.icon}
        selectedIcon={item.selectedIcon}
        onPress={() => { this.switchTab(item.key) }}
      />
    })
    return (<TabBar tintColor='#E14C46'>
      {tablist}
    </TabBar>);
  }
}

export default yonuiTabBar;
