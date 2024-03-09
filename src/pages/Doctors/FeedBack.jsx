import React, { useState } from 'react';
import avatar from "../../assets/images/avatar-icon.png"
import { formateDate } from '../../utils/FormateDate';
import { AiFillStar } from 'react-icons/ai'
import FeedbackFrom from './FeedbackFrom';

const FeedBack = () => {

 const [showFeedbackFrom , setShowFeedfrom] =useState(false)

    return (
        <div>
            <div className=' mb-[50px] '>
                <h4 className=' text-[20px] leading-[30px] font-bold text-headingColor mb-[30px] '>
                    All review (342)
                </h4>

                <div className='flex justify-between gap-10 mb-[30px]  '>

                    <div className=' flex gap-3 '>
                        <figure className='w-10 h-10   rounded-full '>
                            <img src={avatar} className='w-full ' alt="" />
                        </figure>
                        <div >
                            <h5 className='text-[16px] leading-6 text-primaryColor  font-bold  '>
                                Md.Tamim
                            </h5>
                            <p className='text-[14px] leading-6 text-textColor ' >{formateDate("03-1-2023")}</p>
                            <p className=' text_para mt-1 font-medium text-[15px] '>
                                Good services ,highly recommended 👍
                            </p>
                        </div>
                    </div>

                    <div className='flex gap-1 '>
                        {[...Array(5).keys()].map((_, index) =>
                            <AiFillStar key={index} color="#0067FF" />
                        )}
                    </div>
                </div>
            </div>
           {!showFeedbackFrom &&  <div className='text-center '>
                <button className=' btn ' onClick={()=>setShowFeedfrom(true)} >Give feedback
                </button>
            </div>}
             
            {showFeedbackFrom && <FeedbackFrom/>}       
        </div>
    );
};
export default FeedBack;