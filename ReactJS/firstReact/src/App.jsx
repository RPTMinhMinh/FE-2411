import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './component/Header'
import { Banner } from './component/Banner'
import { FindStudent } from './FindStudent'


function App() {
  const Students = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    age: 14 + Math.floor(Math.random() * 3),
    name: `Văn ${String.fromCharCode(65 + i)}`,
    gender: Math.random() < 0.5 ? "male" : "female",
    score: Math.floor(Math.random() * 51) + 50,
  }));
  
  if(!Students){
    return <div>K co du lieu</div>
  }

  return (
    <>
      <div>Tất cả học sinh</div>
      {Students.map((student, idx) => (
        <div key={student.id}>
          <div>=========== Học sinh {idx + 1} =============</div>
          <div>ID:{student.id}</div>
          <div>Tuổi:{student.age}</div>
          <div>Học và tên:{student.name}</div>
          <div>Giới tính:{student.gender}</div>
          <div>Điểm số:{student.score}</div>
        </div>
      ))}
      <div>------------------------</div>
      <FindStudent studentList={Students}/>

    </>
  )
}

export default App
