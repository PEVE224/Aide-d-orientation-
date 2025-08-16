function getFormData(){
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  return `👋 Bonjour, je suis ${name} (${email}).\n${message}`;
}

function sendWhatsApp(){
  let phone = "224611016900"; // ton numéro
  let text = getFormData();
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
}

function sendSMS(){
  let phone = "224611016900"; // ton numéro
  let text = getFormData();
  window.open(`sms:${phone}?body=${encodeURIComponent(text)}`, "_blank");
}
