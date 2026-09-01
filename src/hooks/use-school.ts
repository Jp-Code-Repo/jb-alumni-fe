import { SchoolService } from "@/app/services/SchoolService";

import { useQuery } from "@tanstack/react-query";

const service = new SchoolService(null);

export function useSchoolIndex (
    page: any|null,
    d: any,
    config: any|null,
) {
    const q = useQuery({
        queryKey: ["schoolIndex", page, config],
        queryFn: () => service.index(page, d, config),
    });

    const {
        data, 
        status, 
        isLoading,
        isError
    } = q

    return {
        SchoolData: data, 
        SchoolDataStatus: status, 
        SchoolDataIsLoading: isLoading,
        SchoolDataIsError: isError
    }
}