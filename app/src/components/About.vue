<template>
    <div>
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
    </div>
</template>

<style>
    /* About Section */
	.about {
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url(/images/home.jpg);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        min-height: 200px;
        width: 100%;
        margin-bottom: var(--bottom-xsmall);
    }

    .about_heading {
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
        padding: 20px;
    }

    @media screen and (min-width: 968px) { 
        
    }
</style>