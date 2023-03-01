import styled from "styled-components";

export const SSwitchPanelWrapper = styled.div`
	color: ${({theme}) => theme.primary_text_color};
	@import url("https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap");
	margin-left: 80px;
	width: 120px;
	display: flex;
	flex-direction: column;


	
	@media (max-width: 1048px) {
		
		margin: 0;
		align-items: center;
	}
`;

export const SPagination = styled.p`
	margin-bottom: 20px;
	font-family: "PT Sans", serif;
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 18px;
	display: flex;
	justify-content: center;

	@media (max-width: 1048px) {
		margin-bottom: 10px;
	}
`;

export const SButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap:10px;
`;

export const SDiagramControlButton = styled.button`
	color: ${({theme}) => theme.primary_text_color};
	background: #f4f5f9;
	font-family: "PT Sans", sans-serif;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	border: 1px solid rgba(66, 86, 122, 0.5);
  transition:  .5s;
	cursor: pointer;
	&:hover {
		border-color: rgb(66, 86, 122)
	}

	@media (max-width: 1048px) {
		width:40px;
		height: 40px;
	}
`;
