function getError(option, xhr) {
  const msg = `cannot post ${option.action} ${xhr.status}'`;
  const err = new Error(msg);
  err.status = xhr.status;
  err.method = 'post';
  err.url = option.action;
  return err;
}

function getBody(xhr) {
  const text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}

export default function upload(option) {
  if (typeof XMLHttpRequest === 'undefined') {
    return;
  }

  const xhr = new XMLHttpRequest();
  if (xhr.upload) {
    xhr.upload.onprogress = e => {
      if (e.total > 0) {
        e.percent = e.loaded / e.total * 100;
      }
      option.onProgress(e);
    };
  }

  const formData = new FormData();
  formData.append(option.filename, option.file);
  if (option.data) {
    Object.keys(option.data).forEach(key => {
      formData.append(key, option.data[key]);
    });
  }

  xhr.onerror = e => {
    option.onError(e);
  };

  xhr.onload = () => {
    if (xhr.status !== 200) {
      return option.onError(getError(option, xhr), getBody(xhr));
    }
    return option.onSuccess(getBody(xhr));
  };

  xhr.open('post', option.action, true);
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  xhr.send(formData);
}
