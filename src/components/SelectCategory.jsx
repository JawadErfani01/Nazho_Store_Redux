const SelectCategory=()=>{
    const handelCategory = (e) => {
        console.log("category not finishied")
        
        console.log(e.target.value)
      }
    return(
        <select
            className='md:w-[50%] shadow-lg p-3 my-3 rounded-lg  py-2 outline-none border '
            id='exampleSelect'
            onChange={(e) => handelCategory(e)}
            name='category'
            type='category'
          >
            <option value='All'>Choose Category</option>
            <option value='All'>All</option>
            <option value='electronics'>electronics</option>
            <option value='jewelery'>jewelery</option>
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothing</option>
          </select>
    )
}
export default SelectCategory
