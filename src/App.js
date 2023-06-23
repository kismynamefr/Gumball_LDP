import './Scss/main.scss'
import Banner from './components/Banner'
import Benefit from './components/Benefit'
import Loading from './components/Loading'
import Navbar from './components/Navbar'
import Roadmap from './components/Roadmap'

function App() {
  return (
    <div className="app">
      <Loading />
      <Navbar />
      <Banner />
      <Roadmap />
      <Benefit />
    </div>
  )
}

export default App
