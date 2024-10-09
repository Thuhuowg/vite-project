<template>
    <router-view></router-view>
    <div class="" style="margin-top: 162px;">
        <div class="" style=" background: linear-gradient(to right, #1c1c1c, #4c0000); width: 100%; height: 160px;">
        <div class="header-calendar d-flex" >
            <p>RIDERS & TEAM</p>
        </div>    
        <div class="row justify-content-start">
    <div class="col-4 choice-option row">
      <div class="col-3">
        <router-link :to="{name: 'rider'}">RIDERS</router-link>
        
      </div>
      <div class="col-1">
        <router-link :to="{name: 'team'}">TEAM</router-link>  
        
      </div>
    </div>
  </div>
  </div>
  <div class="ps-5 pt-5">
    <button type="button" class="btn btn-danger" style="border-radius: 20px;">Motogp</button>
    <div class="row">
        <!-- <router-view></router-view> -->
<div class="col-3 container-card-rider">
        <router-link :to="{name:'team_detail',params: { id: 'ABC123' } }">
     <div class="pt-4">
        <div class="card bg-dark text-white " >
  <img src="https://resources.motogp.pulselive.com/photo-resources/2024/02/22/769d87f4-f78b-41f1-8ac4-ac81a1c9c9b4/RLflGJDj.png?width=400" class="card-img img-team" alt="...">
  <div class="card-img-overlay card-team">
    <div class="row content-medium mb-0 mt-2">
        <p class="col mb-3">Aprilia Racing</p>
    </div>
    
    <div class="row">
        <div class="team-mate">
            Maverick Viñales
        </div>
        <div class="team-mate">
            Aleix Espargaro
        </div>
    </div>
  </div>
</div>
    </div>
        </router-link>
</div>
</div>
  </div>
    </div>
</template>