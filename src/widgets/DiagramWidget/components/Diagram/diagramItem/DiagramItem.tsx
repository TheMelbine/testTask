import {FC, useContext} from 'react'
import { DiagramContext } from '../../../context'
import { TDiagramItemParams, TDiagramData } from '../../../models'

import {SDiagramItem} from './DiagramItem.styled'


type Props = TDiagramItemParams & {
  content: TDiagramData

}

export const DiagramItem: FC<Props> = ({content, index, step}) => {
  const {selectedItem, setSelectedItem,data} = useContext(DiagramContext)!;
  const onClickHandler = () => {
    setSelectedItem(content)
  }

  return <SDiagramItem index={index} step={step} onClick={onClickHandler} totalLength={data.length} selectedItemId={selectedItem?.id} active={selectedItem?.id === content.id} label={content.data.circleLabel}>
    <p>{content.id }</p>
    <div>{content.data.circleLabel}</div>
  </SDiagramItem>
}
