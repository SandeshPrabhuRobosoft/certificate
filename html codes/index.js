var pdf = require("pdf-creator-node");
var fs = require("fs");

// Read HTML Template
var html = fs.readFileSync("index.html", "utf8");
var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center;">Author: Shyam Hajare</div>',
    },
    footer: {
        height: "28mm",
        contents: {
            first: "Cover page",
            2: "Second page", // Any page number is working. 1-based index
            default:
                '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: "Last Page",
        },
    },
};

var document = {
    html: html,
    data: {
        name: "Shyam",
        courseTitle: "learn fixma",
        joined: "12/2/2000",
        completed: "12/3/2000",
        time: "4h 30m",
        certificateNumber: "65GET6GT66G6G145TG14",
    },
    path: "./output.pdf",
    type: "",
};
pdf.create(document, options)
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.error(error);
    });
