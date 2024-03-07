import './App.css'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import TenureSelect from './components/TenureSelect'
import Result from './components/Result'
import { Container, Grid } from '@mui/material'

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Container maxWidth="xl" sx={{ marginTop: 4 }}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6} >
              <Slider />
              <TenureSelect />
            </Grid>
            <Grid item xs={12} md={6}>
              <Result />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  )
}

export default App
