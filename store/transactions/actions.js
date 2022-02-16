export default {
  addTransactions(context, data){
    return this.$axios.$post('transactions', data)
  }
}
