<template>
	<main>
		<About />
		<div v-if="loading">...</div>

		<div v-else id="products" class="allProducts" >
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
	import query from '../groq/home.groq?raw';
	import viewMixin from '../mixins/viewMixin.js';

	import About from '../components/About.vue'
	import Header from '../components/Header.vue'

	export default {
		mixins: [viewMixin],
		
		components: {
			About,
			Header
		},
	
		async created() { 
            await this.sanityFetch(query, {
				type: 'product' 
			});

			/* Head tags */
			this.metaTags({
				title: `Judith's Coffee`,
			})
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
		padding: var(--padding-small);
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
        padding: var(--padding-xsmall);
	}

	.allProducts__product div button {
		color: var(--white);
        background-color: var(--highlight);
        padding: var(--padding-xsmall) var(--padding-small);
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
			margin: var(--margin-small) 0;
		}
    }
</style>

