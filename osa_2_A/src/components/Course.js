
// sum of exer component

const SumOfExercises = ({coursess}) => {

    const exercises = coursess.parts.map(part => part.exercises)
    
    const sum = exercises.reduce((accumulator, currentValue) =>{console.log('accu: ', accumulator, 'current:', currentValue)
      return accumulator + currentValue;
  
  
    }, 0)
    console.log(sum)
    return (
  
      <p>total of {sum} exercises</p>
    )
  }
  

  
// Part component
const Part = ({course}) => {

    // maping parts
    const mapping = course.parts.map(part => {
      return {
        name: part.name,
        exercises: part.exercises
      }
    }
    )
  
    console.log(mapping)
    return (
      <div>
        {mapping.map((part, index) => (
          <div key={index}>
            <p>{part.name}: {part.exercises}</p>
          </div>
        ))}
        <SumOfExercises coursess={course}/>
      </div>
    );
  }
  
  

// Course component
const Course = ({coursess}) => {

    return (
      coursess.map(course =>
        <ul key={course.id}>
          <h1>{course.name}</h1>
          <Part course={course} />
  
  
        </ul>
      )
      )
  }

  export default Course