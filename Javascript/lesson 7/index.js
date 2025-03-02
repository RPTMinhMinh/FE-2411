// const data = fetch('https://dummyjson.com/users');
//endpoint là một đoạn url mà phía backend họ xuất bản
// mình có thể tương tác với cái service phía be 
// vd: update dB
// console.log(data);

// data
// .then((res) =>  res.json())
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// });

// dòng 1 là trả về 1 Response object
// then() đầu tiên là return 1 Promise object
// then() thứ 2 là lấy dữ liệu từ cái Promise object đó
 
let getUsersData = [];
fetch('https://dummyjson.com/users')
.then((res)=> res.json())
.then((data) => {
    getUsersData = data.users;
    console.log(data);
    console.log(getUsersData);
    renderUser();
})
.catch((error) => {
    console.log(error);
});


const listUsers = document.getElementById('list-user');

const CardItem = (user) => {
    return `
    <div class="col-md-4 mb-4"> 
        <div class="card" style="width: 18rem;"> 
            <img src="${user.image}" class="card-img-top" alt="${user.username}"> 
            <div class="card-body"> 
                <h5 class="card-title">${user.username}</h5> 
                <p class="card-text">Age: ${user.age} / Gender: ${user.gender}</p>
                <p class="card-text">${user.address.address} / ${user.address.city} / ${user.address.country}</p>  
                </div> 
            </div> 
        </div>
    `;
}

function renderUser(){
    getUsersData.forEach((user) => {
        listUsers.innerHTML += CardItem(user);
    });
}