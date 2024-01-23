import{w as me,b as fe}from"./paths.eb9c750d.js";const oe="@riadh-adrani-theme",ge=e=>{localStorage.setItem(oe,JSON.stringify(e))},ue=me(!1),re=e=>ue.update(b=>{var g;const $=typeof e=="boolean"?e:!b;return ge($),(g=document.querySelector(":root"))==null||g.setAttribute("data-theme",$?"dark":"light"),$}),De=()=>{const e=localStorage.getItem(oe);e?re(JSON.parse(e)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&re(!0)},ie=e=>`${fe}/logos/${e}`,n=(e,b)=>b?{dark:ie(b),light:ie(e)}:ie(e),P={AWS:n("aws.svg"),Bootstrap:n("bootstrap.svg"),C:n("c.svg"),Cpp:n("cpp.svg"),Celery:n("celery.svg"),Django:n("django.svg"),FastApi:n("fastapi"),Flask:n("flask.svg"),Go:n("go.svg"),Kafka:n("kafka.svg"),Neo4j:n("neo4j.svg"),Nginx:n("nginx.svg"),Numpy:n("numpy.svg"),Pandas:n("pandas.svg"),RabbitMQ:n("rabbitmq.svg"),Rust:n("rust.svg","rust-dark.png"),Scrapy:n("scrapy.png"),Selenium:n("selenium.svg"),Docker:n("docker.svg"),Kubernetes:n("kubernetees.svg"),Csharp:n("csharp.svg"),Xamarin:n("xamarin.svg"),TypeScript:n("ts.png"),VueJs:n("vue.png"),ReactJs:n("react.svg"),Dart:n("dart.png"),Kotlin:n("kotlin.png"),Python:n("python.png"),NodeJs:n("node.png"),Deno:n("deno.png","deno-dark.png"),Svelte:n("svelte.png"),ExpressJs:n("express.png"),JavaScript:n("js.png"),Fastify:n("fastify.svg","fastify-dark.png"),NestJs:n("nest.svg"),Quasar:n("quasar.svg"),SolidJs:n("solid.svg"),Electron:n("electron.png"),Flutter:n("flutter.svg"),Java:n("java.png"),AdonisJs:n("adonis.png"),Android:n("android.png"),Angular:n("angular.png"),PostgreSQL:n("postgres.png"),Firebase:n("firebase.png"),Sass:n("sass.png"),Unknown:n("no-img.svg"),MongoDB:n("mongodb.svg"),Redis:n("redis.svg"),Tailwind:n("tailwind.svg"),HTML:n("html.svg"),Premiere:n("premiere.svg"),Photoshop:n("photoshop.svg"),CSS:n("css.svg"),AfterEffects:n("after-effects.svg"),Illustrator:n("illustrator.svg"),Nuxt:n("nuxt.png"),Vite:n("vite.png"),Vitest:n("vitest.svg"),Jest:n("jest.png"),Unocss:n("unocss.svg"),Ruvy:n("ruvy.svg"),Postcss:n("postcss.svg"),MsSQLServer:n("MS-SQL-Server.svg"),Azure:n("Azure.svg"),EY:n("EY.svg"),UoB:n("UoB.png"),UoS:n("UoS.png")};let ce;ue.subscribe(e=>ce=e);const we=e=>typeof e=="string"?e:ce?e.dark:e.light,pe=[{degree:"MSc Financial Technology with Data Science",description:"",location:"Bristol, UK",logo:P.UoB,name:"Master's Degree",organization:"University of Bristol",period:{from:new Date(2022,8),to:new Date(2023,8)},shortDescription:"",slug:"University-of-Bristol",subjects:["Financial Technology","Large Scale Data Engineering","Sofware Development, Programming, and Algorithms","Data Analytics"]},{degree:"BEng Civil Engineering with Architecture",description:"Bachelor's Degree",location:"Southampton, UK",logo:P.UoS,name:"",organization:"University of Southampton",period:{from:new Date(2018,8),to:new Date(2022,8)},shortDescription:"",slug:"University-of-Southampton",subjects:["Structural Design","Finite Element Analysis","Hydraulic Engineering","Geotechnical Engineering"]}],_=e=>e,le=[_({slug:"python",color:"blue",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:P.Python,name:"Python"}),_({slug:"ms-sql-server",color:"white",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:P.MsSQLServer,name:"Microsoft SQL Server"}),_({slug:"azure",color:"blue",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:P.Azure,name:"Microsoft Azure"}),_({slug:"aws",color:"orange",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:P.AWS,name:"Amazon Web Services"}),_({slug:"js",color:"yellow",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:P.JavaScript,name:"JavaScript"}),_({slug:"css",color:"blue",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:P.CSS,name:"CSS"}),_({slug:"html",color:"orange",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:P.HTML,name:"HTML"})],se=(...e)=>le.filter(b=>e.includes(b.slug));var Y=(e=>(e.GitHub="github",e.StackOverflow="stackoverflow",e.Twitter="twitter",e.Linkedin="linkedin",e.Email="email",e.Facebook="facebook",e.Youtube="youtube",e))(Y||{}),de=(e=>(e.FullTime="Full-time",e.PartTime="Part-time",e.SelfEmployed="Self-employed",e.Freelance="Freelance",e.Contract="Contract",e.Internship="Internship",e))(de||{});const ve=[{slug:"data-analyst",company:"EY",description:"",contract:de.FullTime,type:"Data Science and Data Analytics",location:"London, UK",period:{from:new Date(2023,8)},skills:se("python","ms-sql-server","azure"),name:"Forensic Data Analyst - Associate",color:"yellow",links:[],logo:P.EY,shortDescription:""}],Me=[{slug:"AlgoTrading",color:"blue",description:"Explore my in-depth investigation into PRDE trader agents within the Bristol Stock Exchange (BSE), an intricately crafted minimal limit-order-book-based financial exchange implemented in Python. The primary goal of this project is to enhance the capabilities of trader agents by introducing the PRDE agent, an extension of PRZI and PRSH, incorporating the powerful differential evolution (DE) genetic algorithm for optimizing stochastic hill-climbing. I conducted homogeneous experiments on BSE to assess the PRDE agent's performance, and employed statistical testing, focusing on key parameters: population size (k) and differential weight (F). I identified that F is a significant factor influencing performance, while k exhibited less impact. I then implemented my PRADE trader agent, that proactively adjusts the value of F to maximise profitability across a diverse array of market conditions.",shortDescription:"Investigating the performance of adaptive trading agents in a simulated financial exchange.",links:[{to:"https://github.com/MJ-Peters/PRDE-Trader-Evaluation-and-Improvement",label:"GitHub"}],logo:P.Python,name:"Parameterized Response Adaptive Differential Evolution (PRADE) Trader Agents",period:{from:new Date},skills:se("python"),type:"Simulation and Statistical Testing"},{slug:"placeholder-2",color:"#blue",description:"Placeholder description.",shortDescription:"Placeholder short description.",links:[{to:"https://github.com/RiadhAdrani/slick-portfolio-svelte",label:"GitHub"}],logo:P.Python,name:"Placeholder 2",period:{from:new Date},skills:se("svelte","ts","tailwind","sass"),type:"Placeholder",screenshots:[{label:"screen 1",src:"https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},{label:"2",src:"https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},{label:"3",src:"https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},{label:"4",src:"https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},{label:"5",src:"https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},{label:"6",src:"https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"}]}];var he=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ne={},be={get exports(){return ne},set exports(e){ne=e}};(function(e,b){(function($,g){e.exports=g()})(he,function(){var $=1e3,g=6e4,S=36e5,D="millisecond",w="second",F="minute",j="hour",A="day",O="week",H="month",B="quarter",L="year",E="date",J="Invalid Date",K=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,T=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,te={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var s=["th","st","nd","rd"],t=r%100;return"["+r+(s[(t-20)%10]||s[t]||s[0])+"]"}},q=function(r,s,t){var o=String(r);return!o||o.length>=s?r:""+Array(s+1-o.length).join(t)+r},Q={s:q,z:function(r){var s=-r.utcOffset(),t=Math.abs(s),o=Math.floor(t/60),i=t%60;return(s<=0?"+":"-")+q(o,2,"0")+":"+q(i,2,"0")},m:function r(s,t){if(s.date()<t.date())return-r(t,s);var o=12*(t.year()-s.year())+(t.month()-s.month()),i=s.clone().add(o,H),l=t-i<0,d=s.clone().add(o+(l?-1:1),H);return+(-(o+(t-i)/(l?i-d:d-i))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M:H,y:L,w:O,d:A,D:E,h:j,m:F,s:w,ms:D,Q:B}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return r===void 0}},U="en",m={};m[U]=te;var u="$isDayjsObject",a=function(r){return r instanceof M||!(!r||!r[u])},f=function r(s,t,o){var i;if(!s)return U;if(typeof s=="string"){var l=s.toLowerCase();m[l]&&(i=l),t&&(m[l]=t,i=l);var d=s.split("-");if(!i&&d.length>1)return r(d[0])}else{var p=s.name;m[p]=s,i=p}return!o&&i&&(U=i),i||!o&&U},h=function(r,s){if(a(r))return r.clone();var t=typeof s=="object"?s:{};return t.date=r,t.args=arguments,new M(t)},c=Q;c.l=f,c.i=a,c.w=function(r,s){return h(r,{locale:s.$L,utc:s.$u,x:s.$x,$offset:s.$offset})};var M=function(){function r(t){this.$L=f(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[u]=!0}var s=r.prototype;return s.parse=function(t){this.$d=function(o){var i=o.date,l=o.utc;if(i===null)return new Date(NaN);if(c.u(i))return new Date;if(i instanceof Date)return new Date(i);if(typeof i=="string"&&!/Z$/i.test(i)){var d=i.match(K);if(d){var p=d[2]-1||0,v=(d[7]||"0").substring(0,3);return l?new Date(Date.UTC(d[1],p,d[3]||1,d[4]||0,d[5]||0,d[6]||0,v)):new Date(d[1],p,d[3]||1,d[4]||0,d[5]||0,d[6]||0,v)}}return new Date(i)}(t),this.init()},s.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},s.$utils=function(){return c},s.isValid=function(){return this.$d.toString()!==J},s.isSame=function(t,o){var i=h(t);return this.startOf(o)<=i&&i<=this.endOf(o)},s.isAfter=function(t,o){return h(t)<this.startOf(o)},s.isBefore=function(t,o){return this.endOf(o)<h(t)},s.$g=function(t,o,i){return c.u(t)?this[o]:this.set(i,t)},s.unix=function(){return Math.floor(this.valueOf()/1e3)},s.valueOf=function(){return this.$d.getTime()},s.startOf=function(t,o){var i=this,l=!!c.u(o)||o,d=c.p(t),p=function(V,x){var W=c.w(i.$u?Date.UTC(i.$y,x,V):new Date(i.$y,x,V),i);return l?W:W.endOf(A)},v=function(V,x){return c.w(i.toDate()[V].apply(i.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(x)),i)},y=this.$W,z=this.$M,C=this.$D,I="set"+(this.$u?"UTC":"");switch(d){case L:return l?p(1,0):p(31,11);case H:return l?p(1,z):p(0,z+1);case O:var R=this.$locale().weekStart||0,Z=(y<R?y+7:y)-R;return p(l?C-Z:C+(6-Z),z);case A:case E:return v(I+"Hours",0);case j:return v(I+"Minutes",1);case F:return v(I+"Seconds",2);case w:return v(I+"Milliseconds",3);default:return this.clone()}},s.endOf=function(t){return this.startOf(t,!1)},s.$set=function(t,o){var i,l=c.p(t),d="set"+(this.$u?"UTC":""),p=(i={},i[A]=d+"Date",i[E]=d+"Date",i[H]=d+"Month",i[L]=d+"FullYear",i[j]=d+"Hours",i[F]=d+"Minutes",i[w]=d+"Seconds",i[D]=d+"Milliseconds",i)[l],v=l===A?this.$D+(o-this.$W):o;if(l===H||l===L){var y=this.clone().set(E,1);y.$d[p](v),y.init(),this.$d=y.set(E,Math.min(this.$D,y.daysInMonth())).$d}else p&&this.$d[p](v);return this.init(),this},s.set=function(t,o){return this.clone().$set(t,o)},s.get=function(t){return this[c.p(t)]()},s.add=function(t,o){var i,l=this;t=Number(t);var d=c.p(o),p=function(z){var C=h(l);return c.w(C.date(C.date()+Math.round(z*t)),l)};if(d===H)return this.set(H,this.$M+t);if(d===L)return this.set(L,this.$y+t);if(d===A)return p(1);if(d===O)return p(7);var v=(i={},i[F]=g,i[j]=S,i[w]=$,i)[d]||1,y=this.$d.getTime()+t*v;return c.w(y,this)},s.subtract=function(t,o){return this.add(-1*t,o)},s.format=function(t){var o=this,i=this.$locale();if(!this.isValid())return i.invalidDate||J;var l=t||"YYYY-MM-DDTHH:mm:ssZ",d=c.z(this),p=this.$H,v=this.$m,y=this.$M,z=i.weekdays,C=i.months,I=i.meridiem,R=function(x,W,G,X){return x&&(x[W]||x(o,l))||G[W].slice(0,X)},Z=function(x){return c.s(p%12||12,x,"0")},V=I||function(x,W,G){var X=x<12?"AM":"PM";return G?X.toLowerCase():X};return l.replace(T,function(x,W){return W||function(G){switch(G){case"YY":return String(o.$y).slice(-2);case"YYYY":return c.s(o.$y,4,"0");case"M":return y+1;case"MM":return c.s(y+1,2,"0");case"MMM":return R(i.monthsShort,y,C,3);case"MMMM":return R(C,y);case"D":return o.$D;case"DD":return c.s(o.$D,2,"0");case"d":return String(o.$W);case"dd":return R(i.weekdaysMin,o.$W,z,2);case"ddd":return R(i.weekdaysShort,o.$W,z,3);case"dddd":return z[o.$W];case"H":return String(p);case"HH":return c.s(p,2,"0");case"h":return Z(1);case"hh":return Z(2);case"a":return V(p,v,!0);case"A":return V(p,v,!1);case"m":return String(v);case"mm":return c.s(v,2,"0");case"s":return String(o.$s);case"ss":return c.s(o.$s,2,"0");case"SSS":return c.s(o.$ms,3,"0");case"Z":return d}return null}(x)||d.replace(":","")})},s.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},s.diff=function(t,o,i){var l,d=this,p=c.p(o),v=h(t),y=(v.utcOffset()-this.utcOffset())*g,z=this-v,C=function(){return c.m(d,v)};switch(p){case L:l=C()/12;break;case H:l=C();break;case B:l=C()/3;break;case O:l=(z-y)/6048e5;break;case A:l=(z-y)/864e5;break;case j:l=z/S;break;case F:l=z/g;break;case w:l=z/$;break;default:l=z}return i?l:c.a(l)},s.daysInMonth=function(){return this.endOf(H).$D},s.$locale=function(){return m[this.$L]},s.locale=function(t,o){if(!t)return this.$L;var i=this.clone(),l=f(t,o,!0);return l&&(i.$L=l),i},s.clone=function(){return c.w(this.$d,this)},s.toDate=function(){return new Date(this.valueOf())},s.toJSON=function(){return this.isValid()?this.toISOString():null},s.toISOString=function(){return this.$d.toISOString()},s.toString=function(){return this.$d.toUTCString()},r}(),k=M.prototype;return h.prototype=k,[["$ms",D],["$s",w],["$m",F],["$H",j],["$W",A],["$M",H],["$y",L],["$D",E]].forEach(function(r){k[r[1]]=function(s){return this.$g(s,r[0],r[1])}}),h.extend=function(r,s){return r.$i||(r(s,M,h),r.$i=!0),h},h.locale=f,h.isDayjs=a,h.unix=function(r){return h(1e3*r)},h.en=m[U],h.Ls=m,h.p={},h})})(be);const ee=ne;var ae={},ye={get exports(){return ae},set exports(e){ae=e}};(function(e,b){(function($,g){e.exports=g()})(he,function(){var $,g,S=1e3,D=6e4,w=36e5,F=864e5,j=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,A=31536e6,O=2628e6,H=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,B={years:A,months:O,days:F,hours:w,minutes:D,seconds:S,milliseconds:1,weeks:6048e5},L=function(m){return m instanceof Q},E=function(m,u,a){return new Q(m,a,u.$l)},J=function(m){return g.p(m)+"s"},K=function(m){return m<0},T=function(m){return K(m)?Math.ceil(m):Math.floor(m)},te=function(m){return Math.abs(m)},q=function(m,u){return m?K(m)?{negative:!0,format:""+te(m)+u}:{negative:!1,format:""+m+u}:{negative:!1,format:""}},Q=function(){function m(a,f,h){var c=this;if(this.$d={},this.$l=h,a===void 0&&(this.$ms=0,this.parseFromMilliseconds()),f)return E(a*B[J(f)],this);if(typeof a=="number")return this.$ms=a,this.parseFromMilliseconds(),this;if(typeof a=="object")return Object.keys(a).forEach(function(r){c.$d[J(r)]=a[r]}),this.calMilliseconds(),this;if(typeof a=="string"){var M=a.match(H);if(M){var k=M.slice(2).map(function(r){return r!=null?Number(r):0});return this.$d.years=k[0],this.$d.months=k[1],this.$d.weeks=k[2],this.$d.days=k[3],this.$d.hours=k[4],this.$d.minutes=k[5],this.$d.seconds=k[6],this.calMilliseconds(),this}}return this}var u=m.prototype;return u.calMilliseconds=function(){var a=this;this.$ms=Object.keys(this.$d).reduce(function(f,h){return f+(a.$d[h]||0)*B[h]},0)},u.parseFromMilliseconds=function(){var a=this.$ms;this.$d.years=T(a/A),a%=A,this.$d.months=T(a/O),a%=O,this.$d.days=T(a/F),a%=F,this.$d.hours=T(a/w),a%=w,this.$d.minutes=T(a/D),a%=D,this.$d.seconds=T(a/S),a%=S,this.$d.milliseconds=a},u.toISOString=function(){var a=q(this.$d.years,"Y"),f=q(this.$d.months,"M"),h=+this.$d.days||0;this.$d.weeks&&(h+=7*this.$d.weeks);var c=q(h,"D"),M=q(this.$d.hours,"H"),k=q(this.$d.minutes,"M"),r=this.$d.seconds||0;this.$d.milliseconds&&(r+=this.$d.milliseconds/1e3,r=Math.round(1e3*r)/1e3);var s=q(r,"S"),t=a.negative||f.negative||c.negative||M.negative||k.negative||s.negative,o=M.format||k.format||s.format?"T":"",i=(t?"-":"")+"P"+a.format+f.format+c.format+o+M.format+k.format+s.format;return i==="P"||i==="-P"?"P0D":i},u.toJSON=function(){return this.toISOString()},u.format=function(a){var f=a||"YYYY-MM-DDTHH:mm:ss",h={Y:this.$d.years,YY:g.s(this.$d.years,2,"0"),YYYY:g.s(this.$d.years,4,"0"),M:this.$d.months,MM:g.s(this.$d.months,2,"0"),D:this.$d.days,DD:g.s(this.$d.days,2,"0"),H:this.$d.hours,HH:g.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:g.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:g.s(this.$d.seconds,2,"0"),SSS:g.s(this.$d.milliseconds,3,"0")};return f.replace(j,function(c,M){return M||String(h[c])})},u.as=function(a){return this.$ms/B[J(a)]},u.get=function(a){var f=this.$ms,h=J(a);return h==="milliseconds"?f%=1e3:f=h==="weeks"?T(f/B[h]):this.$d[h],f||0},u.add=function(a,f,h){var c;return c=f?a*B[J(f)]:L(a)?a.$ms:E(a,this).$ms,E(this.$ms+c*(h?-1:1),this)},u.subtract=function(a,f){return this.add(a,f,!0)},u.locale=function(a){var f=this.clone();return f.$l=a,f},u.clone=function(){return E(this.$ms,this)},u.humanize=function(a){return $().add(this.$ms,"ms").locale(this.$l).fromNow(!a)},u.valueOf=function(){return this.asMilliseconds()},u.milliseconds=function(){return this.get("milliseconds")},u.asMilliseconds=function(){return this.as("milliseconds")},u.seconds=function(){return this.get("seconds")},u.asSeconds=function(){return this.as("seconds")},u.minutes=function(){return this.get("minutes")},u.asMinutes=function(){return this.as("minutes")},u.hours=function(){return this.get("hours")},u.asHours=function(){return this.as("hours")},u.days=function(){return this.get("days")},u.asDays=function(){return this.as("days")},u.weeks=function(){return this.get("weeks")},u.asWeeks=function(){return this.as("weeks")},u.months=function(){return this.get("months")},u.asMonths=function(){return this.as("months")},u.years=function(){return this.get("years")},u.asYears=function(){return this.as("years")},m}(),U=function(m,u,a){return m.add(u.years()*a,"y").add(u.months()*a,"M").add(u.days()*a,"d").add(u.hours()*a,"h").add(u.minutes()*a,"m").add(u.seconds()*a,"s").add(u.milliseconds()*a,"ms")};return function(m,u,a){$=a,g=a().$utils(),a.duration=function(c,M){var k=a.locale();return E(c,{$l:k},M)},a.isDuration=L;var f=u.prototype.add,h=u.prototype.subtract;u.prototype.add=function(c,M){return L(c)?U(this,c,1):f.bind(this)(c,M)},u.prototype.subtract=function(c,M){return L(c)?U(this,c,-1):h.bind(this)(c,M)}}})})(ye);const $e=ae;ee.extend($e);const ke=(e,b=new Date)=>{let $=0,g=0,S=0;return b.getFullYear()!==e.getFullYear()?(S=b.getMonth(),g=(b.getFullYear()-e.getFullYear()-1)*12,$=12-e.getMonth()):$=b.getMonth()-e.getMonth(),$+g+S+1},ze=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e],xe=(e,b)=>`${e} | ${b}`;function He(e,b=new Date(Date.now()+1e3*60*60*24)){const $=ee(e),g=ee(b),S=ee.duration(g.diff($));let D=0,w="day";return S.as("days")<=7?(w="day",D=S.as("days")):S.as("months")<=1?(w="week",D=S.as("weeks")):S.as("years")<=1?(w="month",D=S.as("months")):(w="year",D=S.as("years")),D=Math.trunc(D),`${Math.trunc(D)} ${w}${D>1?"s":""}`}var N=(e=>(e.Code="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z",e.Search="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z",e.Email="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",e.Skills="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z",e.GitHub="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",e.StackOverflow="m17.12 21.857h-14.977v-6.428h-2.143v8.571h19.259v-8.571h-2.139zm-12.616-7.018.442-2.102 10.486 2.21-.442 2.09zm1.379-5.009.898-1.955 9.71 4.54-.898 1.942zm2.692-4.768 1.366-1.647 8.218 6.87-1.366 1.647zm5.313-5.062 6.388 8.585-1.716 1.286-6.386-8.585zm-9.616 19.701v-2.13h10.714v2.13z",e.LinkedIn="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z",e.Twitter="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z",e.Home="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z",e.Projects="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z",e.Job="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z",e.Academic="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",e.Resume="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z",e.RightArrow="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z",e.LeftArrow="M14.6,18.4L8.3,12l6.4-6.4l0.7,0.7L9.7,12l5.6,5.6L14.6,18.4z",e.Youtube="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z",e.Link="M19.83 4.17a4 4 0 00-5.66 0l-2 2A4 4 0 0011 9a4 4 0 00.56 2l-.54.54a4 4 0 00-4.85.63l-2 2a4 4 0 005.66 5.66l2-2A4 4 0 0013 15a4 4 0 00-.56-2l.54-.54a4 4 0 004.85-.63l2-2a4 4 0 000-5.66zM11 15a2 2 0 01-.59 1.41l-2 2a2 2 0 11-3-2.6l.22-.22 2-2A2 2 0 019 13a2.24 2.24 0 01.51.07l-1.22 1.22a1 1 0 000 1.41 1 1 0 001.41 0l1.22-1.22A2.24 2.24 0 0111 15zm7.41-6.59l-2 2A2 2 0 0115 11a2.24 2.24 0 01-.51-.07l1.22-1.22A1 1 0 0016 9a1 1 0 00-.29-.7A1 1 0 0015 8a1 1 0 00-.7.29l-1.23 1.22A2.24 2.24 0 0113 9a2 2 0 01.59-1.41l2-2a2 2 0 013 2.6z",e.Sun="M108.5 24C108.5 27.5902136 105.590214 30.5 102 30.5 98.4097864 30.5 95.5 27.5902136 95.5 24 95.5 20.4097864 98.4097864 17.5 102 17.5 105.590214 17.5 108.5 20.4097864 108.5 24zM107 24C107 21.2382136 104.761786 19 102 19 99.2382136 19 97 21.2382136 97 24 97 26.7617864 99.2382136 29 102 29 104.761786 29 107 26.7617864 107 24zM101 12.75L101 14.75C101 15.1642136 101.335786 15.5 101.75 15.5 102.164214 15.5 102.5 15.1642136 102.5 14.75L102.5 12.75C102.5 12.3357864 102.164214 12 101.75 12 101.335786 12 101 12.3357864 101 12.75zM95.7255165 14.6323616L96.7485165 16.4038616C96.9556573 16.7625614 97.4143618 16.8854243 97.7730616 16.6782835 98.1317614 16.4711427 98.2546243 16.0124382 98.0474835 15.6537384L97.0244835 13.8822384C96.8173427 13.5235386 96.3586382 13.4006757 95.9999384 13.6078165 95.6412386 13.8149573 95.5183757 14.2736618 95.7255165 14.6323616zM91.8822384 19.0244835L93.6537384 20.0474835C94.0124382 20.2546243 94.4711427 20.1317614 94.6782835 19.7730616 94.8854243 19.4143618 94.7625614 18.9556573 94.4038616 18.7485165L92.6323616 17.7255165C92.2736618 17.5183757 91.8149573 17.6412386 91.6078165 17.9999384 91.4006757 18.3586382 91.5235386 18.8173427 91.8822384 19.0244835zM90.75 25L92.75 25C93.1642136 25 93.5 24.6642136 93.5 24.25 93.5 23.8357864 93.1642136 23.5 92.75 23.5L90.75 23.5C90.3357864 23.5 90 23.8357864 90 24.25 90 24.6642136 90.3357864 25 90.75 25zM92.6323616 30.2744835L94.4038616 29.2514835C94.7625614 29.0443427 94.8854243 28.5856382 94.6782835 28.2269384 94.4711427 27.8682386 94.0124382 27.7453757 93.6537384 27.9525165L91.8822384 28.9755165C91.5235386 29.1826573 91.4006757 29.6413618 91.6078165 30.0000616 91.8149573 30.3587614 92.2736618 30.4816243 92.6323616 30.2744835zM97.0244835 34.1177616L98.0474835 32.3462616C98.2546243 31.9875618 98.1317614 31.5288573 97.7730616 31.3217165 97.4143618 31.1145757 96.9556573 31.2374386 96.7485165 31.5961384L95.7255165 33.3676384C95.5183757 33.7263382 95.6412386 34.1850427 95.9999384 34.3921835 96.3586382 34.5993243 96.8173427 34.4764614 97.0244835 34.1177616zM103 35.25L103 33.25C103 32.8357864 102.664214 32.5 102.25 32.5 101.835786 32.5 101.5 32.8357864 101.5 33.25L101.5 35.25C101.5 35.6642136 101.835786 36 102.25 36 102.664214 36 103 35.6642136 103 35.25zM108.274483 33.3676384L107.251483 31.5961384C107.044343 31.2374386 106.585638 31.1145757 106.226938 31.3217165 105.868239 31.5288573 105.745376 31.9875618 105.952517 32.3462616L106.975517 34.1177616C107.182657 34.4764614 107.641362 34.5993243 108.000062 34.3921835 108.358761 34.1850427 108.481624 33.7263382 108.274483 33.3676384zM112.117762 28.9755165L110.346262 27.9525165C109.987562 27.7453757 109.528857 27.8682386 109.321717 28.2269384 109.114576 28.5856382 109.237439 29.0443427 109.596138 29.2514835L111.367638 30.2744835C111.726338 30.4816243 112.185043 30.3587614 112.392183 30.0000616 112.599324 29.6413618 112.476461 29.1826573 112.117762 28.9755165zM113.25 23L111.25 23C110.835786 23 110.5 23.3357864 110.5 23.75 110.5 24.1642136 110.835786 24.5 111.25 24.5L113.25 24.5C113.664214 24.5 114 24.1642136 114 23.75 114 23.3357864 113.664214 23 113.25 23zM111.367638 17.7255165L109.596138 18.7485165C109.237439 18.9556573 109.114576 19.4143618 109.321717 19.7730616 109.528857 20.1317614 109.987562 20.2546243 110.346262 20.0474835L112.117762 19.0244835C112.476461 18.8173427 112.599324 18.3586382 112.392183 17.9999384 112.185043 17.6412386 111.726338 17.5183757 111.367638 17.7255165zM106.975517 13.8822384L105.952517 15.6537384C105.745376 16.0124382 105.868239 16.4711427 106.226938 16.6782835 106.585638 16.8854243 107.044343 16.7625614 107.251483 16.4038616L108.274483 14.6323616C108.481624 14.2736618 108.358761 13.8149573 108.000062 13.6078165 107.641362 13.4006757 107.182657 13.5235386 106.975517 13.8822384z",e.Moon="M102,21 C102,18.1017141 103.307179,15.4198295 105.51735,13.6246624 C106.001939,13.2310647 105.821611,12.4522936 105.21334,12.3117518 C104.322006,12.1058078 103.414758,12 102.5,12 C95.8722864,12 90.5,17.3722864 90.5,24 C90.5,30.6277136 95.8722864,36 102.5,36 C106.090868,36 109.423902,34.4109093 111.690274,31.7128995 C112.091837,31.2348572 111.767653,30.5041211 111.143759,30.4810139 C106.047479,30.2922628 102,26.1097349 102,21 Z M102.5,34.5 C96.7007136,34.5 92,29.7992864 92,24 C92,18.2007136 96.7007136,13.5 102.5,13.5 C102.807386,13.5 103.113925,13.5136793 103.419249,13.5407785 C101.566047,15.5446378 100.5,18.185162 100.5,21 C100.5,26.3198526 104.287549,30.7714322 109.339814,31.7756638 L109.516565,31.8092927 C107.615276,33.5209452 105.138081,34.5 102.5,34.5 Z",e.Facebook="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z",e))(N||{});const Le="Marshall James Peters",Ae={home:"Home",personal:"Projects",career:"Experiences",resume:"Resume",skills:"Skills",Education:"Education"},Ee=e=>{switch(e){case Y.GitHub:return N.GitHub;case Y.Linkedin:return N.LinkedIn;case Y.StackOverflow:return N.StackOverflow;case Y.Facebook:return N.Facebook;case Y.Email:return N.Email;case Y.Twitter:return N.Twitter;case Y.Youtube:return N.Youtube}},Ce={title:"Home",name:"Marshall",lastName:"PETERS",description:"A Data Scientist with an interest in Machnine Learning and Software Engineering",links:[{platform:Y.GitHub,link:"https://github.com/MJ-Peters"},{platform:Y.Linkedin,link:"https://www.linkedin.com/in/marshall-j-peters/"},{platform:Y.Email,link:"Marshall_Peters@outlook.com"}]},Pe={title:"Projects",items:Me},Ye={title:"Experiences",items:ve},Fe={title:"Skills",items:le},qe={title:"Resumé",item:""},Te={title:"Search"},je={items:pe,title:"Education"};export{je as E,Ce as H,N as I,le as M,Ae as N,Pe as P,qe as R,Te as S,Le as T,re as a,Ee as b,He as c,ze as d,Ye as e,ve as f,we as g,he as h,ke as i,Me as j,Fe as k,De as o,ue as t,xe as u};
