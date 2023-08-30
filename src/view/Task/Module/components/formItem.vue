<template>
    <div>
        <el-input v-model="keyword"></el-input>
        <!--  @update:modelValue="handleKeyword" :modelValue="modelValue.keyword"  -->
    </div>
</template>
<script setup>


const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['update:modelValue'])
const keyword = computed({
  get () {
    return props.modelValue.keyword
  },
  set (val) {
    emit('update:modelValue', {
      ...props.modelValue,
      keyword: val
    })
  }
})
const module = computed({
  get () {
    return new Proxy(props.modelValue, {
      get (target, key) {

      },
      set (target, key, value) {
        emit('update:modelValue',
          {
            ...target,
            [key]: value
          })
        return true
      }
    })
  },
  set (value) {
    emit('update:modelValue', value)

  }
})
function handleKeyword (value) {
  emit('update:modelValue', {
    ...props.modelValue,
    keyword: value
  })
}
</script>