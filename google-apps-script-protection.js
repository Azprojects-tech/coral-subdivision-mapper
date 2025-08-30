/**
 * Google Apps Script for Coral Gardens Parcel Manager
 * 
 * This script adds password protection when "Admin" is selected in the ChangedBy column.
 * 
 * SETUP INSTRUCTIONS:
 * 1. Open your Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Replace the default code with this script
 * 4. Save and authorize the script
 * 5. The script will automatically run when changes are made to the ChangedBy column
 */

// Admin password - change this to your desired password
const ADMIN_PASSWORD = 'YourCustomPasswordHere';

/**
 * This function runs automatically when any cell is edited
 */
function onEdit(e) {
  const sheet = e.source.getActiveSheet();
  const range = e.range;
  const newValue = e.value;
  const oldValue = e.oldValue;
  
  // Check if the edit was in the ChangedBy column (column D)
  if (range.getColumn() === 4 && newValue === 'Admin') {
    
    // Get the row number and parcel ID
    const row = range.getRow();
    const parcelId = sheet.getRange(row, 1).getValue(); // Column A has ParcelID
    
    // Show password prompt
    const userPassword = Browser.inputBox(
      'Admin Authentication Required',
      `To set "${parcelId}" as changed by Admin, please enter the admin password:`,
      Browser.Buttons.OK_CANCEL
    );
    
    // Verify password
    if (userPassword !== ADMIN_PASSWORD) {
      // Wrong password - revert the change
      if (oldValue) {
        range.setValue(oldValue); // Restore previous value
      } else {
        range.setValue('Database'); // Default to Database if no previous value
      }
      
      // Show error message
      Browser.msgBox(
        'Access Denied',
        '❌ Incorrect admin password. The change has been reverted to prevent unauthorized admin claims.',
        Browser.Buttons.OK
      );
      
      // Log the failed attempt
      logFailedAttempt(parcelId, userPassword);
      
    } else {
      // Correct password - allow the change and log it
      logSuccessfulAdminChange(parcelId, row);
      
      // Show success message
      Browser.msgBox(
        'Admin Change Authorized',
        `✅ Admin change for ${parcelId} has been verified and authorized.`,
        Browser.Buttons.OK
      );
    }
  }
}

/**
 * Log successful admin changes
 */
function logSuccessfulAdminChange(parcelId, row) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  const timestamp = new Date().toISOString();
  
  // You could add this to a separate audit sheet
  console.log(`Admin change authorized for ${parcelId} at ${timestamp}`);
  
  // Optionally, create an audit trail in a separate sheet
  createAuditLog('ADMIN_CHANGE_AUTHORIZED', parcelId, timestamp);
}

/**
 * Log failed admin attempts
 */
function logFailedAttempt(parcelId, attemptedPassword) {
  const timestamp = new Date().toISOString();
  console.log(`Failed admin attempt for ${parcelId} at ${timestamp}`);
  
  // Log to audit trail
  createAuditLog('FAILED_ADMIN_ATTEMPT', parcelId, timestamp);
}

/**
 * Create audit log in a separate sheet
 */
function createAuditLog(action, parcelId, timestamp) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  // Check if audit sheet exists, create if not
  let auditSheet;
  try {
    auditSheet = spreadsheet.getSheetByName('Security_Audit');
  } catch (e) {
    auditSheet = spreadsheet.insertSheet('Security_Audit');
    // Add headers
    auditSheet.getRange(1, 1, 1, 4).setValues([['Timestamp', 'Action', 'ParcelID', 'User Email']]);
    auditSheet.getRange(1, 1, 1, 4).setFontWeight('bold');
  }
  
  // Add the audit entry
  const userEmail = Session.getActiveUser().getEmail();
  auditSheet.appendRow([timestamp, action, parcelId, userEmail]);
}

/**
 * Function to view recent audit logs (can be run manually)
 */
function viewAuditLog() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  try {
    const auditSheet = spreadsheet.getSheetByName('Security_Audit');
    const data = auditSheet.getDataRange().getValues();
    
    console.log('Recent Security Audit Entries:');
    data.forEach((row, index) => {
      if (index === 0) return; // Skip header
      console.log(`${row[0]} - ${row[1]} - ${row[2]} - ${row[3]}`);
    });
    
  } catch (e) {
    console.log('No audit log found. Security logging will be created automatically.');
  }
}

/**
 * Setup function to initialize the security system
 */
function setupSecurity() {
  Browser.msgBox(
    'Coral Gardens Security Setup',
    'Security system initialized. Admin password protection is now active for the ChangedBy column.',
    Browser.Buttons.OK
  );
}
