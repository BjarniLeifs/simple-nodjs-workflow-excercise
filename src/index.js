const app = require("./app");
const port = process.env.PORT || 3000;

app.listen(port, () => 
    console.log("Exapmle app listening on port 3000!")
);