console.log("//DevBoard.io Node.js Application ------------");

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
}, 700);

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
searchForm.addEventListener("submit", e => e.preventDefault());

const sendEmailAddress = document.querySelector(".send-email-address");
sendEmailAddress.addEventListener("click", e => {
  e.preventDefault();
  const emailAddress = document.querySelector(".email").value;
  const formData = new FormData(this);
  fetch("send.js");
});

// Cookie Notification
const cookiesAcceptBtn = document.querySelector(".cookies-accept-btn");
const cookiesChangePreferencesBtn = document.querySelector(
  ".cookies-change-preferences-btn"
);
const cookiesNotification = document.querySelector(".cookies-notification");
cookiesAcceptBtn.addEventListener("click", () => {
  console.log("cookies accept button clicked");
  cookiesAcceptBtn.style.background = "#568c9b";
  cookiesAcceptBtn.style.color = "#fff";

  cookiesNotification.style.display = "none";
});

cookiesChangePreferencesBtn.addEventListener("click", () => {
  console.log("cookies accept button clicked");
  cookiesChangePreferencesBtn.style.background = "#568c9b";
  cookiesChangePreferencesBtn.style.color = "#fff";
});

//if cookie hasn't been set...
if (document.cookie.indexOf("CookieNotificationShown") < 0) {
  // Display block / show modal
  cookiesNotification.style.display = "block";

  cookiesAcceptBtn.addEventListener("click", () => {
    // Store cookie
    document.cookie =
      "CookieNotificationShown=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
  });
} else {
  // Display none on notification modal
  cookiesNotification.style.display = "none";
}

// Scroll to top
let basicScrollTop = function() {
  // The button
  let backToTopBtn = document.querySelector(".back-to-top-btn");

  // Smooth scroll top
  let topScrollTo = function() {
    if (window.scrollY != 0) {
      setTimeout(function() {
        window.scrollTo(0, window.scrollY - 30);
        topScrollTo();
      }, 5);
    }
  };
  // Listeners
  backToTopBtn.addEventListener("click", topScrollTo);
};
basicScrollTop();
