const hoverButton = document.querySelector('.button-hover');
const hoverButton2 = document.querySelector('.button-hover-2');

hoverButton.style.background = "linear-gradient(#26C6DA, #00BCD4)";
hoverButton.addEventListener('mouseover',(e)=>{
    const target = e.target;
    hoverButton.style.background = "cyan";
})
hoverButton.addEventListener('mouseout',(e)=>{
    const target = e.target;
    hoverButton.style.background = 'linear-gradient(#26C6DA, #00BCD4)';
})

hoverButton2.style.background = "linear-gradient(#26C6DA, #00BCD4)";
hoverButton2.addEventListener('mouseover',(e)=>{
    const target = e.target;
    hoverButton2.style.background = "cyan";
})
hoverButton2.addEventListener('mouseout',(e)=>{
    const target = e.target;
    hoverButton2.style.background = 'linear-gradient(#26C6DA, #00BCD4)';
})