/* eslint-disable react/prop-types */

import { Stack, Typography } from '@mui/material'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const Result = ({ data }) => {
  const { homeValue, deposit, loanAmount, loanTerm, interestRate } = data

  const totalLoanMonths = loanTerm * 12 // 60 months = 5 years
  const interestPerMonth = interestRate / 100 / 12 // 100 @ 12% for 1 year

  const monthlyPayment =
    (loanAmount *
      interestPerMonth *
      (1 + interestPerMonth) ** totalLoanMonths) /
    ((1 + interestPerMonth) ** totalLoanMonths - 1)

  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount

  const pieChartData = {
    labels: ['Principle', 'Interest'],
    datasets: [
      {
        label: 'Ratio of Principle and Interest',
        data: [homeValue, totalInterestGenerated],
        backgroundColor: [
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: ['rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
        borderWidth: 1,
      },
    ],
  }

  return (
    <Stack gap={3}>
      <Typography textAlign="center" variant="h5">
        Monthly Payment: £ {monthlyPayment.toFixed(2)}
      </Typography>
      <Stack direction="row" justifyContent="center">
        <div>
          <Pie data={pieChartData} />
        </div>
      </Stack>
    </Stack>
  )
}

export default Result
