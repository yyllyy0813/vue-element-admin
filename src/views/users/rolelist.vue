<template>
  <div class="app-container">
    <el-button type="primary" @click="handleAddRole">New Role</el-button>

    <el-table :data="rolesList" style="width: 100%;margin-top:30px;" border>
      <el-table-column prop="id" align="center" label="Role Key" width="220">
      </el-table-column>
      <el-table-column prop="name" align="center" label="Role Name" width="220">
      </el-table-column>
      <el-table-column prop="description" header-align="center" label="Description">
      </el-table-column>
<!--      <el-table-column prop="permissionNameList" align="header-center" label="permissionNameList">-->
<!--      </el-table-column>-->
      <el-table-column align="center" label="Operations">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="handleEdit(scope)">Edit</el-button>
          <el-button type="danger" size="small" @click="handleDelete(scope)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>

<!--    <el-dialog :visible.sync="dialogVisible" :title="dialogType==='edit'?'Edit Role':'New Role'">-->
<!--      <el-form :model="role" label-width="80px" label-position="left">-->
<!--        <el-form-item label="Name">-->
<!--          <el-input v-model="role.name" placeholder="Role Name" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="Desc">-->
<!--          <el-input-->
<!--            v-model="role.description"-->
<!--            :autosize="{ minRows: 2, maxRows: 4}"-->
<!--            type="textarea"-->
<!--            placeholder="Role Description"-->
<!--          />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="Menus">-->
<!--          <el-tree-->
<!--            ref="tree"-->
<!--            :check-strictly="checkStrictly"-->
<!--            :data="routesData"-->
<!--            :props="defaultProps"-->
<!--            show-checkbox-->
<!--            node-key="path"-->
<!--            class="permission-tree"-->
<!--          />-->
<!--        </el-form-item>-->
<!--      </el-form>-->
<!--      <div style="text-align:right;">-->
<!--        <el-button type="danger" @click="dialogVisible=false">Cancel</el-button>-->
<!--        <el-button type="primary" @click="confirmRole">Confirm</el-button>-->
<!--      </div>-->
<!--    </el-dialog>-->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        rolesList:[
          {
            id:1,
            name:"root",
            description:"超级管理员",
            permissionNameList:[]
          }
        ]
      }
    },
    created()
    {
      const _this = this;
      axios.get("http://localhost:9999/role/roleList").then(function (resp) {
        console.log(resp)
        _this.rolesList = resp.data.data.roleData;
      })
    }
  }
</script>

<style lang="scss" scoped>
  .app-container {
    .roles-table {
      margin-top: 30px;
    }
    .permission-tree {
      margin-bottom: 30px;
    }
  }
</style>
