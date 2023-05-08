const express = require('express');
const bodyParser = require('body-parser');
//const 

const app = express();
app.use(bodyParser());

/*app.use(cors{{
    origin: '*'
}});
*/
const userRoute = require("./src/route/users/users.route");
const themesRoute = require("./src/route/themes/themes.route");
const topicsRoute = require("./src/route/topics/topics.route");
const themes_propertiesRoute = require("./src/route/themes_properties/themes_properties.route"); 
 
//Ruta raizz
app.get('/', function (req, res) {
    //Logica.
    res.send('Hello World');
});

app.get('/pagina2', function (req, res) {
    //Logica de negocios
    //esta aqui -Controller
    res.json({application: 'Study APP', version: '1.0.0'});
});

//Llamadas a los routes de los UCs
userRoute(app);
themesRoute(app);
topicsRoute(app); 
themes_propertiesRoute(app);

app.listen(3000);