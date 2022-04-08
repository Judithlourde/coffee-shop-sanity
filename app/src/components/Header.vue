<template>
   <header class="header">
      <div class="header__container">
         <nav class="header__container-navbar">
            <!-- Main Menu -->
            <div class="navigation-desktop">
               <ul class="navigation-desktop__list">
                  <li>
                     <a href="#" class="about_link">
                        <span>About Us</span>
                     </a>
                  </li>

                  <li>
                     <a href="#products" class="product_link">
                        <span>Products</span>
                     </a>
                  </li>

                  <li>
                     <a href="#" class="contact_link">
                        <span>Contact Us</span>
                     </a>
                  </li>
               </ul>
            </div>
            <!-- Hamburger menu for mobile -->
            <div class="navigation-mobile">
               <img src="/svg/hamburger.svg" alt="icon for hamburger menu">
            </div>

            <!-- Logo -->
            <a href="#" class="coffee-logo">
               <span><img src="/images/logo.png" alt="Judith's Coffee logo" /></span>
            </a>

            <div class="header_account">
               <div class="cart">
                  <!-- <a href="#cart_container" class="jar_button"> -->
                     <span class="view_cart">
                        <img src="/images/jar.png" alt="cart-jar-images" />

                        <span class="count">0</span>
                     </span>

                     
                  <!-- </a> -->
               </div>
            </div>
         </nav>
      </div>
      </header>
</template>

<style>
   /* Header Section-Navigation-bar */
   .header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 14vh;
      z-index: 200;
      border-bottom: solid 1px var(--border-color);
      background-color: #fff;
   }

   .header__container {
      padding: 10px 38px;
   }

   .header__container-navbar {
      display: flex;
   }

   .navigation-desktop {
      display: none;
   }

   .navigation-mobile {
      display: block;
   }

   .coffee-logo span {
      display: block;
      padding: 0 0 0 55px;
   }

   .coffee-logo span img {
      width: 40vw;
   }

   .header_account {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex: 1;
   }

   .view_cart {
      position: relative;
   }

   .view_cart img {
      width: 5.6vw;
      /* position: relative; */
   }

   .count {
      position: absolute;
      left: 24px;
      bottom: 30px;
      background-color: #EE7675;
      color: #fff;
      /* border-radius: 100%; */
      padding: 4px 8px;
      font-size: var(--points);
      border-radius: 100%;
      border-style: none;
   }

   @media screen and (min-width: 968px) { 
      .header__container {
         padding: 10px 48px;
      }

      .navigation-desktop {
         display: block;
         padding: 10px;
         flex: 1;
         font-size: var(--heading);
         font-weight: 500;
         text-align: center;
         line-height: 1.8;
      }

      .navigation-mobile {
         display: none;
      }

      .navigation-desktop__list {
         display: flex;
      }

      .navigation-desktop__list li {
         list-style: none;
         margin: 0 8px;
      }

      .navigation-desktop__list li a {
         display: inline-block;
         text-decoration: none;
         color: inherit;
      }

      .navigation-desktop__list li a span {
         display: inline-block;
         padding: 8px 16px;
      }

      .coffee-logo span img {
         width: 20vw;
      }

      .view_cart img {
         width: 2.6vw;
         /* position: relative; */
      }

      .count {
         position: absolute;
         left: 24px;
         bottom: 30px;
         background-color: #EE7675;
         color: #fff;
         /* border-radius: 100%; */
         padding: 4px 8px;
         font-size: var(--points);
         border-radius: 100%;
         border-style: none;
      }
   }
</style>