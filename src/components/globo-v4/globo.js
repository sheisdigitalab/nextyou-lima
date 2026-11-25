// Globo interactivo. Requiere el paquete npm d3-geo (solo estas 4 funciones).
import { geoOrthographic, geoPath, geoGraticule, geoDistance } from 'd3-geo';
import WORLD from './world-lite2.json';

(function(){
var mod=document.getElementById('globoI');if(!mod)return;
var started=false;
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting&&!started){started=true;init();}visible=e.isIntersecting;});},{rootMargin:'200px'});
var visible=false;io.observe(mod);
function init(){
var W=WORLD;
function $(id){return document.getElementById(id+'I');}
var R=1200,CX=700,CY=1230,base=[-4,17];
var proj=geoOrthographic().scale(R).translate([CX,CY]).clipAngle(90).precision(0.6);
var path=geoPath(proj);
var es={type:'FeatureCollection',features:W.features.filter(function(f){return f.id==='724'})};
var rest={type:'FeatureCollection',features:W.features.filter(function(f){return f.id!=='724'})};
var grat=geoGraticule().step([15,15])();
var O={'Madrid':[-3.70,40.42],'Barcelona':[2.17,41.39],'Sevilla':[-5.98,37.39],'Valencia':[-0.38,39.47],'Bilbao':[-2.93,43.26]};
var D=[['Lisboa',-9.14,38.72,'Sevilla',1],['Dublín',-6.26,53.35,'Bilbao',1],['París',2.35,48.86,'Madrid',1],['Berlín',13.4,52.52,'Barcelona',1],['Milán',9.19,45.46,'Barcelona',0],['Estocolmo',18.07,59.33,'Madrid',0],['Nueva York',-74.0,40.71,'Madrid',1],['Dubái',55.27,25.2,'Valencia',1]];
var mobile=matchMedia('(max-width:760px)').matches;
var ns='http://www.w3.org/2000/svg',pinsG=$('gPins'),rtG=$('gRt'),tu=$('gTu');
var LS=mobile?20:11;var svgI=$('gsvg');var vbL=0;function upVb(){var r=svgI.getBoundingClientRect(),c=svgI.closest('.gband').getBoundingClientRect(),vb=svgI.viewBox.baseVal,s=Math.max(r.width/vb.width,r.height/vb.height);var x0=r.left+(r.width-vb.width*s)/2;vbL=vb.x+(Math.max(c.left,r.left)-x0)/s;}upVb();addEventListener('resize',upVb);
var origins=Object.keys(O).map(function(n){var g=document.createElementNS(ns,'g');g.setAttribute('class','pin orig');g.innerHTML='<circle class="glow" r="9"/><circle r="'+(mobile?5:3)+'"/>';pinsG.appendChild(g);return {g:g,c:O[n]};});
var dests=D.map(function(d){var g=document.createElementNS(ns,'g');g.setAttribute('class','pin');var show=!mobile||d[4];var tw=d[0].length*LS*0.6+LS*1.4,th=LS*2;
 g.innerHTML='<circle r="'+(mobile?6:3.5)+'"/>'+(show?'<g class="lb"><rect width="'+tw+'" height="'+th+'" rx="'+th/2+'"/><text x="'+tw/2+'" y="'+th*0.69+'" style="font-size:'+LS+'px">'+d[0]+'</text></g>':'');pinsG.appendChild(g);return {g:g,d:d,tw:tw,th:th};});
var routes=D.map(function(d){var p=document.createElementNS(ns,'path');rtG.appendChild(p);return {el:p,geo:{type:'LineString',coordinates:[O[d[3]],[d[1],d[2]]]}};});
var rot=20,vel=0,tilt=0,reveal=0,dragging=false,lastX=0,lastT=0,idle=0;
function vis(ll){var r=proj.rotate();return geoDistance(ll,[-r[0],-r[1]])<Math.PI/2-0.02;}
function inView(xy){return xy[1]>-10&&xy[1]<400&&xy[0]>vbL+6&&xy[0]<1400-vbL-6;}
function draw(){
 proj.rotate([base[0]+rot,base[1]+tilt]);
 $('gEu').setAttribute('d',path(rest));$('gEs').setAttribute('d',path(es));$('gGrat').setAttribute('d',path(grat));
 origins.forEach(function(o){var xy=proj(o.c),v=vis(o.c)&&inView(xy);o.g.style.display=v?'':'none';if(v){o.g.querySelectorAll('circle').forEach(function(c){c.setAttribute('cx',xy[0]);c.setAttribute('cy',xy[1]);});o.g.querySelector('.glow').style.opacity=reveal*0.9;}});
 dests.forEach(function(p){var ll=[p.d[1],p.d[2]],xy=proj(ll),v=vis(ll)&&inView(xy);p.g.style.display=v?'':'none';if(v){var c=p.g.querySelector('circle');c.setAttribute('cx',xy[0]);c.setAttribute('cy',xy[1]);var lb=p.g.querySelector('.lb');if(lb){var lx=(p.d[0]==='Lisboa'||p.d[0]==='Dublín')?xy[0]-p.tw-8:xy[0]+8;if(lx<vbL+6)lx=xy[0]+8;lb.setAttribute('transform','translate('+lx+','+(xy[1]-p.th/2)+')');}}});
 routes.forEach(function(r,i){var d=path(r.geo)||'';r.el.setAttribute('d',d);if(!d)return;var L=r.el.getTotalLength(),pr=Math.max(0,Math.min(1,reveal*1.5-i*0.06));r.el.style.strokeDasharray=L+' '+L;r.el.style.strokeDashoffset=String(L*(1-pr));});
 var m=proj([-3.4,40.0]);if(vis([-3.4,40.0])&&inView(m)){tu.setAttribute('transform','translate('+Math.round(m[0])+','+Math.round(m[1]-(mobile?60:40))+')');tu.style.display='';}else tu.style.display='none';
 tu.setAttribute('opacity',Math.min(1,reveal*1.4));
}
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
var band=mod.querySelector('.gband');band.style.touchAction='pan-y';
band.addEventListener('pointerdown',function(e){dragging=true;lastX=e.clientX;lastT=performance.now();vel=0;band.setPointerCapture(e.pointerId);band.classList.add('drag');document.getElementById('hintI').classList.add('off');});
band.addEventListener('pointermove',function(e){if(!dragging)return;var w=band.getBoundingClientRect().width,dx=e.clientX-lastX,now=performance.now();var dd=dx/w*120;rot+=dd;vel=dd/Math.max(16,now-lastT)*16;lastX=e.clientX;lastT=now;idle=0;rot=Math.max(-150,Math.min(150,rot));});
function end(){dragging=false;band.classList.remove('drag');}
band.addEventListener('pointerup',end);band.addEventListener('pointercancel',end);band.tabIndex=0;band.addEventListener('keydown',function(e){if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();vel=0;idle=0;rot=Math.max(-150,Math.min(150,rot+(e.key==='ArrowRight'?-12:12)));document.getElementById('hintI').classList.add('off');if(reduce)draw();}});
var t0=null;
function loop(now){
 if(!visible){requestAnimationFrame(loop);return;}
 if(t0===null)t0=now;var t=(now-t0)/1000;
 if(t<2.2&&!dragging){rot=20*(1-ease(t/2.2));}
 reveal=Math.min(1,t/2.4);
 if(!dragging&&t>2.2){rot+=vel;vel*=0.94;rot=Math.max(-150,Math.min(150,rot));if(Math.abs(vel)<0.02){idle+=1/60;if(idle>4){rot+=(0-rot)*0.02;}}else idle=0;}
 draw();requestAnimationFrame(loop);
}
function ease(x){x=Math.min(1,x);return 1-Math.pow(1-x,3);}
if(reduce){rot=0;reveal=1;draw();band.addEventListener('pointermove',function(){if(dragging)draw();});}else requestAnimationFrame(loop);
}
})();
