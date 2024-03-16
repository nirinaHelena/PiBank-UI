import {BrowserRouter, useNavigate} from 'react-router-dom';
import {NextUIProvider} from '@nextui-org/react';

function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      {/* Your app here... */}
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        {/* ... */}
      </Routes>
    </NextUIProvider>
  )
}