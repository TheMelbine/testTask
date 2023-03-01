import {DateWrapper, SDiagramDate} from "./Dates.styled";
import {useContext, useEffect, useState} from "react";
import {DiagramContext} from "../../context";
import {TDiagramData} from "../../models";
import CountUp from "react-countup";

const Dates = () => {
	const [currElement, setCurrElement] = useState<TDiagramData | null>(null);
	const [startCoords, setStartCoords] = useState<[number, number] | null>(null);
	const [endCoords, setEndCoords] = useState<[number, number] | null>(null);
	const {selectedItem} = useContext(DiagramContext)!;

	useEffect(() => {
		if (selectedItem) {
			if (!currElement) {
				setCurrElement(selectedItem);
				setStartCoords([selectedItem.data.dates[0], selectedItem.data.dates[0]]);
				setEndCoords([selectedItem.data.dates[1], selectedItem.data.dates[1]]);
			}
			if (currElement && startCoords) {
				const prevDates = currElement.data.dates;
				const nextDates = selectedItem.data.dates;

				const newStart: [number, number] =
					currElement.id < selectedItem.id ? [prevDates[0], nextDates[0]] : [nextDates[1], nextDates[0]];

				const newEnd: [number, number] =
					currElement.id > selectedItem.id ? [prevDates[1], nextDates[1]] : [nextDates[0], nextDates[1]];

				setStartCoords(newStart[0] === newEnd[1] ? [prevDates[0], nextDates[0]] : newStart);
				setEndCoords(newStart[0] === newEnd[1] ? newEnd : [prevDates[1], nextDates[1]]);
				setCurrElement(selectedItem);
			}
		}
	}, [selectedItem]);

	if (!selectedItem) {
		return <></>;
	}

	return (
		<DateWrapper>
			<SDiagramDate>{startCoords && <CountUp start={startCoords[0]} end={startCoords[1]} />}</SDiagramDate>
			<SDiagramDate endDate>{endCoords && <CountUp start={endCoords[0]} end={endCoords[1]} />}</SDiagramDate>
		</DateWrapper>
	);
};

export default Dates;
