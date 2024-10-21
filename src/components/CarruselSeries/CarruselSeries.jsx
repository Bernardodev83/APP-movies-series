import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../Home/Home.css'

export const CarruselSeries = () => {

  const API_KEY = '4f5f43495afcc67e9553f6c684a82f84'
    const API_URL = 'https://api.themoviedb.org/3'
    const baseURL = "https://image.tmdb.org/t/p/original";

const [series, setSeries] = useState([]);


  const fetchSeries = async (searchkey) => {
    const type = searchkey ? 'search' : 'discover'
    const { data: { results },
    } = await axios.get(`${API_URL}/${type}/tv`, {
      params: {
        api_key: API_KEY,
        query: searchkey,
     },
    });
    setSeries(results) 

  }

useEffect(() => {
 fetchSeries()
}, []);

  return (
      <>
          <section className="container__home">
       <h1 className="title__cartelera">Series mas Populares</h1>
      <Swiper
        spaceBetween={320}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        speed={2000}
        className="mySwiper"
      >
       
        {series.map((serie) => (
          
          <SwiperSlide key={serie.original_name} className="swiper-slide">
            <div className="nabvar__card">
              <img  src={baseURL + serie.backdrop_path} />
              <h1 className="title_series_Card">{serie.original_name}</h1>
            </div>
          </SwiperSlide>
        ))}
              </Swiper>
              </section>
    </>
  )
}
