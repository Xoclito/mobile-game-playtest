/* Datos base del juego.
 * Extraídos sin modificar valores.
 * Debe cargarse antes del script principal.
 */
const EL={fire:{n:'Fuego',c:'#e0622a'},water:{n:'Agua',c:'#2f86d6'},grass:{n:'Hierba',c:'#3c9a3a'},light:{n:'Luz',c:'#cf9d08'},dark:{n:'Oscuridad',c:'#6b3fa0'}};
const ELK=['fire','water','grass','light','dark'];
const WORM={
fire:{n:'Gusano de Magma',body:'#ef8a4a',dark:'#6a2410',weak:'water',res:'grass'},
water:{n:'Gusano Abisal',body:'#5ba4e6',dark:'#163f6a',weak:'grass',res:'fire'},
grass:{n:'Gusano Musgo',body:'#79c060',dark:'#24501a',weak:'fire',res:'water'},
light:{n:'Gusano Solar',body:'#f2cf55',dark:'#6a4e06',weak:'dark',res:'light'},
dark:{n:'Gusano Sombra',body:'#9a6fd0',dark:'#2e1650',weak:'light',res:'dark'}
};
const PAT=['Rejilla','Ochos','Tejido','Trébol','Doble espiral','Remolino'];
const DIFF=[
{n:'Fácil',hp:1,sp:1,w:[62,26,10,2],coin:1},
{n:'Difícil',hp:4,sp:1.08,w:[50,30,14,6],coin:2},
{n:'Insano',hp:10,sp:1.16,w:[32,30,22,16],coin:3.5}
];
const RAR=[{n:'Básica',c:'#6f6f6f'},{n:'Media',c:'#2a8a43'},{n:'Rara',c:'#2a64c4'},{n:'Legendaria',c:'#c97a00'}];