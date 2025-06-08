export const List = ({children}) => {
    return (
        <div className="p-2">
            <ul className="grid grid-cols-2 grid-rows-3 gap-2 text-lg">
                {children}
            </ul>
        </div>
    )
}