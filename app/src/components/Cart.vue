<template>
    <!-- The cart section only appears when the person clicks the jar-icon (cart-icon) -->
    <section class="cart" v-if="toggleCart">
        <div class="cart__background"></div>

        <div class="cart__layout">
            <header class="cart__layout-header">
                <h1>My Basket</h1>

                <button  @click="emitCloseCartSection()"> 
                    <img src="/svg/close-icon.svg" alt="close icon in the filled circle">
                </button>
            </header>

            <div class="cart__products">
                <h2>Your Basket is Empty</h2> 

                <router-link :to="{ name:'home' }">
                    <p>Continue to shopping...</p>
                </router-link>
            </div>

            <footer>
                <div>
                    <h5>SUBTOTAL</h5>
                    <h5>KR. 0.00</h5>
                </div>

                <p>
                    Tax included and shipping calculated at checkout. You can also apply any discount codes you have at checkout.
                </p> 
            </footer>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            toggleCart: {
                type: Boolean
            }
        },

        data() {
            return {
                
            }   
        },

        methods: {
            emitCloseCartSection() {
                this.$emit('close-cart')
            }
        }
    }
</script>

<style>
    /* Cart Section */
    .cart {
        /* visibility: hidden; */
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        object-fit: cover;
        width: 100vw;
        height: 100vh;
        z-index: 400;
    }

    .cart__background {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.8;
        background-color: rgba(17, 17, 17, 0.7);
    }

    .cart__layout {
        transform: translateX(0);
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        max-width: 500px;
        height: 100%;
        width: 100%;
        background-color: #fff;
    }

    .cart__layout-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 96px;
        padding: 24px 26px;
        width: 100%;
    }

    .cart__layout-header h1 {
        background-color: #111;
        color: #fff;
        padding: 12px 24px;
        font-size: 1.25rem;
        text-align: center;
    }

    .cart__products {
        display: flex;
        flex-direction: column;
        flex: auto;
        justify-content: center;
        align-items: center;
        z-index: 500;
        overflow-y: auto;
        width: 100%;
        padding: 40px 32px 40px 22px;
    }

    .cart__products h3 {
        text-align: center;
        font-size: 2em;
    }

    .cart__products a {
        text-decoration: none;
        color: inherit;
    }

    .cart__layout > footer {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: var(--padding-big);
        background-color: var(--highlight);
        color: var(--white);
    }

    .cart__layout > footer > div {
        font-size: 1.5rem;
        padding-bottom: var(--padding-medium);
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
</style>