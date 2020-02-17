/**
 * rc-from是否需要增加,如果增加rc-from,需要写一个from组件
 */
import React from 'react'
import { Radio } from 'antd-mobile'
import {manifestRaidoItem as manifest, ReactWrapper} from './manifest'
export default ReactWrapper((props: any) => <Radio.RadioItem {...props}>{props.name || props.children}</Radio.RadioItem>, manifest)
