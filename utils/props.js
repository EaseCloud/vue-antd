const toString = Object.prototype.toString;

// 返回vue匹配的props的对象
export function defaultProps(_props) {
  let props = _props;
  Object.keys(props).every(i => {
    const defaultValue = props[i];
    // 支持String， Number等类型
    if (defaultValue && defaultValue.name && window[defaultValue.name] === defaultValue) {
      props[i] = {
        type: defaultValue,
        default: null,
      };
      return true;
    }

    const type = toString.call(defaultValue).replace('[object ', '').replace(']', '');
    // 如果传进来的是vue的原生props对象的话
    if (type === 'Object') {
      if (defaultValue.type != null ||
        defaultValue.default != null ||
        defaultValue.validator != null ||
        defaultValue.twoWay != null ||
        defaultValue.required != null) {
        return true;
      }
    }

    // 支持 Object和Array的简洁声明方式
    // Todo: 目前看来这样并没有什么卵用
    if (type === 'Array' || type === 'Object') {
      props[i] = {
        type: window[type],
        default() {
          props = defaultValue;
          return false;
        },
      };
      return true;
    }

    props[i] = {
      type: window[type],
      default: defaultValue,
    };

    return true;
  });

  return props;
}

export function oneOfType(validList, defaultValue) {
  const validaObj = {};

  validaObj.default = defaultValue;
  validaObj.validator = value => {
    if (value == null) return true;

    for (let j = 0; j < validList.length; j++) {
      const currentValid = validList[j];
      let validName;
      if (typeof currentValid === 'string') {
        validName = currentValid;
      } else {
        validName = currentValid.name;
      }
      if (toString.call(value).indexOf(validName) > -1) {
        return true;
      }
    }
    return false;
  };

  return validaObj;
}

export function oneOf(validList, defaultValue) {
  const validaObj = {};

  validaObj.default = defaultValue;
  validaObj.validator = value => {
    if (value == null) return true;

    for (let j = 0; j < validList.length; j++) {
      if (value === validList[j]) {
        return true;
      }
    }
    return false;
  };

  return validaObj;
}

export const any = {
  validator(value) {
    return true;
  },
};
