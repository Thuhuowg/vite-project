<template>
     <div class="d-flex row nav-bar">
      
        <div class="d-flex col-sm-2 favion">
          <router-link :to="{name:'home-client'}" class="d-flex">
          <!-- <a class="d-flex" href=""> -->
            <img src="https://www.motogp.com/resources/v7.8.0/i/svg-files/elements/motogp-logo-75.svg" alt=""  style="width: 125px;">
          <!-- </a> -->
      </router-link>
    </div>
        <div class="d-flex col-sm-6">
          <div class="col-sm-2">
            <router-link :to="{name:'calendar'}">
            <button type="button" class="btn btn-outline-danger">
              Calendar
            </button>
          </router-link>
          </div>
          <div class="col-sm-3">
            <router-link :to="{name:'rider'}">
              <button type="button" class="btn btn-outline-danger">
                Result & Standing
              </button>
            </router-link>
          </div>
          <div class="col-sm-3">
           
            <router-link :to="{name:'rider'}">
              <button type="button" class="btn btn-outline-danger">
                Rider & Team
              </button>
            </router-link>

          </div>
          <div class="col-sm-2">
            <a href="#">
              <button type="button" class="btn btn-outline-danger">
                VideoPass
              </button>
            </a>
          </div>
          <div class="col-sm-1">
            <a href="#">
            <button type="button" class="btn btn-outline-danger">
              Videos
            </button>
          </a>
          </div>
          <div class="col-sm-1">
            <a href="#">
            <button type="button" class="btn btn-outline-danger">
              New
            </button>
          </a>
          </div>
        </div>
        <div class="d-flex col-sm justify-content-sm-end gap-2 service-user">
          <div class="col-sm-1">Login</div>
          <div class="col-sm-1" style="width: 1px !important;">|</div>
          <div class="col-sm-1">register</div>
          <div class="col-sm-1 ms-3">
            <font-awesome-icon :icon="['fas', 'helmet-un']" />
          </div>
        </div>
      </div>
</template>