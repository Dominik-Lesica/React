import { useState,useReducer } from 'react';
import { data } from '../../../data';
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from './actions';
import reducer from './reducer';

const defaultState = {
  people: data,
}





const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  

  const removeItem = (id) => {
    dispatch({type: REMOVE_ITEM, payload: {id}});
    /* let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople); */
  };

  function clearPeople() {
    dispatch({type: CLEAR_LIST})
    /* setPeople([]);*/
  }

  function resetPeople() {
    dispatch({type: RESET_LIST})
    /* setPeople(data); */
  }
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length?
      <button
      className='btn'
      onClick={clearPeople}
      >
        clear items
      </button>
      :
      <button className='btn' onClick={resetPeople}>Reset items</button>
      }
    </div>
  );
};

export default ReducerBasics;
