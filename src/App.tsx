import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Marker, Popup, MapContainer, TileLayer, useMap } from 'react-leaflet'
import { SearchControl, OpenStreetMapProvider } from "./components/Search.tsx";

//TODO: Make api key env var & add to gitignore
//TODO: put the useeffect in separate hook
function App() {
const [events, setEvents] = useState(undefined)
const prov = OpenStreetMapProvider();
    const GeoSearchControlElement = SearchControl;
useEffect(()=>{
async function fetchData(){
const clientId = 'MzE2NTUzNDh8MTY3NDgyNDA2MS43MjgyNjM'
const response = await fetch(`https://api.seatgeek.com/2/events?client_id=${clientId}&per_page=50`)
const data = await response.json()
setEvents(data.events)
}
fetchData()
},[])
  return (
    <div className="App">
<MapContainer
      className="markercluster-map"
      center={[51.0, 19.0]}
      zoom={4}
      maxZoom={18}
    >
<GeoSearchControlElement
options={{position:'bottom'}}
          provider={prov}
          showMarker={false}
          showPopup={false}
          retainZoomLevel={false}
          animateZoom={true}
          autoClose={true}
          searchLabel={"Enter address, please"}
          keepResult={true}
          popupFormat={({ query, result }) => result.label}
        />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
{events && 
events.map(event=>{return <Marker position={[event.venue.location.lat, event.venue.location.lon]} />
})
}
</MapContainer>
    </div>
  )
}

export default App
