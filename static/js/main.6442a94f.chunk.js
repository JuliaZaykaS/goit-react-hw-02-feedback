(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(t,e,a){},18:function(t,e,a){"use strict";a.r(e);var c=a(1),n=a.n(c),i=a(4),s=a.n(i),o=(a(16),a(5)),r=a(6),u=a(7),l=a(11),b=a(10),d=a(0);function j(t){var e=t.title,a=t.children;return Object(d.jsxs)("div",{children:[e&&Object(d.jsx)("h2",{children:e}),a]})}var v=a(8),p=a.n(v);function h(t){var e=t.options,a=t.onLeaveFeedback;return e.map((function(t,e){return Object(d.jsx)("button",{className:p.a.button,type:"button",onClick:function(){return a(t)},children:t},e)}))}var O=a(2),f=a.n(O);function k(t){var e=t.label,a=t.value;return Object(d.jsxs)("li",{className:f.a.statisticItem,children:[e," ",Object(d.jsx)("span",{className:f.a.statisticNumber,children:a})]})}function x(t){var e=t.good,a=t.neutral,c=t.bad,n=t.total,i=t.positiveFeedback;return Object(d.jsxs)("ul",{className:f.a.statisticList,children:[Object(d.jsx)(k,{label:"Good",value:e}),Object(d.jsx)(k,{label:"Neutral",value:a}),Object(d.jsx)(k,{label:"Bad",value:c}),Object(d.jsx)(k,{label:"Total",value:n}),Object(d.jsx)(k,{label:"Positive feedback",value:i})]})}function _(t){var e=t.message;return Object(d.jsx)("p",{children:e})}var m=a(9),g=a.n(m),F=function(t){Object(l.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(r.a)(this,a);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).state={good:0,neutral:0,bad:0},t.onClickBtn=function(e){return t.setState((function(t){return Object(o.a)({},e.toLowerCase(),t[e.toLowerCase()]+1)}))},t}return Object(u.a)(a,[{key:"countTotalFeedback",value:function(){var t=this.state;return t.good+t.neutral+t.bad}},{key:"countPositiveFeedbackPercentage",value:function(){var t=this.state.good;return 0===t?0:"".concat(Math.round(t/this.countTotalFeedback()*100),"%")}},{key:"render",value:function(){var t=this.state,e=t.good,a=t.neutral,c=t.bad,n=this.countTotalFeedback();return Object(d.jsxs)("div",{className:g.a.app,children:[Object(d.jsx)(j,{title:"Please leave feedback",children:Object(d.jsx)(h,{options:["Good","Neutral","Bad"],onLeaveFeedback:this.onClickBtn})}),Object(d.jsx)(j,{title:"Statistics",children:0===n?Object(d.jsx)(_,{message:"No feedback given"}):Object(d.jsx)(x,{good:e,neutral:a,bad:c,total:n,positiveFeedback:this.countPositiveFeedbackPercentage()})})]})}}]),a}(c.Component);s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(F,{})}),document.getElementById("root"))},2:function(t,e,a){t.exports={statisticList:"Statistics_statisticList__29zFS",statisticItem:"Statistics_statisticItem__nECcJ",statisticNumber:"Statistics_statisticNumber__zLuBW"}},8:function(t,e,a){t.exports={reviewList:"FeedbackOptions_reviewList__3peOu",reviewItem:"FeedbackOptions_reviewItem__2ui_z",button:"FeedbackOptions_button__18V8m"}},9:function(t,e,a){t.exports={app:"App_app__3O6_h"}}},[[18,1,2]]]);
//# sourceMappingURL=main.6442a94f.chunk.js.map