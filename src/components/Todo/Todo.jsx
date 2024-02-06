import { useEffect, useState } from "react"
import Button from "../Button/Button"
import Input from "../Input/Input"
import List from "../List/List"

const LS_TODO_KEY = 'todo';
const Todo = () => {
  const [item , setItem] = useState('')
  const [list , setList] = useState([])

  const btnClickHandler =()=>{
     //const items = [...list];
  //items.push(item);
  //setList(items);
  if(item.trim().length){
  setList([...list, {item, isDone: false}]);
  setItem('');
  }

  };

   useEffect(()=>{
   const items = JSON.parse(localStorage.getItem(LS_TODO_KEY)) || [];
   setList(items)
   }, [])


   const swapItem=(initIndex, finalIndex)=>{
    const items = [...list];
    const temp = items[initIndex];
    items[initIndex] = items[finalIndex];
    items[finalIndex] = temp;
    setList(items);

   }

  const doneBtnHandler = (index) => {
    const items = [...list];
    items[index].isDone = true;
    setList(items);

  }

  const deleteHandler = (index)=>{
    const items = [...list];
    items.splice(index, 1)
    setList(items);


  }



//store or update te list in local storage
useEffect(()=>{
  localStorage.setItem(LS_TODO_KEY, JSON.stringify(list));
},[list]);






  return (
<>
<Input changeHandler ={ (data)=> setItem(data)} value ={item} enterKeyHandler={btnClickHandler}/>
<Button clickHandler={btnClickHandler} disabled={!item.trim().length} btnLabel="Add to the list"/>
<div className="mt-3">
<List items={list} swapItem={swapItem} 
 doneBtnHandler ={doneBtnHandler}
 deleteHandler = {deleteHandler}/>
</div>

</>
  )
}

export default Todo;