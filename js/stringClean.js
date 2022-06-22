function stringClean(s) {
  // Function will return the cleaned string
  
  /*
    P: the function takes in a string. the string has numeric and special characters inside
    R: the function returns a string without numeric characters, but spacing and special characters intact
    E: function stringClean(dirtyString){
        this command
       }
    
       input>>output
       "!!" >> "!!"
       "1243435435" >> 1243435435
       "th3 chamera1 ma4n wa4s5 drun9k" >> "th chamera man was drunk"

    P: >take input from the user
       >sort the string and check for numbers
       >return the string only if its not a number

   */

       function stringClean(s){
        //   Used regex: \d+ the d will replace all digits and the plus sign the adjacent digits
        //   The /g means global, so it  does it in one go. Also could work with (/[0-9]/g, '') instead.
          let str = s.replace(/\d/g, '') 
           console.log(str)
        }       


}

stringClean("Thi1s i1s a4 co0mpute3r")