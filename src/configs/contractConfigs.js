import Evoting_ABI from "@/src/assets/abis/Evoting.json";

const Evoting_Address = process.env.environment === 'development'
  ? "0x5FbDB2315678afecb367f032d93F642f64180aa3" // localhost
  : "0xbD3511793B06C051c855c0850A2d7a2De64A7F40"; // sepolia


export { Evoting_ABI, Evoting_Address };
