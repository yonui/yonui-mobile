const svgSprite = (contents: string) => `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    id="__MDF_MOBILE_SVG_SPRITE_NODE__"
    style="display:none;overflow:hidden;width:0;height:0"
  >
    <defs id="svg_defs">
      ${contents}
    </defs>
  </svg>
`

export const loadSprite = (data: string) => {
  if (!document) return
  const svgSpriteNode = document.querySelector('#__MDF_MOBILE_SVG_SPRITE_NODE__ defs')
  const mountNode = document.body

  if (!svgSpriteNode) { // 如果不存在
    const content: string = data || ''
    mountNode.insertAdjacentHTML('afterbegin', svgSprite(content))
  } else {
    const oldHtml = svgSpriteNode.innerHTML
    svgSpriteNode.innerHTML = `${oldHtml}${data}`
  }
}

export const loadSpriteForDesign = (type: string) => {
  if (!document) return
  const svgSpriteNode = document.getElementById('__MDF_MOBILE_SVG_SPRITE_NODE__')
  const mountNode = document.body

  if (!svgSpriteNode) { // 如果不存在
    const content: string = renderSvgSpriteForDesign(type) || ''
    mountNode.insertAdjacentHTML('afterbegin', svgSprite(content))
  } else {
    svgSpriteNode.innerHTML = `<defs>${renderSvgSpriteForDesign(type)}</defs>`
  }
}

const cacheSvgSprites: any = {} // 缓存已经生成过的
const renderSvgSpriteForDesign = (type: string) => {
  const icons = require('./iconSource')
  if (!icons[type]) return
  cacheSvgSprites[type] = icons[type]
  return Object.keys(cacheSvgSprites).map(iconName => {
    const svgContent = cacheSvgSprites[iconName].split('svg')[1]
    console.log(svgContent)
    return `<symbol id=${iconName}${svgContent}symbol>`
  }).join('')
}
