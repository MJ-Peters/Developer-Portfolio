import{w as me,b as ge}from"./paths.666a7647.js";const oe="@riadh-adrani-theme",pe=e=>{localStorage.setItem(oe,JSON.stringify(e))},ue=me(!1),re=e=>ue.update(b=>{var p;const $=typeof e=="boolean"?e:!b;return pe($),(p=document.querySelector(":root"))==null||p.setAttribute("data-theme",$?"dark":"light"),$}),De=()=>{const e=localStorage.getItem(oe);e?re(JSON.parse(e)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&re(!0)},se=e=>`${ge}/logos/${e}`,s=(e,b)=>b?{dark:se(b),light:se(e)}:se(e),A={AWS:s("aws.svg"),Bootstrap:s("bootstrap.svg"),C:s("c.svg"),Cpp:s("cpp.svg"),Celery:s("celery.svg"),Django:s("django.svg"),FastApi:s("fastapi"),Flask:s("flask.svg"),Go:s("go.svg"),Kafka:s("kafka.svg"),Neo4j:s("neo4j.svg"),Nginx:s("nginx.svg"),Numpy:s("numpy.svg"),Pandas:s("pandas.svg"),RabbitMQ:s("rabbitmq.svg"),Rust:s("rust.svg","rust-dark.png"),Scrapy:s("scrapy.png"),Selenium:s("selenium.svg"),Docker:s("docker.svg"),Kubernetes:s("kubernetees.svg"),Csharp:s("csharp.svg"),Xamarin:s("xamarin.svg"),TypeScript:s("ts.png"),VueJs:s("vue.png"),ReactJs:s("react.svg"),Dart:s("dart.png"),Kotlin:s("kotlin.png"),Python:s("python.png"),NodeJs:s("node.png"),Deno:s("deno.png","deno-dark.png"),Svelte:s("svelte.png"),ExpressJs:s("express.png"),JavaScript:s("js.png"),Fastify:s("fastify.svg","fastify-dark.png"),NestJs:s("nest.svg"),Quasar:s("quasar.svg"),SolidJs:s("solid.svg"),Electron:s("electron.png"),Flutter:s("flutter.svg"),Java:s("java.png"),AdonisJs:s("adonis.png"),Android:s("android.png"),Angular:s("angular.png"),PostgreSQL:s("postgres.png"),Firebase:s("firebase.png"),Sass:s("sass.png"),Unknown:s("no-img.svg"),MongoDB:s("mongodb.svg"),Redis:s("redis.svg"),Tailwind:s("tailwind.svg"),HTML:s("html.svg"),Premiere:s("premiere.svg"),Photoshop:s("photoshop.svg"),CSS:s("css.svg"),AfterEffects:s("after-effects.svg"),Illustrator:s("illustrator.svg"),Nuxt:s("nuxt.png"),Vite:s("vite.png"),Vitest:s("vitest.svg"),Jest:s("jest.png"),Unocss:s("unocss.svg"),Ruvy:s("ruvy.svg"),Postcss:s("postcss.svg"),MsSQLServer:s("MS-SQL-Server.svg"),Azure:s("Azure.svg"),EY:s("EY.svg"),UoB:s("UoB.png"),UoS:s("UoS.png"),StravaClone:s("StravaCloneLogo.png"),DPay:s("DPayLogo.png")};let ce;ue.subscribe(e=>ce=e);const we=e=>typeof e=="string"?e:ce?e.dark:e.light,fe=[{degree:"MSc Financial Technology with Data Science",description:"",location:"Bristol, UK",logo:A.UoB,name:"Master's Degree",organization:"University of Bristol",period:{from:new Date(2022,8),to:new Date(2023,8)},shortDescription:"",slug:"University-of-Bristol",subjects:["Financial Technology","Large Scale Data Engineering","Sofware Development, Programming, and Algorithms","Data Analytics"]},{degree:"BEng Civil Engineering with Architecture",description:"Bachelor's Degree",location:"Southampton, UK",logo:A.UoS,name:"",organization:"University of Southampton",period:{from:new Date(2018,8),to:new Date(2022,8)},shortDescription:"",slug:"University-of-Southampton",subjects:["Structural Design","Finite Element Analysis","Hydraulic Engineering","Geotechnical Engineering"]}],B=e=>e,le=[B({slug:"python",color:"blue",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:A.Python,name:"Python"}),B({slug:"ms-sql-server",color:"red",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:A.MsSQLServer,name:"Microsoft SQL Server"}),B({slug:"azure",color:"blue",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:A.Azure,name:"Microsoft Azure"}),B({slug:"aws",color:"orange",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:A.AWS,name:"Amazon Web Services"}),B({slug:"js",color:"yellow",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:A.JavaScript,name:"JavaScript"}),B({slug:"css",color:"blue",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:A.CSS,name:"CSS"}),B({slug:"html",color:"orange",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:A.HTML,name:"HTML"})],ee=(...e)=>le.filter(b=>e.includes(b.slug));var T=(e=>(e.GitHub="github",e.StackOverflow="stackoverflow",e.Twitter="twitter",e.Linkedin="linkedin",e.Email="email",e.Facebook="facebook",e.Youtube="youtube",e))(T||{}),de=(e=>(e.FullTime="Full-time",e.PartTime="Part-time",e.SelfEmployed="Self-employed",e.Freelance="Freelance",e.Contract="Contract",e.Internship="Internship",e))(de||{});const ve=[{slug:"data-analyst",company:"EY",description:"",contract:de.FullTime,type:"Data Science and Data Analytics",location:"London, UK",period:{from:new Date(2023,8)},skills:ee("python","ms-sql-server","azure"),name:"Forensic Data Analyst - Associate",color:"yellow",links:[],logo:A.EY,shortDescription:""}],ye=[{slug:"StravaClone",color:"purple",description:`I embarked on this project at the onset of the new year with a dual purpose in mind. Primarily, I aimed to elevate my software development proficiency beyond rudimentary text-based applications in Python. The secondary motivation behind this endeavour is rooted in my decision to craft an activity tracker, a deliberate choice among the myriad of applications one could develop. 

 My inspiration for choosing an activity tracker stems from my current pursuit of training for an Ironman 70.3 triathlon. The diverse range of activities involved in my training regimen has captivated my interest. Harnessing the wealth of activity data generated during these rigorous sessions, I am utilizing it as a robust testing ground to refine and advance the capabilities of this application. Through this ongoing project, I am not only honing my coding skills but also creating a tool that resonates with my personal journey and passion for fitness.`,shortDescription:"A work in progress activity tracker.",links:[{to:"",label:"GitHub"}],logo:A.StravaClone,name:"Outdoor Activity Tracker",period:{from:new Date(2023,0)},skills:ee("python"),type:"Full-Stack App Development"},{slug:"DPay",color:"blue",description:"",shortDescription:"A decentralised payments platform.",links:[{to:"https://github.com/rw19842/DPay-proof-of-concept",label:"GitHub"}],logo:A.DPay,name:"DPay",period:{from:new Date(2023,3),to:new Date(2023,4)},skills:ee("HTML","CSS","JavaScript"),type:"Front-End App Development"},{slug:"AlgoTrading",color:"blue",description:"Explore my in-depth investigation into PRDE trader agents within the Bristol Stock Exchange (BSE), an intricately crafted minimal limit-order-book-based financial exchange implemented in Python. The primary goal of this project is to enhance the capabilities of trader agents by introducing the PRDE agent, an extension of PRZI and PRSH, incorporating the powerful differential evolution (DE) genetic algorithm for optimizing stochastic hill-climbing. I conducted homogeneous experiments on BSE to assess the PRDE agent's performance, and employed statistical testing, focusing on key parameters: population size (k) and differential weight (F). I identified that F is a significant factor influencing performance, while k exhibited less impact. I then implemented my PRADE trader agent, that proactively adjusts the value of F to maximise profitability across a diverse array of market conditions.",shortDescription:"Investigating the performance of adaptive trading agents in a simulated financial exchange.",links:[{to:"https://github.com/MJ-Peters/PRDE-Trader-Evaluation-and-Improvement",label:"GitHub"}],logo:A.Python,name:"PRADE Trader Agents",period:{from:new Date(2022,10),to:new Date(2023,1)},skills:ee("python"),type:"Simulation and Statistical Testing"}];var he=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ne={},be={get exports(){return ne},set exports(e){ne=e}};(function(e,b){(function($,p){e.exports=p()})(he,function(){var $=1e3,p=6e4,S=36e5,D="millisecond",w="second",Y="minute",q="hour",P="day",j="week",C="month",U="quarter",E="year",H="date",J="Invalid Date",Q=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,O=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ie={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var n=["th","st","nd","rd"],t=r%100;return"["+r+(n[(t-20)%10]||n[t]||n[0])+"]"}},F=function(r,n,t){var o=String(r);return!o||o.length>=n?r:""+Array(n+1-o.length).join(t)+r},Z={s:F,z:function(r){var n=-r.utcOffset(),t=Math.abs(n),o=Math.floor(t/60),i=t%60;return(n<=0?"+":"-")+F(o,2,"0")+":"+F(i,2,"0")},m:function r(n,t){if(n.date()<t.date())return-r(t,n);var o=12*(t.year()-n.year())+(t.month()-n.month()),i=n.clone().add(o,C),l=t-i<0,d=n.clone().add(o+(l?-1:1),C);return+(-(o+(t-i)/(l?i-d:d-i))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M:C,y:E,w:j,d:P,D:H,h:q,m:Y,s:w,ms:D,Q:U}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return r===void 0}},_="en",m={};m[_]=ie;var u="$isDayjsObject",a=function(r){return r instanceof y||!(!r||!r[u])},g=function r(n,t,o){var i;if(!n)return _;if(typeof n=="string"){var l=n.toLowerCase();m[l]&&(i=l),t&&(m[l]=t,i=l);var d=n.split("-");if(!i&&d.length>1)return r(d[0])}else{var f=n.name;m[f]=n,i=f}return!o&&i&&(_=i),i||!o&&_},h=function(r,n){if(a(r))return r.clone();var t=typeof n=="object"?n:{};return t.date=r,t.args=arguments,new y(t)},c=Z;c.l=g,c.i=a,c.w=function(r,n){return h(r,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var y=function(){function r(t){this.$L=g(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[u]=!0}var n=r.prototype;return n.parse=function(t){this.$d=function(o){var i=o.date,l=o.utc;if(i===null)return new Date(NaN);if(c.u(i))return new Date;if(i instanceof Date)return new Date(i);if(typeof i=="string"&&!/Z$/i.test(i)){var d=i.match(Q);if(d){var f=d[2]-1||0,v=(d[7]||"0").substring(0,3);return l?new Date(Date.UTC(d[1],f,d[3]||1,d[4]||0,d[5]||0,d[6]||0,v)):new Date(d[1],f,d[3]||1,d[4]||0,d[5]||0,d[6]||0,v)}}return new Date(i)}(t),this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return c},n.isValid=function(){return this.$d.toString()!==J},n.isSame=function(t,o){var i=h(t);return this.startOf(o)<=i&&i<=this.endOf(o)},n.isAfter=function(t,o){return h(t)<this.startOf(o)},n.isBefore=function(t,o){return this.endOf(o)<h(t)},n.$g=function(t,o,i){return c.u(t)?this[o]:this.set(i,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,o){var i=this,l=!!c.u(o)||o,d=c.p(t),f=function(V,L){var N=c.w(i.$u?Date.UTC(i.$y,L,V):new Date(i.$y,L,V),i);return l?N:N.endOf(P)},v=function(V,L){return c.w(i.toDate()[V].apply(i.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(L)),i)},M=this.$W,z=this.$M,x=this.$D,W="set"+(this.$u?"UTC":"");switch(d){case E:return l?f(1,0):f(31,11);case C:return l?f(1,z):f(0,z+1);case j:var I=this.$locale().weekStart||0,G=(M<I?M+7:M)-I;return f(l?x-G:x+(6-G),z);case P:case H:return v(W+"Hours",0);case q:return v(W+"Minutes",1);case Y:return v(W+"Seconds",2);case w:return v(W+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,o){var i,l=c.p(t),d="set"+(this.$u?"UTC":""),f=(i={},i[P]=d+"Date",i[H]=d+"Date",i[C]=d+"Month",i[E]=d+"FullYear",i[q]=d+"Hours",i[Y]=d+"Minutes",i[w]=d+"Seconds",i[D]=d+"Milliseconds",i)[l],v=l===P?this.$D+(o-this.$W):o;if(l===C||l===E){var M=this.clone().set(H,1);M.$d[f](v),M.init(),this.$d=M.set(H,Math.min(this.$D,M.daysInMonth())).$d}else f&&this.$d[f](v);return this.init(),this},n.set=function(t,o){return this.clone().$set(t,o)},n.get=function(t){return this[c.p(t)]()},n.add=function(t,o){var i,l=this;t=Number(t);var d=c.p(o),f=function(z){var x=h(l);return c.w(x.date(x.date()+Math.round(z*t)),l)};if(d===C)return this.set(C,this.$M+t);if(d===E)return this.set(E,this.$y+t);if(d===P)return f(1);if(d===j)return f(7);var v=(i={},i[Y]=p,i[q]=S,i[w]=$,i)[d]||1,M=this.$d.getTime()+t*v;return c.w(M,this)},n.subtract=function(t,o){return this.add(-1*t,o)},n.format=function(t){var o=this,i=this.$locale();if(!this.isValid())return i.invalidDate||J;var l=t||"YYYY-MM-DDTHH:mm:ssZ",d=c.z(this),f=this.$H,v=this.$m,M=this.$M,z=i.weekdays,x=i.months,W=i.meridiem,I=function(L,N,K,X){return L&&(L[N]||L(o,l))||K[N].slice(0,X)},G=function(L){return c.s(f%12||12,L,"0")},V=W||function(L,N,K){var X=L<12?"AM":"PM";return K?X.toLowerCase():X};return l.replace(O,function(L,N){return N||function(K){switch(K){case"YY":return String(o.$y).slice(-2);case"YYYY":return c.s(o.$y,4,"0");case"M":return M+1;case"MM":return c.s(M+1,2,"0");case"MMM":return I(i.monthsShort,M,x,3);case"MMMM":return I(x,M);case"D":return o.$D;case"DD":return c.s(o.$D,2,"0");case"d":return String(o.$W);case"dd":return I(i.weekdaysMin,o.$W,z,2);case"ddd":return I(i.weekdaysShort,o.$W,z,3);case"dddd":return z[o.$W];case"H":return String(f);case"HH":return c.s(f,2,"0");case"h":return G(1);case"hh":return G(2);case"a":return V(f,v,!0);case"A":return V(f,v,!1);case"m":return String(v);case"mm":return c.s(v,2,"0");case"s":return String(o.$s);case"ss":return c.s(o.$s,2,"0");case"SSS":return c.s(o.$ms,3,"0");case"Z":return d}return null}(L)||d.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,o,i){var l,d=this,f=c.p(o),v=h(t),M=(v.utcOffset()-this.utcOffset())*p,z=this-v,x=function(){return c.m(d,v)};switch(f){case E:l=x()/12;break;case C:l=x();break;case U:l=x()/3;break;case j:l=(z-M)/6048e5;break;case P:l=(z-M)/864e5;break;case q:l=z/S;break;case Y:l=z/p;break;case w:l=z/$;break;default:l=z}return i?l:c.a(l)},n.daysInMonth=function(){return this.endOf(C).$D},n.$locale=function(){return m[this.$L]},n.locale=function(t,o){if(!t)return this.$L;var i=this.clone(),l=g(t,o,!0);return l&&(i.$L=l),i},n.clone=function(){return c.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},r}(),k=y.prototype;return h.prototype=k,[["$ms",D],["$s",w],["$m",Y],["$H",q],["$W",P],["$M",C],["$y",E],["$D",H]].forEach(function(r){k[r[1]]=function(n){return this.$g(n,r[0],r[1])}}),h.extend=function(r,n){return r.$i||(r(n,y,h),r.$i=!0),h},h.locale=g,h.isDayjs=a,h.unix=function(r){return h(1e3*r)},h.en=m[_],h.Ls=m,h.p={},h})})(be);const te=ne;var ae={},Me={get exports(){return ae},set exports(e){ae=e}};(function(e,b){(function($,p){e.exports=p()})(he,function(){var $,p,S=1e3,D=6e4,w=36e5,Y=864e5,q=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,P=31536e6,j=2628e6,C=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,U={years:P,months:j,days:Y,hours:w,minutes:D,seconds:S,milliseconds:1,weeks:6048e5},E=function(m){return m instanceof Z},H=function(m,u,a){return new Z(m,a,u.$l)},J=function(m){return p.p(m)+"s"},Q=function(m){return m<0},O=function(m){return Q(m)?Math.ceil(m):Math.floor(m)},ie=function(m){return Math.abs(m)},F=function(m,u){return m?Q(m)?{negative:!0,format:""+ie(m)+u}:{negative:!1,format:""+m+u}:{negative:!1,format:""}},Z=function(){function m(a,g,h){var c=this;if(this.$d={},this.$l=h,a===void 0&&(this.$ms=0,this.parseFromMilliseconds()),g)return H(a*U[J(g)],this);if(typeof a=="number")return this.$ms=a,this.parseFromMilliseconds(),this;if(typeof a=="object")return Object.keys(a).forEach(function(r){c.$d[J(r)]=a[r]}),this.calMilliseconds(),this;if(typeof a=="string"){var y=a.match(C);if(y){var k=y.slice(2).map(function(r){return r!=null?Number(r):0});return this.$d.years=k[0],this.$d.months=k[1],this.$d.weeks=k[2],this.$d.days=k[3],this.$d.hours=k[4],this.$d.minutes=k[5],this.$d.seconds=k[6],this.calMilliseconds(),this}}return this}var u=m.prototype;return u.calMilliseconds=function(){var a=this;this.$ms=Object.keys(this.$d).reduce(function(g,h){return g+(a.$d[h]||0)*U[h]},0)},u.parseFromMilliseconds=function(){var a=this.$ms;this.$d.years=O(a/P),a%=P,this.$d.months=O(a/j),a%=j,this.$d.days=O(a/Y),a%=Y,this.$d.hours=O(a/w),a%=w,this.$d.minutes=O(a/D),a%=D,this.$d.seconds=O(a/S),a%=S,this.$d.milliseconds=a},u.toISOString=function(){var a=F(this.$d.years,"Y"),g=F(this.$d.months,"M"),h=+this.$d.days||0;this.$d.weeks&&(h+=7*this.$d.weeks);var c=F(h,"D"),y=F(this.$d.hours,"H"),k=F(this.$d.minutes,"M"),r=this.$d.seconds||0;this.$d.milliseconds&&(r+=this.$d.milliseconds/1e3,r=Math.round(1e3*r)/1e3);var n=F(r,"S"),t=a.negative||g.negative||c.negative||y.negative||k.negative||n.negative,o=y.format||k.format||n.format?"T":"",i=(t?"-":"")+"P"+a.format+g.format+c.format+o+y.format+k.format+n.format;return i==="P"||i==="-P"?"P0D":i},u.toJSON=function(){return this.toISOString()},u.format=function(a){var g=a||"YYYY-MM-DDTHH:mm:ss",h={Y:this.$d.years,YY:p.s(this.$d.years,2,"0"),YYYY:p.s(this.$d.years,4,"0"),M:this.$d.months,MM:p.s(this.$d.months,2,"0"),D:this.$d.days,DD:p.s(this.$d.days,2,"0"),H:this.$d.hours,HH:p.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:p.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:p.s(this.$d.seconds,2,"0"),SSS:p.s(this.$d.milliseconds,3,"0")};return g.replace(q,function(c,y){return y||String(h[c])})},u.as=function(a){return this.$ms/U[J(a)]},u.get=function(a){var g=this.$ms,h=J(a);return h==="milliseconds"?g%=1e3:g=h==="weeks"?O(g/U[h]):this.$d[h],g||0},u.add=function(a,g,h){var c;return c=g?a*U[J(g)]:E(a)?a.$ms:H(a,this).$ms,H(this.$ms+c*(h?-1:1),this)},u.subtract=function(a,g){return this.add(a,g,!0)},u.locale=function(a){var g=this.clone();return g.$l=a,g},u.clone=function(){return H(this.$ms,this)},u.humanize=function(a){return $().add(this.$ms,"ms").locale(this.$l).fromNow(!a)},u.valueOf=function(){return this.asMilliseconds()},u.milliseconds=function(){return this.get("milliseconds")},u.asMilliseconds=function(){return this.as("milliseconds")},u.seconds=function(){return this.get("seconds")},u.asSeconds=function(){return this.as("seconds")},u.minutes=function(){return this.get("minutes")},u.asMinutes=function(){return this.as("minutes")},u.hours=function(){return this.get("hours")},u.asHours=function(){return this.as("hours")},u.days=function(){return this.get("days")},u.asDays=function(){return this.as("days")},u.weeks=function(){return this.get("weeks")},u.asWeeks=function(){return this.as("weeks")},u.months=function(){return this.get("months")},u.asMonths=function(){return this.as("months")},u.years=function(){return this.get("years")},u.asYears=function(){return this.as("years")},m}(),_=function(m,u,a){return m.add(u.years()*a,"y").add(u.months()*a,"M").add(u.days()*a,"d").add(u.hours()*a,"h").add(u.minutes()*a,"m").add(u.seconds()*a,"s").add(u.milliseconds()*a,"ms")};return function(m,u,a){$=a,p=a().$utils(),a.duration=function(c,y){var k=a.locale();return H(c,{$l:k},y)},a.isDuration=E;var g=u.prototype.add,h=u.prototype.subtract;u.prototype.add=function(c,y){return E(c)?_(this,c,1):g.bind(this)(c,y)},u.prototype.subtract=function(c,y){return E(c)?_(this,c,-1):h.bind(this)(c,y)}}})})(Me);const $e=ae;te.extend($e);const ke=(e,b=new Date)=>{let $=0,p=0,S=0;return b.getFullYear()!==e.getFullYear()?(S=b.getMonth(),p=(b.getFullYear()-e.getFullYear()-1)*12,$=12-e.getMonth()):$=b.getMonth()-e.getMonth(),$+p+S+1},ze=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e],Le=(e,b)=>`${e} | ${b}`;function Ce(e,b=new Date(Date.now()+1e3*60*60*24)){const $=te(e),p=te(b),S=te.duration(p.diff($));let D=0,w="day";return S.as("days")<=7?(w="day",D=S.as("days")):S.as("months")<=1?(w="week",D=S.as("weeks")):S.as("years")<=1?(w="month",D=S.as("months")):(w="year",D=S.as("years")),D=Math.trunc(D),`${Math.trunc(D)} ${w}${D>1?"s":""}`}var R=(e=>(e.Code="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z",e.Search="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z",e.Email="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",e.Skills="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z",e.GitHub="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",e.StackOverflow="m17.12 21.857h-14.977v-6.428h-2.143v8.571h19.259v-8.571h-2.139zm-12.616-7.018.442-2.102 10.486 2.21-.442 2.09zm1.379-5.009.898-1.955 9.71 4.54-.898 1.942zm2.692-4.768 1.366-1.647 8.218 6.87-1.366 1.647zm5.313-5.062 6.388 8.585-1.716 1.286-6.386-8.585zm-9.616 19.701v-2.13h10.714v2.13z",e.LinkedIn="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z",e.Twitter="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z",e.Home="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z",e.Projects="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z",e.Job="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z",e.Academic="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",e.Resume="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z",e.RightArrow="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z",e.LeftArrow="M14.6,18.4L8.3,12l6.4-6.4l0.7,0.7L9.7,12l5.6,5.6L14.6,18.4z",e.Youtube="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z",e.Link="M19.83 4.17a4 4 0 00-5.66 0l-2 2A4 4 0 0011 9a4 4 0 00.56 2l-.54.54a4 4 0 00-4.85.63l-2 2a4 4 0 005.66 5.66l2-2A4 4 0 0013 15a4 4 0 00-.56-2l.54-.54a4 4 0 004.85-.63l2-2a4 4 0 000-5.66zM11 15a2 2 0 01-.59 1.41l-2 2a2 2 0 11-3-2.6l.22-.22 2-2A2 2 0 019 13a2.24 2.24 0 01.51.07l-1.22 1.22a1 1 0 000 1.41 1 1 0 001.41 0l1.22-1.22A2.24 2.24 0 0111 15zm7.41-6.59l-2 2A2 2 0 0115 11a2.24 2.24 0 01-.51-.07l1.22-1.22A1 1 0 0016 9a1 1 0 00-.29-.7A1 1 0 0015 8a1 1 0 00-.7.29l-1.23 1.22A2.24 2.24 0 0113 9a2 2 0 01.59-1.41l2-2a2 2 0 013 2.6z",e.Sun="M108.5 24C108.5 27.5902136 105.590214 30.5 102 30.5 98.4097864 30.5 95.5 27.5902136 95.5 24 95.5 20.4097864 98.4097864 17.5 102 17.5 105.590214 17.5 108.5 20.4097864 108.5 24zM107 24C107 21.2382136 104.761786 19 102 19 99.2382136 19 97 21.2382136 97 24 97 26.7617864 99.2382136 29 102 29 104.761786 29 107 26.7617864 107 24zM101 12.75L101 14.75C101 15.1642136 101.335786 15.5 101.75 15.5 102.164214 15.5 102.5 15.1642136 102.5 14.75L102.5 12.75C102.5 12.3357864 102.164214 12 101.75 12 101.335786 12 101 12.3357864 101 12.75zM95.7255165 14.6323616L96.7485165 16.4038616C96.9556573 16.7625614 97.4143618 16.8854243 97.7730616 16.6782835 98.1317614 16.4711427 98.2546243 16.0124382 98.0474835 15.6537384L97.0244835 13.8822384C96.8173427 13.5235386 96.3586382 13.4006757 95.9999384 13.6078165 95.6412386 13.8149573 95.5183757 14.2736618 95.7255165 14.6323616zM91.8822384 19.0244835L93.6537384 20.0474835C94.0124382 20.2546243 94.4711427 20.1317614 94.6782835 19.7730616 94.8854243 19.4143618 94.7625614 18.9556573 94.4038616 18.7485165L92.6323616 17.7255165C92.2736618 17.5183757 91.8149573 17.6412386 91.6078165 17.9999384 91.4006757 18.3586382 91.5235386 18.8173427 91.8822384 19.0244835zM90.75 25L92.75 25C93.1642136 25 93.5 24.6642136 93.5 24.25 93.5 23.8357864 93.1642136 23.5 92.75 23.5L90.75 23.5C90.3357864 23.5 90 23.8357864 90 24.25 90 24.6642136 90.3357864 25 90.75 25zM92.6323616 30.2744835L94.4038616 29.2514835C94.7625614 29.0443427 94.8854243 28.5856382 94.6782835 28.2269384 94.4711427 27.8682386 94.0124382 27.7453757 93.6537384 27.9525165L91.8822384 28.9755165C91.5235386 29.1826573 91.4006757 29.6413618 91.6078165 30.0000616 91.8149573 30.3587614 92.2736618 30.4816243 92.6323616 30.2744835zM97.0244835 34.1177616L98.0474835 32.3462616C98.2546243 31.9875618 98.1317614 31.5288573 97.7730616 31.3217165 97.4143618 31.1145757 96.9556573 31.2374386 96.7485165 31.5961384L95.7255165 33.3676384C95.5183757 33.7263382 95.6412386 34.1850427 95.9999384 34.3921835 96.3586382 34.5993243 96.8173427 34.4764614 97.0244835 34.1177616zM103 35.25L103 33.25C103 32.8357864 102.664214 32.5 102.25 32.5 101.835786 32.5 101.5 32.8357864 101.5 33.25L101.5 35.25C101.5 35.6642136 101.835786 36 102.25 36 102.664214 36 103 35.6642136 103 35.25zM108.274483 33.3676384L107.251483 31.5961384C107.044343 31.2374386 106.585638 31.1145757 106.226938 31.3217165 105.868239 31.5288573 105.745376 31.9875618 105.952517 32.3462616L106.975517 34.1177616C107.182657 34.4764614 107.641362 34.5993243 108.000062 34.3921835 108.358761 34.1850427 108.481624 33.7263382 108.274483 33.3676384zM112.117762 28.9755165L110.346262 27.9525165C109.987562 27.7453757 109.528857 27.8682386 109.321717 28.2269384 109.114576 28.5856382 109.237439 29.0443427 109.596138 29.2514835L111.367638 30.2744835C111.726338 30.4816243 112.185043 30.3587614 112.392183 30.0000616 112.599324 29.6413618 112.476461 29.1826573 112.117762 28.9755165zM113.25 23L111.25 23C110.835786 23 110.5 23.3357864 110.5 23.75 110.5 24.1642136 110.835786 24.5 111.25 24.5L113.25 24.5C113.664214 24.5 114 24.1642136 114 23.75 114 23.3357864 113.664214 23 113.25 23zM111.367638 17.7255165L109.596138 18.7485165C109.237439 18.9556573 109.114576 19.4143618 109.321717 19.7730616 109.528857 20.1317614 109.987562 20.2546243 110.346262 20.0474835L112.117762 19.0244835C112.476461 18.8173427 112.599324 18.3586382 112.392183 17.9999384 112.185043 17.6412386 111.726338 17.5183757 111.367638 17.7255165zM106.975517 13.8822384L105.952517 15.6537384C105.745376 16.0124382 105.868239 16.4711427 106.226938 16.6782835 106.585638 16.8854243 107.044343 16.7625614 107.251483 16.4038616L108.274483 14.6323616C108.481624 14.2736618 108.358761 13.8149573 108.000062 13.6078165 107.641362 13.4006757 107.182657 13.5235386 106.975517 13.8822384z",e.Moon="M102,21 C102,18.1017141 103.307179,15.4198295 105.51735,13.6246624 C106.001939,13.2310647 105.821611,12.4522936 105.21334,12.3117518 C104.322006,12.1058078 103.414758,12 102.5,12 C95.8722864,12 90.5,17.3722864 90.5,24 C90.5,30.6277136 95.8722864,36 102.5,36 C106.090868,36 109.423902,34.4109093 111.690274,31.7128995 C112.091837,31.2348572 111.767653,30.5041211 111.143759,30.4810139 C106.047479,30.2922628 102,26.1097349 102,21 Z M102.5,34.5 C96.7007136,34.5 92,29.7992864 92,24 C92,18.2007136 96.7007136,13.5 102.5,13.5 C102.807386,13.5 103.113925,13.5136793 103.419249,13.5407785 C101.566047,15.5446378 100.5,18.185162 100.5,21 C100.5,26.3198526 104.287549,30.7714322 109.339814,31.7756638 L109.516565,31.8092927 C107.615276,33.5209452 105.138081,34.5 102.5,34.5 Z",e.Facebook="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z",e))(R||{});const Ee="Marshall James Peters",Ae={home:"Home",personal:"Projects",career:"Experiences",resume:"Resume",skills:"Skills",Education:"Education"},Pe=e=>{switch(e){case T.GitHub:return R.GitHub;case T.Linkedin:return R.LinkedIn;case T.StackOverflow:return R.StackOverflow;case T.Facebook:return R.Facebook;case T.Email:return R.Email;case T.Twitter:return R.Twitter;case T.Youtube:return R.Youtube}},He={title:"Home",name:"Marshall",lastName:"PETERS",description:"A Data Scientist with an interest in Machnine Learning and Software Engineering",links:[{platform:T.GitHub,link:"https://github.com/MJ-Peters"},{platform:T.Linkedin,link:"https://www.linkedin.com/in/marshall-j-peters/"},{platform:T.Email,link:"Marshall_Peters@outlook.com"}]},xe={title:"Projects",items:ye},Te={title:"Experiences",items:ve},Ye={title:"Skills",items:le},Fe={title:"Resumé",item:""},Oe={title:"Search"},qe={items:fe,title:"Education"};export{qe as E,He as H,R as I,le as M,Ae as N,xe as P,Fe as R,Oe as S,Ee as T,re as a,Pe as b,Ce as c,ze as d,Te as e,ve as f,we as g,he as h,ke as i,ye as j,Ye as k,De as o,ue as t,Le as u};
