import { useEffect, useState } from "react"
import { checkCompleted, daysSince, formatDateShort, mapDays } from "../utils/utils"
import { getObject } from "../utils/storage"
import TimelineItem from "./TimelineItem"

function DaysList({id}) {
    const [habit, setHabit] = useState(undefined)
    const days = habit && daysSince(habit.startDate)
    console.log(days)
    useEffect (() => {
     const getHabit = async () => {
      const habits = await getObject("habits")
      setHabit(habits.find((el) => el.id == id))
     }
     getHabit()
    }, [])

    return(
            <div className="list-view">
            {habit && mapDays(habit.startDate, (el) => <TimelineItem day={el.toLocaleDateString("en-US", {weekday: "long"})}
            date={formatDateShort(el)}
            completed={checkCompleted(el, habit.history)}
            />
    )}
           </div>
    )
}

export default DaysList