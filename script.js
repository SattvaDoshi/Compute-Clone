const slide = document.querySelectorAll(".slide");
var counter=0;

slide.forEach((slide,index) =>{
    slide.style.left=`${index*100}%`
}

);

const goPrev=()=>{
    if(counter==0){
        counter=3;
    }
    counter--;
    slideimage()
}

const goNext =() =>{
    if(counter==2){
        counter=-1;
    }
    counter++;
    slideimage()
    
}
    

const slideimage =()=>{
    slide.forEach(slide => {
        slide.style.transform=`translateX(-${counter*100}%)`
    });
}