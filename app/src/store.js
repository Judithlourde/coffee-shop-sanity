import sanityClient from '@sanity/client';

const sanity = sanityClient({
	projectId: 'i90q2xi5', 
	dataset: 'production',
	apiVersion: '2022-04-04',	
	useCdn: 'false'				
});

export default {
	state() {
		return {
			shop: {
				currency: 'NOK',
				cart: [],
				count: 0,
				products: null
			},
			loading: true,
		}
	},

	getters: {
		getLoadingStatus(state) {
			return state.loading;
		},

		getProducts(state) {
			return state.shop.products;
		},

		getAddedProducts(state) {
			return state.shop.cart;
		},

		getCartLength(state) {
			return state.shop.count;
		},

		getCurrency(state) {
			return state.shop.currency;
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
			if ( state.shop.cart.findIndex ( ({_id}) => _id === product._id ) !== -1 ) {
				state.shop.cart.forEach(cartItem => {
					if( cartItem.title === product.title ) {
						state.shop.count ++;
					}
				});
			}
			 else {
					state.shop.cart.push(product);
					state.shop.count ++;
				}
			console.log(product.title);
			console.log(state.shop.cart)
		},

		// Remove the product from the cart
		deleteFromCart(state, cartProduct) {
			const productId = state.shop.cart.findIndex(product => product._id === cartProduct._id);  
      		state.shop.cart.splice(productId, 1); 
			state.shop.count --;		// Decreasing the count of products
			console.log(state.shop.cart)
		},

		// Increasing the product count
		increasingCount(state, product) {
			// state.shop.cart.forEach(item => {
			// 	if(item._id === product._id) {
				       
			// 	}
			// });
		}
	},

	actions: {
		async fetchProducts({ state, commit }) {
			const query = `
				*[_type == $type] {
					...,
					image {
						...,
						asset-> { url }
					}
				}		
			`
			const params = {
				type: 'product'
			};

			const result = await sanity.fetch(query, params);
			state.loading = false;
			commit('handleProducts', result);
		},

		addToCart({state, commit}, product) {
			commit('addToCart', product);
			commit('increasingCount', product)
		},

		deleteFromCart({state, commit}, cartProduct) {
			commit('deleteFromCart', cartProduct);
			commit('decreasingCount', cartProduct)
		}
	}
}

