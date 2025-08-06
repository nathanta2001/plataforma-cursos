import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
//import { ThemeProvider } from "./context/ThemeContext";
//import { NotificationProvider } from "./context/NotificationContext";

function App() {
  return (
    <AuthProvider>
      

          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>


    </AuthProvider>
  );
}

export default App;
