/* eslint-disable react/prop-types */
import Slider from '@mui/material/Slider';


const SliderComponent = (props) => {
  return (
    <Slider defaultValue={props.defaultValue} min={props.min} max={props.max} aria-label="Default" valueLabelDisplay="auto" />
    )
}

export default SliderComponent