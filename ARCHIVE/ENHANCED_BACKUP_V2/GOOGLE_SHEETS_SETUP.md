# 📊 GOOGLE SHEETS INTEGRATION SETUP

## 🎯 Overview
This guide shows how to connect your Coral Gardens subdivision mapper to Google Sheets for real-time parcel status updates.

## 📋 STEP 1: Create Google Sheet

### Sheet Structure
Create a Google Sheet with the following columns:

| Column A | Column B | Column C |
|----------|----------|----------|
| ParcelID | Status | LastUpdated |
| P80 | available | 2025-08-27 |
| P79 | reserved | 2025-08-27 |
| P78 | sold | 2025-08-27 |
| P77 | available | 2025-08-27 |

### Sheet Name
Name the sheet tab: **ParcelStatus**

## 🔑 STEP 2: Get API Credentials

### Enable Google Sheets API
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create new project or select existing
3. Enable **Google Sheets API**
4. Create **API Key** credential
5. Restrict API key to **Google Sheets API only**

### Get Spreadsheet ID
From your Google Sheet URL:
`https://docs.google.com/spreadsheets/d/[SPREADSHEET_ID]/edit`

Copy the **SPREADSHEET_ID** part.

## ⚙️ STEP 3: Configure the Code

### Update Configuration in HTML file:
```javascript
const GOOGLE_SHEETS_CONFIG = {
    spreadsheetId: 'YOUR_ACTUAL_SPREADSHEET_ID_HERE',
    range: 'ParcelStatus!A2:C',
    apiKey: 'YOUR_ACTUAL_API_KEY_HERE'
};
```

### Set Client Password:
```javascript
const CLIENT_PASSWORD = 'your-secure-password-here';
```

## 🔄 STEP 4: How It Works

### For Clients (Jeff Realty):
1. **Click "👔 Client View"**
2. **Enter password** (azprojects2025)
3. **Auto-sync** with Google Sheets
4. **Admin panel** appears for parcel management
5. **Manual sync** button available
6. **Auto-sync every 5 minutes**

### For Customers:
1. **Default customer view** (no admin panel)
2. **Contact forms** work normally
3. **No ability** to change parcel status
4. **Real-time status** from Google Sheets

## 📱 MOBILE CONSIDERATIONS

### View Switching on Mobile:
- **View toggle** button in top-left
- **Responsive login** modal
- **Touch-friendly** interface
- **Admin panel** hidden in customer view

## 🛡️ SECURITY FEATURES

### Client Authentication:
- **Password protection** for admin features
- **Session-based** authentication
- **Automatic logout** when switching views
- **No admin access** in customer view

### API Security:
- **Restricted API key** (Google Sheets only)
- **Read-only access** to sheets
- **No sensitive data** in frontend code

## 📊 DATA FLOW

```
Google Sheets ↔️ Client View ↔️ Local Storage ↔️ Customer View
```

1. **Jeff updates** Google Sheet
2. **Client view syncs** with sheets
3. **Status updates** saved locally
4. **Customer sees** updated status
5. **Real-time** parcel availability

## 🔧 ADVANCED FEATURES

### Auto-Sync Options:
- **Manual sync** button for immediate updates
- **Auto-sync** every 5 minutes in client view
- **Sync indicator** shows status
- **Error handling** for failed syncs

### Status Validation:
- **Valid statuses**: available, reserved, sold
- **Case insensitive** matching
- **Error logging** for invalid data
- **Fallback** to local data

## 🎯 BUSINESS BENEFITS

### For Jeff Realty:
- ✅ **Real-time updates** from office/mobile
- ✅ **No technical knowledge** required
- ✅ **Google Sheets** familiar interface
- ✅ **Team collaboration** on status updates
- ✅ **Audit trail** with LastUpdated column

### For Customers:
- ✅ **Always current** parcel availability
- ✅ **Professional experience** 
- ✅ **No confusion** about status
- ✅ **Trust in accuracy**

## 🚀 DEPLOYMENT CHECKLIST

- [ ] Create Google Sheet with proper structure
- [ ] Enable Google Sheets API
- [ ] Get API key and spreadsheet ID
- [ ] Update configuration in code
- [ ] Set secure client password
- [ ] Test both customer and client views
- [ ] Verify sync functionality
- [ ] Deploy to production

## 📞 SUPPORT

**A&Z Projects Ltd**
- **Technical**: GitHub Copilot Assistant
- **Business**: info@azprojectsltd.com
- **Phone**: +234 806 808 6806

---
**Created**: August 27, 2025
**Version**: 2.0 with Dual-View System
