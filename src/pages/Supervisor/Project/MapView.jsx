import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useSelector } from "react-redux";

const mapContainerStyle = {
  width: "100%",
  height: "80vh",
};

// Center position (Example: Chennai, India)
const center = {
  lat: 13.0827,
  lng: 80.2707,
};

// Custom Map Styles (White & Gray Theme)
const mapStyles = [
  { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [{ color: "#bdbdbd" }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#eeeeee" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#757575" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [{ color: "#757575" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#dadada" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#616161" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#c9c9c9" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9e9e9e" }],
  },
];

const markers = [
  { id: 1, lat: 13.0801, lng: 80.2601, value: 100, color: "gray" },
  { id: 2, lat: 13.0815, lng: 80.275, value: 9879, color: "gray" },
  { id: 3, lat: 13.083, lng: 80.2805, value: 10000, color: "gray" },
  { id: 4, lat: 13.0845, lng: 80.265, value: 6445, color: "gray" },
  { id: 5, lat: 13.0795, lng: 80.268, value: 100, color: "gray" },
  { id: 6, lat: 13.085, lng: 80.2605, value: 100, color: "gray" },
  { id: 7, lat: 13.081, lng: 80.27, value: 0, color: "gray" }, // Example critical point
  { id: 8, lat: 9.9312, lng: 76.2673, value: 27, color: "gray" },
];

const MapView = () => {
  const filterModal = useSelector((state) => state?.modal?.listFilter);
  const apiKey = import.meta.env.VITE_APIKEY;
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps...</div>;

  return (
    <div className={`bg-white ${filterModal ? "blur-xs" : ""}`}>
      <div className="px-[12px]">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={14}
          options={{ styles: mapStyles }} // Apply the white & gray theme
        >
          {markers.map((marker) => (
            <Marker
              key={marker.id}
              position={{ lat: marker.lat, lng: marker.lng }}
              label={{
                text: marker.value.toString(),
                color: "white",
                fontSize: "12px",
                fontWeight: "bold",
              }}
              icon={{
                path: window.google.maps.SymbolPath.CIRCLE,
                scale: 10 + Math.log(marker.value || 1) * 2, // Adjust size dynamically
                fillColor: marker.color,
                fillOpacity: 1,
                strokeWeight: 2,
              }}
            />
          ))}
        </GoogleMap>
      </div>
    </div>
  );
};

export default MapView;
