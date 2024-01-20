document.addEventListener('DOMContentLoaded', function () {
    // Check if user has a preference for dark mode
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set initial mode based on user preference
    if (prefersDarkScheme) {
        document.body.classList.add('dark-mode');
    }

    // Toggle dark/light mode on button click
    const toggleButton = document.getElementById('toggle-mode-btn');
    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');
        });
    }
});
