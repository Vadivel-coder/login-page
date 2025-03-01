import React, { useEffect, useState } from 'react'
import './Home.css';

import axios from 'axios';
import s1 from './s1.jpg'
import s2 from './s2.jpg'
import p1 from './p1.jpg'



const Home = () => {
  const [ProductData,setproduct]=useState([]);
  async function dummy() {
    await axios.get("https://dummyjson.com/carts").then((res)=>{
      // setproduct(res.data.Products);
    });
  }
  dummy()
  useEffect(()=>{

  },[]);
  console.log(ProductData)

  

  
  return (
    <div className='container'>
     <header>
      <h1>Flopkart</h1>
      
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>Product</li>
        <li>Contact</li>
      </ul>
      <button class='btn'>Login</button>
     </header>
     <div className='Products'>
      <div className='Product'>
        <img src={s1}></img>
        <p>H&M Round Neck</p>
        <p>Size & color</p>
        <div className='colors'>
          <span>28</span>
          <span>30</span>
          <span>32</span>
          <span>36</span>
        </div>
        <div className='colors'>
          <div className='color'></div>
          <div className='color'></div>
          <div className='color'></div>
        </div>
        <h2>$70</h2>
      </div>
      <div className='Product'>
        <img src={s2}></img>
        <p>shirt with pant</p>
        <p>Size & color</p>
        <div className='colors'>
          <span>28</span>
          <span>30</span>
          <span>32</span>
          <span>36</span>
        </div>
        <div className='colors'>
          <div className='color'></div>
          <div className='color'></div>
          <div className='color'></div>
        </div>
        <h2>$140</h2>
      </div>  
      <div className='Product'>
        <img src={p1}></img>
        <p>Black Pant</p>
        <p>Size & color</p>
        <div className='colors'>
          <span>28</span>
          <span>30</span>
          <span>32</span>
          <span>36</span>
        </div>
        <div className='colors'>
          <div className='color'></div>
          <div className='color'></div>
          <div className='color'></div>
        </div>
        <h2>$20</h2>
      </div>
     
      </div>
     </div>

  )

}

export default Home