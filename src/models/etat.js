
class Etat{
    constructor(id,oeuf_id,jour,status,observations,temperature,humidite) {
        this.id = id;
        this.oeuf_id = oeuf_id;
        this.jour = jour;
        this.status = status;
        this.observations = observations;
        this.temperature = temperature;
        this.humidite = humidite;
    }
}

module.exports = Etat;