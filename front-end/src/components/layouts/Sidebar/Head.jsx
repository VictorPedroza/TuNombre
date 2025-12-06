import { Link } from "react-router-dom"

export const Head = () => {
    return (
        <div className='w-full h-12 mt-2 flex items-center justify-center'>
            <Link
                to='/'
                className='text-3xl font-bold text-green-600 flex'
            >
                <p>Tu</p>
                <span className='text-red-600'>Nombre</span>
            </Link>
        </div>
    )
}