import Home from './views/Home.vue';
import ProductPage from './views/ProductPage.vue'

export default [
	{ 
		name: 'productPage', 
		path:'/:productSlug',	
		component: ProductPage 
	},

	{ 
		name: 'home', 
		path: '/', 
		component: Home 
	}

];
