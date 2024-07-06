import { differenceInYears } from "date-fns/fp";

export function calculateAge(dob: Date) {
	return differenceInYears(dob, new Date());
}
