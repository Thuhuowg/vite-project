
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
        },

        {
            path: "result/:race_id",
            name: "result",
            component:()=>import("../components/TheResult.vue")
        },
        {
            path: "/standings",
            name:"standing",
            component: ()=>import ("../components/TheStandings.vue")
        },
        {
            path: "login",
            name:"login-client",
            component: ()=>import("../components/Login.vue"),
            // beforeEnter: (to, from, next) => {
            //     const token = localStorage.getItem('token');
            //     // const isAuthenticated = /* logic to check authentication */;
            //     if (!token) {
            //         next({ name: 'home-client' }); // Cho phép vào trang
            //     } 
            //   }
        },
        {
            path:"register",
            name: "register",
            component: ()=>import("../components/Login.vue"),
        }
        
        ]
    }
]
export default home
