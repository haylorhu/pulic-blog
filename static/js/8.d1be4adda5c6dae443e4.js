webpackJsonp([8],{OpX7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),s=n.n(r),o=n("NYxO"),a={data:function(){return{username:"",password:""}},methods:s()({},Object(o.b)(["login"]),{onLogin:function(){var e=this;this.login({username:this.username,password:this.password}).then(function(){e.$router.push({path:"/"})})}})},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login"}},[n("h4",[e._v("用户名")]),e._v(" "),n("el-input",{attrs:{placeholder:"用户名"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),e._v(" "),n("p",{staticClass:"error"},[e._v("当前用户名已经注册")]),e._v(" "),n("h4",[e._v("密码")]),e._v(" "),n("el-input",{attrs:{type:"password",placeholder:"密码"},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.onLogin(t):null}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),n("p",{staticClass:"error"},[e._v("当前用户名已经注册")]),e._v(" "),n("el-button",{attrs:{size:"medium"},on:{click:e.onLogin}},[e._v("立即登录")]),e._v(" "),n("p",{staticClass:"notice"},[e._v("没有账号 "),n("roter-link",{attrs:{to:"/register"}},[e._v("注册新用户")])],1)],1)},staticRenderFns:[]};var u=n("VU/8")(a,i,!1,function(e){n("Ydor")},null,null);t.default=u.exports},Ydor:function(e,t){}});
//# sourceMappingURL=8.d1be4adda5c6dae443e4.js.map