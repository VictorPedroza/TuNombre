export const MobileList = ({ isOpen, children }) => {
    return (
        <ul
            className={`
                        absolute right-0 mt-2 w-40 bg-green-100 shadow-md rounded-md flex flex-col py-2 z-50 md:hidden
                        transition-all duration-300 origin-top
                        ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}
                    `}
        >
            {children}
        </ul>
    )
}