// script.js

// Users, Patients, Caregivers, Appointments Data
let users = [];
let patients = [];
let caregivers = [];
let appointments = [];

document.addEventListener("DOMContentLoaded", () => {
    // Handle User Login
    document.getElementById("loginForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        loginUser(username, password);
    });

    // Handle Add Patient
    document.getElementById("patientForm").addEventListener("submit", (e) => {
        e.preventDefault();
        addPatient();
    });

    // Handle Assign Caregiver
    document.getElementById("caregiverForm").addEventListener("submit", (e) => {
        e.preventDefault();
        addCaregiver();
    });

    // Handle Schedule Appointment
    document.getElementById("appointmentForm").addEventListener("submit", (e) => {
        e.preventDefault();
        scheduleAppointment();
    });
});

// Register User
function registerUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username && password) {
        users.push({ username, password });
        alert("User registered successfully!");
    } else {
        alert("Please fill in both username and password.");
    }
}

// Login User
function loginUser(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        document.getElementById("auth-section").classList.add("d-none");
        document.getElementById("patient-section").classList.remove("d-none");
        document.getElementById("caregiver-section").classList.remove("d-none");
        document.getElementById("appointment-section").classList.remove("d-none");
        alert("Login successful!");
    } else {
        alert("Invalid username or password.");
    }
}

// Add Patient
function addPatient() {
    const name = document.getElementById("patientName").value;
    const address = document.getElementById("patientAddress").value;
    const records = document.getElementById("medicalRecords").value;

    if (name && address && records) {
        patients.push({ name, address, records });
        displayPatients();
    } else {
        alert("Please fill all patient details.");
    }
}

// Display Patients
function displayPatients() {
    const patientList = document.getElementById("patientList");
    patientList.innerHTML = '';
    patients.forEach(patient => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = `${patient.name}, ${patient.address}, ${patient.records}`;
        patientList.appendChild(li);
    });
}

// Add Caregiver
function addCaregiver() {
    const name = document.getElementById("caregiverName").value;
    const phone = document.getElementById("caregiverPhone").value;

    if (name && phone) {
        caregivers.push({ name, phone });
        displayCaregivers();
    } else {
        alert("Please fill all caregiver details.");
    }
}

// Display Caregivers
function displayCaregivers() {
    const caregiverList = document.getElementById("caregiverList");
    caregiverList.innerHTML = '';
    caregivers.forEach(caregiver => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = `${caregiver.name}, ${caregiver.phone}`;
        caregiverList.appendChild(li);
    });
}

// Schedule Appointment
function scheduleAppointment() {
    const patient = document.getElementById("appointmentPatient").value;
    const caregiver = document.getElementById("appointmentCaregiver").value;
    const date = document.getElementById("appointmentDate").value;

    if (patient && caregiver && date) {
        appointments.push({ patient, caregiver, date });
        displayAppointments();
    } else {
        alert("Please fill all appointment details.");
    }
}

// Display Appointments
function displayAppointments() {
    const appointmentList = document.getElementById("appointmentList");
    appointmentList.innerHTML = '';
    appointments.forEach(app => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = `${app.patient} has an appointment with ${app.caregiver} on ${app.date}`;
        appointmentList.appendChild(li);
    });
}
