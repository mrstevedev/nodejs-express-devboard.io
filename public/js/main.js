console.log("//DevBoard.io Node.js Application ------------");

// const emailForm = document.getElementById('emailForm');

// emailForm.addEventListener("submit", sendEmail);

// function sendEmail(e) {
//   e.preventDefault();
  
//   const email = document.getElementById("email").value;
//   const params = 'email='+email;
//   const xhr = new XMLHttpRequest();

//   xhr.open('POST', '/send', true);
//   xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

//   xhr.onload = function() {
//     console.log('onload ran');
//     console.log(this.responseText);
//   }
//   xhr.send(params);
// }

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
