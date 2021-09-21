/**
* This functions helps to generate radom hex string for each call
* Note that in some cases there could be collusion, generate string is not unique but
* collusion probability is very very low.
*
* @param {*} length Length to give the Uint8Array for generating bytes
* @returns Some random string based on hex
*/
export default function (length:number):string {
    function decimalToHex(dec):string {
      return dec.toString(16).padStart(2, "0");
    }
    
    function generateRandomId() :string {
      var unSignedIntArray8b:Uint8Array = new Uint8Array((length || 40) / 2);
      window.crypto.getRandomValues(unSignedIntArray8b);
      return Array.from(unSignedIntArray8b, decimalToHex).join("");
    }

    return generateRandomId();
}