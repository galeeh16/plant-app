import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import StarRatings from "react-star-ratings";
import { addToCart } from "../../store/actions/cartAction";

const PlantSlider = ({ data }) => {
	const settings = {
		className: "plant-slider",
		dots: false,
		infinite: false,
		speed: 500,
		arrows: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		variableWidth: true,
	};

	const dispatch = useDispatch();

	const numberFormat = (number) => {
		return new Intl.NumberFormat("id-ID", {
			maximumSignificantDigits: 3,
			currency: "INA",
		}).format(number);
	};

	const addCart = (plant) => {
		dispatch(addToCart(1));
	};

	const carouselData = data.map((plant) => {
		return (
			<div
				key={plant.id}
				style={{ width: "15rem", borderRadius: "8px" }}
				className="box-plant"
			>
				<div
					style={{
						height: "200px",
						position: "relative",
					}}
				>
					<img
						variant="top"
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
						}}
						alt={plant.title}
						src={plant.imageUrl}
					/>

					{plant.isInLike ? (
						<div
							style={{
								position: "absolute",
								bottom: "-20px",
								right: "10px",
								zIndex: "2",
								fontSize: "18px",
								cursor: "pointer",
								width: "38px",
								height: "38px",
								lineHeight: "42px",
								background: "white",
								borderRadius: "50%",
								textAlign: "center",
							}}
							className="border-0 shadow-sm"
						>
							<i className="bi bi-heart-fill text-danger"></i>
						</div>
					) : (
						<div
							style={{
								position: "absolute",
								bottom: "-20px",
								right: "10px",
								zIndex: "2",
								fontSize: "18px",
								cursor: "pointer",
								width: "38px",
								height: "38px",
								lineHeight: "42px",
								background: "white",
								borderRadius: "50%",
								textAlign: "center",
							}}
							className="border-0 shadow-sm"
						>
							<i className="bi bi-heart text-danger"></i>
						</div>
					)}
				</div>
				<Card.Body className="px-lg-3 pb-lg-3">
					<div className="title">{plant.title}</div>

					<span>
						<StarRatings
							rating={plant.rating}
							starRatedColor="#fcad03"
							starDimension="16px"
							starSpacing="0px"
							numberOfStars={5}
							name="rating"
						/>
					</span>
					<div className="d-flex justify-content-between mt-3">
						<div>
							<div
								className="text-secondary"
								style={{ fontSize: "13px" }}
							>
								Harga
							</div>
							<div
								className="text-dark"
								style={{
									fontWeight: 500,
								}}
							>
								{numberFormat(plant.price)}
							</div>
						</div>

						{plant.isInCart ? (
							<button
								type="button"
								className="btn btn-danger btn-sm"
								style={{ alignSelf: "self-end" }}
							>
								Remove Cart
							</button>
						) : (
							<button
								type="button"
								className="btn btn-outline-dark btn-sm"
								style={{ alignSelf: "self-end" }}
								onClick={() => addCart(plant)}
							>
								Add to Cart
							</button>
						)}
					</div>
				</Card.Body>
			</div>
		);
	});

	return <Slider {...settings}>{carouselData}</Slider>;
};

export default PlantSlider;
