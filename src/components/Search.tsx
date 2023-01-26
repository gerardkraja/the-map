import { OpenStreetMapProvider as LeafletOpenStreetMapProvider } from 'leaflet-geosearch'
import { useEffect } from 'react'
import { useMap } from 'react-leaflet'
import { GeoSearchControl } from 'leaflet-geosearch'

export const OpenStreetMapProvider = () => new LeafletOpenStreetMapProvider()

export const SearchControl = (props) => {
  const map = useMap()

  useEffect(() => {
console.log(JSON.stringify(props))
    const searchControl = new GeoSearchControl({
      provider: props.provider,
      ...props,
    })

    map.addControl(searchControl)
    return () => map.removeControl(searchControl)
  }, [props])

  return null
}

