let net;

async function app() {
    console.log("Loading mobilenet...");

    net = await mobilenet.load();

    console.log("Successfully loaded model.");

    const imgEl = document.getElementById("img");
    const result = await net.classify(imgEl);

    console.log(result);

    document.getElementById("console").innerText = `
      Prediction: ${result[0].className}\n
      Probability: ${result[0].probability}
    `;
}

var loadFile = function (event) {
  var image = document.getElementById("img");
  image.src = URL.createObjectURL(event.target.files[0]);
};
