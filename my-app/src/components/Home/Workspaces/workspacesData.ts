export interface IWorkspaceData {
    id: string;
    name: string;
    icon: string;
    users?:number;
    lastUpdate?:string;
};

export const workspaceData:IWorkspaceData[] = [
    {
        id:'clientContract',
        name:'Client contract',
        icon:'calendar.svg',
        users:6,
        lastUpdate:'10 hours ago'
    },
    {
        id:'supplierContract',
        name:'Supplier contract',
        icon:'entities.svg',
        users:12,
        lastUpdate:'1 hours ago'
    },
    {
        id:'corporate',
        name:'Corporate',
        icon:'entities2.svg',
        users:18,
        lastUpdate:'51 minutes ago'
    },
    {
        id:'groupNorms',
        name:'Group Norms',
        icon:'group.svg',
        users:24,
        lastUpdate:'5 days ago'
    },
    {
        id:'Contracts',
        name:'Contracts',
        icon:'file.svg',
        users:42,
        lastUpdate:'One week ago'
    },
    {
        id:'helpDesk',
        name:'Help Desk',
        icon:'plus.svg',
        users:242,
        lastUpdate:'3 months ago'
    },
    {
        id:'shop',
        name:'Shop',
        icon:'house2.svg',
        users:424,
        lastUpdate:'5 days ago'
    },
    {
        id:'lookingFor',
        name:'Looking for',
        icon:'search.svg',
        users:666,
        lastUpdate:'Month ago'
    },
    {
        id:'bussinesInsider',
        name:'Business Insider',
        icon:'sort.svg',
        users:997,
        lastUpdate:' 5 seconds ago'
    },
];

export default workspaceData;
