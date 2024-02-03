const mongoose = require('mongoose');
const Employee = require('./models/employeeSchema'); 
require('dotenv').config();

// Your complete employee data
const employeeData = [
  {
    image: "https://content.presspage.com/uploads/2278/1920_marcuswalton.jpg?10000",
    name: "Captain A Davis",
    position: "Pilot",
    duty: "Commercial flights, Boeing 747",
    field: "Flight Operations",
    averageSalary: "$150,000",
    dutyDetails: "Responsible for safe and efficient flight operations",
    email: "a.davis@example.com",
  },
  {
    image: "https://image1.masterfile.com/getImage/NjkzLTA2MDE3MDAxZW4uMDAwMDAwMDA=AMbF3B/693-06017001en_Masterfile.jpg",
    name: "First Officer D Parker",
    position: "Co-Pilot",
    duty: "Assisting Captain Davis, Airbus A320",
    field: "Flight Operations",
    averageSalary: "$100,000",
    dutyDetails: "Assist the captain in ensuring a smooth flight",
    email: "d.parker@example.com",
  },
  
  {
    image: "https://www.canberratimes.com.au/images/transform/v1/crop/frm/190143465/c45621ac-ed6b-42c1-9b19-7adcf9b2015b.jpg/r0_0_6720_4480_w1200_h678_fmax.jpg",
    name: "Captain RJ Smith",
    position: "Pilot",
    duty: "International flights, Boeing 777",
    field: "Flight Operations",
    averageSalary: "$160,000",
    dutyDetails: "Lead pilot for long-haul international flights",
    email: "rj.smith@example.com",
  },
  {
    image: "https://www.naa.edu/wp-content/uploads/2019/06/Aviation-Maintenance-Technology_AMT_Instruction.jpg",
    name: "Avionics Technician t Adams",
    position: "Avionics Technician",
    duty: "Repairing and maintaining aircraft avionics systems",
    field: "Avionics",
    averageSalary: "$80,000",
    dutyDetails: "Diagnose and repair aircraft avionics systems",
    email: "t.adams@example.com",
  },
  {
    image: "https://assets-jb.fmg-services.co.uk/AJS/uploads/hub/advices/vHXqbJ4qWR8ymtVOJQ5YHkHCIinB2eAlFSlGBIiN.jpeg",
    name: "First Officer J Turner",
    position: "Co-Pilot",
    duty: "Domestic flights, Boeing 737",
    field: "Flight Operations",
    averageSalary: "$90,000",
    dutyDetails: "Assist the captain in domestic flight operations",
    email: "j.turner@example.com",
  },
  {
    image: "https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/uploads/qna_career_path/aviation-engineer-aviation-engineer.jpg=ws1280x960",
    name: "Aircraft Engineer Michael Evans",
    position: "Aircraft Engineer",
    duty: "Designing and testing aircraft components",
    field: "Aircraft Engineering",
    averageSalary: "$130,000",
    dutyDetails: "Design and test aircraft components for efficiency",
    email: "michael.evans@example.com",
  },
  {
    image: "https://hips.hearstapps.com/hmg-prod/images/bhn-templatelongformlede-1645640853.jpeg?crop=0.752xw:1.00xh;0.125xw,0&resize=768:*",
    name: "Captain O Robinson",
    position: "Pilot",
    duty: "Regional flights, Embraer E190",
    field: "Flight Operations",
    averageSalary: "$120,000",
    dutyDetails: "Lead pilot for regional flights",
    email: "o.robinson@example.com",
  },
  {
    image: "https://calaero.edu/wp-content/uploads/2022/09/what-does-take-become-aircraft-maintenance-technician.jpg",
    name: "Maintenance Technician  Miller",
    position: "Maintenance Technician",
    duty: "Routine maintenance and inspections",
    field: "Maintenance",
    averageSalary: "$70,000",
    dutyDetails: "Perform routine maintenance and inspections on aircraft",
    email: "e.miller@example.com",
  },
  {
    image: "https://qph.cf2.quoracdn.net/main-qimg-b93c7f5329012465cc39c5baec82b2b3-lq",
    name: "First Officer B Hall",
    position: "Co-Pilot",
    duty: "Short-haul flights, Airbus A319",
    field: "Flight Operations",
    averageSalary: "$85,000",
    dutyDetails: "Assist the captain in short-haul flight operations",
    email: "b.hall@example.com",
  },
];

const seedDatabase = async () => {
    try {
      // Connect to MongoDB (Update the URL and options as needed)
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  
      // Clear existing data
      await Employee.deleteMany();
  
      // Insert new data with unique employeeId
      const employeesWithIds = employeeData.map((employee, index) => ({
        ...employee,
        employeeId: index + 1, // Assuming IDs start from 1
      }));
  
      await Employee.insertMany(employeesWithIds);
  
      console.log('Database seeded successfully');
    } catch (error) {
      console.error('Error seeding database:', error);
    } finally {
      // Disconnect from MongoDB
      await mongoose.disconnect();
    }
  };
  
  // Run the seed function
  seedDatabase();
