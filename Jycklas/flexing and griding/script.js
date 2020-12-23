let hamburgerButton = document.getElementById('hamburgerbtn');
let sidebar = document.getElementById('sidebarid');

hamburgerButton.addEventListener('click', function () {
    if (sidebar.className == 'sidebar') {
        sidebar.className = 'sidebaropen';
    }

    else if (sidebar.className == 'sidebaropen') {
        sidebar.className = 'sidebar';
    }



})