<template>
    <div class="">
        <div class="row mb-4 mt-4" style="height: 50px;">
            <h3 class="col-sm-10 pt-2">Danh sách các đội đua mùa giải 2024</h3>
            
                <div class="col-sm-2" style="font-size: 34px;" >
                  <router-link :to="{name: 'rider-create'}" >
                <font-awesome-icon :icon="['fas', 'square-plus']" />
               
              </router-link>
           
            </div>
          
            
        </div>
        <table class="table">
  <thead>
    <tr>
      <th scope="width-col-2">#</th>
      <th scope="width-col-2">Tên đội đua</th>
      <th scope="col">Xe đua</th>
      <th scope="col">Hãng xe</th>
      <th scope="col">Thao tác</th>
    </tr>
  </thead>
  <tbody>
    <tr  v-for="(team,index) in listTeamData" :key="team.id">
      <th class="width-col-1" scope="row">{{ index+1 }}</th>
      <td class="width-col-4">{{team.team_name}}</td>
      <td class="width-col-3">{{ team.motobike }}</td>
      <td class="width-col-3">{{ team.moto_brand }}</td>
      <td class="width-col-2">
        <div class="row">
          <div class="col p-0">
            <router-link :to="{name: 'team-update', params: {id: team.id}}">
            <button type="button"  class="btn btn-primary">Sửa</button>
            </router-link>
          </div>
          <div class="col p-0">
            <a href="">
            <button type="button"   class="btn btn-danger">Xoá</button>
          </a>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
    </div>
</template>
<script>
export default {
  data() {
        return {
          listTeamData: [],
        };
    },
 
    mounted() {
      this.listTeam();
      
    },
    methods: {
      async listTeam() {
      const apiURL = 'http://localhost:3000/team/admin'; // URL của API
      try {
        const response = await axios.get(apiURL);
        console.log(response)
        this.listTeamData = response.data; 
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu từ API:', error);
      }
    },
    async deleteRider(id) {
  const confirmDelete = confirm(`Bạn có chắc chắn muốn xóa đội đua ?`);
  if (confirmDelete) {
    const apiURL = `http://localhost:3000/rider/delete/${riderCode}`;
    try {
      await axios.get(apiURL);
      this.listRider(); // Cập nhật lại danh sách tay đua
      alert('Xóa tay đua thành công');
    } catch (error) {
      console.error('Lỗi khi xóa tay đua:', error);
      alert('Đã xảy ra lỗi khi xóa tay đua');
    }
  }
},
async updateRider(riderCode) {
    const apiURL = `http://localhost:3000/rider/admin/${riderCode}`;
    try {
      await axios.get(apiURL);
      this.listRider(); // Cập nhật lại danh sách tay đua
      alert('Xóa tay đua thành công');
    } catch (error) {
      console.error('Lỗi khi xóa tay đua:', error);
      alert('Đã xảy ra lỗi khi xóa tay đua');
    }
}

    }
}
</script>