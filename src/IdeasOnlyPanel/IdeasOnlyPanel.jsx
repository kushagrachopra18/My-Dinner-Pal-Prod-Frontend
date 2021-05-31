import React from 'react';

export const IdeasOnlyPanel = ({annualBilling, onClickFunction}) => {
    let billString = "Monthly";
    let price = "$1.99";
    if(annualBilling){
        billString = "Annual";
        price = "$1.59";
    }

    return(<>
        <div class="pricing_plan" id="ideas_only">
            <h1>Ideas Only</h1>
            <p>Perfect for thoes who already know their way around the kitchen and just need ideas!</p>
            <div class="price_wrapper">
                <h1 class="price">{price} <span class="light_mons">/month</span></h1>
                <h2>(Billed {billString})</h2>
            </div>
            <div class="features_in_plan">
                <div class="row_flex feature">
                    <img src="/images/Check Icon.png"></img>
                    <h2>Weekly meal plans</h2>
                </div>
                <div class=" row_flex feature">
                    <img src="/images/Check Icon.png"></img>
                    <h2>30 Day Free Trial</h2>
                </div>
            </div>
            <button onClick={onClickFunction} class="try_free_button">Try Free (30 Days)</button>
        </div>
    </>);
};