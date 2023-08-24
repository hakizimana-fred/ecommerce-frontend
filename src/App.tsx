import { MantineProvider } from "@mantine/core";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function NotFound() {
  return <h1>Not Found</h1>;
}

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MantineProvider>
  );
}

export default App;
