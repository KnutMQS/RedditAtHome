async function insertUserDataIntoDatabase(connection, userData) {
  const { username, password } = userData;
  const [results] = await connection.query(
    "INSERT INTO user (username, password) VALUES (?, ?)",
    [username, password]
  );
  return results;
}

module.exports = { insertUserDataIntoDatabase };
