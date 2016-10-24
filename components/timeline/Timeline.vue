<template>
  <ul :class="prefixCls">
    <slot></slot>
  </ul>
</template>

<script lang="babel">
  import { defaultProps } from '../../utils';

  export default {
    props: defaultProps({
      prefixCls: 'ant-timeline',
      pending: false,
    }),

    ready () {
      this._mapPropsToChildComponent();
    },

    methods: {
      _mapPropsToChildComponent () {
        const len = this.$children.length;
        this.$children.forEach((child, index) => {
          child.timelineLast = index === len - 1;
          child.pending = this.pending;
        });
      }
    }
  }
</script>
