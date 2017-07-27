<template>
    <div class='talents'>
        <div class='talents_page_header'>
            <h1>Talents Page</h1>
        </div>
        <div class='talents_page_body'>
        </div>
        <div class='talents_page_tail'>
        </div>
    </div>
</template>
<script>
export default {
    name: 'talents',
    data() {
        return {

        }
    }
}
</script>
<style>
.talents .talents_page_header {
  position: absolute;
  width: 80%;
  height: 15%;
  margin: 10px 25px auto;
  border: 0.5px solid red;
}

.talents .talents_page_body {
  position: absolute;
  border: 0.5px solid red;
  margin: 0px 25px auto;
  width: 80%;
  height: 70%;
  top: 100px;
}

.talents .talents_page_tail {
  position: absolute;
  border: 0.5px solid red;
  width: 80%;
  height: 5%;
  margin: 10px 25px auto;
  bottom: 10px;
}
</style>
