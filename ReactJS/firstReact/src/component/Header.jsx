import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export const Header = () => {
  return (
    <>
      <div className="container mb-5">
  <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li>
        <a href="#" className="nav-link px-2 link-secondary">
          Trang chủ
        </a>
      </li>
      <li>
        <a href="#" className="nav-link px-2 link-dark">
          Thực đơn
        </a>
      </li>
      <li>
        <a href="#" className="nav-link px-2 link-dark">
          Về chúng tôi
        </a>
      </li>
      <li>
        <a href="#" className="nav-link px-2 link-dark">
          Tin tức
        </a>
      </li>
      <li>
        <a href="#" className="nav-link px-2 link-dark" style={{ background: '#D2691E', color: 'white' }}>
          Đặt tiệc
        </a>
      </li>
    </ul>
    <div className="col-md-4 text-end d-flex justify-content-end align-items-center">
      <p id="msg" className="mt-3 me-4" />
      <a
        href="./login/login.html"
        id="login"
        className="btn btn-outline-primary me-2"
      >
        Login
      </a>
      <a
        className="btn btn-outline-danger me-2"
        id="sign-out"
        style={{ display: "none" }}
      >
        Sign-out
      </a>
      <a href="./signup/signup.html" id="sign-up" className="btn btn-primary">
        Sign-up
      </a>
    </div>
  </header>
</div>

    </>
  )
}
