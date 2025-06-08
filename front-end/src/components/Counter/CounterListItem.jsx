export const Item = ({ counter, counterText }) => {
    return <li
        className="bg-slate-200 rounded-lg shadow border border-black/10 p-2 flex justify-center items-center gap-1"
    >
        <p className="font-bold text-secondary-500">{counter}</p>
        <p className="text-primary-400">{counterText}</p>
    </li>
}