export const state = () => ({
  loves: [],
  games: [],
  sports: [],
  cars: [],
})

export const mutations = {
  addLoves(state, content) {
    state.loves.push(content);
  },
  addGames(state, content) {
    state.games.push(content) 
  },
  addSports(state, content) {
    state.sports.push(content)
  },
  addCars(state, content) {
    state.cars.push(content) 
  },
  remove(state, { content }) {
    state.loves.splice(state.loves.indexOf(content), 1)
  },
  toggle(state, todo) {
    content.done = !todo.done
  }
}

