
import { Strategy } from 'passport-local'
import UserData from '../../../../data/useCase/user.data';


const authData = new UserData()
const localStrategy = new Strategy({
  usernameField: 'phone',
  passwordField: 'password'
},
  async (phone, password, done) => {
  try {
    const user = await authData.login(phone, password)
    done(null, user)
  } catch (error) {
    done(error, false)
  }
})

export default localStrategy
