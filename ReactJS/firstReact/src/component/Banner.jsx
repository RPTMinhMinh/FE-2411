import React from 'react'
import page from '../image/page.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Banner = () => {
    return (
        <>
            <div className='mt-2 d-flex align-items-center justify-content-center'>
                <img src={page} classname="img-fluid" alt="anh sieu dep" />
            </div>
        </>

    )
}
