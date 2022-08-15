function toggleSidebar() {
    var sidebar = document.querySelector("#sidebar");
    var header = document.querySelector("#header");
    if (sidebar.className == 'sidebar-open') {
        sidebar.className = 'sidebar-close';
        header.className = null;
    } else if (sidebar.className == 'sidebar-close') {
        sidebar.className = 'sidebar-open';
        header.className = 'header-changed';
    }
}