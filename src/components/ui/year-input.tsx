import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const YearInput = ({
    year,
    setYear
}: any) => {

    const currentYear = new Date().getFullYear();
    const years = Array.from(
        { length: currentYear - 1950 + 1 },
        (_, i) => currentYear - i
    );
    return (<>
         <Select value={year} onValueChange={setYear}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Select year" />
            </SelectTrigger>

            <SelectContent>

            {years.map((year) => (
                <SelectItem value={`${year}`}>{year}</SelectItem>
            ))}
            </SelectContent>
        </Select>
    </>)
}