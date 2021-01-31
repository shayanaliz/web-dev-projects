const pageTwo=document.querySelector('.hero-pg2');
const pageTitle=document.querySelector('.title-pg2');
const pageLorem=document.querySelector('.loremipsum-pg2');
const pageIll=document.querySelector('.illustration-pg2');

const options={
    root:null,
    threshold:0,
    rootMargin: '-10px'
};

const observer= new IntersectionObserver(function(entries,observer){
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            pageTitle.style.animation='fade-in 250ms ease-in-out forwards';
            pageLorem.style.animation='fade-in 250ms ease-in-out forwards';
            pageIll.classList.add('active');
        };
    })
},options);

observer.observe(pageTwo);