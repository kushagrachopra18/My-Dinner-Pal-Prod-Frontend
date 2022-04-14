import React, { useState } from 'react';
import { BillCycleSelector } from '../BillCycleSelector';
import { IdeasOnlyPanel } from '../IdeasOnlyPanel';
import { ProPanel } from '../ProPanel';
import { CheckoutPopup } from '../CheckoutPopup';
import { SuccessPopup } from '../SuccessPopup';
import { CreateAccountPopup } from '../CreateAccountPopup';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

//Use this key for live data
const stripePromise = loadStripe("pk_live_51IgxffKIKjam29K6W8nvTk8u20ikPl5oxnJ9U1RR0MjYjXPqnA9lb9BKfmCW9hI4GHAjEikH5KENqoRnefnADeTA00SRjyRFQp");

export const Home = ({openLogIn}) => {
    const [annualCycleSelected, setAnnualCycleSelected] = useState(true);
    const [checkoutOpen, setCheckoutOpen] = useState(false);
    const [successOpen, setSucessOpen] = useState(false);
    const [createAccountOpen, setCreateAccountOpen] = useState(false);

    const [plan, setPlan] = useState('');
    const [billCycle, setBillCycle] = useState('');
    const [price, setPrice] = useState('');

    return(<>
        <div class="hero">
            <div id="hero_body">
                <div class="big_title">Is deciding what to cook annoying?</div>
                <p class="big_subtitle">We make weekday cooking stress free by sending you an easy meal plan and grocery
                    list every week! </p>
                <a class="header_buttion hero_button" href="#pricing_panel_selector">Sign up / Try FREE</a>
            </div>
            <img id="main_hero" src="/images/mushroom_risotto.jpg" alt="hero"></img>
        </div>

        <div class="features_panel">
            <h1 class="features_header">Never worry about what to cook again!</h1>
            <h2>Save time in the kitchen and reduce food waste</h2>
            <div class="benefits_panel">
                <div class="benefit">
                    <img class="benefits_icon" src="/images/Time Icon.png" alt="hero"></img>
                    <h1 class="benefit_header">Save Time</h1>
                    <h2 class="benefit_text"> Don’t waste time worrying about what to eat! We send you meal plans every week
                        to make cooking straightfoward!</h2>
                    <img class="benefit_image" src="/images/3122022 Pro Meal Plan (meal plan).png" alt="hero"></img>
                </div>
                <div class="benefit">
                    <img class="benefits_icon" src="/images/No Stress Icon.png" alt="hero"></img>
                    <h1 class="benefit_header">Be Stress Free</h1>
                    <h2 class="benefit_text"> Have all the planning and quality testing be done for you! We only include recipies we’ve
                        tested for quality and ease!</h2>
                    <img class="benefit_image" src="/images/3122022 Pro Meal Plan (recipe).png" alt="hero"></img>
                </div>
                <div class="benefit">
                    <img class="benefits_icon" src="/images/No Waste Icon.png" alt="hero"></img>
                    <h1 class="benefit_header">Reduce Waste</h1>
                    <h2 class="benefit_text"> Don’t buy things you don’t need at the grocery store! We send you a grocery
                        list every week so you know exactly what you need to buy!</h2>
                    <img class="benefit_image" src="/images/3122022 Pro Meal Plan (grocery list).png" alt="hero"></img>
                </div>
            </div>
        </div>

        <div class="levels_panel">
            <h1 class="levels_header">100+ delicious doable recipes and growing!</h1>
            <h2 class="levels_subheader">Perfect for busy people who love good food!</h2>
            <div class='row'>
                <div class='column'>
                    <img src='images/Recipe_Gallery_Images/spicy_katsu_sandwich.jpg' ></img>
                    <img src="/images/Recipe_Gallery_Images/chicken_marsala.jpg" ></img>
                    <img src="/images/Recipe_Gallery_Images/chicken_platter.jpg" ></img>
                </div>
                <div class='column'>
                    <img src="/images/Recipe_Gallery_Images/kbbq_pork_chops.jpg" ></img>
                    <img src="/images/Recipe_Gallery_Images/asian_sesame_burger.jpg" ></img>
                    <img src="/images/Recipe_Gallery_Images/lamb_keema_pav.jpg" ></img>
                </div>
                <div class='column'>
                    <img src="/images/Recipe_Gallery_Images/carbonara.jpg" ></img>
                    <img src="/images/Recipe_Gallery_Images/mediteranian_bowl.jpg" ></img>
                    <img src="/images/Recipe_Gallery_Images/red_wine_pork_chops.jpg" ></img>
                </div>
                <div class='column'>
                    <img src="/images/Recipe_Gallery_Images/pork_burger.jpg" ></img>
                    <img src="/images/Recipe_Gallery_Images/broccoli_cheddar_soup.jpg" ></img>
                    <img src="/images/Recipe_Gallery_Images/kbbq_fried_rice.jpg" ></img>
                </div>
                <div class='column'>
                    <img src="/images/Recipe_Gallery_Images/curry_chicken_burrito.jpg" ></img>
                    <img src="/images/Recipe_Gallery_Images/roasted_chicken_bowl.jpg" ></img>
                    <img src="/images/Recipe_Gallery_Images/meatball_sub.jpg" ></img>
                </div>
                <div class='column'>
                    <img src="/images/Recipe_Gallery_Images/italian_pesto_sub.jpg" ></img>
                    <img src="/images/Recipe_Gallery_Images/lamb_gyros.jpg" ></img>
                    <img src="/images/Recipe_Gallery_Images/BMT_bananna_jam_parfait.jpg" ></img>
                </div>
            </div>
        </div>

        <div class="pricing_panel" id="pricing_panel_selector">
            <h1 class="short_title">Try free for 30 Days!</h1>
            <h2 class="short_subtitle">No risk! If we aren’t able to make your life easier in the next month just
                cancel! No hard feelings!
            </h2>
            <BillCycleSelector 
                isOn={annualCycleSelected}
                handleToggle={() => setAnnualCycleSelected(!annualCycleSelected)}
            />
            <div class="pricing_plans_container">
                <IdeasOnlyPanel
                    annualBilling={annualCycleSelected}
                    onClickFunction={
                        () => {
                            setCheckoutOpen(true)
                            setPlan("Ideas Only");
                            if(annualCycleSelected){
                                setBillCycle("year");
                                setPrice("$19.08");
                            }else{
                                setBillCycle("month");
                                setPrice("$1.99");
                            }
                        }
                    }
                />
                <ProPanel
                    annualBilling={annualCycleSelected}
                    onClickFunction={
                        () => {
                            setCheckoutOpen(true)
                            setPlan("Pro");
                            if(annualCycleSelected){
                                setBillCycle("year");
                                setPrice("$47.88");
                            }else{
                                setBillCycle("month");
                                setPrice("$4.99");
                            }
                        }
                    }
                />
                <div class="pricing_plan beta_plan">
                    <h1>Beta Tester</h1>
                    <p>Sign up with your early access code to become an early access beta tester!</p>
                    <div class="price_wrapper">
                        <h1 class="price">Special Pricing</h1>
                    </div>
                    <div class="features_in_plan">
                        <div class="row_flex feature">
                            <img src="/images/Check Icon.png"></img>
                            <h2>Weekly meal plans</h2>
                        </div>
                        <div class="row_flex feature">
                            <img src="/images/Check Icon.png"></img>
                            <h2>Weekly grocery lists</h2>
                        </div>
                        <div class="row_flex feature">
                            <img src="/images/Check Icon.png"></img>
                            <h2>Recipies Included</h2>
                        </div>
                        <div class=" row_flex feature">
                            <img src="/images/Check Icon.png"></img>
                            <h2>Early access to features</h2>
                        </div>
                    </div>
                    <button onClick={()=>{setCreateAccountOpen(true);}} class="try_free_button">Sign Up</button>
                </div>
            </div>
        </div>
        <div class="our_story">
            <h1>Our Story</h1>
            <div class="story_inner">
                <img src="/images/Profile Picture.jpeg"></img>
                <p>Hi, my name is Kush! I founded My Dinner Pal to create a world where you don't 
                    have to stress about what to eat during the week. As someone who is super 
                    passionate about cooking and invests a lot of time in their health, when I 
                    started living on my own for the first time I would spend 3-4 hours a week 
                    minimum planning out what to cook during the week. Most of this time was spent 
                    sifting through thousands of recipes on Google, looking for inspiration for 
                    meals that were delicious and well balanced. After doing this every week for 
                    over a year I realized that life would be much easier if there was a tool that 
                    learned my food preferences and suggested a small number of quality tested and 
                    well balanced meals every week that I could simply say “yes” or “no” to until 
                    I was happy with the resulting meal plan, and that is where My Dinner Pal 
                    started. While My Dinner Pal is a simple email subscription today that sends 
                    out weekly meal plans, in the future I am to build an AI powered tool that 
                    learns your food preferences and can easily and quickly generate the perfect 
                    meal plan for you every week so that you can reduce stress and spend more time 
                    on the things that are important to you! If you have any questions or want to 
                    chat about anything, feel free to shoot me a text at (336)406-8998 or shoot me 
                    an email at kushagrachopra16@gmail.com :)
                </p>
            </div>
        </div>
        <Elements stripe={stripePromise}>
            <CheckoutPopup
                isOpen={checkoutOpen}
                closeFunction={() => {
                    setCheckoutOpen(false);
                }}
                plan={plan}
                billCycle={billCycle}
                price={price}
                toSuccessFunction={() => {
                    setCheckoutOpen(false);
                    setSucessOpen(true);
                }}
            />
        </Elements>
        <SuccessPopup
            isOpen={successOpen}
            closeFunction={() => {
                setSucessOpen(false);
            }}
        />
        <CreateAccountPopup
            isOpen={createAccountOpen}
            toLogIn={()=>{
                setCreateAccountOpen(false);
                openLogIn();
            }}
            closeFunction={() => {
                setCreateAccountOpen(false)
            }}
        />
    </>);
}