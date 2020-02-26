import React, { Component } from 'react'
import { Tabs, Icon } from 'antd-mobile'
import DeafultTabsProps from 'antd-mobile/lib/tabs/PropsType'
import classnames from 'classnames'
export interface TabsProps extends DeafultTabsProps {
  pageSize?: number
  icons?: Array<JSX.Element | string > | JSX.Element | string
  splitLine?: boolean
  gather?: boolean
  className?: string
  style?: object
  icon1?: string
  icon2?: string
  icon3?: string
  onIcon1Click?: () => void
  onIcon2Click?: () => void
  onIcon3Click?: () => void

}
export default class LibrauiTabs extends Component<TabsProps> {
  static defaultProps = {
    renderTab: (tab: any) => {
      return <div className='tabs-item-content'>
        <span>{tab.title}</span>
        <span className='tabs-item-content-underline'></span>
      </div>
    },
    swipeable: false,
    splitLine: true,
    gather: false
  }

  parseObj = (param: any) => typeof param === 'string' ? JSON.parse(param) : param

  renderIcon = (ele: JSX.Element | string) => {
    return <span className='libraui-tabs-icon'>
      {typeof ele === 'string' ? <Icon type={ele}/> : ele}
    </span>
  }

  renderIcons = (icons: Array<JSX.Element | string > | JSX.Element | string) => {
    return <span className='libraui-tabs-icons'>
      {Array.isArray(icons) ? icons.map(item => this.renderIcon(item)) : this.renderIcon(icons)}
    </span>
  }

  // 适配设计器
  getTabBarIcon = () => {
    const { icons, icon1, icon2, icon3, onIcon1Click, onIcon2Click, onIcon3Click } = this.props
    if (icons) return icons
    const res: JSX.Element[] = [];
    [icon1, icon2, icon3].forEach((item, index) => {
      if (item) {
        res.push(<Icon type={item} onClick={[onIcon1Click, onIcon2Click, onIcon3Click][index]}/>)
      }
    })
    if (res.length > 0) return res
  }

  render () {
    let { tabs, children, tabBarUnderlineStyle, pageSize, icons, icon1, icon2, icon3, splitLine, gather, style, className, ...other } = this.props
    const tabBarIcon = this.getTabBarIcon()
    tabs = this.parseObj(tabs)
    tabBarUnderlineStyle = this.parseObj(tabBarUnderlineStyle)
    const underline = { display: 'none', ...tabBarUnderlineStyle }
    const tabsEle = pageSize
      ? <Tabs tabs={tabs} tabBarUnderlineStyle={underline} renderTabBar={(props: any) => <Tabs.DefaultTabBar {...props} page={pageSize} />}
        {...other}>{children}</Tabs> : <Tabs tabs={tabs} tabBarUnderlineStyle={underline} {...other}>{children}</Tabs>
    console.log('splitLine ', splitLine)
    const cls = classnames(
      className,
      'libraui-tabs',
      `libraui-tabs-with-icons-${tabBarIcon ? (Array.isArray(tabBarIcon) ? tabBarIcon.length : 1) : 0}`,
      `libraui-tabs-${splitLine ? '' : 'no-'}split-line`,
      {
        'libraui-tabs-with-icons': tabBarIcon,
        'libraui-tabs-gather': gather
      })
    const iconsEle = tabBarIcon ? this.renderIcons(tabBarIcon) : null
    return (
      <div className={cls} style={style}>
        {tabsEle}
        {iconsEle}
      </div>
    )
  }
}
