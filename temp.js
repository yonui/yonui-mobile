const str = `"Icon": "./src/components/icon",
"List": "./src/components/list",
"ListItem": "./src/components/list-item",
"ListItemBrief": "./src/components/list-item-brief",
"Button": "./src/components/button",
"Background": "./src/components/background",
"Card": "./src/components/card",
"Carousel": "./src/components/carousel",
"CarouselItem": "./src/components/carousel-item",
"Search": "./src/components/search",


"Flex": "./src/components/flex",
"FlexItem": "./src/components/flex-item",
"Result": "./src/components/result",
"Empty": "./src/components/empty",
"Tips": "./src/components/tips",
"Label": "./src/components/label",
"NavBar": "./src/components/navbar",


"Div": "./src/components/div",
"ListView": "./src/components/listview",
"Notice": "./src/components/notice",
"popover": "./src/components/popover",
"Radio": "./src/components/radio",
"RadioItem": "./src/components/radioitem",
"Select": "./src/components/select",
"Slider": "./src/components/slider",
"Switch": "./src/components/switch",
"Menu": "./src/components/menu",
"Checkbox": "./src/components/checkbox",


"Tab":"./src/components/tab",
"TabPane": "./src/components/tab-pane",
"Filter": "./src/components/filter",
"FilterContent": "./src/components/filter-content",
"ToolBars": "./src/components/tool-bars",
"ActivityPanel": "./src/components/ActivityPanel",
"TagSelect": "./src/components/TagSelect",

"Loading": "./src/components/loading",
"Grid": "./src/components/grid",
"TextareaItem": "./src/components/textarea-item",
"Input": "./src/components/input",
"Calendar": "./src/components/calendar",
"ListCalendar": "./src/components/list-calendar",
"Footer": "./src/components/footer",
"ListPanelPicker": "./src/components/list-panel-picker",
"DatePanelPicker": "./src/components/date-panel-picker",
"ListDatePicker": "./src/components/list-date-picker",
"CalendarPanel": "./src/components/calendar-panel"`
const reg = /-(\w)/g
const res = str.replace(reg, (a, b) => {
  // console.log(a,b)
  return b.toUpperCase()
}).replace(/components\/(\w)/g, (a, b) => {
  // console.log(a,b)
  return b.toUpperCase()
})
console.log(res)
