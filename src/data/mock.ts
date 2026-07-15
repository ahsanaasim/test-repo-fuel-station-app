export type Role = "operator" | "manager" | "accountant" | "owner";

export type FuelType = "Petrol" | "Diesel" | "Premium";

export type Tank = {
  id: string;
  number: string;
  fuelType: FuelType;
  capacity: number;
  currentLevel: number;
  lastUpdated: string;
  lowAlert: boolean;
};

export type Pump = {
  id: string;
  number: string;
  tankId: string;
  fuelType: FuelType;
  openingMeter: number;
  closingMeter?: number;
};

export type Sale = {
  id: string;
  fuelType: FuelType;
  liters: number;
  amount: number;
  paymentMethod: "Cash" | "Card";
  timestamp: string;
};

export type Shift = {
  id: string;
  dateTime: string;
  operatorName: string;
  status: "Pending" | "Verified" | "Rejected" | "Active" | "Submitted";
  openingMeter: number;
  closingMeter: number;
  totalLiters: number;
  totalSales: number;
  cashAmount: number;
  cardAmount: number;
  variance: number;
  correctionRequested: boolean;
  station: string;
};

export type Delivery = {
  id: string;
  supplier: string;
  dateTime: string;
  fuelType: FuelType;
  liters: number;
  tank: string;
  invoiceNumber: string;
};

export type Reconciliation = {
  id: string;
  shift: string;
  expectedCash: number;
  countedCash: number;
  cardAmount: number;
  variance: number;
};

export type Expense = {
  id: string;
  date: string;
  category: string;
  amount: number;
  note: string;
  enteredBy: string;
};

export type AuditEntry = {
  id: string;
  timestamp: string;
  user: string;
  role: string;
  action: string;
  details: string;
  station: string;
};

export type Report = {
  id: string;
  name: string;
  type: "Sales" | "Inventory" | "Reconciliation" | "Expenses" | "Variances";
  period: string;
  generatedOn: string;
  status: "Ready" | "Generating" | "Failed";
};

export const PRODUCT = {
  name: "Flowboard",
  tagline: "Fuel station ops that feel as clear as a storefront.",
  overview:
    "Run shifts, sales, tanks, and cash reconciliation from one vibrant tablet-first board — built for operators who need speed and managers who need trust.",
};

export const tanks: Tank[] = [
  {
    id: "t1",
    number: "T-01",
    fuelType: "Petrol",
    capacity: 20000,
    currentLevel: 14200,
    lastUpdated: "2026-07-15T08:40:00",
    lowAlert: false,
  },
  {
    id: "t2",
    number: "T-02",
    fuelType: "Diesel",
    capacity: 25000,
    currentLevel: 4800,
    lastUpdated: "2026-07-15T08:40:00",
    lowAlert: true,
  },
  {
    id: "t3",
    number: "T-03",
    fuelType: "Premium",
    capacity: 15000,
    currentLevel: 9200,
    lastUpdated: "2026-07-15T08:35:00",
    lowAlert: false,
  },
  {
    id: "t4",
    number: "T-04",
    fuelType: "Petrol",
    capacity: 18000,
    currentLevel: 3100,
    lastUpdated: "2026-07-15T08:30:00",
    lowAlert: true,
  },
];

export const pumps: Pump[] = [
  { id: "p1", number: "Pump 1", tankId: "t1", fuelType: "Petrol", openingMeter: 128450.2 },
  { id: "p2", number: "Pump 2", tankId: "t1", fuelType: "Petrol", openingMeter: 99421.8 },
  { id: "p3", number: "Pump 3", tankId: "t2", fuelType: "Diesel", openingMeter: 87110.4 },
  { id: "p4", number: "Pump 4", tankId: "t3", fuelType: "Premium", openingMeter: 45220.1 },
];

