import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import CreatePage from './pages/CreatePage.jsx';
import HomePage from './pages/HomePage.jsx';
import NavBar from './components/NavBar.jsx';


function App() {

  return (
    <>
      <Box minH={"100vh"} >
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/create" element={<CreatePage />}></Route>
        </Routes>
      </Box>
    </>
  );
}

export default App
