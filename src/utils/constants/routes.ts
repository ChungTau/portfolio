import ErrorPage from "../../pages/ErrorPage";
import MainPage from "../../pages/MainPage";
import { RouteConfig } from "../../types/RouteConfig";

const mainRoute = {
    MAIN: {
        name: 'Main',
        path: '/',
        component: MainPage,    
    }as RouteConfig,
};

const errorRoute = {
    ERROR: {
        name: 'Error',
        path: '/badpage',
        component: ErrorPage,
    }as RouteConfig,
};

export const routes = Object.freeze({
    ...mainRoute,
    ...errorRoute,
    ERRORREDIRECT:{
        name: 'ErrorRedirect',
        path: '*',
        to: errorRoute.ERROR.path
    }as RouteConfig
});