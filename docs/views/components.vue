<template>
<div class="main-wrapper">
  <aside class="aside-container">
    <ul>
      <li>
        <a v-link="{path: '/docs/introduce'}" class="">
          Ant Design of Vue
          <span class="chinese"></span>
        </a>
      </li>
      <li>
        <a v-link="{path: '/docs/getting-started'}" class="">
          快速上手
          <span class="chinese"></span>
        </a>
      </li>
      <li>
        <a v-link="{path: '/docs/download'}" class="">
          下载
          <span class="chinese"></span>
        </a>
      </li>
      <li>
        <h4>Components</h4>
        <ul>
          <li class="type-divider">基本</li>
          <li v-for="component in componentsMenu.base">
            <a v-link="{path: '/components/' + component.name}">
              {{component.name | Upper}}
              <span class="chinese">{{component.desc}}</span>
            </a>
          </li>
          <li class="type-divider">表单</li>
          <li v-for="component in componentsMenu.form">
            <a v-link="{path: '/components/' + component.name}">
              {{component.name | Upper}}
              <span class="chinese">{{component.desc}}</span>
            </a>
          </li>
          <li class="type-divider">展示</li>
          <li v-for="component in componentsMenu.show">
            <a v-link="{path: '/components/' + component.name}">
              {{component.name | Upper}}
              <span class="chinese">{{component.desc}}</span>
            </a>
          </li>
          <li class="type-divider">导航</li>
          <li v-for="component in componentsMenu.pagination">
            <a v-link="{path: '/components/' + component.name}">
              {{component.name | Upper}}
              <span class="chinese">{{component.desc}}</span>
            </a>
          </li>
          <li class="type-divider">其他</li>
          <li v-for="component in componentsMenu.other">
            <a v-link="{path: '/components/' + component.name}">
              {{component.name | Upper}}
              <span class="chinese">{{component.desc}}</span>
            </a>
          </li>
          <li class="type-divider">基础</li>
          <li v-for="component in componentsMenu.basic">
            <a v-link="{path: '/components/' + component.name}">
              {{component.name | Upper}}
              <span class="chinese">{{component.desc}}</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
  <section class="main-container">
    <router-view class="view"></router-view>
  </section>
</div>
</template>

<script>

export default {

  filters: {
    Upper (str) {
      let arr = str.split('-')

      return arr.map(item => {
        return item.substring(0, 1).toUpperCase() + item.substring(1)
      }).join('')
    }
  }
}

</script>


