import { Footer, Header } from "./components";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Home, Blog, PlantRecipe, NotFound } from "./pages";

export default function App() {
	return (
		<>
			<Header />
			<div className="mb-5"></div>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/blogs" element={<Blog />} />
				<Route path="/plant-recipe" element={<PlantRecipe />} />
				<Route path="*" element={<NotFound />} />
			</Routes>

			<Footer />
		</>
	);
}
