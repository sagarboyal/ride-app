export type TripRequest = {
  id: string;
  icon: string; 
  place: string;
  time: string;
  requestCount: number;
  seen: boolean;
};

export const tripRequests = [
  {
    id: "1",
    icon: "clock",
    place: "Lal Bagh Palace",
    time: "Tomorrow, 5:45 PM",
    requestCount: 3,
    seen: false
  },
  {
    id: "2",
    icon: "airplane",
    place: "Kempegowda Airport",
    time: "2nd September, 7:00 AM",
    requestCount: 0,
    seen: true
  },
  {
    id: "3",
    icon: "briefcase",
    place: "Studio Do-Undo",
    time: "3rd September, 10:30 AM",
    requestCount: 12,
    seen: true
  },
];
