import { Polygon, Circle, Tooltip } from 'react-leaflet';
import { getLatestReading, getFloodStatus, WARNING_LEVEL, DANGER_LEVEL } from '../../services/floodData';
import kazirangaGeoJSON from '../../data/kaziranga-boundary.json';

const STATUS_COLORS = {
  normal: '#2ecc8f',
  warning: '#F7BD03',
  danger: '#FF0000 ',
};

// Approximate low-lying/riverbank zones inside Kaziranga known to be flood-prone.
// Added individual severity keys for dynamic per-zone coloring.
const FLOOD_PRONE_ZONES = [
  { name: 'Agoratoli Range (riverbank)', lat: 26.665, lng: 93.42, severity: 'danger' },
  { name: 'Kohora Range (near river)', lat: 26.58, lng: 93.36, severity: 'warning' },
  { name: 'Bagori Range (riverbank)', lat: 26.62, lng: 93.28, severity: 'danger' },
  { name: 'Western boundary (riverbank)', lat: 26.60, lng: 93.10, severity: 'warning' },
];

function extractOuterRings(geometry) {
  if (geometry.type === 'Polygon') {
    return [geometry.coordinates[0].map(([lng, lat]) => [lat, lng])];
  }
  if (geometry.type === 'MultiPolygon') {
    return geometry.coordinates.map((polygon) => polygon[0].map(([lng, lat]) => [lat, lng]));
  }
  return [];
}

const FloodRisk = () => {
  const latest = getLatestReading();
  const status = getFloodStatus(latest.level);
  const rings = extractOuterRings(kazirangaGeoJSON.features[0].geometry);

  return (
    <>
      {/* Faint full-park outline stays for orientation */}
      {rings.map((positions, i) => (
        <Polygon
          key={i}
          positions={positions}
          pathOptions={{ color: STATUS_COLORS[status], fillOpacity: 0.03, weight: 1 }}
        />
      ))}

      {/* Show risk zones with dynamic per-zone colors */}
      {status !== 'normal' &&
        FLOOD_PRONE_ZONES.map((zone) => {
          // Dynamic color selection per zone based on severity
          const zoneColor = STATUS_COLORS[zone.severity] || STATUS_COLORS[status];

          return (
            <Circle
              key={zone.name}
              center={[zone.lat, zone.lng]}
              radius={1500}
              pathOptions={{
                color: zoneColor,
                fillColor: zoneColor,
                fillOpacity: 0.6,
                weight: 2,
              }}
            >
              <Tooltip sticky>
                {zone.name}<br />
                {latest.level}m — <span style={{ color: zoneColor, fontWeight: 700 }}>{zone.severity.toUpperCase()}</span><br />
                Warning: {WARNING_LEVEL}m · Danger: {DANGER_LEVEL}m
              </Tooltip>
            </Circle>
          );
        })}
    </>
  );
};

export default FloodRisk;