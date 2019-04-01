<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <Menu/>
    <a-layout>
      <Header/>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>用户管理</a-breadcrumb-item>
          <a-breadcrumb-item>用户列表</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px'}">
          <div style="height:39px">
            <template>
              <div>
                <a-button type="primary" @click="showModal">
                  <a-icon type="plus"/>添加用户
                </a-button>
                <a-modal title="添加用户" :maskClosable="false" v-model="visible" :footer="null">
                  <template>
                    <a-form :form="form" @submit="handleSubmit">
                      <a-form-item label="用户名" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                        <a-input
                          v-decorator="[
                                    'username',
                                    {rules: [{ required: true, message: '请输入用户名!' }]}
                                    ]"
                        />
                      </a-form-item>
                      <a-form-item
                        label="真实姓名"
                        :label-col="{ span: 5 }"
                        :wrapper-col="{ span: 12 }"
                      >
                        <a-input
                          v-decorator="[
                                    'realName'
                                    ]"
                        />
                      </a-form-item>
                      <a-form-item label="密码" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                        <a-input
                          type="password"
                          v-decorator="[
                                    'password',
                                    {rules: [{ required: true, message: '请输入密码!' }]}
                                    ]"
                        />
                      </a-form-item>
                      <a-form-item
                        label="选择部门"
                        :label-col="{ span: 5 }"
                        :wrapper-col="{ span: 12 }"
                      >
                        <a-select
                          v-decorator="[
                                    'departmentId',
                                    {rules: [{ required: true, message: '请选择部门!' }]}
                                    ]"
                          placeholder="请选择部门"
                        >
                          <a-select-option
                            v-for="item in departments"
                            :key="item.id"
                            :value="item.id"
                          >{{item.name}}</a-select-option>
                        </a-select>
                      </a-form-item>
                      <a-form-item
                        label="联系方式"
                        :label-col="{ span: 5 }"
                        :wrapper-col="{ span: 12 }"
                      >
                        <a-input
                          v-decorator="[
                                    'mobile'
                                    ]"
                        />
                      </a-form-item>
                      <a-form-item
                        label="电子邮件"
                        :label-col="{ span: 5 }"
                        :wrapper-col="{ span: 12 }"
                      >
                        <a-input
                          v-decorator="[
                                    'email'
                                    ]"
                        />
                      </a-form-item>
                      <a-form-item
                        label="描述信息"
                        :label-col="{ span: 5 }"
                        :wrapper-col="{ span: 12 }"
                      >
                        <a-textarea
                          v-decorator="[
                                    'description'
                                    ]"
                          :rows="3"
                        />
                      </a-form-item>
                      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
                        <a-button type="primary" html-type="submit">提交</a-button>
                      </a-form-item>
                    </a-form>
                  </template>
                </a-modal>
              </div>
            </template>
          </div>
          <a-table
            :columns="columns"
            :dataSource="data"
            :pagination="pagination"
            :scroll="{ x: 1300}"
            :rowKey="record => record.id"
            @change="handleTableChange"
          >
            <span slot="action" slot-scope="record" class="table-operation">
              <span>
                <a @click="modifyManager(record.id)">
                  <a-icon type="edit"/>修改
                </a>
              </span>
              <a-divider type="vertical"/>
              <span>
                <a style="color:#da6868" @click="deleteManager(record.id)">
                  <a-icon type="delete"/>删除
                </a>
              </span>
            </span>
          </a-table>
        </div>
      </a-layout-content>
      <Footer/>
    </a-layout>
  </a-layout>
</template>
<script>
import Menu from "@/components/Menu";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const managerStates = {
  0: "禁用",
  1: "正常",
  2: "已删除"
};

const columns = [
  { title: "姓名", dataIndex: "realName", key: "realName" },
  { title: "用户名", dataIndex: "username", key: "username" },
  {
    title: "状态",
    dataIndex: "status",
    key: "status",
    customRender: text => {
      return managerStates[text];
    }
  },
  { title: "手机号码", dataIndex: "mobile", key: "mobile" },
  { title: "电子邮件", dataIndex: "email", key: "email" },
  { title: "创建时间", dataIndex: "createTime", key: "createTime" },
  { title: "描述", dataIndex: "description", key: "description" },
  {
    title: "操作",
    key: "add",
    fixed: "right",
    width: 150,
    scopedSlots: { customRender: "action" }
  }
];

export default {
  components: {
    Menu,
    Header,
    Footer
  },
  data() {
    return {
      data: [],
      pagination: {},
      loading: false,
      columns,
      managerStates,
      visible: false,
      formLayout: "horizontal",
      form: this.$form.createForm(this),
      departments: [],
    };
  },
  methods: {
    modifyManager(id) {
        this.axios
          .post(
            this.CONFIG.apiUrl + "/manager/info",
            { id: id},
            {
              headers: {
                rad_access_token: localStorage.getItem("rad_access_token")
              }
            }
          )
          .then((response) => {
            this.modifyVisible = true;
            this.updateForm.setFieldsValue(response.data.data);
          })
          .catch(() => {
            alert("修改管理员失败");
          });
    },
    deleteManager(id) {
      if (confirm("确认删除此管理员信息吗?")) {
        this.axios
          .post(
            this.CONFIG.apiUrl + "/manager/del",
            { id: id },
            {
              headers: {
                rad_access_token: localStorage.getItem("rad_access_token")
              }
            }
          )
          .then(response => {
            alert(response.data.message);
          })
          .catch(error => {
            alert("删除管理员失败: " + error.response.data.message);
          });
      }
    },
    // 分页
    handleTableChange(pagination) {
      const pager = { ...this.pagination };
      pager.current = pagination.current;
      this.pagination = pager;
      this.fetchManager({
        page: {
                pageSize: pagination.pageSize,
                page: pagination.current
            }
      });
    },
    fetchManager(params = {}) {
      this.loading = true;
      this.axios
        .post(this.CONFIG.apiUrl + "/manager/list", params, {
          headers: {
            rad_access_token: localStorage.getItem("rad_access_token")
          }
        })
        .then(response => {
          const pagination = { ...this.pagination };
          pagination.total = response.data.data.totalCount;
          pagination.pageSize = response.data.data.size;
          this.loading = false;
          this.data = response.data.data.data;
          this.pagination = pagination;
        });
    },

    // 弹窗
    showModal() {
      // 获取部门列表
      this.axios
        .post(
          this.CONFIG.apiUrl + "/department/list",
          {},
          {
            headers: {
              rad_access_token: localStorage.getItem("rad_access_token")
            }
          }
        )
        .then(response => {
          this.departments = response.data.data.data;
        });
      this.visible = true;
    },

    // 表单提交
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          this.axios
            .post(this.CONFIG.apiUrl + "/manager/add", values, {
              headers: {
                rad_access_token: localStorage.getItem("rad_access_token")
              }
            })
            .then(response => {
              alert(response.data.message);
            })
            .catch(error => {
              alert("添加管理员失败: " + error.response.data.message);
            });
        }
      });
    },
    // 需要管理员信息
    handleUpdate(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
            if(!err) {
                console.log("Received values of form: ", values);
            }
        });
    }
  },
  mounted() {
    this.fetchManager({page:{current:1, pageSize: 20}});
  }
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.title-name {
  color: #90a0af;
  display: block;
  height: 32px;
  text-align: center;
  padding-top: 5px;
}

.float-right {
  float: right;
}
</style>