import styled from "styled-components";

import {TDiagramItemParams} from "../../../models";

export const SDiagramItem = styled.div<TDiagramItemParams & {totalLength: number; selectedItemId: number; label: string}>`
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.2s ease-in-out;
	position: absolute;
	width: ${(props) => (props.active ? "56px" : "6px")};
	height: ${(props) => (props.active ? "56px" : "6px")};
	margin: ${(props) => (props.active ? "-28px" : "-3px")};
	border-radius: 50%;
	top: 50%;
	left: 50%;
	border: ${(props) => (props.active ? "1px solid black" : "none")};
	background-color: ${({theme, active}) => (active ? "#F4F5F9" : theme.primary_text_color)};
	cursor: pointer;
	transform: ${(props) =>
		`rotate(${240 + (props.index + 1) * props.step}deg) translate(calc(${
			props.theme.diagram_width
		} / 2)) rotate(-${240 + (props.index + 1) * props.step}deg)`};
	color: ${(props) => (props.active ? props.theme.primary_text_color : "transparent")};

	&:hover {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		color: ${({theme})=> theme.primary_text_color};
		width: 56px;
		height: 56px;
		margin: -28px;
		background: #F4F5F9;
		border: 1px solid black;
	}
		
	& p {
		
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		line-height: 30px;
		transition: transform 2s ease-in-out;
		transform: ${({step, totalLength, selectedItemId}) =>
			`rotate(-${Math.abs((totalLength - selectedItemId) * step) + step}deg)`};
		
		&:after{
			font-family: 'PT Sans',serif;
			font-style: normal;
			font-weight: 700;
			font-size: 20px;
			line-height: 30px;
			content: '${(props) => props.label}';
			position: absolute;
			left: 50px;
		}
		
	}

	& div {
		display: none;
	}
`;
