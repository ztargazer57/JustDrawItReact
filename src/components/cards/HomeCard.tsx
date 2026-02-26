
interface AvatarProps {
    name: string,
    imageUrl:  string,
    size?: number,
}

function Avatar({name,imageUrl,size = 50}: AvatarProps) {
    return (
        <div className="flex gap-4 mb-5">
            <img className="rounded-full object-cover" src={imageUrl} alt={name} height={size} width={size}></img>
            <h1 className="m-auto ml-0">{name}</h1>
        </div>
    );
}

interface TextContentProps {
    content?: string
    author?: string
}

function TextContent({content = '',author=''}:TextContentProps) {
    if(author == '') {
        return (
        <p>{content}</p>
    );
    } else {
        return (
            <div className=" text-jdbrown text-4xl h-100 w-full p-10">
                <p className=" w-fit h-fit">{content}</p>
                <div className=" w-fit h-fit mt-20 ml-auto"><p>- {author}</p></div>
            </div>
        );
    }
}

interface ImageContent {
    imageUrl: string
    title: string
}

function ImageContent({title="Ocean Wave",imageUrl="/public/download (5).jpg"}:ImageContent) {
    return (
        <div className="">
            <img className="object-fill" src={imageUrl}></img>
            <p>{title}</p>
        </div>
    );
}

interface HomeLabelProps {
    label: string
    color: string
}
function HomeLabel ({label,color}:HomeLabelProps) {
    return (
        <div className='py-2 px-4  text-2xl h-fit w-fit text-jdbrown' style={{background: color}}>
            {label}
        </div>
    );
}

HomeCard.TextContent = TextContent
HomeCard.Avatar = Avatar
HomeCard.ImageContent = ImageContent
HomeCard.Label = HomeLabel

interface HomeCardProps {
    children?: React.ReactNode
    rotate?: number
}

export default function HomeCard({children,rotate = 0}:HomeCardProps) {
    return (
        <div
      className="bg-jdwhite rounded p-5 w-100 h-fit min-h-100 overflow-auto drop-shadow-xl/25"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
    );    
}