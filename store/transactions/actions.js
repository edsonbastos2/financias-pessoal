export default {

  getTransactions(){
    return this.$axios.$get('transactions?_expand=category')
  },

  addTransactions(context, data){
    return this.$axios.$post('transactions', data)
  }
}
