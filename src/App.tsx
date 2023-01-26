import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Marker, Popup, MapContainer, TileLayer, useMap } from 'react-leaflet'
import { SearchControl, OpenStreetMapProvider } from "./components/Search.tsx";

function App() {
const prov = OpenStreetMapProvider();
    const GeoSearchControlElement = SearchControl;
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
          maxMarkers={3}
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

        <Marker position={[49.8397, 24.0297]} />
        <Marker position={[52.2297, 21.0122]} />
        <Marker position={[51.5074, -0.0901]} />
</MapContainer>
    </div>
  )
}

export default App
