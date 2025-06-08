import { Counter } from "@/components"
import { useCounter } from "@/hooks"

export const Main = () => {
    const { years, months, days, hours, minutes, seconds } = useCounter("2024-05-13T23:01:00Z")

    return (
        <div className="mx-6 grid sm:grid-cols-[600px_1fr] grid-rows-2 gap-6">
            <Counter.Root>
                <Counter.Title text="Benvenuto Amore Mio" />
                <Counter.Subtitle text="Noi siamo insieme per:" />
                <Counter.List>
                    <Counter.Item counter={years} counterText="ano(s)" />
                    <Counter.Item counter={months} counterText="meses(s)" />
                    <Counter.Item counter={days} counterText="dia(s)" />
                    <Counter.Item counter={hours} counterText="hora(s)" />
                    <Counter.Item counter={minutes} counterText="minuto(s)" />
                    <Counter.Item counter={seconds} counterText="segundo(s)" />
                </Counter.List>
            </Counter.Root>
            <div>
                <h1>Photos</h1>
            </div>
        </div>
    )
}