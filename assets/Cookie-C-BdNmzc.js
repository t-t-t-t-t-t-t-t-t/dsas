import{d as i,a as n,c as l,w as p,v as r,e as d,b as a,i as f,h as u,_}from"./index-yJSF2u44.js";import{a as m}from"./axios-Bo0ATomq.js";const k={class:"cookie"},h=i({__name:"Cookie",setup(v){let e=n();function s(){m({method:"post",url:"https://www.mapleleaf.space/api/cookie",data:{cookie:e}}).then(o=>{alert(e.value),alert("succeed")}).catch(o=>{console.log(o),alert(o)})}return(c,o)=>(u(),l("div",k,[p(a("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>f(e)?e.value=t:e=t),type:"text"},null,512),[[r,d(e)]]),a("button",{onClick:s})]))}}),C=_(h,[["__scopeId","data-v-cb8137fb"]]);export{C as default};
