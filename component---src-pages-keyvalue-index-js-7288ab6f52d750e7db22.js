(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{140:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return s});a(154);var n=a(0),r=a.n(n),l=a(152),i=a(151),o=a(149),u=a(158);function s(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:l.b.keyvalue.name+" - The Simple API",description:l.b.keyvalue.description}),r.a.createElement("h1",null,r.a.createElement("span",{style:{display:"inline-block",verticalAlign:"middle"}},"Key Value")),r.a.createElement("p",null,l.b.keyvalue.description),r.a.createElement("div",null,r.a.createElement("h2",null,"1. Set a value"),"Send a POST request to this endpoint with ",r.a.createElement("code",null,"text")," body:",r.a.createElement("pre",null,"https://keyvalue.thesimpleapi.com/:secret/:key"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,":secret")," You are free to use any string match this regex: ",r.a.createElement("code",null,"/[A-Za-z0-9]{32,128}/"),'. This is also your "password", choose wisely and don\'t expose it to public or others can use it to read/write your data.'),r.a.createElement("li",null,r.a.createElement("code",null,":key")," Any string less than 512 chars."),r.a.createElement("li",null,"Body of the request must be a ",r.a.createElement("b",null,"string")," less than 200,000 chars. If you need to store objects, use JSON string or any kind of serialization with string output.")),r.a.createElement("p",null,r.a.createElement("b",null,"Demo:"),' here I use "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" as key, but you probably need to generate a universal-unique-hard-to-guess key. Remember, if I know your key I can read/write your data. Check the API bellow.'),r.a.createElement(u.a,{actions:{method:"POST",urlPattern:"https://keyvalue.thesimpleapi.com/:secret/:key"},defaultParams:{secret:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",key:"user_1"},defaultBody:JSON.stringify({id:1,name:"Trung"})})),r.a.createElement("div",null,r.a.createElement("h2",null,"2. Get a value"),r.a.createElement("p",null,"Just send a GET request to the same endpoint. Response status 404 means key not found, status 200 mean success with the value in body."),r.a.createElement(u.a,{actions:"https://keyvalue.thesimpleapi.com/:secret/:key",defaultParams:{secret:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",key:"user_1"}})),r.a.createElement("div",null,r.a.createElement("h2",null,"3. Delete a value"),r.a.createElement("p",null,"Similarly, send a DELETE request to the same endpoint."),r.a.createElement(u.a,{actions:{method:"DELETE",urlPattern:"https://keyvalue.thesimpleapi.com/:secret/:key"},defaultParams:{secret:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",key:"user_1"}})),r.a.createElement("div",null,r.a.createElement("h2",null,"4. Behind the scenes"),r.a.createElement("ul",null,r.a.createElement("li",null,"AWS DynamoDB"),r.a.createElement("li",null,"AWS Lambda"),r.a.createElement("li",null,"Cloudfront"),r.a.createElement("li",null,"Route 53"),r.a.createElement("li",null,"NodeJS"))),r.a.createElement("div",null,r.a.createElement("h2",null,"5. Limitations"),r.a.createElement("ul",null,r.a.createElement("li",null,"Speed is not a feature, each request will likely to take about 300ms up to 3 seconds for the response to be returned."),r.a.createElement("li",null,'Eventually Consistent Reads: when you "get", the response might not reflect the results of a recently completed "set" operation.'),r.a.createElement("li",null,"You have free 1000 requests for each ",r.a.createElement("code",null,":secret"),". Check"," ",r.a.createElement("code",null,"X-KeyValue-Limit")," in response headers to see your remaining requests. Contact me if you need more."))),r.a.createElement("div",null,r.a.createElement("h2",null,"6. What can you do with this?"),r.a.createElement("ul",null,r.a.createElement("li",null,"Probably to speedup your hackathon projects."),r.a.createElement("li",null,"Portable free database for pet projects"))),r.a.createElement("div",null,r.a.createElement("h2",null,"7. Licences"),"Free for all of your hobby projects. Contact me if you need more."))}},144:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return y}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(143),u=a.n(o);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var s=a(145),c=a.n(s);a.d(t,"PageRenderer",function(){return c.a});var m=a(33);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function y(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},145:function(e,t,a){var n;e.exports=(n=a(147))&&n.default||n},146:function(e){e.exports={data:{site:{siteMetadata:{title:"The Simple API",description:"Just call it"}}}}},147:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(53),u=a(2),s=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},148:function(e,t,a){},149:function(e,t,a){"use strict";var n=a(150),r=a(0),l=a.n(r),i=a(4),o=a.n(i),u=a(153),s=a.n(u),c=a(144);function m(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,o=e.title;return l.a.createElement(c.StaticQuery,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return l.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=m;var d="1025518380"},150:function(e){e.exports={data:{site:{siteMetadata:{title:"The Simple API",description:"Just call it",author:"@trungdq88"}}}}},151:function(e,t,a){"use strict";var n=a(146),r=a(0),l=a.n(r),i=a(4),o=a.n(i),u=a(144),s=function(e){var t=e.siteTitle,a=e.siteDescription;return l.a.createElement("header",{style:{background:"#C73E1D",marginBottom:"1.45rem"}},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},l.a.createElement("h1",{style:{margin:0}},l.a.createElement(u.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t," ",l.a.createElement("small",null,"- ",a)))))};s.propTypes={siteTitle:o.a.string},s.defaultProps={siteTitle:""};var c=s,m=(a(148),function(e){var t=e.children;return l.a.createElement(u.StaticQuery,{query:"2328579951",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c,{siteTitle:e.site.siteMetadata.title,siteDescription:e.site.siteMetadata.description}),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},l.a.createElement("main",null,t),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("footer",null,"© ",(new Date).getFullYear(),", ",e.site.siteMetadata.title," by"," ",l.a.createElement("a",{href:"mailto:trungdq88@gmail.com"},"trungdq88@gmail.com"))))},data:n})});m.propTypes={children:o.a.node.isRequired};t.a=m},152:function(e,t,a){"use strict";a.d(t,"a",function(){return r});a(32),a(73),a(52),a(155);var n={sheet:{name:"Sheet",description:"Turn your Google Spreadsheet into JSON with a simple API call."},keyvalue:{name:"Key Value",description:"A serverless key-value database backed by DynamoDB"}};t.b=n;var r=Object.keys(n).map(function(e){return Object.assign({key:e},n[e])})},158:function(e,t,a){"use strict";a.d(t,"a",function(){return h});var n=a(159),r=a.n(n),l=(a(156),a(32),a(35),a(160)),i=a.n(l),o=a(0),u=a.n(o),s=a(163),c=a.n(s),m=a(161),d=Object(m.a)(c.a).withConfig({displayName:"SampleRequest__ReplaceableBox",componentId:"wpkbn4-0"})(["> input{border:0;padding:2px 10px;display:inline-block;background-color:#d4d4d4;}"]),p=m.a.pre.withConfig({displayName:"SampleRequest__JsonText",componentId:"wpkbn4-1"})(["max-height:400px;"]),y=m.a.section.withConfig({displayName:"SampleRequest__Section",componentId:"wpkbn4-2"})(["margin:10px 0;"]);function h(e){var t=e.actions,a=e.defaultParams,n=e.defaultBody,l=Object(o.useState)(!1),s=l[0],c=l[1],m=Object(o.useState)(),h=m[0],f=m[1],E=Object(o.useState)(a),g=E[0],b=E[1],v=Object(o.useState)(n),k=v[0],w=v[1],S=function(e){if("string"==typeof e)return{method:"get",urlPattern:e};if("object"==typeof e)return e;throw new Error("actions not supported")}(t);function q(){return(q=i()(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,fetch(P(S.urlPattern,g),{method:S.method,body:k}).then(function(e){return e.json()});case 4:t=e.sent,f(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0),f("Failed! Please check console log.");case 12:return e.prev=12,c(!1),e.finish(12);case 15:case"end":return e.stop()}},e,this,[[1,8,12,15]])}))).apply(this,arguments)}function x(e){for(var t,a=[],n=/:\w+/g,r=0;null!=(t=n.exec(e));)a.push({type:"string",value:e.substr(r,t.index-r)}),a.push({type:"param",value:t[0],key:t[0].replace(/^:/,"")}),r=t.index+t[0].length;var l=r+a[a.length-1].length;return l<e.length&&a.push({type:"string",value:e.substr(l,e.length-l+1)}),a}function P(e,t){return x(e).map(function(e){if("param"===e.type)return t[e.key];if("string"===e.type)return e.value;throw new Error("part type not supported")}).join("")}return u.a.createElement(u.a.Fragment,null,u.a.createElement(y,null,u.a.createElement("b",null,"Request"),": (you can replace with your own params)",u.a.createElement("br",null),u.a.createElement("code",null,S.method.toUpperCase()," ",x(S.urlPattern).map(function(e,t){return"string"===e.type?u.a.createElement("span",{key:t},e.value):"param"===e.type?u.a.createElement(d,{key:t,value:g[e.key]||"",onChange:function(t){var a;return b(Object.assign({},g,((a={})[e.key]=t.target.value,a)))},placeholder:e.value}):"?"})),"POST"===S.method.toUpperCase()?u.a.createElement(u.a.Fragment,null,u.a.createElement("br",null),"Body:"," ",u.a.createElement(d,{value:k||"",onChange:function(e){return w(e.target.value)},placeholder:"Body"}),u.a.createElement("br",null)):null,u.a.createElement("button",{onClick:function(){return q.apply(this,arguments)}},"Send"),u.a.createElement("br",null)),u.a.createElement(y,null,u.a.createElement("b",null,"Response"),":",u.a.createElement(p,null,s?"Loading...":void 0!==h?JSON.stringify(h,null,2):'(Press "Send" to see response)')))}}}]);
//# sourceMappingURL=component---src-pages-keyvalue-index-js-7288ab6f52d750e7db22.js.map