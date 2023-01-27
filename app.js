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


gallery.addEventListener("click", (e)=> {
    


    if(e.target.classList.contains("filter")){
        gallery.querySelector('.active').classList.remove("active");

        e.target.classList.add("active");

        const filterValue = e.target.getAttribute("data-filter");
        

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





//////////////// Navbar
let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});


// const toggler = document.getElementById('toggler');
// const navLinks = document.getElementById('nav-links');

// toggler.addEventListener('click', ()=>{
//     navLinks.classList.toggle('active');
//     // toggler.style.transition="all 0.5s ease-in-out;";
// })




////////////// Pay Now

  function generateUPI() {
    // Get the amount from the form
    let amount = document.getElementById("amount").value;
    
    // Generate a unique transaction ID
    let transactionId = Date.now() + Math.random().toString(36).substring(2, 15);
    
    // Generate the UPI payment link
    let upiLink = "upi://pay?pa=wifaqstore@axisbank&pn=Ehsan%20Ahmed%20Siddiqui&am=" + amount + "&cu=INR&mode=04&purpose=00&src=00&tid=" + transactionId;
    
    // Display the UPI payment link in the container
    document.getElementById("upi-container").innerHTML = "<button><a href='" + upiLink + "'>Pay using UPI</a></button>";
  }



  ///// Contact Us

  // const scriptURL = 'https://script.google.com/macros/s/AKfycbzKPvrkc37DbO8_HjQWMyPn39nrCo1WvtCudGg_exJYkrJ9GshOTD8AQPbn_8Cr97Or0w/exec'
  // const form = document.forms['contact-us']

  // form.addEventListener('submit', e => {
  //   e.preventDefault()
  //   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  //     .then(response => console.log('Success!', response))
  //     .catch(error => console.error('Error!', error.message))
  // })
