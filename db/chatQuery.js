const addRowQuery = "INSERT INTO chats (username, timestamp, message) VALUES ($1,$2,$3) RETURNING *;"
const getChatsQuery = "SELECT * FROM chats LIMIT 50;"

module.exports = {
    addRowQuery,getChatsQuery
}