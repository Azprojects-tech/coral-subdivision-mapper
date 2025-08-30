# 🔧 Google Sheets Integration Setup Guide

## Overview
This guide will help you set up real-time parcel status synchronization between your Coral Gardens Estate mapper and Google Sheets.

## Step 1: Create Your Google Sheet

1. **Create a new Google Sheet** at https://sheets.google.com
2. **Name it**: "Coral Gardens Parcel Status"
3. **Create the following structure** in Sheet1:

| A (ParcelID) | B (Status) | C (LastUpdated) |
|--------------|------------|-----------------|
| P001         | available  | 2025-08-27      |
| P002         | sold       | 2025-08-27      |
| P003         | reserved   | 2025-08-27      |
| P004         | available  | 2025-08-27      |

## Step 2: Get Your Spreadsheet ID

1. Open your Google Sheet
2. Look at the URL: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit#gid=0`
3. Copy the `SPREADSHEET_ID` part
4. Example: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

## Step 3: Get Google Sheets API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the **Google Sheets API**
4. Go to **Credentials** > **Create Credentials** > **API Key**
5. Copy your API key
6. **Restrict the key** to Google Sheets API only (recommended)

## Step 4: Make Your Sheet Public (Option 1 - Easiest)

1. Click **Share** button in your Google Sheet
2. Change access to **"Anyone with the link can view"**
3. Make sure it's set to **"Viewer"** access

## Step 5: Update Your Code Configuration

Replace these values in your `coral-gardens.html` file:

```javascript
const GOOGLE_SHEETS_CONFIG = {
    spreadsheetId: 'YOUR_ACTUAL_SPREADSHEET_ID_HERE',
    range: 'Sheet1!A2:C', // Adjust if you named your sheet differently
    apiKey: 'YOUR_ACTUAL_API_KEY_HERE',
    sheetUrl: 'https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/edit#gid=0'
};
```

## Step 6: Test the Integration

1. Deploy your updated code
2. Login to client view with password: `azprojects2025`
3. Click **"Sync with Google Sheets"** button
4. You should see: "✅ Synced X parcels from Google Sheets"

## Parcel Status Values

Use only these status values in your Google Sheet:
- `available` - Green color on map
- `reserved` - Yellow color on map  
- `sold` - Red color on map

## Sample Data for All Parcels

Here's the complete list for copy-paste into your Google Sheet:

```
P001,available,2025-08-27
P002,available,2025-08-27
P003,available,2025-08-27
P004,available,2025-08-27
P005,available,2025-08-27
P006,available,2025-08-27
P007,available,2025-08-27
P008,available,2025-08-27
P009,available,2025-08-27
P010,available,2025-08-27
P011,available,2025-08-27
P012,available,2025-08-27
P013,available,2025-08-27
P014,available,2025-08-27
P015,available,2025-08-27
P016,available,2025-08-27
P017,available,2025-08-27
P018,available,2025-08-27
P019,available,2025-08-27
P020,available,2025-08-27
P021,available,2025-08-27
P022,available,2025-08-27
P023,available,2025-08-27
P024,available,2025-08-27
P025,available,2025-08-27
P026,available,2025-08-27
P027,available,2025-08-27
P028,available,2025-08-27
P029,available,2025-08-27
P030,available,2025-08-27
P031,available,2025-08-27
P032,available,2025-08-27
P033,available,2025-08-27
P034,available,2025-08-27
P035,available,2025-08-27
P036,available,2025-08-27
P037,available,2025-08-27
P038,available,2025-08-27
P039,available,2025-08-27
P040,available,2025-08-27
P041,available,2025-08-27
P042,available,2025-08-27
P043,available,2025-08-27
P044,available,2025-08-27
P045,available,2025-08-27
P046,available,2025-08-27
P047,available,2025-08-27
P048,available,2025-08-27
P049,available,2025-08-27
P050,available,2025-08-27
P051,available,2025-08-27
```

## How It Works

1. **Manual Updates**: You can update parcel status directly in Google Sheets
2. **Auto-Sync**: The map syncs with Google Sheets every 5 minutes when in client view
3. **Manual Sync**: Click "Sync with Google Sheets" button for immediate sync
4. **Local Backup**: Status is also saved locally in case of network issues
5. **Admin Updates**: When you change status via admin panel, you'll get a reminder to update Google Sheets

## Troubleshooting

**❌ "HTTP error! status: 403"**
- Your API key doesn't have access to Google Sheets API
- Enable Google Sheets API in Google Cloud Console

**❌ "HTTP error! status: 400"**
- Check your spreadsheet ID and range
- Make sure sheet is publicly viewable

**⚠️ "No data found"**
- Check your sheet structure (ParcelID in column A, Status in column B)
- Make sure range is correct (A2:C means starting from row 2)

**🔄 Setup modal keeps appearing**
- Update the spreadsheet ID and API key in your code
- Make sure to replace the placeholder values

## Security Notes

- API keys should be restricted to Google Sheets API only
- Consider using service account authentication for production
- Never commit API keys to public repositories
- Monitor API usage in Google Cloud Console

## Support

If you need help with setup, contact your developer or refer to:
- [Google Sheets API Documentation](https://developers.google.com/sheets/api)
- [Google Cloud Console](https://console.cloud.google.com/)
