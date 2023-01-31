const url = "https://spreadsheets.google.com/feeds/list/1vi5otdyxymuaMjZrPlASQoGTMKWZXfNtFsZ0YqSqrhE/od6/public/values?alt=json";

fetch(url)
  .then(response => response.json())
  .then(data => {
    const studentData = data.feed.entry;
    let table = document.getElementById("student-data");
    for (let i = 0; i < studentData.length; i++) {
      let row = table.insertRow();
      let cell1 = row.insertCell();
      let cell2 = row.insertCell();
      let cell3 = row.insertCell();
      cell1.innerHTML = studentData[i].gsx$rollno.$t;
      cell2.innerHTML = studentData[i].gsx$name.$t;
      cell3.innerHTML = studentData[i].gsx$email.$t;
    }

    document.getElementById("search-button").addEventListener("click", function() {
      let searchBox = document.getElementById("search-box");
      let searchValue = searchBox.value;
      for (let i = 0; i < studentData.length; i++) {
        if (studentData[i].gsx$rollno.$t === searchValue) {
          console.log(studentData[i]);
        }
      }
    });
  })
  .catch(error => {
    console.error(error);
  });
