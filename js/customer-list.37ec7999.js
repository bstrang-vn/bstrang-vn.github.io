(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["customer-list"],{"222b":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));var r=n("1da1"),o=(n("96cf"),n("159b"),n("e71f")),c=n("7a23"),a=Object(c["L"])({}),u=Object(o["h"])(),b=Object(o["l"])(Object(o["c"])(u,"CUSTOMER"));Object(o["j"])(b,(function(e){e.docChanges().forEach((function(e){"added"===e.type||"modified"===e.type?a[e.doc.id]=e.doc.data():"removed"===e.type&&delete a[e.doc.id]}))}));var s=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,c,a,b,s,l,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["a"])(Object(o["c"])(u,"CUSTOMER"),{customerName:t.customerName,phone:t.phone,address:t.address,debt:t.debt||0,createdAt:(new Date).getTime(),updatedAt:(new Date).getTime(),removedAt:0});case 2:return n=e.sent,e.next=5,Object(o["f"])(n);case 5:return r=e.sent,c=r.id,a=r.data(),b=a.customerName,s=a.phone,l=a.address,d=a.debt,e.abrupt("return",{customerID:c,customerName:b,phone:s,address:l,debt:d});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},"28b9":function(e,t,n){"use strict";n("8588")},"3f5a":function(e,t,n){"use strict";var r=n("7a23");function o(e,t,n,o,c,a){var u=Object(r["Q"])("a-input"),b=Object(r["Q"])("a-form-item"),s=Object(r["Q"])("a-form"),l=Object(r["Q"])("a-modal");return Object(r["H"])(),Object(r["j"])(l,{visible:o.visibleModal,"onUpdate:visible":t[3]||(t[3]=function(e){return o.visibleModal=e}),width:"900px",title:"Create New Customer","confirm-loading":o.confirmModalLoading,afterClose:a.refreshModal,onOk:a.handleCreateCustomerOk},{default:Object(r["bb"])((function(){return[Object(r["o"])(s,{model:o.newCustomer,"label-col":{span:4},"wrapper-col":{span:20}},{default:Object(r["bb"])((function(){return[Object(r["o"])(b,{label:"Name"},{default:Object(r["bb"])((function(){return[Object(r["o"])(u,{value:o.newCustomer.customerName,"onUpdate:value":t[0]||(t[0]=function(e){return o.newCustomer.customerName=e})},null,8,["value"])]})),_:1}),Object(r["o"])(b,{label:"Phone"},{default:Object(r["bb"])((function(){return[Object(r["o"])(u,{value:o.newCustomer.phone,"onUpdate:value":t[1]||(t[1]=function(e){return o.newCustomer.phone=e})},null,8,["value"])]})),_:1}),Object(r["o"])(b,{label:"Address"},{default:Object(r["bb"])((function(){return[Object(r["o"])(u,{value:o.newCustomer.address,"onUpdate:value":t[2]||(t[2]=function(e){return o.newCustomer.address=e})},null,8,["value"])]})),_:1})]})),_:1},8,["model"])]})),_:1},8,["visible","confirm-loading","afterClose","onOk"])}var c=n("1da1"),a=(n("96cf"),n("222b")),u={setup:function(){return{visibleModal:Object(r["M"])(!1),confirmModalLoading:Object(r["M"])(!1),newCustomer:Object(r["L"])({customerName:"",phone:"",address:""})}},methods:{openModal:function(){this.visibleModal=!0},refreshModal:function(){this.newCustomer.customerName="",this.newCustomer.phone="",this.newCustomer.address="",this.confirmModalLoading=!1},handleCreateCustomerOk:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.confirmModalLoading=!0,t.next=3,Object(a["a"])({customerName:e.newCustomer.customerName,phone:e.newCustomer.phone,address:e.newCustomer.address});case 3:n=t.sent,e.$emit("newCustomerCreated",n),e.visibleModal=!1;case 6:case"end":return t.stop()}}),t)})))()}}},b=n("6b0d"),s=n.n(b);const l=s()(u,[["render",o]]);t["a"]=l},8588:function(e,t,n){},f31f:function(e,t,n){"use strict";n.r(t);n("b64b");var r=n("7a23"),o=function(e){return Object(r["K"])("data-v-04d8371b"),e=e(),Object(r["I"])(),e},c={class:"add-customer"},a=Object(r["n"])(" Add Customer "),u={class:"table"},b=o((function(){return Object(r["m"])("thead",null,[Object(r["m"])("th",null,"#"),Object(r["m"])("th",null,"Name"),Object(r["m"])("th",null,"Phone"),Object(r["m"])("th",null,"Adress"),Object(r["m"])("th",null,"Debt")],-1)})),s={key:0},l=o((function(){return Object(r["m"])("td",{colspan:"5",style:{"text-align":"center"}},"No data available in table",-1)})),d=[l],i={style:{display:"flex","justify-content":"space-between"}},m=o((function(){return Object(r["m"])("p",null,"How much to pay ?",-1)})),O=Object(r["n"])("Payup");function j(e,t,n,o,l,j){var f=Object(r["Q"])("PlusOutlined"),p=Object(r["Q"])("a-button"),h=Object(r["Q"])("ModalCreateCustomer"),C=Object(r["Q"])("a-input"),v=Object(r["Q"])("a-popconfirm");return Object(r["H"])(),Object(r["l"])(r["b"],null,[Object(r["m"])("div",c,[Object(r["o"])(p,{type:"primary",onClick:j.openModalCreateCustomer},{icon:Object(r["bb"])((function(){return[Object(r["o"])(f)]})),default:Object(r["bb"])((function(){return[a]})),_:1},8,["onClick"])]),Object(r["o"])(h,{ref:"modalCreateCustomer"},null,512),Object(r["m"])("table",u,[b,Object(r["m"])("tbody",null,[0===Object.keys(o.customerList).length?(Object(r["H"])(),Object(r["l"])("tr",s,d)):Object(r["k"])("",!0),(Object(r["H"])(!0),Object(r["l"])(r["b"],null,Object(r["O"])(o.customerList,(function(e,t,n){return Object(r["H"])(),Object(r["l"])("tr",{key:n},[Object(r["m"])("td",null,Object(r["U"])(n+1),1),Object(r["m"])("td",null,Object(r["U"])(e.customerName),1),Object(r["m"])("td",null,Object(r["U"])(e.phone),1),Object(r["m"])("td",null,Object(r["U"])(e.address),1),Object(r["m"])("td",i,[Object(r["o"])(v,{"ok-text":"Yes","cancel-text":"No"},{title:Object(r["bb"])((function(){return[m,Object(r["o"])(C,{placeholder:"Basic usage"})]})),default:Object(r["bb"])((function(){return[Object(r["o"])(p,null,{default:Object(r["bb"])((function(){return[O]})),_:1})]})),_:1}),Object(r["n"])(" "+Object(r["U"])(e.debt),1)])])})),128))])])],64)}var f=n("47ce"),p=n("222b"),h=n("3f5a"),C={components:{ModalCreateCustomer:h["a"],PlusOutlined:f["a"]},setup:function(){return{customerList:p["b"]}},methods:{openModalCreateCustomer:function(){this.$refs.modalCreateCustomer.openModal()}}},v=(n("28b9"),n("6b0d")),w=n.n(v);const M=w()(C,[["render",j],["__scopeId","data-v-04d8371b"]]);t["default"]=M}}]);
//# sourceMappingURL=customer-list.37ec7999.js.map