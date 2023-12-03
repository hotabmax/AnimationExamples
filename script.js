const animScroll = gsap.timeline();
animScroll
    .from(".black-block1", {x:"+100%"})
    .from(".text1", {opacity: 0, scale: 0.75})
    .from(".image2",{y:'100%'})
    .to(".black-block2", {opacity: 1})
    .to(".text2", {opacity: 1})
    .from(".image3",{y:'-100%'})
    .to(".black-block3", {opacity: 1})
    .to(".text3", {opacity: 1});
ScrollTrigger.create({
    animation: animScroll,
    trigger: '.block',
    start: '800px center',
    end: '4000px bottom',
    markers: true,
    scrub: true,
    pin: true,
    pinSpace: false
})

const animText2 = gsap.timeline();
animText2.from()

//Parallax bed try(
// gsap.registerPlugin(ScrollTrigger);
//
//     sections = gsap.utils.toArray(".section")
//     getRatio = (el) =>{
//         console.log(el.offsetHeight)
//         return  window.innerHeight / (window.innerHeight + el.offsetHeight)
//     };
//
// sections.forEach((section, i) => {
//     let bg = section.querySelector(".bg"),
//         content = section.querySelector(".content"),
//         tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: section,
//                 start: () => i ? "top bottom" : "top top",
//                 end: "bottom top",
//                 scrub: true,
//                 markers: true,
//                 invalidateOnRefresh: true
//             }
//         });
//
//     tl.fromTo(bg, {
//         y: () => i ? -window.innerHeight * getRatio(section) : 0
//     }, {
//         y: () => window.innerHeight * (1 - getRatio(section)),
//         ease: "none"
//     });
//     tl.fromTo(content, {
//         y: () => i ? window.innerHeight * -getRatio(section) * 2 : 0
//     }, {
//         y: () => window.innerHeight * getRatio(section) * 2,
//         ease: "none"
//     }, 0);
// });
