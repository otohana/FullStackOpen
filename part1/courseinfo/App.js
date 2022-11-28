const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  const courses = {
    parts: [
      {
        name: 'Fundamentals of React',
        exercise: 10,
      },
      {
        name: 'Using props to pass data',
        exercise: 7,
      },
      {
        name: 'State of a component',
        exercise: 14,
      },
    ]
  }

  return (
    <div>
      <Header course = {course} />
      <Content  parts = {courses.parts}/>
      <Total number = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part 
        part = {props.parts[0].name}
        exercise = {props.parts[0].exercise}
      />
      <Part 
        part = {props.parts[1].name}
        exercise = {props.parts[1].exercise}
      />
      <Part 
        part = {props.parts[2].name}
        exercise = {props.parts[2].exercise}
      />
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.number}
    </p>
  )
}

export default App
