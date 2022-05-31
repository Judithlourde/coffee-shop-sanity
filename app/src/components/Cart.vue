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

            
            <div class="cart__layout-products cartProducts">
                <div class="cartProducts__empty" v-if="cartProducts.length === 0">
                    <h2>Your Basket is Empty</h2> 

                    <router-link :to="{ name:'home' }">
                        <p>Continue to shopping...</p>
                    </router-link>
                </div>
                
                <div v-else class="cartProducts__addedProducts" v-for="(product, index) in cartProducts" :key="product._id">
                    <div class="cartProducts__addedProducts-products">
                        <div>
                            <img :src="product.image.asset.url" :alt="product.image.caption">
                            <h4>{{ product.title }}</h4>
                        </div>
                        
                        <button @click="deleteProduct(index)">
                            <img src="/svg/delete.svg" alt="delete icon for deleting the selected products">
                        </button>
                    </div>

                    <div class="cartProducts__addedProducts-price">
                        <h4>{{ currency }} {{ product.price * product.count }}</h4>
                        
                        <div>
                            QTY:
                            <p>{{ product.count }} </p>

                            <div>
                                <button @click="addProductToCart(product)">▲</button>
                                <button @click="decreasingCount(index)">▼</button>
                            </div>
                        </div>
                    </div>
                    
                </div>                
            </div>

            <footer class="cart__layout-footer">
                <div>
                    <h5>SUBTOTAL</h5>
                    <h5>{{ totalPrice }}</h5>   
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
            toggleCart: { type: Boolean },   
        },

        data() {
            return {
            }   
        },

        computed: {
            cartProducts() {
                return this.$store.getters.getAddedProducts;
            },

            currency() {
                return this.$store.getters.getCurrency;
            },

            totalPrice() {
                return this.$store.getters.getTotalAmount;
            }
        },

        methods: {
            emitCloseCartSection() {
                this.$emit('close-cart');
            },

            addProductToCart(product) {
				this.$store.dispatch('addToCart', product);
			},

            decreasingCount(index) {
                this.$store.dispatch('decreasingCountFromCart', index);
            },

            deleteProduct(index) {
                this.$store.dispatch('deleteProductFromCart', index);
            }
        },
    }
</script>

<style>
    /* Cart Section */
    .cart {
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
        background-color: var(--white);
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

    .cart__layout-products {
        display: flex;
        flex-direction: column;
        flex: auto;
        justify-content: center;
        align-items: center;
        z-index: 500;
        /* overflow-y: scroll; */
        width: 100%;
        height: 100%;
        padding: 10px 22px 0px 22px;
    }

    .cartProducts__empty {
        text-align: center;
    }

    .cartProducts__empty a {
        text-decoration: none;
        color: inherit;
    }
    .cartProducts__addedProducts {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cartProducts__addedProducts-products {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .cartProducts__addedProducts-products div {
        display: flex;
        align-items: center;
    }

    .cartProducts__addedProducts-products div img {
        width: 50px;
    }

    .cartProducts__addedProducts-products button img {
        width: 20px;
    }

    .cartProducts__addedProducts-price {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .cartProducts__addedProducts-price div {
        display: flex;
        align-items: center;
    }

    .cartProducts__addedProducts-price div p {
        width: 40px;
        text-align: center;
        border: var(--black) solid 2px;
    }

    .cartProducts__addedProducts-price div div {
        display: flex;
        flex-direction: column;
        margin: 5px;
    }

    .cart__layout-footer {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: var(--padding-small);
        background-color: var(--highlight);
        color: var(--white);
    }

    .cart__layout-footer > div {
        font-size: 1.5rem;
        padding-bottom: var(--padding-medium);
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
</style>