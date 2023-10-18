var vg_1 = "choropeth.json";
vegaEmbed("#choropeth", vg_1).then(function(result) {
}).catch(console.error);

var vg_2 = "alluvial.json";
vegaEmbed("#alluvial", vg_2).then(function(result) {
}).catch(console.error);

var vg_3 = "linepoints.json";
vegaEmbed("#linepoints", vg_3).then(function(result) {
}).catch(console.error);

var vg_4 = "ranking.json";
vegaEmbed("#ranking", vg_4).then(function(result) {
}).catch(console.error);

var vg_5 = "australiavotedjury.json";
vegaEmbed("#australiavotedjury", vg_5).then(function(result) {
}).catch(console.error);

var vg_6 = "australiavotedtelevote.json";
vegaEmbed("#australiavotedtelevote", vg_6).then(function(result) {
}).catch(console.error);

var firstname = document.getElementById("firstname")
var lastname = document.getElementById("lastname")
var jsonBtn = document.getElementById("jsonbtn")
var jsonText = document.getElementById("jsontext")


// placements of countries in tile map

var config = {
    width: mapwidth,
    height: mapheight,
    padding: 10,
    projection: d3.geoMercator(),
    duration: 0,
    key: function (d) { return d.properties.ISO_A3; },
    grid: {
            ALB: { x: 5, y: 8 },
        ARM: { x: 9, y: 6 },
        AUS: { x: 9, y: 9 },
        AUT: { x: 4, y: 5 },
        AZE: { x: 9, y: 5 },
        BEL: { x: 2, y: 3 },
        BGR: { x: 7, y: 6 },
        BIH: { x: 5, y: 6 },
        BLR: { x: 6, y: 3 },
        CHE: { x: 3, y: 4 },
        CYP: { x: 8, y: 7 },
        CZE: { x: 4, y: 4 },
        DEU: { x: 4, y: 3 },
        DNK: { x: 4, y: 2 },
        ESP: { x: 1, y: 5 },
        EST: { x: 6, y: 1 },
        FIN: { x: 6, y: 0 },
        FRA: { x: 1, y: 4 },
        GBR: { x: 1, y: 2 },
        GEO: { x: 8, y: 5 },
        GRC: { x: 6, y: 8 },
        HUN: { x: 5, y: 5 },
        HRV: { x: 4, y: 6 },
        IRL: { x: 0, y: 2 },
        ISL: { x: 0, y: 0 },
        ISR: { x: 8, y: 8 },
        ITA: { x: 3, y: 5 },
        KOS: { x: 6, y: 7 },
        LTU: { x: 6, y: 2 },
        LUX: { x: 2, y: 4 },
        LVA: { x: 7, y: 2 },
        MDA: { x: 7, y: 5 },
        MKD: { x: 7, y: 7 },
        MLT: { x: 1, y: 7 },
        MNE: { x: 5, y: 7 },
        NLD: { x: 3, y: 3 },
        NOR: { x: 4, y: 0 },
        POL: { x: 5, y: 3 },
        PRT: { x: 0, y: 5 },
        ROU: { x: 6, y: 5 },
        RUS: { x: 7, y: 3 },
        SMR: { x: 2, y: 6 },
        SRB: { x: 6, y: 6 },
        SVK: { x: 5, y: 4 },
        SVN: { x: 3, y: 6 },
        SWE: { x: 5, y: 0 },
        UKR: { x: 6, y: 4 },
        TUR: { x: 8, y: 6 }
    }
};

