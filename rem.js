/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csscalc-cssvwunit-setclasses !*/
!function(e,n,t){function s(e,n){return typeof e===n}function o(){var e,n,t,o,a,i,r;for(var l in f)if(f.hasOwnProperty(l)){if(e=[],n=f[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=s(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],r=i.split("."),1===r.length?Modernizr[r[0]]=o:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=o),d.push((o?"":"no-")+r.join("-"))}}function a(e){var n=p.className,t=Modernizr._config.classPrefix||"";if(u&&(n=n.baseVal),Modernizr._config.enableJSClass){var s=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(s,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),u?p.className.baseVal=n:p.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):u?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=i(u?"svg":"body"),e.fake=!0),e}function l(e,t,s,o){var a,l,d,f,c="modernizr",u=i("div"),h=r();if(parseInt(s,10))for(;s--;)d=i("div"),d.id=o?o[s]:c+(s+1),u.appendChild(d);return a=i("style"),a.type="text/css",a.id="s"+c,(h.fake?h:u).appendChild(a),h.appendChild(u),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),u.id=c,h.fake&&(h.style.background="",h.style.overflow="hidden",f=p.style.overflow,p.style.overflow="hidden",p.appendChild(h)),l=t(u,e),h.fake?(h.parentNode.removeChild(h),p.style.overflow=f,p.offsetHeight):u.parentNode.removeChild(u),!!l}var d=[],f=[],c={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){f.push({name:e,fn:n,options:t})},addAsyncTest:function(e){f.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=c,Modernizr=new Modernizr;var p=n.documentElement,u="svg"===p.nodeName.toLowerCase(),h=c._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];c._prefixes=h,Modernizr.addTest("csscalc",function(){var e="width:",n="calc(10px);",t=i("a");return t.style.cssText=e+h.join(n+e),!!t.style.length});var m=c.testStyles=l;m("#modernizr { width: 50vw; }",function(n){var t=parseInt(e.innerWidth/2,10),s=parseInt((e.getComputedStyle?getComputedStyle(n,null):n.currentStyle).width,10);Modernizr.addTest("cssvwunit",s==t)}),o(),a(d),delete c.addTest,delete c.addAsyncTest;for(var v=0;v<Modernizr._q.length;v++)Modernizr._q[v]();e.Modernizr=Modernizr}(window,document);

var scriptEl = document.querySelector('script[data-width]')
var designWidth = scriptEl.getAttribute('data-width') || 375
var docEl = document.documentElement

if (Modernizr && Modernizr.csscalc && Modernizr.cssvwunit) {
    docEl.style.fontSize = 'calc(100vw/' + (designWidth / 100) + ')'
} else {
    docEl.style.fontSize = '100px'
    window.addEventListener('resize', onResizeHandler)
    onResizeHandler()
}

function onResizeHandler() {
    docEl.style.fontSize = 100 * docEl.getBoundingClientRect().width / designWidth + 'px'
}
