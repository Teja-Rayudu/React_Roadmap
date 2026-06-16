function List(props) {

    const category = props.category;
    const itemList = props.itemList

    //fruits.sort((a,b) => a.name.localeCompare(b.name)); ALPHABHETICAL 
    //fruits.sort((a,b) => b.name.localeCompare(a.name)); REVERSE ALPHABHETICAL
    //fruits.sort((a,b) => a.calories - b.calories); Numeric
    //fruits.sort((a,b) => b.calories - a.calories); Numeric reverse

  const listItems = itemList.map(item => 
  <li>
    {item.name}: &nbsp; <b>{item.calories}</b>
  </li>);

  return (
    <>
        <h3 className="category">{category}</h3>
        <ol className="item">
            {listItems}
        </ol>
    </>
  );
}

export default List;