//Data
var qualification = [
    { countrycode: 'ALB', countrycode2: 'al', qualifiedreal: false, name: 'Albania', round: 'first', qualified: true },
    { countrycode: 'ARM', countrycode2: 'ar', qualifiedreal: true, name: 'Armenia', round: 'first', qualified: true },
    { countrycode: 'AUS', countrycode2: 'au', qualifiedreal: true, name: 'Australia', round: 'first', qualified: true },
    { countrycode: 'AUT', countrycode2: 'at', qualifiedreal: true, name: 'Austria', round: 'second', qualified: true },
    { countrycode: 'AZE', countrycode2: 'az', qualifiedreal: true, name: 'Azerbaijan', round: 'first', qualified: true },
    { countrycode: 'BEL', countrycode2: 'be', qualifiedreal: true, name: 'Belgium', round: 'first', qualified: true },
    { countrycode: 'BGR', countrycode2: 'bg', qualifiedreal: true, name: 'Bulgaria', round: 'second', qualified: true },
    { countrycode: 'BIH', countrycode2: 'bi', qualifiedreal: false, name: 'Bosnia and Herzegovina', round: 'none', qualified: false },
    { countrycode: 'BLR', countrycode2: 'by', qualifiedreal: true, name: 'Belarus', round: 'second', qualified: false },
    { countrycode: 'CHE', countrycode2: 'ch', qualifiedreal: false, name: 'Switzerland', round: 'second', qualified: true },
    { countrycode: 'CYP', countrycode2: 'cy', qualifiedreal: true, name: 'Cyprus', round: 'first', qualified: true },
    { countrycode: 'CZE', countrycode2: 'cz', qualifiedreal: false, name: 'Czech Republic', round: 'first', qualified: false },
    { countrycode: 'DEU', countrycode2: 'de', qualifiedreal: true, name: 'Germany', round: 'final', qualified: true },
    { countrycode: 'DNK', countrycode2: 'dk', qualifiedreal: true, name: 'Denmark', round: 'second', qualified: true },
    { countrycode: 'ESP', countrycode2: 'es', qualifiedreal: true, name: 'Spain', round: 'final', qualified: true },
    { countrycode: 'EST', countrycode2: 'ee', qualifiedreal: false, name: 'Estonia', round: 'second', qualified: false },
    { countrycode: 'FIN', countrycode2: 'fi', qualifiedreal: false, name: 'Finland', round: 'first', qualified: true },
    { countrycode: 'FRA', countrycode2: 'fr', qualifiedreal: true, name: 'France', round: 'final', qualified: true },
    { countrycode: 'GBR', countrycode2: 'gb', qualifiedreal: true, name: 'Great Brittain', round: 'final', qualified: true },
    { countrycode: 'GEO', countrycode2: 'ge', qualifiedreal: false, name: 'Georgia', round: 'first', qualified: false },
    { countrycode: 'GRC', countrycode2: 'gr', qualifiedreal: true, name: 'Greece', round: 'first', qualified: true },
    { countrycode: 'HUN', countrycode2: 'hu', qualifiedreal: true, name: 'Hungary', round: 'second', qualified: true },
    { countrycode: 'HRV', countrycode2: 'hr', qualifiedreal: true, name: 'Croatia', round: 'second', qualified: true },
    { countrycode: 'IRL', countrycode2: 'ie', qualifiedreal: false, name: 'Ireland', round: 'second', qualified: true },
    { countrycode: 'ISL', countrycode2: 'is', qualifiedreal: false, name: 'Iceland', round: 'first', qualified: false },
    { countrycode: 'ISR', countrycode2: 'il', qualifiedreal: true, name: 'Israel', round: 'second', qualified: true },
    { countrycode: 'ITA', countrycode2: 'it', qualifiedreal: true, name: 'Italia', round: 'final', qualified: true },
    { countrycode: 'KOS', countrycode2: 'ko', qualifiedreal: false, name: 'Kosovo', round: 'none', qualified: false },
    { countrycode: 'LTU', countrycode2: 'lt', qualifiedreal: false, name: 'Lithuania', round: 'second', qualified: false },
    { countrycode: 'LUX', countrycode2: 'lu', qualifiedreal: false, name: 'Luxembourg', round: 'none', qualified: false },
    { countrycode: 'LVA', countrycode2: 'lv', qualifiedreal: false, name: 'Latvia', round: 'first', qualified: false },
    { countrycode: 'MDA', countrycode2: 'md', qualifiedreal: true, name: 'Moldova', round: 'first', qualified: false },
    { countrycode: 'MKD', countrycode2: 'mk', qualifiedreal: false, name: 'Macedonia', round: 'second', qualified: false },
    { countrycode: 'MLT', countrycode2: 'ml', qualifiedreal: false, name: 'Malta', round: 'second', qualified: false },
    { countrycode: 'MNE', countrycode2: 'me', qualifiedreal: false, name: 'Montenegro', round: 'first', qualified: false },
    { countrycode: 'NLD', countrycode2: 'nl', qualifiedreal: true, name: 'Netherlands', round: 'second', qualified: true },
    { countrycode: 'NOR', countrycode2: 'no', qualifiedreal: true, name: 'Norway', round: 'second', qualified: false },
    { countrycode: 'POL', countrycode2: 'pl', qualifiedreal: true, name: 'Poland', round: 'first', qualified: false },
    { countrycode: 'PRT', countrycode2: 'pt', qualifiedreal: true, name: 'Portugal', round: 'first', qualified: true },
    { countrycode: 'ROU', countrycode2: 'ro', qualifiedreal: true, name: 'Romania', round: 'second', qualified: false },
    { countrycode: 'RUS', countrycode2: 'ru', qualifiedreal: false, name: 'Russia', round: 'none', qualified: false },
    { countrycode: 'SMR', countrycode2: 'sm', qualifiedreal: false, name: 'San Marino', round: 'second', qualified: false },
    { countrycode: 'SRB', countrycode2: 'rs', qualifiedreal: false, name: 'Serbia', round: 'second', qualified: true },
    { countrycode: 'SVK', countrycode2: 'sk', qualifiedreal: false, name: 'Slovakia', round: 'none', qualified: false },
    { countrycode: 'SVN', countrycode2: 'si', qualifiedreal: false, name: 'Slovenia', round: 'first', qualified: false },
    { countrycode: 'SWE', countrycode2: 'se', qualifiedreal: true, name: 'Sweden', round: 'first', qualified: true },
    { countrycode: 'UKR', countrycode2: 'ua', qualifiedreal: true, name: 'Ukraine', round: 'final', qualified: true },
    { countrycode: 'TUR', countrycode2: 'tr', qualifiedreal: false, name: 'Turkey', round: 'none', qualified: false }
];