import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchingCategories, fetchedCategories, fetchErrorCategories } from '../../store/reducer/categotySlice'
import './Home.scss'

import { Spin } from 'antd'
import Heading from '../../components/Heading/Heading'
import { Link } from 'react-router-dom'

const Home = () => {

  const { loadingCategories, categories} = useSelector(store => store.category)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchingCategories())
    axios
    .get('https://themealdb.com/api/json/v1/1/categories.php')

    .then(res => {
      dispatch(fetchedCategories(res.data.categories))
      console.log(res)
    })

    .catch(err => {
      dispatch(fetchErrorCategories())
    })

  }, [])

  return (
    
    <div className='container w-[95%] mx-auto py-12'>

      <Heading>
          All categories
      </Heading>
              
            <Spin spinning={loadingCategories}>

                      <div className='row m-12 mx-auto'>

                        {
                          categories?.map((item) => (

                            <Link key={item.idCategory} to={`category/${item.strCategory}`}>

                                <div  className='item hover:border-slate-600 border-2'>
                                  <img  src={item.strCategoryThumb} alt="" />
                                  <h1>{item.strCategory}</h1>
                                </div>

                            </Link>
                            
                          ))
                        }

                      </div>
          </Spin>
    </div>
  )
}

export default Home