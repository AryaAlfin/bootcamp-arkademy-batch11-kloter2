//USERNAME
function is_username_valid(username) {
    // hurud kecil a-z
    var lowercaseRe = /[a-z]/g;
    // Mengecek panjang string
      if(username.length == 9 && username.match(lowercaseRe).length == username.length) {
          return true;
      }
      return false;
  }

//PASSWORD
function is_username_valid(username) {
    // Huruf dari a sampai z
    var lowercaseRe = /[a-z]/g;
    
    // Mengecek panjang string
      if(username.length == 8 && username.match(lowercaseRe).length == username.length) {
          return true;
      }
      return false;
  }
  
function is_password_valid(password) {
    // huruf keci a sampai z
      var lowercaseRe = /[a-z]/g;
    
    // huruf besar A sampai Z
    var uppercaseRe = /[A-Z]/g;
  
    // angka dari 0 sampai 9
    var numberRe = /[0-9]/g;
  
    // karater unik _@#$ atau %
    var specialRe = /[_@#$%]/g;
  
    if(password.length == 8
       && lowercaseRe.test(password)
       && uppercaseRe.test(password)
       && numberRe.test(password)
       && specialRe.test(password)) {
       return true;
    }
  
    return false;
  }

//Nomor Handphone
function is_numberphone_valid(phone) {
    // angka 1 sampai 0
    var numberRe = /[0-9]/g;

    if(phone.length == 12 && phone.match(numberRe).length == phone.length) {
        return true;
    }
    return false;

}

//Email
function is_email_valid()
 {
 var x=document.forms["email"]["emailUser"].value;
 var atpos=x.indexOf("@");
 var dotpos=x.lastIndexOf(".");
 if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
 {
 alert("Isi Email dengan Benar");
 }
 }

