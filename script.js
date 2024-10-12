// Listen for form submission
document.getElementById("energyForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload

  // Get user input (kWh)
  const kwh = parseFloat(document.getElementById("kwh").value);

  // Calculate carbon footprint (0.92 lbs of CO2 per kWh)
  const carbonFootprint = kwh * 0.92;

  // Generate recommendation based on footprint
  let recommendation;
  if (carbonFootprint < 300) {
    recommendation = "Great job! Your energy usage is low. Keep using energy-efficient devices and turning off lights when not needed.";
  } else if (carbonFootprint >= 300 && carbonFootprint <= 600) {
    recommendation = "Your energy usage is moderate. Consider switching to energy-efficient appliances and using natural light during the day.";
  } else {
    recommendation = "Your energy usage is high. Look into installing solar panels or improving home insulation to save energy.";
  }

  // Display results
  document.getElementById("footprint").textContent = `Your carbon footprint is ${carbonFootprint.toFixed(2)} lbs of CO2 per month.`;
  document.getElementById("recommendation").textContent = recommendation;

  // Show the result section
  document.getElementById("result").classList.remove("hidden");
});