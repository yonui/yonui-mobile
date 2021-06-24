/**
 * @name: CardBoxGroup
 * @description: 卡片容器组
 */
import React, { Component } from 'react'
import CardBoxGroup from '../index'
import CardBox from '../../card-box'
import '../../card-box/style'
import '../style';
import './demo.less';
export default class Demo extends Component {
    render() {
        return (
            <CardBoxGroup splitLine={false}>
              <CardBox status='default'><div>1111</div><div>2222</div><div>111331</div><div>444</div></CardBox>
              <CardBox status='default'><div>1111</div><div>2222</div><div>111331</div><div>444</div></CardBox>
              <CardBox status='default'><div>1111</div><div>2222</div><div>111331</div><div>444</div></CardBox>
              <CardBox status='default'><div>1111</div><div>2222</div><div>111331</div><div>444</div></CardBox>
              <CardBox status='select'><div>1111</div><div>2222</div><div>111331</div><div>444</div></CardBox>
              <CardBox status='selected'><div>1111</div><div>2222</div><div>111331</div><div>444</div></CardBox>
              <CardBox status='default'><div>1111</div><div>2222</div><div>111331</div><div>444</div></CardBox>
              <CardBox status='selected'><div>1111</div><div>2222</div><div>111331</div><div>444</div></CardBox>
              <CardBox status='default'><div>1111</div><div>2222</div><div>111331</div><div>444</div></CardBox>
            </CardBoxGroup>
        )
    }
}
