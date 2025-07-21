import React from 'react'

const MapSection = () => {
    return (
        <div className="flex justify-center">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3295.1068958105693!2d-58.853256925103004!3d-34.322296973056424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb6320e1d27619%3A0xc859b103eb80319f!2sEscuela%20De%20Educaci%C3%B3n%20Primaria%20N%C2%BA3%20%22Ricardo%20Rojas%22!5e0!3m2!1ses!2sar!4v1752532429094!5m2!1ses!2sar"
                width="1500"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}

export default MapSection
