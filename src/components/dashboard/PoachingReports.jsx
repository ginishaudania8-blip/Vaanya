import { Marker, Popup, CircleMarker } from 'react-leaflet';
import { usePoachingReports, groupReportsByZone } from '../../hooks/usePoachingReports';

const PoachingReports = ({ precise }) => {
  const reports = usePoachingReports();

  if (!precise) {
    const clustered = groupReportsByZone(reports);
    return clustered.map((zone) => (
      <CircleMarker
        key={zone.name}
        center={zone.centerCoords}
        radius={18}
        pathOptions={{ color: '#f97316', fillColor: '#f97316', fillOpacity: 0.5 }}
      >
        <Popup>{zone.count} report(s) in {zone.name} this week</Popup>
      </CircleMarker>
    ));
  }

  return reports.map((report) => (
    <Marker key={report.id} position={[report.lat, report.lng]}>
      <Popup>{report.description || 'Poaching report'} — {report.date}</Popup>
    </Marker>
  ));
};

export default PoachingReports;