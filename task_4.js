function HomeDevice(type, color, capacity) {
    this.voltage = '220v',
    this.type = type,
    this.color = color,
    this.capacity = capacity
}

HomeDevice.prototype.getPowerOne = function (time) {
    console.log(`Устройство заработает через ${time} секунд после включения`)
}

function KitchenDevice(type, color, capacity, changeTime, changeCapacity) {
    this.type = type,
    this.color = color,
    this.capacity = capacity,
    this.changeTime = changeTime,
    this.changeCapacity = changeCapacity
}

KitchenDevice.prototype = new HomeDevice()

KitchenDevice.prototype.getPowerOne = function (time) {
    console.log(`Прибор включится через ${time} секунд, после нажатия кнопки`)
}

const kettle = new KitchenDevice('Чайник', 'Красный', '1800 Вт', '5 секунд', '1500 Вт');
const mixer = new KitchenDevice('Миксер', 'Серебристый', '1200 Вт', '3 секунды', '1100 Вт');
const hoover = new HomeDevice('Пылесос', 'Синий', '2000 Вт');

kettle.getPowerOne(5);
mixer.getPowerOne(3);
hoover.getPowerOne(0);
console.log(kettle)
console.log(mixer)
console.log(hoover)