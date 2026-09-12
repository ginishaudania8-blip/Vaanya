import { GeoJSON, useMap } from 'react-leaflet';
import { useEffect } from 'react';
import kazirangaGeoJSON from '../../data/kaziranga-boundary.json';

const ParkBoundary = () => {
  const map = useMap();

  useEffect(() => {
    if (kazirangaGeoJSON?.features?.length) {
      const layer = new window.L.GeoJSON(kazirangaGeoJSON);
      map.fitBounds(layer.getBounds());
    }
  }, [map]);

  if (!kazirangaGeoJSON?.features?.length) {
    return null;
  }

  return (
    <GeoJSON
      data={kazirangaGeoJSON}
      style={{ color: '#10b981', weight: 2, fillOpacity: 0.05 }}
    />
  );
};

export default ParkBoundary;