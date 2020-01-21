// Use debounce to limit requests every keypress
const searchJob = _.debounce(function (e, val) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `js/send.js?search=${e.target.value}`, true);
  
    //   xhr.onload = function() {
    //     if (this.status == 200) {
    //       console.log(this.responseText);
    //     }
    //   }
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
      }
    };
    xhr.send();
  }, 500);
  
  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready
  
  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
  
  // Listener to search field
  const search = document.querySelector(".search-field");
  const searchForm = document.querySelector(".search-form");
  search.addEventListener("keyup", e => searchJob(e, search.value));
  // searchForm.addEventListener("submit", e => e.preventDefault());
  