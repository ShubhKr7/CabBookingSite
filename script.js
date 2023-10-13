// Function to go back to the home page
function goBack() {
    window.location.href = "index.html";
}

// Function to display booked rides
function displayBookedRides() {
    const bookedRidesList = document.getElementById("bookedRides");
    bookedRidesList.innerHTML = ""; // Clear the list

    bookedRides.forEach((ride, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>Ride ${index + 1}:</strong> From ${ride.pickupLocation} to ${ride.destination} | Passengers: ${ride.passengerCount}`;
        bookedRidesList.appendChild(listItem);
    });
}
function openBookingPage() {
    window.location.href = "booking.html";
}

document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // You can add code here to handle the form submission, such as sending data to the backend or displaying a confirmation message.
    alert("Cab booked successfully!");
});
// Function to go back to the booking page
function goBack() {
    window.location.href = "booking.html";
}

// Sample data for booked rides (you can replace this with actual data)
const bookedRidesData = [
    {
        pickupLocation: "123 Main St",
        destination: "456 Elm St",
        passengerCount: 2,
    },
    {
        pickupLocation: "789 Oak St",
        destination: "101 Pine St",
        passengerCount: 3,
    },
    // Add more booked rides data as needed
];

const bookedRidesList = document.getElementById("bookedRidesList");

// Function to display booked rides
function displayBookedRides() {
    bookedRidesList.innerHTML = "";

    for (const ride of bookedRidesData) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>Pickup Location:</strong> ${ride.pickupLocation}<br><strong>Destination:</strong> ${ride.destination}<br><strong>Passenger Count:</strong> ${ride.passengerCount}`;
        bookedRidesList.appendChild(listItem);
    }
}

displayBookedRides();
// Function to go back to the home page
function goBack() {
    window.location.href = "index.html";
}

// Array to store booked rides
const bookedRides = [];

// Function to handle form submission and display booked rides
document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const pickupLocation = document.getElementById("pickupLocation").value;
    const destination = document.getElementById("destination").value;
    const passengerCount = document.getElementById("passengerCount").value;

    // Create a booked ride object
    const bookedRide = {
        pickupLocation,
        destination,
        passengerCount
    };

    bookedRides.push(bookedRide);

    // Clear form fields
    document.getElementById("pickupLocation").value = "";
    document.getElementById("destination").value = "";
    document.getElementById("passengerCount").value = "";

    // Update the list of booked rides
    displayBookedRides();
});

// Function to display booked rides
function displayBookedRides() {
    const bookedRidesList = document.getElementById("bookedRides");
    bookedRidesList.innerHTML = ""; // Clear the list

    bookedRides.forEach((ride, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>Ride ${index + 1}:</strong> From ${ride.pickupLocation} to ${ride.destination} | Passengers: ${ride.passengerCount}`;
        bookedRidesList.appendChild(listItem);
    });
}
