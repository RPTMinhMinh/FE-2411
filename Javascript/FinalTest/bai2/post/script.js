let users = JSON.parse(localStorage.getItem('users'))

const $tbody = document.getElementById('tbody');


function showPost(data) {
    if (data === undefined) {
        data = posts;
    }
    let htmlPosts = '';
    for (let i = 0; i < posts.length; i++) {
        const postCurrent = posts[i];
        let userFirstName = '';
        let userLastName = '';
        for (let j = 0; j < users.length; j++) {
            if (users[j].id === postCurrent.user_id) {
                userFirstName = users[j].first_name;
                userLastName = users[j].last_name;
                break; 
            }
        }
        htmlPosts += `
        <tr>
        <th scope="row">${postCurrent.id}</th>
        <td>${postCurrent.title}</td>
        <td>${userFirstName}</td>
        <td>${userLastName}</td>
        <td>${postCurrent.created_at}</td>
    </tr>
    `;
    }
    $tbody.innerHTML = htmlPosts;
}

showPost()
