// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();

    // Get all tab buttons and content sections
    const tabButtons = document.querySelectorAll('nav button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Function to switch tabs
    function switchTab(tabId) {
        // Remove 'active' class from all tab contents and buttons
        tabContents.forEach(content => content.classList.remove('active'));
        tabButtons.forEach(btn => btn.classList.remove('active'));

        // Add 'active' class to the selected tab content and button
        document.getElementById(tabId).classList.add('active');
        document.querySelector(`button[data-tab="${tabId}"]`).classList.add('active');
    }

    // Add click event listeners to all tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            switchTab(button.dataset.tab);
        });
    });

    // Optional: Add smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Optional: Add a simple animation to the profile picture
    const profilePic = document.querySelector('.profile-pic');
    if (profilePic) {
        profilePic.addEventListener('mouseover', () => {
            profilePic.style.transform = 'scale(1.1)';
            profilePic.style.transition = 'transform 0.3s ease-in-out';
        });
        profilePic.addEventListener('mouseout', () => {
            profilePic.style.transform = 'scale(1)';
        });
    }

    // Optional: Add a fade-in animation to the sections when they become active
    function fadeIn(element) {
        element.style.opacity = 0;
        let opacity = 0;
        const timer = setInterval(() => {
            if (opacity >= 1) {
                clearInterval(timer);
            }
            element.style.opacity = opacity;
            opacity += 0.1;
        }, 50);
    }

    // Modify the switchTab function to include the fade-in effect
    const originalSwitchTab = switchTab;
    switchTab = function(tabId) {
        originalSwitchTab(tabId);
        fadeIn(document.getElementById(tabId));
    };

    // Initialize the page with the first tab active
    switchTab('about');
});