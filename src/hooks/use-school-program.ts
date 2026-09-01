import { SchoolProgramService } from "@/app/services/SchoolProgramService";

import { useQuery } from "@tanstack/react-query";

const service = new SchoolProgramService(null);

export function useSchoolProgramIndex (
    page: any|null,
    d: any,
    config: any|null,
) {
    const q = useQuery({
        queryKey: ["schooolProgram", page, config],
        queryFn: () => service.index(page, d, config),
    });

    const {
        data, 
        status, 
        isLoading,
        isError
    } = q

    return {
        USPschoolProgramData: data, 
        USPstatus: status, 
        USPisLoading: isLoading,
        USPisError: isError
    }
}