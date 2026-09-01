import {type Awards} from "./AwardsModel";

export interface AlumniEducationalBackground {
  id: string,
  level: string,
  school_program_id: string,
  from_date: string,
  to_date: string,
  is_graduated: boolean,
  year_graduated: string,
  school_id: string,
  awards : Awards [],
}
