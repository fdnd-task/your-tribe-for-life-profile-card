export let calculateAngle = function(e, mainCard, cardFront, cardBack, glare){
    let shadow = 'rgba(255, 255, 255, 0.3)'

    let x = Math.abs(cardFront.getBoundingClientRect().x - e.clientX)
    let y = Math.abs(cardFront.getBoundingClientRect().y - e.clientY)

    // console.log(x, y)

    let halfWidth  = cardFront.getBoundingClientRect().width / 2
    let halfHeight = cardFront.getBoundingClientRect().height / 2

    // console.log(halfWidth, halfHeight)

    let calcAngleX = (x - halfWidth) / 6
    let calcAngleY = (y - halfHeight) / 14

    // console.log(calcAngleX, calcAngleY)

    let gX = (1 - (x / (halfWidth * 2))) * 100
    let gY = (1 - (y / (halfHeight * 2))) * 100

    glare.style.background = `radial-gradient(circle at ${gX}% ${gY}%, rgb(199 198 243), transparent)`
    mainCard.style.perspective = `${halfWidth * 6}px`
    cardFront.style.perspective = `${halfWidth * 6}px`

    cardFront.style.transform = `rotateY(${calcAngleX}deg) rotateX(${-calcAngleY}deg) scale(1.04)`
    // cardBack.style.transform = `rotateY(${calcAngleX}deg) rotateX(${-calcAngleY}deg) scale(1.04) translateZ(-4px)`

    let calcShadowX = (x - halfWidth) / 3
    let calcShadowY = (y - halfHeight) / 6

    cardFront.style.filter = `drop-shadow(${-calcShadowX}px ${-calcShadowY}px 15px ${shadow})`
}