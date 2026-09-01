import { AlumniProfileService } from "@/app/services/AlumniProfileService";

import { useQuery } from "@tanstack/react-query";

const service = new AlumniProfileService(null);

export function useProfileIndex (
    page: any|null,
    data: any,
    config: any|null,
) {
    return useQuery({
        queryKey: ["alumni", page, config],
        queryFn: () => service.index(page, data, config),
    });
}