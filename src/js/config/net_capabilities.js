export default {
    INTERNET: 'internet', // when external internet API is required
    DUML: 'duml',     // can use DUML communication? (for use where DUML is required, but transport method doesn't matter)
    BULK: 'bulk',     // can do DUML over bulk? (only use where serial DUML doesn't work for the command)
    SERIAL: 'serial', // can do DUML over serial? (only use where bulk DUML doesn't work for the command)
    AOA: 'aoa',       // can do DUML over Android Open Accessory? (only available on Android app)
    FTP: 'ftp'        // can do FTP file upload? 
}