// const listStudent = [
//     {
//         id: 1,
//         name: "Tran Van A",
//         gender: 'boy',
//         mathScore: 9,
//         englishScore: 5,
//         literatureScore: 6
//     },
//     {
//         id: 2,
//         name: "Nguyen Van B",
//         gender: "boy",
//         mathScore: 7,
//         englishScore: 8,
//         literatureScore: 9
//     },
//     {
//         id: 3,
//         name: "Le Thi C",
//         gender: "girl",
//         mathScore: 6,
//         englishScore: 7,
//         literatureScore: 8
//     },
//     {
//         id: 4,
//         name: "Pham Van D",
//         gender: "boy",
//         mathScore: 8,
//         englishScore: 6,
//         literatureScore: 7
//     },
//     {
//         id: 5,
//         name: "Tran Thi E",
//         gender: "girl",
//         mathScore: 9,
//         englishScore: 9,
//         literatureScore: 10
//     }
// ]

let valueLocalStorage = localStorage.getItem('student');
valueLocalStorage = JSON.parse(valueLocalStorage);
if(valueLocalStorage === null){
    valueLocalStorage = [];
}

const listStudent = valueLocalStorage;

const $tbody = document.getElementById('tbody');
const $name = document.getElementById('name');
const $gender = document.querySelectorAll('input[name="gender"]:checked');
const $math = document.getElementById('math_score');
const $english = document.getElementById('english_score');
const $literature = document.getElementById('literature_score');

const $btnCreate = document.getElementById('create_student');

const $keyword = document.getElementById('keyword');
const $btnSearch = document.getElementById('search');



function renderInfoStudent (data) {
    if(data === undefined){
        data = listStudent;
    }
    let showStudent = '';
    for(let i = 0; i< data.length; i++){
        const student = data[i];
        showStudent += `
            <tr>
                <th scope="row">${student.id}</th>
                <td>${student.name}</td>
                <td>${student.gender === 'boy' ? 'Nam' : 'Nữ'}</td>
                <td>${student.mathScore}</td>
                <td>${student.englishScore}</td>
                <td>${student.literatureScore}</td>
                <td>${tbcStudent(student)}</td>
                <td>
                    <button type="button" class="btn btn-success" style="margin-right: 4px;">Update</button>
                    <button onclick="deleteStudent(${student.id})" type="button" class="btn btn-danger" style="margin-left: 4px;">Delete</button>
                </td>
            </tr>
        `;
    }
    $tbody.innerHTML = showStudent;
}


function tbcStudent(student){
    let tbc = 0;
    tbc = (student.mathScore + student.englishScore + student.literatureScore) / 3;
    return tbc;
}

//tạo biến count
//duyệt độ dài vòng lặp
//count++
//thêm vào mảng với id = count

// function idUp(listStudent){
//     let count = 1;
//     for(let i = 0; i< listStudent.length; i++){
//         if(listStudent !== null){
//             count++;
//             student[i].id = count;
//         }
//     }
// }

function resetInput(){
    $name.value = '';
    $gender.value = '';
    $math.value = '';
    $english.value = '';
    $literature.value = '';
}


function createStudent(){
    const name = $name.value;
    const gender = $gender.value;
    const math = Number($math.value);
    const english = Number($english.value);
    const literature = Number($literature.value);

    let count = 1;
    for(let i = 0; i< listStudent.length; i++){
        if(listStudent !== null){
            count++;
        }
    }

    const newStudent = {
        id: count,
        name: name,
        gender: gender,
        mathScore: math,
        englishScore: english,
        literatureScore: literature
    }

    listStudent.push(newStudent);
    resetInput();
    renderInfoStudent();

    localStorage.setItem('student', JSON.stringify(listStudent));
}
$btnCreate.onclick = createStudent;

function deleteStudent(id){
    let index = -1;
    for(let i = 0; i< listStudent.length; i++){
        if(listStudent[i].id == id){
            index = i;
        }
    }
    listStudent.splice(index,1);
    renderInfoStudent();
    localStorage.setItem('student', JSON.stringify(listStudent));
}

function searchStudent(){
    const keyword = $keyword.value;
    const result = [];
    for(let student of listStudent){
        if(student.name.toLowerCase().trim().includes(keyword.toLowerCase().trim()) || student.id == keyword){
            result.push(student);
        }
    }
    renderInfoStudent(result);
}
$btnSearch.onclick = searchStudent;

renderInfoStudent();