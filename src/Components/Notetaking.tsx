import { useState } from "react";


export default function Notetaking() {
  const [list, setList] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");

  function onDeleteClick(index: number)
  {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList)
  }
  function renderListItem(listItem: string, index: number)
  {
return(
  <div key = {index}>
    <div>{listItem}</div>
    <button onClick={()=>onDeleteClick(index)}>Delete</button>
  </div>
)
  }
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => setList([...list, value])}>add</button>
      {list.map(renderListItem)}
    </>
  );
}
