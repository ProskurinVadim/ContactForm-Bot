const emailValidator = (value: string) => Boolean(!value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
const passwordValidator = (value: string) => Boolean(!value.match(passw))

export { emailValidator, passwordValidator }