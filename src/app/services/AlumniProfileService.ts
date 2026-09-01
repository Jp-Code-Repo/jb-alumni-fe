import { AbstractApiService } from "./AbstractApiService";
import { MAIN_MICROSERVICE } from "@/app/config/api"

export class AlumniProfileService extends AbstractApiService 
{
    protected alumniProfileService: any;

    public constructor (
        accessToken: string|undefined|null, 
        baseURL? : string|undefined|null, 
        refreshToken? : string|undefined|null,
        onAuthTokenUpdate? : (data:any) => void
    ) {
        super(
            accessToken,
            baseURL,
            refreshToken,
            onAuthTokenUpdate
        )

        this.alumniProfileService = MAIN_MICROSERVICE;
    }

    async index <T=any> (
        page:number,
        data: any, 
        config?: any
    ) {
        try {
            let response = await this.requestV2<T>(
                this.alumniProfileService.alumni.index(page), 
                data, 
                config
            );
            return response?.data
        } catch (e: any) {
            throw e;
        }
    }
    
    async createAlumniProfile <T=any> (data: any, config?: any) {
        try {
            let response = await this.requestV2<T>(
                this.alumniProfileService.alumni.create(), 
                data, 
                config
            );
            return response?.data
        } catch (e: any) {
            throw e;
        }
    }

    async deleteAlumniProfile <T=any> (
        profile: any,
        data: any, 
        config?: any
    ) {
        try {
            let response = await this.requestV2<T>(
                this.alumniProfileService.alumni.delete(profile), 
                data, 
                config
            );
            return response?.data
        } catch (e: any) {
            throw e;
        }
    }

    async patchAlumniProfile <T=any> (
        profile: any,
        data: any, 
        config?: any
    ) {
        try {
            let response = await this.requestV2<T>(
                this.alumniProfileService.alumni.patch(profile), 
                data, 
                config
            );
            return response?.data
        } catch (e: any) {
            throw e;
        }
    }
}