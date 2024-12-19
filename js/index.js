// declare the array with all the information of the boxes inside
const source = [
    {
        "type": "image",
        "icon": "ico-neve",
        "url": "images/gremlins.gif"
    },
    {
        "type": "image",
        "icon": "ico-albero",
        "url": "images/friends.gif"
    },
    {
        "type": "text",
        "icon": "ico-fiocco",
        "text": "Se fossi nato fra il 1647 al 1660 non avresti potuto festeggiare il Natale! In quegli anni fu bandito e cambiato in un giorno di digiuno."
    },
    {
        "type": "image",
        "icon": "ico-stella",
        "url": "images/homealone.gif"
    },
    {
        "type": "text",
        "icon": "ico-omino",
        "text": "La stella di Natale sembra una pianta tipicamente invernale, invece nasce come cespuglio nel caldo del Messico ed era conosciuta fin dai tempi degli Aztechi"
    },
    {
        "type": "image",
        "icon": "ico-stella",
        "url": "images/griffin.gif"
    },
    {
        "type": "text",
        "icon": "ico-pupazzo",
        "text": "Babbo Natale non ha sempre indossato abiti rossi!Lo sapevi che anni fa indossava il verde?"
    },
    {
        "type": "text",
        "icon": "ico-caramella",
        "text": "Jingle Bells, Jingle Bells: non mentire, l’hai letta cantando. Sapevi che la canzone più famosa del natale è anche stata la prima cantata nello spazio?"
    },
    {
        "type": "image",
        "icon": "ico-calza",
        "url": "images/skeleton.gif"
    },
    {
        "type": "text",
        "icon": "ico-pupazzo",
        "text": "Natale a Luglio? A Cuba è stato così per quasi 30 anni, fra il 1968 e il 1997: i festeggiamenti avvenivano in piena estate"
    },
    {
        "type": "text",
        "icon": "ico-fiocco",
        "text": "Oltre a Pasqua, anche Natale ha la sua isola: è Christmas Island nell’Oceano Indiano, scoperta il 25 dicembre 1643."
    },
    {
        "type": "text",
        "icon": "ico-fiocco",
        "text": "Anche Babbo Natale cede al lato oscuro della Forza. Il suo alter ego è Krampus, un demone che va alla ricerca di bambini cattivi."
    },
    {
        "type": "text",
        "icon": "ico-calza",
        "text": "Pensi di essere un campione seriale di regali? Beh, i francesi hanno regalato agli americani la Statua della Libertà in segno di amicizia nel Natale del 1883"
    },
    {
        "type": "image",
        "icon": "ico-stella",
        "url": "images/nightmare.gif"
    },
    {
        "type": "text",
        "icon": "ico-stella",
        "text": "In Svezia c’è una versione local di Babbo Natale: si chiama Tomte, è basso come un folletto e gira accompagnato da Yule, la sua capra"
    },
    {
        "type": "image",
        "icon": "ico-calza",
        "url": "images/grinch.gif"
    },
    {
        "type": "text",
        "icon": "ico-caramella",
        "text": "Anche tu addobbi l’albero solo da un lato?Chissà se lo fecero anche gli antichi Egizi quando nel loro equivalente del Natale addobbavano le Piramidi"
    },
    {
        "type": "text",
        "icon": "ico-omino",
        "text": "In Giappone il Natale è festeggiato come una sorta di San Valentino durante il quale solo le coppie si scambiano i doni"
    },
    {
        "type": "text",
        "icon": "ico-caramella",
        "text": "È tempo di panettone, ma da dove viene questo nome? È quello di un dolce, il Pan di Toni inventato dall’aiuto cuoco della famiglia Sforza"
    },
    {
        "type": "text",
        "icon": "ico-calza",
        "text": "Ma Babbo Natale abita in Puglia? Il nostro barbuto personaggio si ispira a San Nicola di Myra, un vescovo le cui spoglie sono custodite a Bari"
    },
    {
        "type": "image",
        "icon": "ico-caramella",
        "url": "images/poltrona.gif"
    },
    {
        "type": "image",
        "icon": "ico-caramella",
        "url": "images/spongebob.gif"
    },
    {
        "type": "image",
        "icon": "ico-neve",
        "url": "images/elf.gif"
    },
    {
        "type": "text",
        "icon": "ico-neve",
        "text": "Se pensi di non aver fritto abbastanza durante le scorse festività, ti sproniamo dicendo che in Polonia il pranzo natalizio è di 12 portate, una per ogni apostolo "
    },
    {
        "type": "image",
        "icon": "ico-caramella",
        "url": "images/dance.gif"
    }
];
// declare the variable to get the data from local storage
const openedBoxes = JSON.parse(localStorage.getItem('openedBoxes')) || [];
// take the components need from the dom
const calendar = document.getElementById('calendar');
const box = document.getElementsByClassName('box');
const overlay = document.getElementById('modal-overlay');
const modalBody = document.getElementById('modal-body');
const closeButton = document.querySelector('.close-btn');
const resetButton = document.getElementById('reset-button');

// create a function to generate the boxes
function generateCalendar() {
    for (let i = 1; i <= 25; i++) {
        // create the box
        const box = document.createElement('div');
        box.classList.add('box');

        // create the image element for the icon
        const icon = document.createElement("img");
        icon.classList.add("icon");
        icon.classList.add("pt-1");
        icon.src = `./images/icons/${source[i - 1].icon}.png`;
        icon.alt = i.icon;

        // create the span for the number
        const number = document.createElement("span");
        number.classList.add("number");
        number.textContent = i;

        // hang the icon and number elements on the box
        box.appendChild(icon);
        box.appendChild(number);

        // hang the box on the calendar
        calendar.appendChild(box);

        // if it is table number 25 add the last-box class
        if (i === 25) {
            box.classList.add('last-box');
        }

        // if the box has been opened add the opened class
        if (openedBoxes.includes(i)) {
            box.classList.add('opened');
        }

        // by clicking on the box open the modal
        box.addEventListener('click', () => {
            showModal(i - 1);
            // added opened class
            box.classList.add('opened');
            // if the box is not already opened add it to the localstorage array
            if (!openedBoxes.includes(i)) {
                openedBoxes.push(i);
            }
            // save array in localstorage
            localStorage.setItem('openedBoxes', JSON.stringify(openedBoxes))
        });
    }
}

// create the function to show the modal
function showModal(index) {
    const item = source[index];
    modalBody.innerHTML = '';

    // if the item type is an image create an img element
    if (item.type === "image") {
        const img = document.createElement("img");
        img.src = item.url;
        img.alt = "Random image";
        img.style.maxWidth = "100%";
        modalBody.appendChild(img);
    } else if (item.type === "text") { // otherwise create a p element
        const text = document.createElement("p");
        text.textContent = item.text;
        modalBody.appendChild(text);
    }

    // add the active class to the overlay
    overlay.classList.add("active");
};

// when click on the x remove the active class to close the modal
closeButton.addEventListener('click', () => {
    overlay.classList.remove('active');
});

// when clicking on the reset button delete the elements saved in the local storage
resetButton.addEventListener('click', () => {
    localStorage.removeItem('openedBoxes');

    // remove the opened class from all the boxes
    const allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach(box => box.classList.remove('opened'));
});

// generate the calendar
generateCalendar();