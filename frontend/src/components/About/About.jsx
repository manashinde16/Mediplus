import React from 'react'
import aboutImg from '../../assets/images/About.png'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'

const About = () => {
  return <section>
    <div className="container">
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
            {/* ======= about img ======== */}
            <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
              <img src={aboutImg} alt="" />
              <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
                <img src={aboutCardImg} alt="" />
              </div>
            </div>

            {/* ======= about content ======== */}
            <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                <h2 className='heading'>Proud to be One of the Nations Best</h2>
                <p className='text__para'>For 30 Years in a Row, Indian News & World Report Has Recognized us
                 as One of the Best Publics Hospitals in the Nation and #1 in Mumbai.
                 We provide the Best Services and Care the Patients can Get.
                 </p>

                 <p className='text__para mt-[30px]'>
                    Our Best is Something We Strive for each day, Caring for our
                    patients not looking back at what we accomplished but towards what
                    we can do tommorow. Providing the best. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. 
                 </p>

                 <Link to='/'>
                    <button className='btn'>Learn More</button>
                 </Link>
            </div>
        </div>
    </div>
  </section>
}

export default About;