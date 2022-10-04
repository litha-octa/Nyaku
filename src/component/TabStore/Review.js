import React from "react";
import { review } from "../../assets/states/statesInStore";
import '../../assets/style/storeTab/tabReview.css';
import { Akun } from "../../assets/img";

const   Review = ()=>{
    return(
        <div className="review-container">
            {review.map((item)=>{
                return (
                  <div className="item-review">
                    <div className="username-reviewer"><img src={Akun} alt='icon'style={{width: 20, height:20, marginLeft:10, marginRight:15}}/>{item.username}</div>
                    <div className="date-reviewer">{item.date}</div>
                    <div className="review-reviewer">{item.review}</div>
                  </div>
                );
            })}
            
        </div>
    )
}
export default Review