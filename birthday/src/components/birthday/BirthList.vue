<template>
  <div id="BirthList">
    <div class="top">
      <img src="../../assets/images/butt-my.png">
      <div>XX</div>
      <div>XXXX组</div>
    </div>
    <div class="date">
      <div>
        <img src="../../assets/images/my-icon1.png">
      </div>
      <div class="wishText">
        <div>XX月XX日</div>
        <div>距离你下一次生日还有364天</div>
      </div>
    </div>
    <div class="date newDate">
      <div>
        <img src="../../assets/images/my-icon.png">
      </div>
      <div  class="wishText">
        <span>XX年XX月XX日</span>
        <span class="yearDate">5周年</span>
        <div class="text">距离你下一次入职周年还有364天</div>
      </div>
    </div>
    <div class="wish date">
      <div>收到的祝福</div>
      <div>
        <span class="count">10</span>
        <img src="../../assets/images/prev.png">
      </div>
    </div>
    <div  class="wish date newDate">
      <div>回复我的</div>
      <div>
        <span  class="count">2</span>
        <img src="../../assets/images/prev.png">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
#BirthList{
  font-size:20px;
	text-align:center;
  padding:10px;
}

#BirthList .top{
  background: url("../../assets/images/back2.png") repeat;
  background-size: cover;
  padding:30px;
  color:#fff;
}
#BirthList .date{
	display: flex;
	text-align: left;
	margin-top:20px;
	border-bottom:1px solid #ccc;
	padding-bottom:10px;
	background-color: #f5f5f5;
}
#BirthList .newDate{
	border-bottom: none;
	margin-top:15px;
}
#BirthList .wishText :nth-child(2){
  font-size: 16px;
}
#BirthList .wishText {
  margin-left:10px;
}
#BirthList .wishText .text{
  font-size: 16px;
}
#BirthList .wish{
	display:flex;
	justify-content: space-between;
}
#BirthList  .count{
	color:#f00;
	border:1px solid #f00;
	border-radius: 50%;
	font-size:20px;
}
</style>