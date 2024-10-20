<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 ps text-white bg-dark" style="width: 243px; margin-top: -70px; height: 100%;">
    <a href="/admin" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      <span class="fs-4">Quản trị</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="/admin" class="nav-link active" aria-current="page">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
           Trang chủ
        </a>
      </li>
      <li>
        <router-link :to="{name:'rider-list'}" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
          Quản lý tay đua
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'team-list'}" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
          Quản lý đội đua
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'calendar-info'}" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
          Quản lý lịch đua
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'result-info'}" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
          Thống kê điểm 
        </router-link>
      </li>
    </ul>
    <hr>
  </div>
</template>