<template>
    <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" />
    
  </template>
  <script setup>
  import { h, ref } from 'vue';
  import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
  const current = ref(['mail']);
  const items = ref([
    {
      key: 'mail',
      icon: () => h(MailOutlined),
      label: 'Tất cả',
      title: 'Tất cả',
    },
    {
      key: 'app',
      icon: () => h(AppstoreOutlined),
      label: 'Nam',
      title: 'Nam',
    },
    {
      key: 'alipay',
      label: h(
        'a',
        {
          href: 'https://antdv.com',
          target: '_blank',
        },
        'Nữ',
      ),
      title: 'Nữ',
    },
  ]);
  </script>
  <style scoped>
  /* Loại bỏ gạch dưới của các menu item */
  .ant-menu-horizontal {
    border-bottom: 0px;
  }
  </style>
   