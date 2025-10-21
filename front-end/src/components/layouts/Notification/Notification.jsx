import { NotificationContext } from '@/contexts';

import { motion } from 'motion/react'

import { LuInfo } from "react-icons/lu";
import { IoCloseOutline, IoWarningOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { MdReportGmailerrorred } from "react-icons/md";
import { useContext } from 'react';

const NotificationTypes = {
    standard: { fill: 'bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100', text: 'text-gray-400', Icon: LuInfo, iconFill: 'text-gray-500' },
    success: { fill: 'bg-gradient-to-r from-green-200 via-green-100 to-green-200 border border-green-500', text: 'text-green-400', Icon: FaCheck, iconFill: 'text-green-500' },
    warning: { fill: 'bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 border border-yellow-500', text: 'text-yellow-400', Icon: IoWarningOutline, iconFill: 'text-yellow-500' },
    error: { fill: 'bg-gradient-to-r from-red-200 via-red-100 to-red-200 border border-red-500', text: 'text-red-400', Icon: MdReportGmailerrorred, iconFill: 'text-red-500' }
}

/**
 * Componente de Notificação
 *
 * @author Victor Alexandre <victor242206@gmail.com>
 * @description Componente de notificação neutra para exibir mensagens informativas ao usuário.
 * @since 19/10/2025
 * @version 1.1.0
 *
 * @param {number} id - ID da Notificação
 * @param {string} title - Título da Notificação
 * @param {string} subtitle - Subtítulo da Notificação
 * @param {string} type - Tipo da Notificação: "Standard", "Success", "Warning", "Error"
 * 
**/
export const Notification = ({
    id,
    title = 'Notificação',
    subtitle = 'Subtitulo da Notificação',
    type = 'standard'
}) => {
    const { removeNotification } = useContext(NotificationContext);

    const { fill, Icon, iconFill, text } = NotificationTypes[type];

    return (
        <motion.div
            role="alert"
            className={`block max-w-80 w-full max-h-12 h-full ${fill} rounded-xl overflow-hidden shadow-md`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
            }}
            exit={{ opacity: 0, scale: 0 }}
        >
            <div className="flex w-full h-full items-center px-3 py-2" >
                <div className='w-8 h-8 flex items-center justify-center'>
                    <Icon className={`w-full h-full ${iconFill}`} />
                </div>
                <div className="flex w-full h-ful items-center">
                    <div className="flex flex-col gap-0 px-2 py-3 w-full">
                        <h1 className={`text-xs ${iconFill} font-semibold`}>{title}</h1>
                        <p className={`text-[10px] ${text}`}>{subtitle}</p>
                    </div>
                    <button className='w-8 h-8 flex items-center justify-center' onClick={() => removeNotification(id)}>
                        <IoCloseOutline className={`w-full h-full ${iconFill}`} />
                    </button>
                </div>
            </div>
        </motion.div>
    )
}