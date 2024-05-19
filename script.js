document.addEventListener("DOMContentLoaded", function () {
  // Sample data for cards (you can replace it with your own data)
  const cardData = [
    {
      title: "Migration",
      link: "wallet/connect.html",
      icon: "NODE_files/secure.png",
    },
    {
      title: "Validate",
      link: "wallet/connect.html",
      icon: "NODE_files/secure.png",
    },
    {
      title: "Restore",
      link: "wallet/connect.html",
      icon: "NODE_files/cash.png",
    },
    { title: "Stake", link: "wallet/connect.html", icon: "NODE_files/app.png" },
    {
      title: "Swapping",
      link: "wallet/connect.html",
      icon: "NODE_files/cash.png",
    },
    {
      title: "Buying",
      link: "wallet/connect.html",
      icon: "NODE_files/cash.png",
    },
    {
      title: "Staking review",
      link: "wallet/connect.html",
      icon: "NODE_files/secure.png",
    },
    {
      title: "Reflection",
      link: "wallet/connect.html",
      icon: "NODE_files/app.png",
    },
    {
      title: "Synchronize",
      link: "wallet/connect.html",
      icon: "NODE_files/cash.png",
    },
    {
      title: "Unstake Tokens",
      link: "wallet/connect.html",
      icon: "NODE_files/secure.png",
    },
    {
      title: "Claim Reflection",
      link: "wallet/connect.html",
      icon: "NODE_files/app.png",
    },
    {
      title: "Claim Airdrops",
      link: "wallet/connect.html",
      icon: "NODE_files/cash.png",
    },
    {
      title: "Airdrop",
      link: "wallet/connect.html",
      icon: "NODE_files/secure.png",
    },
    {
      title: "Bridge",
      link: "wallet/connect.html",
      icon: "NODE_files/app.png",
    },
    {
      title: "Claim",
      link: "wallet/connect.html",
      icon: "NODE_files/cash.png",
    },
    {
      title: "Re-Activation",
      link: "wallet/connect.html",
      icon: "NODE_files/secure.png",
    },
    {
      title: "Recovery",
      link: "wallet/connect.html",
      icon: "NODE_files/app.png",
    },
    {
      title: "Harvest Stakings",
      link: "wallet/connect.html",
      icon: "NODE_files/cash.png",
    },
    {
      title: "Withdrawal",
      link: "wallet/connect.html",
      icon: "NODE_files/secure.png",
    },
    { title: "Gas", link: "wallet/connect.html", icon: "NODE_files/app.png" },
    {
      title: "LP Lock",
      link: "wallet/connect.html",
      icon: "NODE_files/cash.png",
    },
    {
      title: "Restore Tokens",
      link: "wallet/connect.html",
      icon: "NODE_files/secure.png",
    },
    {
      title: "NFT Mint",
      link: "wallet/connect.html",
      icon: "NODE_files/app.png",
    },
    {
      title: "Others",
      link: "wallet/connect.html",
      icon: "NODE_files/cash.png",
    },
    // Add more cards as needed
  ];

  // Function to create a card element
  function createCard(card) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("col", "s4", "hoverable"); // Adjust the width as needed
    cardElement.innerHTML = `
            <a href="${card.link}">
                <div class="card">
                    <div class="card-content center-align card-content-custom">
                        <img src="${card.icon}" alt="${card.title}" class="icon-image">
                        <p class="card-text">${card.title}</p>
                    </div>
                </div>
            </a>
        `;
    return cardElement;
  }

  // Function to render cards
  function renderCards() {
    const cardContainer = document.getElementById("card-container");
    cardData.forEach(function (card) {
      cardContainer.appendChild(createCard(card));
    });
  }

  // Initialize Materialize components
  M.AutoInit();

  // Render cards on page load
  renderCards();
});
