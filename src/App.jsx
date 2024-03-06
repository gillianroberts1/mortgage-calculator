import './App.css'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import TenureSelect from './components/TenureSelect'
import Result from './components/Result'

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Slider />
        <TenureSelect />
        <Result />
      </div>
    </>
  )
}

export default App
