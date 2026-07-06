export const initialBookings = [
  {
    id: 1,
    customerId: 101,    // Links to Customer
    packageId: 1,       // Links to Package in Packages array
    travelDate: "2026-07-12",
    people: 2,
    amount: 130000,
    status: "Confirmed",
  },
  {
    id: 2,
    customerId: 102,    
    packageId: 2,      
    travelDate: "2026-07-20",
    people: 4,
    amount: 192000,
    status: "Pending",
  },
  {
    id: 3,
    customerId: 103,    
    packageId: 3,       
    travelDate: "2026-08-01",
    people: 1,
    amount: 18000,
    status: "Cancelled",
  },
];