import { lazy, LazyExoticComponent } from "react";
import { LazyPage1 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path:string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout1" */ '../01-lazyload/layout/LazyLayout'));
const NoLazy = lazy(() => import( /* webpackChunkName: "NoLazy1" */ '../01-lazyload/pages/NoLazy'));

export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'Lazy-Layout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No-Lazy'
    },
];