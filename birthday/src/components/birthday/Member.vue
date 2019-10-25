<template>
  <div id="Member">
    <div class="wishes">
      <div>
        <img src="../../assets/images/butt-my1.png">
      </div>
      <div class="wisheswords">
        <div>
          <span>XXX</span>
          <span  class="wishesText">XXXXX组</span>
        </div>
        <div class="wishesText">
          <span>XX月XX日</span>
        </div>
      </div>
      <div  class="wishesText more">
        <img src="../../assets/images/icon.png">
        <span>今天</span>
        <div>送祝福 &gt;</div>
      </div>
    </div>
    <add></add>
  </div>
</template>
<script>
// 引入组件tab
import Tab from "./Tab.vue";
export default {
  
components:{"add":Tab},
props:{}
}
</script>
<style scoped>
  #Member{
  font-size:18px;
	text-align:center;
	padding:10px;
}
#Member  .wishes{
	display:flex;
	text-align: left;
  border-bottom: 1px solid #ccc;
}

#Member .wishes .wishesText{
	color:#ccc;
	font-size:18px;
}
#Member .wisheswords{
	/* margin-top:15px; */
	padding-right:100px;
}
#Member .cake{
	position:relative;
}
#Member .cake span{
	position:absolute;
	left:18%;top:20%;
}
#Member .wishes .more{
	margin-top:-5px;
	justify-content: flex-end;
}
</style>