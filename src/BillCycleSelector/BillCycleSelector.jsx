import React from 'react';

export const BillCycleSelector = ({isOn, handleToggle}) => {
    let yearlyClass = "";
    let discountText = "Save 0%";
    let discountClass = "discount_tag_red";
    if(isOn === true){
        yearlyClass = "white";
        discountText = "Save 20%";
        discountClass = "discount_tag";
    }

    return(<>
        <div className="bill_cycle_selector">
            <label className="switch_container">
                <span className="monthly">Billed Monthly</span>
                <input checked={isOn} onChange={handleToggle} id="cycle_switch" type="checkbox"></input>
                <span className="slider"></span>
                <span className={"yearly", yearlyClass}>Billed Annually</span>
            </label>
            <span id="discount_tag_wrapper">
                <h2 className={discountClass}>{discountText}</h2>
            </span>
        </div>
    </>);
};