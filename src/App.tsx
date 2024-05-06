import { Route, Routes } from 'react-router-dom';
import IndexPage from '@/pages/index';
import DocsPage from '@/pages/docs';
import PricingPage from '@/pages/pricing';
import BlogPage from '@/pages/blog';
import AboutPage from '@/pages/about';

function App() {

  return (
    <Routes>
      <Route path='/' element={<IndexPage/>} />
      <Route path='/docs' element={<DocsPage/>} />
      <Route path='/pricing' element={<PricingPage/>} />
      <Route path='/blog' element={<BlogPage/>} />
      <Route path='/about' element={<AboutPage/>} />
    </Routes>
  )
}

export default App
