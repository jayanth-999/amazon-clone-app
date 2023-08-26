import React, {  useEffect, useState } from 'react'
import './RightSide.css'
import Product from './Product';

function RightSide() {
    const [Productlist,setProductlist] = useState([])

    useEffect(()=>{
        let list =[
            { id: 1, name : "Iphone10", rating: "34565", price: "4534", image:"https://ik.imagekit.io/amazonImg/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65_%20(1).webp?updatedAt=1692707498459"},
            { id: 2, name : "Iphone11", rating: "656", price:"76543456", image:"https://ik.imagekit.io/amazon123/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__mSWkMhTkWnT.webp?updatedAt=1628852292388"},
            { id: 3, name : "Iphone12", rating: "8754", price:"76543", image:"https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578"},
            { id: 4, name : "Iphone13", rating: "344574367565", price:"637357", image:"https://ik.imagekit.io/amazon123/51PuFBgBK4L._AC_UL640_FMwebp_QL65__3iZl6oRR-.webp?updatedAt=1628852291461"},
            { id: 5, name : "Iphone12", rating: "8754", price:"76543", image:"https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578"},
            { id: 6, name : "Iphone13", rating: "344574367565", price:"637357", image:"https://ik.imagekit.io/amazon123/51PuFBgBK4L._AC_UL640_FMwebp_QL65__3iZl6oRR-.webp?updatedAt=1628852291461"}
        ]
        setProductlist(list);
    }, []);

    return (
        <div className='RightSide__main'>
           {   
                Productlist.map ( item =>(
                        <Product definition={item} />
                ))   
            }

        </div>
    );
}

export default RightSide;