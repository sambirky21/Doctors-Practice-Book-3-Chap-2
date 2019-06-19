// Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.

// Doctor's name
// Specialty (Oncologist, pediatrician, etc...)
// Address of practice
const docName = [
    { doctorName: "Sam" },
    { },
    { },
    { },
    { }
]

const docSpecialty = [
    { doctorSpecialty: "Oncologist" },
    { },
    { },
    { },
    { }
]

const docAddress = [
    { doctorAddress: "Main Street" },
    { },
    { }
]

const createDoctor = (name, specialty, address) => {
    return {
        doctorName: name.doctorName,
        doctorSpecialty: specialty.doctorSpecialty,
        doctorAddress: address.doctorAddress
    }
}

const newDoctorName = createDoctor(docName[0], docSpecialty[0], docAddress[0])

console.log("this works",newDoctorName)

// Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.

// Pet name
// Pet breed
// Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels

