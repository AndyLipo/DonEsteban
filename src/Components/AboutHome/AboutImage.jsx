import { Card, CardContent } from "@/components/ui/card"

const AboutImage = ({
    src,
    alt,
    width = 600,
    height = 400,
    className = ""
}) => {
    return (
        <div className={`lg:w-1/2 ${className}`}>
            <Card className="overflow-hidden rounded-2xl border-0 shadow-lg">
                <CardContent className="p-0">
                    <img
                        className="w-full h-auto object-cover rounded-2xl p-2"
                        alt={alt}
                        loading="lazy"
                        src={src}
                        width={width}
                        height={height}
                        decoding="async"
                    />
                </CardContent>
            </Card>
        </div>
    )
}

export default AboutImage