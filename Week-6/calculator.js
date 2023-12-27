function updateScore() {
  const categories = [
    "AV",
    "AC",
    "PR",
    "UI",
    "scope",
    "conf",
    "integ",
    "avail",
    "health",
    "sens",
  ];

  // Check if at least one option is selected for each category
  const allSelected = categories.every((category) => {
    const selected = document.querySelector(
      `input[name="${category}"]:checked`
    );
    return selected !== null;
  });

  // Hide or show the warning based on selections
  const warning = document.getElementById("warning");
  if (allSelected) {
    warning.style.display = "none"; // Hide the warning if all options are selected
    calculateScore(); // Call a function to calculate the score (you need to implement this function)
  } else {
    warning.style.display = "block"; // Show the warning if any category is not selected
  }
}

function calculateScore() {
  let sum = 0;
  const categories = [
    "AV",
    "AC",
    "PR",
    "UI",
    "scope",
    "conf",
    "integ",
    "avail",
    "health",
    "sens",
  ];

  const score = categories.every((category) => {
    if (category === "AV") {
      const id = document.querySelector(`input[name="${category}"]:checked`).id;
      if (id === "AV_N") {
        sum = sum + 0.85;
      }
      if (id === "AV_L") {
        sum = sum + 0.55;
      }
      if (id === "AV_P") {
        sum = sum + 0.2;
      }
      if (id === "AV_A") {
        sum = sum + 0.62;
      }
    }
    if (category === "AC") {
      const id = document.querySelector(`input[name="${category}"]:checked`).id;
      if (id === "AC_L") {
        sum = sum + 0.77;
      }
      if (id === "AC_H") {
        sum = sum + 0.44;
      }
    }

    if (category === "PR") {
      const id = document.querySelector(`input[name="${category}"]:checked`).id;
      if (id === "PR_N") {
        sum = sum + 0.85;
      }
      if (id === "PR_L") {
        sum = sum + 0.62;
      }
      if (id === "PR_H") {
        sum = sum + 0.27;
      }
    }

    if (category === "UI") {
      const id = document.querySelector(`input[name="${category}"]:checked`).id;
      if (id === "UI_N") {
        sum = sum + 0.85;
      }
      if (id === "UI_R") {
        sum = sum + 0.62;
      }
    }

    if (category === "conf") {
      const id = document.querySelector(`input[name="${category}"]:checked`).id;
      if (id === "UI_N") {
        sum = sum + 0.85;
      }
      if (id === "UI_R") {
        sum = sum + 0.62;
      }
    }
    return sum;
  });
  const scoreId = document.getElementById("score");
  scoreId.innerText = sum;
}
