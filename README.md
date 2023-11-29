# to use

```
  npm install vue-component-dyd
```

# vue config

```
import { createApp } from 'vue'
import install from "vue-component-dyd";

const app = createApp(App)

install(app) // Register all components

app.mount('#app')



// or on demand registration

import { createApp } from 'vue'
import install, {Icon, Button, FontAwesomeIcon, Tooltip} from "vue-component-dyd";

const app = createApp(App)

//使用icon组件依赖项
app.component('font-awesome-icon', FontAwesomeIcon)

Icon.install(app) // Register all components
Tooltip.install(app) 
Button.install(app) 

```

# button

```
  <div class="row">
    <Dyd-Button>默认按钮</Dyd-Button>
    <Dyd-Button type="primary">主要按钮</Dyd-Button>
    <Dyd-Button type="info">信息按钮</Dyd-Button>
    <Dyd-Button type="success">成功按钮</Dyd-Button>
    <Dyd-Button type="warning">警告按钮</Dyd-Button>
    <Dyd-Button type="danger">危险按钮</Dyd-Button>
  </div>
```

# Icon

```
  <div class="row">
    <Dyd-Icon icon="user-secret" size="2xs" />
    <Dyd-Icon icon="bars" size="xs" />
    <Dyd-Icon icon="shield-halved" size="sm" />
    <Dyd-Icon icon="file" size="lg" />
    <Dyd-Icon icon="filter" size="xl" />
    <Dyd-Icon icon="gear" size="2xl" />
    <Dyd-Icon icon="barcode" size="2x" />
    <Dyd-Icon icon="folder" size="3x" />
    <Dyd-Icon icon="folder-open" size="4x" />
  </div>
```
# Tooltip

```
  <div class="row">
    <Dyd-Tooltip content="this is a test" placement="top" @visible-change="handle">
      <Dyd-Button type="primary">top</Dyd-Button>
    </Dyd-Tooltip>
    <Dyd-Tooltip content="this is a test" placement="bottom">
      <Dyd-Button type="warning">bottom</Dyd-Button>
    </Dyd-Tooltip>
    <Dyd-Tooltip content="this is a test" placement="left">
      <Dyd-Button type="danger">left</Dyd-Button>
    </Dyd-Tooltip>
    <Dyd-Tooltip content="this is a test" placement="right">
      <Dyd-Button type="success">right</Dyd-Button>
    </Dyd-Tooltip>
  </div>
```

# Dialog
```
<div class="row">
    <Dyd-Button type="primary" @click="visible = true">对话框一</Dyd-Button>
    <Dyd-Button type="primary" @click="visible2 = true">对话框二</Dyd-Button>
    <Dyd-Button type="primary" @click="visible3 = true">对话框三</Dyd-Button>
  </div>
  <Dyd-Dialog v-model:visible="visible" @close="visible = false" :radius="8">
    这是一个基本的对话框
  </Dyd-Dialog>
  <Dyd-Dialog
    v-model:visible="visible2"
    @close="visible2 = false"
    title="这是一个自定义标题"
    width="30vw"
    top="40vh"
    :closeOnClickModal="false"
  >
    这是一个基本的对话框
  </Dyd-Dialog>
  <Dyd-Dialog v-model:visible="visible3" @close="visible3 = false">
    这是一个基本的对话框
    <template #footer>
      <Dyd-Button @click="visible3 = false">取消</Dyd-Button>
      <Dyd-Button type="primary" @click="visible3 = false">确定</Dyd-Button>
    </template>
  </Dyd-Dialog>
```