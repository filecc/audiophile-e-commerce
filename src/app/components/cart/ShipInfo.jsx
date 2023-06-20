export default function ShipInfo({ label, type, placeholder }) {
    return (

        <div className="mb-4">
            <label className="block font-bold text-[12px] tracking-[-0.2px] mb-3">{label}</label>
            <input type={type} placeholder={placeholder} className="border border-[#CFCFCF] rounded-md py-4 px-5 w-full active:outline-primary outline-primary focus:outline-primary focus-visible:outline-primary ring-none" />
        </div>

    )
}