import { useSelector } from "react-redux";
import PlantSlider from "../PlantSlider";

const Plant = ({ imageUrl }) => {
	const { data } = useSelector((state) => state.cartReducer);

	return (
		<>
			{/* <div
				className="d-flex flex-wrap justify-content-between"
				style={{ gap: "2rem" }}
			> */}

			{/* </div> */}
			<PlantSlider data={data} />
		</>
	);
};

export default Plant;
