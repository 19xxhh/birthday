<template>
  <div>
    <!-- 面板组件 -->
    <!-- <mt-tab-container v-model="active">
        <mt-tab-container-item id="icon01">
            生日榜单
        </mt-tab-container-item>
        <mt-tab-container-item id="icon02">
            入职榜单
        </mt-tab-container-item>
        <mt-tab-container-item id="icon03">
            我
        </mt-tab-container-item>
    </mt-tab-container> -->


      <mt-tab-container class="page-tabbar-container" v-model="active">
        <mt-tab-container-item id="icon01">
         <!-- <member></member> -->
        </mt-tab-container-item>
        
      </mt-tab-container>
    <!-- 底部导航条 -->
    <mt-tabbar v-model="active" fixed>
        <mt-tab-item id="icon01"  @click.native="changeState(0)">
          <tabbaricon 
          :selectedImage="require('../../assets/icon/icon01.png')"
          :normalImage="require('../../assets/icon/icon01-gray.png')"
          :focused="currentIndex[0].isSelect">
          </tabbaricon>
          生日榜单
        </mt-tab-item>
        <mt-tab-item id="icon02"  @click.native="changeState(1)">
          <tabbaricon 
          :selectedImage="require('../../assets/icon/icon02.png')"
          :normalImage="require('../../assets/icon/icon02-gray.png')"
          :focused="currentIndex[1].isSelect">
          </tabbaricon>
          入职榜单
        </mt-tab-item>
        <mt-tab-item id="icon03"  @click.native="changeState(2)">
          <tabbaricon 
          :selectedImage="require('../../assets/icon/icon03.png')"
          :normalImage="require('../../assets/icon/icon03-gray.png')"
          :focused="currentIndex[2].isSelect">
          </tabbaricon>
          我
        </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import TabBarIcon from "./TabBarIcon.vue"
// import Member from "./Member.vue"
export default {
  data(){
    return{
      active:"icon1",
      //创建数组保存图片焦点状态
      currentIndex:[
        {isSelect:true},
        {isSelect:false},
        {isSelect:false},
      ]
    }
  },
  methods:{
    changeState(n){
      //将当前参数下标
      //对应数组值修改true其它修改false
      for(var i=0;i<this.currentIndex.length;i++){
       //判断如果循环下标与n相等 20
       if(n==i){
        //当前下标元素true 
        this.currentIndex[i].isSelect=true;
       }else{
        //其它元素修改false
        this.currentIndex[i].isSelect=false;
       }
      }
    }
  },
    components:{
    "tabbaricon":TabBarIcon,
    // "Member":Member
  },
   props:{  //声明接收父组件数据
   }
}
</script>