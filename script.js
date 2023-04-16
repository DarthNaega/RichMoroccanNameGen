// First names array
const firstNames = [
  "John",
  "Jane",
  "Michael",
  "Jessica",
  "David",
  "Emily",
  "Daniel",
  "Sarah",
  "William",
  "Olivia",
];

// Last names array
const lastNames = [
  "Smith",
  "Johnson",
  "Brown",
  "Wilson",
  "Davis",
  "Miller",
  "Taylor",
  "Anderson",
  "Jackson",
  "Lee",
];

// Function to generate a random name
function generateName() {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const fullName = `${firstName} ${lastName}`;
  return fullName;
}

// Event listener for the generate button
const generateBtn = document.querySelector("#generateBtn");
generateBtn.addEventListener("click", () => {
  const fullNameEl = document.querySelector("#fullName");
  fullNameEl.textContent = generateName();
});
