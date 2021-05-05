(function(t){function e(e){for(var i,a,c=e[0],o=e[1],u=e[2],m=0,_=[];m<c.length;m++)a=c[m],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&_.push(r[a][0]),r[a]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);l&&l(e);while(_.length)_.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(i=!1)}i&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={app:0},s=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/quake_timer/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},2325:function(t,e,n){"use strict";n("ae5b")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},["menu"===t.screen?n("main-menu",{on:{startGame:t.startGame}}):t._e(),"game"===t.screen?n("game",{attrs:{question_limit:t.question_limit},on:{finishedGame:t.showStats}}):t._e(),"stats"===t.screen?n("stats",{attrs:{number_correct:t.stats.number_correct,number_incorrect:t.stats.number_incorrect,time_taken:t.stats.time_taken,average_time:t.stats.average_time,accuracy:t.stats.accuracy},on:{playAgain:function(e){t.screen="game"},backMenu:function(e){t.screen="menu"}}}):t._e()],1)},s=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"main-menu"}},[n("div",{attrs:{id:"logo"}},[t._v("Quake Timer")]),n("div",{attrs:{id:"input-text"}},[t._v("Enter the number of questions you'll like to answer")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.question_limit,expression:"question_limit"}],attrs:{id:"input-box"},domProps:{value:t.question_limit},on:{keypress:function(e){return t.isNumber(e)},input:function(e){e.target.composing||(t.question_limit=e.target.value)}}}),n("div",{attrs:{id:"play-btn"},on:{click:t.startGame}},[t._v("Play")])])},c=[],o={name:"main-menu",data:function(){return{question_limit:10}},methods:{isNumber:function(t){t=t||window.event;var e=t.which?t.which:t.keyCode;if(!(e>31&&(e<48||e>57)))return!0;t.preventDefault()},startGame:function(){this.question_limit>0&&this.$emit("startGame",parseInt(this.question_limit))}}},u=o,l=(n("2325"),n("2877")),m=Object(l["a"])(u,a,c,!1,null,"5854532d",null),_=m.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"game"}},[n("div",{attrs:{id:"question"}},[t._v(t._s(t.question))]),t._l(t.choices,(function(e,i){return n("choice",{key:"choice_"+i,staticClass:"choice",attrs:{choice:e,answer:t.answer,is_correct:e===t.correct_choice},on:{clickedAnswer:function(n){return t.answerQuestion(e)}}})}))],2)},d=[],f=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{backgroundColor:t.answer.length?t.is_correct?"green":"red":t.is_hover?"#1b1b2f":"#1f4068",border:t.answer===t.choice?"3px solid gold":"none"},attrs:{id:"choice"},on:{mouseenter:function(e){t.is_hover=!0},mouseleave:function(e){t.is_hover=!1},click:function(e){return t.$emit("clickedAnswer")}}},[t._v(" "+t._s(t.choice)+" ")])}),h=[],p={name:"choice",props:{choice:String,answer:String,is_correct:Boolean},data:function(){return{is_hover:!1}}},b=p,w=(n("6f80"),Object(l["a"])(b,f,h,!1,null,"8e0cebea",null)),g=w.exports,y={name:"game",components:{Choice:g},props:{question_limit:Number},data:function(){return{question_reset_time:1e3,questions_answered:0,question:"0:00",choices:["0:00","0:00"],correct_choice:"0:00",answer:"",number_correct:0,number_incorrect:0,time:0,time_interval:!1}},methods:{newQuestion:function(){var t=Math.ceil(600*Math.random()),e=t+30,n=t+10*Math.ceil(6*Math.random());while(e==n)n=t+10*Math.ceil(6*Math.random());var i=Math.round(Math.random()),r=+!i;this.question=this.convertIntSec(t),this.choices[i]=this.convertIntSec(e),this.choices[r]=this.convertIntSec(n),this.correct_choice=this.choices[i]},convertIntSec:function(t){var e=Math.floor(t/60),n=t-60*e;return e<10&&(e="0"+e),n<10&&(n="0"+n),e+":"+n},answerQuestion:function(t){var e=this;this.answer||(this.answer=t),this.correct_choice===t?this.number_correct++:this.number_incorrect++,this.questions_answered++,setTimeout((function(){e.time-=e.question_reset_time/1e3,e.questions_answered<e.question_limit?(e.answer=!1,e.newQuestion()):(clearInterval(e.time_interval),e.$emit("finishedGame",{number_correct:e.number_correct,number_incorrect:e.number_incorrect,time_taken:e.time,average_time:e.time/e.question_limit,accuracy:e.number_correct/e.question_limit}))}),this.question_reset_time)}},mounted:function(){var t=this;this.newQuestion(),this.time_interval=setInterval((function(){t.time+=.1}),100)}},q=y,k=(n("5e82"),Object(l["a"])(q,v,d,!1,null,"873ce808",null)),M=k.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"stats"}},[n("div",{attrs:{id:"stats-wrapper"}},[n("div",{staticClass:"stat-row"},[n("div",{staticClass:"stat-title"},[t._v("Number of correct answers")]),n("div",{staticClass:"stat-value"},[t._v(t._s(t.number_correct))])]),n("div",{staticClass:"stat-row"},[n("div",{staticClass:"stat-title"},[t._v("Number of incorrect answers")]),n("div",{staticClass:"stat-value"},[t._v(t._s(t.number_incorrect))])]),n("div",{staticClass:"stat-row"},[n("div",{staticClass:"stat-title"},[t._v("Total time taken")]),n("div",{staticClass:"stat-value"},[t._v(t._s(t.roundDeci(t.time_taken,2))+" secs")])]),n("div",{staticClass:"stat-row"},[n("div",{staticClass:"stat-title"},[t._v("Average time per question")]),n("div",{staticClass:"stat-value"},[t._v(t._s(t.roundDeci(t.average_time,2))+" secs")])]),n("div",{staticClass:"stat-row"},[n("div",{staticClass:"stat-title"},[t._v("Accuracy")]),n("div",{staticClass:"stat-value"},[t._v(t._s(100*t.roundDeci(t.accuracy,4))+" %")])])]),n("div",{attrs:{id:"btn-wrapper"}},[n("div",{staticClass:"buttons",on:{click:function(e){return t.$emit("playAgain")}}},[t._v("Play Again")]),n("div",{staticClass:"buttons",on:{click:function(e){return t.$emit("backMenu")}}},[t._v("Main Menu")])])])},O=[],x={name:"Stats",props:{number_correct:Number,number_incorrect:Number,time_taken:Number,average_time:Number,accuracy:Number},methods:{roundDeci:function(t,e){return Math.round(t*Math.pow(10,e))/Math.pow(10,e)}}},S=x,j=(n("9e34"),Object(l["a"])(S,C,O,!1,null,"36e9756e",null)),N=j.exports,$={name:"app",components:{Stats:N,MainMenu:_,Game:M},data:function(){return{screen:"menu",question_limit:0,stats:!1}},methods:{startGame:function(t){this.question_limit=t,this.screen="game"},showStats:function(t){this.stats=t,this.screen="stats"}}},P=$,G=(n("034f"),Object(l["a"])(P,r,s,!1,null,null,null)),A=G.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(A)}}).$mount("#app")},"5e82":function(t,e,n){"use strict";n("7e7e")},"6f80":function(t,e,n){"use strict";n("7e94")},"77b4":function(t,e,n){},"7e7e":function(t,e,n){},"7e94":function(t,e,n){},"85ec":function(t,e,n){},"9e34":function(t,e,n){"use strict";n("77b4")},ae5b:function(t,e,n){}});
//# sourceMappingURL=app.8d706ada.js.map