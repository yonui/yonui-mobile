


import { ReactWrapper } from 'libraui-extension';

import ListView from '../listview';

let newManifest = Object.create(null);

newManifest = Object.assign(newManifest,ListView.manifest,{name:'业务列表',label:'业务列表'});
const manifest = {
  ...newManifest,
  model: 'SimpleModel'
}
// console.log('manifest',manifest)
ListView.model2Props = ({ meta, viewModel }) => {
  return {
    ...meta, // 也可展开写各项支持的属性
    onEndReached: () => viewModel.fireEvent('loadMore'),//前面是tinper-libraui后者是友零售代码
    onFresh: () => viewModel.fireEvent('refreshList'),//前面是tinper-libraui后者是友零售代码
    onRowClick: () => viewModel.fireEvent('onRowClick'),
    // onScroll:() => viewModel.fireEvent('showRTop'),
  }
}
const YSListView = ReactWrapper(ListView, manifest)
YSListView.DataSource = ListView.DataSource
export default YSListView