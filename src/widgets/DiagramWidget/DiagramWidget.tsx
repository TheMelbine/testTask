import {FC, useState} from "react";

//types
import {TDiagramContext, TDiagramData} from "./models";

//context
import {DiagramContext} from "./context";

//components
import {SwitchPanel, Title, Dates, Wrapper, Diagram} from "./components";
import Presentation from "./components/Presentation/Presentation";
import useMediaQuery from "../../hooks/useMediaQuery";

type Props = {
	initialValues: TDiagramData[];
	defaultSelectedIndex?: TDiagramData["id"];
};

const DiagramWidget: FC<Props> = ({initialValues}) => {
	const [contextData, setContextData] = useState<Pick<TDiagramContext, "data" | "selectedItem">>({
		data: initialValues,
		selectedItem: initialValues[0],
	});

	const isDesktop = useMediaQuery("(min-width: 1048px)");

	const onSelectedItemChange = (selectedItem: TDiagramData) => {
		setContextData((prevState) => ({...prevState, selectedItem}));
	};
	return (
		<DiagramContext.Provider value={{...contextData, setSelectedItem: onSelectedItemChange}}>
			<Wrapper>
				<Title />
				{isDesktop && (
					<div>
						<Diagram />
					</div>
				)}
				<Dates />
				{isDesktop && <SwitchPanel />}
				<Presentation />
			</Wrapper>
		</DiagramContext.Provider>
	);
};

export default DiagramWidget;
