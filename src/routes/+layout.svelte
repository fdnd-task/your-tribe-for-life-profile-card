<script>
    import { onMount } from 'svelte'
    import { createScene } from '$lib/scene.js'

    let canvas

    onMount(() => {
        createScene(canvas)
    })
</script>

<canvas bind:this={canvas}></canvas>

<main>
    <slot></slot>
</main>

<style>
    canvas{
        display: block;
        position: fixed;
        left: 0;
        top: 0;
        z-index: -2;
        background: var(--main-bg);
    }

    main{
        width: 80%;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>