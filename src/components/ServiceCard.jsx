import React from 'react'

const ServiceCard = ({services}) => {
  return (
    <a href={services.link}>
            <div className="bg-blue-500 text-white rounded-3xl shadow-lg hover:animate-bounce delay-300 duration-100" key={services.id}>
              <img src={services.image} alt={services.alt} className="rounded-t-2xl object-cover object-top w-full h-40"/>
              <div className="p-3">
                  <h3 className="font-bold text-2xl">{services.name}</h3>
                  <p className="pt-2">
                      {services.description}
                  </p>
                  <p className="mt-2"><span className="font-semibold">services stack: </span>{services.stack}</p>
                  <a href={services.link} className="inline-block mt-4 px-2 py-1 bg-white rounded-md shadow-md text-sm font-bold text-black">See More</a>
              </div>
            </div>
          </a>
  )
}

export default ServiceCard