<template>
  <a-layout-content style="margin: 0 16px;">
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>套餐管理</a-breadcrumb-item>
      <a-breadcrumb-item>添加套餐</a-breadcrumb-item>
    </a-breadcrumb>
    <div :class="'content-div'">
      <a-form :form="form" :style="{width:'800px', margin:'auto auto'}" @submit="handleSubmit">
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
          <a-select
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
        <a-form-item label="套餐时长" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
          'productDuration', { initialValue: 0 },
          {rules: [{ required: true, message: '套餐时长!', type: 'integer' }]}
        ]"
            placeholder="套餐时长"
          ></a-input>
        </a-form-item>
        <a-form-item label="套餐包月数" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
          'serviceMonth', { initialValue: 0 },
          {rules: [{ required: true, message: '套餐包月数!', type: 'integer' }]}
        ]"
            placeholder="套餐包月数"
          ></a-input>
        </a-form-item>
        <a-form-item label="套餐流量" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
          'productFlow', { initialValue: 0 },
          {rules: [{ required: true, message: '套餐流量!', type: 'integer' }]}
        ]"
            placeholder="套餐流量"
          ></a-input>
        </a-form-item>
        <a-form-item label="流量清零周期" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-select
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
          'price', { initialValue: 0 },
          {rules: [{ required: true, message: '价格(单位:元)', type: 'number' }]}
        ]"
            placeholder="价格(单位:元)"
          ></a-input>
        </a-form-item>
        <a-form-item label="上行限速" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
          'upStreamLimit', { initialValue: 0 },
          {rules: [{ required: true, message: '上行限速', type: 'number' }]}
        ]"
            placeholder="上行限速"
          ></a-input>
        </a-form-item>
        <a-form-item label="下行限速" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
          'downStreamLimit', { initialValue: 0 },
          {rules: [{ required: true, message: '下行限速', type: 'number' }]}
        ]"
            placeholder="下行限速)"
          ></a-input>
        </a-form-item>
        <a-form-item label="用户域" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
                'domainName'
            ]"
            placeholder="选填,用户域"
          ></a-input>
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
        <a-form-item>
            <a-input defaultValue="mysite">
                <a-select slot="addonBefore" defaultValue="Http://" style="width: 90px">
                    <a-select-option value="Http://">Http://</a-select-option>
                    <a-select-option value="Https://">Https://</a-select-option>
                </a-select>
                <a-select slot="addonAfter" defaultValue=".com" style="width: 80px">
                    <a-select-option value=".com">.com</a-select-option>
                    <a-select-option value=".jp">.jp</a-select-option>
                    <a-select-option value=".cn">.cn</a-select-option>
                    <a-select-option value=".org">.org</a-select-option>
                </a-select>
            </a-input>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5}">
          <a-button type="primary" style="width:100%" html-type="submit">提交</a-button>
        </a-form-item>
      </a-form>
    </div>
  </a-layout-content>
</template>

<script>

</script>