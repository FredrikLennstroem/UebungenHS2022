import React from 'react';
import "./App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, Circle,} from 'react-leaflet'

function App() {

  React.useEffect(() => {
    const L = require("leaflet");

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png")
    });
  }, []);

  var swisstopo = (<TileLayer url='https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg'
                    attribution= '&copy; swisstopo'></TileLayer>
  );

  var coord_muehleberg = [46.968872773,7.268042402];
  var coord_goesgen = [47.366075562,7.966750757];
  var coord_beznau = [47.552019433,8.228391684];
  var coord_leibstadt = [47.601455367,8.182823992];
  var radius = 50000;

  const polyStyle = { color: 'green', weight: 5 };

  var muehleberg = (<Marker position={coord_muehleberg}>
                      <Popup>
                        KKW Mühleberg<br/>Inaktiv
                      </Popup>
                    </Marker>);

  var goesgen = (<Marker position={coord_goesgen}>
                    <Popup>
                      KKW Gösgen<br/>Aktiv
                    </Popup>
                  </Marker>);
  
  var beznau = (<Marker position={coord_beznau}>
                  <Popup>
                    KKW Beznau<br/>Aktiv
                  </Popup>
                </Marker>);

  var leibstadt = (<Marker position={coord_leibstadt}>
                    <Popup>
                      KKW Leibstadt<br/>Aktiv
                    </Popup>
                  </Marker>);

return (
  <MapContainer center={[46.80121, 8.226692]} zoom={8} scrollWheelZoom={true}>
    {swisstopo}
    {muehleberg}{goesgen}{beznau}{leibstadt}
    <Circle center={coord_muehleberg} pathOptions={polyStyle} radius={radius}/>
    <Circle center={coord_goesgen} pathOptions={polyStyle} radius={radius}/>
    <Circle center={coord_beznau} pathOptions={polyStyle} radius={radius}/>
    <Circle center={coord_leibstadt} pathOptions={polyStyle} radius={radius}/>
  </MapContainer>
  );
}

export default App;