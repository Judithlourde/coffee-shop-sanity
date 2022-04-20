<template>
	<main>
		<About />
		<div v-if="loadingStatus">...</div>

		<div v-else class="allProducts" >
			<div class="allProducts__product" v-for="product in products" :key="product._id">
				<div>
					<router-link :to="{ name: 'productPage', params: { productSlug: product.slug.current }}">	
						<img :src="product.image.asset.url" :alt="product.image.caption">
					</router-link>

					<h3>{{ product.title }}</h3>
					<h4>Kr. {{ product.price }}</h4>
					<p>Flavoured Instant Coffee</p>
					<!-- When the add to basket clicked this method calls with the selected product -->
					<button @click="addProductToCart(product)">ADD TO BASKET </button>	
				</div>
			</div>
	
			<Header
				:addedProduct="addedProducts"
			/>			
		</div>	
	</main>
	
</template>

<script>
	import About from '../components/About.vue'
	import Header from '../components/Header.vue'

	import sanityClient from '@sanity/client';

	const sanity = sanityClient({
		projectId: 'i90q2xi5', 
		dataset: 'production',
		apiVersion: '2022-04-04',	
		useCdn: 'false'				
	});

	export default {
		components: {
			About,
			Header
		},
		
		data() {
			return {
				}
		},
		
		created() { 
			// Calling the fetchProducts when the page created because it is a async function
			this.$store.dispatch('fetchProducts');
			/* Head tags */

			const head = {
				title: 'Front page',
				// description: 
			}

			document.title = 'Instant Coffee';

        },

		computed: {
			products() {
				return this.$store.getters.getProducts;
			},

			loadingStatus() {
				return this.$store.getters.getLoadingStatus;
			},
		},

		methods: {
			addProductToCart(product) {
				this.$store.dispatch('addToCart', product);
			}
		}
	}
</script>

<style>
	main {
		position: relative;
		top: 120px;
	}

	.allProducts {
		display: grid;
		grid-template-columns: 1fr;
	}

	.allProducts__product div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		color: inherit;
		padding: 20px;
	}

	.allProducts__product div:hover {
		padding: 0px;
	}

	.allProducts__product div > * {
		padding: var(--padding-small);
	}

	.allProducts__product div h3 {
		z-index: 1;
		color: var(--white);
        background-color: var(--black);
        padding: var(--padding-small);
	}

	.allProducts__product div button {
		color: var(--white);
        background-color: var(--highlight);
        padding: var(--padding-small);
	}

	@media screen and (min-width: 968px) { 
        .allProducts {
			margin: 0 100px;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
		}

		.allProducts__product div {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin: 20px 0;
		}
    }
</style>

