import { EditTypes } from 'yonui-extension'

export const dateFormat = function dateFormat (dateObj: Date | string, fmt: string) {
  const date = typeof dateObj === 'string' ? new Date(dateObj) : dateObj
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
