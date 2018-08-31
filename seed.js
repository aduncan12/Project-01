const db = require('./models');

let heritageList = [
    {
    name: "<a href='https://tadichgrillsf.com/' target='_blank'>Tadich Grill</a>",
    address: "240 California St, San Francisco, CA 94111",
    yearOpened: "Est. 1849",
    coordinates: [37.7934,-122.3995]
    },
    {
    name: "<a href='http://toscacafesf.com/' target='_blank'>Tosca Cafe</a>",
    address: "242 Columbus Ave, San Francisco, CA 94133",
    yearOpened: "Est. 1919",
    coordinates: [37.7976,-122.4059]
    },
    {
    name: "<a href='http://www.samworestaurant.com/' target='_blank'>Sam Wo</a>",
    address: "2713 Clay St, San Francisco, CA 94108",
    yearOpened: "Est. 1912",
    coordinates: [37.7942, -122.4051]
    },
    {
    name: "<a href='https://cliffhouse.com/' target='_blank'>Cliff House</a>",
    address: "1090 Point Lobos Ave, San Francisco, CA 94121",
    yearOpened: "Est. 1858",
    coordinates: [37.7785, -122.5140]
    }
];

db.Heritage.remove( {} , (req,res) => {
    db.Heritage.create(heritageList, (err, newBusiness) => {
        if(err){
            console.log(err);
        }
        console.log("Created a new heritage bar or restaraunt", newBusiness);
        process.exit();
    });
});