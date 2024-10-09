
const home = [
    {
        path: "",
        name: "layout-client",
        component: ()=>import("../views/home.vue"),
        children: [{
            path: "",
            name: "home-client",
            component: ()=>import("../components/races/TheBanner.vue"),
        },{
            path: "calendar",
            name: "calendar",
            component: ()=>import("../components/Calendar.vue")
        },{
            path: "rider",
            name: "rider",
            component: ()=>import("../components/ListRider.vue")
            // children: [{
            //     path:":rider_code",
            //     name:'rider_detail',
            //     component: ()=> import("../components/TheRider.vue")
            // }]
        },
        {
            path:"rider/:rider_code",
            name:'rider_detail',
            component: ()=> import("../components/TheRider.vue")
        },
        {
            path: "team",
            name: "team",
            component: ()=> import("../components/ListTeam.vue")
        },
        {
            path:"team/:id",
            name: "team_detail",
            component: ()=>import("../components/TheTeam.vue")
        }
        
        ]
    }
]
export default home
