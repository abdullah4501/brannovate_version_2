import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Home />
      </ScrollToTop>
    </Router>
  );
}

export default App;