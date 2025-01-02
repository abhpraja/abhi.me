// function locoInitialize() {
//     const scroll = new LocomotiveScroll({
//         el: document.querySelector('main'),
//         smooth: true
//     });
// }

// locoInitialize();


var tc = gsap.timeline();

tc.from(".tit1",{
    y: 20,
    opacity: 0,
    duration: 0.5,
    delay: 1
})

tc.from(".tit2",{
    y: 20,
    opacity: 0,
    duration: 0.5,
})


// gsap.to(".revel", {
//     backgroundSize: "100% 100%",
//     duration: 10,
//     delay: 1.5,
//     stagger: 1,
//     scrollTrigger: {
//         trigger: ".about",
//         scroller: "body",
//         start: "top 0%",
//         end: "top -100%",
//         scrub: 2,
//         pin: true,
//     }
// })
