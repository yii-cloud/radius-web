<template>
  <a-layout-content style="margin: 0 16px;">
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>菜单管理</a-breadcrumb-item>
      <a-breadcrumb-item>菜单列表</a-breadcrumb-item>
    </a-breadcrumb>
    <div :class="'content-div'">
      <a-table
        :columns="columns"
        :dataSource="data"
        :expandRowByClick="true"
        class="components-table-demo-nested"
        @expand="rowExpand"
      >
        <a slot="operation" href="javascript:;">Publish</a>
        <a-table
          slot="expandedRowRender"
          slot-scope="record"
          :columns="columns"
          :dataSource="record"
          :pagination="false"
        >
          <span slot="status">
            <a-badge status="success"/>Finished
          </span>
          <span slot="operation" class="table-operation">
            <a href="javascript:;">Pause</a>
            <a href="javascript:;">Stop</a>
            <a-dropdown>
              <a-menu slot="overlay">
                <a-menu-item>Action 1</a-menu-item>
                <a-menu-item>Action 2</a-menu-item>
              </a-menu>
              <a href="javascript:;">
                More
                <a-icon type="down"/>
              </a>
            </a-dropdown>
          </span>
        </a-table>
      </a-table>
    </div>
  </a-layout-content>
</template>
<script>
const resTypeObj = {
  1: "模块",
  2: "栏目",
  3: "按钮"
};
const columns = [
  { title: "名称", dataIndex: "name", key: "name" },
  { title: "URL", dataIndex: "url", key: "url" },
  {
    title: "类型",
    dataIndex: "type",
    key: "type",
    customRender: text => {
      return resTypeObj[text];
    }
  },
  { title: "权限标识", dataIndex: "permMark", key: "permMark" },
  { title: "创建时间", dataIndex: "createTime", key: "createTime" },
  { title: "最近修改时间", dataIndex: "updateTime", key: "updateTime" },
  {
    title: "是否需要权限",
    dataIndex: "needPrem",
    key: "needPrem",
    customRender: text => {
      return text == 0 ? "不需要" : "需要";
    }
  },
  { title: "描述", dataIndex: "description", key: "description" }
];
export default {
  components: {},
  data() {
    return {
      data: [],
      pagination: { showTotal: this.showTotal },
      columns
    };
  },
  methods: {
    showTotal(total) {
      return "每页" + this.pagination.pageSize + "条 | 共" + total + "条数据";
    },
    rowExpand(e) {
          console.log("expand");
          console.log("你搞笑啊" + e);
      }
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