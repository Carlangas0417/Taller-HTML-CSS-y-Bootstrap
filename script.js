document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    document.getElementById("responseMsg").textContent = `¡Gracias, ${name}! Te has suscrito exitosamente a MotorBack 🚗🔥`;
    this.reset();
});
