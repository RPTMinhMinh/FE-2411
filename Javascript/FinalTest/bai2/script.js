const $btnSignout = document.getElementById('sign-out');
const $msg = document.getElementById('msg');
const $btnlogin = document.getElementById('login');
const $btnSignup = document.getElementById('sign-up');

const user = JSON.parse(localStorage.getItem('userLogin'));
if (user) {
    $msg.innerHTML = 'Xin chào ' + user.first_name + ' ' + user.last_name;
    $btnSignout.style.display = "inline-block";
    $btnlogin.style.display = 'none';
    $btnSignup.style.display = 'none'
}

function signout(){
    localStorage.removeItem('userLogin'); // Xóa thông tin người dùng
    $msg.innerHTML = ''; // Xóa thông báo
    $btnSignout.style.display = 'none'; // Ẩn nút Sign-out
    $btnlogin.style.display = 'inline-block'; // Hiện nút Login
    $btnSignup.style.display = 'inline-block';
}

$btnSignout.onclick = signout;