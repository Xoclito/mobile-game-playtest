/* Progresión y economía: constantes estáticas extraídas del prototipo.
 * Cargado antes del script principal. No contiene lógica de juego.
 */

const CHEST_INT=3600e3,CHEST_MAX=8,UNLOCK_SH=10,AWK_SH=[10,20,35];
const RAR_UNL=[10,16,28,45],RAR_AWK=[1,1.3,1.7,2.2],RAR_DROP=[1,.6,.36,.145];
const unlCost=d=>RAR_UNL[d.rar|0],awkNeed=(d,st)=>Math.round(AWK_SH[st]*RAR_AWK[d.rar|0]);
const capLv=st=>10*(st+1);
const lvCost=lv=>Math.round(40*Math.pow(1.3,lv-1)*Math.pow(1.15,Math.max(0,lv-30)));
const awkCoins=st=>300*(st+1);

const CARPS=[['red','Alfombra roja','La alfombra básica del escuadrón',0,'Sin bonus'],
 ['blue','Alfombra del mar','Borlas doradas y olas bordadas',8,'+4% de daño'],
 ['green','Alfombra del bosque','Hojas y enredaderas',20,'+4% de cadencia'],
 ['gold','Alfombra dorada','Alas y destellos',45,'+10% de monedas al terminar'],
 ['purple','Alfombra mística','Luna y estrellas',90,'+6% de daño y +3% de cadencia'],
 ['legA','Alfombra celestial','Alas y cristal de estrellas',150,'+8% de daño y +5% de cadencia'],
 ['legB','Alfombra del Fénix','Llamas doradas y rubíes',240,'+12% de daño, +6% de cadencia y +10% de monedas']];
const CARP_B=[{},{dmg:.04},{rate:.04},{coin:.10},{dmg:.06,rate:.03},{dmg:.08,rate:.05},{dmg:.12,rate:.06,coin:.10}];
const CARP_AR={"red": 2.063, "blue": 1.884, "green": 1.825, "gold": 2.063, "purple": 1.933, "legA": 1.985, "legB": 1.825};
const carpOK=i=>progScore()>=CARPS[i][3];
const CARP_X=[[{dmg:.02},{rate:.03}],[{crit:.02},{dmg:.04}],[{hp:.10},{rate:.03}],[{coin:.05},{coin:.05}],[{dmg:.03},{rate:.03,crit:.02}],[{crit:.03,hp:.10},{dmg:.05}],[{dmg:.05},{coin:.10,rate:.04}]];
const CL_MAX=10,clLv=i=>(save.cl&&save.cl[i])||1,clCost=(i,l)=>Math.round(90*Math.pow(1.38,l)*(1+.2*i));
const clRank=l=>l>=7?3:l>=4?2:1,RANKN=['','I','II','III'];
const CARP_AB=[['Nada especial','+2% de daño','+3% de cadencia'],['Nada especial','+2% de crítico','+4% de daño'],['Nada especial','+10% de salud en la Frontera','+3% de cadencia'],['Nada especial','+5% de monedas','+5% de monedas'],['Nada especial','+3% de daño','+3% de cadencia y +2% de crítico'],['Nada especial','+3% de crítico y +10% de salud','+5% de daño'],['Nada especial','+5% de daño','+10% de monedas y +4% de cadencia']];
const carpBi=i=>{const b=CARP_B[i]||{},l=clLv(i),r=clRank(l),o={};
  for(const k in b)o[k]=(o[k]||0)+b[k]*(1+.1*(l-1));
  for(let q=2;q<=r;q++){const x=CARP_X[i][q-2];for(const k in x)o[k]=(o[k]||0)+x[k]}
  return o};
const carpB=()=>{const i=save.carpet||0;return carpOK(i)?carpBi(i):{}};

/* ================= Niveles y caminos ================= */
const HPB0=75,HPG0=1.15;
const HP_BASE=HPB0,HP_GROW=HPG0,TAIL=100,T_ARRIVE=270,FRZ_INT=20,FRZ_DUR=1.6,FRZ_BOOST=2.5;
const SEC=7;let HT=0;
const BP={get hp(){return this.sec.hp},set hp(v){this.sec.hp=v},get maxhp(){return this.sec.maxhp},set maxhp(v){this.sec.maxhp=v},get armor(){return this.sec.armor}};
/* Varios gusanos: el total de segmentos y premios se reparte entre ellos */
function nwFor(L,d){if(L<2||L%10===0)return 1;const b=[2,1,3,2,1][(L-2)%5];return Math.min(3,b+(d>=2&&L>=5&&b<3?1:0))}
const NW_SPLIT=[[1],[.5,.5],[.4,.33,.27]],NW_DELAY=[0,9,18];

const BOSS_INFO={shield:{n:'Escudo',d:'recibe 35% menos daño hasta que destruyas el 20% de sus segmentos',c:'#2a64c4'},regen:{n:'Regeneración',d:'los segmentos dañados que dejas de golpear recuperan vida',c:'#1d7a3e'},split:{n:'División',d:'al destruir la mitad, se parte en dos gusanos',c:'#7a2fb0'}};

const PORT_RATE=[.55,.30,.12,.03],PORT_SH=[3,4,6,10],PITY=50,TEN_COST=9;

