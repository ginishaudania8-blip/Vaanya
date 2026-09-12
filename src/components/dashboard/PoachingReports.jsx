import { Marker, Popup } from 'react-leaflet';
import { usePoachingReports } from '../../hooks/usePoachingReports';

const PoachingReports = ({ precise }) => {
  const data = usePoachingReports(precise);

  if (!precise) {
    if (!data) return null;
    // Aggregate view: no exact pins, just a summary popup/label rendered elsewhere (e.g. a stats badge).
    // This component intentionally renders nothing on the map for public users —
    // real location data isn't available to them by design.
    return null;
  }

  return data.map((report) => (
    <Marker key={report.id} position={[report.location.lat, report.location.lng]}>
      <Popup>{report.description || 'Poaching report'} — {report.category}</Popup>
    </Marker>
  ));
};

export default PoachingReports;