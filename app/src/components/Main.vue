<template>
	<main>
		<About />
		<div v-if="loading">...</div>

		<div v-else class="allProducts" >
			<div class="allProducts__product" v-for="product in result" :key="product._id">
				<router-link :to="{ name: 'productPage', params: { productSlug: product.slug.current }}">	
					<img :src="product.image.asset.url" :alt="product.image.caption">
					<h3>{{ product.title }}</h3>
					<h4>Kr. {{ product.price }}</h4>
					<p>Flavoured Instant Coffee</p>
					<button>ADD TO BASKET</button>
				</router-link>
			</div>		
		</div>
	</main>
	
</template>

<script>
	import About from '../components/About.vue'
	import sanityClient from '@sanity/client';

	const sanity = sanityClient({
		projectId: 'i90q2xi5', 
		dataset: 'production',
		apiVersion: '2022-04-04',	
		useCdn: 'false'				
	});

	export default {
		components: {
			About
		},
		
		data() {
			return {
					loading: true,
					result: null
				}
		},

		async created() {
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

			this.result = await sanity.fetch(query, params);
			console.log(this.result)
			this.loading = false;

			/* Head tags */

			const head = {
				title: 'Front page',
				// description: 
			}

			document.title = 'Instant Coffee';

		},
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

	.allProducts__product a {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		color: inherit;
	}

	.allProducts__product a > * {
		padding: var(--padding-small);
	}

	.allProducts__product a h3 {
		z-index: 1;
		color: var(--white);
        background-color: var(--black);
        /* padding: var(--padding-small); */
	}

	.allProducts__product a button {
		color: var(--white);
        background-color: var(--highlight);
        /* padding: var(--padding-small); */
	}

	@media screen and (min-width: 968px) { 
        .allProducts {
			margin: 0 100px;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
		}

		.allProducts__product a {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin: 20px 0;
		}
    }
</style>

