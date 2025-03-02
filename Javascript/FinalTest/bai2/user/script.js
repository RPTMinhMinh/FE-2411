let users = JSON.parse(localStorage.getItem('users'));

const $keyword = document.getElementById('keyword');
const $tbody = document.getElementById('tbody')
const $btnSearch = document.getElementById('search')
function renderUsers(data) {
    if (data === undefined) {
        data = users
    }
    let htmlUser = ''
    for (let i = 0; i < data.length; i++) {
        const userCurrent = data[i];
        htmlUser += `
        <tr>
            <th scope="row">${userCurrent.id}</th>
            <td>${userCurrent.first_name}</td>
            <td>${userCurrent.last_name}</td>
            <td>${userCurrent.email}</td>
        </tr>
        `;
    }
    $tbody.innerHTML = htmlUser;
}

// b1: tạo hàm searchUsers
function searchUser() {
    // b2: lấy ra giá trị của keyword vừa nhập
    const keyword = $keyword.value.trim().toLowerCase();
    //b3: tạo mảng rỗng và biến check để kiểm tra
    let result = [];
    let check = false
    // b3: duyệ mạng users để kiểm tra người dùng
    for (let user of users) {
        // b4: nếu có họ tên or email -> hiển thị id, họ và tên, email.
        if (user.first_name.toLowerCase().includes(keyword) || user.last_name.toLowerCase().includes(keyword) || user.email.includes(keyword)) {
            check = true;
            result.push(user);
        }
    }
    // nếu không : không tìm thấy
    if (!check) {
        alert('không tìm thấy')
    }
    // nếu trống : In ra toàn bộ users
    renderUsers(result);
    $keyword.value = ''

}

// b5: gán hàm searchUser cho button tương ứng
$btnSearch.onclick = searchUser
renderUsers();