export const Mobile = ({ dropdownRef, children }) => {
    return (
        <div className="relative" ref={dropdownRef}>
            {children}
        </div>
    )
}