export const Root = ({children}) => {
    return(
        <header className="bg-white shadow-md p-4 sm:rounded-lg mb-4 flex justify-between items-center relative">
            {children}
        </header>
    )
}