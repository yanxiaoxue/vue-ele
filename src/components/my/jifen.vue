<template>
  <div id="db-content">
    <h3>请重新登陆</h3>
    <p>请返回后重新进入积分商城~</p>
    <img src="../../assets/img/jifen.png" alt />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#db-content {
  text-align: center;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
}
h3 {
  font-size: 26px;
  color: #0d7fd5;
  margin-bottom: 15px;
}
p {
  font-size: 14px;
  color: #666;
  margin-bottom: 19px;
}
img {
  width: 176px;
  height: 176px;
}
</style>