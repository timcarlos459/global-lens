// types/adminAnalytics.ts

export interface MonthlyRevenue {
  month: string;
  revenue: number;
}

export interface MonthlyBookings {
  month: string;
  bookings: number;
}

export interface AnalyticsData {
  totalRevenue: number;
  totalBookings: number;
  totalCustomers: number;
  totalDestinations: number;

  paidPayments: number;
  pendingPayments: number;

  confirmedBookings: number;
  pendingBookings: number;
  cancelledBookings: number;
  completedBookings: number;

  activeCustomers: number;
  publishedDestinations: number;

  monthlyRevenue: MonthlyRevenue[];
  monthlyBookings: MonthlyBookings[];
}
