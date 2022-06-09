const cds = require('@sap/cds');

<% if(v2support){ -%>
const proxy = require('@sap/cds-odata-v2-adapter-proxy');
<% } -%>

cds.on('bootstrap', app => {

<% if(v2support){ -%>
    app.use(proxy());
<% } -%>

});

module.exports = cds.server;
