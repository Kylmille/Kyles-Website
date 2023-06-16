
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
