export default {
	state() {
		return {
			shop: {
				currency: 'NOK',
				cart: [],
				products: null,
				subTotal: 0,
			},
		}
	},

	getters: {
		getProducts(state) {
			return state.shop.products;
		},

		getAddedProducts(state) {
			return state.shop.cart;
		},

		getCurrency(state) {
			return state.shop.currency;
		},

		getTotalAmount(state) {
			return state.shop.subTotal;
		}
	},

	mutations: {
		handleProducts(state, result) {
			state.shop.products = result;
		},

		// Adding the products to the cart
		addToCart(state, product) {

			// Checking the product already exist in the cart first, If it finds only increasing the count otherwise it push the product to the cart
			// Checking the product exist by finding the index of the product and compare in cart products
			const foundIndex = state.shop.cart.findIndex ( ({_id}) => _id === product._id );
			
			if(foundIndex !== -1) {
				state.shop.cart[foundIndex].count += 1;
			}
			 else {
				 	const productWithCount = { 
						...product, 
						count: 1 
					};
					
					state.shop.cart.push(productWithCount);
				}
		},

		// Calculating total price 
		totalPrice(state) { 
			state.shop.subTotal = state.shop.cart.reduce ((price, cartItem) => {
				return price + (cartItem.price * cartItem.count);
			} ,0);
			
		},

		// Remove the product from the cart
		decreasingCountFromCart(state, index) {
			if(state.shop.cart[index].count === 1) {
				state.shop.cart.splice(index, 1); 
			}  else {
				state.shop.cart[index].count -= 1;
			}	
		},

		deleteProductFromCart(state, index) {
			state.shop.cart.splice(index, 1);
		}
	},

	actions: {
		setResult({ state, commit }, result) {			
			commit('handleProducts', result);
		},

		addToCart({state, commit}, product) {
			commit('addToCart', product);
			commit('totalPrice');
		},

		decreasingCountFromCart({state, commit}, index) {
			commit('decreasingCountFromCart', index);
			commit('totalPrice');
		},

		deleteProductFromCart({state, commit}, index) {
			commit('deleteProductFromCart', index);
			commit('totalPrice');
		},
	}
}

