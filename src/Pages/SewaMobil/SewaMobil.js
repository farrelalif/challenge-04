import React, { useEffect, useState } from 'react'
import bgcar from '../../../src/Img/img_car.png'
import './SewaMobil.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import Carcard from '../../component/carcard';
import Detailcar from '../../component/Detailcar';

export const SewaMobil = (props) => {

  const [startDate, setStartDate] = useState(new Date());
  const [selectvalue, setselectvalue] = useState(null)
  const [carData, setCarData] = useState([]);
  const [searchingCar, setSearchingCar] = useState(false);
  const [tipeDriver, setTipeDriver] = useState(null);
  const [carId, setCarId] = useState([]);
  const [showDetailCar, setShowDetailCar] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    getCarData();
    console.log(carData);
  }, []);

  async function getCarData() {
    await axios
      .get("https://rent-cars-api.herokuapp.com/admin/car")
      .then((res) => {
        setCarData(res.data);
      });
  }

  async function getCarById(id) {
    await axios
      .get(`https://rent-cars-api.herokuapp.com/admin/car/${id}`)
      .then((res) => {
        setCarId(res.data);
      });
    console.log(id);
  }

  function searchButtonClicked(e) {
    e.preventDefault();
    setIsClicked(!isClicked);
  }


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

        <div className="container">

          <div className='kotaksearch'>
            <label>Tipe Driver</label>
            {/* <input type="text" placeholder="Enter Username" name="uname" required /> */}
            <select className='pilih' name="tipedriver"
              id="tipedriver"
              onChange={(e) => {
                props.setTipeDriver(e.target.value);
              }}>
              <option value={true}> Dengan Sopir</option>
              <option value={false}> Tanpa Sopir (Lepas Kunci)</option>
            </select>
          </div>

          <div className='kotaksearch'>
            <label>Tanggal</label>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>

          <div className='kotaksearch'>
            <label>Waktu Jemput/Ambil</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
          </div>

          <div className='kotaksearch'>
            <label>Jumlah Penumpang (optional)</label>
            <input type="number" placeholder="Jumlah Penumpang" />
          </div>

          <div className='kotaksearch'>
            <button className='carimobil' type="submit" 
            onClick={props.searchCar}>
            {isClicked ? <p>edit</p> : <p>Cari Mobil</p>}
            </button>
          </div>

        </div>

      </div>
      <div className="flex justify-center flex-wrap items-center sm:flex-row flex-col sm:pt-24">
        {searchingCar
          ? carData
            .filter((data) => {
              return data.status.toString() === tipeDriver;
            })
            .map((data) => {
              return (
                <div className="card-container ">
                  <Carcard
                    id={data.id}
                    startRent={data.start_rent_at}
                    name={data.name}
                    image={data.image}
                    price={data.price}
                    status={data.status}
                    detailCar={(e) => {
                      e.preventDefault();
                      setSearchingCar(false);
                      getCarById(data.id);
                      setShowDetailCar(true);
                    }}
                  />
                </div>
              );
            })
          : null}
      </div>
      <div className="detail-car-container">
        {showDetailCar ? (
          <Detailcar
            id={carId.id}
            startRent={carId.start_rent_at}
            name={carId.name}
            image={carId.image}
            price={carId.price}
            status={carId.status}
          />
        ) : null}
      </div>
    </div>
  )
}
