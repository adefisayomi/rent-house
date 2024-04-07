


export default function BgOverlay ({image, bg, content, className}: {image: string, bg: string, content?: any, className?: string}) {

    return (
        <div>
            <div className={`relative w-full h-full bg-cover bg-no-repeat ${className}`} style={{backgroundImage: `url('${image}')`}}>
            <div className={`absolute inset-0 ${bg} opacity-70`}></div>

                <div className="absolute">
                    {content}
                </div>
            </div>
        </div>
    )
}