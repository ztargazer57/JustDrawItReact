interface ButtonProps {
    label: string;
    textColor?: string;
    bgColor?: string;
}

export default function Button({
    label,
    textColor = "#D9D9D9",
    bgColor = "#8493B4",
}:ButtonProps)
{
    return (
        <button className="p-2 h-fit min-w-20 w-fit rounded-xl text-xl shadow-md/50" style={{color: textColor, background: bgColor}}>
            {label}
        </button>
    );
}