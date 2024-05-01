document.addEventListener("DOMContentLoaded", function() {
    // Function to toggle the dropdown menu
    function toggleDropdown() {
        var dropdownMenu = document.getElementById("navDropdown");
        dropdownMenu.classList.toggle("show");
    }

    // Event listener for clicking the menu button
    var menuButton = document.getElementById("menuBtn");
    menuButton.addEventListener("click", toggleDropdown);

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.menu-button')) {
            var dropdowns = document.getElementsByClassName("nav");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
});
