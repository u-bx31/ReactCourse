
const Reducer = (state, action) => {

    switch (action.type) {
        case "REMOVE_ITEM":
            const newItems = state.items.filter((item) => item.id !== action.payload.id)

            const priceTotal = state.items.filter((item) => item.id === action.payload.id).map((c) => {
                return (state.total - c.price)
            })
            const amountTotal = state.items.filter((item) => item.id === action.payload.id).map((c) => {
                return (state.amount - c.amount)
            })

            return { ...state, items: newItems, total: priceTotal, amount: amountTotal }

        case "INCREMENT_ITEM":
            const item2 = state.items.map((item) => {
                if(item.id === action.payload.id){
                    item = {...item , amount : item.amount + 1}
                }
                return item
            })

            const priceTotal2 = state.items.filter((item) => item.id === action.payload.id).map((c) => {
                return(parseFloat(state.total)+ parseFloat(c.price));
            })

            const newAm = state.amount + 1
            console.log(newAm);
            return { ...state , items : item2 ,amount : newAm ,total : parseFloat(priceTotal2).toFixed(2)}
        case "DECREMENT_ITEM":
            const item3 = state.items.map((item) => {
                if(item.id === action.payload.id){
                    item = {...item , amount : item.amount - 1}
                }
                return item
            }).filter((item)=> item.amount !== 0)
            const priceTotal3 = state.items.filter((item) => item.id === action.payload.id).map((c) => {
                return (state.total - c.price)
            })
            const newAm2 = state.amount - 1

            return { ...state , items : item3 ,amount : newAm2,total: priceTotal3}
        case "REMOVE_ALL":
            return { ...state, items: [] , total :0 , amount : 0}

        case "GET_TOTAL":
            const TotalPrice = state.items.reduce((totalPrice, items) => {
                const { price, amount } = items
                const itmesTotal = price * amount
                totalPrice += itmesTotal
                return (totalPrice)
            }, 0)
            const TotalAmount = state.items.reduce((totatlAmount, items) => {
                const { amount } = items
                totatlAmount += amount
                return (totatlAmount)
            }, 0)
            return { ...state, total: TotalPrice, amount: TotalAmount }
        default:
            return (state)
    }
}

export default Reducer;