// Code your solution here
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = batteryBatches.reduce((total, element) => element * 2 + total, 1)