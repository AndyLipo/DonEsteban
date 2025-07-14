import HeroVideo from '../../assets/HeroVideo.mp4'

const HeroSection = () => {
    return (
        <>
            <div>
                <video
                    src={HeroVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto"
                >
                    Tu navegador no soporta el elemento video.
                </video>
                <div className="absolute inset-0 flex flex-col justify-center items-center ">
                    <h1 className="text-5xl font-bold mb-5 text-slate-900 dark:text-slate-100">Don Esteban</h1>
                    <h4 className="text-2xl italic text-slate-900 dark:text-slate-100">Perforaciones de todo tipo</h4>
                </div>
            </div>
        </>
    )
}

export default HeroSection