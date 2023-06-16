import Link from "next/link";

export default function LinkButton({name, action, bgColor, border, textColor })
{
    const hover = {}
    switch (bgColor) {
        case 'bg-primary':
            hover.color = 'hover:bg-[#f0a173]'
            break;
        case 'bg-black':
            hover.color = 'hover:bg-slate-600'
            break;
        default:
            hover.color = 'hover:bg-black hover:text-white'
            break;
    }

    return (
        <div>
            <Link
            className={"uppercase inline-block text-xs tracking-[1px] font-bold px-6 py-3 " + bgColor + ' ' + border + ' ' + textColor + ' ' + hover.color}
            href={action}>
                {name}
            </Link>
        </div>
    )
}