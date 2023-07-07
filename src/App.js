import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRoutesConfig } from "./utils/PrivateRoutes";
import { PrivateRoutes, PublicRoutes } from "./routes";
import { AuthProvider } from "./utils/AuthContext";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            {PublicRoutes.map((item, index) => {
              const PublicPage = item.element;
              return (
                <Route key={index} path={item.path} element={<PublicPage />} />
              );
            })}
            <Route element={<PrivateRoutesConfig />}>
              {PrivateRoutes.map((item, index) => {
                const PrivatePage = item.element;
                return (
                  <Route
                    key={index}
                    path={item.path}
                    element={<PrivatePage />}
                  />
                );
              })}
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
