import {BrowserRouter, useNavigate} from 'react-router-dom';
import {NextUIProvider} from '@nextui-org/react';

function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <Routes>
        <Route path="/Home" element={<HomePage />} />
      </Routes>
    </NextUIProvider>
  )
}