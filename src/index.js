
//Saving the body as a variable
// Using querySelector() vs getElementsByTagName() to return a single node rather than a collection.
const body = document.querySelector(`body`);

////////////////////
// BANNER SECTION //
////////////////////

// Creating the Banner at the top of the page
const headerBannerContainer = document.createElement(`div`);
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



