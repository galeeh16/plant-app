import { Navbar, Container, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
	const { totalItem } = useSelector((state) => state.cartReducer);

	return (
		<Navbar
			bg="white"
			variant="light"
			className="pt-0 pb-0"
			expand="lg"
			collapseOnSelect
			fixed="top"
		>
			<Container>
				<Navbar.Brand
					href="/"
					style={{
						fontFamily: "Cookie, cursive",
						fontSize: "38px",
					}}
					className="text-success"
				>
					Plant App
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" />

				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto d-flex" style={{ gap: "2.5rem" }}>
						<LinkContainer to="/">
							<Nav.Link className="py-4 nav-link ms-lg-5">
								Shop
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/blogs">
							<Nav.Link className="py-4 nav-link">Blogs</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/plant-recipe">
							<Nav.Link className="py-4 nav-link">
								Plant Recipe
							</Nav.Link>
						</LinkContainer>
					</Nav>

					<Nav
						className="d-flex align-items-center ms-auto"
						style={{ gap: "10px" }}
					>
						<Nav.Link href="#deets" className="py-4 ms-lg-2">
							<span
								style={{
									position: "relative",
									display: "inline-block",
								}}
							>
								<i
									className="bi bi-cart"
									style={{ fontSize: "20px" }}
								></i>
								{totalItem && totalItem > 0 ? (
									<span
										className="bg-danger rounded-circle text-white"
										style={{
											fontSize: "8px",
											display: "inline-block",
											padding: "2px",
											width: "14px",
											height: "14px",
											lineHeight: "13px",
											position: "absolute",
											bottom: "0px",
											left: "10px",
											textAlign: "center",
										}}
									>
										{totalItem}
									</span>
								) : (
									""
								)}
							</span>
						</Nav.Link>
						<Nav.Link className="py-4 ms-lg-2">
							<i
								className="bi bi-heart"
								style={{ fontSize: "20px" }}
							></i>
						</Nav.Link>

						<div className="dropdown ms-lg-2">
							<div
								className="border border-4 rounded-circle dropdown-toggle no-arrow"
								data-bs-toggle="dropdown"
								aria-expanded="false"
								id="dropdownMenuButton1"
								style={{ cursor: "pointer" }}
							>
								<img
									src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=100"
									style={{
										width: "35px",
										height: "35px",
									}}
									className="rounded-circle"
								/>
							</div>
							<ul
								className="dropdown-menu dropdown-menu-end shadow border-0"
								aria-labelledby="dropdownMenuButton1"
							>
								<li>
									<a
										className="dropdown-item d-flex justify-content-between"
										href="#"
									>
										Profile
									</a>
								</li>

								<li>
									<a
										className="dropdown-item d-flex justify-content-between"
										href="#"
									>
										Sign Out
									</a>
								</li>
							</ul>
						</div>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
