import styled from "styled-components";

type Props = {
	newDeg: number;
};

export const SDiagram = styled.div<Props>`
	z-index: 2;
	position: absolute;
	left: calc(50% - ${({theme}) => theme.diagram_width} / 2);
	top: calc(480px - ${({theme}) => theme.diagram_width} / 2);
	width: ${({theme}) => theme.diagram_width};
	height: ${({theme}) => theme.diagram_width};
	border: 2px solid ${({theme}) => theme.line_color};
	border-radius: 50%;
	transform: rotate(${({newDeg}) => newDeg}deg);
	transition: transform 2s ease-in-out;
`;
