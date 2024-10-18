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