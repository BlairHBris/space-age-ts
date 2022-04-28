export function age(planet: string, seconds: number) {
    const years = seconds / 31557600

    if (planet == "mercury"){
        return Number((years / .2408467).toFixed(2))
    } else if (planet == "venus"){
        return Number((years / .61519726).toFixed(2))
    } else if (planet == "earth"){
        return Number((years).toFixed(2))
    } else if (planet == "mars"){
        return Number((years / 1.8808158).toFixed(2))
    } else if (planet == "jupiter"){
        return Number((years / 11.862615).toFixed(2))
    } else if (planet == "saturn"){
        return Number((years / 29.447498).toFixed(2))
    } else if (planet == "uranus"){
        return Number((years / 84.016846).toFixed(2))
    } else if (planet == "neptune"){
        return Number((years / 164.79132).toFixed(2))
    }
}
