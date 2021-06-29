let contents = document.querySelectorAll(".top-section .content");
let counter = 0;
let headerImg = document.querySelector(".top-section .header_img")
let bgImgs = [
                "./assests/desktop-image-hero-1.jpg",
                "./assests/desktop-image-hero-2.jpg",
                "./assests/desktop-image-hero-3.jpg"
            ];

document.getElementById("left_arr").addEventListener("click", () =>{
    slidPrev ();
});
document.getElementById("right_arr").addEventListener("click", () =>{
    slidNext ();
})

function slidNext (){
    contents[counter].classList.remove("show");
    if(counter == contents.length - 1){
        counter = 0;
    }
    else{
        counter++;
    }
    contents[counter].classList.add("show");
    headerImg.style.backgroundImage = `url(${bgImgs[counter]})`;
}

function slidPrev (){
    contents[counter].classList.remove("show");
    if(counter == 0){
        counter = contents.length - 1;
    }
    else{
        counter--;
    }
    contents[counter].classList.add("show");
    headerImg.style.backgroundImage = `url(${bgImgs[counter]})`;
}
let nav =  document.querySelector(".header_img nav ul")
document.getElementById("hamburger").onclick = function(e){
    nav.classList.add('show_nav');
    e.stopPropagation()
}
document.querySelector("body").onclick = () =>{
    nav.classList.remove('show_nav')
}
nav.onclick = function(e){
    e.stopPropagation()
}

