
import {manifest,ReactWrapper} from './manifest'
/**
 * todo
 * onAfterChange
 * marks
 * dots
 * included
 * maximumTrackStyle
 * minimumTrackStyle
 * handleStyle
 * trackStyle
 * railStyle
 */

function DivControl(props){
  return(<div className="div-container">{props.children||''}</div>)
}
export default ReactWrapper(DivControl, manifest)


