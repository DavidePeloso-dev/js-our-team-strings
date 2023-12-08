const team = [
    'Davide Peloso',
    'Carlotta Mazzariol',
    'Enrico Zonta',
    'Sara Fiorini',
    'Daniele Conti',
    'Giovanni Furlan'
];

const rowTeamEl = document.getElementById('wrapper_team');
const addMemberForm = document.getElementById('addMember_form');

addMemberForm.addEventListener('submit', function(e){
    e.preventDefault()
    const newMember = document.getElementById('member');
    if(!(newMember.value === "")){
        team.push(newMember.value)
        newMember.value = ""
        rowTeamEl.innerHTML = ""
        printElList(team, rowTeamEl)
    }
});


printElList(team, rowTeamEl)


/**
 * ## Print array's elements in the DOM
 * @param {Array} array Insert an Array
 * @param {HTMLElement} DomEl Insert a DOM element
 */
function printElList(array,DomEl){
for (let i = 0; i < array.length; i++){
    const member = array[i];
    generateCardEl(DomEl, member)
}}


/**
 * ## Generate a HTML Card element
 * @param {HTMLElement} htmlEl insert the Html element you want to append the card
 * @param {'string'} cardTitle insert a string for the card title 
 */
function generateCardEl(htmlEl, cardTitle){
    const colEl = document.createElement('div');
    colEl.classList.add('col', 'p-2');
    console.log(colEl);
    const cardEl = document.createElement('div');
    cardEl.classList.add('card');
    const title = document.createElement('h3');
    title.innerText = cardTitle;
    cardEl.append(title);
    colEl.append(cardEl);
    console.log(colEl);
    htmlEl.insertAdjacentElement("beforeend", colEl);

    cardEl.addEventListener('click', function(){
        this.classList.toggle('bg-primary');
        this.classList.toggle('text-white');
    });
};