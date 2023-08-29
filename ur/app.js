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


////////////// Pay Now

  function generateUPI() {
    // Get the amount from the form
    let amount = document.getElementById("amount").value;
    
    // Generate a unique transaction ID
    let transactionId = Date.now()
       + Math.random()
       .toString(36)
       .substring(2, 15);
    
    // Generate the UPI payment link
    let upiLink = "upi://pay?pa=wifaqstore@axisbank&pn=Ehsan%20Ahmed%20Siddiqui&am=" + amount + "&cu=INR&mode=04&purpose=00&src=00&tid=" + transactionId;
    
    // Display the UPI payment link in the container
    document.getElementById("upi-container").innerHTML = "<button><a href='" + upiLink + "'>Pay using UPI</a></button>";
  }


///////////// Wifaq Location
const users = document.querySelector(".all-data");
const searchInput = document.getElementById("search-maktab");
const submitBtn = document.getElementById("submit-button");

const maktabArr = [];

const getUserData = async () => {
  try {
    const res = await fetch("./test.json");
    const data = await res.json();
    console.log(data);

    data.map((user, index) => {
      const li = document.createElement("li");

      li.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="maktab-data">
        <img src="./images/wifaq-logo.webp" alt="">
        <h2>${user.name}</h2>
        <p>${user.address}<p>
        <a href=${user.location} target="_blank"><button>Get Direction</button></a>
        </div>
        `
      );

      maktabArr.push({ id: index, element: li });
      users.appendChild(li);
    });
  } catch (error) {
    console.log(error);
  }
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const val = searchInput.value;
  console.log(val);

  users.innerHTML = "";
  users.style.display = "block";

  maktabArr.forEach((curData) => {
    const { id, element } = curData;

    element.innerText.toLowerCase().includes(val.toLowerCase())
      ? users.appendChild(element)
      : null;
  });
});

getUserData();



/////Translator
document.addEventListener("DOMContentLoaded", function() {
  var selectElement = document.getElementById("mySelect");
  selectElement.addEventListener("change", function() {
    var selectedOption = selectElement.value;
    if (selectedOption !== "") {
      var currentUrl = window.location.href.replace(/\/[^/]*$/, "/");
      window.location.href = currentUrl + selectedOption;
    }
  });
});

