import { useState, useEffect } from "react"

export const useCounter = (initalDate) => {
    const [count, setCount] = useState({
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        const startDate = new Date(initalDate) 
        const interval = setInterval(() => {
            const now = new Date()
            let delta = (now.getTime() - startDate.getTime()) / 1000 // em segundos

            const years = Math.floor(delta / (365.25 * 24 * 3600))
            delta -= years * 365.25 * 24 * 3600

            const months = Math.floor(delta / (30.44 * 24 * 3600))
            delta -= months * 30.44 * 24 * 3600

            const days = Math.floor(delta / (24 * 3600))
            delta -= days * 24 * 3600

            const hours = Math.floor(delta / 3600)
            delta -= hours * 3600

            const minutes = Math.floor(delta / 60)
            const seconds = Math.floor(delta % 60)

            setCount({ years, months, days, hours, minutes, seconds })
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const years = count.years
    const months = count.months
    const days = count.days  
    const hours = count.hours
    const minutes = count.minutes
    const seconds = count.seconds   

    return {
        years,
        months,
        days,
        hours,
        minutes,
        seconds
    }
}