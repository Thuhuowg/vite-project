
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
            path:":rider_code",
            name:'rider_detail',
            component: ()=> import("../components/TheRider.vue")
        }
        ]
    }
]
export default home