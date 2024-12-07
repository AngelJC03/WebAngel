

/*****
 * FUNCTION THAT ENSURES THAT 
 * THE PULLEE IS HIDDEN AFTER SWIPING
 * TO 100% AND STORES THE VALUE TO THE SESSION STORAGE
 */
document.addEventListener('DOMContentLoaded', () => {
    const pullee = document.getElementById('pullee');
    const pulleeContainer = document.querySelector('.pullee-container');
    const navbar = document.querySelector('.navbar-container');
    const footer = document.querySelector('.home-page-footer');
    const tableContainer = document.querySelector('.project-table');
    const recentWork = document.querySelector('.recent-work-label');

    // Check if the user has already swiped in the current session
    const hasSwipedBefore = sessionStorage.getItem('hasSwiped');

    if (hasSwipedBefore) {
        // Hide the pullee container immediately if the user has swiped before
        pulleeContainer.style.display = 'none';
        navbar.classList.add('nav-bar-fade-in');
        footer.classList.add('visible');
        tableContainer.classList.add('table-fade-in');
        recentWork.classList.add('visible');
    }

    pullee.addEventListener('input', () => {
        if (parseInt(pullee.value) === 100) {
            // Mark as swiped in sessionStorage
            sessionStorage.setItem('hasSwiped', 'true');

            // Hide the pullee container
            pulleeContainer.style.display = 'none'; 
            navbar.classList.add('nav-bar-fade-in'); // Fade in the navbar
            footer.classList.add('visible'); // Trigger fade-in effect for footer
            tableContainer.classList.add('table-fade-in'); // Trigger fade-in effect for table
            recentWork.classList.add('visible'); // Trigger fade-in effect for recent work label
        }
    });
});


/******
 * PULLEE ANIMATION WHICH SWIPES THE SCREEN UP
* ON REACHING 100%
 */
document.addEventListener('DOMContentLoaded', () => {
    const pullee = document.getElementById('pullee');
    const pulleeContainer = document.querySelector('.pullee-container');
    const navbar = document.querySelector('.navbar-container'); // Select navbar-container
    const footer = document.querySelector('.home-page-footer'); // Select footer
    const tableContainer = document.querySelector('.project-table');
    const recentWork = document.querySelector('.recent-work-label');

    pullee.addEventListener('input', () => {
        console.log(pullee.value);

        // When pullee reaches the max value
        if (parseInt(pullee.value) === 100) {
            pulleeContainer.classList.add('slide-up'); // Slide container up
            navbar.classList.add('nav-bar-fade-in'); // Fade in the navbar
            footer.classList.add('visible'); // Trigger fade-in effect for footer
            tableContainer.classList.add('table-fade-in'); // Trigger fade-in effect for table
            recentWork.classList.add('visible'); // Trigger fade-in effect for recent work label
        }
    });
});