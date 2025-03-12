import React, { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useSelector } from "react-redux";

const mapContainerStyle = {
  width: "100%",
  height: "80vh",
};

const center = {
  lat: 13.0827,
  lng: 80.2707,
};

const markers = [
  { id: 1, lat: 13.0801, lng: 80.2601, value: 100, color: "gray" },
  { id: 2, lat: 13.0815, lng: 80.275, value: 9879, color: "gray" },
  { id: 3, lat: 13.083, lng: 80.2805, value: 10000, color: "gray" },
  { id: 4, lat: 13.0845, lng: 80.265, value: 6445, color: "gray" },
  { id: 5, lat: 13.0795, lng: 80.268, value: 100, color: "gray" },
  { id: 6, lat: 13.085, lng: 80.2605, value: 100, color: "gray" },
  { id: 7, lat: 13.081, lng: 80.27, value: 0, color: "gray" },
  { id: 8, lat: 9.9312, lng: 76.2673, value: 27, color: "gray" },
];

const MapView = () => {
  const filterModal = useSelector((state) => state?.modal?.listFilter);
  const apiKey = import.meta.env.VITE_APIKEY;
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  const [selectedMarker, setSelectedMarker] = useState(null);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps...</div>;

  return (
    <div className={`bg-white ${filterModal ? "blur-xs" : ""}`}>
      <div className="px-[12px]">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={14}
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
                scale: 10 + Math.log(marker.value || 1) * 2,
                fillColor: marker.color,
                fillOpacity: 1,
                strokeWeight: 2,
              }}
              onClick={() => setSelectedMarker(marker)}
            />
          ))}

          {selectedMarker && (
            <InfoWindow
              position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
              onCloseClick={() => setSelectedMarker(null)}
              // options={{ disableAutoPan: true }}
            >
              <div className="bg-white rounded-lg p-4 w-72 relative">
                <style>
                  {`
                    .gm-ui-hover-effect {
                      display: none !important;
                    }
                  `}
                </style>
                <div className="text-lg font-medium text-gray-600">
                  Active name
                </div>
                <div className="text-gray-500 text-sm">
                  10.004837, 76.318198
                </div>
                <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-md">
                  Completed
                </div>
                <div className="mt-4 text-sm font-medium text-gray-600">
                  Contact
                </div>
                <div className="flex items-center justify-between mt-1 bg-gray-100 p-2 rounded-md">
                  <span className="text-black">9875641237</span>
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => navigator.clipboard.writeText("9875641237")}
                  >
                    <img src="/assets/copy-icon.svg" alt="copy-icon" />
                  </button>
                </div>
                <div className="flex justify-between mt-4 gap-2">
                  <button className="border border-gray-400 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 w-1/2">
                    Edit
                  </button>
                  <button
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 w-1/2"
                    onClick={() => setSelectedMarker(null)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    </div>
  );
};

export default MapView;
