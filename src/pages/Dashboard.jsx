import MapView from '../components/dashboard/MapView.jsx'
import LayerToggle from '../components/dashboard/LayerToggle.jsx'
import AISummaryCard from '../components/dashboard/AISummaryCard.jsx'

function Dashboard() {
  // Assembles MapView + LayerToggle + AISummaryCard — the main map/dashboard screen.
  return (
    <div>
      <MapView />
      <LayerToggle />
      <AISummaryCard />
    </div>
  )
}

export default Dashboard
