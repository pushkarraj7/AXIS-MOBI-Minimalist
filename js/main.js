// JavaScript to highlight the current section in the sidebar
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    
    let currentSectionId = "";

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSectionId = section.id;
        }
    });

    sidebarLinks.forEach((link) => {
        if (link.getAttribute('href').substring(1) === currentSectionId) {
            link.style.backgroundColor = "#444"; // Highlight the active link
        } else {
            link.style.backgroundColor = ""; // Reset background color for other links
        }
    });
});

// Function to handle form submission and show the modal
function subscribe(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('subscribeModal'));
    modal.show();
}


// JavaScript to show the button when scrolling
window.onscroll = function () {
    const backToTopButton = document.getElementById('backToTop');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
};

// JavaScript to scroll back to the top when the button is clicked
document.getElementById('backToTop').onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};


// Get the current year and update the span element
document.getElementById('currentYear').textContent = new Date().getFullYear();
