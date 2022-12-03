let valueDisplay = document.querySelectorAll('.num');
let interval = 0;

valueDisplay.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function (){
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration)
});

//////////////// Gallery //////////////////////

const gallery = document.querySelector('.gallery');

const itemboxes = document.querySelectorAll('.itembox');
console.log(itemboxes);

gallery.addEventListener("click", (e)=> {
    console.log(e)


    if(e.target.classList.contains("filter")){
        gallery.querySelector('.active').classList.remove("active");

        e.target.classList.add("active");

        const filterValue = e.target.getAttribute("data-filter");
        console.log(filterValue);

        itemboxes.forEach(item =>{


            if(item.classList.contains(filterValue) || filterValue === "all"){
                item.classList.add("show")

                item.classList.remove("hide");
            }
            else{
                item.classList.add("hide")
            }
        
            
        })
    }
})



// const gallery = document.querySelector(".nav-container");

// const itemBoxes = document.querySelectorAll(".itemBox")
// console.log(itemBoxes)

// gallery.addEventListener('click', (e)=>{
//     console.log(e);


//     if(e.target.classList.contains('filter')){
//         gallery.querySelector(".active").classList.remove("active");

//         e.target.classList.add("active");

//         const filterValue = e.target.getAttribute("data-filter");
//         console.log(filterValue);

//         itemBoxes.forEach(item => {

//             if(item.classList.contains(filterValue) || filterValue === "all"){
//                 item.classList.add("show");

//                 item.classList.remove('hide')
//             }else{
//                 item.classList.add('hide');
//             }
            
//         })
//     }
// })




//////////////// Navbar
const toggler = document.getElementById('toggler');
const navLinks = document.getElementById('nav-links');

toggler.addEventListener('click', ()=>{
    navLinks.classList.toggle('active');
    // toggler.style.transition="all 0.5s ease-in-out;";
})

// let navCenter = document.querySelector(".nav-center");
// navCenter.addEventListener('click', ()=>{
//     navCenter.style.transition="all 0.5s ease";
// })

