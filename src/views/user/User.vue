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
          <a-table
            :columns="columns"
            :dataSource="data"
            :pagination="pagination"
            :scroll="{ x: 1300, y: 800 }"
            :rowKey="record => record.Id"
            @change="handleTableChange"
          >
            <a slot="action" slot-scope href="javascript:;">Action</a>
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

const columns = [
  {
    title: "姓名",
    width: 150,
    dataIndex: "RealName",
    key: "RealName",
    fixed: "left"
  },
  { title: "创建时间", width: 500, dataIndex: "CreateTime", key: "CreateTime", fixed: "left" }
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
      columns
    };
  },
  methods: {
    handleTableChange (pagination) {
      const pager = { ...this.pagination };
      pager.current = pagination.current;
      this.pagination = pager;
      console.log(this.pagination);
      this.fetchManager({
        pageSize: pagination.pageSize,
        page: pagination.current,
      });
    },
    fetchManager (params = {}) {
      console.log('params:', params);
      this.loading = true
      this.axios.post(this.CONFIG.apiUrl + "/manager/list", params,
        {
            headers: {
            "rad_access_token":  localStorage.getItem("rad_access_token")
          }
        }).then(response => {
        const pagination = { ...this.pagination };
        pagination.total = response.data.data.TotalCount;
        pagination.pageSize = response.data.data.Size;
        this.loading = false;
        this.data = response.data.data.Data;
        this.pagination = pagination;
      });
    }
  },
  mounted() {
      this.fetchManager();
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
</style>