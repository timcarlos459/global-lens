export interface CompanySettings {
  id?: number;

  company_name: string;
  company_email: string;
  company_phone: string;

  company_address: string;
  website: string;

  facebook: string;
  instagram: string;
  linkedin: string;
  youtube: string;
  tiktok: string;
  twitter: string;

  currency: string;
  timezone: string;

  booking_email_notifications: boolean;
  booking_sms_notifications: boolean;

  maintenance_mode: boolean;

  created_at?: string;
  updated_at?: string;
}
