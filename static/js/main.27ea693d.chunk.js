(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(t,e,n){t.exports={container:"Container_container__JBy1_"}},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),c=n(7),o=n.n(c),i=(n(15),n(8)),s=n(2),u=n(3),l=n(5),j=n(4),b=n(9),d=n.n(b),p=n(0);function h(t){var e=t.options,n=t.leaveFeedback;return Object(p.jsx)(p.Fragment,{children:e.map((function(t){return Object(p.jsx)("button",{className:d.a.Button,type:"button",onClick:function(){return n(t)},children:t},t)}))})}function O(t){var e=t.item,n=t.text;return Object(p.jsx)("li",{children:Object(p.jsxs)("p",{children:[n,":"," ",Object(p.jsxs)("span",{children:[e,"positivePercentage"===n&&"%"]})]})})}O.defaultProps={item:0};var f=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=Object.keys(this.props);return Object(p.jsx)("ul",{children:e.map((function(e){return console.log.apply(t.props[e]),Object(p.jsx)(O,{text:e,item:t.props[e]},e)}))})}}]),n}(a.a.Component),v=n(10),g=n.n(v),x=function(t){var e=t.children;return Object(p.jsx)("div",{className:g.a.container,children:e})},m=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.title,n=t.children;return Object(p.jsx)("section",{children:Object(p.jsxs)(x,{children:[Object(p.jsx)("h2",{children:e}),n]})})}}]),n}(a.a.Component),k=function(t){var e=t.message;return Object(p.jsx)("p",{children:e})};k.defaultProps={message:"have not any message"};var y=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).openStatistic=!1,t.state={good:t.props.good,neutral:t.props.neutral,bad:t.props.bad},t.changeState=function(e){t.openStatistic=!0,t.setState((function(t){return Object(i.a)({},e,t[e]+1)}))},t.totalCount=function(t){return t.good+t.neutral+t.bad},t.percentageCount=function(t){var e=t.good,n=t.neutral,r=t.bad;return Math.round(100/(e+n+r)*e)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,r=t.bad;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(m,{title:"Please leave feedback",children:Object(p.jsx)(h,{options:["good","neutral","bad"],leaveFeedback:this.changeState})}),Object(p.jsx)(m,{title:"Statistics",children:this.openStatistic?Object(p.jsx)(f,{good:e,neutral:n,bad:r,total:this.totalCount(t),positivePercentage:this.percentageCount(t)}):Object(p.jsx)(k,{message:"No feedback given"})})]})}}]),n}(r.Component);y.defaultProps={good:0,neutral:0,bad:0},o.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={Button:"FeedbackOptions_Button__11OeW"}}},[[17,1,2]]]);
//# sourceMappingURL=main.27ea693d.chunk.js.map