<template>
    <div class="content_">
        <div class="item">
            <div class="text">
                <h2>春晓</h2>
                <span>孟浩然</span>
                <p>春眠不觉晓</p>
                <p>处处闻啼鸟</p>
                <p>夜来风雨声</p>
                <p>花落知多少</p>
            </div>
        </div>
        <div class="item">
            <div class="item_list">
                <el-input
                    v-model="intAudo.intAudo"
                    placeholder="语音转文字"
                ></el-input>
                <el-select
                    class="m8"
                    v-model="intAudo.lang"
                    placeholder="请选择语言"
                >
                    <el-option label="中文" value="1"></el-option>
                    <el-option label="英文" value="2"></el-option>
                </el-select>
                <el-button class="m8" type="primary" @click="setAudo"
                    >点击</el-button
                >
            </div>
        </div>
        <div class="item"></div>
        <div class="item"></div>
    </div>
</template>
<script setup>
import { reactive } from 'vue';
const lang = {
  1: 'zh',
  2: 'en'
}
const intAudo = reactive({
  intAudo: '',
  lang: '1'
})
const setAudo = () => {
  const speech = new SpeechSynthesisUtterance()
  speech.lang = lang[intAudo.lang]
  speech.text = intAudo.intAudo
  window.speechSynthesis.speak(speech)
}
</script>
<style lang="scss" scoped>
.content_ {
    display: flex;
    flex-direction: row;
    height: 100%;
    flex-wrap: wrap;
    .item {
        width: 48%;
        float: left;
        border: 1px solid #eee;
        margin: 8px;
        padding: 12px;
        box-sizing: border-box;
        border-radius: 4px;
        .item_list {
            display: flex;
            flex-direction: row;
        }
    }
}
.m8 {
    margin-left: 8px;
}
.text {
    writing-mode: vertical-lr;
    backdrop-filter: blur(3px);
    padding: 25px;
}
</style>