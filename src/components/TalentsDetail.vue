<template>
    <div class='talentsdetail'>
        <div class='talents_detail_page_header'>

        </div>
        <div class='talents_detail_page_body'>

        </div>
        <div class='talents_detail_page_tail'>

        </div>
    </div>
</template>
<script>
export default {
    name: 'talentsdetail',
    // props: ['class_name', 'class_id'],
    data() {
        return {
            class_name: '도적',
            class_id: 4
        }
    }
}
</script>
<style>
.talentsdetail .talents_detail_page_header {
    position: absolute;
    width: 80%;
    height: 15%;
    margin: 10px 25px auto;
    border: 0.5px solid red;
}

.talentsdetail .talents_detail_page_body {
    position: absolute;
    border: 0.5px solid red;
    margin: 0px 25px auto;
    width: 80%;
    height: 70%;
    top: 100px;
}


.talentsdetail .talents_detail_page_tail {
    position: absolute;
    border: 0.5px solid red;
    width: 80%;
    height: 5%;
    margin: 10px 25px auto;
    bottom: 10px;
}



</style>
