import Header from "./components/Header/Header";
import UploadPage from "./pages/UploadPage/UploadPage";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      
      <BrowserRouter>
        <Header />  
        <Routes>
          <Route path="/" element={<VideoDetailsPage/>}/>
          <Route path="/videos/:videoId" element={<VideoDetailsPage />} />
          <Route path="/upload" element={<UploadPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
