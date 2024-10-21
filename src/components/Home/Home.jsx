import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import { CarruselSeries } from "../CarruselSeries/CarruselSeries";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Home.css'
import { Link } from "react-router-dom";

import logo from '../../assets/TRAILERS-PELUCULAS-SERIES-18-10-2024.jpg'


export const Home = () => {

  const API_KEY = '4f5f43495afcc67e9553f6c684a82f84'
    const API_URL = 'https://api.themoviedb.org/3'
    const baseURL = "https://image.tmdb.org/t/p/original";

const [movies, setMovies] = useState([]);


  const fetchMovies = async (searchkey) => {
    const type = searchkey ? 'search' : 'discover'
    const { data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchkey,
     },
    });
    setMovies(results) 

  }

useEffect(() => {
 fetchMovies()
}, []);

  return (
      <>
          <section className="container__home">
        
        <img className="logo" src={logo} />
        <h1 className="title__cartelera">Peliculas En Cartelera</h1>
        <Link to='movies'>
      <Swiper
        spaceBetween={320}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
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
       
        {movies.map((movie) => (
          
          <SwiperSlide key={movie.title} className="swiper-slide">
            <div className="nabvar__card">
              <img  src={baseURL + movie.backdrop_path} />
              <h1>{movie.title}</h1>
            </div>
          </SwiperSlide>
        ))}
          </Swiper>
        </Link>
        <Link to='series'>
          <CarruselSeries />
          </Link>
              </section>
    </>
  )
}
