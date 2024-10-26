'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 3

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const slides = [
    {
      image: "/ImageCorosuel1.png",
      title: "Stable passive returns",
      description: "Enjoy consistent income from your solar investments."
    },
    {
      image: "/ImageCorosuel2.png",
      title: "Sustainable energy generation",
      description: "Our projects generate clean solar energy from rooftop installations of solar panels, reducing carbon footprint."
    },
    {
      image: "/ImageCorosuel3.png",
      title: "Stable, asset-backed investments",
      description: "Invest in tangible solar assets for long-term stability and growth."
    }
  ]

  return (
    <div className="flex flex-col border-r-2 border-t-2 md:flex-row justify-between w-full my-5 text-white overflow-hidden rounded-lg shadow-lg">
      <div id='imageAndText' className="flex flex-col md:flex-row w-full h-auto justify-between items-center">
        <div id='imageBox' className="w-full md:w-1/2 flex justify-center items-center min-h-[300px] md:min-h-[400px] overflow-hidden relative">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentSlide}
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="absolute w-full md:w-3/4 h-full object-contain"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 1}}
            />
          </AnimatePresence>
        </div>
        <div id='textBox' className="w-full md:w-1/2 p-6 flex flex-col items-center justify-between bg-gray-800 md:bg-transparent">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 w-full md:w-3/4 text-center md:text-left">Why invest in Solar?</h2>
          <AnimatePresence initial={false}>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-3/4"
            >
              <h3 className="text-lg md:text-xl text-wrap font-semibold mb-2">{`0${currentSlide + 1}`}</h3>
              <h4 className="text-base md:text-lg text-wrap font-medium mb-2">{slides[currentSlide].title}</h4>
              <p className="text-sm md:text-base text-wrap">{slides[currentSlide].description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
