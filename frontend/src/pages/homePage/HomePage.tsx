import "./homePage.css"
import AlertsMap from "../../components/AlertsMap";
import useFetch from "../../hooks/useFetch";
import AlertsCard from "../../components/AlertCard";
import AddAlert from "../../components/addAlerts/AddAlert";

// import { useAlertsStore } from "../store/alertsStore.ts";

export default function HomePage() {

    const [alerts] = useFetch("http://localhost:3001/api/alerts")
    if (!alerts) return
    return <>
    <div className="page">
    <AlertsMap alerts={alerts} height={600} className="map"/>
    <AlertsCard alerts={alerts}/>
    <AddAlert/>
    </div>
    </>

}
