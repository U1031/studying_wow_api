<template>
    <div class='talents'>
        <div class='talents_page_header'>
            <h1>Talents Page</h1>
        </div>
        <div class='talents_page_body'>
            <button v-for='classes in char_classes' v-on:click='talents_page_body_btn(classes)'>
                {{classes.name}}
            </button>
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
            char_classes: [],
            talents_page_state: ''
        }
    },
    created() {
        const baseURI = 'https://kr.api.battle.net/wow/data/character/classes?locale=ko_KR&apikey=r7gy86fvdpxcgux44nurnrx29rbcm4td';
        this.$http.get(`${baseURI}`)
            .then((result) => {
                console.log(result)
                this.talents_page_state = 'ready'
                this.char_classes = result.data.classes
            })
            .catch(function (error) {
                console.log(error)
                window.alert(error)
            })
    },
    methods: {
        talents_page_body_btn(selected_classes){
            
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

.talents .talents_page_body button {
    border: 0.5px solid red;
    width: 30%;
    height: 20%;
    margin: 2px 2px auto;
    background-color: lightgray;
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
