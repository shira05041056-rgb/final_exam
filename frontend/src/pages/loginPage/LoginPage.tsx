import { useState } from 'react';
import { Navigate } from 'react-router';

export default function LoginPage() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [logOut, setLogOut] = useState(true);
    const token = localStorage.getItem("Authorization");

    async function handleSubmit(e) {
        console.log(e);
        e.preventDefault();
        const res = await fetch("http://localhost:3001/api/auth/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                password,
                email
            })
        });
        const result = await res.json();

        alert(result.success ? "התחברת בהצלחה" : result.message),
            result.success ? localStorage.setItem("Authorization", `Bearer ${result.message}`) : null;

    }
    return (
        !token ?
            <form onSubmit={handleSubmit}>
                <input type="email" onChange={(e) => { setEmail(e.target.value); }} value={email} placeholder='name@example.com' required />
                <input type="password" onChange={(e) => { setPassword(e.target.value); }} value={password} placeholder='סיסמה' required />
                <button type='submit'>היכנס</button>
            </form> : <Navigate to={"/"} />
    );
}
