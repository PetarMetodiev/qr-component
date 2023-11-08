import imgUrl from "./assets/image-qr-code.png";
import "./App.css";

import "@fontsource/outfit/400.css";
import "@fontsource/outfit/700.css";

function App() {
  return (
    <div className="card-container">
      <div className="card">
        <div className="picture-container">
          <img src={imgUrl} />
        </div>
        <div className="text-container">
          <h2 className="card-title">
            Improve your front-end skills by building projects
          </h2>
          <p className="card-description">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
