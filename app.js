document.getElementById("qrForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const link = document.getElementById("linkInput").value;
  const qrCodeContainer = document.getElementById("qrCodeContainer");
  const downloadBtn = document.getElementById("downloadBtn");
  qrCodeContainer.innerHTML = "";
  downloadBtn.classList.add("hidden");
  const qrCanvas = document.createElement("canvas");
  const qr = new QRious({
    element: qrCanvas,
    value: link,
    size: 200,
  });
  qrCodeContainer.appendChild(qrCanvas);
  const dataUrl = qrCanvas.toDataURL("image/png");
  downloadBtn.href = dataUrl;
  downloadBtn.download = "qr-code.png";
  downloadBtn.classList.remove("hidden");
});

document.getElementById("clearBtn").addEventListener("click", function () {
  document.getElementById("linkInput").value = "";
  document.getElementById("qrCodeContainer").innerHTML = "";
  document.getElementById("downloadBtn").classList.add("hidden");
});
