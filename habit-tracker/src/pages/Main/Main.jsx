import { useEffect, useState } from "react";
import "./Main.css"
import HabitCard from "../../components/HabitCard";
import HabitForm from "../../components/HabitForm";
import Stats from "../../components/Stats";
import {nanoid} from "nanoid"
import { getObject, setObject } from "../../utils/storage";
import { useNavigate } from "react-router-dom";

const initialHabits = [ {
     id: nanoid(),
     name: "Изучить React",
     notificationTime: "7:00PM",
     frequency: "daily",
     streak: 99,
     isToday: true,
     color: "green",
},
{
     id: nanoid(), 
     name: "Изучить Жалюзоведенье",
     notificationTime: "8:00PM",
     frequency: "daily",
     streak: 11,
     isToday: false,
     color: "red",
}
]

function Main() { 
    const[habits, setHabits] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
    const loadHabits = async () => {
      const habits = await getObject("habits")
      setHabits(habits || [])
    }
    loadHabits()
    }, [])
    const[form, setForm] = useState({
        habitName: "",
        frequency: "daily",
        notificationTime: "07:00",

    })
    const handleFormChange = (e) => {
      const{name, value} = e.target
      setForm((prev) => ({...prev, [name]: value}))
    }
    
    const handleFormSubmit = () => {
    const newHabit = {
     id: nanoid(),
     name: form.habitName,
     notificationTime: form.notificationTime,
     frequency: form.frequency,
     streak: 11,
     isToday: false,
     color: "red",
     startDate: new Date()
    }
    setHabits((val) => [...val, newHabit])
    } 
    const toogleToday = (id) => {
        const oldHabit = habits.find((el) => el.id === id)
        const newHabit = {...oldHabit, isToday: !oldHabit.isToday, streak: oldHabit.isToday ? oldHabit.streak - 1 : oldHabit.streak + 1}
        setHabits((state) => state.map((el) => el.id == id ? newHabit : el))

    }

    useEffect(() => {
        setObject("habits", habits)
    }, [habits])

   return (
           <div className="container">
            <header>
                <h1>🎯 Smart Habit Tracker</h1>
                <p className="subtitle">Build better habits, one day at a time</p>
            </header>

           <Stats habits ={habits}/>

           <HabitForm form={form} handleFormChange={handleFormChange} handleFormSubmit={handleFormSubmit}/>

            <div className="habits-section">
                <h2>📋 Today's Habits</h2>

              {habits.sort((a,b) => b.streak - a.streak).map((el) => <HabitCard {...el} toogleToday={() => toogleToday(el.id)} onClick ={() => navigate(`/history/${el.id}`)}/>)}
            </div>
        </div>
   )
}

export default Main;