document.addEventListener("DOMContentLoaded", () => {
    let mediaRecorder;
    let audioChunks = [];

    const startButton = document.getElementById("start-recording");
    const stopButton = document.getElementById("stop-recording");
    const audioPlayback = document.getElementById("audio-playback");
    const savedRecordings = document.getElementById("saved-recordings");

    async function startRecording() {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = (event) => {
            audioChunks.push(event.data);
        };

        mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
            const audioUrl = URL.createObjectURL(audioBlob);
            const audioElement = document.createElement("audio");
            audioElement.controls = true;
            audioElement.src = audioUrl;
            savedRecordings.appendChild(audioElement);

            // Save recording data (for now, just display)
            const downloadLink = document.createElement("a");
            downloadLink.href = audioUrl;
            downloadLink.download = "audio_diary_entry.webm";
            downloadLink.innerText = "⬇️ Download Recording";
            savedRecordings.appendChild(downloadLink);
        };

        mediaRecorder.start();
        startButton.disabled = true;
        stopButton.disabled = false;
        audioChunks = [];
    }

    function stopRecording() {
        mediaRecorder.stop();
        startButton.disabled = false;
        stopButton.disabled = true;
    }

    startButton.addEventListener("click", startRecording);
    stopButton.addEventListener("click", stopRecording);
});
