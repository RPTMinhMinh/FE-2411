const $first_name = document.getElementById('first_name');
const $last_name = document.getElementById('last_name');
const $email = document.getElementById('email');
const $password = document.getElementById('password');
const $msg = document.getElementById('msg');
const $btnregister = document.getElementById('register')
// b1: tạo hàm register()
function register() {
    // b2: lấy ra các giá trị người dùng vừa nhập từ 4 trường
    const first_name = $first_name.value.trim();
    const last_name = $last_name.value.trim();
    const email = $email.value.trim();
    const password = $password.value.trim();
    // b3: nếu thông tin để rỗng -> Hãy nhập đầy đủ thông tin
    if (first_name === '' || last_name === '' || email === '' || password === '') {
        $msg.innerHTML = 'Hãy nhập đầy đủ thông tin'
        return;
    }
    let check = false;
    // b4: duyệt mảng users để kiểm tra người dùng
    for (let user of users) {
        // b5: nếu email tồn tại : Email này đã có tài khoản
        if (user.email === email) {
            check = true;
            $msg.innerHTML = 'Email này đã có tài khoản'
            return;
        }
    }
    //     nếu không : tạo object registerSuccess và thêm vào users
    if(!check){
        //     xử lý id
        let idUsers = users.length;
        const registerSuccess = {
            id: ++idUsers,
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password
        }
        users.push(registerSuccess);

        localStorage.setItem('users', JSON.stringify(users));

        $msg.innerHTML = 'Đăng ký thành công!';
        console.log(users);
    }
    

    // b6: reset ô input
    $first_name.value = '';
    $last_name.value = '';
    $email.value = '';
    $password.value = '';
    console.log(users)
    
}

// b7: gán hàm register() vào button tương ứng và chuyển về trang login 
$btnregister.onclick = register;