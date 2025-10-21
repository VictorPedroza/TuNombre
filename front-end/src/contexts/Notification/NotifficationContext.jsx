import { Notification } from "@/components";

import { createContext, useState } from "react";

import { AnimatePresence } from "motion/react";

/**
 * Componente de Notificação
 *
 * @author Victor Alexandre <victor242206@gmail.com>
 * @description Contexto para exibição da Notificação
 * @since 21/10/2025
 * @version 1.0.0
 *
 * @function addNotification 
 * @param {string} title - Tìtulo da Notificação
 * @param {string} subtitle - Subtítulo da Notificação
 * @param {string} type - Tipo da Notificação: "standard", "success", "warning", "error" (Por padrão: "standard") 
 * @param {string} fixed - Notificação fixa (Por padrão: false)
 * 
 * @function removeNotification
 * @param {number} id - ID da Notificação
**/

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    function addNotification({ title, subtitle, type = 'standard', fixed = false }) {
        const newNotification = {
            id: Date.now(),
            title: title,
            subtitle: subtitle,
            type: type
        }

        setNotifications((prev) => [...prev, newNotification]);

        if(!fixed) {
            setTimeout(() => removeNotification(newNotification.id), 3500);
        }
    }

    function removeNotification(id) {
        setNotifications((prev) =>
            prev.filter((notification) => notification.id !== id)
        );
    }

    return (
        <NotificationContext.Provider value={{ addNotification, removeNotification }}>
            <div className="fixed top-2 right-2 w-72 h-full flex flex-col gap-2">
                <AnimatePresence>
                    {
                        notifications.map((notification) => {
                            return (
                                <Notification
                                    key={notification.id}
                                    id={notification.id}
                                    title={notification.title}
                                    subtitle={notification.subtitle}
                                    type={notification.type}
                                />
                            )
                        })
                    }
                </AnimatePresence>
            </div>

            {children}
        </NotificationContext.Provider>
    )
}