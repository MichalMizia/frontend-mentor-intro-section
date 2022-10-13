const mobileNavToggle=document.querySelector('.header-nav')
const iconOpen=document.querySelector('.icon-hamburger')
const iconClose=document.querySelector('.icon-close')

iconOpen.addEventListener("click", () =>{
    mobileNavToggle.classList.toggle("opened");
    iconOpen.classList.toggle("hide");
    iconClose.classList.toggle("hide");
})

iconClose.addEventListener("click", () =>{
    mobileNavToggle.classList.toggle("opened");
    iconOpen.classList.toggle("hide");
    iconClose.classList.toggle("hide");
})

const arrowFeatures=document.querySelector('.arrow-features')
const subList1=document.querySelector('.sub-list1')
arrowFeatures.addEventListener("click", () =>{
    subList1.classList.toggle("hide");
})

const arrowCompany=document.querySelector('.arrow-company')
const subList2=document.querySelector('.sub-list2')

arrowCompany.addEventListener("click", () =>{
    subList2.classList.toggle("hide");
})


const features=document.querySelector('.features')
const company=document.querySelector('.company')

