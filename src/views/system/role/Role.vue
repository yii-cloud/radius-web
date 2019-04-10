<template>
  <a-layout-content style="margin: 0 16px;">
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>角色管理</a-breadcrumb-item>
      <a-breadcrumb-item>角色列表</a-breadcrumb-item>
    </a-breadcrumb>
    <div :class="'content-div'">
      <div style="margin-bottom: 10px">
        <template>
          <a-form class="ant-advanced-search-form" :form="search">
            <a-row :gutter="24">
              <a-col :span="6" :style="{ display:'block'}">
                <a-form-item :label="'角色名称'">
                  <a-input
                    v-decorator="[
                'name'
              ]"
                    placeholder="角色名称搜索"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="6" :style="{ display:'block'}">
                <a-form-item :label="'编码'">
                  <a-input
                    v-decorator="[
                'code'
              ]"
                    placeholder="根据编码搜索"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="6" :style="{ textAlign: 'left' }">
                <a-button type="primary" icon="search" @click="searchFunc">搜 索</a-button>
                <a-button
                  :style="{ marginLeft: '8px', backgroundColor:'#ffca7e', color:'white' }"
                  icon="reload"
                  @click="resetSearch"
                >重 置</a-button>
              </a-col>
            </a-row>
          </a-form>
        </template>
      </div>
      <div style="height:39px">
        <template>
          <div>
            <a-button type="primary" @click="show()">
              <a-icon type="plus"/>添加角色信息
            </a-button>
            <a-modal
              :title="isUpdate ? '修改角色信息' : '增加角色'"
              :maskClosable="false"
              v-model="visible"
              :footer="null"
            >
              <template>
                <a-form :form="form" @submit="handleSubmit">
                  <a-form-item label="编码" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                    <a-input
                      v-decorator="[
                                    'code',
                                    {rules: [{ required: true, message: '请输入角色编码!' }]}
                                    ]"
                    />
                  </a-form-item>
                  <a-form-item label="角色名称" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                    <a-input
                      v-decorator="[
                                    'name',
                                    {rules: [{ required: !isUpdate, message: '请输入角色名称!' }]}
                                    ]"
                    />
                  </a-form-item>
                  <a-form-item label="描述信息" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
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
      >
        <span slot="action" slot-scope="record" class="table-operation">
          <span>
            <a @click="modifyRole(record.id)">
              <a-icon type="edit"/>修改
            </a>
          </span>
          <a-divider type="vertical"/>
          <span>
            <a style="color:#da6868" @click="deleteRole(record.id)">
              <a-icon type="delete"/>删除
            </a>
          </span>
        </span>
      </a-table>
    </div>
  </a-layout-content>
</template>
<script>
// import lodash from "lodash";
// const pageInit = { page: 1, pageSize: 10 };

const columns = [
  { title: "名称", dataIndex: "name", key: "name" },
  { title: "编码", dataIndex: "code", key: "code"},
  { title: "创建时间", dataIndex: "createTime", key: "createTime" },
  { title: "最近修改时间", dataIndex: "updateTime", key: "updateTime" },
  { title: "描述", dataIndex: "description", key: "description" },
  {
    title: "操作",
    key: "operator",
    fixed: "right",
    width: 150,
    scopedSlots: { customRender: "action" }
  }
];
export default {
  components: {},
  data() {
    return {
      data: [],
      visible: false,
      pagination: { showTotal: this.showTotal },
      loading: false,
      columns,
      formLayout: "horizontal",
      form: this.$form.createForm(this),
      search: this.$form.createForm(this),
      isUpdate: false
    };
  },
  methods: {
      resetSearch() {

      },
      searchFunc(e) {
         e.preventDefault();
      },
      showTotal(total) {
        return "每页" + this.pagination.pageSize + "条 | 共" + total + "条数据";
      },
      show() {
        this.visible = true;
        this.isUpdate = false;
        this.form.resetFields();
      },
      handleSubmit(e) {
        e.preventDefault();
      }
  }
};
</script>

<style>
.ant-advanced-search-form {
  padding: 24px;
  background: #fbfbfb;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
}

.ant-advanced-search-form .ant-form-item {
  display: flex;
}

.ant-advanced-search-form .ant-form-item-control-wrapper {
  flex: 1;
}

#components-form-demo-advanced-search .ant-form {
  max-width: none;
}
#components-form-demo-advanced-search .search-result-list {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

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