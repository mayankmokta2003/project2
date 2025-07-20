import React from 'react'
import Header from './Header'
import Boox from './Boox'
import './App.css'

function App() {

 const [count , setCount] = React.useState(Header)

function toggle(id){
setCount(prevSquare => {
  const newSquare = []
  for(i=0;i<prevSquare.length;i++){
   const currSquare = prevSquare[i]
   if(currSquare.id === id){
    const updatedSquare = {
      ...currSquare , on: !currSquare.on
    }
    newSquare.push(updatedSquare)
   }else{
    newSquare.push(currSquare)
   }
  }
return newSquare
  
})
}
 

 const boxes = count.map(prev => (
  <Boox key={prev.id}
  id={prev.id}
   on={prev.on}
   toggle={toggle}
   />
 ))
   
  return (
   <div>
   {boxes}
  
   </div>
  )
}

export default App
