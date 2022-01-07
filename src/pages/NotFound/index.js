import { Link } from "react-router-dom";
import NotFoundImg from "../../assets/images/404.svg";

const NotFound = () => {
	return (
		<div
			className="mt-100 container text-center"
			style={{ height: "calc(100vh - 274px)" }}
		>
			<img
				src={NotFoundImg}
				alt="Not Found"
				className="mt-5"
				style={{ width: "100%", maxHeight: "300px" }}
			/>

			<h5
				className="mt-5 text-muted"
				style={{ fontWeight: "100 !important" }}
			>
				Halaman tidak ditemukan :(
			</h5>

			<Link
				to="/"
				type="button"
				className="btn btn-outline-dark shadow-sm mt-5 px-4"
			>
				<i className="bi bi-arrow-left me-2"></i>
				Kembali ke beranda
			</Link>
		</div>
	);
};

export default NotFound;
