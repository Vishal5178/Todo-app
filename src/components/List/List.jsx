
import Button from '../Button/Button';
import styles from './List.module.css'

// eslint-disable-next-line react/prop-types
const List = ({items, swapItem,  doneBtnHandler, deleteHandler}) => {

  //array of data ===> aray of jsx

  // eslint-disable-next-line react/prop-types, react/jsx-key
  const listItems = items.map((task , index) => <li key = {index} className={task.isDone ? 'p-2 bg-success' : 'p-2'}>
    {task.item} 
    <Button btnLabel='up' btnClassName="me-2 ms-2"
     clickHandler= {()=>swapItem(index, index-1)}
     disabled={index===0}
     /> 
    <Button btnLabel='Down'
    btnClassName='me-2'
    clickHandler= {()=>swapItem(index, index+1)}
    // eslint-disable-next-line react/prop-types
    disabled={items.length -1 === index}
     btnStyle={{ backgroundColor: 'aqua'}}/>

      {/* {task.isDone ? (
   <Button btnLabel="Delete" btnClassName='me-2 '/>
     ) :(
      <Button btnLabel="Done" btnClassName='me-2 '/>
     )}  */}
     

    {task.isDone && <Button btnLabel="Delete" btnClassName="me-2" 
    clickHandler={()=>{deleteHandler(index)}}/>}
    {!task.isDone && (
    <Button
     btnLabel="Done" btnClassName="me-2"
    clickHandler={()=>doneBtnHandler(index)}
    
    />
    )}
    
     
     
     
     </li>
  );


  return (
    <ul className={styles.List}>{listItems}</ul>
  )
}

export default List;