document.addEventListener('DOMContentLoaded', function () {
    const toastTriggers = document.querySelectorAll('.liveToastBtn');
    const toastLiveExample = document.getElementById('liveToast');

    toastTriggers.forEach(function (toastTrigger) {
        toastTrigger.addEventListener('click', function () {
            const toast = new bootstrap.Toast(toastLiveExample);
            toast.show();
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const downloadButtons = document.querySelectorAll('.download-btn');

    downloadButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const modal = button.closest('.modal');
            const modalInstance = bootstrap.Modal.getInstance(modal) || new bootstrap.Modal(modal);

            modalInstance.hide();
        });
    });
});

// Função para abrir/fechar a sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
}

// Função para fechar a sidebar ao clicar fora dela
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isHamburgerIcon = event.target.classList.contains('navbar-toggler-icon');

    if (!isClickInsideSidebar && !isHamburgerIcon && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
    }
});

function toggleDropdown(id) {
    const submenu = document.getElementById(id);
    submenu.classList.toggle('open');
}