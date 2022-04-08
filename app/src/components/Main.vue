<template>
	<section>
		<div v-if="loading">...</div>

		<div v-else class="main" >
			<section>
				<div class="about">
					<div class="about_heading">
						<h1>FLAVOURED INSTANT</h1>
					</div>
				</div>

				<div class="about_para">
					<p>
						In our humble opinion, this is the best flavoured instant
						coffee in town. Made using high-quality, smooth Arabica beans,
						Flavoured coffe is vegan friendly, four calories a cup sugar
						free with nothing artificial in it whatsover. Plus, it comes
						in fully recyclable, plastic-free jars.
					</p>
				</div>
			</section>

			<div class="main__product" v-for="product in result" :key="product._id">
				<router-link :to="{ name: 'productPage', params: { productSlug: product.slug.current }}">
					<h3>{{ product.title }}</h3>	
					<img :src="product.image.asset.url" :alt="product.image.caption">
					<p>{{ product.price }}</p>
				</router-link>
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
.main {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
}

.main__product {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

}

/* About Section */
.about {
   align-items: center;
   display: flex;
   justify-content: center;
   align-items: center;
   background-image: url(/images/home.jpg);
   background-size: cover;
   flex-direction: column;
   min-height: 30vh;
   margin-bottom: 48px;
   position: relative;
   padding: 48px 0;
}

.about_heading {
   position: absolute;
   z-index: 1;
   background-color: #000;
   padding: var(--padding-small);
}

.about_heading h1 {
   color: #fff;
}

.about_para {
   max-width: 600px;
   line-height: 1.875;
   text-align: center;
   margin: 0 auto;
}
</style>

