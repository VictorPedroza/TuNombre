import { LuInfo } from "react-icons/lu";
import { IoCloseOutline, IoWarningOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { MdReportGmailerrorred } from "react-icons/md";


/**
 * Componente de Notificação
 *
 * @author Victor Alexandre <victor242206@gmail.com>
 * @description Componente de notificação neutra para exibir mensagens informativas ao usuário.
 * @since 19/10/2025
 * @version 1.0.0
 *
 * @param {string} title - Título da notificação.
 * @param {string} subtitle - Subtítulo ou mensagem adicional da notificação.
 * @param {'standard'|'success'|'warning'|'error'} type - Tipo de notificação que define o estilo visual.
 * @returns {JSX.Element} Componente de Notificação.
 */
const NotificationTypes = {
    standard: { fill: 'bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100', text: 'text-gray-400', Icon: LuInfo, iconFill: 'text-gray-500' },
    success: { fill: 'bg-gradient-to-r from-green-200 via-green-100 to-green-200', text: 'text-green-400', Icon: FaCheck, iconFill: 'text-green-500' },
    warning: { fill: 'bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200', text: 'text-yellow-400', Icon: IoWarningOutline, iconFill: 'text-yellow-500' },
    error: { fill: 'bg-gradient-to-r from-red-200 via-red-100 to-red-200', text: 'text-red-400', Icon: MdReportGmailerrorred, iconFill: 'text-red-500' }
}

const BaseNotification = ({
    title = 'Notificação',
    subtitle = 'Subtitulo da Notificação',
    type = 'standard'

}) => {
    const { fill, Icon, iconFill, text } = NotificationTypes[type];

    return (
        <div role="alert" className={`block max-w-80 w-full max-h-12 h-full ${fill} rounded-xl overflow-hidden shadow-md`} >
            <div className="flex w-full h-full items-center px-3 py-2" >
                <div className='w-8 h-8 flex items-center justify-center'>
                    <Icon className={`w-full h-full ${iconFill}`} />
                </div>
                <div className="flex w-full h-ful items-center">
                    <div className="flex flex-col gap-0 px-2 py-3 w-full">
                        <h1 className={`text-xs ${iconFill} font-semibold`}>{title}</h1>
                        <p className={`text-[10px] ${text}`}>{subtitle}</p>
                    </div>
                    <button className='w-8 h-8 flex items-center justify-center'>
                        <IoCloseOutline className={`w-full h-full ${iconFill}`} />
                    </button>
                </div>
            </div>
        </div>
    )
}

/**
 * Componente de Notificação
 * 
 * @autor Victor Alexandre <victor242206@gmail.com>
 * @description Componente de notificação neutra para exibir mensagens informativas ao usuário.
 * @since 19/10/2025
 * @version 1.0.0 
 * 
 * @param {string} title - Título da notificação.
 * @param {string} subtitle - Subtítulo ou mensagem adicional da notificação.
 * 
 * @param {'standard'|'success'|'warning'|'error'} type - Tipo de notificação que define o estilo visual.
 * 
 * @returns {JSX.Element} Componente de Notificação.
**/
const Notification = ({ title, subtitle }) => {
    return <BaseNotification title={title} subtitle={subtitle} type="standard" />;
};

// Adicionando subcomponentes
Notification.Success = (props) => <BaseNotification {...props} type="success" />;
Notification.Warning = (props) => <BaseNotification {...props} type="warning" />;
Notification.Error = (props) => <BaseNotification {...props} type="error" />;

export { Notification };