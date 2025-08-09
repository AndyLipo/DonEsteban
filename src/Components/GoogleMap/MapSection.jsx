import React from 'react'

const MapSection = () => {
    return (
        <div className="w-full px-0">
            <div className="aspect-video w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d823.1766486073252!2d-58.742038830468175!3d-34.38338199831464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9f8ba3bd17a7%3A0x6cf5202c1008d299!2sLa%20Plata%201775%2C%20B1623AOD%20Ingeniero%20Maschwitz%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1753746494909!5m2!1ses!2sar"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="min-h-[300px] md:min-h-[400px]"
                ></iframe>
            </div>
        </div>

    )
}

export default MapSection
