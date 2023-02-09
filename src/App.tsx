import { Container, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navigation } from "./components";
import { Home, Recommend, Settings } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <div className="App">
        <Navigation />
      </div>
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="settings" element={<Settings />} />
          <Route path="recommend" element={<Recommend />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
