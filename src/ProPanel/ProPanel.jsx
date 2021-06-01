import React from 'react';

export const ProPanel = ({annualBilling, onClickFunction}) => {
    let billString = "Monthly";
    let price = "$4.99";
    if(annualBilling){
        billString = "Annual";
        price = "$3.99";
    }

    return(<>
        <div class="pricing_plan" id="pro_plan">
            <div class="most_popular">Most Popular</div>
            <h1>Pro</h1>
            <p>Perfect for those who dont want to think about what to cook, buy and how to make it!</p>
            <div class="price_wrapper">
                <h1 class="price">{price} <span class="light_mons">/month</span></h1>
                <h2>(Billed {billString})</h2>
            </div>
            <div class="features_in_plan">
                <div class="row_flex feature">
                    <img src={process.env.PUBLIC_URL + "/images/Check Icon.png"}></img>
                    <h2>Weekly meal plans</h2>
                </div>
                <div class="row_flex feature">
                    <img src={process.env.PUBLIC_URL + "/images/Check Icon.png"}></img>
                    <h2>Weekly grocery lists</h2>
                </div>
                <div class="row_flex feature">
                    <img src={process.env.PUBLIC_URL + "/images/Check Icon.png"}></img>
                    <h2>Recipies Included</h2>
                </div>
                <div class=" row_flex feature">
                    <img src={process.env.PUBLIC_URL + "/images/Check Icon.png"}></img>
                    <h2>30 Day Free Trial</h2>
                </div>
            </div>
            <button onClick={onClickFunction} class="try_free_button">Try Free (30 Days)</button>
        </div>
    </>);
};