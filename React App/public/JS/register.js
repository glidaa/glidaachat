gsap.registerPlugin(ScrollTrigger);
/*let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
        trigger: ".container",
        start: "top top+=200px",
        end: "top top+=500px",// when the top of the trigger hits the top of the viewport
        scrub: 1,
        markers: true,

    }
});*/
/* gsap.set('.fromLeft', {yPercent:-50})
 let tl = gsap.timeline({

     scrollTrigger: {
         trigger: "#sec02",
         pin:true,
         start: "center center",
         end: "+=150%",
         scrub: 1,
         markers: true,
     },
     defaults:{duration:1, ease:'none'}
 });
 tl.from('.fromLeft',{ x:-400})
 tl.to('.fromLeft',{width:'100%', height: '100%'}, '+=1')
 tl.to({},{duration:1})// an empty tween = a little pause ...
*/
ScrollLottie({
    target: '#sec02',
    path: 'https://assets3.lottiefiles.com/private_files/lf30_P9kQz3.json',
    duration: 8,
    speed: 'slow'
})
ScrollLottie({
    target: '#sec03',
    path: 'https://assets4.lottiefiles.com/packages/lf20_IaX52r.json',
    duration: 4,
    speed: 'medium'
})
ScrollLottie({
    target: '#sec04',
    path: 'https://assets2.lottiefiles.com/packages/lf20_QdVQmS.json',
    duration: 4,
    speed: 'medium'
})
ScrollLottie({
    target: '#sec05',
    path: 'https://assets4.lottiefiles.com/private_files/lf30_lKuCPz.json',
    duration: 4,
    speed: 'medium'
}) 