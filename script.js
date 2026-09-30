// Nisab weight standards, in grams
const NISAB_WEIGHTS = {
  gold: 85,
  silver: 595
};

const ZAKAT_RATE = 0.025; // 2.5%

const nisabStandardSelect = document.getElementById("nisabStandard");
const metalLabel = document.getElementById("metalLabel");
const calculateBtn = document.getElementById("calculateBtn");

// Update the "gold/silver price per gram" label when the standard changes
nisabStandardSelect.addEventListener("change", () => {
  const standard = nisabStandardSelect.value;
  metalLabel.textContent = standard === "gold" ? "Gold" : "Silver";
});

calculateBtn.addEventListener("click", calculateZakat);

function getNumberValue(id) {
  const raw = document.getElementById(id).value;
  const num = parseFloat(raw);
  return isNaN(num) || num < 0 ? 0 : num;
}

function formatCurrency(amount) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function calculateZakat() {
  // 1. Gather assets
  const cash = getNumberValue("cash");
  const gold = getNumberValue("gold");
  const investments = getNumberValue("investments");
  const business = getNumberValue("business");
  const debts = getNumberValue("debts");
  const metalPrice = getNumberValue("metalPrice");

  const totalAssets = cash + gold + investments + business;
  const netWealth = Math.max(totalAssets - debts, 0);

  // 2. Calculate nisab threshold from chosen standard
  const standard = nisabStandardSelect.value;
  const weightGrams = NISAB_WEIGHTS[standard];
  const nisabThreshold = weightGrams * metalPrice;

  // 3. Determine zakat owed
  const isAboveNisab = metalPrice > 0 && netWealth >= nisabThreshold;
  const zakatOwed = isAboveNisab ? netWealth * ZAKAT_RATE : 0;

  renderResult({
    totalAssets,
    debts,
    netWealth,
    nisabThreshold,
    zakatOwed,
    isAboveNisab,
    metalPriceEntered: metalPrice > 0
  });
}

function renderResult(data) {
  document.getElementById("resultEmpty").classList.add("hidden");
  document.getElementById("resultFilled").classList.remove("hidden");

  document.getElementById("zakatAmount").textContent = formatCurrency(data.zakatOwed);
  document.getElementById("totalAssets").textContent = formatCurrency(data.totalAssets);
  document.getElementById("totalDebts").textContent = formatCurrency(data.debts);
  document.getElementById("netWealth").textContent = formatCurrency(data.netWealth);
  document.getElementById("nisabValue").textContent = formatCurrency(data.nisabThreshold);

  const statusEl = document.getElementById("zakatStatus");
  if (!data.metalPriceEntered) {
    statusEl.textContent = "Enter a metal price to calculate your nisab threshold.";
  } else if (data.isAboveNisab) {
    statusEl.textContent = "Your wealth is above nisab — zakat is due.";
  } else {
    statusEl.textContent = "Your wealth is below nisab — no zakat due this year.";
  }
}
