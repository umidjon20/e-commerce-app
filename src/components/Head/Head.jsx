import React from 'react'

import './Head.scss'
export const Head = () => {
  return (
    <>
        <section className='head'>
            <div className="container d_flex">
                <div className="left row">
                    <i className='fa fa-phone'></i>
                    <label>+998997346704</label>
                    <i className='fa fa-envelope'></i>
                    <label>amirqulov@gmail.com</label>
                </div>
                <div className="right row RText">
                    <label>Theme FAQ's</label>
                    <label>Needs Helps</label>
                    <span></span>
                    <label>EN</label>
                    <span></span>
                    <label>USD</label>


                </div>
            </div>

        </section>
    </>
  )
}
