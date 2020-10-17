(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["slider-api-vue"],{e498:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"w-divider my12"}),s("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),s("alert",{staticClass:"mb6",attrs:{info:""}},[e._v("The props will soon be more detailed.")]),s("api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),s("api",{attrs:{items:e.slots,title:"Slots"}}),s("api",{attrs:{items:e.events,title:"Events"}})],1)},o=[],r=(s("13d5"),s("1352")),l={value:"",color:'Applies a foreground color to the slider. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a background color to the slider\'s track. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',stepLabels:"",thumbLabel:"",thumbLabelClass:"Applies a custom CSS class to the slider's thumb label.",trackClass:"Applies a custom CSS class to the slider's track.",rangeClass:"Applies a custom CSS class to the slider's highlighted range.",min:"",max:"",step:"",labelLeft:"",labelRight:"",name:"",disabled:"",readonly:"",required:"",validators:""},i={},n={input:"Emitted each time the state of the component changes. It updates the v-model value in Vue 2.x only.<br>An array of booleans is passed as a parameter (representing the expanded state of every accordion item).","update:modelValue":"Emitted each time the state of the component changes (when an item is expanded or collapsed). It updates the v-model value in Vue 3 only.<br>An array of booleans is passed as a parameter (representing the expanded state of every accordion item).",focus:"Emitted on each item title focus. The focused item is returned as a parameter."},c={data:function(){return{propsDescs:l,slots:i}},computed:{props:function(){return r["a"].props},events:function(){return r["a"].emits.reduce((function(e,t){return(e[t]={description:n[t]||""})&&e}),{})}}},p=c,d=s("2877"),u=Object(d["a"])(p,a,o,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=slider-api-vue.e085ba18.js.map