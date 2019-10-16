<template>
    <div>
    <!-- 面板-->
    <mt-button></mt-button>
    <mt-tab-container v-model="active"></mt-tab-container>
    <mt-tab-container-item id="tab1">生日榜单</mt-tab-container-item>
    <mt-tab-container-item id="tab2">入职榜单</mt-tab-container-item>
    <mt-tab-container-item id="tab3">我</mt-tab-container-item>
    <!-- 底部导航条-->
    <mt-tabbar v-model="active" fixed>  <!-- active中保存下列选项的id值， fixed将导航条固定在页面底部-->
    <mt-tab-item id="tab1"><img slot="icon" src=""> 生日榜单</mt-tab-item>   
    <mt-tab-item id="tab2"><img slot="icon" src=""> 入职榜单</mt-tab-item>
    <mt-tab-item id="tab3"><img slot="icon" src=""> 我</mt-tab-item>
</mt-tabbar>
    </div>
</template>
<script>
export default {
    data(){
        return{
            active:"tab1"
        }
    }
}
</script>
<style scoped>

</style>