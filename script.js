function toggleTheme() {
    // Check the current background color of the body
    const body = document.body;
    
    // Toggle a class called 'light-theme' on the body
    body.classList.toggle("light-theme");
    
    // Update the button text depending on the theme
    const themeBtn = document.getElementById("theme-btn");
    if (body.classList.contains("light-theme")) {
        themeBtn.innerText = "Dark Mode";
    } else {
        themeBtn.innerText = "Light Mode";
    }
}
