const { getFreshMetrics } = require('../Utils/getFreshMetrics');

describe('getFreshMetrics', () => {
    // в ф-ию передаём исходный массив нод, в котором самая свежая из него на ходится
    // на 2-ой позиции, по названию берём элемент из результирующего объекта, и проверяем, 
    // совпадает ли он с ожиданием
    test('Проверяем возврат данных свежей ноды', () => {
        const data = [
            {
                caption: "spb-web-01",
                datetime: "02-03-2020 00:00",
            },
            {
                caption: "spb-web-01",
                datetime: "01-03-2020 00:00",
            },
            {
                caption: "spb-web-01",
                datetime: "04-03-2020 00:00",
            },
            {
                caption: "spb-web-01",
                datetime: "03-03-2020 00:00",
            }
        ]
        expect(getFreshMetrics(data)["spb-web-01"]).toEqual(data[2])
    })
    // если в исходном массиве нет выбранной ноды, мы должны получить undefined
    test('Проверяем возврат данных несуществующей ноды', () => {
        const data = [
            {
                caption: "spb-web-01",
                datetime: "02-03-2020 00:00",
            },
            {
                caption: "spb-web-01",
                datetime: "01-03-2020 00:00",
            },
            {
                caption: "spb-web-01",
                datetime: "04-03-2020 00:00",
            },
            {
                caption: "spb-web-01",
                datetime: "03-03-2020 00:00",
            }
        ]
        expect(getFreshMetrics(data)["msk-web-01"]).toBeUndefined()
    })

    // если массив нод пустой - мы должны получить undefined
    test('Проверяем возврат данных несуществующей ноды', () => {
        const data = []
        expect(getFreshMetrics(data)["msk-web-01"]).toBeUndefined()
    })

    test('Проверяем возврат данных при наличае пустых дат', () => {
        const data = [
            {
                caption: "spb-web-01",
                datetime: "02-03-2020 00:00",
            },
            {
                caption: "spb-web-01",
                datetime: "01-03-2020 00:00",
            },
            {
                caption: "spb-web-01",
                datetime: null,
            },
            {
                caption: "spb-web-01",
                datetime: undefined,
            }
        ]
        expect(getFreshMetrics(data)["spb-web-01"]).toEqual(data[0])
    })
})