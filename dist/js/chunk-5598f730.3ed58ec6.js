(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5598f730"],{"5d6b":function(e,a,r){var t=r("e53d").parseInt,o=r("a1ce").trim,s=r("e692"),l=/^[-+]?0[xX]/;e.exports=8!==t(s+"08")||22!==t(s+"0x16")?function(e,a){var r=o(String(e),3);return t(r,a>>>0||(l.test(r)?16:10))}:t},7445:function(e,a,r){var t=r("63b6"),o=r("5d6b");t(t.G+t.F*(parseInt!=o),{parseInt:o})},a1ce:function(e,a,r){var t=r("63b6"),o=r("25eb"),s=r("294c"),l=r("e692"),i="["+l+"]",n="​",p=RegExp("^"+i+i+"*"),u=RegExp(i+i+"*$"),c=function(e,a,r){var o={},i=s(function(){return!!l[e]()||n[e]()!=n}),p=o[e]=i?a(d):l[e];r&&(o[r]=p),t(t.P+t.F*i,"String",o)},d=c.trim=function(e,a){return e=String(o(e)),1&a&&(e=e.replace(p,"")),2&a&&(e=e.replace(u,"")),e};e.exports=c},b9e9:function(e,a,r){r("7445"),e.exports=r("584a").parseInt},e692:function(e,a){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e814:function(e,a,r){e.exports=r("b9e9")},fe50:function(e,a,r){"use strict";r.r(a);var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("a-layout-content",{staticStyle:{margin:"0 16px"}},[r("a-breadcrumb",{staticStyle:{margin:"16px 0"}},[r("a-breadcrumb-item",[e._v("套餐管理")]),r("a-breadcrumb-item",[e._v("添加套餐")])],1),r("div",{class:"content-div"},[r("a-form",{style:{width:"800px",margin:"auto auto"},attrs:{form:e.form},on:{submit:e.handleSubmit}},[r("a-form-item",{attrs:{label:"套餐名称","label-col":{span:5},"wrapper-col":{span:12}}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入套餐名称!"}]}],expression:"[\n            'name',\n            {rules: [{ required: true, message: '请输入套餐名称!' }]}\n          ]"}],attrs:{placeholder:"请输入套餐名称"}})],1),r("a-form-item",{attrs:{label:"套餐类型","label-col":{span:5},"wrapper-col":{span:12}}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{rules:[{required:!0,message:"请选择套餐类型!"}]}],expression:"[\n              'type',\n              {rules: [{ required: true, message: '请选择套餐类型!' }]}\n          ]"}],attrs:{placeholder:"请选择套餐类型"},on:{change:e.productChanged}},[r("a-select-option",{attrs:{value:1}},[e._v("包月")]),r("a-select-option",{attrs:{value:2}},[e._v("计时")]),r("a-select-option",{attrs:{value:3}},[e._v("流量")])],1)],1),r("a-form-item",{attrs:{label:"是否绑定MAC","label-col":{span:5},"wrapper-col":{span:12}}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["shouldBindMacAddr",{rules:[{required:!0,message:"请选择是否绑定MAC"}]}],expression:"[\n        'shouldBindMacAddr',\n        {rules: [{ required: true, message: '请选择是否绑定MAC' }]}\n      ]"}],attrs:{placeholder:"是否绑定MAC"}},[r("a-select-option",{attrs:{value:1}},[e._v("是")]),r("a-select-option",{attrs:{value:2}},[e._v("否")])],1)],1),r("a-form-item",{attrs:{label:"是否绑定VLAN","label-col":{span:5},"wrapper-col":{span:12}}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["shouldBindVlan",{rules:[{required:!0,message:"请选择是否绑定VLAN"}]}],expression:"[\n        'shouldBindVlan',\n        {rules: [{ required: true, message: '请选择是否绑定VLAN' }]}\n      ]"}],attrs:{placeholder:"是否绑定VLAN"}},[r("a-select-option",{attrs:{value:1}},[e._v("是")]),r("a-select-option",{attrs:{value:2}},[e._v("否")])],1)],1),r("a-form-item",{attrs:{label:"并发数","label-col":{span:5},"wrapper-col":{span:12}}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["concurrentCount",{rules:[{message:"并发数!必须是整数",required:!0,validator:e.validInteger}]}],expression:"[\n        'concurrentCount',\n        {rules: [{message: '并发数!必须是整数', required: true, validator: validInteger}]}\n      ]"}],attrs:{placeholder:"并发数"}})],1),e.isDurationType?r("a-form-item",{attrs:{label:"套餐时长(小时)","label-col":{span:5},"wrapper-col":{span:12}}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["productDuration",{rules:[{message:"套餐时长!必须是整数",required:!0,validator:e.validInteger}]}],expression:"[\n        'productDuration',\n        {rules: [{message: '套餐时长!必须是整数', required: true, validator: validInteger}]}\n      ]"}],attrs:{placeholder:"套餐时长"}})],1):e._e(),e.isMonthType?r("a-form-item",{attrs:{label:"套餐包月数","label-col":{span:5},"wrapper-col":{span:12}}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["serviceMonth",{rules:[{message:"套餐包月数!必须是整数",required:!0,validator:e.validInteger}]}],expression:"[\n        'serviceMonth',\n        {rules: [{message: '套餐包月数!必须是整数', required: true, validator: validInteger}]}\n      ]"}],attrs:{placeholder:"套餐包月数"}})],1):e._e(),e.isFlowType?r("a-form-item",{attrs:{label:"套餐流量(M)","label-col":{span:5},"wrapper-col":{span:12}}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["productFlow",{rules:[{message:"套餐流量!必须是整数",required:!0,validator:e.validFloat}]}],expression:"[\n        'productFlow',\n        {rules: [{message: '套餐流量!必须是整数', required: true, validator: validFloat}]}\n      ]"}],attrs:{placeholder:"套餐流量"}})],1):e._e(),this.isFlowType?r("a-form-item",{attrs:{"label-col":{span:5},"wrapper-col":{span:12}}},[r("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n          流量清理周期\n          "),r("a-tooltip",{attrs:{title:"默认表示无限时长:2099年,固定表示在用户开户时选择的到期时间，开户时不选到期时间则默认"}},[r("a-icon",{attrs:{type:"question-circle-o"}})],1)],1),r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["flowClearCycle",{initialValue:1},{rules:[{required:this.isFlowType,message:"流量清零周期"}]}],expression:"[\n        'flowClearCycle', {initialValue:1},\n        {rules: [{ required: this.isFlowType, message: '流量清零周期' }]}\n      ]"}],attrs:{placeholder:"流量清零周期"}},[r("a-select-option",{attrs:{value:1}},[e._v("默认")]),r("a-select-option",{attrs:{value:2}},[e._v("日")]),r("a-select-option",{attrs:{value:3}},[e._v("月")]),r("a-select-option",{attrs:{value:4}},[e._v("固定")])],1)],1):e._e(),r("a-form-item",{attrs:{label:"价格","label-col":{span:5},"wrapper-col":{span:12}}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["price",{rules:[{message:"价格(单位:元)至多两位小数",required:!0,validator:e.validYuan}]}],expression:"[\n        'price',\n        {rules: [{message: '价格(单位:元)至多两位小数', required: true, validator: validYuan}]}\n      ]"}],attrs:{placeholder:"价格(单位:元)"}})],1),r("a-form-item",{attrs:{label:"上行限速(Mbps)","label-col":{span:5},"wrapper-col":{span:12}}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["upStreamLimit",{rules:[{message:"上行限速(Mbps),必须是数字",required:!0,validator:e.validFloat}]}],expression:"[\n        'upStreamLimit',\n        {rules: [{message: '上行限速(Mbps),必须是数字', required: true, validator: validFloat}]}\n      ]"}],attrs:{placeholder:"上行限速(Mbps)"}})],1),r("a-form-item",{attrs:{label:"下行限速(Mbps)","label-col":{span:5},"wrapper-col":{span:12}}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["downStreamLimit",{rules:[{message:"下行限速(Mbps)必须是数字",required:!0,validator:e.validFloat}]}],expression:"[\n        'downStreamLimit',\n        {rules: [{message: '下行限速(Mbps)必须是数字', required: true, validator: validFloat}]}\n      ]"}],attrs:{placeholder:"下行限速(Mbps)"}})],1),r("a-form-item",{attrs:{label:"用户域","label-col":{span:5},"wrapper-col":{span:12}}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["domainName"],expression:"[\n              'domainName'\n          ]"}],attrs:{placeholder:"选填,用户域"}})],1),r("a-form-item",{attrs:{label:"描述","label-col":{span:5},"wrapper-col":{span:12}}},[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["description"],expression:"[\n        'description'\n      ]"}],attrs:{row:3,placeholder:"选填，描述"}})],1),r("a-form-item",{attrs:{"wrapper-col":{span:12,offset:5}}},[r("a-button",{staticStyle:{width:"100%"},attrs:{type:"primary","html-type":"submit"}},[e._v("提交")])],1)],1)],1)],1)},o=[],s=r("e814"),l=r.n(s),i=/^\d+$/,n=/^\d+\.?\d*$/,p=/^\d+\.?\d{0,2}$/,u={data:function(){return{isMonthType:!1,isDurationType:!1,isFlowType:!1,formLayout:"horizontal",form:this.$form.createForm(this)}},methods:{validInteger:function(e,a,r){i.test(a)?r():r("必须是整数")},validFloat:function(e,a,r){n.test(a)?r():r("必须是数字")},validYuan:function(e,a,r){p.test(a)?r():r("至多两位小数")},productChanged:function(e){1==e?(this.isMonthType=!0,this.isDurationType=!1,this.isFlowType=!1):2==e?(this.isMonthType=!1,this.isDurationType=!0,this.isFlowType=!1):3==e&&(this.isMonthType=!1,this.isDurationType=!1,this.isFlowType=!0)},handleSubmit:function(e){var a=this;e.preventDefault(),this.form.validateFields(function(e,r){r.concurrentCount=l()(r.concurrentCount),r.productDuration=60*l()(r.productDuration),r.serviceMonth=l()(r.serviceMonth),r.productFlow=1024*l()(r.productFlow),r.price=100*l()(r.price),r.upStreamLimit=l()(r.upStreamLimit),r.downStreamLimit=l()(r.downStreamLimit),e||a.axios.post(a.CONFIG.apiUrl+"/product/add",r).then(function(e){alert(e.data.message),1!=e.data.code&&a.$router.push("/product")}).catch(function(e){console.log(e)})})}}},c=u,d=r("2877"),m=Object(d["a"])(c,t,o,!1,null,null,null);a["default"]=m.exports}}]);
//# sourceMappingURL=chunk-5598f730.3ed58ec6.js.map