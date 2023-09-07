<script>
	/** @type {import("@prismicio/client").Content.CardFrontSlice} */
    let cardFront
    let glare
    let animated = false

    function isAnimated(){
        animated = !animated
    }

    function calculateAngle(e){

        // console.log(e)

        let shadow = 'rgba(255, 255, 255, 0.3)'

        isAnimated()

        let x = Math.abs(cardFront.getBoundingClientRect().x - e.clientX)
        let y = Math.abs(cardFront.getBoundingClientRect().y - e.clientY)

        let halfWidth = cardFront.getBoundingClientRect().width / 2
        let halfHeight = cardFront.getBoundingClientRect().height / 2

        // console.log('Half Width:', halfWidth)
        // console.log('Half Height:', halfHeight)
        // console.log('X Position:', x)
        // console.log('Y Position:', y)

        let angleX = (x - halfWidth) / 6
        let angleY = (y - halfHeight) / 14

        console.log('Angle X:', angleX)
        console.log('Angle Y:', angleY)

        let glareX = (1 - (x / (halfWidth * 2))) * 100
        let glareY = (1 - (y / (halfHeight * 2))) * 100

        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgb(199 198 243), transparent)`
        cardFront.style.perspective = `${halfWidth * 6}px`
        cardFront.style.transform = `rotateY(${angleX}deg) rotateX(${-angleY}deg) scale(1.04)`

        let shadowX = (x - halfWidth) / 3
        let shadowY = (y - halfHeight) / 6

        cardFront.style.filter = `drop-shadow(${-shadowX}px ${-shadowY}px 15px ${shadow})`
    }

    function resetCard(){
        cardFront.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`
        cardFront.style.filter = `drop-shadow(0px 0px 0px transparent)`
    }

	export let slice;
</script>

<section bind:this={cardFront} on:mouseenter={calculateAngle} on:mousemove={calculateAngle} on:mouseleave={resetCard} class:animated={isAnimated} data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
    <span bind:this={glare}></span>
	<h1>{slice.primary.heading}</h1>
</section>


<style>
    /* Front of card */
    section{
        width: 100%;
        height: 34rem;
        display: flex;
        justify-content: center;
        align-items: center;
        backface-visibility: hidden;
        position: absolute;
        background: radial-gradient(circle, rgba(4,5,25,0.3) 0%, rgba(255,255,255,0.1) 100%);
        border-radius: var(--card-border-radius);
        backdrop-filter: blur(10px);
        box-shadow: 0px 0px 6px 2px rgba(255, 255, 255, 0.25);
        /* border-radius: var(--card-border-radius);
        border: 3px solid transparent;
        border-image-slice: 1;
        border-image-source: var(--card-bg);
        background: linear-gradient(var(--main-bg), var(--main-bg)) padding-box,
        linear-gradient(135deg, #D6863C 0%, #141765 100%) border-box; */
    }

    section:before{
        content: "";
        position: absolute;
        inset: 0;
        border-radius: var(--card-border-radius);
        padding: 3px;
        background: var(--card-bg);
        -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
                mask-composite: exclude;
    }

    h1{
        color: white;
        opacity: 1;
    }

    section span{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        transition: all 0.1s ease-out;
        opacity: 0.6;
        pointer-events: none;
        height: 100%;
        border-radius: 14px;
        z-index: 9999;
        mix-blend-mode: hard-light;
        background: radial-gradient(circle at 50% 50%, rgb(199 198 243), transparent);
        opacity: 0;
    }
</style>
