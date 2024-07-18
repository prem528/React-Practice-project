import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram } from "react-icons/ai";
 
const Home = () => {
  return (
    <>
      <div className='home' id='home'>
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>

      </div>
      <div className='home2'>
        <img src={vg} alt='Graphic' />

        <div>
          <p>
            We are your one and only Solution to the tech problems
            you face everyday.
            We are leading tech company whose aim is to increase the
            problem solving ability in children
          </p>
        </div>
      </div>

      <div className='home3' id='about'>
        <div>
          <h1>Who we are ??</h1>
          <p>
            Google is by far the most popular search engine on the web.
            What makes Google stand out the most from the rest of the search
            engines out there is the fact that it returns hits for different
            search queries in a very short amount of time. In fact as an added feature
            the website tells the user how long the search took as it returns the websites it found.
            Some of the advanced features of the website include the ability to filter out certain subjects
            and certain websites. Google also offers the user the ability to search for images a tool not offered
            by most other search engines.
          </p>
        </div>
      </div>

      <div className='home4' id='brands'>
        <div>
          <h1>Brands</h1>

          <article>
            <div
             style={{
              animationDelay:"0.3s"
            }}>
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>

            <div 
             style={{
              animationDelay:"0.5s"
            }}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>

            <div
             style={{
              animationDelay:"0.7s"
            }}>
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>

            <div style={{
              animationDelay:"1s"
            }}>
              <AiFillYoutube/>
              <p>YouTube</p>
            </div>

          </article>
        </div>
      </div>


    </>

  );
};

export default Home;
