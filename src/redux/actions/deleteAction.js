export const deleteItem = (id) => {
    return {
        type: "DELETE",
        payload: id
    }
}