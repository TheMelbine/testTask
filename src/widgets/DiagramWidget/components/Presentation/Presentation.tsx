import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SwiperStyle.scss";
import {Navigation, Pagination} from "swiper";
import {useContext} from "react";
import {DiagramContext} from "../../context";
import {
	SPaginationButton,
	SPresentation,
	SPresentationItem,
	SPresentationItemContent,
	SPresentationItemTitle,
} from "./Presentation.styled";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import SwitchPanel from "../SwitchPanel/SwitchPanel";

const Presentation = () => {
	const isDesktop = useMediaQuery("(min-width: 1048px)");
	const {selectedItem} = useContext(DiagramContext)!;

	return (
		<SPresentation>
			{isDesktop && <SPaginationButton className="prev">{"<"}</SPaginationButton>}

			<Swiper
				style={{width: "100%"}}
				navigation={
					isDesktop
						? {
								prevEl: ".prev",
								nextEl: ".next",
						  }
						: undefined
				}
				modules={[isDesktop ? Navigation : Pagination]}
				spaceBetween={30}
				slidesPerView={isDesktop ? 3 : 2}>
				{selectedItem.data.posts.map((item, index) => (
					<SwiperSlide key={`__presentation-${index}`}>
						<SPresentationItem>
							<SPresentationItemTitle>{item.title}</SPresentationItemTitle>
							<SPresentationItemContent>{item.description}</SPresentationItemContent>
						</SPresentationItem>
					</SwiperSlide>
				))}
			</Swiper>
			{isDesktop ? <SPaginationButton className="next">{">"}</SPaginationButton> : <SwitchPanel />}
		</SPresentation>
	);
};

export default Presentation;
