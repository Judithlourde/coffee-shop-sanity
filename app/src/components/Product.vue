<template>
	<section class="test">
		<div v-for="product in result" :key="product._id" class="product">
			<div class="product__image">
				<router-link :to="{ name: 'home' }">
					<img src="/svg/back-arrow.svg" alt="go to back home arrow">
					<h3>Back to Products</h3>
				</router-link>	

				<img :src="product.image.asset.url" :alt="product.image.caption">
			</div>

			<div class="product__description">
				<h1>{{ product.title }}</h1>

				<div>
					<h3>Flavoured Instant Coffee</h3>
					<p>{{ product.description }}</p>
				</div>
				
				<div>
					<h3>INGREDIENTS</h3>
					<p>{{ product.ingredients }}</p>
				</div>
				
				<button>ADD TO BASKET</button>
			</div>
		</div>

		<div class="benefits-icons">
			<div>
				<img src="/images/100-percent-arabica-coffee.png" alt="100-percent-arabica coffee icon">
				<p>100% Arabica Coffee</p>
			</div>
			
			<div>
				<img src="/images/no-added-sugar.png" alt="No added sugar icon">
				<p>No added sugar</p>
			</div>
			
			<div>
				<img src="/images/lactose-gluten-free.png" alt="Lactose and gluten free icon">
				<p>Lactose & gluten free</p>
			</div>
			
			<div>
				<img src="/images/vegan-friendly.png" alt="Vegan friendly icon">
				<p>Vegan friendly</p>
			</div>
			
			<div>
				<img src="/images/low-calories-a-cup.png" alt="Low calories icon">
				<p>Only 4 calories a cup</p>
			</div>
		</div>
	</section>
</template>

<script>
    import sanityClient from '@sanity/client';

	const sanity = sanityClient({
		projectId: 'i90q2xi5', 
		dataset: 'production',
		apiVersion: '2022-04-04',	
		useCdn: 'false'				
	});

	export default {
		props: {
            propertySlug: {
                type: String
            },
        },
		
		data() {
			return {
					loading: true,
					result: null
				}
		},

		async created() {
			const query = `
				*[slug.current == $slug] {
                    ...,
                    image {
                        ...,
                        asset-> { url }
                    },
                    reviews[] {
                        ...,
                        customer-> {
                            ...,
                            image {
                                asset-> { url }
                            }
                        }
                    }
                }
			`			
			const params = { 
                slug: this.$route.params.productSlug 
            };

			this.result = await sanity.fetch(query, params);
            console.log(this.result)
			this.loading = false;

			/* Head tags */
			document.title = this.result[0].title
			
		},
	}
</script>

<style>
	.product {
		position: relative;
		top: 100px;
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
	}

	.product__image {
		display: flex;
		flex-direction: column;
	}

	.product__image a {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		text-decoration: none;
		color: inherit;
		gap: 10px;
		margin: 20px;
	}

	.product__image a img {
		width: 30px;
	}

	.product__description {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		margin: 0 20px;
	}

	.product__description h1 {
		z-index: 1;
		color: var(--white);
        background-color: var(--black);
		padding: var(--padding-small);
		margin-bottom: var(--bottom-small);
	}

	.product__description h3,
	.product__description p {
		margin-bottom: var(--bottom-xsmall);
	}

	.product__description button {
		color: var(--white);
        background-color: var(--highlight);
        padding: var(--padding-small);
	}

	.benefits-icons {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 10px;
		margin: 100px 40px;
	}

	.benefits-icons div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.benefits-icons img {
		padding: 30px;
		width: 100%;
	}

	@media screen and (min-width: 968px) {
		.product {
			grid-template-columns: repeat(2, 1fr);
			top: 80px;
		}

		.product__image {
			margin: 20px;	
		}

		.product__image a {
			display: flex;
			justify-content: center;
		}

		.product__image img {
			width: 100%;
		}

		.product__description {
			display: flex;
			justify-content: space-evenly;
			align-items: flex-start;
			margin: 40px;
		}

		.benefits-icons {
			display: flex;
			flex-direction: row;
			justify-content: center;
			width: 100%;
			/* padding: 0 100px; */
		}

		.benefits-icons div img {
			width: 220px;
		}
	}
</style>