/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react';
import List from '../index';
import ListItem from '../ListItem';
import Brief from '../Brief';
import ListItemTitle from '../ListItemTitle'
import '../style';
import './demo.less';
// thumb={'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png'}
export default class Demo1 extends Component {
    render() {
        return (
            <List>
              <ListItem
                arrow="horizontal">
                <ListItemTitle>单行文本</ListItemTitle>
              </ListItem>
              <ListItem
                arrow="horizontal">
                <ListItemTitle>两行纯文字</ListItemTitle>
                <Brief>描述信息描述信息描述信息</Brief>
              </ListItem>
              <ListItem
                arrow="horizontal">
                <ListItemTitle>多行行纯文字</ListItemTitle>
                <Brief>描述信息描述信息描述信息</Brief>
                <Brief>2018-08-09</Brief>
              </ListItem>
              <ListItem
                leftThumb={'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png'}>
                <ListItemTitle>左侧图标</ListItemTitle>
                <Brief>描述信息描述信息描述信息</Brief>
              </ListItem>
              <ListItem
                rightThumb={'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png'}>
                <ListItemTitle>右侧图标</ListItemTitle>
                <Brief>描述信息描述信息描述信息</Brief>
              </ListItem>
              <ListItem
                leftThumb={'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png'}
                titleExtra="文本">
                <ListItemTitle>头像列表</ListItemTitle>
                <Brief>描述信息描述信息描述信息</Brief>
              </ListItem>
              <ListItem
                singleLine={true}
                leftThumb={'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png'}
                titleExtra="内容三四五六七八九十一二内容三四五六七八九十一二三">
                <ListItemTitle>图标单行文字</ListItemTitle>
                <ListItemTitle>图标单行文字</ListItemTitle>
              </ListItem>
            </List>
        )
    }
}
