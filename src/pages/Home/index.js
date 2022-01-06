import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/cartAction";
import { Plant, CarouselSlider } from "../../components";
import Banner from "../../assets/images/banner.webp";
import Banner2 from "../../assets/images/banner2.webp";
import { Link } from "react-router-dom";

const Home = () => {
	const dispatch = useDispatch();

	const carouselData = [
		{
			id: 1,
			image: Banner2,
		},
		{
			id: 2,
			image: Banner,
		},
	];

	return (
		<Container className="mt-100">
			{/* <h2>HOME</h2>
			<button onClick={add} className="btn btn-primary mb-4">
				Add to cart
			</button> */}
			{/* <img
				src={Banner}
				width="100%"
				style={{ borderRadius: "6px", marginBottom: "80px" }}
			/> */}

			<CarouselSlider data={carouselData} />

			<div className="mb-5"></div>

			<h3 className="mb-4">
				Trending{" "}
				<Link
					to="/plant/trending"
					style={{
						fontSize: "16px",
						marginLeft: "1rem",
					}}
					className="text-green"
				>
					Lihat semua
					<i className="bi bi-arrow-right ms-2"></i>
				</Link>
			</h3>
			<Plant />
		</Container>
	);
};

export default Home;
