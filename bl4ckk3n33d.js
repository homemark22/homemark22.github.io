document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-mode-btn');
    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');
            toggleButton.classList.toggle('dark-mode');
        });
    }
});
