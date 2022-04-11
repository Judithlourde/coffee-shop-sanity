<template>
	<section class="product">
		<div v-for="product in result" :key="product._id">
			<h1>{{ product.title }}</h1>

			<div class="product__image">
				<img :src="product.image.asset.url" :alt="product.image.caption">
				<p>{{ product.description }}</p>
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
		top: 130px;

	}

	.product__image {
		display: flex;
		flex-direction: row;
	}
</style>