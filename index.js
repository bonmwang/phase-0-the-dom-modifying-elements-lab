// Remove the <main> element with id 'main'
const mainElement = document.getElementById('main');
if (mainElement) {
    mainElement.remove();
}

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the id attribute of the newHeader to 'victory'
newHeader.id = 'victory';

// Set the text content of the newHeader to "YOUR-NAME is the champion"
newHeader.textContent = "Boniface Mwangi is the champion"; //Reaplce YOUR-NAME with your actual name

// Append teh newHeader to the body (or any other desired location)
document.body.appendChidl(newHeader);