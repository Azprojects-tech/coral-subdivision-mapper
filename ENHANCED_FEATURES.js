//  JAVASCRIPT ENHANCEMENTS FOR NEXT PROJECT

// 1. DUAL MODE SYSTEM (Admin vs Customer)
function initUserMode() {
    const urlParams = new URLSearchParams(window.location.search);
    const isAdmin = urlParams.get('mode') === 'admin' || urlParams.get('admin') === 'true';
    
    if (!isAdmin) {
        document.body.classList.add('customer-mode');
        document.getElementById('adminPanel').style.display = 'none';
    }
    
    // Add mode toggle button
    const modeBtn = document.createElement('button');
    modeBtn.className = 'mode-toggle';
    modeBtn.textContent = isAdmin ? 'Admin Mode' : 'Customer Mode';
    modeBtn.onclick = () => {
        const newMode = isAdmin ? '' : '?mode=admin';
        window.location.search = newMode;
    };
    document.body.appendChild(modeBtn);
}

// 2. PARCEL NUMBERS DISPLAY
function addParcelNumbers() {
    parcels.forEach((parcel, index) => {
        const bounds = parcel.getBounds();
        const center = bounds.getCenter();
        
        const numberLabel = L.divIcon({
            className: 'parcel-label',
            html: <span></span>,
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });
        
        L.marker([center.lat, center.lng], { icon: numberLabel }).addTo(map);
    });
}

// 3. NAVIGATION INTEGRATION
function addNavigationButton() {
    const navBtn = document.createElement('button');
    navBtn.className = 'navigation-btn';
    navBtn.innerHTML = ' Get Directions';
    navBtn.onclick = openNavigation;
    document.body.appendChild(navBtn);
}

function openNavigation() {
    const siteCoords = "6.596,-7.531"; // Coral Estate coordinates
    const googleMapsUrl = https://maps.google.com/maps?daddr=&amp;ll=;
    window.open(googleMapsUrl, '_blank');
}

// 4. MOBILE-FRIENDLY STATUS PANEL
function makePanelMobileResponsive() {
    const statusPanel = document.getElementById('parcelStatus');
    if (window.innerWidth <= 768) {
        const header = document.createElement('div');
        header.className = 'parcel-status-header';
        header.textContent = 'Tap to expand';
        header.onclick = () => {
            statusPanel.classList.toggle('expanded');
        };
        statusPanel.prepend(header);
    }
}

// 5. POI MARKERS FOR NEIGHBORHOOD CONTEXT
const neighborhoodPOIs = [
    { name: "Local Market", lat: 6.5965, lng: 7.5315, type: "market" },
    { name: "Primary School", lat: 6.5955, lng: 7.5305, type: "school" },
    { name: "Health Center", lat: 6.5975, lng: 7.5325, type: "hospital" },
    { name: "Main Road", lat: 6.5960, lng: 7.5300, type: "road" }
];

function addNeighborhoodPOIs() {
    neighborhoodPOIs.forEach(poi => {
        const poiIcon = L.divIcon({
            className: 'poi-marker',
            html:  ,
            iconSize: [80, 25],
            iconAnchor: [40, 12]
        });
        
        L.marker([poi.lat, poi.lng], { icon: poiIcon })
         .bindPopup(<b></b><br>Type: )
         .addTo(map);
    });
}

// 6. SEARCH FUNCTIONALITY
function addSearchFunction() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search plot number...';
    searchInput.className = 'plot-search';
    searchInput.style.cssText = 
        position: fixed;
        top: 60px;
        left: 10px;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        z-index: 1000;
    ;
    
    searchInput.addEventListener('input', (e) => {
        const plotNumber = e.target.value;
        if (plotNumber && parcels[plotNumber - 1]) {
            map.setView(parcels[plotNumber - 1].getBounds().getCenter(), 18);
            parcels[plotNumber - 1].fire('click');
        }
    });
    
    document.body.appendChild(searchInput);
}

// Initialize all enhancements
document.addEventListener('DOMContentLoaded', function() {
    initUserMode();
    addParcelNumbers();
    addNavigationButton();
    makePanelMobileResponsive();
    addNeighborhoodPOIs();
    addSearchFunction();
});
