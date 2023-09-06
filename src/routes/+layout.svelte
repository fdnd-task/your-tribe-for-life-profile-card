<script>
    import { onMount } from 'svelte'
    import { createScene } from '$lib/scene.js'

    let canvas

    onMount(() => {
        createScene(canvas)
    })
</script>

<canvas bind:this={canvas}></canvas>

<!-- <main> -->
    <slot></slot>
<!-- </main> -->

<style>
    /* Background canvas ThreeJS */
    canvas{
        display: block;
        position: fixed;
        left: 0;
        top: 0;
        z-index: -2;
        background: var(--main-bg);
    }

    /* Card */
    /* main{
        width: 75%;
        height: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transform-style: preserve-3d;
        transition: transform 0.8s ease-in-out;
        transform-origin: center right;
        position: relative;
    } */
</style>