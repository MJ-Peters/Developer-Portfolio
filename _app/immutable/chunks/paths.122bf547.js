import{n as f,s as p}from"./scheduler.7a274a43.js";const t=[];function d(o,a=f){let n;const i=new Set;function r(e){if(p(o,e)&&(o=e,n)){const c=!t.length;for(const s of i)s[1](),t.push(s,o);if(c){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function b(e){r(e(o))}function _(e,c=f){const s=[e,c];return i.add(s),i.size===1&&(n=a(r,b)||f),e(o),()=>{i.delete(s),i.size===0&&n&&(n(),n=null)}}return{set:r,update:b,subscribe:_}}var u;const h=((u=globalThis.__sveltekit_8nf4c7)==null?void 0:u.base)??"/Developer-Portfolio";var l;const q=((l=globalThis.__sveltekit_8nf4c7)==null?void 0:l.assets)??h;export{q as a,h as b,d as w};
