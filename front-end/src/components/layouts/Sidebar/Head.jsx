import { Link } from "react-router-dom"

/**
 * Cabeçalho da Barra Lateral (Sidebar)
 * 
 * Esse componente representa o Cabeçalho (Header) da Barra Lateral da Aplicação. Ele usa o `Link` para criar um link 
 * para a página inicial ao clicar no texto.
 * @author Victor Pedroza <victor242206@gmail.com>
 * @since 06/12/2025
 * @version 1.0.0
 * 
 * @example
 * <Sidebar.Head />
 * 
 * @returns {JSX.Element} O componente `Head`, que representa o cabeçalho da Barra Lateral 
 * 
**/

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