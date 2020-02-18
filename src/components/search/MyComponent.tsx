import { Component } from 'react'
import classnames from 'classnames'
import {  Icon } from 'antd-mobile'

// function onNextFrame(cb) {
//     if (window.requestAnimationFrame) {
//         return window.requestAnimationFrame(cb);
//     }
//     return window.setTimeout(cb, 1);
// }
// function clearNextFrameAction(nextFrameId) {
//     if (window.cancelAnimationFrame) {
//         window.cancelAnimationFrame(nextFrameId);
//     } else {
//         window.clearTimeout(nextFrameId);
//     }
// }

export default class Search extends Component {
    constructor(props) {
        super(props)
        const initState = {
            value: props.value || props.defaultValue || '',
            placeholder: props.placeholder || '',
            maxLength: props.maxLength || '',
            autoFocus: !!props.autoFocus,
            color: props.color || '#111111',
            backgroundColor: props.backgroundColor || '#F6F6F6',
            searchIconColor: props.searchIconColor || '#bfbfbf',
            clearIconColor: props.clearIconColor || '#888888',
            voiceIconColor: props.voiceIconColor || '#888888',
            // onChange: (value) => { 
            //     console.log('onChange value', value)
            // },
            // onClear: () => {
            //     console.log('onClear value', '')
            // },
            // onFocus: () => {
            //     console.log('onFocus value', '')
            // },
            // onBlur: () => {
            //     console.log('onBlur value', '')
            // },
            focus: false
        }

        this.state = initState
    }
    // props
    onChange = (e) => {
        if (!this.state.focus) {
            this.setState({
                focus: true
            })
        }
        const value = e.target.value || ''
        this.setState({ value: value })
        if (this.props.onChange) {
            this.props.onChange(value);
        }
    }
    onClear = () => {
        this.setState({ value: '' })
        if (this.props.onClear) {
            this.props.onClear('');
        }
        if (this.props.onChange) {
            this.props.onChange('');
        }
        this.focus()
    }
    onBlur = () => {
        this.setState({
            focus: false
        })
        if (this.props.onBlur) {
            // fix autoFocus item blur with flash
            setTimeout(() => {
                // fix ios12 wechat browser click failure after input
                if (document.body) {
                    document.body.scrollTop = document.body.scrollTop;
                }
            },100);
            this.props.onBlur();
        }
    }
    onFocus = () => { 
        this.setState({
            focus: true
        })
        if(this.props.onFocus) {
            this.props.onFocus()
        }
    }
    // method
    focus = () => {
        this.input.focus()
    }
    clear = () => {
        this.onClear()
    }
    render() {
        const {
          focus,
          value,
          maxLength,
          color,
          searchIconColor,
          backgroundColor,
          clearIconColor,
          voiceIconColor
        } = this.state
        const prefixCls = 'mdf-search'
        const clearCls = classnames(`${prefixCls}-clear`, {
            [`${prefixCls}-clear-show`]: !!(focus && value && value.length > 0),
        })
        return (
            <div className={prefixCls}
                style={{
                    backgroundColor: backgroundColor,
                    color: color
                }}>
                <span className={`${prefixCls}-icon`}
                    style={{
                        color: searchIconColor
                    }}>
                    <Icon type="search" size="xs"></Icon>
                </span>
                <input 
                    type="text"
                    ref={el => (this.input = el)}
                    className={`${prefixCls}-input`}
                    placeholder="search bar" 
                    value={value}
                    maxLength={maxLength}
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}/>
                <a className={clearCls}
                    style={{
                        color: clearIconColor
                    }}>
                    <Icon 
                        type="cross-circle" 
                        size="xxs" 
                        onClick={this.onClear}>
                    </Icon>
                </a>
                <a className={`${prefixCls}-voice`}
                    style={{
                        color: voiceIconColor
                    }}>
                    <Icon type="voice" size="xxs"></Icon>
                </a>
            </div>
        )
    }
    componentDidMount () {
        if(this.state.autoFocus) {
            this.focus()
        }
        if(this.props.focus) {
            this.props.focus(this)
        }
        if(this.props.clear) {
            this.props.clear(this)
        }
    }
}