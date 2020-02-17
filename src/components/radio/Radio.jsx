import React from 'react'
import { Radio } from 'antd-mobile'

import  {manifest,ReactWrapper} from './manifest'

export default ReactWrapper((props) => <Radio {...props}>{props.name || props.children}</Radio>, manifest)
