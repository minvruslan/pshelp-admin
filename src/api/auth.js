'use strict'

const api = {
  async auth (username, password) {
    if (username === 'test') {
      return {
        rc: 1
      }
    }

    return {
      rc: 0,
      data: {
        session: {
          id: '77158bc3a3a5af984acf67c1c2ce415e',
          role: 'admin',
          name: 'Админ Админович'
        }
      }
    }
  }
}

export default api
