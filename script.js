function toggleSidebar() {
    var sidebar = document.querySelector("#sidebar");
    var header = document.querySelector("#header");
    var content = document.querySelector("#content");
    if (sidebar.className == 'sidebar-open') {
        sidebar.className = 'sidebar-close';
        header.className = 'header-unchanged';
        content.className = 'content-unchanged';
    } else if (sidebar.className == 'sidebar-close') {
        sidebar.className = 'sidebar-open';
        header.className = 'header-changed';
        content.className = 'content-changed';
    }
}