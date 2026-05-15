const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/predict", (req, res) => {

    const rpm = parseInt(req.query.rpm);
    const fuel = parseFloat(req.query.fuel);
    const quality = parseFloat(req.query.quality);

    const torque = (rpm / 100) * quality - fuel * 2;

    const co = fuel * 0.5;

    let behavior = "";

    if (torque > 120) {
        behavior = "Excellent";
    } else {
        behavior = "Normal";
    }

    res.json({
        torque,
        co,
        behavior
    });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Running");
});
