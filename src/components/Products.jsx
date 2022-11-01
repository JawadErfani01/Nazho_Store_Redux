import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Product from '../components/Product'
import { toast } from 'react-toastify'
import SwitchBtn from './SwitchBtn'
import { getData } from '../Feuture/reducers/storeSlice'
import Loading from '../components/Loading'
import MyPagoination from './MyPagoination'
import Select from './Select'
import {FaSearch} from 'react-icons/fa'
function Products() {
  const dispatch = useDispatch()
  const [title, settitle] = useState('')
  const { list, loading, error, message } = useSelector((state) => state.store)
  const { currentPage, dataPerPage } = useSelector((state) => state.pagination)
  const indexOfLastCart = currentPage * dataPerPage
  const indexOfFirstCart = indexOfLastCart - dataPerPage

  const handelSearch = list.filter((item) =>
    item.title.toLowerCase().includes(title)
  )

  const newList = handelSearch.slice(indexOfFirstCart, indexOfLastCart)

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  if (loading) {
    return <Loading />
  }
  if (error) {
    toast.error(message)
  }

  return (
    <div className='text-center'>
      <h1 className='welcomeText p-5 pb-3  text-center'>Welcome to Nazho Store</h1>
      <div className=' px-5 mx-4 sm:flex justify-between items-center'>
        <div className='text-center m-3  shadow sm:w-[30%]  p-3 '>
        <Select />

          <form className='my-3 relative'>
            <input
              className='w-[90%] p-3 py-2 outline-none border rounded-full shadow-gray-200 shadow-lg '    placeholder='Search...'
              value={title}
              name='title'
              onChange={(e) => settitle(e.target.value)}
            />
            <span className='absolute right-[38px] opacity-50 top-[14px] '><FaSearch/></span>
          </form>
        </div>

        <div className='align-self-end mb-1'>
          <SwitchBtn />
        </div>
      </div>
      <hr style={{width:'96%',margin:'auto'}} />
      <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 m-3 '>
        {newList.map((item, index) => (
          <div key={index} className='  m-3  '>
            <Product item={item} />
          </div>
        ))}
      </div>
      {handelSearch.length >= dataPerPage && (
        <MyPagoination handelSearch={handelSearch} />
      )}
    </div>
  )
}
export default Products
