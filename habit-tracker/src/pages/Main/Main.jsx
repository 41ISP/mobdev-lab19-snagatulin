import { useState } from "react";
import "./Main.css"
import HabitCard from "../../components/HabitCard";
import HabitForm from "../../components/HabitForm";
import Stats from "../../components/Stats";
const initialHabits = [ {
     name: "Изучить React",
     notificationTime: "7:00PM",
     frequency: "daily",
     streak: 9,
     isToday: true,
     color: "green",
},
{
     name: "Изучить Жалюзоведенье",
     notificationTime: "8:00PM",
     frequency: "daily",
     streak: 11,
     isToday: false,
     color: "red",
}
]
function Main() { 
    const[habits, setHabits] = useState(initialHabits)
   return (
           <div className="container">
            <header>
                <h1>🎯 Smart Habit Tracker</h1>
                <p className="subtitle">Build better habits, one day at a time</p>
            </header>

           <Stats habits ={habits}/>

           <HabitForm/>

            <div className="habits-section">
                <h2>📋 Today's Habits</h2>

              {habits.map((el) => <HabitCard {...el}/>)}
            </div>
        </div>
   )
}

export default Main;