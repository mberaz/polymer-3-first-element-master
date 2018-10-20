var myElement = {};
document.addEventListener("DOMContentLoaded", function () {
    myElement = document.getElementById('michaelElementId');
    myElement.addEventListener('form.element.message', function (e) {
        document.getElementById('mesagespan').innerHTML = e.detail.message
    });


});

function doclick() {
    myElement.handleOutSideClick();
};

function changeName() {
    myElement.user = {
        "firstname": "test",
        "lastname": "user",
        "age": 11
    };

    myElement.isbaron=false;
}