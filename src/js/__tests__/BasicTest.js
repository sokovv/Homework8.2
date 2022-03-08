import ErrorRepository from '../ErrorRepository';

test('Создание класса ErrorRepository со свойством map, которое принадлежит к классу Map', () => {
    const err = new ErrorRepository()
    expect(err.map).toBeDefined();
    expect(err.map instanceof Map).toBeTruthy();
});

test('Метод translate', () => {
    const received = new ErrorRepository()
    expect(received.translate(1)).toEqual('Ошибка подключения');
    expect(received.translate(2)).toEqual('Ошибка идентификации');
    expect(received.translate(3)).toEqual('Ошибка верификации');
    expect(received.translate(5)).toEqual('Unknown error');
});

