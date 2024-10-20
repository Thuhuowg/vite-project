
const admin = [
    {
        path: "/admin",
        name: "home-admin",
        component: ()=>import("../views/dashboard.vue"),
        meta: { requiresAuth: true, requiredRoles: [1] },
        children: [{
            path:"/admin",
            name:"home-admin-1",
            component: ()=> import("../components/dashboard/HomeDefault.vue")
        },{
            path:"/riders",
            name:"rider-list",
            component: ()=> import("../components/dashboard/AdminListRider.vue")
        },{
            path:"rider/create",
            name: "rider-create",
            component: ()=>import ("../components/form/TheCreateRider.vue")
        },
        {
            path: "rider/update/:rider_code",
            name: "rider-update",
            component:()=> import ("../components/form/TheUpdateRider.vue")
        },
        {
            path: "rider/trash",
            name:"rider-trash",
            component: ()=>import ("../components/dashboard/AdminListRiderTrash.vue")
            
        },
        {
            path:"admin-teams",
            name: "team-list",
            component: ()=>import ("../components/dashboard/AdminListTeam.vue")
        },
        {
            path:"admin-team/:id",
            name:"team-update"
            
        },
        {
            path:"calendar",
            name:"calendar-info"
        },
        {
            path:"admin/result",
            name:"result-info"
        },
       
    ]
    
    },
    {
        path: "/admin-login",
        name:"admin-login",
        component: () =>import ("../components/form/LoginAdmin.vue"),
    }
]
export default admin