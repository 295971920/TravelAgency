export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  },
  changeCitySearch (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
