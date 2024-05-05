import { Route, Routes } from 'react-router-dom';
import IndexPage from '@/pages/index';

function App() {

  return (
    <Routes>
      <Route path='/' Component={IndexPage} />
    </Routes>
  )
}

export default App
