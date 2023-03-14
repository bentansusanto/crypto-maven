export interface Quicklink{
    page : string;
    link : string;
}

export interface MobileLink extends Quicklink{
    icon : any;
}

export interface Content{
    title : string;
    content : string;
}