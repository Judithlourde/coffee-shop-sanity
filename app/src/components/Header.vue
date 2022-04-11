<template>
   <header>
      <!-- Navigation Menu -->
      <nav>
         <ul class="navigation-desktop">
            <li>
               <a href="#">
                  <span>About Us</span>
               </a>
            </li>

            <li>
               <a href="#products">
                  <span>Products</span>
               </a>
            </li>

            <li>
               <a href="#">
                  <span>Contact Us</span>
               </a>
            </li>
         </ul>
   
         <!-- Hamburger menu for mobile -->
         <div class="navigation-mobile">
            <img src="/svg/hamburger.svg" alt="icon for hamburger menu">
         </div>

         <!-- Logo -->
         <a href="#" class="coffee-logo">
            <span><img src="/images/logo.png" alt="Judith's Coffee logo" /></span>
         </a>
           
         <div class="cart">
            <!-- <a href=""> -->
               <span class="cart__jar-button">
                  <img src="/images/jar.png" alt="cart-jar-images" />

                  <span class="cart__jar-button-count">0</span>
               </span>                     
            <!-- </a> -->
         </div>
      </nav>
   </header>
</template>

<style>
   /* Header Section-Navigation-bar */
   header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100px;
      z-index: 200;
      border-bottom: solid 1px var(--border-color);
      padding: 30px 25px;
   }

   nav {
      display: flex;
      display: flex;
      align-items: center;
      justify-content: space-between;
   }

   .navigation-desktop {
      display: none;
   }

   .navigation-mobile {
      display: block;
   }

   .coffee-logo span {
      display: block;
   }

   .coffee-logo span img {
      width: 60vw;
   }

   .cart__jar-button {
      position: relative;
   }

   .cart__jar-button img {
      width: 6vw;
   }

   .cart__jar-button-count {
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
      header {
         padding: 10px 48px;
      }

      .navigation-mobile {
         display: none;
      }

      .navigation-desktop {
         display: flex;
         font-size: var(--heading);
         font-weight: 500;
      }

      .navigation-desktop li {
         list-style: none;
         margin: 0 30px;
      }

      .navigation-desktop li a {
         display: inline-block;
         text-decoration: none;
         color: inherit;
      }

      .navigation-desktop li a span {
         display: inline-block;
         padding: 8px 16px;
      }

      .coffee-logo {
         flex: 1;
      }

      .coffee-logo span img {
         width: 300px;
      }

      .cart__jar-button img {
         width: 30px;
      }

      .cart__jar-button-count {
         position: absolute;
         left: 20px;
         bottom: 30px;
         padding: 1px 6px;
         border-radius: 100%;
         border-style: none;
         color: var(--white);
         background-color: var(--secondary);
      }
   }
</style>