<template>
  <div id="Member2">
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
          <span>XX年XX月XX日 入职</span>
        </div>
      </div>
      <div  class="wishesText more">
        <span>2</span>
        <span>周年</span>
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
  
components:{"add":Tab}
}
</script>
<style scoped>

#Member2{
  font-size:18px;
	text-align:center;
	padding:10px;
}
#Member2  .wishes{
	display:flex;
	text-align: left;
  border-bottom:1px solid #ccc;
}

#Member2 .wishes .wishesText{
	color:#ccc;
	font-size:14px;
}
#Member2 .wisheswords{
	/* margin-top:50px; */
	padding-right:100px;
}
#Member2 .cake{
	position:relative;
}
#Member2 .cake span{
	position:absolute;
	left:18%;top:20%;
}
#Member2 .wishes .more{
	/* margin-top:50px; */
	justify-content: flex-end;
}
</style>