import useMediaQuery from "../../../../hooks/useMediaQuery";
import {SDecorationLine, STitleText, STitleWrapper} from "./Title.styled";

const Title = () => {
	const isDesktop = useMediaQuery("(min-width: 1048px)");

	return (
		<STitleWrapper>
			{isDesktop && <SDecorationLine />}
			<STitleText>Исторические даты</STitleText>
		</STitleWrapper>
	);
};

export default Title;
