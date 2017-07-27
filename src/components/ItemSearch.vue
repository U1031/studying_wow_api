<template>
    <div class='itemSearch'>
        <div id='test'>
            <button>test</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'itemSearch',
    props: ['passed_data'],
    data() {
        return {

        }
    }
}
</script>
<style>
.itemSearch #test {
    position: absolute;
    height: 40px;
    border: 0.5px solid red;
    bottom: 0px;
    width: 100%;
}

.itemSearch {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
