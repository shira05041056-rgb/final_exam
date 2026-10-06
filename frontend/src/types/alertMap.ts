export interface MapAlert {

  id: string | number;

  displayName: string;

  priority: string; 

  lon: number; 
  
  lat: number; 

}

export interface AlertsMapProps {

  alerts: MapAlert[];

  height?: number | string; 

  className?: string;

}
