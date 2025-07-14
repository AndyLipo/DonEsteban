import React from 'react'
// import LogoGr from '../../assets/logo-ppal.png'

const AboutHome = () => {
    return (
        <>
            <section className='h-full py-8'>
                {/* H1 centrado arriba */}
                <div className='text-center mb-12'>
                    <h1 className='text-3xl font-bold'>Nuestra historia</h1>
                </div>

                {/* Contenedor para párrafo e imagen en paralelo */}
                <div className='flex justify-between items-start gap-8'>
                    {/* Párrafo a la izquierda */}
                    <aside className='flex-1 ml-2'>
                        <p className='text-lg leading-relaxed'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis id magnam
                            ab iure distinctio, molestiae commodi sed nam quod.
                            Minus debitis non obcaecati delectus cum quidem dolor optio maxime sunt!
                        </p>
                    </aside>

                    {/* Imagen a la derecha */}
                    <picture className='flex-1'>
                        <img
                            src="https://images.dailynewsegypt.com/2021/04/WhatsApp_Image_2021-04-03_at_3.35.02_PM-2.jpeg"
                            alt="Logo-img"
                            className='w-full max-w-md h-80 object-cover rounded-lg mx-auto'
                        />
                    </picture>
                </div>
            </section>
        </>
    )
}

export default AboutHome