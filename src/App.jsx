import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Layout } from './components/Layout/Layout'

function App() {
  return (
    <div className="dashboard">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}/>
            <Route path='dashboard' eleemnt={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
