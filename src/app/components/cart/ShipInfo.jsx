export default function ShipInfo({ label, type, placeholder, width }) {
    return (

        <div className={"mb-4" + ' ' + width}>
            <label className="block font-bold text-[12px] tracking-[-0.2px] mb-3">{label}</label>
            <input type={type} placeholder={placeholder} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5" />
        </div>

    )
}