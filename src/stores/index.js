import { observable, action } from "mobx"

const createStore = () => ({
  sex: undefined,
  age: undefined,

  setSex: action(function (sex) {
    this.sex = sex
  }),

  setAge: action(function (age) {
    this.age = age
  })

})

const store = observable(createStore()
)

export default store