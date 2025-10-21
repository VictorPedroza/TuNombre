import { Notification } from "@/components";

import { createContext, useState } from "react";

import { AnimatePresence } from "motion/react";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    function addNotification({ title, subtitle, type = 'standard' }) {
        const newNotification = {
            id: Date.now(),
            title: title,
            subtitle: subtitle,
            type: type
        }

        setNotifications((prev) => [...prev, newNotification]);

        setTimeout(() => removeNotification(newNotification.id), 3500);
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