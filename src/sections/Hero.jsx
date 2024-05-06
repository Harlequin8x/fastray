import { useState } from 'react'

import { arrowRight } from '../assets/icons'
import { gpus, statistics } from '../constants'
import { rtx4090 } from '../assets/images'
import Button from '../components/Button'
import GPUCard from '../components/GPUCard'

const Hero = () => {
  const [bigGPUImg, setBigGPUImg] = useState(rtx4090)

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-dark-red">Unser Angebot</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">Die neueste</span>
          <br />
          <span className="text-dark-red inline-block mt-3">Hardware</span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Hol dir leistungsstarke Hardware die dein Gaming-Erlebnis aufs nächste Level bringt und das zu einem günstigen Preis!
        </p>        
        <Button
          label="Shop"
          iconURL={arrowRight}
          />          

        <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex flex-col justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigGPUImg}
          alt="gpu collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
       
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {gpus.map((image, index) => (
            <div key={index}>
              <GPUCard
                index={index}
                imgURL={image}
                changeBigGPUImage={(gpu) => setBigGPUImg(gpu)}
                bigGPUImg={bigGPUImg}                
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
