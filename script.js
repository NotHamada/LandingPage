function toggleSidebar() {
    var sidebar = document.querySelector("#sidebar");
    var header = document.querySelector("#header");
    var content = document.querySelector("#content");
    var work = document.querySelector("#work");
    if (sidebar.className == 'sidebar-open') {
        sidebar.className = 'sidebar-close';
        header.className = 'header-unchanged';
        content.className = 'content-unchanged';
        work.className = 'work-unchanged';
    } else if (sidebar.className == 'sidebar-close') {
        sidebar.className = 'sidebar-open';
        header.className = 'header-changed';
        content.className = 'content-changed';
        work.className = 'work-changed';
    }
}