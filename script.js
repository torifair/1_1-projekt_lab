//Com1_2.1

const draggableElement = document.getElementById('ex3_element');
const containerOne = document.getElementById('ex3_one');
const containerTwo = document.getElementById('ex3_two');

if (draggableElement) {
    draggableElement.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.id);

        setTimeout(() => {
            event.target.style.opacity = '0.5';
        }, 0); 
    });

    draggableElement.addEventListener('dragend', (event) => {
        event.target.style.opacity = '1';
    });
}



function addDropHandlers(container) {
    if (!container) return;

    container.addEventListener('dragover', (event) => {
        event.preventDefault(); 
    });

    container.addEventListener('dragenter', (event) => {
        if (container.id === 'ex3_two') {
            event.target.style.border = '2px solid green';
        }
    });

    container.addEventListener('dragleave', (event) => {
        event.target.style.border = '2px dashed #ccc';
    });

    container.addEventListener('drop', (event) => {
        event.preventDefault(); 

        const data = event.dataTransfer.getData('text/plain'); 
        const elementToMove = document.getElementById(data); 

        if (container.id === 'ex3_two' && elementToMove) {
            container.appendChild(elementToMove); 
            console.log(`Przeniesiono element ${data} do ${container.id}`);
        } else if (container.id === 'ex3_one') {
             console.log('Powrót do kontenera źródłowego jest zablokowany.');
        }

        container.style.border = '2px dashed #ccc';
    });
}

addDropHandlers(containerOne);
addDropHandlers(containerTwo);