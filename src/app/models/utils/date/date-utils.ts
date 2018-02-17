export class DateUtils {

  static formatDate(date) {
    let formattedDate = ''

    try {
      formattedDate = new Date(date).toLocaleDateString()
    } catch (err) {
      console.error('ModelUtils.formatDate - Invalid date: ', date)
    }

    return formattedDate
  }

  static getDate(date) {
    let theDate: any = ''

    if (DateUtils.isValidDate(date)) {
      theDate = new Date(date)
    }

    return theDate
  }

  static isValidDate(date) {
    let isValid = true

    try {
      let d = new Date(date)
      isValid = d.toString() !== 'Invalid Date'
    } catch (err) {
      console.error('ModelUtils.isValidDate - Invalid Date: ', date)
      isValid = false
    }
    return isValid
  }
}
