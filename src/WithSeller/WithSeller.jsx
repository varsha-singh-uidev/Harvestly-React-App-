import React from "react"

export default function WithSeller(WrapCards){
    return function EnhaCards(props){
        const {review} = props;
        return(
            <div className="relative">
                <WrapCards {...props}/>

                {review >= 4.5 && (
                    <span className='absolute top-10 left-6.5 bg-green-400 text-white py-1 px-3 rounded-sm'>
                        Best Seller 
                    </span>
                )}
            </div>
        )
    }
}