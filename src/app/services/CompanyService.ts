import { AbstractApiService } from "./AbstractApiService";

import { MAIN_MICROSERVICE } from "../config/api";

export default class CompanyService extends AbstractApiService {

    protected mainMicroService: any;

    public constructor (
        accessToken: string|undefined|null, 
        baseURL? : string|undefined|null, 
        refreshToken? : string|undefined|null,
        onAuthTokenUpdate? : (data:any) => void 
    ){
        super(
            accessToken,
            baseURL,
            refreshToken,
            onAuthTokenUpdate
        )
        this.mainMicroService = MAIN_MICROSERVICE;
    }

    public async index <T=any> (
        page:number,
        data: any, 
        config?: any
    ) {
        try {
            let response = await this.requestV2<T>(
                this.mainMicroService.company.index(page), 
                data, 
                config
            );
            return response?.data
        } catch (e: any) {
            throw e;
        }
    }

}