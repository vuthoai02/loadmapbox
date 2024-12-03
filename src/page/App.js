import React from "react";
import MapGL from "../components/mapgl.jsx";
import "../styles/App.css";
import logo from "../assets/images/logo.png";

function App() {
  const [layerOpacity, setLayerOpacity] = React.useState(0.5);
  const [zoom, setZoom] = React.useState(13);
  const urlLayer = "/quan72023/12/3262/2170.png";
  const imageCoordinates = [
    [106.74319508517412 - 0.043, 10.703971250968305 + 0.043], // top-left
    [106.74319508517412 + 0.043, 10.703971250968305 + 0.043], // top-right
    [106.74319508517412 + 0.043, 10.703971250968305 - 0.043], // bottom-right
    [106.74319508517412 - 0.043, 10.703971250968305 - 0.043], // bottom-left
  ];

  const handleZoom = (e) => {
    setZoom(e.viewState.zoom);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navigation">
          <ul>
            <li>Bản đồ</li>
            <li>Danh sách bản đồ</li>
            <li>Tin tức</li>
            <li>Dự án</li>
            <li>Lịch sử giá</li>
            <li>Tính lãi suất</li>
          </ul>
        </div>
      </header>
      <div className="button-opacity">
        <label>Độ mờ của bản đồ: {layerOpacity * 100}%</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={layerOpacity}
          onChange={(e) => setLayerOpacity(e.target.value)}
        />
      </div>
      <div className="button-zoom">
        <button onClick={() => setZoom(zoom + 1)}>+</button>
        <button onClick={() => setZoom(zoom - 1)}>-</button>
      </div>
      <MapGL
        layerOpacity={layerOpacity}
        urlLayer={urlLayer}
        imageCoordinates={imageCoordinates}
        zoom={zoom}
        handleZoom={handleZoom}
      />
    </div>
  );
}

export default App;
