import { Fragment } from 'react'
import SliderComponent from './common/SliderComponent'

const Slider = () => {
  return (
    <Fragment>
      <SliderComponent defaultValue={20} min={0} max={50}/>
      <SliderComponent defaultValue={150} min={100} max={200}/>
      <SliderComponent defaultValue={3} min={0} max={10}/>
    </Fragment>
  )
}

export default Slider
