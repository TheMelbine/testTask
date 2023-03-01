import {SButtonWrapper, SDiagramControlButton, SPagination, SSwitchPanelWrapper} from "./SwitchPanel.styled";
import {useContext, useMemo} from "react";
import { DiagramContext } from "../../context";


const SwitchPanel = () => {
  const {data, selectedItem, setSelectedItem} = useContext(DiagramContext)!

  const selectedItemIndex = useMemo(() =>{
    if(!selectedItem){
      return 0
    }
    return data.findIndex((item) => item.id === selectedItem.id)
  },[data, selectedItem])
  const onSelectedNext = () => {

    if (selectedItem !== null) {

      if (selectedItemIndex !== -1) {

        setSelectedItem(data[selectedItemIndex + 1 >= data.length ? 0 : selectedItemIndex + 1])
      }
    } else {
      setSelectedItem(data[1])
    }

  }

  const onSelectedPrev = () => {
    if (selectedItem !== null) {
      if (selectedItemIndex !== -1) {
        setSelectedItem(data[selectedItemIndex <= 0 ? data.length - 1 : selectedItemIndex - 1])
      }
    } else {
      setSelectedItem(data[data.length - 1])
    }
  }

  const getCountNumber = (number: number) =>{
    return number >= 10 ? number : `0${number}`
  }


  return (
    <>
      <SSwitchPanelWrapper>
        <SPagination>{`${getCountNumber(selectedItemIndex + 1)} / ${getCountNumber(data.length)} `}</SPagination>
        <SButtonWrapper>
          <SDiagramControlButton onClick={onSelectedPrev}>{"<"}</SDiagramControlButton>
          <SDiagramControlButton onClick={onSelectedNext}>{">"}</SDiagramControlButton>
        </SButtonWrapper>
      </SSwitchPanelWrapper>
    </>
  )
}

export default SwitchPanel