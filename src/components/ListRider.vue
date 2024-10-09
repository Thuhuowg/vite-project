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
    <button type="button" class="btn btn-danger " style="border-radius: 20px; ">Motogp</button>
    <div class="row">
        <!-- <router-view></router-view> -->
<div class="col-3 container-card-rider">
        <router-link :to="{name:'rider_detail',params: { rider_code: 'ABC123' } }">
     <div class="pt-4">
        <div class="card bg-dark text-white " >
  <img src="https://resources.motogp.pulselive.com/photo-resources/2024/02/19/3a568eee-1e12-4091-b120-f53c71cbe8f6/rider-bio_francescobagnaia.png?height=400&width=600" class="card-img img-rider" alt="...">
  <div class="card-img-overlay  text-start">
    <h5 class="content-medium-1 ">#FB1</h5>
    <div class="row content-medium mb-0">
        <p class="col mb-3">Francesco</p><span class="col name_rider">Bagnaia</span>
    </div>
    
    <div class="row">
        <div class="col">
            Italy
        </div>
        <div class="col-8">
            Ducati Lenovo Team
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