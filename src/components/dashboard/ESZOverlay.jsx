import { GeoJSON, Tooltip } from 'react-leaflet';
import * as turf from '@turf/turf';
import kazirangaGeoJSON from '../../data/kaziranga-boundary.json';

const ESZOverlay = () => {
  if (!kazirangaGeoJSON?.features?.length) {
    return null;
  }

  // Merge all boundary features into one shape to buffer as a whole
  const parkShape = kazirangaGeoJSON.features.length > 1
    ? turf.combine(kazirangaGeoJSON)
    : kazirangaGeoJSON.features[0];

  const buffer10km = turf.buffer(parkShape, 10, { units: 'kilometers' });
  const buffer1km = turf.buffer(parkShape, 1, { units: 'kilometers' });

  return (
    <>
      <GeoJSON
        data={buffer10km}
        style={{ color: '#3b82f6', fillOpacity: 0.03, weight: 2, dashArray: '6 6' }}
      >
        <Tooltip sticky>Current ESZ boundary — 10km buffer</Tooltip>
      </GeoJSON>
      <GeoJSON
        data={buffer1km}
        style={{ color: '#ef4444', fillOpacity: 0.08, weight: 2 }}
      >
        <Tooltip sticky>Proposed ESZ boundary — 1km buffer (Aug 2026)</Tooltip>
      </GeoJSON>
    </>
  );
};

export default ESZOverlay;