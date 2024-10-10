    // JavaScript for toggling between light and dark modes
    const lightModeLink = document.getElementById('light-mode');
    const darkModeLink = document.getElementById('dark-mode');
    const htmlElement = document.documentElement;

    // Set default mode to light
    htmlElement.setAttribute('data-bs-theme', 'light');

    // Light mode
    lightModeLink.addEventListener('click', function () {
      htmlElement.setAttribute('data-bs-theme', 'light');
    });

    // Dark mode
    darkModeLink.addEventListener('click', function () {
      htmlElement.setAttribute('data-bs-theme', 'dark');
    });