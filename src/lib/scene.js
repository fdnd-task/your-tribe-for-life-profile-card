import * as THREE from 'three'

// Nieuwe scene
const scene = new THREE.Scene()

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const getRandomParticlePos = (particleCount) => {
    const arr = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
        arr[i] = (Math.random() - 0.5) * 10
    }
    return arr
}

const geometry = new THREE.BufferGeometry()
geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(getRandomParticlePos(4000), 3)
)

// Loader
const loader = new THREE.TextureLoader()

// Materiaal
const material = new THREE.PointsMaterial({
    size: 0.05,
    map: loader.load("/img/bg-blob.svg"),
    transparent: true,
})

// Mesh
const blob = new THREE.Points(geometry, material)
scene.add(blob)

// Light
const directionalLight = new THREE.DirectionalLight(0x9090aa)
directionalLight.position.set(1, 1, 1)
scene.add(directionalLight)

// Mouse
let mouseX = 0
let mouseY = 0
document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX
    mouseY = event.clientY
})

// Renderer
let renderer

// Animatie
const animate = () =>{
    requestAnimationFrame(animate)

    blob.rotation.x += 0.0002
    blob.rotation.y += 0.0001

    blob.position.x = mouseX * 0.0007
    blob.position.z = mouseY * -0.0007

    renderer.render(scene, camera)
}

// Resize
const resize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
}

export const createScene = (canvas) => {
    renderer = new THREE.WebGLRenderer({ canvas })
    resize()
    animate()
}

// Listeners
window.addEventListener('resize', resize)