import {useState,useEffect} from 'react'
import './App.css';




const App = ()=>{

  
  const[tasks,setTask] = useState([]);
  const[id,setId] = useState('');
  

  useEffect(()=>{
    const filteredArray = tasks.filter((colors)=>{
      return colors.id!=id;
    })
    setTask(filteredArray)
  },[id])

  const onClickHandler = (e)=>{
    setId(e.target.id);
   }
 
   const onSubmitHandler = (e)=>{
     e.preventDefault()
    if(e.target.querySelector('input').value==""){
      alert("Please Enter Task")
      return;
    }
    const newTask = {
      id:Math.floor(Math.random()*1298676786786875),
      task:e.target.querySelector('input').value
    }
     setTask((old)=>{
      return [...old,newTask]
     })
   }
  
  return(
    <div >
      <form onSubmit={onSubmitHandler}>
      <input type="text" className="form__input" id="name" placeholder="Add task" required="" />
      <button type="submit" className='button-3'>Add Task</button>
      </form>
     
      {tasks.map((task)=>{
        return <div key={task.id} className="taskbar">
          {task.task} 
          <button  className='button-4' onClick={onClickHandler} id={task.id}>delete</button>
          </div>
      })}
    </div>
  )   

}












// function App() {
  
 
//   const[jokes,setJokes] = useState([])
//   const[filteredJokes,setFilteredJokes] = useState([jokes])
//   const[searchField,setSearchField] = useState('')

// useEffect(()=>{
//   fetch('https://api.imgflip.com/get_memes')
//   .then((res)=>res.json())
//   .then((jokes)=>{
//    setJokes(jokes.data.memes)
//   })
// },[])



// useEffect(()=>{
//   const a =()=> jokes.filter((joke)=>{
//     return joke.name.toLowerCase().includes(searchField)
//  })
//   setFilteredJokes(a)
// },[jokes,searchField])

//   const onChangeHandler=(e)=>{
//     const searchTerm = e.target.value.toLocaleLowerCase();
//     setSearchField(searchTerm)
//   }

//   return (
//     <div className="App">
      
//       <input type="search" onChange={onChangeHandler}/>

//       <h1>Meme Genenator</h1>
//        {filteredJokes.map((joke)=>{
//          return(
//            <div>
//          <img src={`${joke.url}`} alt=""/>
//          <p>{joke.name}</p>
//          </div>
//          )
//        })}
//     </div>
//   );
// }

export default App;
