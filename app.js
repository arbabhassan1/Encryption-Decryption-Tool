const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function encryption() {
  var plaintext = document.getElementById("plain-text").value;
  var key = document.getElementById("encryption-key").value;
  key = parseInt(key);
  const split_array = plaintext.split("");

  var length_of_plaintext = split_array.length;

  var asci_of_plaintext = [];

  for (var i = 0; i < length_of_plaintext; i++) {
    asci_of_plaintext[i] = split_array[i].charCodeAt(0);
  }


  var encrypt_text = [];
  for (var i = 0; i < length_of_plaintext; i++) {
    encrypt_text[i] = asci_of_plaintext[i] + key;
  }


  var final_encrypt_text = [];

  for (var i = 0; i < length_of_plaintext; i++) {
    final_encrypt_text[i] = String.fromCharCode(encrypt_text[i]);
  }

  var cipher_text = final_encrypt_text[0];

  for (var i = 1; i < length_of_plaintext; i++) {
    cipher_text = cipher_text + final_encrypt_text[i];
  }

  document.getElementById("encrypt-text").style.display = "block";
  document.getElementById("encrypt-text").innerHTML = cipher_text;

}


function decryption() {
  var cipher_text = document.getElementById("cipher-text").value;
  var key = document.getElementById("decryption-key").value;
  key = parseInt(key);

  const split_array = cipher_text.split("");

  var length_of_ciphertext = split_array.length;


  var asci_of_ciphertext = [];

  for (var i = 0; i < length_of_ciphertext; i++) {
    asci_of_ciphertext[i] = split_array[i].charCodeAt(0);
  }


  var decrypt_text = [];
  for (var i = 0; i < length_of_ciphertext; i++) {
    decrypt_text[i] = asci_of_ciphertext[i] - key;
  }


  var final_decrypt_text=[];
  for(var i=0;i<length_of_ciphertext;i++){
    final_decrypt_text[i]=String.fromCharCode(decrypt_text[i]);

  }




  var Message_text=final_decrypt_text[0]
  for(var i=1;i<length_of_ciphertext;i++){
    Message_text=Message_text+ final_decrypt_text[i];
  }

  document.getElementById("decrypt-text").style.display="block";
  document.getElementById("decrypt-text").innerHTML=Message_text;


}
