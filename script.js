document.getElementById("addMedicineForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
  
    // Get form values
    const medicineName = document.getElementById("medicineName").value;
    const quantity = document.getElementById("quantity").value;
    const price = document.getElementById("price").value;
  
    // Validate inputs
    if (!medicineName || quantity <= 0 || price <= 0) {
      alert("Please enter valid medicine details.");
      return;
    }
  
    // Add new row to the inventory table
    const table = document.getElementById("inventoryTable").querySelector("tbody");
    const newRow = document.createElement("tr");
  
    newRow.innerHTML = `
      <td>${medicineName}</td>
      <td>${quantity}</td>
      <td>$${parseFloat(price).toFixed(2)}</td>
    `;
  
    table.appendChild(newRow);
  
    // Clear form inputs
    document.getElementById("medicineName").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
  });
  