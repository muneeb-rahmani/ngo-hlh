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
const toggler = document.getElementById('toggler');
const navLinks = document.getElementById('nav-links');

toggler.addEventListener('click', ()=>{
    navLinks.classList.toggle('active');
    // toggler.style.transition="all 0.5s ease-in-out;";
})


////////////// Pay Now

  function generateUPI() {
    // Get the amount from the form
    var amount = document.getElementById("amount").value;
    
    // Generate a unique transaction ID
    var transactionId = Date.now() + Math.random().toString(36).substring(2, 15);
    
    // Generate the UPI payment link
    var upiLink = "upi://pay?pa=wifaqstore@axisbank&pn=Ehsan%20Ahmed%20Siddiqui&am=" + amount + "&cu=INR&mode=04&purpose=00&src=00&tid=" + transactionId;
    
    // Display the UPI payment link in the container
    document.getElementById("upi-container").innerHTML = "<button><a href='" + upiLink + "'>Pay using UPI</a></button>";
  }

