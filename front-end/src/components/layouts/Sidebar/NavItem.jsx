import { Link } from "react-router-dom"

/**
 * Componente Item da Navegação da Barra Lateral (Sidebar)
 *  
 * Esse componente renderiza o `Link` com um ícone e um texto. 
 * 
 * @author Victor Pedroza <victor242206@gmail.com>
 * @since 06/12/2025
 * @version 1.0.0
 * 
 * @param {string} to - O caminho para onde o `Link` deve redirecionar (Por padrão é '/').
 * @param {React.Component} icon - O componente do Icone a ser exibido.
 * @param {string} label - O text a ser exibido.
 * 
 * @returns {JSX.Element} O componente `NavItem`, renderiza um link de navegação com um Ícone e Texto.
 * 
 * @example
 * <Sidebar.NavItem to='/' icon={FaHome} label='Início' />
 * 
**/
export const NavItem = ({ to='/', icon: Icon, label }) => {
    return (
        <Link to={to} className='w-full text-green-700 px-4 py-2 rounded-2xl flex items-center gap-2 '>
            <Icon className='text-2xl text-red-700' />
            <p className='text-xl font-semibold'>{label}</p>
        </Link>

    )
}