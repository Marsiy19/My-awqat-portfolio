import { message, Spin } from 'antd'
import axios from 'axios'
import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Heading from '../../components/Heading/Heading'
import { addToCart } from '../../store/reducer/cartSlice'
import cartSound from '../../assets/music/Iphone.mp3'
import { fetchedArea, fetchErrorArea, fetchingArea } from '../../store/reducer/areaSlice'


const FilterArea = () => {

    const {area, loadingArea } = useSelector(store => store.area)
    const { cartMeals } = useSelector(store => store.cart)

    const params = useParams()
    const dispatch = useDispatch()
    const cartMusicPlayer = useRef(null)

    useEffect(() => {
        dispatch(fetchingArea())
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${params.area}`)
        .then(res => {
                dispatch(fetchedArea(res.data.meals))
        })
        .catch(err => {
            dispatch(fetchErrorArea())
        })

    }, [params])


    function addingMealToBasket(meal) {


        dispatch(addToCart(meal))
        cartMusicPlayer.current.currentTime = 0
        cartMusicPlayer.current.play()
        setTimeout(() => {
            cartMusicPlayer.current.pause()
        }, 2000)
        message.success('Product added to cart')
    }


  return (
    <div className='container w-[95%] mx-auto py-12'>
    <Heading>

        FilterArea of Category <b className='text-rose-600'> {params.area}</b>

    </Heading>

    <audio src={cartSound} className='hidden' controls ref={cartMusicPlayer}></audio>

    <Spin spinning={loadingArea}>


                <div className="row py-12 ">

                {
                    area.map(item => (
                        <div key={item.idMeal} className='card item relative cursor-pointer transition duration-300 hover:border-slate-600 border-2 ' >

                                <Link to={`/meal/${item.idMeal}`}>
                                    <img className='' 
                                    src={item.strMealThumb}/>

                                </Link>
                                <button onClick={() => addingMealToBasket(item)} className={`absolute p-4 bg-orange-500 text-white text-3xl top-4 right-4 rounded-md shadow-md transition duration-200 hover:bg-orange-600 active:opacity-75 transform active:scale-95 outline-none`} >
                                {
                                    cartMeals.findIndex(x => x.idMeal === item.idMeal) === -1 ? (
                                        <i className='bx bx-cart'></i> ) : (<i className='bx bx-check'></i>
                                    )
                                } 
                                </button>
                                <div className='card-body'>
                                    <h1>{item.strMeal}</h1>
                                </div>
                            </div>
                    ))
                }
                </div>

                <Link to={'/cart'} className='min-w-[70px] px-4 h-[70px]  rounded-md shadow-md bg-orange-500 flex gap-2 items-center justify-center fixed bottom-[5%] right-[5%] text-4xl text-white'>
                    <i className='bx bx-cart'></i>
                    ({cartMeals.length})
                </Link>
    </Spin>




    </div>
  )
}

export default FilterArea




{/* <Link to={'/cart'} className='min-w-[70px] px-4 h-[70px]  rounded-md shadow-md bg-orange-500 flex items-center justify-center fixed bottom-[5%] right-[5%] text-4xl text-white'>
<i className='bx bx-cart'></i>(0)
</Link> */}