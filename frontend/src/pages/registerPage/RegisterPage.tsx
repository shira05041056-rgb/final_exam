import { useState } from 'react';


export default function RegisterPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [assignedArena, setAssignedArena] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3001/api/auth/register", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                email,
                role,
                assignedArena,
            })
        })
        .then((res) => res.json())
        .then((res) => (alert( res.success ? "נוסף בהצלחה" : res.message)))
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => { setUsername(e.target.value); }} value={username} placeholder='שם' required/>
            <input type="password" onChange={(e) => { setPassword(e.target.value); }} value={password} placeholder='סיסמה' required/>
            <input type="email" onChange={(e) => { setEmail(e.target.value); }} value={email} placeholder='name@example.com' required/>
            <select name="priority" onChange={(e) => { setRole(e.target.value); }} value={role} id="priority" required>
                <option value="arena_user">חייל זירה</option>
                <option value="general_user">חייל כללי</option>
                <option value="admin">מנהל מערכת</option>
            </select>
            <select name="arena" onChange={(e) => { setAssignedArena(e.target.value); }} value={assignedArena} id="arena" required>
                <option value="North">צפון</option>
                <option value="Center">מרכז</option>
                <option value="South">דרום</option>
                <option value="All">כל הארץ</option>
            </select>
            <button type='submit'>הוסף דיווח</button>
        </form>
    );
}
