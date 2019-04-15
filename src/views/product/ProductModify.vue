<template>
  <a-layout-content style="margin: 0 16px;">
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>套餐管理</a-breadcrumb-item>
      <a-breadcrumb-item>修改套餐</a-breadcrumb-item>
    </a-breadcrumb>
    <div :class="'content-div'">
      <a-form :form="form" :style="{width:'800px', margin:'auto auto'}" @submit="handleUpdate">
        <a-form-item label="套餐名称" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
              'name',
              {rules: [{ required: true, message: '请输入套餐名称!' }]}
            ]"
            placeholder="请输入套餐名称"
          />
        </a-form-item>
        <a-form-item label="套餐类型" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-select :disabled=true
            v-decorator="[
                'type',
                {rules: [{ required: true, message: '请选择套餐类型!' }]}
            ]"
            placeholder="请选择套餐类型"
          >
            <a-select-option :value="1">包月</a-select-option>
            <a-select-option :value="2">计时</a-select-option>
            <a-select-option :value="3">流量</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="是否绑定MAC" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-select
            v-decorator="[
          'shouldBindMacAddr',
          {rules: [{ required: true, message: '请选择是否绑定MAC' }]}
        ]"
            placeholder="是否绑定MAC"
          >
            <a-select-option :value="1">是</a-select-option>
            <a-select-option :value="2">否</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="是否绑定VLAN" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-select
            v-decorator="[
          'shouldBindVlan',
          {rules: [{ required: true, message: '请选择是否绑定VLAN' }]}
        ]"
            placeholder="是否绑定VLAN"
          >
            <a-select-option :value="1">是</a-select-option>
            <a-select-option :value="2">否</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="并发数" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
          'concurrentCount', { initialValue: 0 },
          {rules: [{ required: true, message: '并发数!', type: 'integer' }]}
        ]"
            placeholder="并发数"
          ></a-input>
        </a-form-item>
        <a-form-item
          v-if="type == 2"
          label="套餐时长(小时)"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 12 }"
        >
          <a-input
            v-decorator="[
          'productDuration',
          {rules: [{message: '套餐时长!', type: 'number' }]}
        ]"
            placeholder="套餐时长"
          ></a-input>
        </a-form-item>
        <a-form-item
          v-if="type == 1"
          label="套餐包月数"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 12 }"
        >
          <a-input
            v-decorator="[
          'serviceMonth',
          {rules: [{message: '套餐包月数!', type: 'integer' }]}
        ]"
            placeholder="套餐包月数"
          ></a-input>
        </a-form-item>
        <a-form-item
          v-if="type == 3"
          label="套餐流量(M)"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 12 }"
        >
          <a-input
            v-decorator="[
          'productFlow',
          {rules: [{message: '套餐流量!', type: 'number' }]}
        ]"
            placeholder="套餐流量"
          ></a-input>
        </a-form-item>
        <a-form-item :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <span slot="label">
            流量清理周期
            <a-tooltip title="默认表示无限时长:2099年,固定表示在用户开户时选择的到期时间，开户时不选到期时间则默认">
              <a-icon type="question-circle-o"/>
            </a-tooltip>
          </span>
          <a-select :disabled=true
            v-decorator="[
          'flowClearCycle',
          {rules: [{ required: true, message: '流量清零周期' }]}
        ]"
            placeholder="流量清零周期"
          >
            <a-select-option :value="1">默认</a-select-option>
            <a-select-option :value="2">日</a-select-option>
            <a-select-option :value="3">月</a-select-option>
            <a-select-option :value="4">固定</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="价格" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
          'price',
          {rules: [{message: '价格(单位:元)', type: 'number' }]}
        ]"
            placeholder="价格(单位:元)"
          ></a-input>
        </a-form-item>
        <a-form-item label="上行限速" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
          'upStreamLimit',
          {rules: [{message: '上行限速', type: 'number' }]}
        ]"
            placeholder="上行限速"
          ></a-input>
        </a-form-item>
        <a-form-item label="下行限速" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
          'downStreamLimit',
          {rules: [{message: '下行限速', type: 'number' }]}
        ]"
            placeholder="下行限速"
          ></a-input>
        </a-form-item>
        <a-form-item label="用户域" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input v-decorator="[
                'domainName'
            ]" placeholder="选填,用户域"></a-input>
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
import lodash from "lodash";
export default {
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this),
      type: 0,
      id: 0,
    };
  },
  methods: {
    modifyProduct(id) {
      this.axios
        .post(this.CONFIG.apiUrl + "/product/info", { id: id })
        .then(response => {
          this.visible = true;
          var data = response.data.data;
          this.type = data.type;
          this.id = data.id;
          data.productFlow = data.productFlow / 1024.0;
          data.productDuration = data.productDuration / 60;
          data.upStreamLimit = data.upStreamLimit / 1024.0;
          data.downStreamLimit = data.downStreamLimit / 1024.0;
          data.price = data.price / 100.0;
          this.$nextTick(() => {
            this.form.setFieldsValue(
              lodash.pick(data, Object.keys(this.form.getFieldsValue()))
            );
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    handleUpdate(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        values.id = this.id;
        values.productFlow = values.productFlow * 1024;
        values.productDuration = values.productDuration * 60;
        values.upStreamLimit = values.upStreamLimit * 1024;
        values.downStreamLimit = values.downStreamLimit * 1024;
        values.price = values.price * 100.0;
      this.axios
        .post(this.CONFIG.apiUrl + "/product/update", values)
        .then(response => {
          alert(response.data.message);
          if(response.data.code == 1) {
                return;
          }
          this.$router.push("/product/list");
          this.id = 0;
        });
      });
    }
  },
  mounted() {
    var id = this.$route.query.id;
    this.modifyProduct(parseInt(id));
  }
}
</script>
