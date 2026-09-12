import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import ParkBoundary from './ParkBoundary';
import FloodRisk from './FloodRisk';
import ESZOverlay from './ESZOverlay';
import PoachingReports from './PoachingReports';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapView = ({ activeLayers, userRole }) => {
  return (
    <MapContainer center={[26.58, 93.17]} zoom={11} style={{ width: '100%', height: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <ParkBoundary />
      {activeLayers.floodRisk && <FloodRisk />}
      {activeLayers.eszBoundary && <ESZOverlay />}
      {activeLayers.poachingReports && (
        <PoachingReports precise={userRole === 'ranger' || userRole === 'ngo'} />
      )}
    </MapContainer>
  );
};

export default MapView;
