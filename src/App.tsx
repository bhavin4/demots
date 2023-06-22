import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AppRoutes } from "./utils/Routes";

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
<<<<<<< HEAD
                  <i.component />  
=======
                <i.component/>
>>>>>>> a3e30e0124db012405b23e0bf367d8f8af819a04
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
