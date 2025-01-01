function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locoScroll();

function crsreffect(){
    let crsr = document.querySelector("#crsr")
    let page1con = document.querySelector("#page1-content");

page1con.addEventListener("mousemove",(dets)=>{
   gsap.to("#crsr",{
    x:dets.x,
    y:dets.y
   })
})
page1con.addEventListener("mouseenter",function(){
    gsap.to("#crsr",{
        scale:1
    })
})
page1con.addEventListener("mouseleave",function(){
    gsap.to("#crsr",{
        scale:0
    })
})
let video2 = document.querySelector("#page5 video");
video2.addEventListener("mouseenter",(dets)=>{
    gsap.to("crsr",{
        scale:1
    })
})
}
crsreffect();
function page2Anime(){
    let tl = gsap.timeline();
tl.from("#page2-top h2",{
    y:120,
    duration:0.6,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        start:"top 80%",
        end:"top 83%",
        scrub:3
    }
})

tl.from("#hero h1",{
    y:120,
    duration:2,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        start:"top 45%",
        end:"top 50%",
        scrub:3
    }
})
tl.from("#page2-btm #elem h1",{
    y:100,
    duration:0.8,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        start:"top -10%",
        end:"top -20%",
        scrub:3
    }
})
}
page2Anime();

let tl2 = gsap.timeline();

tl2.from("#page4 h3",{
    y:80,
    duration:0.7,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"#main",
        start:"top 80%",
        end:"top 83%",
        // markers:true,
        scrub:3
    }
})
tl2.from("#page4 h1",{
    y:100,
    duration:2,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"#main",
        start:"top 35%",
        end:"top 45%",
        // markers:true,
        scrub:3
    }
})
let tl3 = gsap.timeline();
tl3.to("#svg2",{
    rotate:200,
    duration:6,
    ease:"Power2.out",
    scrollTrigger:{
        trigger:"#page5",
        scroller:"#main",
        start:"top 20%",
        end:"top 40%",
        // markers:true,
        scrub:3
    }
})

// let crsr2 = document.querySelector("#crsr2");

function counter(){
    let h1 = document.querySelector("#center h1 span");
let count = 7;
let clear = setInterval(() => {
    if(count>=3){
        count--;
        h1.textContent = count
    }
    else if(count<=2){
        clearInterval(clear)

        
    }
},100);
}

function page6anime(){
    let tl6 = gsap.timeline();
    tl6.from("#hero4 h3",{
        y:120,
    duration:0.6,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#page6",
        scroller:"#main",
        start:"top 80%",
        end:"top 83%",
        scrub:3
    }
    })
    tl6.from("#hero5 h1",{
        y:120,
    duration:2,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#page6",
        scroller:"#main",
        start:"top 45%",
        end:"top 50%",
        scrub:3
    }
    })
}
page6anime();
function page7Anime(){
    gsap.from("#page7 h1",{
        x:-100,
        opacity:0,
        duration:0.7,
        scrollTrigger:{
            trigger:"#page7",
            scroller:"#main",
            start:"top 80%",
            end:"top 83%",
            scrub:3
        }
    })
    gsap.from("#page7 h3",{
        x:100,
        opacity:0,
        duration:0.7,
        scrollTrigger:{
            trigger:"#page7",
            scroller:"#main",
            start:"top 80%",
            end:"top 83%",
            scrub:3
        }
    })
    gsap.from("#page7-footer h1",{
        y:120,
        scrollTrigger:{
            trigger:"#page7",
            scroller:"#main",
            start:"top -20%",
            end:"top -30%",
            scrub:3
        }
    })

}
page7Anime();

function swiperJs(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        // spaceBetween: 30,
        loop: true,
        
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
          },
        
      });
}
swiperJs()

function loader(){
    let tl8 = gsap.timeline();

tl8.from("#loader h3",{
    x:45,
    opacity:0,
    duration:1,
    stagger:0.1
})
tl8.to("#loader h3",{
    x:-15,
    opacity:0,
    duration:1, 
    stagger:0.1

})
tl8.to("#loader",{
    opacity:0
})
tl8.to("#loader",{
    display:"none"
})
tl8.from("#page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay:-1
})
}
loader();

gsap.from(" #hero-btm h1 span",{
    y:-160,
    duration:4,
    stagger:0.2,
    opacity:0,
    scrollTrigger:{
        trigger:"#footer",
        scroller:"#main",
        start:"top 10%",
        end:"top 80%",
        scrub:3
    }
})

let menu = document.querySelector("#nav h4");
let cross = document.querySelector("#menubar #right h5")
let body = document.querySelector("body")
let tll = gsap.timeline();
tll.to("#menubar",{
    top:0,
    duration:1,
    ease: "power4.inOut"
    // delay:4
},"anime1")
tll.from("#video-con video",{
    scale:0,
    delay:0.56
    
},"anime1")
tll.from("#right #heroes",{
    y:50,
    opacity:0,
    stagger:0.08,
    duration:0.5,
    delay:-0.65
})
tll.from("#right #heroes2",{
    y:50,
    opacity:0,
    duration:0.5,
    delay:-0.7
})
tll.pause();
menu.addEventListener("click",(dets)=>{
    tll.play();
})
cross.addEventListener("click",(dets)=>{
    tll.reverse();
})
// body.addEventListener("click",(dets)=>{
//     tll.reverse();
// })