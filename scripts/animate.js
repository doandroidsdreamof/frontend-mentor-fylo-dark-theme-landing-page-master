const headOne = document.querySelector('.head-animate-1');
const textOne = document.querySelector('.text-animate-1');
const gridAnimateMain = document.querySelectorAll('.grid-animate');
let tl = gsap.timeline({defaults: {ease: "slow", duration: 1.5, stagger: {
  grid: [7,15],
  from: "center",
  axis: "y",
  amount: 2

}}})

window.onload = async () =>{
  let tl = gsap.timeline({defaults: {ease: "Power3.easeOut", duration: 1.5}})
  gsap.to('.head-animate-1', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 1})
  tl.to('.text-animate-1', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 1})
  tl.to('.button-animate-div-1', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 1})
  gsap.fromTo(".button-animate-div-1", {opacity: 0}, {opacity: 1, duration: 1});
  gridAnimation();
  gridAnimation2();
  textTrigger();

}


  const trigger1 = gsap.utils.toArray('.grid-animate');
  trigger1.forEach((item, i) => {
  const gridAnimation = gsap.fromTo(item, { y: 120, opacity: 0}, {duration: 1, y: 0, opacity:1, stagger: .2});
  ScrollTrigger.create({
    trigger: item,
    animation: gridAnimation,
    toggleActions: "play reverse play reverse",
   
  });
      
});
const trigger2 = gsap.utils.toArray('.grid-animate-2');
trigger2.forEach((item, i) => {
const gridAnimation2 = gsap.fromTo(item, { y: 120, opacity: 0}, {duration: 1, y: 0, opacity:1, stagger: .2});
ScrollTrigger.create({
  trigger: item,
  animation: gridAnimation2,
  toggleActions: "play reverse play reverse",
 
});

});


const trigger3 = gsap.utils.toArray('.trigger-head-text-button');
trigger3.forEach((item, i) => {
const gridAnimation3 = gsap.fromTo(item, { y: 120, opacity: 0}, {duration: 1, y: 0, opacity:1, stagger: .2});
ScrollTrigger.create({
  trigger: item,
  animation: gridAnimation3,
  toggleActions: "play reverse play reverse",

});
    

});

const trigger4 = gsap.utils.toArray('.input-animate');
trigger4.forEach((item, i) => {
const gridAnimation4 = gsap.fromTo(item, { y: 120, opacity: 0}, {duration: 1, y: 0, opacity:1, stagger: .2});
ScrollTrigger.create({
  trigger: item,
  animation: gridAnimation4,
  toggleActions: "play reverse play reverse",
 

}); 
});



















