import {FC, useContext, useMemo} from 'react'
import { DiagramContext } from '../../context'
import { SDiagram } from './Diagram.styled'
import { DiagramItem } from './diagramItem/DiagramItem'



const Diagram: FC = () => {

  const {data, selectedItem} = useContext(DiagramContext)!
  const step = Math.ceil(360 / data.length)



  const currDeg = useMemo(() => {
    if (!selectedItem) {
      return 360
    }
    console.log(Math.abs((data.length - selectedItem.id) * step) + step)
    return Math.abs((data.length - selectedItem.id) * step) + step
  }, [selectedItem, step, data.length])

  
  return (
    <SDiagram newDeg={currDeg}>
      {data.map((item, index) => (
        <DiagramItem key={`__diagram-item-${item.id}`} content={item} index={index} step={step} active={selectedItem?.id === item.id} />
      ))}
    </SDiagram>
  )
}

export default Diagram
