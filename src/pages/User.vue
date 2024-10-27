<script setup lang="ts">
import {useRouter} from "vue-router";

const user = {
  id : 8888,
  username : '古月方源',
  userAccount : 'fangyuan',
  avatarUrl : 'https://raw.githubusercontent.com/HalcyonJX/blog-img/main/blog-imgimage-20240915234925341.png',
  gender : '男',
  phone : '12345678',
  email : 'fangyuan@guyue.com',
  plantCode : '1',
  createTime : new Date(),
}
const router = useRouter();
const toEdit = (editKey : string,editName: string,currentValue: string) =>{
  router.push({
    path:'/user/edit',
    query:{
      editKey,
      editName,
      currentValue,
    }
  })
}
</script>

<template>
<van-cell title="昵称" is-link to="/user/edit" :value="user.username" @click="toEdit('username','昵称',user.username)"/>
<van-cell title="账号"  :value="user.userAccount" />
<van-cell title="头像" is-link to="/user/edit" >
  <img style="height: 48px" :src="user.avatarUrl">
</van-cell>
<van-cell title="性别" is-link to="/user/edit" :value="user.gender" @click="toEdit('gender','性别',user.username)"/>
<van-cell title="电话" is-link to="/user/edit" :value="user.phone" @click="toEdit('phone','电话',user.username)"/>
<van-cell title="邮箱" is-link to="/user/edit" :value="user.email" @click="toEdit('email','邮箱',user.username)"/>
<van-cell title="星球编号"  :value="user.plantCode" />
<van-cell title="注册事件"  :value="user.createTime.toISOString()" />
</template>

<style scoped>

</style>