export const sales: Sale[] = [
  {
    id: "s1",
    fuelType: "Petrol",
    liters: 32.5,
    amount: 45.5,
    paymentMethod: "Cash",
    timestamp: "2026-07-15T07:12:00",
  },
  {
    id: "s2",
    fuelType: "Diesel",
    liters: 48.0,
    amount: 62.4,
    paymentMethod: "Card",
    timestamp: "2026-07-15T07:28:00",
  },
  {
    id: "s3",
    fuelType: "Premium",
    liters: 25.0,
    amount: 42.5,
    paymentMethod: "Card",
    timestamp: "2026-07-15T08:05:00",
  },
  {
    id: "s4",
    fuelType: "Petrol",
    liters: 40.0,
    amount: 56.0,
    paymentMethod: "Cash",
    timestamp: "2026-07-15T08:22:00",
  },
];

export const shifts: Shift[] = [
  {
    id: "sh1",
    dateTime: "2026-07-15T06:00:00",
    operatorName: "Amina Khan",
    status: "Active",
    openingMeter: 128450.2,
    closingMeter: 0,
    totalLiters: 145.5,
    totalSales: 206.4,
    cashAmount: 101.5,
    cardAmount: 104.9,
    variance: -2.5,
    correctionRequested: false,
    station: "Central Avenue",
  },
  {
    id: "sh2",
    dateTime: "2026-07-14T14:00:00",
    operatorName: "Omar Riaz",
    status: "Pending",
    openingMeter: 127980.0,
    closingMeter: 128450.2,
    totalLiters: 412.8,
    totalSales: 578.0,
    cashAmount: 290.0,
    cardAmount: 285.0,
    variance: 3.0,
    correctionRequested: true,
    station: "Central Avenue",
  },
  {
    id: "sh3",
    dateTime: "2026-07-14T06:00:00",
    operatorName: "Sara Malik",
    status: "Verified",
    openingMeter: 127510.5,
    closingMeter: 127980.0,
    totalLiters: 388.2,
    totalSales: 540.5,
    cashAmount: 260.5,
    cardAmount: 280.0,
    variance: 0,
    correctionRequested: false,
    station: "West Ring Road",
  },
  {
    id: "sh4",
    dateTime: "2026-07-13T14:00:00",
    operatorName: "Omar Riaz",
    status: "Rejected",
    openingMeter: 127100.0,
    closingMeter: 127510.5,
    totalLiters: 360.0,
    totalSales: 498.0,
    cashAmount: 240.0,
    cardAmount: 250.0,
    variance: -8.0,
    correctionRequested: true,
    station: "Central Avenue",
  },
];

export const deliveries: Delivery[] = [
  {
    id: "d1",
    supplier: "PetroLink Supply",
    dateTime: "2026-07-14T09:30:00",
    fuelType: "Diesel",
    liters: 12000,
    tank: "T-02",
    invoiceNumber: "INV-88421",
  },
  {
    id: "d2",
    supplier: "Horizon Fuels",
    dateTime: "2026-07-12T16:10:00",
    fuelType: "Petrol",
    liters: 8000,
    tank: "T-01",
    invoiceNumber: "INV-88390",
  },
  {
    id: "d3",
    supplier: "PetroLink Supply",
    dateTime: "2026-07-10T11:00:00",
    fuelType: "Premium",
    liters: 5000,
    tank: "T-03",
    invoiceNumber: "INV-88355",
  },
];

export const reconciliations: Reconciliation[] = [
  {
    id: "r1",
    shift: "Jul 14 · Omar Riaz",
    expectedCash: 287.0,
    countedCash: 290.0,
    cardAmount: 285.0,
    variance: 3.0,
  },
  {
    id: "r2",
    shift: "Jul 14 · Sara Malik",
    expectedCash: 260.5,
    countedCash: 260.5,
    cardAmount: 280.0,
    variance: 0,
  },
  {
    id: "r3",
    shift: "Jul 13 · Omar Riaz",
    expectedCash: 248.0,
    countedCash: 240.0,
    cardAmount: 250.0,
    variance: -8.0,
  },
];

