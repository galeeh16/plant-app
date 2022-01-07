import Slider from "react-slick";

const CarouselSlider = ({ data }) => {
	const settings = {
		dots: false,
		autoplay: true,
		autoplaySpeed: 3000,
		infinite: true,
		speed: 500,
		arrows: false,
	};

	const carouselData = data.map((item) => {
		return (
			<div
				key={item.id}
				style={{ borderRadius: "6px", overflow: "hidden" }}
			>
				<img
					src={item.image}
					alt={item.img}
					style={{
						width: "100%",
						height: "344px",
						objectFit: "cover",
					}}
				/>
			</div>
		);
	});

	return <Slider {...settings}>{carouselData}</Slider>;
};

export default CarouselSlider;
