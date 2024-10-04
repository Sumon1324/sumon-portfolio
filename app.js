let contactForm = document.getElementById('contactForm');
let showSubmit = document.getElementById("showSubmit");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let massage = document.getElementById("message").value;
  
  
  
  showSubmit.innerText = `Name: ${name} 
  Email: ${email} 
  Massage: ${massage}`;
  
  if (name = "Sumon132") {
    showSubmit.style.display = "block";
  };
  
  
  alert("Your message has been submitted");
  
  contactForm.reset();
});