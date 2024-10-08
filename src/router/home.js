
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
        }
        ]
    }
]
export default home
