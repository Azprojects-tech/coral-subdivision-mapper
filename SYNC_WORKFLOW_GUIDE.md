# 🔄 Google Sheets Sync Workflow Guide

## How the Sync Works Now

### 📊 **Google Sheets → Map (Pull Updates)**

**1. Jacinta Updates Google Sheet:**
- Jacinta changes P72 from "available" to "sold" in Google Sheets
- Changes are saved in Google Sheets immediately

**2. Map Gets Updated:**
- **Option A**: Admin manually clicks "Sync with Google Sheets" → Immediate update
- **Option B**: Automatic background sync:
  - **Admin view**: Every 5 minutes
  - **Customer view**: Every 10 minutes
- Map colors update: P72 turns red (sold)

**3. All Users See Changes:**
- Once map syncs, ALL customers see updated colors
- No need for customers to refresh or login

### 📝 **Map → Google Sheets (Push Updates)**

**Current Setup (Manual Process):**
1. Admin changes P72 status in map → Local update only
2. Enhanced reminder appears with direct link to Google Sheet
3. Admin clicks link → Opens Google Sheet in new tab
4. Admin manually updates P72 in Google Sheet
5. Next sync pulls the change back (confirming it worked)

## 🎯 **Recommended Workflow**

### **For Jacinta (Office Updates):**
1. Keep Google Sheet open in browser tab
2. Update parcel status directly in Google Sheet
3. Changes automatically sync to map within 5-10 minutes
4. All customers see updates without any action needed

### **For Admin (Field/Call Updates):**
1. Login to admin view on map
2. Change parcel status using admin panel
3. Click the Google Sheet link in the reminder message
4. Update the same parcel in Google Sheet
5. Verification: Next sync will confirm the change

## ⚡ **Sync Frequency**

- **Admin Manual Sync**: Instant (click "Sync with Google Sheets")
- **Admin Auto-Sync**: Every 5 minutes
- **Customer Auto-Sync**: Every 10 minutes (background, no UI)
- **Google Sheet Updates**: Instant when saved

## 🔧 **Advanced Options (Future Enhancement)**

To enable automatic map → Google Sheets writing, you would need:

1. **Google Apps Script**: Create a script in Google Sheets to accept updates
2. **Service Account**: For server-to-server authentication
3. **Webhook**: Direct API calls to update Google Sheets

**Current setup is optimal for most real estate operations where:**
- Multiple office staff update Google Sheets
- Field agents/admins make occasional status changes
- Customers get real-time view of availability

## 📱 **Mobile Workflow**

**Field Agent with Phone:**
1. Open map → Login as admin
2. Change parcel status
3. Copy reminder link → Opens Google Sheets app
4. Update same parcel in Google Sheets
5. Done! All customers see update within 10 minutes

## 🎉 **Benefits of Current System**

✅ **Real-time for customers**: See updates within 10 minutes
✅ **Dual control**: Both office (Google Sheets) and field (map) can update
✅ **Backup system**: Data stored in both places
✅ **No admin login required**: Customers get updates automatically
✅ **Mobile friendly**: Works on all devices
✅ **Audit trail**: Google Sheets keeps edit history

## 📋 **Quick Reference**

**Need immediate customer update?**
→ Update Google Sheet directly (fastest)

**Field agent needs to update status?**
→ Use admin panel + update Google Sheet via reminder link

**Want to verify sync is working?**
→ Check browser console for "Background sync" messages

**Customers not seeing updates?**
→ Wait 10 minutes or check if Google Sheet is publicly viewable
