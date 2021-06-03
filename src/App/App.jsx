import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BillCycleSelector } from '../BillCycleSelector';
import { IdeasOnlyPanel } from '../IdeasOnlyPanel';
import { ProPanel } from '../ProPanel';
import { CheckoutPopup } from '../CheckoutPopup';
import { SuccessPopup } from '../Success Popup';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51IgxffKIKjam29K6f9DeS6dId7Jbc5KoL2jJ8V9AA9Yj2Bdlzd6QqhBqwtWSOpkcrHO0Aj1HXuAEFS9i1vJD6u2H00iyxq9i6X");

export const App = () => {
    const [annualCycleSelected, setAnnualCycleSelected] = useState(true);
    const [checkoutOpen, setCheckoutOpen] = useState(false);
    const [successOpen, setSucessOpen] = useState(false);

    const [plan, setPlan] = useState('');
    const [billCycle, setBillCycle] = useState('');
    const [price, setPrice] = useState('');

    return (<>
    <header class="site-header">
        <div class="site-identity">
            <a href="#">
                <img src={process.env.PUBLIC_URL + "/images/My Dinner Pal Mustache Logo (Curved Title).png"} alt="Site Name"></img>
            </a>
            <h1>
                <href href="#" id="nav_header">My Dinner Pal</href>
            </h1>
        </div>
        <a class="header_buttion" href="#pricing_panel_selector">Try 30 Days Free!</a>
    </header>
    
    <div class="hero">
        <img id="main_hero" src={process.env.PUBLIC_URL + "/images/My Dinner Pal Home Image (healthy chicken).png"} alt="hero">
            </img>
        <div id="hero_body">
            <div class="big_title">Is deciding what to cook annoying?</div>
            <p class="big_subtitle">We make weekday cooking stress free by sending you an easy meal plan and grocery
                list every week! </p>
            <a class="hero_button" href="#pricing_panel_selector">
                <h2>Try 30 days FREE</h2>
                <i class="arrow right"></i>
            </a>
        </div>
    </div>

    <div class="features_panel">
        <h1 class="features_header">Never worry about what to cook again!</h1>
        <h2>Save time in the kitchen and reduce food waste</h2>
        <div class="benefits_panel">
            <div class="benefit">
                <img class="benefits_icon" src={process.env.PUBLIC_URL + "/images/Time Icon.png"} alt="hero"></img>
                <h1 class="benefit_header">Save Time</h1>
                <h2 class="benefit_text"> Don’t waste time worrying about what to eat! We send you meal plans every week
                    to make cooking straightfoward!</h2>
                <img class="benefit_image" src={process.env.PUBLIC_URL + "/images/(meal plan)My Dinner Pal.png"} alt="hero"></img>
            </div>
            <div class="benefit">
                <img class="benefits_icon" src={process.env.PUBLIC_URL + "/images/No Stress Icon.png"} alt="hero"></img>
                <h1 class="benefit_header">Be Stress Free</h1>
                <h2 class="benefit_text"> Don’t stress about how to cook delicious food! We only include recipies we’ve
                    tested for quality and ease!</h2>
                <img class="benefit_image" src={process.env.PUBLIC_URL + "/images/(recipies)My Dinner Pal.png"} alt="hero"></img>
            </div>
            <div class="benefit">
                <img class="benefits_icon" src={process.env.PUBLIC_URL + "/images/No Waste Icon.png"} alt="hero"></img>
                <h1 class="benefit_header">Reduce Waste</h1>
                <h2 class="benefit_text"> Don’t buy things you don’t need at the grocery store! We send you a grocery
                    list every week so you know exactly what you need to buy!</h2>
                <img class="benefit_image" src={process.env.PUBLIC_URL + "/images/(grocery list)My Dinner Pal (3).png"} alt="hero"></img>
            </div>
        </div>
    </div>

    <div class="levels_panel">
        <h1 class="levels_header">Made for busy people who like good food!</h1>
        <h2 class="levels_subheader">Perfect for off campus college students and young professionals</h2>
        <div class="levels_wrapper">
            <div class="level_box">
                <h1 class="level_title">How delicious will the food be?</h1>
                <div class="level_inner_wrapper">
                    <h2 class="level_end_label">Way too "healthy"</h2>
                    <div class="level_range">
                        <div id="taste_level"></div>
                    </div>
                    <h2 class="level_end_label">The best food ever</h2>
                </div>
            </div>
            <div class="level_box">
                <h1 class="level_title">How healthy will this make me?</h1>
                <div class="level_inner_wrapper">
                    <h2 class="level_end_label">I never want abs</h2>
                    <div class="level_range">
                        <div id="health_level"></div>
                    </div>
                    <h2 class="level_end_label">Fitness Guru</h2>
                </div>
            </div>
            <div class="level_box">
                <h1 class="level_title">How easy will the recipies be?</h1>
                <div class="level_inner_wrapper">
                    <h2 class="level_end_label">Gordon Ramsay</h2>
                    <div class="level_range">
                        <div id="ease_level"></div>
                    </div>
                    <h2 class="level_end_label">What is cooking?</h2>
                </div>
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
                <p>Want to help us make cooking easy? Send us an email to become an early access beta tester!</p>
                <div class="price_wrapper">
                    <h1 class="price">Special Pricing</h1>
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
                        <h2>Early access to features</h2>
                    </div>
                </div>
                <a href="mailto:kushagrachopra16@gmail.com" target="_blank" class="try_free_button">Email Us</a>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="footer_info">
            <p>© My Dinner Pal LLC</p>
            <p>Please contact us with any questions or conscerns!</p>
            <p>To upgrade or cancel your subscription just send us an email and we will take care of it promptly!</p>
            <p>mydinnerpal@gmail.com</p>
            <p>(336) 406-8998</p>
        </div>
        <div class="our_story">
            <img src={process.env.PUBLIC_URL + "/images/Profile Picture.jpeg"}></img>
            <div class="story_inner">
                <p class="bold">Our Story</p>
                <p>My Dinner Pal was founded a busy college student who was sick of fighting the uphill battle of
                    finding semi-healthy delicious meals to cook. Kushagra Chopra personally struggled with his health
                    and finding the help and resources to improve his life was difficult. Through finding and pursuing
                    healthy eating, he ultimately ended up losing 40 pounds. Ever since then, he’s focused on making
                    delicious semi-healthy eating easy and convenient for others.</p>
            </div>
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
    </>)
};