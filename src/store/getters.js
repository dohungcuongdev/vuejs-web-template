export default {
    // getters - data in computed() shared across the components
    // multiple components may use the same getter in computed()

    gitRepoService: state => state.gitRepoService, // dependency injection
    currentUser: state => state.currentUser,
}