export const expenses: Expense[] = [
  {
    id: "e1",
    date: "2026-07-15",
    category: "Maintenance",
    amount: 85.0,
    note: "Nozzle replacement Pump 3",
    enteredBy: "Manager Lee",
  },
  {
    id: "e2",
    date: "2026-07-14",
    category: "Utilities",
    amount: 220.0,
    note: "Electricity mid-cycle",
    enteredBy: "Accountant Priya",
  },
  {
    id: "e3",
    date: "2026-07-13",
    category: "Supplies",
    amount: 46.5,
    note: "Cleaning kit + receipt paper",
    enteredBy: "Manager Lee",
  },
];

export const auditLog: AuditEntry[] = [
  {
    id: "a1",
    timestamp: "2026-07-15T08:22:00",
    user: "Amina Khan",
    role: "Operator",
    action: "Sale recorded",
    details: "Petrol 40 L · Cash $56.00",
    station: "Central Avenue",
  },
  {
    id: "a2",
    timestamp: "2026-07-15T06:05:00",
    user: "Amina Khan",
    role: "Operator",
    action: "Shift started",
    details: "Opening float $150.00",
    station: "Central Avenue",
  },
  {
    id: "a3",
    timestamp: "2026-07-14T22:10:00",
    user: "Manager Lee",
    role: "Manager",
    action: "Shift verified",
    details: "Shift sh3 approved",
    station: "West Ring Road",
  },
  {
    id: "a4",
    timestamp: "2026-07-14T18:40:00",
    user: "Omar Riaz",
    role: "Operator",
    action: "Correction requested",
    details: "Cash tally mismatch · $3.00",
    station: "Central Avenue",
  },
];

export const reports: Report[] = [
  {
    id: "rp1",
    name: "Daily sales snapshot",
    type: "Sales",
    period: "Jul 15, 2026",
    generatedOn: "2026-07-15T09:00:00",
    status: "Ready",
  },
  {
    id: "rp2",
    name: "Tank inventory levels",
    type: "Inventory",
    period: "Week of Jul 13",
    generatedOn: "2026-07-15T08:00:00",
    status: "Ready",
  },
  {
    id: "rp3",
    name: "Cash reconciliation",
    type: "Reconciliation",
    period: "Jul 1–15",
    generatedOn: "2026-07-15T07:30:00",
    status: "Generating",
  },
  {
    id: "rp4",
    name: "Expense ledger",
    type: "Expenses",
    period: "July 2026",
    generatedOn: "2026-07-14T20:00:00",
    status: "Ready",
  },
  {
    id: "rp5",
    name: "Variance exceptions",
    type: "Variances",
    period: "Jul 1–15",
    generatedOn: "2026-07-14T19:00:00",
    status: "Failed",
  },
];

export const dashboardMetrics = {
  todaysSales: 206.4,
  litersSold: { Petrol: 72.5, Diesel: 48.0, Premium: 25.0 },
  activeShift: {
    operator: "Amina Khan",
    startedAt: "2026-07-15T06:00:00",
    status: "Active" as const,
  },
  cashVariance: -2.5,
  unsyncedCount: 2,
};

export const stations = ["Central Avenue", "West Ring Road", "Harbor Outlet"];
export const operators = ["Amina Khan", "Omar Riaz", "Sara Malik"];
export const users = [
  { id: "u1", name: "Amina Khan", role: "Operator", email: "amina@station.local" },
  { id: "u2", name: "Omar Riaz", role: "Operator", email: "omar@station.local" },
  { id: "u3", name: "Manager Lee", role: "Manager", email: "lee@station.local" },
  { id: "u4", name: "Accountant Priya", role: "Accountant", email: "priya@station.local" },
  { id: "u5", name: "Owner Patel", role: "Owner", email: "owner@station.local" },
];

export const roleHomes: Record<Role, string> = {
  operator: "/operator",
  manager: "/manager",
  accountant: "/accountant",
  owner: "/owner",
};
