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
  iconsOccupy?: boolean
  iconsClassName?: string
  iconsStyle?: object
  icon1?: string
  icon2?: string
  icon3?: string
  onIcon1Click?: () => void
  onIcon2Click?: () => void
  onIcon3Click?: () => void
  mode?: 'normal' | 'transparent'
  nid?: string
  uitype?: string

}
export default class yonuiTabs extends Component<TabsProps> {
  static defaultProps = {
    renderTab: (tab: any) => {
      return <div className='tabs-item-content'>
        <span>{tab.title}</span>
        <span className='tabs-item-content-underline'></span>
      </div>
    },
    swipeable: false,
    // splitLine: true,
    // gather: false,
    iconsOccupy: true
  }

  parseObj = (param: any) => typeof param === 'string' ? JSON.parse(param) : param

  renderIcon = (ele: JSX.Element | string) => {
    return <span className='yonui-tabs-icon'>
      {typeof ele === 'string' ? <Icon type={ele}/> : ele}
    </span>
  }

  renderIcons = (icons: Array<JSX.Element | string > | JSX.Element | string, className?: string, style?: object) => {
    const cls = classnames(className, 'yonui-tabs-icons')
    return <span className={cls} style={style}>
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

  renderTabBar = (props: any) => {
    const { pageSize } = props
    return <Tabs.DefaultTabBar {...props} page={pageSize} tabBarBackgroundColor='transparent' />
  }

  render () {
    let { nid, uitype, tabs, children, mode = 'normal', tabBarUnderlineStyle, pageSize, icons, icon1, icon2, icon3, splitLine, gather, style, className, iconsClassName, iconsStyle, iconsOccupy, tabBarBackgroundColor, ...other } = this.props
    const tabBarIcon = this.getTabBarIcon()
    tabs = this.parseObj(tabs)
    tabBarUnderlineStyle = this.parseObj(tabBarUnderlineStyle)
    const underline = { display: 'none', ...tabBarUnderlineStyle }
    let tabsEle = null
    if (mode === 'normal') {
      tabsEle = pageSize
        ? <Tabs tabs={tabs} tabBarBackgroundColor={tabBarBackgroundColor} tabBarUnderlineStyle={underline} renderTabBar={(props: any) => <Tabs.DefaultTabBar {...props} page={pageSize} />}
          {...other}>{children}</Tabs> : <Tabs tabs={tabs} tabBarBackgroundColor={tabBarBackgroundColor} tabBarUnderlineStyle={underline} {...other}>{children}</Tabs>
    } else {
      splitLine = splitLine || false
      gather = true
      tabsEle = <Tabs tabs={tabs} tabBarBackgroundColor={tabBarBackgroundColor} renderTabBar={this.renderTabBar} tabBarUnderlineStyle={underline} {...other}>{children}</Tabs>
    }
    // const tabsEle = pageSize
    //   ? <Tabs tabs={tabs} tabBarBackgroundColor={tabBarBackgroundColor} tabBarUnderlineStyle={underline} renderTabBar={(props: any) => <Tabs.DefaultTabBar {...props} page={pageSize} />}
    //     {...other}>{children}</Tabs> : <Tabs tabs={tabs} tabBarBackgroundColor={tabBarBackgroundColor} tabBarUnderlineStyle={underline} {...other}>{children}</Tabs>
    const cls = classnames(
      className,
      'yonui-tabs',
      `yonui-tabs-${mode}`,
      `yonui-tabs-${splitLine === false ? 'no-' : ''}split-line`,
      {
        'yonui-tabs-with-icons': tabBarIcon,
        'yonui-tabs-gather': gather,
        [`yonui-tabs-with-icons-${tabBarIcon ? (Array.isArray(tabBarIcon) ? tabBarIcon.length : 1) : 0}`]: iconsOccupy
      })
    iconsStyle = { background: tabBarBackgroundColor, ...iconsStyle }
    const iconsEle = tabBarIcon ? this.renderIcons(tabBarIcon, iconsClassName, iconsStyle) : null
    return (
      <div className={cls} style={style} nid={nid} uitype={uitype}>
        {tabsEle}
        {iconsEle}
      </div>
    )
  }
}
