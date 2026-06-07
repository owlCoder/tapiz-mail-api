export type LicensePlan = "starter" | "pro" | "institution";

export interface SendLicenseBody {
  to: string;
  key: string;
  plan: LicensePlan;
  expiresAt?: string | null;
  isTrial?: boolean;
  appName?: string;
}
