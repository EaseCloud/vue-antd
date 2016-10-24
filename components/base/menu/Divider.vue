<template>
<li :class="className + ' ' + rootPrefixCls + '-item-divider'"></li>
</template>

<script lang="babel">
import { defaultProps } from '../../../utils'

export default {
  props: defaultProps({
    rootPrefixCls: '',
    className: '',
    disabled: true
  })
}

</script>
