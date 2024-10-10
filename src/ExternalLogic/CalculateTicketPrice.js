export default function CalculatePrice() {
    const totalPassengers = Number(sessionStorage.getItem("Всего пассажиров"));
    const adults = Number(sessionStorage.getItem("Пассажиры Взрослые"));
    const kids = Number(sessionStorage.getItem("Пассажиры Дети"));
    const babies = Number(sessionStorage.getItem("Пассажиры Младенцы"));
    let ticket = 0;

    if ((kids || babies || totalPassengers) == 0) {
        return "Поездка за наш счёт!"
    }

    if (sessionStorage.getItem("Класс") === "Эконом") {
        ticket = ticket + 2;
    }
    if (sessionStorage.getItem("Класс") === "Комфорт") {
        ticket = ticket + 4;
    }
    if (sessionStorage.getItem("Класс") === "Бизнес") {
        ticket = ticket + 8;
    }
    if (sessionStorage.getItem("Класс") === "Первый класс") {
        ticket = ticket + 12;
    }

    const multiplier = 10000 * ((adults * kids * babies + totalPassengers) * ticket);
    const finalPrice = Math.round(Math.random() * multiplier);

    return finalPrice
}