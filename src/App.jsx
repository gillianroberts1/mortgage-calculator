import './App.css'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import TenureSelect from './components/TenureSelect'
import Result from './components/Result'
import { Container, Grid } from '@mui/material'
import { useState } from 'react'

function App() {
  const [data, setData] = useState({
    homeValue: 3000,
    deposit: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 10,
    interestRate: 5,
  })

  return (
    <>
      <div className="App">
        <Navbar />
        <Container maxWidth="xl" sx={{ marginTop: 4 }}>
          <Grid container spacing={5} alignItems='center'>
            <Grid item xs={12} md={6}>
              <Slider data={data} setData={setData} />

              <TenureSelect data={data} setData={setData} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Result data={data} />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  )
}

export default App
