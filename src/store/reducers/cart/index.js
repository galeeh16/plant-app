import { ADD_TO_CART } from "../../actions/cartAction";

const initialState = {
	data: [
		{
			id: 1,
			title: "Kuping Gajah",
			isInCart: true,
			isInLike: false,
			rating: 4.42,
			imageUrl:
				"https://images.unsplash.com/photo-1474557157379-8aa74a6ef541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxvcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=80",
			price: 8000,
		},
		{
			id: 2,
			title: "Monstera DK Var",
			isInCart: false,
			isInLike: true,
			rating: 4.0,
			imageUrl:
				"https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
			price: 34000,
		},
		{
			id: 3,
			title: "Suplir",
			isInCart: false,
			isInLike: false,
			rating: 4.8,
			imageUrl:
				"https://images.unsplash.com/photo-1517848568502-d03fa74e1964?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
			price: 134000,
		},
		{
			id: 4,
			title: "Mawar Hitam",
			isInCart: false,
			isInLike: false,
			rating: 3.42,
			imageUrl:
				"https://images.unsplash.com/photo-1527195694714-9b939fac3432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=300&q=80",
			price: 20000,
		},
		{
			id: 5,
			title: "Mawar Hitam",
			isInCart: false,
			isInLike: false,
			rating: 2.92,
			imageUrl:
				"https://images.unsplash.com/photo-1474557157379-8aa74a6ef541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxvcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=80",
			price: 20000,
		},
		{
			id: 6,
			title: "Mawar Hitam",
			isInCart: false,
			isInLike: false,
			rating: 3.42,
			imageUrl:
				"https://images.unsplash.com/photo-1517848568502-d03fa74e1964?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
			price: 20000,
		},
		{
			id: 7,
			title: "Kuping Gajah",
			isInCart: true,
			isInLike: false,
			rating: 4.42,
			imageUrl:
				"https://images.unsplash.com/photo-1474557157379-8aa74a6ef541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxvcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=80",
			price: 8000,
		},
		{
			id: 8,
			title: "Monstera DK Var",
			isInCart: false,
			isInLike: true,
			rating: 4.0,
			imageUrl:
				"https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
			price: 34000,
		},
		{
			id: 9,
			title: "Suplir",
			isInCart: false,
			isInLike: false,
			rating: 4.8,
			imageUrl:
				"https://images.unsplash.com/photo-1517848568502-d03fa74e1964?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
			price: 134000,
		},
		{
			id: 10,
			title: "Mawar Hitam",
			isInCart: false,
			isInLike: false,
			rating: 3.42,
			imageUrl:
				"https://images.unsplash.com/photo-1527195694714-9b939fac3432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=300&q=80",
			price: 20000,
		},
	],
	totalItem: 0,
};

const cartReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ADD_TO_CART:
			return {
				...state,
				totalItem: state.totalItem + parseInt(payload),
			};
		default:
			return state;
	}
};

export default cartReducer;
