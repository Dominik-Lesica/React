import { Person } from './Person';
import { people } from "../../../data";

const List = () => {
  return (
  <div>
    <h1>list</h1>
    {people.map((person) => {
      return <Person {...person}/>
    })}
  </div>)
}

export default List;