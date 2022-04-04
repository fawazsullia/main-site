const addRowQuery = 'INSERT INTO chats (username, timestamp, message) VALUES ($1,$2,$3) RETURNING *;'
const getChatsQuery = 'SELECT username, message FROM chats ORDER BY id DESC LIMIT 50;'

module.exports = {
    addRowQuery,getChatsQuery
}