<template>
   <header class="header">
      <!-- Navigation Menu -->
      <nav class="header__navigation">
         <ul class="header__navigation-desktop">
            <li>
               <a href="#">
                  <span>About Us</span>
               </a>
            </li>

            <li>
               <a href="#">
                  <span>Products</span>
               </a>
            </li>

            <li>
               <a href="#">
                  <span>Contact Us</span>
                  <p v-for="product in addedProduct" :key="product._id">{{ product.title }}</p>
               </a>
            </li>
         </ul>
   
         <!-- Hamburger menu for mobile -->
         <div class="header__navigation-mobile">
            <img src="/svg/hamburger.svg" alt="icon for hamburger menu">
         </div>

         <!-- Logo -->
         <router-link :to="{ name: 'home' }" class="header__coffee-logo">
            <span><img src="/images/logo.png" alt="Judith's Coffee logo" /></span>
         </router-link>
           
         <div class="header__cart" @click="openCartSection">
            <span class="header__cart-jar-button">
               <img src="/images/jar.png" alt="cart-jar-images" />

               <!-- https://www.codegrepper.com/code-examples/javascript/array+reduce+oneline#:~:text=%E2%80%9Carray%20reduce%20oneline%E2%80%9D%20Code%20Answer's&text=The%20reduce()%20method%20executes,returns%20a%20single%20output%20value. -->
               <span class="header__cart-count">{{ cartProducts.reduce((number, countItem) => number + countItem.count, 0) }}</span>
            </span>                     
         </div>
      </nav>

      <Cart
         :toggleCart="cartSection"  

         @close-cart="closeCartSection" 
      />
   </header>
</template>

<script>
   import Cart from '../components/Cart.vue'
   export default {
      components: {
         Cart,
      },

      props: {
         addedProduct: { type: Array }   
      },

      data() {
         return {
            cartSection: false,
         }
      },

      computed: {
         cartProducts() {
            return this.$store.getters.getAddedProducts;
         },
      },

      methods: {
         openCartSection() {
            this.cartSection = !this.cartSection;
         },

         closeCartSection() {
            this.cartSection = false;
         }
      }
   }
</script>

<style>
   /* Header Section-Navigation-bar */
   .header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100px;
      z-index: 200;
      padding: 30px 25px;
      transition: opacity .3s ease-in-out;
      background-color: rgba(255, 255, 255, 0.07);
      backdrop-filter: saturate(180%) blur(20px);           /* Got tips from here: https://css-tricks.com/almanac/properties/b/backdrop-filter/ */
      box-shadow: 0 2px 4px 0 rgb(0 0 0 / 4%), 0 -1px 0 0 rgb(0 0 0 / 8%);
   }

   .header__navigation {
      display: flex;
      display: flex;
      align-items: center;
      justify-content: space-between;
   }

   .header__navigation-desktop {
      display: none;
   }

   .header__navigation-mobile {
      display: block;
   }

   .header__coffee-logo span {
      display: block;
   }

   .header__coffee-logo span img {
      width: 60vw;
   }

   .header__cart-jar-button {
      position: relative;
   }

   .header__cart-jar-button img {
      width: 6vw;
   }

   .header__cart-count {
      position: absolute;
      left: 12px;
      bottom: 25px;
      padding: 1px 6px;
      border-radius: 100%;
      border-style: none;
      color: var(--white);
      background-color: var(--secondary);
   }

   @media screen and (min-width: 968px) { 
      .header {
         padding: 10px 48px;
      }

      .header__navigation-mobile {
         display: none;
      }

      .header__navigation-desktop {
         display: flex;
         font-size: var(--heading);
         font-weight: 500;
      }

      .header__navigation-desktop li {
         list-style: none;
         margin: 0 20px;
      }

      .header__navigation-desktop li a {
         display: inline-block;
         text-decoration: none;
         color: inherit;
      }

      .header__navigation-desktop li a span {
         display: inline-block;
         padding: 8px 16px;
      }

      .header__coffee-logo {
         flex: 1;
      }

      .header__coffee-logo span img {
         width: 300px;
      }

      .header__cart-jar-button img {
         width: 30px;
      }

      .header__cart-count {
         position: absolute;
         left: 20px;
         bottom: 30px;
         padding: 1px 8px;
         border-radius: 100%;
         border-style: none;
         color: var(--white);
         background-color: var(--secondary);
      }
   }
</style>