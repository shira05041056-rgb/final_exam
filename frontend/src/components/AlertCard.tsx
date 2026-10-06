import { useMemo } from "react";


export type AlertPriority = "Low" | "Medium" | "High" | "Critical";

export interface MapAlert {
    _id: string | number;
    displayName: string;
    priority: string;
    createdAt: string;
    lon: number;
    lat: number;
}

export interface AlertsMapProps {
    alerts: MapAlert[];
}


const PRIORITY_ORDER: AlertPriority[] = ["Low", "Medium", "High", "Critical"];



export default function AlertsCard({ alerts }: AlertsMapProps) {
    const sortedAlerts = useMemo(
        () =>
            alerts
                .filter((alert) => Number.isFinite(alert.lon) && Number.isFinite(alert.lat))
                .sort((b, a) => PRIORITY_ORDER.indexOf(a.priority as AlertPriority) - PRIORITY_ORDER.indexOf(b.priority as AlertPriority)),
        [alerts]
    );

    function handleSubmit(e, id) {
        e.preventDefault();
        console.log(e);
        fetch("http://localhost:3001/api/alerts" + `/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            }
        })
        .then((res) => res.json())
        .then((res) => (alert(res.acknowledged ? "נמחק בהצלחה" : "התרחשה שגיאה במחיקה")))
    }

    return (
        <>
            <ul className="ul">
                {sortedAlerts.map((alert) => (
                    <li className={alert.priority.toLowerCase()}>{alert.displayName} <div>{alert.createdAt}</div> <button type="button" onClick={(e) => { handleSubmit(e, alert._id); }}>מחק אירוע</button></li>
                ))}
            </ul>
        </>
    );
}
