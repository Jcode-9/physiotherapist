export interface ContactFormState {
  success: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    message?: string[];
    general?: string[];
  };
}