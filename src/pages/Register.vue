<template>
  <div>
    <div id="primary" class="p-t-b-100 height-full ">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mx-md-auto">
            <div class="text-center">
              <img src="assets/img/dummy/u5.png" alt="" />
              <h3 class="mt-2">Create A New Account</h3>
              <p class="p-t-b-20">
                Please enter your details to create new account.
              </p>
            </div>

            <el-form
              :model="form"
              ref="form"
              label-width="120px"
              class="demo-dynamic"
              label-position="top"
            >
              <el-form-item prop="name" label="Name">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item
                prop="email"
                label="Email"
                :rules="[
                  {
                    required: true,
                    message: 'Please input email address',
                    trigger: 'blur'
                  },
                  {
                    type: 'email',
                    message: 'Please input correct email address',
                    trigger: ['blur', 'change']
                  }
                ]"
              >
                <el-input v-model="form.email"></el-input>
              </el-form-item>
              <el-form-item label="Password" prop="password">
                <el-input
                  type="password"
                  v-model="form.password"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submit()">Submit</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
    <!-- #primary -->
  </div>
</template>
<script>
import { register } from "../services/userService";
import auth from "../services/authService";
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async submit() {
      console.log("see");
      try {
        const response = await register(this.form);
        // auth.loginWithJwt("token", response.headers["x-auth-token"]);
        this.$message({
          showClose: true,
          message: "Your account has been created.",
          type: "success"
        });

        window.location = "/";
      } catch (ex) {
        if (ex.response && ex.response.status === 400) {
          this.$message({
            showClose: true,
            message: ex.response.data,
            type: "error"
          });
        }
      }
    }
  }
};
</script>
