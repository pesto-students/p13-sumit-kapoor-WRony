function showAlert(alertId) {
    const bootstrapAlert = document.querySelector("#" + alertId);
    const collapse = new bootstrap.Collapse(bootstrapAlert); 
    collapse.show();
 }
 
 const modalYesBtn = document.querySelector("#contact-modal .btn-primary");
 const alertDiv = document.getElementById("conf-alert");


 modalYesBtn.addEventListener("click", function () {    
    const sendBtn = document.querySelector("#send-message-btn");
    sendBtn.style.display = "none";
    alertDiv.style.display = "block";
    document.getElementById("contact-modal").style.display="none";
    showAlert("conf-alert");
 });
 
 window.onload = function () {
    alertDiv.style.display = "none";
 }


 