<!--<template>-->
<!--    <h1>事件增加</h1>-->
<!--</template>-->

<!--<script>-->
<!--  export default {-->
<!--    name: 'eventadd'-->
<!--  }-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
<template>
  <div class="app-container">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

      <el-form-item label="类型" prop="type" required>
        <el-select v-model="ruleForm.type" placeholder="请选择事件类型">
          <el-option label="雷电" value="雷电"></el-option>
          <el-option label="爆炸" value="爆炸"></el-option>
          <el-option label="台风" value="台风"></el-option>
          <el-option label="火箭发射" value="火箭发射"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="时间" required>
        <el-col :span="11">
          <el-form-item prop="time">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.time" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <!--                <el-button @click="test()">test</el-button>-->
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          type: '',
          time: ''
        },
        rules: {
          type: [
            { required: true, message: '请选择类型', trigger: 'change' }
          ],
          time: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      test() {
        console.log(this.ruleForm);
      },
      submitForm(formName) {
        const _this = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //alert('submit!');
            console.log(_this.ruleForm)
            axios.post("http://localhost:9999/event/save",this.ruleForm).then(function (resp) {
              console.log(resp);
              if(resp.data.msg == "添加成功"){
                _this.$message({
                  message: '添加成功',
                  type: 'success'
                });
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
