let defaultCity = '上海'

try {
  // localStorage 保存 city cookie
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
