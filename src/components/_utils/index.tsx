import { EditTypes } from 'yonui-extension'
import moment from 'moment'
// 将不同格式的数据串转化成时间对象
export const formatStringToDate = (dateStr: any) => {
  switch (Object.prototype.toString.call(dateStr).toLowerCase()) {
    case '[object date]': return dateStr
    case '[object string]': return dateStr ? moment(dateStr).toDate() : undefined
    default: return undefined
  }
}

export const dateFormat = function (dateObj: Date | string, fmt: string) {
  const date: Date = formatStringToDate(dateObj)
  const o: any = {
    'M+': date.getMonth() + 1,
    // 月份
    'd+': date.getDate(),
    // 日
    'D+': date.getDate(),
    // 日
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
    // 小时
    'H+': date.getHours(),
    // 小时
    'm+': date.getMinutes(),
    // 分
    's+': date.getSeconds(),
    // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3),
    // 季度
    S: date.getMilliseconds() // 毫秒

  }
  const week: any = {
    0: '日',
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六'
  }

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear().toString() + '').substr(4 - RegExp.$1.length))
  }

  if (/(Y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear().toString() + '').substr(4 - RegExp.$1.length))
  }

  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? '星期' : '周' : '') + `${week[`${date.getDay().toString()} + ''`]}`)
  }

  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k].toString() : ('00' + `${o[k].toString()}`).substr(('' + `${o[k].toString()}`).length))
    }
  }
  return fmt
}

export const getCssSelectParams = function getCssSelectParams (options: any) {
  const { name, label, addText, editText, caption } = options
  return {
    name,
    label: label || '样式编排',
    type: EditTypes.IframeModal,
    showDesign: true,
    help: options.help || '',
    props: {
      caption: caption || '样式编排',
      iframeUrl: '/CssSelect',
      iframeId: 'mobileCssIframeModal',
      iframeContext: 'mobileCssIframeModal',
      addText: addText || '新增样式',
      editText: editText || '修改样式',
      message: true,
      isRequired: false,
      footer: true
    },
    defaultValue: null
  }
}

export const decodeValue = (value: string, formatReg: string, hiddenChart = '*', replaceChart = '#') => {
  if (!formatReg) {
    return value
  }
  const formatRegArr = formatReg.split('')
  const valueArr = String(value).split('')
  let newValue = []
  for (let index = 0; index < formatRegArr.length; index++) {
    const element = formatRegArr[index]

    if (element === replaceChart) {
      const cell = valueArr.shift()
      if (!cell) break
      newValue.push(cell)
    } else if (element === hiddenChart) {
      const cell = valueArr.shift()
      if (!cell) break
      newValue.push(hiddenChart)
    } else {
      newValue.push(element)
    }
  }
  if (valueArr.length > 0) {
    newValue = newValue.concat(valueArr)
  }
  return newValue.join('')
}

export const checkVisibleInDocument = (node: HTMLElement) => {
  if (!(node.offsetHeight || node.offsetWidth || node.getClientRects().length)) {
    return false
  }
  // 获取元素的高度和元素顶部相对视口的距离
  const { height, top } = node.getBoundingClientRect()
  const windowHeight = window.innerHeight || document.documentElement.clientHeight
  // 只需要确定元素顶部相对视口左上角的垂直距离小于视口的高度且元素底部相对视口左上角的垂直距离
  // 大于0
  return (top < windowHeight) && (top + height > 0)
}

// 防抖
export const debounce = (method: Function, delay: number) => {
  let timer: NodeJS.Timeout
  return (...param: any) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      method(...param)
    }, delay)
  }
}

export const isJSON = (str) => {
  if (typeof str == 'string') {
    try {
      const obj = JSON.parse(str);
      if (typeof obj == 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
}
