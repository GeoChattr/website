import { Map, Marker } from "pigeon-maps";

const LocationMaps = () => (
  <div className="h-screen">
    <Map defaultCenter={[0, 0]} defaultZoom={2}>
      <Marker width={50} anchor={[50.879, 4.6997]} />
    </Map>
  </div>
);

export default LocationMaps;
