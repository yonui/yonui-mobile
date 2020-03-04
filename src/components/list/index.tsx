import List from './List'
import { ReactWrapper, manifest } from './manifest'
import Item from '../list-item'
import ItemBrief from '../list-item-brief'
// List.Item = Item;
// List.ItemBrief = ItemBrief;
const wrapperedList = ReactWrapper(List, manifest)
wrapperedList.Item = Item
wrapperedList.ItemBrief = ItemBrief
export default wrapperedList
