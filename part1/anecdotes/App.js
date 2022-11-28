import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array(anecdotes.length).fill(0))
  const onClickVote = () => {
    const copy = { ...votes}
    copy[selected] += 1
    setVote(copy)
  }
  const onClickNext = () => {
    const getRamdomInt = (max) => Math.floor(Math.random() * max)
    setSelected(getRamdomInt(anecdotes.length))
  }
  const getMostVoted = () => {
    let maxVote = 0
    let res = 0
    const len = anecdotes.length
    for (let i = 0; i < len; i ++) {
      if (maxVote < votes[i]) {
        maxVote = votes[i]
        res = i
      }
    }
    console.log('I am called 2')
    return res
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote 
        anecdotes={anecdotes}
        votes={votes}
        index={selected}
      />
      <VoteButton clickHandler={onClickVote}/>
      <NextButton clickHandler={onClickNext}/>
      <h1>Anecdote with most votes</h1>
      <Anecdote
        anecdotes={anecdotes}
        votes={votes}
        index={getMostVoted()}
      />
    </div>
  )
}

const Anecdote = ({anecdotes, votes, index}) => {
    return <>
      <p>{anecdotes[index]}</p>
      <p>has {votes[index]} votes</p>
    </>
    
}

const VoteButton = ({clickHandler}) => {
  return <button onClick={clickHandler}>vote</button>
}

const NextButton = ({clickHandler}) => {
  return <button onClick={clickHandler}>next anecdote</button>
}

export default App