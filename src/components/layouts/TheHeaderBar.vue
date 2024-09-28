<template>
     <div class="d-flex row nav-bar">
        <div class="d-flex col-sm-2 favion">
          <a class="d-flex" href="">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStuhT9duVf1FbjUY_p83oJ0DtB1svw8eZE8UAYbMKvCHPgbdT144tl92X05gqbX0MqMP8&usqp=CAU" alt=""  style="width: 125px;">
          </a>
        </div>
        <div class="d-flex col-sm-6">
          <div class="col-sm-2">
            <a href="#">
            <button type="button" class="btn btn-outline-danger">
              Calendar
            </button>
          </a>
          </div>
          <div class="col-sm-3">
            
            <a href="#">
              <button type="button" class="btn btn-outline-danger">
                Result & Standing
              </button>
            </a>
          </div>
          <div class="col-sm-3">
           
            <a href="#">
              <button type="button" class="btn btn-outline-danger">
                Rider & Team
              </button>
            </a>

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