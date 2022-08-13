
import { useEffect, useState } from "react";
import '../App.css'
interface IData{
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
}
export default function UseEffectThree(){
const [page, setPage] = useState(1);
const [users, setUsers] = useState<IData[]>([]);
const  [search, setSearch] = useState('');
useEffect(()=>{
    async function api() {
const response = await fetch(`https://reqres.in/api/users?page=${page}`) 
const json: {data: IData[]} = await response.json();
setUsers(json.data);       
    }
    api();
},[page])
function renderUser(user:IData)
{
    return(
        <div key ={user.id} className="container">
        <img src={user.avatar} alt={user.first_name} className="image"/>
        <label>{`${user.first_name} ${user.last_name}`}</label>
        <label>{user.email}</label>
        </div>
    )
}
function sortUsers(){
    let clone = [...users]
    clone = clone.sort((x,y) => x.first_name.localeCompare(y.first_name));
    setUsers(clone);
}
return(
    <>
    <button onClick={()=> setPage(1)}>Page 1</button>
    <button onClick={()=> setPage(2)}>Page 2</button>
    <button onClick={sortUsers}>sorts by first name</button>
    <input type="text" onChange={(e)=>setSearch(e.target.value)} />
   <div className="containers">
   {users.filter(x=> x.first_name.toLowerCase().includes(search) || x.last_name.toLowerCase().includes(search)).map(renderUser)}
   </div>
    </>
)
}