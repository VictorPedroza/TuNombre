import { Head } from "./Head";
import { Navigation } from "./Navigation";
import { NavItem } from "./NavItem";
import { Root } from "./Root";


/**
 * Componente da Barra Lateral (Sidebar)
 * 
 * Este objeto agrupa componentes relacionados à Barra Lateral, incluindo a raiz da barra lateral (Root), o cabeçalho (Head),
 * a navegação (Navigation) e os itens de navegação (NavItem).
 * 
 * Cada um desses componentes pode ser usado separadamente para construir a estrutura da barra lateral da aplicação.
 * 
 * @author Victor Pedroza <victor242206@gmail.com>
 * @since 06/12/2025
 * @version 1.0.0
 * 
 * @typedef {Object} SidebarComponents
 * @property {JSX.Element} Root - Componente que representa a estrutura principal da Barra Lateral.
 * @property {JSX.Element} Head - Componente que representa o cabeçalho da Barra Lateral.
 * @property {JSX.Element} Navigation - Componente responsável pela navegação na Barra Lateral.
 * @property {JSX.Element} NavItem - Componente de item individual de navegação.
 * 
 * @type {SidebarComponents}
 */
export const Sidebar = {
    Root,
    Head,
    Navigation,
    NavItem
}