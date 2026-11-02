
document.addEventListener("DOMContentLoaded", () => {
    const accordionButtons = document.querySelectorAll(".view-details-btn");
    accordionButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const extraDetails = btn.nextElementSibling;
            if (extraDetails && extraDetails.classList.contains("details-panel")) {
                extraDetails.classList.toggle("active");
                btn.textContent = extraDetails.classList.contains("active") ? "Hide Details" : "View Details";
            }
        });
    });
});

function filterProducts() {
    const searchBar = document.getElementById("productSearch");
    if (!searchBar) return;
    
    const filterValue = searchBar.value.toLowerCase();
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        const titleText = card.querySelector("h3").textContent.toLowerCase();
        if (titleText.includes(filterValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

window.addEventListener("load", () => {
    if (document.getElementById("map")) {
        
        const map = L.map('map').setView([-26.143, 28.046], 11); 

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        L.marker([-26.143, 28.046]).addTo(map)
            .bindPopup('<b>WEDE5020 Showcase Boutique</b><br>Premium Selection.')
            .openPopup();
    }
});


const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        event.preventDefault();
        const userEmail = document.getElementById("contactEmail").value;
        
        if (!userEmail.includes("@")) {
            alert("Please supply a grammatically sound email string.");
            return;
        }

        console.log("Processing AJAX request data stream asynchronously...");
        document.getElementById("contactResponse").innerText = "Thank you. Your message compiled successfully.";
        contactForm.reset();
    });
}

const enquiryForm = document.getElementById("enquiryForm");
if (enquiryForm) {
    enquiryForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("clientName").value;
        const type = document.getElementById("itemType").value;
        const qty = parseInt(document.getElementById("quantity").value);
        const hasEngraving = document.getElementById("engraving").checked;

        let basePrice = 0;
        if (type === "earrings") basePrice = 450;
        if (type === "necklace") basePrice = 1200;
        if (type === "ring") basePrice = 850;

        let total = basePrice * qty;
        if (hasEngraving) total += (150 * qty);

    
        const responseBox = document.getElementById("enquiryResponse");
        responseBox.innerHTML = `
            <h3>Enquiry Quote Summary</h3>
            <p>Hello <b>${name}</b>, your customized estimate for ${qty} item(s) comes to a total of <b>R${total}.00</b>.</p>
            <p>Our sales consultants will review this data stream shortly.</p>
        `;
    });
}