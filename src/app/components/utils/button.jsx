import Link from "next/link";

export default function Button({name, href, bgColor, border, textColor })
{
    return (
        <div>
            <Link
            className={"uppercase inline-block text-xs tracking-[1px] font-bold px-6 py-3 " + bgColor + ' ' + border + ' ' + textColor}
            href={href}>
                {name}
            </Link>
        </div>
    )
}