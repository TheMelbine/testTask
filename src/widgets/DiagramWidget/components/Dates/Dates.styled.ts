import styled from "styled-components";

export const DateWrapper = styled.div`
	top: calc(480px - 160px / 2);
	left: 0;
	position: absolute;
	align-self: center;
	display: flex;
	gap: 1rem;
	width: 100%;
	display: flex;
	justify-content: center;

	@media (max-width: 1048px) {
		position: relative;
		top: 0;
	}
`;

export const SDiagramDate = styled.div<{endDate?: boolean}>`
	color: ${({endDate}) => (!endDate ? "#5D5FEF" : "#EF5DA8")};
	font-family: "PT Sans", serif;
	font-style: normal;
	font-weight: 700;
	font-size: 200px;
	line-height: 160px;

	@media (max-width: 1040px) {
		font-size: 90px;
	}
`;
