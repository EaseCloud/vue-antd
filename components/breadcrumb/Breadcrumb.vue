<template>
<div :class="prefixCls">
  <slot></slot>
</div>
</template>

<script lang="babel">
import { defaultProps } from '../../utils';

export default {
  props: defaultProps({
    prefixCls: 'ant-breadcrumb',
  }),
};
</script>
