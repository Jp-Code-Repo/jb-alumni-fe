import { type Awards } from "./AwardsModel";

export interface AlumniProfessionalBackground {
    id: string,
    position: string,
    company_id: string,
    employment_start_date: string,
    employment_end_date?: string,
    employment_status: string,
    awards: Awards []
}