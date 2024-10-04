function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

//TYPEING//


//Navigation Bar//

let nav = document.getElementById('nav');
let navOpenBtn = document.getElementById("navOpenBtn");
let navCloseBtn = document.getElementById("navCloseBtn");

navOpenBtn.addEventListener("click", function() {
  nav.classList.add("openNav");
  navOpenBtn.style.display = "none";
});

navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
  navOpenBtn.style.display = "block";
});

//Progress Animation//

let css = document.getElementById("css");
let html = document.getElementById("html");
let js = document.getElementById("js");

window.addEventListener("scroll", function() {
  if (isInViewport(css)) {
    css.classList.add("css");
  };
});

window.addEventListener("scroll", function() {
  if (isInViewport(html)) {
    html.classList.add("html")
  }
})

window.addEventListener("scroll", function() {
  if (isInViewport(js)) {
    js.classList.add("js")
  }
})


//Contact Form//

window.addEventListener("DOMContentLoaded", function() {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("contactForm");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("showSubmit");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}