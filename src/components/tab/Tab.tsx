import React, { Component } from 'react'
import { Tabs, Icon } from 'antd-mobile'
import DeafultTabsProps from 'antd-mobile/lib/tabs/PropsType'
import classnames from 'classnames'
export interface TabsProps extends DeafultTabsProps {
  pageSize?: number
  icons?: Array<JSX.Element | string> | JSX.Element | string
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
  onTabClick?: (tab: any, index: number) => void
  afterTabActiveKeyChange?: (tab: any, index: number) => void
  mode?: 'normal' | 'transparent'
  visible?: boolean
  standard?: string
  nid?: string
  uitype?: string
  vm?: any
}
export default class yonuiTabs extends Component<TabsProps, any> {
  static defaultProps = {
    standard: 'upesn',
    iconsOccupy: true,
    visible: true
  }

  constructor (props: any) {
    super(props)
    this.state = {
      tabPage: 0
    }
  }

  parseObj = (param: any) => typeof param === 'string' ? JSON.parse(param) : param

  renderIcon = (ele: JSX.Element | string) => {
    return <span className='yonui-tabs-icon'>
      {typeof ele === 'string' ? <Icon type={ele} /> : ele}
    </span>
  }

  renderIcons = (icons: Array<JSX.Element | string> | JSX.Element | string, className?: string, style?: object) => {
    const cls = classnames(className, 'yonui-tabs-icons')
    return <span className={cls} style={style}>
      {Array.isArray(icons) ? icons.map(item => this.renderIcon(item)) : this.renderIcon(icons)}
    </span>
  }

  // 包装右侧icon组
  getTabBarIcon = () => {
    const { icons, icon1, icon2, icon3, onIcon1Click, onIcon2Click, onIcon3Click } = this.props
    if (icons) return icons
    const res: JSX.Element[] = [];
    [icon1, icon2, icon3].forEach((item, index) => {
      if (item) {
        res.push(<Icon type={item} onClick={[onIcon1Click, onIcon2Click, onIcon3Click][index]} />)
      }
    })
    if (res.length > 0) return res
  }

  renderTabBar = (props: any) => {
    let { pageSize } = props
    if (!pageSize) {
      pageSize = 3
    }
    return <Tabs.DefaultTabBar renderTab={this.renderTab} {...props} page={pageSize} tabBarBackgroundColor='transparent' />
  }

  renderTabClick = (tab, index) => {
    const viewModel = this.props.vm
    if (!viewModel?.execute('beforeTabActiveKeyChange', { index })) return;
    if (this.props.onTabClick) {
      this.props.onTabClick(tab, index)
    }
    if (this.props.afterTabActiveKeyChange) {
      this.props.afterTabActiveKeyChange(tab, index)
    }
    this.setState({ tabPage: index }, () => {
      viewModel?.execute('afterTabActiveKeyChange', { index })
    })
  }

  gotoPage = (page) => {
    this.setState({
      tabPage: page
    })
  }

  renderTab = (tab) => {
    const { children, page, tabBarActiveTextColor, standard } = this.props;
    const tabIndex = tab.tabIndex;
    if (tabIndex >= 0) {
      const indexItem = children[tabIndex];
      const { nid, uitype } = indexItem.props?.meta;
      let widthPercentage = '50%';
      if (tab.title.length <= 2) {
        widthPercentage = '100%';
      } else if (tab.title.length < 4) {
        widthPercentage = '66.7%';
      }
      // 处理当前选中位置 nid 用于判断是否是运行态，运行态实用tabPage， 编辑态使用page
      const selectPage = nid ? page : this.state.tabPage;
      return (
        <div
          key={nid}
          nid={nid}
          uitype={uitype}
          style={{
            backgroundColor: 'transparent',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            height: '100%'
          }}
        >
          {standard === 'upesn' && <div className='upesn-standard-tabs-item'>{tab.title}</div>}
          {standard === 'default' && <span style={{ fontWeight: tabIndex === selectPage ? 'bolder' : 'normal' }}>{tab.title}</span>}
          {standard === 'default' && tabIndex === selectPage ? (<div style={{ width: widthPercentage, backgroundColor: tabBarActiveTextColor || '#E14C46', height: '4px', borderRadius: '2px', marginTop: '-12px' }} />) : null}
        </div>
      );
    } else {
      return (
        <span style={{ backgroundColor: 'transparent' }}>{tab.title}</span>
      );
    }
  };

  _onTabClick = (tab: any, index: number) => {
    if (this.props.onTabClick) {
      this.props.onTabClick(tab, index)
    }
  }

  _onChange = (tab: any, index: number) => {
    if (this.props.afterTabActiveKeyChange) {
      this.props.afterTabActiveKeyChange(tab, index)
    }
  }

  render () {
    let { nid, uitype, tabs, children, mode = 'normal', standard, tabBarUnderlineStyle, pageSize, icons, icon1, icon2, icon3, splitLine, gather, style, className, iconsClassName, iconsStyle, iconsOccupy, tabBarBackgroundColor, visible, ...other } = this.props
    if (!visible) return null
    // 右侧icon组
    const tabBarIcon = this.getTabBarIcon()
    // tab项
    tabs = this.parseObj(tabs)
    // tab下划线样式
    tabBarUnderlineStyle = this.parseObj(tabBarUnderlineStyle)
    const underline = { display: 'none', ...tabBarUnderlineStyle }
    let tabsEle = null
    if (mode === 'normal') {
      if (pageSize) {
        tabsEle = (
          <Tabs
            tabs={tabs}
            tabBarBackgroundColor={tabBarBackgroundColor}
            tabBarUnderlineStyle={underline}
            renderTabBar={(props: any) => <Tabs.DefaultTabBar {...props} page={pageSize} />}
            onTabClick={this._onTabClick}
            onChange={this._onChange}
            {...other}
          >{children}</Tabs>
        )
      } else {
        tabsEle = <Tabs tabs={tabs} tabBarBackgroundColor={tabBarBackgroundColor} tabBarUnderlineStyle={underline} {...other}>{children}</Tabs>
      }
    } else {
      splitLine = splitLine || false
      gather = true
      tabsEle = (
        <Tabs
          tabs={tabs}
          tabBarBackgroundColor={tabBarBackgroundColor}
          tabBarUnderlineStyle={underline}
          renderTabBar={this.renderTabBar}
          onChange={this.renderTabClick}
          {...other}
          page={nid ? this.props.page : this.state.tabPage}
        >{children}</Tabs>
      )
    }
    const cls = classnames(
      className,
      'yonui-tabs',
      `yonui-tabs-${mode}`,
      `yonui-tabs-${!splitLine ? 'no-' : ''}split-line`,
      {
        'yonui-tabs-with-icons': tabBarIcon,
        'yonui-tabs-gather': gather,
        'upesn-standard-tabs': mode !== 'normal' && standard === 'upesn',
        [`yonui-tabs-with-icons-${tabBarIcon ? (Array.isArray(tabBarIcon) ? tabBarIcon.length : 1) : 0}`]: iconsOccupy
      }
    )
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
