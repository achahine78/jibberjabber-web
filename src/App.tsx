import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage";
import HomePage from "./pages/home/HomePage";
import AppShell from "./components/appshell/AppShell";
import AuthGuard from "./guards/AuthGuard";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/home"
          element={
            <AuthGuard>
              <AppShell>
                <HomePage />
              </AppShell>
            </AuthGuard>
          }
        />
    </Routes>
  );
}

export default App;
