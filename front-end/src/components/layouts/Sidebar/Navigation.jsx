/**
 * Corpo da Parte de Navegação da Barra Lateral (Sidebar)
 * 
 * Esse componente representa o conteúdo de navegação da Barra Lateral. 
 * 
 * @author Victor Pedroza <victor242206@gmail.com>
 * @since 06/12/2025
 * @version 1.0.0
 * 
 * @param {React.ReactNode} children - Componentes filhos que serão renderizados
 * 
 * @returns {JSX.Element} O componente `Navigation`, que representa a parte de navegação da Barra Lateral (Sidebar)
 * 
 * 
 * 
**/

export const Navigation = ({ children }) => {
    return (
        <nav className='w-full mt-6'>
            <ul className='w-full h-full flex flex-col px-8 gap-3'>
                { children }
            </ul>
        </nav>
    )
}