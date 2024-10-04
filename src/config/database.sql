create database egg_management

create table poule
(
    id             serial
        primary key,
    nom            varchar(100),
    date_arrivee   date,
    couleur        varchar(100),
    statut_sante   varchar(100),
    date_naissance date,
    alimentation   varchar(100),
    race           varchar(100)
);
create table oeuf
(
    id            serial
        primary key,
    poule_id      integer
        references poule
            on delete cascade,
    date_ponte    date,
    date_eclosion date,
    couleur       varchar(100),
    poids         numeric(5, 2),
    taille        numeric(5, 2)
);
create table etat
(
    id           serial
        primary key,
    oeuf_id      integer
        references oeuf
            on delete cascade,
    jour         date,
    status       varchar(100),
    observations text,
    temperature  integer,
    humidite     varchar(100)
);
