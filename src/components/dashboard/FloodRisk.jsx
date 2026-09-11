import { Polygon, Circle, Tooltip } from 'react-leaflet';
import { getLatestReading, getFloodStatus, WARNING_LEVEL, DANGER_LEVEL } from '../../services/floodData';
import kazirangaGeoJSON from '../../data/kaziranga-boundary.json';

const STATUS_COLORS = {
  normal: '#2ecc8f',
  warning: '#f2c14e',
  danger: '#e04b4b',
};

// Approximate low-lying/riverbank zones inside Kaziranga known to be flood-prone.
// Hardcoded for demo purposes — not a verified flood-extent survey.
const FLOOD_PRONE_ZONES = [
  { name: 'Agoratoli Range (riverbank)', lat: 26.665, lng: 93.42 },
  { name: 'Kohora Range (near river)', lat: 26.58, lng: 93.36 },
  { name: 'Bagori Range (riverbank)', lat: 26.62, lng: 93.28 },
  { name: 'Western boundary (riverbank)', lat: 26.60, lng: 93.10 },
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
      {/* Faint full-park outline stays, just very light now — orientation only */}
      {rings.map((positions, i) => (
        <Polygon
          key={i}
          positions={positions}
          pathOptions={{ color: STATUS_COLORS[status], fillOpacity: 0.03, weight: 1 }}
        />
      ))}

      {/* Real signal: only show risk zones when status isn't normal */}
      {status !== 'normal' &&
        FLOOD_PRONE_ZONES.map((zone) => (
          <Circle
            key={zone.name}
            center={[zone.lat, zone.lng]}
            radius={1500}
            pathOptions={{
              color: STATUS_COLORS[status],
              fillColor: STATUS_COLORS[status],
              fillOpacity: 0.5,
              weight: 2,
            }}
          >
            <Tooltip sticky>
              {zone.name}<br />
              {latest.level}m — {status.toUpperCase()}<br />
              Warning: {WARNING_LEVEL}m · Danger: {DANGER_LEVEL}m
            </Tooltip>
          </Circle>
        ))}
    </>
  );
};

export default FloodRisk;