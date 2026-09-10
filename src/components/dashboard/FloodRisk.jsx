import { Polygon, Tooltip } from 'react-leaflet';
import { getLatestReading, getFloodStatus, WARNING_LEVEL, DANGER_LEVEL } from '../../services/floodData';
import kazirangaGeoJSON from '../../data/kaziranga-boundary.json';

const STATUS_COLORS = {
  normal: '#2ecc8f',
  warning: '#f2c14e',
  danger: '#e04b4b',
};

const FloodRisk = () => {
  const latest = getLatestReading();
  const status = getFloodStatus(latest.level);

  const boundaryCoords = kazirangaGeoJSON.features[0].geometry.coordinates[0]
    .map(([lng, lat]) => [lat, lng]);

  return (
    <Polygon
      positions={boundaryCoords}
      pathOptions={{
        color: STATUS_COLORS[status],
        fillColor: STATUS_COLORS[status],
        fillOpacity: 0.25,
        weight: 2,
      }}
    >
      <Tooltip sticky>
        {latest.level}m — {status.toUpperCase()}
        <br />
        Warning: {WARNING_LEVEL}m · Danger: {DANGER_LEVEL}m
      </Tooltip>
    </Polygon>
  );
};

export default FloodRisk;