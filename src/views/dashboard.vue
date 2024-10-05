<template>
    <div class="container-fluid p-0">
        <TheHeaderAdmin></TheHeaderAdmin>
    </div>
        <div class="min-h-screen">
            <div class="row">
            <div class="col-sm-4">
                <TheSideBar></TheSideBar>
            </div>
            <div class="col-sm-8">
                <TheCreateTeam></TheCreateTeam>
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
        TheCreateTeam
    }
}
</script>