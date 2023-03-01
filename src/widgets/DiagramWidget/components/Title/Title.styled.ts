import styled from "styled-components";

export const SDecorationLine = styled.div`
  width: 5px;
  height: 120px;
  background: linear-gradient(180deg, #3877EE -5%, #EF5DA8 85%);
`

export const STitleWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');
  font-family: 'PT Sans', sans-serif;
  display: flex;
  align-items: center;
`

export const STitleText = styled.p`
  color: ${({theme})=> theme.primary_text_color};
  padding:40px;
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;
  width:300px;

	@media (max-width: 1048px) {
    font-size: 34px;
    width: 100px;
    margin: 0;
    padding:20px;
  }
`