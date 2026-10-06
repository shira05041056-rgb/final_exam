import { useState } from 'react';
import "./addAlert.css";

export default function AddAlert() {
    const [displayName, setDisplayName] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");
    const [arena, setArena] = useState("");
    const [status, setStatus] = useState("");
    const [lon, setLon] = useState("");
    const [lat, setLat] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3001/api/alerts", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                displayName,
                description,
                priority,
                arena,
                status,
                lon: Number(lon),
                lat: Number(lat)
            })
        })
        .then((res) => res.json())
        .then((res) => (alert( res.success ? "נוסף בהצלחה" : res.message)))
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => { setDisplayName(e.target.value); }} value={displayName} placeholder='שם' required/>
            <input type="text" onChange={(e) => { setDescription(e.target.value); }} value={description} placeholder='תיאור' required/>
            <select name="priority" onChange={(e) => { setPriority(e.target.value); }} value={priority} id="priority" required>
                <option value="Low">נמוך</option>
                <option value="Medium">בינוני</option>
                <option value="High">גבוה</option>
                <option value="Critical">חמור</option>
            </select>
            <select name="arena" onChange={(e) => { setArena(e.target.value); }} value={arena} id="arena" required>
                <option value="North">צפון</option>
                <option value="Center">מרכז</option>
                <option value="South">דרום</option>
            </select>
            <select name="status" onChange={(e) => { setStatus(e.target.value); }} value={status} id="status" required>
                <option value="Active">פעיל</option>
                <option value="Handled">בטיפול</option>
            </select>
            <input type="text" onChange={(e) => { setLon(e.target.value); }} value={lon} placeholder='lon' required/>
            <input type="text" onChange={(e) => { setLat(e.target.value); }} value={lat} placeholder='lat' required/>
            <button type='submit'>הוסף דיווח</button>
        </form>
    );
}
