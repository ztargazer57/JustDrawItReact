interface AvatarProps {
    name: string,
    imageUrl:  string,
    size?: number,
}

interface HomeCardProps {
    children?: React.ReactNode
}

function Avatar({name,imageUrl,size = 64}: AvatarProps) {
    return (
        <div className="flex gap-4">
            <img className="rounded-full object-cover" src={imageUrl} alt={name} height={size} width={size}></img>
            <h1 className="m-auto ml-0">{name}</h1>
        </div>
    );
}

HomeCard.Avatar = Avatar

export default function HomeCard({children}:HomeCardProps) {
    return (
        <div className="bg-jdwhite rounded p-3 w-100 h-100">
            {children}
        </div>
    );    
}