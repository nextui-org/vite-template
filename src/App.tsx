import { Route, Routes } from 'react-router-dom';
import IndexPage from '@/pages/index';
import DocsPage from '@/pages/docs';
import PricingPage from '@/pages/pricing';
import BlogPage from '@/pages/blog';
import AboutPage from '@/pages/about';

function App() {

  return (
    <Routes>
      <Route path='/' Component={IndexPage} />
      <Route path='/docs' Component={DocsPage} />
      <Route path='/pricing' Component={PricingPage} />
      <Route path='/blog' Component={BlogPage} />
      <Route path='/about' Component={AboutPage} />
    </Routes>
  )
}

export default App
