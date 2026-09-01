import {type HTTPEnpointType} from "@/app/models/api.model";
/**
 * api routes
 * 
 * scheme:
 * each index at the most parent
 * are the prefix to contain
 * each individual route
 * according to its specific
 * business logic.
 * 
 * in the backend, we 
 * must acheive these or we map
 * our routes according to
 * this scheme.
 * 
 * for ex., user
 * under user there are
 * auth and get_users so the parent
 * is user as the prefix
 * 
 * endpoint ex: 
 * http://localhost:8080/user/auth or 
 * http://localhost:8080/user/get_user  
 * 
 */

const BASE_URL = import.meta.env.VITE_APP_BASE_URL ?? '';
/*
*
* Use this pattern if you create your own endpoint
* and include it on the export 
* so that you can use it outside
* this file
* 
* EndpointType is a model that defines
* the return type of each endpoint object
* @return
* endpoint: string
* req: HTTPMethod - get | post | patch | delete 
* basic CRUD
*
*/
const AUTH: Object = {
    'login'     : () :   HTTPEnpointType => ({endpoint: `${BASE_URL}/auth/login`,      req: "post"}),
    'logout'    : () :   HTTPEnpointType => ({endpoint: `${BASE_URL}/auth/logout`,     req: "post"}),
    'refresh'   : () :   HTTPEnpointType => ({endpoint: `${BASE_URL}/auth/refresh`,    req: "post"}), 
    'me'        : () :   HTTPEnpointType => ({endpoint: `${BASE_URL}/auth/me`,         req: "post"}),
}

const MAIN_MICROSERVICE: Object = {
    alumni : {
        index: (page?:number|null): HTTPEnpointType => ({endpoint: `${BASE_URL}/main/alumni/profile${page ? "?page="+page : ''}`,      req: "get"}),
        create : (): HTTPEnpointType => ({endpoint: `${BASE_URL}/main/alumni/profile`,      req: "post"}),
        patch : (profile: string): HTTPEnpointType => ({endpoint: `${BASE_URL}/main/alumni/profile/${profile}`, req: "patch"}),
        find : (profile: string): HTTPEnpointType => ({endpoint: `${BASE_URL}/main/alumni/profile/${profile}`, req: "get"}),
        delete : (profile: string): HTTPEnpointType => ({endpoint: `${BASE_URL}/main/alumni/profile/${profile}`, req: "delete"}),
    },
    school : {
        index: (page?:number|null): HTTPEnpointType => ({endpoint: `${BASE_URL}/main/school${page ? "?page="+page : ''}`,  req: "get"}),
        program : { 
            index: (page?:number|null): HTTPEnpointType => ({endpoint: `${BASE_URL}/main/school/program${page ? "?page="+page : ''}`,  req: "get"}),
        }
    },
    company : {
        index: (page?:number|null): HTTPEnpointType => ({endpoint: `${BASE_URL}/main/company${page ? "?page="+page : ''}`,  req: "get"}),
    }
}


const USER: Object = {
}

const LOG: Object = {      
}

export { 
    AUTH,
    MAIN_MICROSERVICE,
    LOG,
    USER
};