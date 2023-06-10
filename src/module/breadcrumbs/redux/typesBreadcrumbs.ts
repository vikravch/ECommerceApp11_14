export default class Crumb {
    title: string | undefined;
    url: string | undefined
}

export interface BreadCrumbsStore {
    breadcrumbs: Array<Crumb>,
    count: number
}