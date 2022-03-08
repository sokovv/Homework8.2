class ErrorRepository {
  constructor() {
    this.map = new Map();
    this.map.set(1, 'Ошибка подключения');
    this.map.set(2, 'Ошибка идентификации');
    this.map.set(3, 'Ошибка верификации');

  }
  translate(code) {
    if (this.map.get(code) === undefined) {
      return 'Unknown error'
    }
    return this.map.get(code)
  }

}

export default ErrorRepository