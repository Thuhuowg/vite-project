<template>
  <div>
    <h2>Tạo đội</h2>
    <form @submit.prevent="createTeam">
      <div>
        <label for="team_name">Tên đội:</label>
        <input type="text" v-model="teamName" id="team_name" required />
      </div>
      <div>
        <label for="motobike">Xe máy:</label>
        <input type="text" v-model="motobike" id="motobike" required />
      </div>
      <div>
        <label for="moto_brand">Hãng xe:</label>
        <input type="text" v-model="motoBrand" id="moto_brand" required />
      </div>
      <div>
        <label for="moto_image">Hình ảnh xe:</label>
         <input type="file" id="motoImage" @change="onFileChange" />
      </div>
      <button type="submit">Tạo đội</button>
    </form>
  </div>
  
</template>
