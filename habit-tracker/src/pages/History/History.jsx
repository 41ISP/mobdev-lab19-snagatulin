import { useEffect, useState } from "react"
import "./History.css"
import {useNavigate, useParams} from "react-router-dom"
import { getObject } from "../../utils/storage"
import { formatDate } from "../../utils/formatters"
import DaysList from "../../components/DaysList"

function History() {
    const {id} = useParams()
    const [habit, setHabit] = useState(undefined)
    useEffect(() => {
         const loadHabits = async() => {
              const habits = await getObject("habits")
              setHabit(habits.find((el) => el.id == id))
         }
         loadHabits()
    }, [])
    const navigate = useNavigate()
    
 return habit && (
            <div className="container">
            <header>
                <button className="back-btn" onClick={() => navigate("/")}>← Back to Dashboard</button>
                <h1>📊 Progress Timeline</h1>
                <div></div>
            </header>

            <div className="filter-section">
                <div className="filter-group">
                    <label>Select Habit:</label>
                    <select>
                        <option>Morning Meditation</option>
                        <option>Drink 8 Glasses of Water</option>
                        <option>Read for 30 Minutes</option>
                        <option>Evening Workout</option>
                        <option>Practice Guitar</option>
                    </select>
                </div>
                <div className="filter-group">
                {habit.name}
                </div>
            </div>

            <div className="habit-detail-card">
                <div className="habit-header">
                    <div className="habit-title-section">
                        <div className="habit-title"> {habit.name}</div>
                        <div className="habit-subtitle">
                            Started on {formatDate(habit.startDate)} • {habit.frequency} at {habit.notificationTime}
                        </div>
                    </div>
                    <div className="habit-stats-grid">
                        <div className="stat-box">
                            <div className="stat-box-value">{habit.streak}</div>
                            <div className="stat-box-label">Current Streak</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-box-value">23</div>
                            <div className="stat-box-label">Best Streak</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-box-value">89%</div>
                            <div className="stat-box-label">Success Rate</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-box-value">47</div>
                            <div className="stat-box-label">Total Days</div>
                        </div>
                    </div>
                </div>

                <div className="chart-container">
                    <div className="chart-title">30-Day Overview</div>
                    <div className="progress-bar-container">
                        <div className="progress-label">
                            <span>Completion Rate</span>
                            <span><strong>27/30 days</strong></span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill" ></div>
                        </div>
                    </div>
                    <div className="legend">
                        <div className="legend-item">
                            <div
                                className="legend-color"></div>
                            <span>Completed (27 days)</span>
                        </div>
                        <div className="legend-item">
                            <div
                                className="legend-color"></div>
                            <span>Missed (3 days)</span>
                        </div>
                    </div>
                </div>

                <div className="timeline-section">
                    <div className="timeline-header">
                        <div className="timeline-title">Activity Timeline</div>
                        <div className="view-toggle">
                            <button className="view-btn active">Calendar</button>
                            <button className="view-btn">List</button>
                        </div>
                    </div>

                   <DaysList id={id}/>


                </div>
            </div>
        </div>
         )
}

export default History