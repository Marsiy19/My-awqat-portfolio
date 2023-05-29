import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { fetchedMealsAbout, fetchingMealsAbout, fetchingErrorMealsAbout } from '../../store/reducer/mealsAboutSlice'

const MealsAbout = () => {

    const { mealsAbout, loadingMealsAbout  } = useSelector(store => store.mealsAbout)

    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(fetchingMealsAbout())
        axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${params.mealsId}`)
        .then(res => {
            dispatch(fetchedMealsAbout(res.data.meals))
            console.log('meals', res.data.meals)
        })
        .catch(err => {
            dispatch(fetchingErrorMealsAbout())
        })
    }, [])
    console.log(mealsAbout)


  return (
    <div className='w-[95%]  mx-auto'>

      {
          mealsAbout?.map(item => (
            <div key={item.idMeal} className='flex flex-col'>
              <div className='mt-12 mb-6 p-4 flex w-full  items-center justify-between border shadow-md rounded-sm flex-wrap border-gray-300'>
                  <h1 className='text-2xl font-semibold '>{item.strMeal}</h1>              
                  
                  <div className='flex  gap-4'>
                    

                    <Link to={item.strCategory ? `/category/${item.strCategory}` : idMeal ?  `/meal/${item.idMeal}` : '/' }>
                    <button className='bg-orange-400 p-1 rounded-md text-xs font-medium text-white'>{item.strCategory} </button>

                    </Link>


                    <Link to={`/filterArea/${item.strArea}`}> <button className='bg-orange-400 p-1 rounded-md text-xs font-medium text-white'>{item.strArea} </button></Link>




                    
                    
                    {
                    item.strTags ? <button className='bg-orange-400 p-1 rounded-md text-xs font-medium text-white'>{item.strTags}</button> : ''
                    }


                  </div>
                  {/* strTags */}

              </div>

              <div className='w-full p-5 border shadow-md rounded-sm border-gray-300'>

               <iframe className='w-full' width="942" height="530" src={`https://www.youtube.com/embed/${item.strYoutube.slice(-11)}`}  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

              </div>

              <div className='border w-full my-3 border-gray-300 rounded-sm flex '>
                <div className='flex m-4 h-full gap-5 w-full  max-md:flex-wrap'>

                    <div className=' flex items-center justify-center'>
                          <img className='w-[100%] rounded-md h-full max-md:w-[300px] max-md:h-auto' src={item.strMealThumb} alt="" />
                    </div>

                    <div className=' w-[150%]'>
                      <p className='text-sm'>{item.strInstructions}</p>
                      
                    </div>
                </div>
              </div>


            </div>
          ))

      }
        
    </div>
  )
}

export default MealsAbout











