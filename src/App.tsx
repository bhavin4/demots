import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AppRoutes } from "./utils/Routs";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-secondary">
        <Routes>
          {AppRoutes.map((i) => (
            <Route
              key={i.id}
              path={i.path}
              element={
                <i.auth>
                  <i.component />  
                </i.auth>
              }
            />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
