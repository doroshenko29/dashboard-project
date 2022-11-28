const { configureStatusClassName } = require('../Utils/configureStatusClassName');

describe('configureStatusClassName', () => {
    test('Проверяем возврат стиля для цвета', async () => {
        expect(configureStatusClassName("classBindingTestName", "black")).toContain("classBindingTestName--black")
    })
    test('Проверяем возврат непосредственно класса', async () => {
        expect(configureStatusClassName("classBindingTestName", "black")).toContain("classBindingTestName")
    })
    test('Проверяем возврат непосредственно класса при отстутствии окраса', async () => {
        expect(configureStatusClassName("classBindingTestName", null)).toContain("classBindingTestName")
    })
    test('Проверяем, что если мы не передали цвет, ф-ия не прилепит лишний класс', async () => {
        expect(configureStatusClassName("classBindingTestName", null)).not.toContain("--")
    })
    //первый аргумент не проверяем, т.к. без него работа ф-ии не предусмотрена => 
    // он обязательный => в случае его отсутствия ts об этом подскажет 
})