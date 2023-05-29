// import React from 'react'
// import { Link } from 'react-router-dom'

// const ContentMeal = ({ title, description, image, name, strCategory, strCategoryThumb, strMeal, strMealThumb, idMeal,}) => {
  
//   return (
//     <>
//         <div className='card item relative cursor-pointer transition duration-300 hover:border-slate-600 border-2 '>
//                 <Link to={`/meal/${idMeal}`}>
//                 <img 
//                     className=''
//                     src={image ? image : strCategoryThumb ? strCategoryThumb : strMealThumb} 
//                     alt={title ? title : name ? name : strMeal ? strMeal : strMeal}
//                 />
//                 </Link>

//                 <button className={`absolute p-4 bg-orange-500 text-white text-3xl top-4 right-4 rounded-md shadow-md transition duration-200 hover:bg-orange-600 active:opacity-75 transform active:scale-95 outline-none`} >
//                                         <i className='bx bx-cart'></i> 
//                 </button>

//                 <div className='card-body'>
//                     <h1>{title}</h1>
//                     {description && <p>{description}</p>}
//                     {strMeal && <h1>{strMeal}</h1>}
//                     {name && <h1>{name}</h1>}
//                     {strCategory && <h1>{strCategory}</h1>}
//                 </div>
//             </div>

//     </>
//   )
// }

// export default ContentMeal