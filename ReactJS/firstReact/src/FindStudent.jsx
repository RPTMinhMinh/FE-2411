import React from 'react'

export const FindStudent = ({ studentList }) => {
    console.log(studentList);

    if (!studentList) {
        return <div>khong co du lieu</div>
    }
    console.log(studentList.filter(item => 
       item.gender == 'male' && item.score % 2 === 0
    ));

    if (Array.isArray(studentList)) {


        return (
            <>
                <div>Học sinh có giới tính NAM và điểm số CHẴN</div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">ID</th>
                            <th scope="col">Tuổi</th>
                            <th scope="col">Họ và tên</th>
                            <th scope="col">Giới tính</th>
                            <th scope="col">Điểm số</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentList.filter(item =>
                            item.gender == 'male' && item.score % 2 === 0
                        ).map((student, i) => (
                            <tr key={student.id}>
                                <td>{i + 1}</td>
                                <td>{student.id}</td>
                                <td>{student.age}</td>
                                <td>{student.name}</td>
                                <td>{student.gender}</td>
                                <td>{student.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        )
    }




    // return (
    //     <>
    //         <div>Học sinh có giới tính NAM và điểm số CHẴN</div>
    //         <table class="table">
    //             <thead>
    //                 <tr>
    //                     <th scope="col">STT</th>
    //                     <th scope="col">ID</th>
    //                     <th scope="col">Tuổi</th>
    //                     <th scope="col">Họ và tên</th>
    //                     <th scope="col">Giới tính</th>
    //                     <th scope="col">Điểm số</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {findStudentByCondition.map((student, i) => (
    //                     <tr key={student.id}>
    //                         <td>{i + 1}</td>
    //                         <td>{student.id}</td>
    //                         <td>{student.age}</td>
    //                         <td>{student.name}</td>
    //                         <td>{student.gender}</td>
    //                         <td>{student.score}</td>
    //                     </tr>
    //                 ))}
    //             </tbody>
    //         </table>
    //     </>
    // )
}
