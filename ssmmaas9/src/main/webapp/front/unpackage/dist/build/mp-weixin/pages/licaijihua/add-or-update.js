(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/licaijihua/add-or-update"],{3219:function(e,n,u){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(u("a34a"));function t(e){return e&&e.__esModule?e:{default:e}}function a(e,n,u,r,t,a,i){try{var o=e[a](i),c=o.value}catch(s){return void u(s)}o.done?n(c):Promise.resolve(c).then(r,t)}function i(e){return function(){var n=this,u=arguments;return new Promise((function(r,t){var i=e.apply(n,u);function o(e){a(i,r,t,o,c,"next",e)}function c(e){a(i,r,t,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([u.e("common/vendor"),u.e("components/w-picker/w-picker")]).then(function(){return resolve(u("702c"))}.bind(null,u)).catch(u.oe)},c={data:function(){return{ruleForm:{licaiguihua:"",zhanghao:"",xingming:"",shouruxiangmu:"",zhichuxiangmu:"",shourujine:"",zhichujine:"",yue:"",yuezhuangtai:"",zhaopian:"",userid:""},yuezhuangtaiOptions:[],yuezhuangtaiIndex:0,user:{},ro:{licaiguihua:!1,zhanghao:!1,xingming:!1,shouruxiangmu:!1,zhichuxiangmu:!1,shourujine:!1,zhichujine:!1,yue:!1,yuezhuangtai:!1,zhaopian:!1,userid:!1}}},components:{wPicker:o},computed:{yue:{get:function(){return 0+parseFloat(this.ruleForm.shourujine)-this.ruleForm.zhichujine||""}}},onLoad:function(n){var u=this;return i(r.default.mark((function t(){var a,i,o,c;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.getStorageSync("nowTable"),t.next=3,u.$api.session(a);case 3:if(i=t.sent,u.user=i.data,u.ruleForm.zhanghao=u.user.zhanghao,u.ruleForm.xingming=u.user.xingming,u.yuezhuangtaiOptions="存进银行,投资".split(","),u.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(u.ruleForm.refid=n.refid,u.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=16;break}return u.ruleForm.id=n.id,t.next=14,u.$api.info("licaijihua",u.ruleForm.id);case 14:i=t.sent,u.ruleForm=i.data;case 16:if(!n.cross){t.next=67;break}o=e.getStorageSync("crossObj"),t.t0=r.default.keys(o);case 19:if((t.t1=t.t0()).done){t.next=67;break}if(c=t.t1.value,"licaiguihua"!=c){t.next=25;break}return u.ruleForm.licaiguihua=o[c],u.ro.licaiguihua=!0,t.abrupt("continue",19);case 25:if("zhanghao"!=c){t.next=29;break}return u.ruleForm.zhanghao=o[c],u.ro.zhanghao=!0,t.abrupt("continue",19);case 29:if("xingming"!=c){t.next=33;break}return u.ruleForm.xingming=o[c],u.ro.xingming=!0,t.abrupt("continue",19);case 33:if("shouruxiangmu"!=c){t.next=37;break}return u.ruleForm.shouruxiangmu=o[c],u.ro.shouruxiangmu=!0,t.abrupt("continue",19);case 37:if("zhichuxiangmu"!=c){t.next=41;break}return u.ruleForm.zhichuxiangmu=o[c],u.ro.zhichuxiangmu=!0,t.abrupt("continue",19);case 41:if("shourujine"!=c){t.next=45;break}return u.ruleForm.shourujine=o[c],u.ro.shourujine=!0,t.abrupt("continue",19);case 45:if("zhichujine"!=c){t.next=49;break}return u.ruleForm.zhichujine=o[c],u.ro.zhichujine=!0,t.abrupt("continue",19);case 49:if("yue"!=c){t.next=53;break}return u.ruleForm.yue=o[c],u.ro.yue=!0,t.abrupt("continue",19);case 53:if("yuezhuangtai"!=c){t.next=57;break}return u.ruleForm.yuezhuangtai=o[c],u.ro.yuezhuangtai=!0,t.abrupt("continue",19);case 57:if("zhaopian"!=c){t.next=61;break}return u.ruleForm.zhaopian=o[c],u.ro.zhaopian=!0,t.abrupt("continue",19);case 61:if("userid"!=c){t.next=65;break}return u.ruleForm.userid=o[c],u.ro.userid=!0,t.abrupt("continue",19);case 65:t.next=19;break;case 67:u.styleChange();case 68:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},yuezhuangtaiChange:function(e){this.yuezhuangtaiIndex=e.target.value,this.ruleForm.yuezhuangtai=this.yuezhuangtaiOptions[this.yuezhuangtaiIndex]},zhaopianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.zhaopian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return i(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.yue=e.yue,!e.ruleForm.shourujine||e.$validate.isIntNumer(e.ruleForm.shourujine)){n.next=4;break}return e.$utils.msg("收入金额应输入整数"),n.abrupt("return");case 4:if(!e.ruleForm.zhichujine||e.$validate.isIntNumer(e.ruleForm.zhichujine)){n.next=7;break}return e.$utils.msg("支出金额应输入整数"),n.abrupt("return");case 7:if(!e.ruleForm.yue||e.$validate.isIntNumer(e.ruleForm.yue)){n.next=10;break}return e.$utils.msg("余额应输入整数"),n.abrupt("return");case 10:if(!e.ruleForm.id){n.next=15;break}return n.next=13,e.$api.update("licaijihua",e.ruleForm);case 13:n.next=17;break;case 15:return n.next=17,e.$api.add("licaijihua",e.ruleForm);case 17:e.$utils.msgBack("提交成功");case 18:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,u=n.getFullYear(),r=n.getMonth()+1,t=n.getDate();return"start"===e?u-=60:"end"===e&&(u+=2),r=r>9?r:"0"+r,t=t>9?t:"0"+t,"".concat(u,"-").concat(r,"-").concat(t)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,u("543d")["default"])},a93f:function(e,n,u){},abb8:function(e,n,u){"use strict";u.r(n);var r=u("3219"),t=u.n(r);for(var a in r)"default"!==a&&function(e){u.d(n,e,(function(){return r[e]}))}(a);n["default"]=t.a},d767:function(e,n,u){"use strict";var r=u("a93f"),t=u.n(r);t.a},d800:function(e,n,u){"use strict";var r;u.d(n,"b",(function(){return t})),u.d(n,"c",(function(){return a})),u.d(n,"a",(function(){return r}));var t=function(){var e=this,n=e.$createElement;e._self._c},a=[]},da21:function(e,n,u){"use strict";(function(e){u("5dc0");r(u("66fd"));var n=r(u("ec5b"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,u("543d")["createPage"])},ec5b:function(e,n,u){"use strict";u.r(n);var r=u("d800"),t=u("abb8");for(var a in t)"default"!==a&&function(e){u.d(n,e,(function(){return t[e]}))}(a);u("d767");var i,o=u("f0c5"),c=Object(o["a"])(t["default"],r["b"],r["c"],!1,null,"0c792af7",null,!1,r["a"],i);n["default"]=c.exports}},[["da21","common/runtime","common/vendor"]]]);