import React from 'react'

import './Search.scss'
export const Search = () => {
  return (
    <>
      <section>
        <div className="container c_flex">
          <div className="logo width">
            <img src='' alt="logotip" />
          </div>
          <div className="search-box f_lex">
            <i className='fa fa-search'></i>
            <input type="text" placeholder='Search and hit enter ...' />
            <span>All Category</span>
          </div>
        </div>
      </section>
    </>
  )
}
