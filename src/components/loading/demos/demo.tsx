/**
 * @name: Loading
 * @description: Demo Description
 */
import React, { Component } from 'react';
import Loading from '../index';
import Button from '../../button'
import '../../button/style'
import '../style';
import './demo.less';
import img from '../style/loading.png'
export default class Demo extends Component<any,any> {
  constructor(props: any) {
    super(props)

    this.state = {
      jumpLoading: false,
      toastLoading: false,
      localLoading: false,
      percent: 0
    }
  }

  onChangeLoading = ( key: string, dur?: number) => () => {
    this.setState({
      [key]: !this.state[key],
      percent: 0
    })
    if(dur){
      setTimeout(() => {
        this.setState({
          [key]: !this.state[key]
        })
      }, dur);
    }
    if(key === 'jumpLoading') {
      let time = setInterval( () => {
        const { percent } = this.state
        if( percent >= 100 ){
          clearInterval(time)
        }
        else{
          this.setState({
            percent: percent + 5
          })
        }
      }, 100)
    }
  }

  render() {
    const { jumpLoading, localLoading, toastLoading, percent } = this.state
    return (
      <div>
        <br />
        <Button type='primary' onClick={this.onChangeLoading('jumpLoading')} content='jump loading'/>
        <Loading type='jump' show={jumpLoading} percent={percent}/>
        <br/>
        <Button type='primary' onClick={this.onChangeLoading('localLoading')} content='local loading'/>
        <Loading type='local' show={localLoading} content='加载中'/>
        <br/>
        <Button type='primary' onClick={this.onChangeLoading('toastLoading')} content='local loading'/>
        <Loading type='toast' show={toastLoading} content='加载中'/>
      </div>
    )
  }
}
