

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

const Header = ({course}) =>{
  return(
    <>
      <h1>{course.name}</h1>
    </>
  )
}


const Content = ({course}) =>{
  const linea = course.parts.map(p => `Part: ${p.name}             Exercises: ${p.exercises}`)
  return(
    <div>
      <p>{linea[0]}<br /></p>
      <p>{linea[1]}<br /></p>
      <p>{linea[2]}<br /></p>
    </div>
  )

}

const Total = ({course}) =>{
  let total = 0

  course.parts.forEach(valor =>{
    total += valor.exercises
  })
  return(
    <p>Total: {total}</p>
  )
}


export default App