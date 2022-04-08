<template>
    <footer>
        <ul>
            <li><img src="/images/logo.png" alt="Judith's Coffee logo"></li>
            <li>Get in touch</li>

            <li>+47 (0) 470 00 122</li>
            <hr>

            <li>hello@coffee.com</li>
            <hr>

            <li>Unit 3 Backventland, Peter,</li>
            <li>Bjarne Skaus Vei 8BS, Oslo</li>
            <li>© Copyright 2022 Judith's Coffee</li>

            <div class="social-icons">
                <img src="/svg/instagram.svg" alt="instagram-icon">
                <img src="/svg/facebook.svg" alt="facebook-icon">
                <img src="/svg/twitter.svg" alt="twitter-icon">
            </div>
        </ul>

        <div class="signup">
            <p>Sign up and get 10% off for your first  order!</p>
            <p>Site by Judith</p>
        </div>
    </footer>

    
</template>

<style>
    footer {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* margin-top: 100px; */
    }

    footer ul {
        list-style: none;
        text-align: center;
    }

    footer ul li {
        padding-bottom: 10px;
    }

    footer ul li img {
        width: 20vw;
    }

    hr {
        margin: 0 55px 10px 55px;
        border-color: #00C0BB;
        border-style: solid;
        border-bottom-width: 2px;
        border-top-width: 0;
        border-left-width: 0;
        border-right-width: 0;
    }

    .social-icons {
        display: flex;
        justify-content: space-between;
        padding: 20px;
    }

    .social-icons img {
        width: 30px;
    }

    .signup {
        width: 100%;
        height: 10vw;
        color: white;
        background: black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .signup p {
        padding-bottom: 10px;
    }
</style>