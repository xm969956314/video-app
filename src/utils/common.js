export default {
  // 格式化时间
  formatDate (time, format) {
    time = time || new Date()
    format = format || 'yy-MM-dd HH:mm:ss'
    let date
    if (typeof time === 'object') {
      date = time
    } else {
      if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
        time = parseInt(time)
      }
      if ((typeof time === 'number') && (time.toString().length === 10)) {
        time = time * 1000
      }
      date = new Date(time)
    }
    const formatObj = {
      yy: date.getFullYear(),
      MM: date.getMonth() + 1,
      dd: date.getDate(),
      HH: date.getHours(),
      mm: date.getMinutes(),
      ss: date.getSeconds(),
      a: date.getDay()
    }
    return format.replace(/(yy|mm|dd|HH|MM|ss|a)+/g, (result, key) => {
      let value = formatObj[key]
      // Note: getDay() returns 0 on Sunday
      if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
      if (result.length > 0 && value < 10) {
        value = '0' + value
      }
      return value || 0
    })
  },
  // 获取时间格式化后每个元素的值
  formatItemDate (time) {
    time = time || new Date()
    let date
    if (typeof time === 'object') {
      date = time
    } else {
      if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
        time = parseInt(time)
      }
      if ((typeof time === 'number') && (time.toString().length === 10)) {
        time = time * 1000
      }
      date = new Date(time)
    }
    return {
      year: date.getFullYear(), // 年
      month: date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1, // 月
      week: ['日', '一', '二', '三', '四', '五', '六'][date.getDay()], // 星期几
      day: date.getDate() < 10 ? '0' + date.getDate() : date.getDate(), // 天
      hour: date.getHours() < 10 ? '0' + date.getHours() : date.getHours(), // 小时
      minutes: date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(), // 分钟
      seconds: date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds() // 秒数
    }
  },
  // 读取文件信息
  readFile (file) {
    return new Promise((resolve, reject) => {
      const reads = new FileReader()
      reads.readAsDataURL(file)
      try {
        reads.onload = function () {
          resolve(this.result)
        }
      } catch (err) {
        reject(err)
      }
    })
  },
  // 判单对象是否存在元素
  isExistObject (o) {
    let flag = false
    if (!!o && typeof o === 'object' && o.size) {
      flag = true
    }
    return flag
  },
  // 截取后缀名
  cutoutExtendsName (files) {
    let suffixName = ''
    if (typeof files === 'object' && files.name) {
      // eslint-disable-next-line
      const extendsNameReg = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/
      suffixName = extendsNameReg.exec(files.name).pop().toLocaleLowerCase()
    }
    return suffixName
  },
  JsonToString (json) {
    let arr = []
    for (let i in json) {
      arr.push(i + '=' + json[i])
    }
    return arr.join('&')
  },
  // 封装自己的 ajax
  ajax (option) {
    return new Promise((resolve, reject) => {
      let ajax
      if (window.XMLHttpRequest) {
        ajax = new window.XMLHttpRequest()
      } else {
        ajax = new window.ActiveXObject('Microsoft.XMLHTTP')
      }
      if (option.type === 'get') {
        ajax.open('get', option.url + '?' + this.JsonToString(option.data), true)
        ajax.send()
      } else if (option.type === 'post') {
        ajax.open('post', option.url, true)
        if (!option.headers && !option.noHeader) {
          ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        }
        if (option.data) {
          ajax.send(this.JsonToString(option.data))
        } else if (option.formData) {
          ajax.send(option.formData)
        }
      }
      ajax.onreadystatechange = function () {
        if (ajax.readyState === 4) {
          if ((ajax.status >= 200 && ajax.status < 300) || ajax.status === 304) {
            if (ajax.responseText) {
              try {
                const result = JSON.parse(ajax.responseText)
                resolve(result.data)
              } catch (err) {
                reject(err)
              }
            }
          } else {
            reject(new Error())
          }
        }
      }
    })
  },
  // 数组去重
  uniq (arr, isExist) {
    let temp = [] // 一个新的临时数组
    for (let i = 0; i < arr.length; i++) {
      if (isExist) {
        if (arr[i] != null && temp.indexOf(arr[i]) === -1) {
          temp.push(arr[i])
        }
      } else {
        if (temp.indexOf(arr[i]) === -1) {
          temp.push(arr[i])
        }
      }
    }
    return temp
  },
  // 拷贝
  copy (obj) {
    return JSON.parse(JSON.stringify(obj))
  }
}
