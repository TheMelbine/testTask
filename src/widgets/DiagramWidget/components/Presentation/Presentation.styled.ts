import styled from "styled-components";

export const SPresentation = styled.div`
	padding: 60px 80px;
	overflow: hidden;
	display: flex;
	gap: 40px;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 1048px) {
		width: 100%;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		padding: 0 20px;
	}
`;

export const SPresentationItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;
export const SPresentationItemTitle = styled.p`
	color: #3877ee;
	font-family: "Bebas Neue", cursive;
	font-style: normal;
	font-weight: 400;
	font-size: 25px;
	line-height: 120%;
`;
export const SPresentationItemContent = styled.p`
  color: #42567a;
  font-family: "PT Sans", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: justify;

  @media (max-width: 1048px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const SPaginationButton = styled.button`
	border: none;
	width: 55px;
	height: 50px;
	font-size: 15px;
	background: #ffffff;
	box-shadow: 0px 0px 15px rgba(56, 119, 238, 0.1);
	border-radius: 50%;
	display: block;
	cursor: pointer;
`;
