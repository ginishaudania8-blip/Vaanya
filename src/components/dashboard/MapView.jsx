import { MapContainer, TileLayer } from 'react-leaflet';
import ParkBoundary from './ParkBoundary';
import FloodRisk from './FloodRisk';
import ESZOverlay from './ESZOverlay';
import PoachingReports from './PoachingReports';
import 'leaflet/dist/leaflet.css';

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