//Select HTML elements
const themeButton = document.getElementById('theme-btn');
const body = document.body;

//Listen for button click events
themeButton.addEventListener('click', () => {
//Toggle the dark mode class on the body tag
    body.classList.toggle('dark-theme');

 //Update button label dynamically   
    if (body.classList.contains('dark-theme')) {
        themeButton.textContent = 'Switch to Light Theme';
    }else{
        themeButton.textContent = 'Switch to Dark Theme';
    }
});