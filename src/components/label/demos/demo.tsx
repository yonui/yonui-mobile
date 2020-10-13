/**
 * @name: label
 * @description: 标签
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import Flex from '../../flex'

import '../style'
import './demo.less'
export default class Demo1 extends Component {
  render() {
    const props = {
      type: 'normal',
      label: '文字'
    }
    const style1 = {
      margin: '10px'
    }
    return (
      <div className="spanDemo">
        <Flex>
          <MyComponent label={props.label} color='red' width='' leftIcon='left' rightIcon='right'/>
          <MyComponent label={props.label} color='red' type='border' width='' />
          <MyComponent label={props.label} color='red' type='primary' width='' />
          <MyComponent label={props.label} color='#e14c46' type='label' width='' />
        </Flex>
        <Flex>
        <MyComponent label={props.label} style={{ ...style1, background: 'rgba(245,245,245,1)', color: 'rgba(0,199,230,1)' }} />
          <MyComponent label={props.label} style={{ ...style1, background: 'rgba(245,245,245,1)', color: 'rgba(31,191,167,1)' }} />
          <MyComponent label={props.label} style={{ ...style1, background: 'rgba(245,245,245,1)', color: 'rgba(101,175,71,1)' }} />
          <MyComponent label={props.label} style={{ ...style1, background: 'rgba(245,245,245,1)', color: 'rgba(255,171,0,1)' }} />
          <MyComponent label={props.label} style={{ ...style1, background: 'rgba(245,245,245,1)', color: 'rgba(225,76,70,1)' }} />
          <MyComponent label={props.label} style={{ ...style1, background: 'rgba(245,245,245,1)', color: 'rgba(101,84,192,1)' }} />
        </Flex>
        <Flex>
          <MyComponent label="文本" style={{ ...style1, background: 'rgba(0,199,230,1)' }} />
          <MyComponent label="文本" style={{ ...style1, background: 'rgba(31,191,167,1)' }} />
          <MyComponent label="文本" style={{ ...style1, background: 'rgba(101,175,71,1)' }} />
          <MyComponent label="文本" style={{ ...style1, background: 'rgba(255,171,0,1)' }} />
          <MyComponent label="文本" style={{ ...style1, background: 'rgba(225,76,70,1)' }} />
          <MyComponent label="文本" style={{ ...style1, background: 'rgba(101,84,192,1)' }} />


        </Flex>
        <Flex>
          <MyComponent label={props.label} style={{ ...style1, border: '1px solid rgba(0,199,230,1)', color: 'rgba(0,199,230,1)' }} />
          <MyComponent label={props.label} style={{ ...style1, border: '1px solid rgba(31,191,167,1)', color: 'rgba(31,191,167,1)' }} />
          <MyComponent label={props.label} style={{ ...style1, border: '1px solid rgba(101,175,71,1)', color: 'rgba(101,175,71,1)' }} />
          <MyComponent label={props.label} style={{ ...style1, border: '1px solid rgba(255,171,0,1)', color: 'rgba(255,171,0,1)' }} />
          <MyComponent label={props.label} style={{ ...style1, border: '1px solid rgba(225,76,70,1)', color: 'rgba(225,76,70,1)' }} />
        </Flex>
        <Flex>
        <MyComponent label={ 'props.label文本文本文本文本文本文本' } textLangth={ 10 } style={{ ...style1, border: '1px solid rgba(101,84,192,1)', color: 'rgba(101,84,192,1)' }} />

        </Flex>
        <Flex>
          <MyComponent label={ '1.5' } prefix={'¥'} suffix={'万元'} />
        </Flex>
        <Flex>
        <MyComponent label={ '1.5' } prefix={'¥'} suffix={'万元'} leftIcon='left' rightIcon='right' />
        </Flex>
        <Flex>
          <MyComponent label={ '4.5' } prefix={'$'} />
        </Flex>
        <Flex>
          <MyComponent label={ '9.5' } suffix={'万元'} />
        </Flex>
        <Flex>
          <MyComponent spareLabel={'哈哈哈'} label={ '1.5' } prefix={'&'} suffix={'*'} />
        </Flex>
      </div>
    )
  }
}
