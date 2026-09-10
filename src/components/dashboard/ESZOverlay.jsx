import { Circle, Tooltip } from 'react-leaflet';

// Approximate Kaziranga center — swap for a real computed centroid of the
// boundary GeoJSON once available, this is close enough for a demo ring.
const PARK_CENTER = [26.58, 93.17];

const ESZOverlay = () => {
  return (
    <>
      <Circle
        center={PARK_CENTER}
        radius={10000}
        pathOptions={{ color: '#3b82f6', fillOpacity: 0.03, weight: 2, dashArray: '6 6' }}
      >
        <Tooltip sticky>Current ESZ boundary — 10km buffer</Tooltip>
      </Circle>
      <Circle
        center={PARK_CENTER}
        radius={1000}
        pathOptions={{ color: '#ef4444', fillOpacity: 0.08, weight: 2 }}
      >
        <Tooltip sticky>Proposed ESZ boundary — 1km buffer (Aug 2026)</Tooltip>
      </Circle>
    </>
  );
};

export default ESZOverlay;