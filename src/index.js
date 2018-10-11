
//Saving the body as a variable
// Using querySelector() vs getElementsByTagName() to return a single node rather than a collection.
const body = document.querySelector(`body`);

////////////////////
// BANNER SECTION //
////////////////////

// Creating the Banner at the top of the page
const headerBannerContainer = document.createElement(`header`);
// Setting the id attribute of the banner for styling purposes
headerBannerContainer.id = `headerBannerContainer`;
// Attaching the banner to the body element
body.appendChild(headerBannerContainer);

// Creating Banner Links Container
const bannerLinkContainer = document.createElement(`div`);
bannerLinkContainer.id = `bannerLinkContainer`;
headerBannerContainer.appendChild(bannerLinkContainer);

// Creating a Dealers and Distributors Link Container
const dealersAndDistributorsContainer = document.createElement(`div`);
dealersAndDistributorsContainer.className = `bannerLinkIndividual`;
bannerLinkContainer.appendChild(dealersAndDistributorsContainer);

// Creating a Commercial Service Link Container
const commerialServiceContainer = document.createElement(`div`);
commerialServiceContainer.className = `bannerLinkIndividual`;
bannerLinkContainer.appendChild(commerialServiceContainer);

// Adding anchor tag to the dealersAndDistributorsContainer
const dealersAndDistributorsLink = document.createElement(`a`);
dealersAndDistributorsLink.className = `bannerLinkActual`;
dealersAndDistributorsLink.textContent = `Dealers and Distributors`;
dealersAndDistributorsLink.setAttribute(`href`, `#`);
dealersAndDistributorsContainer.appendChild(dealersAndDistributorsLink);

// Adding anchor tag to the commercialServiceContainer

//DEVNOTE: Remember to have this open in new tab or window
//DEVNOTE: Change Font type for both links
const commercialServiceLink = document.createElement(`a`);
commercialServiceLink.className = `bannerLinkActual`;
commercialServiceLink.textContent = `Commercial Service`;
commercialServiceLink.setAttribute(`href`, `#`);
commerialServiceContainer.appendChild(commercialServiceLink);

// adding Icon to commercialServiceLink Container
const commercialServiceLinkIcon = document.createElement(`img`);
commercialServiceLinkIcon.id = `commercialServiceLinkIcon`;
commercialServiceLinkIcon.setAttribute(`src`, `../public/assets/images/action-commercial-icon.png`);
commerialServiceContainer.appendChild(commercialServiceLinkIcon);


////////////////////
// HEADER SECTION //
////////////////////

// Creating the Header Menu Container
const headerMenuConatiner = document.createElement(`nav`);
// Assigning a value to the ID attribute
headerMenuConatiner.id = `headerMenuConainer`;
//Attaching Header Menu Container to body after Banner.
headerBannerContainer.insertAdjacentElement(`afterend`, headerMenuConatiner);


// Creating the Logo Image Container
const logoImageContainer = document.createElement(`div`);
logoImageContainer.id = `logoImageContainer`;
// Appending the Logo Image Container to the Header Menu Container
headerMenuConatiner.appendChild(logoImageContainer);

//Creating Image Element for Logo
const logoActual = document.createElement(`img`);
logoActual.id = `logoActual`;
logoActual.setAttribute(`src`, `../public/assets/images/pool-pros-logo.png`);
logoImageContainer.appendChild(logoActual);

//Creating Header Link Container
const headerLinkContainer = document.createElement(`div`);
headerLinkContainer.id = `headerLinkContainer`;
// Appending the Header Link Container to the Header after the Logo
logoImageContainer.insertAdjacentElement(`afterend`, headerLinkContainer);


const createLinkTags = () => {
	const linkValues = [`Pools & Spas`, `Supplies`, `Resources`, `Services`];

	linkValues.forEach((value) => {
		const linkContainer = document.createElement(`div`);
		linkContainer.className = `headerLinkActualContain`;
		const trimmedValue = value.replace(/[^a-zA-Z]/g, "").toLocaleLowerCase();
		linkContainer.id = `${trimmedValue}-link-container`;
		headerLinkContainer.appendChild(linkContainer);
		const linkActual = document.createElement(`a`);
		linkActual.textContent = value;
		linkActual.className = `headerLinkActual`;
		linkActual.id = `${trimmedValue}-link`
		linkActual.setAttribute(`href`, `#`)
		linkContainer.appendChild(linkActual);
	});
}

createLinkTags();

// Creating the Find a Pool Pro Button Container
const findAPoolButtonContainer = document.createElement(`div`);
findAPoolButtonContainer.id = `findAPoolButtonContainer`;
headerLinkContainer.insertAdjacentElement(`afterend`, findAPoolButtonContainer);

// Creating the Find a Pool Pro Button
const findAPoolProButton = document.createElement(`button`);
findAPoolProButton.id = `findAPoolButton`;
// findAPoolProButton.textContent = `Find a Pool Pro`
const findAPoolProLeft = document.createElement(`div`);
findAPoolProLeft.id = `findAPoolProLeft`;
findAPoolProButton.appendChild(findAPoolProLeft);
const findAPoolProRight = document.createElement(`div`);
findAPoolProRight.id = `findAPoolProRight`;
findAPoolProLeft.insertAdjacentElement(`afterEnd`, findAPoolProRight);

findAPoolButtonContainer.appendChild(findAPoolProButton);

// Creating an element for Icon in Pool Pro Button
const poolProButtonIcon = document.createElement(`img`);
poolProButtonIcon.id = `poolProButtonIcon`;
poolProButtonIcon.setAttribute(`src`, `../public/assets/images/location-icon.png`);
findAPoolProLeft.appendChild(poolProButtonIcon);

// Creating Text Content for the Find a Pool Pro Button
var windowWidth = window.outerWidth;
findAPoolProRight.textContent = (windowWidth <= 900 ? `Find a Pro` : `Find a Pool Pro`);

//Creating Toggle for Pool Pro Button Text Content
window.addEventListener(`resize`, (e) => {
	if (e.target.outerWidth <= 900) {
		findAPoolProRight.textContent = `Find a Pro`;
	} else {
		findAPoolProRight.textContent = `Find a Pool Pro`;
	}
});



///////////////////////////
// WATER IMAGE CONTAINER //
///////////////////////////

// Creating Water Image Container
const waterSectionContainer = document.createElement(`section`);
waterSectionContainer.id = `waterSectionContainer`;
headerMenuConatiner.insertAdjacentElement(`afterend`, waterSectionContainer);

// Creating a Container for the water Image
const waterImageContainer = document.createElement(`div`);
waterImageContainer.id = `waterImageContainer`;
waterSectionContainer.appendChild(waterImageContainer);

// Creating an Image element for the water image
const waterImageActual = document.createElement(`img`);
waterImageActual.id = `waterImageActual`;
waterImageActual.setAttribute(`src`, `../public/assets/images/water-image.png`);
waterImageContainer.appendChild(waterImageActual);












console.dir(document)
console.log(document.body)






//DEVNOTE: Change all Attribute values to Kebab Case
//DEVNOTE: Add alt to all images
//DEVNOTE: Change all Font Familys to the correct fonts
