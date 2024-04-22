




//Message
 gsap.to(
    ".message",
    {
        y:-50,
        duration:1,
        repeat:-1,
        yoyo:true

    })

let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger: '.footer-position-4',
        start:'20% center',
        scrub:true,
        
       
    }
})

//Footer Positions

tl4.to('.footer-position-4',{
    x:-500
})


let tl6 = gsap.timeline({
    scrollTrigger:{
        trigger: '.footer-position-6',
        start:  '20% center',
       
        scrub:true,
       
    }
})
tl6.to('.footer-position-6',{
    x:-500
})


function applyAnimation(triggerClass) {
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: triggerClass,
            start:'top center',
            scrub:true,
            
        }
    });
    
    tl.to(triggerClass, {
        x: -500
    });
}



applyAnimation('.footer-position');
applyAnimation('.footer-position-2');
applyAnimation('.footer-position-3');

applyAnimation('.footer-position-5');









//Right-side(Image)

function applyImageAnimation(triggerClass2) {
    let image = gsap.timeline({
        scrollTrigger:{
            trigger: triggerClass2,
            start: '70% center',
           
            scrub: true
        }
    });

    image.to(triggerClass2, {
        y: 450
    });
}


applyImageAnimation('.right-side-color');
applyImageAnimation('.right-side-color-2');
applyImageAnimation('.right-side-color-3');
applyImageAnimation('.right-side-color-4');
applyImageAnimation('.right-side-5');
applyImageAnimation('.right-side-color-6');












//Title
function applyTitleAnimation(triggerClass) {
    let title = gsap.timeline({
        scrollTrigger:{
            trigger: triggerClass,
            start: '150% center',
            scrub:true,
        }
    });

    title.to(triggerClass, {
        y: -100
    });
}



applyTitleAnimation('.title-position');
applyTitleAnimation('.title-2');
applyTitleAnimation('.title-3');
applyTitleAnimation('.title-4');
applyTitleAnimation('.title-5');
applyTitleAnimation('.title-6');

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
