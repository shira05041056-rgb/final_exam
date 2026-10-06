import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [alerts, setAlerts] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((alerts) => setAlerts(alerts));
  }, [url]);

  return [alerts];
};

export default useFetch;