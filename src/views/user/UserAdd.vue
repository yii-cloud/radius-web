<template>
  <a-layout-content style="margin: 0 16px;">
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>用户管理</a-breadcrumb-item>
      <a-breadcrumb-item>添加用户</a-breadcrumb-item>
    </a-breadcrumb>
    <div :class="'content-div'">
      <a-form :form="form" :style="{width:'800px', margin:'auto auto'}" @submit="handleSubmit">
        <a-form-item label="用户名" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
              'username',
              {rules: [{ required: true, message: '请输入用户名!' }]}
            ]"
            placeholder="请输入用户名"
          />
        </a-form-item>
        <a-form-item label="密码" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            type="password" placeholder="请输入密码"
            v-decorator="[
                          'password',
                          {rules: [{ required: true, message: '请输入密码!' }]}
                          ]"
          />
        </a-form-item>
        <a-form-item label="真实姓名" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
          'realName',
          {rules: [{ required: true, message: '请输入姓名!' }]}
        ]"
            placeholder="请输入姓名"
          ></a-input>
        </a-form-item>
        <a-form-item label="订购套餐" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-select
            @change="productSelected"
            v-decorator="[
          'productId',
          {rules: [{ required: true, message: '请选择套餐!' }]}
        ]"
            placeholder="请选择套餐"
          >
            <a-select-option
              v-for="item in products"
              :key="item.id"
              :value="item.id"
              :type="item.type"
              :serviceMonth = "item.serviceMonth"
            >{{item.name}}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" >
          <span slot="label">
            到期时间
            <a-tooltip title="流量和时长套餐可选择套餐使用的截止时间,不选择则使用套餐默认值(当日,当月,无限)！">
              <a-icon type="question-circle-o" />
            </a-tooltip>
          </span>
          <a-date-picker style="width:100%" placeholder="选填,到期时间"
            v-decorator="['expireTime', {initialValue: expire,rules: [{ type: 'object'}]}]"
          />
        </a-form-item>
        <a-form-item label="静态IP地址" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input placeholder="选填，静态IP地址" v-decorator="[
          'framedIpAddr'
        ]"/>
        </a-form-item>
        <a-form-item label="手机号码" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input v-decorator="[
          'mobile'
        ]" placeholder="选填，手机号码"></a-input>
        </a-form-item>
        <a-form-item label="电子邮件" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input v-decorator="[
              'email'
             ]" placeholder="选填，电子邮件"/>
        </a-form-item>
        <a-form-item label="装机地址" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-textarea
            :row="3"
            placeholder="请输入装机地址"
            v-decorator="[
          'installedAddr',
          {rules: [{ required: true, message: '请输入装机地址!' }]}
        ]"
          />
        </a-form-item>
        <a-form-item label="描述" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-textarea
            :row="3"
            v-decorator="[
          'description'
        ]"
            placeholder="选填，描述"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5}">
          <a-button type="primary" style="width:100%" html-type="submit">提交</a-button>
        </a-form-item>
      </a-form>
    </div>
  </a-layout-content>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this),
      products: [],
      expire:null
    };
  },
  methods: {
    fetchProducts() {
      this.axios
        .post(this.CONFIG.apiUrl + "/fetch/product", {})
        .then(response => {
          this.products = response.data.data;
        });
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        var expire = values["expireTime"];
        console.log(expire);
        if(expire != null) {
          expire = expire.format("YYYY-MM-DD HH:mm:ss");
        }
        if (!err) {
          this.axios
            .post(this.CONFIG.apiUrl + "/user/add", values)
            .then(response => {
              alert(response.data.message);
              this.$router.push("/user");
            })
            .catch(() => {});
        }
      });
    },
    productSelected(value, option) {
      if(option.data.attrs.type == 1) {
          var m = option.data.attrs.serviceMonth;
          var expireDate = moment().add(m, "M");
          this.expire = expireDate;
        }
    }
  },
  mounted() {
    this.fetchProducts();
  }
};
</script>