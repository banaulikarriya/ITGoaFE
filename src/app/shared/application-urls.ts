import { environment } from '../../environments/environment';

const envUrlAppends = {
    baseApi: environment.apiUrl,
};

export const ApplicationUrls = {
    baseApi: envUrlAppends.baseApi,
    getcars : envUrlAppends.baseApi ,
    auth : {
        login :  envUrlAppends.baseApi + 'login',
    },
    user: {
        signup : envUrlAppends.baseApi + 'signup',
        profile: envUrlAppends.baseApi + 'profile/',
    }
};
