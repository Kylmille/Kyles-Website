
// JavaScript code to toggle the visibility of the contact popup

// Get the contact link and the popup elements
const contactLink = document.getElementById('contact-link');
const contactPopup = document.getElementById('contact-popup');
const closeBtn = document.querySelector('.close');

// Function to show the contact popup
function showContactPopup() {
  contactPopup.style.display = 'block';
}

// Function to hide the contact popup
function hideContactPopup() {
  contactPopup.style.display = 'none';
}

// Add event listeners to the contact link and close button
contactLink.addEventListener('click', showContactPopup);
closeBtn.addEventListener('click', hideContactPopup);

// JavaScript code to set the active link

function setActiveLink() {
  // Get all the navigation links
  const navLinks = document.querySelectorAll('nav ul li a');

  // Add an event listener to each link
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      // Prevent the default link behavior
      event.preventDefault();

      // Remove the 'active' class from all links
      navLinks.forEach(link => link.classList.remove('active'));

      // Add the 'active' class to the clicked link
      link.classList.add('active');
    });
  });
}

// Call the setActiveLink function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', setActiveLink);
