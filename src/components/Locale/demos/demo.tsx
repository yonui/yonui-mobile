/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import locale from '../Locale'
import Label from '../../label'
export default class Demo extends Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {

    }
  }

  componentDidMount(){
    locale.setLanguage()
  }

  setData = () => {
    locale.setLanguage('tw')
  }

  getData = () => {
    console.log(locale.getData())
    // this.forceUpdate()
  }
    render() {
        return (
            <div>
              {/* {locale.getData().Popconfirm.ok} */}
              <button onClick={this.setData}> set </button>
              <button onClick={this.getData}> get </button>
              <Label label={locale.getData().Popconfirm.ok}/>
            </div>
        )
    }
}
