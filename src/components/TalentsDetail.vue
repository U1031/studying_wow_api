<template>
    <div class='talentsdetail' v-if="talents_detail_page_state==='ready'">
        <div class='talents_detail_page_header'>
            <h1>{{class_name}} talents</h1>
        </div>
        <div class='talents_detail_page_body'>
            <div class='talents_spec'>
                <button v-for='spec in received_data.specs' v-on:click='change_spec(spec)'>
                    <img :src='insert_img(spec.icon)'>
                    <span>{{spec.name}}
                        <br>{{spec.description}}</span>
                </button>
            </div>
            <div class='talents_spell'>
                <table border='1'>
                    <tr v-for='tier in received_data.talents'>
                        <td v-for='spells in tier'>
                            <div v-for='real in spells'>
                                <div v-if='real.spec != undefined'>
                                    <div v-if="real.spec.name === spec_name">
                                        {{img_spec_compute()}}
                                    </div>
                                </div>
                            </div>
    
                            <div class='spell_setting' v-for='real in spells'>
                                <div v-if="real.spec != undefined">
                                    <img v-if="real.spec.name === spec_name" :src='insert_img(real.spell.icon)'>
                                    <span>{{real.spell.name}}
                                        <br>{{real.spell.description}}</span>
                                </div>
                                <div v-else>
                                    <div v-if='spell_stack == "none"'>
                                        <img :src='insert_img(real.spell.icon)'>
                                        <span>{{real.spell.name}}
                                            <br>{{real.spell.description}}</span>
                                    </div>
                                </div>
                            </div>
                            {{img_spec_stack_intialize()}}
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class='talents_detail_page_tail'>
    
        </div>
    </div>
</template>
<script>
export default {
    name: 'talentsdetail',
    props: ['class_name', 'class_id'],
    data() {
        return {
            // class_name: 'rogue',
            // class_id: 4,
            talents_detail_page_state: '',
            received_data: [],
            spec_order: 2,
            spec_name: '잠행',
            spell_stack: 'none'
        }
    },
    created() {
        const baseURI = 'https://kr.api.battle.net/wow/data/talents?locale=ko_KR&apikey=r7gy86fvdpxcgux44nurnrx29rbcm4td';
        this.$http.get(`${baseURI}`)
            .then((result) => {
                this.received_data = result.data[this.class_id]
                this.spec_name = this.received_data.specs[0].name
                this.spec_order = this.received_data.specs[0].order
                console.log(this.received_data)
                console.log(this.received_data.talents[0][0])
                this.talents_detail_page_state = 'ready'
            })
            .catch(function (error) {
                console.log(error)
                window.alert(error)
            })
    },
    methods: {
        insert_img: function (img_src) {
            return 'https://render-kr.worldofwarcraft.com/icons/56/' + img_src + '.jpg'
        },
        img_spec_compute: function () {
            this.spell_stack = 'ok'
        },
        img_spec_stack_intialize: function () {
            this.spell_stack = 'none'
        },
        change_spec: function (key) {
            console.log(key)
            this.spec_order = key.spec_order
            this.spec_name = key.name
        }
    },
    computed: {

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

.talentsdetail .talents_detail_page_header h1 {}

.talentsdetail .talents_detail_page_body {
    position: absolute;
    border: 0.5px solid red;
    margin: 0px 25px auto;
    width: 80%;
    height: 70%;
    top: 100px;
}

.talentsdetail .talents_detail_page_body img {}

.talentsdetail .talents_detail_page_body .talents_spec {
    position: absolute;
    border-bottom: 0.5px solid red;
    margin: 0px auto;
    width: 100%;
    height: 20%;
}

.talentsdetail .talents_detail_page_body .talents_spec span {
    display: none;
    position: relative;
    top: 20px;
    left: -10px;
    width: 125px;
    padding: 5px;
    z-index: 100;
    background: #000;
    color: #fff;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
}

.talentsdetail .talents_detail_page_body .talents_spec button:hover span {
    display: block;
}


.talentsdetail .talents_detail_page_body .talents_spell {
    position: absolute;
    border: 0.5px solid blue;
    margin: 0px auto;
    bottom: 0px;
    width: 100%;
    height: 77%;
}

.talentsdetail .talents_detail_page_body .talents_spell .spell_setting span {
    display: none;
    position: absolute;
    top: 20px;
    left: -10px;
    width: 125px;
    padding: 5px;
    z-index: 100;
    background: #000;
    color: #fff;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
}

.talentsdetail .talents_detail_page_body .talents_spell .spell_setting div:hover span {
    display: block;
}

.talentsdetail .talents_detail_page_body .talents_spell table {
    position: absolute;
    width: 100%;
    height: 100%;
}

.talentsdetail .talents_detail_page_body .talents_spell table img {
    width: 33%;
}

.talents_spec button {
    width: 33%;
    height: 100%;
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
