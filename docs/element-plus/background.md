<script lang="ts" setup>
import { ref } from 'vue'

const color = ref('rgba(255, 69, 0, 0.68)')
const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
])

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}

</script>

# Bind variable in code block

  <div class="border border-[#4C4D4F] rounded-md p-6 mt-12">
    <div :style="{backgroundColor : color}" class="w-full h-40 mb-8"></div>
    <div class="my-8">
      <el-color-picker v-model="color" show-alpha :predefine="predefineColors" class="w-full mb-8"/>
    </div>
  </div>

<details>
  <summary>Code</summary>

``` html-vue
<div style="background-color : {{ color }}"/>
```
</details>

