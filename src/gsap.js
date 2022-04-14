import { gsap, ScrollTrigger, DrawSVGPlugin } from "gsap-trial/all";
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
import './sass/gsap.scss';


gsap.to('.a1', {
    x: 500,
    duration: 4,
})


let tl = gsap.timeline();


tl.to('.b1', {
    x: 200,
    duration: 4
}).to('.b1', {
    y: 200,
    duration: 2
}).to('.b1', {
    rotation: 180
})

gsap.from('circle', {
    duration: 2,
    drawSVG: "0% 0%",
    stagger: 0.5,
    repeat: 3
})


var tl1 = gsap.timeline();

tl1.from('rect', {
    duration: 2,
    drawSVG: 1,

})






// scroll
gsap.to('.s1', {
    scrollTrigger: '.s1', // start the animation when ".s1" enters the viewport (once)
    duration: 2,
    x: 200,
    rotate: 180,
   
})

gsap.to('.s2', {
    x: 600,
    duration: 3,
    scrollTrigger: {
        trigger: '.s2',
        start: "top center", // 第一個是物件的觸發位址  第二個是視窗的位址 
        end: "100px 100px", //  第一個是物件的觸發位址  第二個是視窗的位址 
        //markers: { startColor: "blue", endColor: "red" }, //觸發點指標
        toggleClass: "active", // 動態在物件上 置入xclass
        toggleActions: 'play pause reverse pause',//返回執行狀態
        //onUpdate: self => console.log("direction:", self.direction)
        //scrub: true,
        // onEnter: console.log('scroll start')
    }
})


var t = gsap.timeline({
    scrollTrigger: {
        trigger: ".scrub",
        start: "-200px center",
        end: "center bottom",
        scrub: 1, // 是否可以返回
        //markers: true
    }

});


t.to('.r1' , {
    width: '500px',
}).to('.r2' , {
     width: '500px'
})

// var p = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".parallax",
//         //start: "-200px center",
//         //end: "center bottom",
//         //scrub: true, // 是否可以返回
//         //markers: true
//     }

// });


gsap.to('.img' , {
    //yPercent : -5 ,
    y : -100,
    scrollTrigger: {
                trigger: ".img",
                //start: "-200px center",
                //end: "center bottom",
                scrub: 1,  //smooth animation
                //markers: true
            }

})

gsap.to('.color' , {
    //yPercent : 20 ,
    y : 100,
    scrollTrigger: {
                trigger: ".color",
                //start: "-200px center",
                //end: "center bottom",
                scrub: .5, 
                //markers: true
            }

})


