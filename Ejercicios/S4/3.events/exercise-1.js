let $btn = document.querySelector('#btnToClick');
$btn.addEventListener('click', btnOnClick);

function btnOnClick() {
    alert('me hiciste click!');
}