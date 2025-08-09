// components/DecorativeSVG.jsx
const DecorativeSVG = () => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="hidden md:block absolute inset-0 z-5"
            aria-hidden="true"
        >
            <path
                d="M 250,0 L 400,0 L 400,150 Q 400,170 380,170 L 330,170 Q 310,170 310,190 L 310,280 Q 310,300 290,300 L 20,300 Q 0,300 0,280 L 0,80 Q 0,60 20,60 L 70,60 Q 90,60 90,40 L 90,20 Q 90,0 110,0 L 250,0 Z"
                fill="white"
            />
        </svg>
    )
}

export default DecorativeSVG