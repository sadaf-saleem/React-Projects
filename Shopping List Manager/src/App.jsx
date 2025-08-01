import {useState} from 'react'
import './App.css'

const App = () => {
  /*
  item{
  name: '',
  purchased: false
  }
  */
  const[shoppingList,setShoppingList] = useState([])

  const addItem = (event) => {
    event.preventDefault();
    let form=event.target;
    let formData = new FormData(form)
    let formDataObj = Object.fromEntries(formData.entries())
    formDataObj.purchased = false;
    setShoppingList([...shoppingList,formDataObj])
  }
  const removeItem = (event) => {
    let removeIt = event.target.value;
    let newList = shoppingList.filter(function(item){
      if(removeIt===item.name){
        return false;
      }
      else {
        return true;
      }

    })
    setShoppingList(newList)
  }
  const markDone = (event) => {
    let markIt = event.target.value;
    shoppingList.map(function(val,index){
      if(markIt===val.name){
        val.purchased=true;
      }
    })
    setShoppingList([...shoppingList])
  }

  return (
    <div>
      <h1>Shopping List Manager</h1>
      <div className='card'>
        <form onSubmit={addItem} className='flex-apart' >
          <input type="text" name='name'placeholder='Add item to list...' />
        <button className='btn purple'>Add</button>
        </form>
        
      </div>
       {/* Show list items here */}
      {shoppingList.map((val, index) => (
        <div className={val.purchased ? 'card flex-apart green' : 'card flex-apart'} key={index}>
        <span>{val.name} / {val.purchased ? "Yes":"No"}</span>
        <span><button className='btn pink' onClick={markDone} value={val.name}>Done</button>
        <button className='btn' onClick={removeItem} value={val.name}>x</button></span>
        </div>
      ))}
    </div>
  );
};
     

export default App
