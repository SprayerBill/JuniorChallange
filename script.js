window.addEventListener('resize', function (){ 
    'use strict';
    window.location.reload(); 
   })
function init() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
    locoScroll.on('scroll', ScrollTrigger.update);
    ScrollTrigger.scrollerProxy('#main', {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        pinType: document.querySelector('#main').style.transform ? 'transform' : 'fixed'
    });
    ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
    ScrollTrigger.refresh();
}
init();

gsap.to("#box1",{
    left:"60%",
    delay:1,
    duration:2,
    ease: "power1.inOut", 
    
},"hello")
gsap.to("#box1 img",{
    delay:1,
    duration:2,
    transform: "translateX(-500px)",
    ease: "power1.inOut", 

},"hello")
gsap.to("#box2",{
    delay:1,
    duration:2,
    bottom:"85%",
    ease: "power2.inOut", 
},"hello")
gsap.to("#box2aa",{
    delay:1,
    duration:2,
    transform: "translate(0,-360px)",
    ease: "power2.inOut", 
},"hello")
gsap.to("#bar",{
    delay:1,
    width:"100%",
    duration:2,
    ease: "power2.inOut", 
},"hello")
gsap.to("#loader>h1",{
    left:"10%",
    // x:20,
    delay:1.5,
    duration:2,

},"hello")
gsap.to("#loader",{
    delay:4,
    duration:1,
    y:"-100%",
    ease: "power4.inOut", 
})
// gsap.from(".nav h4", {

//     y: -50,
//     duration: 1,
//     delay: 0.2,
//     stagger: 0.3
// })
// gsap.from(".main-page h1", {

//     // x: -600,
//     left:"-10%",
//     duration: 1,
//     // delay: 1.5,
//     // stagger: 0.4,
//     // opacity: 0,
// })
// gsap.from(".main-page>img", {
//    left:"10%",
//     x: 600,
//     duration: 1,
//     // delay: 3,
//     // stagger: 0.4,
//     opacity: 0,
//     rotate: 0,
// })
var t2 = gsap.timeline();
t2.to(".main-page>img",{
    left:"42%",
    stagger:1,
    delay:2
    // delay:""
})

// gsap.from(".bottom h4", {
//     y: 100,
//     duration: 1,
//     delay: 3.5,
//     stagger: 0.3,
//     opacity: 0,
// })
// gsap.from("#page1 h1", {
//     x: -600,
//     duration: 1,
//     stagger: 0.4,
//     opacity: 0,
// },"hi")
// gsap.from("#page1 img", {

//     x: 600,
//     duration: 1,
// },"hi")

// gsap.from(".bottom h4", {
//     y: 100,
//     duration: 1,
//     delay: 3.5,
//     stagger: 0.3,
//     opacity: 0,
// })

var page3 = gsap.timeline({
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page3",
        start:"top top",
        end:"+=4000",
        scrub:true,
        // markers:true,
        pin:true
    }
})
page3.to("#service #left-txt",{
    top:"-100%"
},"hel")
page3.to("#image2",{
    top:"0%",
},"hel",)
.fromTo("#image2 img",{
    y:-550,
},{
    y:0,
},"hel")
page3.to("#service #left-txt",{
    top:"-200%"
},"h")
page3.to("#image3",{
    top:"0%",
},"h",)
.fromTo("#image3 img",{
    y:-550,
},{
    y:0,
},"h")
page3.to("#service #left-txt",{
    top:"-300%"
},"he")
page3.to("#image4",{
    top:"0%",
},"he",)
.fromTo("#image4 img",{
    y:-550,
},{
    y:0,
},"he")
page3.to("#service #left-txt",{
    top:"-400%"
},"hell")
page3.to("#image5",{
    top:"0%",
},"hell",)
.fromTo("#image5 img",{
    y:-550,
},{
    y:0,
},"hell")

