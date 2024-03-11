/* eslint-disable react/prop-types */
import { Fragment } from 'react'
import SliderComponent from './common/SliderComponent'

// eslint-disable-next-line no-unused-vars, react/prop-types
const Slider = ({ data, setData }) => {
  console.log({ data })
  const bank_limit = 10000

  return (
    <Fragment>
      <SliderComponent
        label="Home Value"
        defaultValue={data.homeValue}
        value={data.homeValue}
        min={0}
        max={bank_limit}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data, 
            deposit: value * 0.2,
            loanAmount: value * 0.8,
            homeValue: value,
          })
        }
        unit="£"
        amount={data.homeValue}
      />

      <SliderComponent
        label="Deposit"
        defaultValue={data.deposit}
        value={data.deposit}
        min={0}
        max={data.homeValue}
        step={100}
        onChange={(e, value) => setData({ ...data, 
          loanAmount: (data.homeValue - value),
          deposit: value })}
        unit="£"
        amount={data.deposit}
      />
      <SliderComponent
        label="Loan Amount"
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        min={0}
        max={data.homeValue}
        step={100}
        onChange={(e, value) => setData({...data, 
          deposit: (data.homeValue - value),
          loanAmount: value})}
        unit="£"
        amount={data.loanAmount}
      />
      <SliderComponent
        label="Interest Rate"
        defaultValue={data.interestRate}
        value={data.interestRate}
        min={2}
        max={18}
        step={0.5}
        onChange={(e, value) =>
          setData({...data, interestRate:value
          })
        }
        unit="%"
        amount={data.interestRate}
      />
    </Fragment>
  )
}

export default Slider
