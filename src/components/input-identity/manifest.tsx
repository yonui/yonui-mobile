import { ComponentManifest, UIObject, TypeProps } from 'yonui-extension';
import { getFilterProps } from '../list-item-wrapper/manifestProps'

const manifest: ComponentManifest = {
  name: 'InputIdentity',
  label: '证件号',
  type: TypeProps.BasicControls,
  uiObject: UIObject.Controls,
  props: [
    ...getFilterProps(['inputStyle', 'labelStyle'])
  ],
  children: []
}

export default manifest
