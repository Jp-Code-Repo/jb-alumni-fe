import CompanyService from "@/app/services/CompanyService";

import { useQuery } from "@tanstack/react-query";

const service = new CompanyService(null);

export function useCompanyIndex (
    page: any|null,
    d: any,
    config: any|null,
) {
    const q = useQuery({
        queryKey: ["companyIndex", page, config],
        queryFn: () => service.index(page, d, config),
    });

    const {
        data, 
        status, 
        isLoading,
        isError
    } = q

    return {
        CompanyData: data, 
        CompanyDataStatus: status, 
        CompanyDataIsLoading: isLoading,
        CompanyDataIsError: isError
    }
}