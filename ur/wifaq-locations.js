const users = document.querySelector(".all-data");
const searchInput = document.getElementById("search-maktab");
const submitBtn = document.getElementById("submit-button");

const maktabArr = [];

const getUserData = async () => {
  try {
    const res = await fetch("./wifaq-data.json");
    const data = await res.json();
    console.log(data);

    data.map((user, index) => {
      const li = document.createElement("li");

      li.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="maktab-data">
        <img src="../images/wifaq-logo.webp" alt="">
        <h2>${user.name}</h2>
        <p>${user.address}<p>
        <div class="wifaq-contact-icon"> <button style="background: #2E4764;border: none;padding:0.5rem;border-radius: 5px 0 0 5px;margin-bottom: 1rem;"><a href="tel:${user.contact}" target="_blank"><i class="fa-solid fa-phone" style="font-size: 1rem;"></i></a> </button><a href=${user.location} target="_blank"><button style="background: green; color: white; font-size: 1.25rem;border: none;padding:0.5rem;border-radius: 0 5px 5px 0px;cursor: pointer;margin-bottom: 1rem;">Get Direction</button></a> </div>
        
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
  users.style.display = "flex";

  maktabArr.forEach((curData) => {
    const { id, element } = curData;

    element.innerText.toLowerCase().includes(val.toLowerCase())
      ? users.appendChild(element)
      : null;
  });
});

getUserData();
