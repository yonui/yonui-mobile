import CN from './data/zh_CN.json'
import TW from './data/zh_TW.json'
let res: any = null
const setLanguage = (lang?: string | any) => {
  if (!lang) {
    lang = window.localStorage.getItem('yonui-lang') || window.navigator.language
  }
  console.log('set language', lang)
  if (typeof lang === 'string') {
    window.localStorage.setItem('yonui-lang', lang)
    switch (lang) {
      case 'tw': {
        res = JSON.parse(JSON.stringify(TW))
        break
      }
      case 'zh':
      default: {
        res = CN
      }
    }
  } else if (typeof lang === 'object') {
    window.localStorage.setItem('yonui-lang', lang.lang)
    res = lang
  }
  return res
}

const getData = () => {
  return res || setLanguage()
}
export default {
  setLanguage,
  // getLanguage,
  getData
}
