import{n as b,s as h}from"./scheduler.7a274a43.js";const t=[];function d(o,a=b){let i;const n=new Set;function r(e){if(h(o,e)&&(o=e,i)){const u=!t.length;for(const s of n)s[1](),t.push(s,o);if(u){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function c(e){r(e(o))}function _(e,u=b){const s=[e,u];return n.add(s),n.size===1&&(i=a(r,c)||b),e(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:c,subscribe:_}}var f;const p=((f=globalThis.__sveltekit_3h8euu)==null?void 0:f.base)??"/Developer-Portfolio";var l;const q=((l=globalThis.__sveltekit_3h8euu)==null?void 0:l.assets)??p;export{q as a,p as b,d as w};
