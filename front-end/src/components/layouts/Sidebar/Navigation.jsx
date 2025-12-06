export const Navigation = ({ children }) => {
    return (
        <nav className='w-full mt-6'>
            <ul className='w-full h-full flex flex-col px-8 gap-3'>
                { children }
            </ul>
        </nav>
    )
}