import{d as r,ad as l,J as u,O as n,a6 as p,k as _}from"./entry.ac452e2a.js";import{u as d,f as m,_ as f}from"./MDCSlot.0382d8d6.js";const y=()=>({unwrap:d,flatUnwrap:m}),h={primary:"heroicons-outline:check",info:"heroicons-outline:information-circle",success:"heroicons-outline:check-circle",warning:"heroicons-outline:exclamation",danger:"heroicons-outline:exclamation-circle"},g=r({props:{icon:{type:String,default:null},type:{type:String,default:"primary",validator:e=>["primary","info","success","warning","danger"].includes(e)}},setup(e){const o=l(),{flatUnwrap:a,unwrap:s}=y(),c=u(()=>e.icon||h[e.type]);return()=>{const i=a((o.default&&o.default())??[],["ul"]).map(t=>s(t,["li"]));return n("ul",i.map(t=>n("li",[n("span",{class:`list-icon ${e.type}`},n(p,{name:c.value,class:"icon"})),n("span",n(f,{use:()=>t}))])))}}});const v=_(g,[["__scopeId","data-v-c3518dcd"]]);export{v as default};
