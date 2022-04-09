import React from 'react'
import { Container } from 'react-bootstrap'
import bgcar from '../../../src/Img/img_car.png'
import './SewaMobil.css'

export const SewaMobil = () => {
  return (
    <div className='backgroundpage'>
      <div className='isi'>
        <text className='text'>
          <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
          <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
        </text>

        <img className='bg-car' src={bgcar} />

      </div>

      <div className='search'>


        <form>

        <div className="container">

          <div className='kotaksearch'>
            <label>Username</label>
            <input type="text" placeholder="Enter Username" name="uname" required />
          </div>


          <div className='kotaksearch'>
            <label>Password</label>
            <input type="password" placeholder="Enter Password" name="psw" required />
          </div>

          <div className='kotaksearch'>
            <button type="submit">Login</button>
          </div>

        </div>
      </form>
      </div>
    </div>
  )
}