(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{45:function(e,s,t){"use strict";t.r(s);var c=t(1),n=t(9),r=t.n(n),a=t(4),l=t(0),i=function(e){var s=e.isOn,t=e.handleToggle,c="",n="Save 0%",r="discount_tag_red";return!0===s&&(c="white",n="Save 20%",r="discount_tag"),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"bill_cycle_selector",children:[Object(l.jsxs)("label",{className:"switch_container",children:[Object(l.jsx)("span",{className:"monthly",children:"Billed Monthly"}),Object(l.jsx)("input",{checked:s,onChange:t,id:"cycle_switch",type:"checkbox"}),Object(l.jsx)("span",{className:"slider"}),Object(l.jsx)("span",{className:c,children:"Billed Annually"})]}),Object(l.jsx)("span",{id:"discount_tag_wrapper",children:Object(l.jsx)("h2",{className:r,children:n})})]})})},o=function(e){var s=e.annualBilling,t=e.onClickFunction,c="Monthly",n="$1.99";return s&&(c="Annual",n="$1.59"),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{class:"pricing_plan",id:"ideas_only",children:[Object(l.jsx)("h1",{children:"Ideas Only"}),Object(l.jsx)("p",{children:"Perfect for thoes who already know their way around the kitchen and just need ideas!"}),Object(l.jsxs)("div",{class:"price_wrapper",children:[Object(l.jsxs)("h1",{class:"price",children:[n," ",Object(l.jsx)("span",{class:"light_mons",children:"/month"})]}),Object(l.jsxs)("h2",{children:["(Billed ",c,")"]})]}),Object(l.jsxs)("div",{class:"features_in_plan",children:[Object(l.jsxs)("div",{class:"row_flex feature",children:[Object(l.jsx)("img",{src:"/My-Dinner-Pal-React-Prod-Frontend/images/Check Icon.png"}),Object(l.jsx)("h2",{children:"Weekly meal plans"})]}),Object(l.jsxs)("div",{class:" row_flex feature",children:[Object(l.jsx)("img",{src:"/My-Dinner-Pal-React-Prod-Frontend/images/Check Icon.png"}),Object(l.jsx)("h2",{children:"30 Day Free Trial"})]})]}),Object(l.jsx)("button",{onClick:t,class:"try_free_button",children:"Try Free (30 Days)"})]})})},d=function(e){var s=e.annualBilling,t=e.onClickFunction,c="Monthly",n="$4.99";return s&&(c="Annual",n="$3.99"),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{class:"pricing_plan",id:"pro_plan",children:[Object(l.jsx)("div",{class:"most_popular",children:"Most Popular"}),Object(l.jsx)("h1",{children:"Pro"}),Object(l.jsx)("p",{children:"Perfect for those who dont want to think about what to cook, buy and how to make it!"}),Object(l.jsxs)("div",{class:"price_wrapper",children:[Object(l.jsxs)("h1",{class:"price",children:[n," ",Object(l.jsx)("span",{class:"light_mons",children:"/month"})]}),Object(l.jsxs)("h2",{children:["(Billed ",c,")"]})]}),Object(l.jsxs)("div",{class:"features_in_plan",children:[Object(l.jsxs)("div",{class:"row_flex feature",children:[Object(l.jsx)("img",{src:"/My-Dinner-Pal-React-Prod-Frontend/images/Check Icon.png"}),Object(l.jsx)("h2",{children:"Weekly meal plans"})]}),Object(l.jsxs)("div",{class:"row_flex feature",children:[Object(l.jsx)("img",{src:"/My-Dinner-Pal-React-Prod-Frontend/images/Check Icon.png"}),Object(l.jsx)("h2",{children:"Weekly grocery lists"})]}),Object(l.jsxs)("div",{class:"row_flex feature",children:[Object(l.jsx)("img",{src:"/My-Dinner-Pal-React-Prod-Frontend/images/Check Icon.png"}),Object(l.jsx)("h2",{children:"Recipies Included"})]}),Object(l.jsxs)("div",{class:" row_flex feature",children:[Object(l.jsx)("img",{src:"/My-Dinner-Pal-React-Prod-Frontend/images/Check Icon.png"}),Object(l.jsx)("h2",{children:"30 Day Free Trial"})]})]}),Object(l.jsx)("button",{onClick:t,class:"try_free_button",children:"Try Free (30 Days)"})]})})},j=t(7),h=t.n(j),b=t(10),u=t(48),x=t(19),O=t.n(x),p=t(6),g=function(){return Object(l.jsxs)("label",{children:["Card details",Object(l.jsx)(p.CardElement,{options:{style:{base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}}})]})},m=function(e){var s=e.isOpen,t=e.closeFunction,n=e.plan,r=e.billCycle,i=e.price,o=e.toSuccessFunction,d=Object(p.useStripe)(),j=Object(p.useElements)(),x=Object(c.useState)(!1),m=Object(a.a)(x,2),y=m[0],f=m[1],_=Object(c.useState)(""),v=Object(a.a)(_,2),k=v[0],w=v[1],P=Object(c.useState)(""),F=Object(a.a)(P,2),D=F[0],C=F[1],S=Object(c.useState)(""),M=Object(a.a)(S,2),I=M[0],R=M[1],N=Object(c.useState)(""),E=Object(a.a)(N,2),T=E[0],W=E[1],B={loop:1/0,ease:"linear",duration:1},H="Confirm Payment";y&&(H=Object(l.jsx)(u.a.span,{style:{display:"block",width:"18px",height:"18px",border:"3px solid #e9e9e9",borderTop:"3px solid #3498db",borderRadius:"50%",boxSizing:"border-box"},animate:{rotate:360},transition:B}));var $=function(){var e=Object(b.a)(h.a.mark((function e(s){var t,c,a,l,i,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d&&j){e.next=2;break}return e.abrupt("return","Please try again. Stripe has not loaded. :)");case 2:if(""!=k){e.next=4;break}return e.abrupt("return","First Name Empty");case 4:if(""!=D){e.next=6;break}return e.abrupt("return","Last Name Empty");case 6:if(""!=I){e.next=8;break}return e.abrupt("return","Email Empty");case 8:return e.next=10,d.createPaymentMethod({type:"card",card:j.getElement(p.CardElement),billing_details:{name:k+" "+D,email:"thisistheproblem@gmail.com"}});case 10:if(!(t=e.sent).error){e.next=16;break}return console.log(t.error.message),e.abrupt("return",t.error.message);case 16:return e.next=18,O.a.post("https://my-dinner-pal-prod-backend.herokuapp.com/sub",{payment_method:t.paymentMethod.id,email:I,firstName:k,lastName:D,plan:n,billCycle:r});case 18:if(c=e.sent,console.log(c),!c.data.code){e.next=24;break}return console.log("Payment Failed"),console.log(c.data.raw.message),e.abrupt("return",c.data.raw.message);case 24:if(a=c.data,l=a.client_secret,i=a.status,console.log(i),"requires_action"!==i){e.next=33;break}return e.next=29,d.confirmCardSetup(l).then((function(e){return console.log(e),e.error?(console.log("There was an issue"),console.log(e.error),e.error.message):(console.log("Payment sucessful after confirmation"),"success")}));case 29:return o=e.sent,e.abrupt("return",o);case 33:if("succeeded"!==i){e.next=38;break}return console.log("Payment sucessful"),e.abrupt("return","success");case 38:return e.abrupt("return","Error processing payment. Please try again or use a different card!");case 39:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();return s?(document.body.style.overflow="hidden",Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{disabled:y,onClick:t,class:"checkout_overlay"}),Object(l.jsxs)("div",{class:"checkout_popup",children:[Object(l.jsx)("button",{disabled:y,onClick:t,id:"checkout_x",children:"\u2715"}),Object(l.jsxs)("div",{className:"checkout_title",children:[Object(l.jsx)("h1",{children:"Checkout"}),Object(l.jsx)("h2",{children:"Your subscription will start now."})]}),Object(l.jsxs)("div",{className:"checkout_features",children:[Object(l.jsx)("p",{children:"\u2794 Total due now $0"}),Object(l.jsxs)("p",{children:["\u2794 Subscribing to ",Object(l.jsx)("span",{class:"bold",children:n})]}),Object(l.jsxs)("p",{children:["\u2794 After 30 days you will be billed ",i,"/",r]})]}),Object(l.jsxs)("form",{onSubmit:Object(b.a)(h.a.mark((function e(){var s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,$();case 3:s=e.sent,f(!1),"success"===s?(o(),w(""),C(""),R(""),W("")):W(s);case 6:case"end":return e.stop()}}),e)}))),children:[Object(l.jsxs)("label",{children:["First Name",Object(l.jsx)("input",{type:"text",value:k,disabled:y,onChange:function(e){w(e.target.value)}})]}),Object(l.jsxs)("label",{children:["Last Name",Object(l.jsx)("input",{type:"text",value:D,disabled:y,onChange:function(e){C(e.target.value)}})]}),Object(l.jsxs)("label",{children:["Email",Object(l.jsx)("input",{type:"text",value:I,disabled:y,onChange:function(e){R(e.target.value)}})]}),Object(l.jsx)(g,{}),Object(l.jsx)("button",{id:"checkout_button",disabled:!d||y,children:H}),Object(l.jsx)("p",{className:"error_message",children:T})]})]})]})):(document.body.style.overflow="unset",Object(l.jsx)(l.Fragment,{}))},y=function(e){var s=e.isOpen,t=e.closeFunction;return s?(document.body.style.overflow="hidden",Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{onClick:t,class:"checkout_overlay"}),Object(l.jsxs)("div",{class:"checkout_popup success_popup",children:[Object(l.jsx)("button",{onClick:t,id:"checkout_x",children:"\u2715"}),Object(l.jsxs)("div",{className:"checkout_title",children:[Object(l.jsx)("h1",{children:"Success"}),Object(l.jsx)("h2",{children:"Your payment was sucessfully processed."})]}),Object(l.jsx)("div",{id:"success_body",children:"You will recieve a welcome email from us soon to confirm that you are good to go! If you do not recieve an email from us in the next 10 minutes or if you have any questions please send us an email!"}),Object(l.jsx)("a",{href:"mailto:kushagrachopra16@gmail.com",target:"_blank",class:"try_free_button",children:"Email Us"})]})]})):(document.body.style.overflow="unset",Object(l.jsx)(l.Fragment,{}))},f=t(20),_=Object(f.a)("pk_test_51IgxffKIKjam29K6f9DeS6dId7Jbc5KoL2jJ8V9AA9Yj2Bdlzd6QqhBqwtWSOpkcrHO0Aj1HXuAEFS9i1vJD6u2H00iyxq9i6X"),v=function(){var e=Object(c.useState)(!0),s=Object(a.a)(e,2),t=s[0],n=s[1],r=Object(c.useState)(!1),j=Object(a.a)(r,2),h=j[0],b=j[1],u=Object(c.useState)(!1),x=Object(a.a)(u,2),O=x[0],g=x[1],f=Object(c.useState)(""),v=Object(a.a)(f,2),k=v[0],w=v[1],P=Object(c.useState)(""),F=Object(a.a)(P,2),D=F[0],C=F[1],S=Object(c.useState)(""),M=Object(a.a)(S,2),I=M[0],R=M[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("header",{class:"site-header",children:[Object(l.jsxs)("div",{class:"site-identity",children:[Object(l.jsx)("a",{href:"#",children:Object(l.jsx)("img",{src:"/My-Dinner-Pal-React-Prod-Frontend/images/My Dinner Pal Logo Black.png",alt:"Site Name"})}),Object(l.jsx)("h1",{children:Object(l.jsx)("href",{href:"#",id:"nav_header",children:"My Dinner Pal"})})]}),Object(l.jsx)("a",{class:"header_buttion",href:"#pricing_panel_selector",children:"Try 30 Days Free!"})]}),Object(l.jsxs)("div",{class:"hero",children:[Object(l.jsx)("img",{id:"main_hero",src:"/My-Dinner-Pal-React-Prod-Frontend/images/My Dinner Pal Home Image (healthy chicken).png",alt:"hero"}),Object(l.jsxs)("div",{id:"hero_body",children:[Object(l.jsx)("div",{class:"big_title",children:"Is deciding what to cook annoying?"}),Object(l.jsx)("p",{class:"big_subtitle",children:"We make weekday cooking stress free by sending you an easy meal plan and grocery list every week! "}),Object(l.jsxs)("a",{class:"hero_button",href:"#pricing_panel_selector",children:[Object(l.jsx)("h2",{children:"Try 30 days FREE"}),Object(l.jsx)("i",{class:"arrow right"})]})]})]}),Object(l.jsxs)("div",{class:"features_panel",children:[Object(l.jsx)("h1",{class:"features_header",children:"Never worry about what to cook again!"}),Object(l.jsx)("h2",{children:"Save time in the kitchen and reduce food waste"}),Object(l.jsxs)("div",{class:"benefits_panel",children:[Object(l.jsxs)("div",{class:"benefit",children:[Object(l.jsx)("img",{class:"benefits_icon",src:"/My-Dinner-Pal-React-Prod-Frontend/images/Time Icon.png",alt:"hero"}),Object(l.jsx)("h1",{class:"benefit_header",children:"Save Time"}),Object(l.jsx)("h2",{class:"benefit_text",children:" Don\u2019t waste time worrying about what to eat! We send you meal plans every week to make cooking straightfoward!"}),Object(l.jsx)("img",{class:"benefit_image",src:"/My-Dinner-Pal-React-Prod-Frontend/images/(meal plan)My Dinner Pal.png",alt:"hero"})]}),Object(l.jsxs)("div",{class:"benefit",children:[Object(l.jsx)("img",{class:"benefits_icon",src:"/My-Dinner-Pal-React-Prod-Frontend/images/No Stress Icon.png",alt:"hero"}),Object(l.jsx)("h1",{class:"benefit_header",children:"Be Stress Free"}),Object(l.jsx)("h2",{class:"benefit_text",children:" Don\u2019t stress about how to cook delicious food! We only include recipies we\u2019ve tested for quality and ease!"}),Object(l.jsx)("img",{class:"benefit_image",src:"/My-Dinner-Pal-React-Prod-Frontend/images/(recipies)My Dinner Pal.png",alt:"hero"})]}),Object(l.jsxs)("div",{class:"benefit",children:[Object(l.jsx)("img",{class:"benefits_icon",src:"/My-Dinner-Pal-React-Prod-Frontend/images/No Waste Icon.png",alt:"hero"}),Object(l.jsx)("h1",{class:"benefit_header",children:"Reduce Waste"}),Object(l.jsx)("h2",{class:"benefit_text",children:" Don\u2019t buy things you don\u2019t need at the grocery store! We send you a grocery list every week so you know exactly what you need to buy!"}),Object(l.jsx)("img",{class:"benefit_image",src:"/My-Dinner-Pal-React-Prod-Frontend/images/(grocery list)My Dinner Pal (3).png",alt:"hero"})]})]})]}),Object(l.jsxs)("div",{class:"levels_panel",children:[Object(l.jsx)("h1",{class:"levels_header",children:"Made for busy people who like good food!"}),Object(l.jsx)("h2",{class:"levels_subheader",children:"Perfect for off campus college students and young professionals"}),Object(l.jsxs)("div",{class:"levels_wrapper",children:[Object(l.jsxs)("div",{class:"level_box",children:[Object(l.jsx)("h1",{class:"level_title",children:"How delicious will the food be?"}),Object(l.jsxs)("div",{class:"level_inner_wrapper",children:[Object(l.jsx)("h2",{class:"level_end_label",children:'Way too "healthy"'}),Object(l.jsx)("div",{class:"level_range",children:Object(l.jsx)("div",{id:"taste_level"})}),Object(l.jsx)("h2",{class:"level_end_label",children:"The best food ever"})]})]}),Object(l.jsxs)("div",{class:"level_box",children:[Object(l.jsx)("h1",{class:"level_title",children:"How healthy will this make me?"}),Object(l.jsxs)("div",{class:"level_inner_wrapper",children:[Object(l.jsx)("h2",{class:"level_end_label",children:"I never want abs"}),Object(l.jsx)("div",{class:"level_range",children:Object(l.jsx)("div",{id:"health_level"})}),Object(l.jsx)("h2",{class:"level_end_label",children:"Fitness Guru"})]})]}),Object(l.jsxs)("div",{class:"level_box",children:[Object(l.jsx)("h1",{class:"level_title",children:"How easy will the recipies be?"}),Object(l.jsxs)("div",{class:"level_inner_wrapper",children:[Object(l.jsx)("h2",{class:"level_end_label",children:"Gordon Ramsay"}),Object(l.jsx)("div",{class:"level_range",children:Object(l.jsx)("div",{id:"ease_level"})}),Object(l.jsx)("h2",{class:"level_end_label",children:"What is cooking?"})]})]})]})]}),Object(l.jsxs)("div",{class:"pricing_panel",id:"pricing_panel_selector",children:[Object(l.jsx)("h1",{class:"short_title",children:"Try free for 30 Days!"}),Object(l.jsx)("h2",{class:"short_subtitle",children:"No risk! If we aren\u2019t able to make your life easier in the next month just cancel! No hard feelings!"}),Object(l.jsx)(i,{isOn:t,handleToggle:function(){return n(!t)}}),Object(l.jsxs)("div",{class:"pricing_plans_container",children:[Object(l.jsx)(o,{annualBilling:t,onClickFunction:function(){b(!0),w("Ideas Only"),t?(C("year"),R("$19.08")):(C("month"),R("$1.99"))}}),Object(l.jsx)(d,{annualBilling:t,onClickFunction:function(){b(!0),w("Pro"),t?(C("year"),R("$47.88")):(C("month"),R("$4.99"))}}),Object(l.jsxs)("div",{class:"pricing_plan beta_plan",children:[Object(l.jsx)("h1",{children:"Beta Tester"}),Object(l.jsx)("p",{children:"Want to help us make cooking easy? Send us an email to become an early access beta tester!"}),Object(l.jsx)("div",{class:"price_wrapper",children:Object(l.jsx)("h1",{class:"price",children:"Special Pricing"})}),Object(l.jsxs)("div",{class:"features_in_plan",children:[Object(l.jsxs)("div",{class:"row_flex feature",children:[Object(l.jsx)("img",{src:"/My-Dinner-Pal-React-Prod-Frontend/images/Check Icon.png"}),Object(l.jsx)("h2",{children:"Weekly meal plans"})]}),Object(l.jsxs)("div",{class:"row_flex feature",children:[Object(l.jsx)("img",{src:"/My-Dinner-Pal-React-Prod-Frontend/images/Check Icon.png"}),Object(l.jsx)("h2",{children:"Weekly grocery lists"})]}),Object(l.jsxs)("div",{class:"row_flex feature",children:[Object(l.jsx)("img",{src:"/My-Dinner-Pal-React-Prod-Frontend/images/Check Icon.png"}),Object(l.jsx)("h2",{children:"Recipies Included"})]}),Object(l.jsxs)("div",{class:" row_flex feature",children:[Object(l.jsx)("img",{src:"/My-Dinner-Pal-React-Prod-Frontend/images/Check Icon.png"}),Object(l.jsx)("h2",{children:"Early access to features"})]})]}),Object(l.jsx)("a",{href:"mailto:kushagrachopra16@gmail.com",target:"_blank",class:"try_free_button",children:"Email Us"})]})]})]}),Object(l.jsxs)("div",{class:"footer",children:[Object(l.jsxs)("div",{class:"footer_info",children:[Object(l.jsx)("p",{children:"\xa9 My Dinner Pal LLC"}),Object(l.jsx)("p",{children:"Please contact us with any questions or conscerns!"}),Object(l.jsx)("p",{children:"To upgrade or cancel your subscription just send us an email and we will take care of it promptly!"}),Object(l.jsx)("p",{children:"mydinnerpal@gmail.com"}),Object(l.jsx)("p",{children:"(336) 406-8998"})]}),Object(l.jsxs)("div",{class:"our_story",children:[Object(l.jsx)("img",{src:"/My-Dinner-Pal-React-Prod-Frontend/images/Profile Picture.jpeg"}),Object(l.jsxs)("div",{class:"story_inner",children:[Object(l.jsx)("p",{class:"bold",children:"Our Story"}),Object(l.jsx)("p",{children:"My Dinner Pal was founded a busy college student who was sick of fighting the uphill battle of finding semi-healthy delicious meals to cook. Kushagra Chopra personally struggled with his health and finding the help and resources to improve his life was difficult. Through finding and pursuing healthy eating, he ultimately ended up losing 40 pounds. Ever since then, he\u2019s focused on making delicious semi-healthy eating easy and convenient for others."})]})]})]}),Object(l.jsx)(p.Elements,{stripe:_,children:Object(l.jsx)(m,{isOpen:h,closeFunction:function(){b(!1)},plan:k,billCycle:D,price:I,toSuccessFunction:function(){b(!1),g(!0)}})}),Object(l.jsx)(y,{isOpen:O,closeFunction:function(){g(!1)}})]})};r.a.render(Object(l.jsx)(v,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.4c10a7d3.chunk.js.map