import Link from "next/link";

export default function ButtonAction({name, action, bgColor, border, textColor })
{
    return (
        <div>
            <button
            className={"uppercase inline-block text-xs tracking-[1px] font-bold px-6 py-3 " + bgColor + ' ' + border + ' ' + textColor}
            onClick={action}>
                {name}
            </button>
        </div>
    )
}