(this["webpackJsonpuse-r3f-assets"]=this["webpackJsonpuse-r3f-assets"]||[]).push([[0],{65:function(e,t,a){e.exports=a.p+"static/media/bg-desktop.c0c849d3.png"},66:function(e,t,a){e.exports=a.p+"static/media/bg-mobile.bf1eb06b.png"},72:function(e,t,a){e.exports=a(95)},90:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var r=a(28),n=a(1),i=a.n(n),s=a(8),c=a(22),o=a(68),l=a(9),m=a(45),f=a(0);var p=function(){var e=Object(n.useRef)(),t=Object(s.h)().viewport,a=Object(n.useMemo)((function(){return[new f.Euler(0,0,0),new f.Quaternion(0,0,0,0)]}),[]),r=Object(l.a)(a,2),i=r[0],c=r[1];return Object(s.e)((function(a){var r=a.mouse;if(e.current){var n=r.x*t.width/100,s=r.y*t.height/100;i.set(s,n,0),c.setFromEuler(i),e.current.quaternion.slerp(c,.1)}})),e};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[0],t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current.layers.disableAll(),e.sort().forEach((function(e){t.current.layers.enable(e)}))})),t},u=a(50);var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useMemo)((function(){var t={format:f.RGBAFormat,generateMipmaps:!1};return new f.WebGLCubeRenderTarget(1024,Object(u.a)(Object(u.a)({},t),e))}),[e]),a=Object(n.useRef)();return Object(s.e)((function(e){var t=e.gl,r=e.scene;a.current&&a.current.update(t,r)})),[a,t]};function x(e,t,a,r){this._filmThickness=e||500,this._refractiveIndexFilm=t||2,this._refractiveIndexBase=a||3,this._size=r||128,this._data=new Uint8Array(4*this._size),this._updateData(),f.DataTexture.call(this,this._data,this._size,1,f.RGBAFormat,f.UnsignedByteType,f.UVMapping,f.RepeatWrapping,f.RepeatWrapping,f.LinearFilter,f.LinearMipMapLinearFilter),this.generateMipmaps=!0,this.needsUpdate=!0}x.prototype=Object.create(f.DataTexture.prototype,{filmThickness:{get:function(){return this._filmThickness},set:function(e){this._filmThickness=e,this.updateSettings(this._filmThickness,this._refractiveIndexFilm,this._refractiveIndexBase)}},refractiveIndexFilm:{get:function(){return this._refractiveIndexFilm},set:function(e){this._refractiveIndexFilm=e,this.updateSettings(this._filmThickness,this._refractiveIndexFilm,this._refractiveIndexBase)}},refractiveIndexBase:{get:function(){return this._refractiveIndexBase},set:function(e){this._refractiveIndexBase=e,this.updateSettings(this._filmThickness,this._refractiveIndexFilm,this._refractiveIndexBase)}}}),x.prototype.updateSettings=function(e,t,a){this._filmThickness=e||380,this._refractiveIndexFilm=t||2,this._refractiveIndexBase=a||3,this._updateData()},x.prototype._fresnelRefl=function(e,t,a,r,n,i){var s=1-a*a,c=e/t;if(c*c*s>1){n.x=1,n.y=1;var o=c*c;i.x=2*Math.atan(-o*Math.sqrt(s-1/o)/a),i.y=2*Math.atan(-Math.sqrt(s-1/o)/a)}else{var l=(t*a-e*r)/(t*a+e*r),m=(e*a-t*r)/(e*a+t*r);i.x=l<0?Math.PI:0,i.y=m<0?Math.PI:0,n.x=l*l,n.y=m*m}},x.prototype._updateData=function(){var e=this._filmThickness,t=this._refractiveIndexFilm,a=this._refractiveIndexBase,r=this._size;function n(e){var t=(e-442)*(e<442?.0624:.0374),a=(e-599.8)*(e<599.8?.0264:.0323),r=(e-501.1)*(e<501.1?.049:.0382);return.362*Math.exp(-.5*t*t)+1.056*Math.exp(-.5*a*a)-.065*Math.exp(-.5*r*r)}function i(e){var t=(e-568.8)*(e<568.8?.0213:.0247),a=(e-530.9)*(e<530.9?.0613:.0322);return.821*Math.exp(-.5*t*t)+.286*Math.exp(-.5*a*a)}function s(e){var t=(e-437)*(e<437?.0845:.0278),a=(e-459)*(e<459?.0385:.0725);return 1.217*Math.exp(-.5*t*t)+.681*Math.exp(-.5*a*a)}for(var c=this._data,o=new f.Vector2,l=new f.Vector2,m=new f.Vector2,p=new f.Vector2,h=new f.Vector2,u=new f.Vector2,d=new f.Vector2,x=new f.Vector2,v=new f.Vector2,y=new f.Vector2,g=new f.Vector2,M=new f.Vector2,b=1/(t*t),E=t*t/(a*a),_=0;_<r;++_){var w=_/r,O=Math.sqrt(1-b*(1-w*w)),j=Math.sqrt(1-E*(1-O*O)),F=2*t*e*O,I=2*Math.PI*F;this._fresnelRefl(1,t,w,O,p,o),h.x=1-p.x,h.y=1-p.y,l.x=Math.PI-o.x,l.y=Math.PI-o.y,this._fresnelRefl(t,a,O,j,u,m),d.x=Math.sqrt(u.x*p.x),d.y=Math.sqrt(u.y*p.y),x.x=Math.sqrt(h.x*h.x),x.y=Math.sqrt(h.y*h.y),v.x=h.x*h.x*u.x/(1-u.x*p.x),v.y=h.y*h.y*u.y/(1-u.y*p.y),y.x=d.x*d.x,y.y=d.y*d.y,g.x=p.x+v.x,g.y=p.y+v.y,M.x=v.x-x.x,M.y=v.y-x.y;for(var R=0,T=0,k=0,B=0,A=0,D=0,N=0;N<64;++N){var S=380+N/63*400,q=I/S,V=Math.cos(q+m.x+l.x),G=Math.cos(q+m.y+l.y),P=.5*(g.x+2*(d.x*V-y.x)/(1-2*d.x*V+y.x)*M.x+(g.y+2*(d.y*G-y.y)/(1-2*d.y*G+y.y)*M.y)),z=n(S),K=i(S),C=s(S);B+=z,A+=K,D+=C,R+=z*P,T+=K*P,k+=C*P}var L=3.2406*(R/=B)-1.5372*(T/=A)-.4986*(k/=D),U=-.9689*R+1.8758*T+.0415*k,W=.0557*R-.204*T+1.057*k;L=f.Math.clamp(L,0,1),U=f.Math.clamp(U,0,1),W=f.Math.clamp(W,0,1),L=Math.sqrt(L),U=Math.sqrt(U),W=Math.sqrt(W);var H=_<<2;c[H]=Math.floor(255*L),c[H+1]=Math.floor(255*U),c[H+2]=Math.floor(255*W),c[H+3]=255}this.needsUpdate=!0};var v,y,g,M,b,E={mirrors:[{args:[2.87483173052424,2.920755196190408,.05],position:[3.116376203948097,-2.1742814140991196,-7.998859699752443],rotation:[1.2536197471688286,-1.6683567077395978,-2.8428053193736256]},{args:[1.799233278635274,1.9642524560408021,.05],position:[-3.325473394997085,3.5307542721423446,-6.530151273151705],rotation:[1.3951213133257898,-.2888432911308304,.7178380971731012]},{args:[2.8780801433198553,2.9065216543855974,.05],position:[1.2839348832937714,2.888947614684322,-6.467835086028824],rotation:[-1.3341775957580109,2.8031736269533125,-.18771283594857274]},{args:[2.2175936863874006,1.3820832190972703,.05],position:[6.552400557892,.9814639517113943,-5.836395383986279],rotation:[-2.3299625953354437,.6139693063561498,-.3902201705507059]},{args:[1.7446126775638997,2.6211835436253392,.05],position:[-2.826056860647832,-3.0308788716782042,-5.4685371584057485],rotation:[-1.4052581815125296,3.002812728418492,2.54202362440499]},{args:[1.139549518339333,1.8007363020629232,.05],position:[-.041834072623521124,-1.351281881742426,-2.40411451302583],rotation:[1.284839439661856,-.310029190116405,-2.107987000676972]},{args:[2.2021865186914007,2.610358395964105,.05],position:[-4.154292737578202,-.349560252979882,-2.489538720961452],rotation:[1.4401104979160235,1.8179123712769851,-2.2157249608220475]},{args:[2.0964670262303393,1.5750930602784585,.05],position:[6.571372497652996,-2.6457284555412066,-6.252562745592483],rotation:[1.1870955922970219,.5335941225301444,.4523391139946649]},{args:[1.3270056676441064,1.5169873297208318,.05],position:[3.6761316187794724,-4.141729519755186,-4.39063863430271],rotation:[-.7690386626408349,1.4093151276977962,2.0252977680762476]},{args:[5.142610544045821,4.416201863189162,.05],position:[.646982562789564,7.09096733026142,-8.351518200349155],rotation:[-.0692356415822184,1.918047448701773,.5268942683942657]}]};Math.PI,Math.PI,Math.PI,Math.PI;function _(e){var t=e.layers,a=Object(m.a)(e,["layers"]),r=Object(n.useRef)();Object(n.useEffect)((function(){r.current.lookAt(0,0,0)}),[]);var s=h(t),o=h(t),l=h(t);return i.a.createElement("group",Object.assign({},a,{ref:r}),i.a.createElement(c.d,Object.assign({ref:s,name:"text-panna",position:g,depthTest:!1,"material-toneMapped":!1,"material-color":"#0B0D10"},v),"GET"),i.a.createElement(c.d,Object.assign({ref:o,name:"text-panna",position:M,depthTest:!1,"material-toneMapped":!1,"material-color":"#D0031B"},v),"READY"),i.a.createElement(c.d,Object.assign({ref:l,name:"text-panna",position:b,depthTest:!1,"material-toneMapped":!1,"material-color":"#0B0D10"},y),"For A New Experience In 2021"))}function w(e){var t=e.sideMaterial,a=e.reflectionMaterial,r=e.args,n=e.layers,o=Object(m.a)(e,["sideMaterial","reflectionMaterial","args","layers"]),l=h(n);return Object(s.e)((function(){l.current&&(l.current.rotation.y+=.001,l.current.rotation.z+=.01)})),i.a.createElement(c.a,Object.assign({},o,{ref:l,args:r,material:[t,t,t,t,a,a]}))}function O(e){var t=e.envMap,a=e.layers,r=Object(m.a)(e,["envMap","layers"]),c=Object(n.useState)(new x),o=Object(l.a)(c,1)[0],f=Object(s.g)(),p=Object(s.g)();return i.a.createElement("group",Object.assign({name:"mirrors"},r),i.a.createElement("meshLambertMaterial",{ref:f,map:o,color:"#D9D9D9",emissive:"#D9D9D9"}),i.a.createElement("meshLambertMaterial",{ref:p,map:o,envMap:t,reflectivity:"0.6",emissive:"#FFFFFF",color:"#FFFFFF"}),E.mirrors.map((function(e,t){return i.a.createElement(w,Object.assign({key:"mirror-".concat(t),layers:a},e,{name:"mirror-".concat(t),sideMaterial:f.current,reflectionMaterial:p.current}))})))}function j(e){var t=e.layers,a=Object(n.useMemo)((function(){return new f.IcosahedronGeometry(10).vertices}),[]);return i.a.createElement("group",{name:"titleCopies"},a.map((function(e,a){return i.a.createElement(_,{name:"titleCopy-"+a,position:e,layers:t})})))}window.matchMedia("(max-width: 500px)").matches?(v={fontSize:1.05,font:"./fonts/Shapiro/shapiro_95_super_wide-webfont.woff"},g=[-2.7,.8,0],M=[1.7,.8,0],y={fontSize:.6,font:"./fonts/Gopher/gopher-black-webfont.woff"},b=[0,0,0]):(v={fontSize:1.8,font:"./fonts/Shapiro/shapiro_95_super_wide-webfont.woff"},g=[-4.3,1.3,0],M=[3.1,1.3,0],y={fontSize:1,font:"./fonts/Gopher/gopher-black-webfont.woff"},b=[0,0,0]);var F,I=function(){var e=d(),t=Object(l.a)(e,2),a=t[0],r=t[1],n=p(),s=Object(c.e)("C8D1DC_575B62_818892_6E747B"),o=Object(l.a)(s,1)[0];return i.a.createElement(i.a.Fragment,null,i.a.createElement("group",{name:"sceneContainer",ref:n},i.a.createElement(c.c,{layers:[11],name:"background",args:[20,4,4],position:[0,0,-5]},i.a.createElement("meshMatcapMaterial",{matcap:o,side:f.BackSide,transparent:!0,opacity:.3,color:"#FFFFFF"})),i.a.createElement("cubeCamera",{layers:[11],name:"cubeCamera",ref:a,args:[.1,100,r],position:[0,0,5]}),i.a.createElement(_,{name:"title",position:[0,0,-10]}),i.a.createElement(j,{layers:[11]}),i.a.createElement(O,{layers:[0,11],envMap:r.texture})))},R=a(65),T=a.n(R),k=a(66),B=a.n(k),A=(a(90),window.matchMedia("(max-width: 500px)"));function D(){var e=Object(c.f)().progress;return i.a.createElement(c.b,{center:!0},i.a.createElement("div",{className:"loading"},i.a.createElement("div",{className:"loading__bar"},i.a.createElement("div",{style:{width:e+"%"}})),i.a.createElement("span",{style:{color:"#D0031B"}},e,"%")))}function N(e){return i.a.createElement(s.a,{concurrent:!0,shadowMap:!0,camera:{position:[0,0,5],fov:70}},i.a.createElement(n.Suspense,{fallback:i.a.createElement(D,null)},i.a.createElement(I,null)),i.a.createElement("ambientLight",{intensity:.4}))}function S(){return i.a.createElement(o.a,null,i.a.createElement("main",{style:{backgroundImage:"url(".concat(F,")")}},i.a.createElement("div",{className:"content"},i.a.createElement(N,{scene:1}))),i.a.createElement("div",{className:"ghw"},i.a.createElement("div",{className:"ghw__wrapper"},i.a.createElement("div",{className:"ghw__icon"},i.a.createElement("img",{alt:"GHW",src:"/ghw_icon.png"})),i.a.createElement("div",{className:"ghw__warning"},i.a.createElement("span",null,i.a.createElement("strong",null,"PERHATIAN: ")),"KARENA MEROKOK, SAYA TERKENA KANKER TENGGOROKAN. LAYANAN BERHENTI MEROKOK (0800-177-6565)"),i.a.createElement("div",{className:"ghw__icon18"},"18+"))))}F=A.matches?B.a:T.a,Object(r.render)(i.a.createElement(S,null),document.querySelector("#root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.17d82936.chunk.js.map