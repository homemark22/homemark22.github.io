window.addEventListener('load', initAudio);

function initAudio() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const vuMeter = document.getElementById('vu-meter');

    navigator.mediaDevices.getUserMedia({ audio: true })
        .then((stream) => {
            const source = audioContext.createMediaStreamSource(stream);
            source.connect(analyser);
            analyser.connect(audioContext.destination);
            visualize();
        })
        .catch((err) => {
            console.error('Error accessing microphone:', err);
        });

    function visualize() {
        analyser.getByteFrequencyData(dataArray);

        for (let i = 0; i < bufferLength; i++) {
            const vuBar = document.createElement('div');
            vuBar.className = 'vu-bar';
            vuBar.style.height = dataArray[i] + 'px';
            vuMeter.appendChild(vuBar);
        }

        requestAnimationFrame(visualize);
    }
}
