var ic1=document.getElementById('icn1'),
    ic2=document.getElementById('icn5')
window.onscroll= function show(){
    if (window.scrollY >=500){
        ic1.style.display='block'
    }
    else{
        ic1.style.display='none'
    }

}
ic1.onclick=function(){
    window.scroll(0,0)
}
ic2.onclick=function(){
document.body.classList.toggle('bgd')
ic2.classList.toggle('fa-moon-o')
    ic2.classList.add('fa-sun-o')

}
var translation={

    en:{
        ltc:"Learn to code",
        par:"With the world's largest web developer site.",
        btn:"Search",
        pc:"Not Sure Where To Begin?"

    },
    ar:{
        ltc:"تعلم البرمجه",
        par:"مع اكبر موقع للتصميم المواقع",
        btn:"بحث",
        pc:"لست متأكدًا من أين نبدأ؟"

    }
}
var langSelect=document.querySelector('select')
langSelect.addEventListener('change',(e)=>{
    setLang(e.target.value)
    localStorage.setItem('lang',e.target.value)

});
document.addEventListener('DOMContentLoaded',()=>{
    var language = localStorage.getItem('lang')
    setLang(language)
});

var setLang=(language)=>{
    var items=document.querySelectorAll('[data-t]')
    items.forEach((item)=>{
    var trankey=item.getAttribute('data-t')
    item.textContent=translation[language][trankey]

})
}