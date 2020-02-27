/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react';
import List from '../index';
import ListItem from '../../list-item'
import ListItemBrief from '../../list-item-brief'
import '../style';
import './demo.less';
// thumb={'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png'}
export default class Demo1 extends Component {
    render() {
        return (
            <List>
              <ListItem
                title="单行文本"
                arrow="horizontal">
              </ListItem>
              <ListItem
                title="两行纯文字"
                arrow="horizontal">
                <ListItemBrief>描述信息描述信息描述信息</ListItemBrief>
              </ListItem>
              <ListItem
                title="多行行纯文字"
                arrow="horizontal">
                <ListItemBrief>描述信息描述信息描述信息</ListItemBrief>
                <ListItemBrief>2018-08-09</ListItemBrief>
              </ListItem>
              <ListItem
                title="左侧图标"
                leftThumb={'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png'}>
                <ListItemBrief>描述信息描述信息描述信息</ListItemBrief>
              </ListItem>
              <ListItem
                title="右侧图标"
                rightThumb={'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png'}>
                <ListItemBrief>描述信息描述信息描述信息</ListItemBrief>
              </ListItem>
              <ListItem
                title="头像列表"
                leftThumb={'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png'}
                titleExtra="文本">
                <ListItemBrief>描述信息描述信息描述信息</ListItemBrief>
              </ListItem>
              <ListItem
                title="图标单行文字"
                singleLine={true}
                leftThumb={'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png'}
                titleExtra="内容三四五六七八九十一二内容三四五六七八九十一二三">
              </ListItem>
            </List>
        )
    }
}
