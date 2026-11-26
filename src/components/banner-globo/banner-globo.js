// Globo del banner «¿Y si quieres estudiar fuera?»: tierra en puntos sobre canvas (solo /home-v4/). Se carga al llegar a la sección.
import { geoOrthographic, geoPath, geoGraticule, geoInterpolate, geoDistance } from 'd3-geo';
import DOTS from './dots-globo.json';

const box=document.getElementById('globo'),cv=document.getElementById('cv'),ctx=cv.getContext('2d'),pinsEl=document.getElementById('pins'),hint=document.getElementById('hint');
const O={Madrid:[-3.70,40.42]};
const D=[['París',2.35,48.86,'Madrid','l'],['Berlín',13.4,52.52,'Madrid','r'],['Estocolmo',18.07,59.33,'Madrid','r'],['Nueva York',-74.0,40.71,'Madrid','r'],['Dubái',55.27,25.2,'Madrid','l']];
const proj=geoOrthographic().clipAngle(90).precision(.5);
const grat=geoGraticule().step([15,15])();
let W=0,R=0,dpr=1,minX=0,maxX=0;
const marco=box.parentElement;
function size(){const r=box.getBoundingClientRect();W=r.width;dpr=Math.min(2,window.devicePixelRatio||1);cv.width=W*dpr;cv.height=W*dpr;R=W/2-3;proj.scale(R).translate([W/2,W/2]);const m=marco.getBoundingClientRect();minX=Math.max(0,m.left-r.left);maxX=Math.min(W,m.right-r.left);}
const pins=[];
function mk(cls,label,dir){const e=document.createElement('div');e.className='ng-pin '+cls;e.innerHTML='<i></i>'+(label?'<b class="'+dir+'">'+label+'</b>':'');pinsEl.appendChild(e);return e}
Object.keys(O).forEach(n=>pins.push({ll:O[n],dir:'r',el:mk(n==='Madrid'?'o tu':'o',n==='Madrid'?'Tú · España':'', 'r')}));
D.forEach(d=>pins.push({ll:[d[1],d[2]],dir:d[4],el:mk(d[0]==='Dublín'?'sm du':d[0]==='París'?'pa':d[0]==='Nueva York'?'ny':'',d[4]?d[0]:'',d[4])}));
const arcs=D.map(d=>geoInterpolate(O[d[3]],[d[1],d[2]]));
const base=[0,-44];let rot=[base[0],base[1]],drag=null,prog=0,t0=null,idle=0,visible=true,last=performance.now();
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
function frontness(ll){const r=proj.rotate();return Math.cos(geoDistance(ll,[-r[0],-r[1]]))}
function draw(){
 ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,W,W);proj.rotate(rot);
 const c=W/2;const g=ctx.createRadialGradient(c-R*.35,c-R*.45,R*.05,c,c,R);g.addColorStop(0,'#131110');g.addColorStop(1,'#131110');
 ctx.beginPath();ctx.arc(c,c,R,0,Math.PI*2);ctx.fillStyle=g;ctx.fill();
 const path=geoPath(proj,ctx);
 ctx.beginPath();path(grat);ctx.strokeStyle='rgba(246,241,232,.07)';ctx.lineWidth=.8;ctx.stroke();
 for(const p of DOTS){const f=frontness(p);if(f<=0.02)continue;const xy=proj(p);ctx.fillStyle='rgba(246,241,232,'+(0.22+0.6*f).toFixed(3)+')';const s=Math.max(1.1,(0.9+1.0*f)*(R/250));ctx.beginPath();ctx.arc(xy[0],xy[1],s/2,0,6.2832);ctx.fill();}
 ctx.beginPath();ctx.arc(c,c,R,0,Math.PI*2);ctx.strokeStyle='rgba(246,241,232,.32)';ctx.lineWidth=1;ctx.stroke();
 ctx.setLineDash([3,4]);ctx.lineWidth=1.1;
 arcs.forEach((ip,i)=>{const pr=Math.max(0,Math.min(1,prog*1.4-i*0.06));if(pr<=0)return;const n=40,pts=[];for(let k=0;k<=n*pr;k++)pts.push(ip(k/n));if(pts.length<2)return;ctx.beginPath();path({type:'LineString',coordinates:pts});ctx.strokeStyle='rgba(246,241,232,.75)';ctx.stroke();});
 ctx.setLineDash([]);
 pins.forEach(p=>{const f=frontness(p.ll);if(f<=0.05){p.el.style.display='none';return}const xy=proj(p.ll);p.el.style.display='';p.el.style.transform='translate('+xy[0].toFixed(1)+'px,'+xy[1].toFixed(1)+'px)';p.el.style.opacity=Math.min(1,(f-0.05)*5).toFixed(2);const b=p.el.querySelector('b');if(b&&!b.classList.contains('b')){const w=b.offsetWidth+18;let left=p.dir==='l';if(!left&&xy[0]+w>maxX)left=true;if(left&&xy[0]-w<minX)left=false;b.classList.toggle('l',left);b.classList.toggle('r',!left)}});
}
function loop(now){const dt=Math.min(50,now-last);last=now;
 if(visible){if(t0===null)t0=now;prog=reduce?1:Math.min(1,(now-t0)/2600);
  if(!drag&&!reduce){idle+=dt;if(idle>1200){const tg0=base[0]+Math.sin(now/4200)*14,tg1=base[1];rot[0]+=(tg0-rot[0])*0.025;rot[1]+=(tg1-rot[1])*0.025;}}
  draw();}
 requestAnimationFrame(loop)}
box.addEventListener('pointerdown',e=>{drag={x:e.clientX,y:e.clientY,r:rot.slice()};box.setPointerCapture(e.pointerId);box.classList.add('drag');hint.classList.add('off')});
box.addEventListener('pointermove',e=>{if(!drag)return;const k=90/R;rot=[drag.r[0]+(e.clientX-drag.x)*k,Math.max(-60,Math.min(10,drag.r[1]-(e.clientY-drag.y)*k))];idle=0});
const end=()=>{drag=null;box.classList.remove('drag')};box.addEventListener('pointerup',end);box.addEventListener('pointercancel',end);
box.tabIndex=0;box.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();rot[0]+=e.key==='ArrowRight'?10:-10;idle=0;hint.classList.add('off')}});
new IntersectionObserver(es=>es.forEach(en=>{visible=en.isIntersecting}),{rootMargin:'100px'}).observe(box);
size();addEventListener('resize',()=>{size();draw()});
// El globo cambia de tamaño también sin redimensionar la ventana (fuentes, estilos): recolocar puntos y nombres
if('ResizeObserver' in window){const ro=new ResizeObserver(()=>{size();draw()});ro.observe(marco);ro.observe(box);}
draw();requestAnimationFrame(loop);
