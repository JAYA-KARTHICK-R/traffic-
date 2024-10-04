// Traffic control and simulation script

// Initialize Map (This would be connected to Google Maps or OpenLayers)
function initTrafficMap() {
    document.getElementById("trafficMap").innerHTML = "Real-time map will be loaded here.";
}
initTrafficMap();

// Manual Override and AI Mode Buttons
document.getElementById("manualOverride").addEventListener("click", function() {
    alert("Manual override activated! You can now control the traffic lights.");
    document.getElementById("currentLight").innerText = "Manual Mode";
});

document.getElementById("aiMode").addEventListener("click", function() {
    alert("AI-Optimized Mode activated! The system will now automatically adjust traffic lights.");
    document.getElementById("currentLight").innerText = "AI Mode";
});

// Simulate real-time data (This would come from an API in real implementation)
function updateTrafficData() {
    let avgWaitTime = Math.random() * 5 + 1; // Simulating random wait time
    let fuelReduction = 15 + Math.random() * 5; // Simulating random fuel reduction
    let emissionReduction = 10 + Math.random() * 5; // Simulating random emission reduction

    document.getElementById("avgWaitTime").innerText = avgWaitTime.toFixed(2) + " mins";
    document.getElementById("fuelConsumption").innerText = "Reduced by " + fuelReduction.toFixed(2) + "%";
    document.getElementById("emissions").innerText = "Reduced by " + emissionReduction.toFixed(2) + "%";
}

// Update data every 5 seconds (simulating real-time updates)
setInterval(updateTrafficData, 5000);

// Alerts simulation (would be connected to real-time traffic alerts API)
function checkAlerts() {
    // Simulate an alert for high congestion
    let congestionAlert = Math.random() > 0.8;
    if (congestionAlert) {
        document.getElementById("alertText").innerText = "High congestion detected at Intersection 3!";
    } else {
        document.getElementById("alertText").innerText = "No current alerts";
    }
}

// Check for alerts every 10 seconds
setInterval(checkAlerts, 10000);
document.addEventListener('DOMContentLoaded', () => {
    const predictButton = document.getElementById('predictButton');
    const predictionResults = document.getElementById('predictionResults');
  
    predictButton.addEventListener('click', () => {
      fetch('/api/predictions')
        .then(response => response.json())
        .then(data => {
          predictionResults.textContent = `Prediction: ${data.prediction}`;
        })
        .catch(error => {
          console.error('Error fetching predictions:', error);
          predictionResults.textContent = 'Error fetching predictions.';
        });
    });
  });
  