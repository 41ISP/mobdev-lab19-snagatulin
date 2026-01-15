function HabitForm({form, handleFormChange, handleFormSubmit}){
    const handleSubmit = (e) => { 
      e.preventDefault()
      handleFormSubmit()
    }
  
    return(
                <div className="add-habit-section">
                <h2>➕ Add New Habit</h2>
                <form onSubmit={handleSubmit} className="form-grid">
                    <div className="form-group">
                        <label for="habit-name">Habit Name</label>
                        <input
                            type="text"
                            value={form.habitName}
                            id="habit-name"
                            name="habitName"
                            onChange={handleFormChange}
                            placeholder="e.g., Morning Exercise"
                             />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label for="frequency">Frequency</label>
                            <select onChange={handleFormChange} name="frequency" id="frequency" value={form.frequency}> 
                                <option value = "daily">Daily</option>
                                <option value = "weekly">Weekly</option>
                                <option value = "weekdays">Weekdays</option>
                                <option value = "weekends">Weekends</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label for="notification-time">
                                Notification Time
                            </label>
                            <input
                                type="time"
                                name="notificationTime"
                                id="notification-time"
                                value={form.notificationTime} 
                                onChange={handleFormChange}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Color Theme</label>
                        <div className="color-picker">
                            <div
                                className="color-option selected"
                                ></div>
                            <div
                                className="color-option"
                                ></div>
                            <div
                                className="color-option"
                                ></div>
                            <div
                                className="color-option"
                                ></div>
                            <div
                                className="color-option"
                                ></div>
                            <div
                                className="color-option"
                                 ></div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Add Habit
                    </button>
                </form>
            </div>
    )
}

export default HabitForm