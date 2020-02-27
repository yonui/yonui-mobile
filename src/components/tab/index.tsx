/**
 * rc-from是否需要增加,如果增加rc-from,需要写一个from组件
 */
// import DefaultTabBar from './DefaultTabBar'
import Tab from './Tab'
import DefaultTabBar from './DefaultTabBar'
import { manifest, defaultTabBarManifest, ReactWrapper } from './manifest'
// const getChildrenDom = function (tabs: any) {
//   if (!Array.isArray(tabs)) return null
//   return tabs.map((item, index) => {
//     return <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>Content of {index + 1} tab</div>
//   })
// }
// todo 未配置 onChange
const WrapperTab = ReactWrapper(Tab, manifest)
const WrapperDefaultTabBar = ReactWrapper(DefaultTabBar, defaultTabBarManifest)
WrapperTab.DefaultTabBar = WrapperDefaultTabBar
export default WrapperTab
