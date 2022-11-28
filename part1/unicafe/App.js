import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onClickGood = () => {
    setGood(good + 1)
  }
  const onClickNeutral = () => {
    setNeutral(neutral + 1)
  }
  const onClickBad = () => {
    setBad(bad + 1)
  }

  const sum = good + neutral + bad
  const aver = (good - bad) / (good + bad + neutral)
  const rate = ((good) / (good + bad +neutral) * 100) + ' %'

  const record = [
    {
      text: 'good',
      value: good,
    },
    {
      text: 'neutral',
      value: neutral,
    },
    {
      text: 'bad',
      value: bad,
    },
    {
      text: 'all',
      value: sum,
    },
    {
      text: 'average',
      value: aver,
    },
    {
      text: 'positive',
      value: rate,
    }
  ]

  return (
    <div>
      <Header />
      <Button text='good' clickHandler={onClickGood}/>
      <Button text='neutral' clickHandler={onClickNeutral}/>
      <Button text='bad' clickHandler={onClickBad}/>
      <Statistics contents={record} sum={sum}/>
    </div>
  )
}

const Header = () => <h1>give feedback</h1>

const Button = ({text, clickHandler}) => {
  return <button onClick={clickHandler}>{text}</button>
}

const Statistics = ({contents, sum}) => {
  if (sum === 0) {
    return <div>
      <h1>
        statistics
      </h1>
      <p>No feedback given</p>
    </div>
  } else {
    return <div>
      <h1>
        statistics
      </h1>
      <table>
        {
          contents.map(content => 
            (<StatisticLine 
                text={content.text}
                value={content.value}
                key={content.text}
              />))
        }
      </table>
    </div>
  }
}

const StatisticLine = ({text, value}) => {
  return <tbody><tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr></tbody>
}

export default App