import "./periodeStyle.css";
// let maps =
//   "https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FJakarta&showTitle=0&showTz=0&showCalendars=1&showTabs=1&showPrint=0";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
import { app } from "../../../../config/app"
import axios from 'axios'
import React, {useEffect, useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import "react-big-calendar/lib/css/react-big-calendar.css";

// const localizer = momentLocalizer(moment);

const Periode = () => {

  // const [dataPeriodi, setDataPeriodi] = useState([]);

  // useEffect(() => {
  //   getPeriodi()
  // }, [])

  // const getPeriodi = async() => {
  //   await axios.get(`${app}/indexPerio.json?idProject=4,idModule=5`)
  //   .then(res => {
  //     setDataPeriodi(res.data)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  }
  
  return (
    <>
      <div className="periode mt-3 mb-4">
        <div className="img-calendar mb-2">
          <img
            src="./image/logokaleender-removebg-preview.png"
            className="img-fluid"
          />
        </div>
        <div className="text-side text-center mb-4">
          <h3 className="fw-bold">Website Redesign</h3>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minima
            ea ab.
          </p>
        </div>
        <div className="maps d-flex justify-content-center">
        <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Calendar
        </button>

        <div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">Select Period</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">

              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <button class="nav-link active" id="nav-year-tab" 
                    data-bs-toggle="tab" 
                    data-bs-target="#nav-year"
                    type="button" role="tab" aria-controls="nav-year"
                    aria-selected="true">
                    Year
                  </button>
                  <button class="nav-link" id="nav-monthly-tab" 
                    data-bs-toggle="tab" 
                    data-bs-target="#nav-monthly"
                    type="button" role="tab" aria-controls="nav-monthly"
                    aria-selected="false">
                    Monthly
                  </button>
                  <button class="nav-link" id="nav-weekly-tab" 
                    data-bs-toggle="tab" 
                    data-bs-target="#nav-weekly"
                    type="button" role="tab" aria-controls="nav-weekly"
                    aria-selected="false">
                    Weekly
                  </button>
                  <button class="nav-link" id="nav-daily-tab" 
                    data-bs-toggle="tab" 
                    data-bs-target="#nav-daily"
                    type="button" role="tab" aria-controls="nav-daily"
                    aria-selected="false">
                    Daily
                  </button>
                </div>
              </nav>

                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane p-3 fade show active" id="nav-year" role="tabpanel"
                  aria-labelledby="nav-year-tab">
                    <h1>Year</h1>
                    <div class="d-flex mt-4">
                      <a href="#!" class="btn btn-danger rounded-circle text-light">2022</a>
                    </div>
                  </div>
                  <div class="tab-pane p-3 fade" id="nav-monthly" role="tabpanel"
                  aria-labelledby="nav-monthly-tab">
                    <h1>Monthly</h1>
                    <div class="d-flex justify-content-around mb-3 mt-4">
                      <a href="#!" class="btn btn-dark rounded-circle text-light">JAN</a>
                      <a href="#!" class="btn btn-dark rounded-circle text-light">FEB</a>
                      <a href="#!" class="btn btn-dark rounded-circle text-light">MAR</a>
                      <a href="#!" class="btn btn-dark rounded-circle text-light">APR</a>
                    </div>
                    <div class="d-flex justify-content-around mb-3">
                      <a href="#!" class="btn btn-dark rounded-circle text-light">MAY</a>
                      <a href="#!" class="btn btn-dark rounded-circle text-light">JUNE</a>
                      <a href="#!" class="btn btn-dark rounded-circle text-light">JULY</a>
                      <a href="#!" class="btn btn-dark rounded-circle text-light">AUG</a>
                    </div>
                    <div class="d-flex justify-content-around">
                      <a href="#!" class="btn btn-dark rounded-circle text-light">SEPT</a>
                      <a href="#!" class="btn btn-dark rounded-circle text-light">OCT</a>
                      <a href="#!" class="btn btn-dark rounded-circle text-light">NOV</a>
                      <a href="#!" class="btn btn-dark rounded-circle text-light">DEC</a>
                    </div>
                  </div>
                  <div class="tab-pane p-3 fade" id="nav-weekly" role="tabpanel"
                  aria-labelledby="nav-weekly-tab">
                    <h1>Weekly</h1>
                    <div class="d-flex justify-content-between mt-4">
                      <a href="#!" class="btn btn-dark rounded-circle text-light">01</a>
                      <a href="#!" class="btn btn-dark rounded-circle text-light">02</a>
                      <a href="#!" class="btn btn-dark rounded-circle text-light">03</a>
                      <a href="#!" class="btn btn-dark rounded-circle text-light">04</a>
                      <a href="#!" class="btn btn-dark rounded-circle text-light">05</a>
                      <a href="#!" class="btn btn-dark rounded-circle text-light">06</a>
                      <a href="#!" class="btn btn-dark rounded-circle text-light">07</a>
                      <a href="#!" class="btn btn-dark rounded-circle text-light">08</a>
                    </div>
                  </div>
                  <div class="tab-pane p-3 fade" id="nav-daily" role="tabpanel"
                  aria-labelledby="nav-daily-tab">
                    <h1>Daily</h1>
                    <div class="p-5">
                      <Calendar onChange={onChange} value={date} />
                    </div>
                  </div>
                </div>
              
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Understood</button>
              </div>
            </div>
          </div>
        </div>

        </div>
      </div>
    </>
  );
};

export default Periode;
