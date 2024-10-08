<template>
    <div class="container-fluid p-0">
    <div class="layout fixed-top">
        <TheheaderMain></TheheaderMain>
        <TheHeaderBar></TheHeaderBar>
        <TheInfoRaceNow></TheInfoRaceNow>
        
    </div>
        <div class="min-h-screen " >
            <router-view ></router-view>
            <!-- <div class="">
                <TheBannerRace></TheBannerRace>
            </div> -->

            <!-- <div class="flex flex-col space-y-4 mt-10">
                <div>
                    <div class="ms-10 grid grid-cols-3 gap-4">
                    <div class="col-span-2">
                        <TheMenuHome />
                    </div>
                  
                    <div class="flex flex-row-reverse me-10"> 
                        <div class="">filter</div>
                        <div class="">choice</div>
                    </div>
                </div>
                </div>
                <div>02</div>
                <div>03</div>
            </div> -->
        </div>
        <footer class="bg-light text-center py-5">
            <TheFooter></TheFooter>
        </footer>
    </div>
</template>
<script>
import TheHeader from '../components/layouts/TheHeader.vue'
import TheHeaderBar from '../components/layouts/TheHeaderBar.vue';
import TheheaderMain from '../components/layouts/TheheaderMain.vue';
import TheInfoRaceNow from '../components/layouts/TheInfoRaceNow.vue';
import TheBannerRace from '../components/races/TheBanner.vue';
import TheFooter from '../components/layouts/TheFooter.vue'
import Calendar from '../components/Calendar.vue';
// import TheBanner from '../components/TheBanner.vue'

import TheMenuHome from '../components/TheMenuHome.vue'
export default {
    components:{ 
        // TheHeader, 
        // TheBanner,
        // TheMenuHome,
        TheheaderMain,
        TheHeaderBar,
        TheInfoRaceNow,
        TheBannerRace,
        TheFooter
    },
}
</script>