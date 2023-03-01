import styled from "styled-components";

export const SWrapper = styled.div`
	overflow: hidden;
	margin: 0 auto;
	display: grid;
	grid-template-rows: 4fr 10fr 1fr 4fr;
	height: 100vh;
	max-width: 1440px;
	border: 1px solid ${({theme}) => theme.line_color};
	padding:1rem 0 ;

	&:before {
		content: "";
		z-index: -1;
		background: ${({theme}) => theme.line_color};
		height: 1px;
		width: 100%;
		position: absolute;
		top: 50%;
		left: 0;
		transform: rotate(180deg);
	}

	&:after {
		content: "";
		z-index: -1;
		background: ${({theme}) => theme.line_color};
		width: 1px;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 50%;
	}

	@media (max-width: 1048px) {
		&::before,
		&::after {
			display: none;
		}

		grid-template-rows: 1fr 2fr 2fr;
	}
`;
