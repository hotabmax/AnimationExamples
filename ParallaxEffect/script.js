const animScroll = gsap.timeline();
animScroll
    .to(".img1", {y: '-350px'})
    .to(".img2", {y: '-350px'})
    .to(".img3", {y: '-350px'})
ScrollTrigger.create({
    animation: animScroll,
    trigger: '.block',
    start: 'top top',
    end: '2700px bottom',
    markers: true,
    scrub: true,
    pinSpacing: false
})