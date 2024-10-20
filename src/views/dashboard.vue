<template>
    <div class="container-fluid p-0">
        <TheHeaderAdmin></TheHeaderAdmin>
    </div>
        <div class="">
            <div class="row">
            <div class="col-sm-2" style="height: 1600px ;">
                <TheSideBar></TheSideBar>
            </div>
            <div class="col-sm min-h-screen">
                <router-view></router-view>
            </div>
           
            
        </div>
        </div>
    
</template>
<script>
import TheHeaderAdmin from '../components/dashboard/TheHeaderAdmin.vue';
import TheSideBar from '../components/dashboard/TheSideBar.vue';
import TheCreateTeam from '../components/form/TheCreateTeam.vue';




export default {
    components : {
        TheHeaderAdmin,
        TheSideBar,
        TheCreateTeam,

    }
}

</script>