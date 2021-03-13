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

const loadSprite = (data: string) => {
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

export default loadSprite
