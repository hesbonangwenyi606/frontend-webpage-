document.getElementById("fetchBtn").addEventListener("click", fetchData);

async function fetchData() {
  const container = document.getElementById("data-container");
  container.innerHTML = "<p>Loading...</p>";

  try {
    // Example API (replace with your own REST API endpoint)
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("Failed to fetch data");

    const data = await response.json();

    container.innerHTML = ""; // Clear loading text

    data.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <h3>${item.name}</h3>
        <p><strong>Email:</strong> ${item.email}</p>
        <p><strong>City:</strong> ${item.address.city}</p>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  }
}
