<template>
    <div class='talentsdetail' v-if="talents_detail_page_state==='ready'">
        <div class='talents_detail_page_header'>
            <h1>{{class_name}} talents</h1>
        </div>
        <div class='talents_detail_page_body'>
            <div class='talents_spec'>
                <button v-for='spec in received_data.specs'>
                    <img :src='insert_img(spec.icon)'>
                </button>
            </div>
            <div class='talents_spell'>
                <table border='1'>
                    <tr v-for='tier in received_data.talents'>
                        <td v-for='spells in tier'>
                            <div v-for='real in spells'>
                                    <div v-if="real.spec != undefined">
                                        <img v-if="real.spec.name === spec_name" :src='insert_img(real.spell.icon)'>
                                    </div>
                                    <div v-else>
                                        <img :src='insert_img(real.spell.icon)'>
                                    </div>
                            </div>
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
    // props: ['class_name', 'class_id'],
    data() {
        return {
            class_name: 'rogue',
            class_id: 4,
            talents_detail_page_state: '',
            received_data: [],
            spec_order: 2,
            spec_name: '잠행',
            spell_stack: 0
        }
    },
    created() {
        const baseURI = 'https://kr.api.battle.net/wow/data/talents?locale=ko_KR&apikey=r7gy86fvdpxcgux44nurnrx29rbcm4td';
        this.$http.get(`${baseURI}`)
            .then((result) => {
                this.received_data = result.data[this.class_id]
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

.talentsdetail .talents_detail_page_body .talents_spec {
    position: absolute;
    border-bottom: 0.5px solid red;
    margin: 0px auto;
    width: 100%;
    height: 20%;
}

.talentsdetail .talents_detail_page_body .talents_spell {
    position: absolute;
    border: 0.5px solid blue;
    margin: 0px auto;
    bottom : 0px;
    width: 100%;
    height: 77%;
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
