#  Coral Subdivision Interactive Mapper

**Real Estate Subdivision Management System**

##  Project Overview

This is a professional web-based subdivision mapping tool designed for **Jeff Realty / Coral Ogbeke** to showcase and manage parcel availability in the Coral Subdivision project. The system allows real estate professionals to easily update parcel statuses and share specific locations with potential buyers.

##  Features

###  Core Functionality
- **Interactive Map Display** - Toggle between Map and Satellite views
- **Parcel Management** - Visual representation of all 82+ subdivision parcels
- **Status System** - Color-coded parcel availability (Available/Reserved/Sold)
- **GPS Integration** - "My Location" feature for on-site navigation
- **Shareable Links** - Direct URLs to specific parcels
- **Mobile Responsive** - Optimized for desktop, tablet, and mobile devices

###  User-Friendly Admin Panel
- **Simple Dropdown Interface** - No technical skills required
- **Real-time Updates** - Instant visual feedback on status changes
- **Local Storage** - Changes persist between browser sessions

###  Client Features
- **Easy Navigation** - Click parcels for detailed information
- **GPS Coordinates** - Exact location data for site visits
- **Professional UI** - Modern, branded interface

##  File Structure

```
subdivision-mapper/
 README.md                    # This documentation file
 subdivision-viewer.html      # Main application (standalone)
 Coral_Parcels.geojson       # Original parcel data
 DEPLOYMENT_GUIDE.md         # Hosting instructions
 TECHNICAL_SPECS.md          # Technical documentation
 backup/                     # Project backups
     index.html              # Alternative version
     package.json            # Node.js dependencies
     server.js               # Backend server (optional)
```

##  Quick Start

### Option 1: Immediate Use (Recommended)
1. Open `subdivision-viewer.html` in any modern web browser
2. The map will load automatically with all parcel data
3. Use the Admin Panel to update parcel statuses
4. Share the file or upload to web hosting

### Option 2: Web Hosting
1. Upload `subdivision-viewer.html` to your web server
2. Access via your domain URL
3. Share links with clients and stakeholders

##  Technical Information

- **Technology:** HTML5, CSS3, JavaScript, Leaflet.js
- **Map Provider:** OpenStreetMap + Esri Satellite
- **Data Format:** GeoJSON (EPSG:32632 coordinate system)
- **Browser Support:** All modern browsers (Chrome, Firefox, Safari, Edge)
- **Mobile Support:** Fully responsive design

**Project Created:** August 23, 2025  
**Client:** Jeff Realty / Coral Ogbeke  

---

** Goal Achieved:** Professional subdivision mapping tool ready for client presentation!
