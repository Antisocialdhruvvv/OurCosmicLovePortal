document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("avatarCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 300;
    canvas.height = 400;

    function drawAvatar(color, eyes, mouth) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Face
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(150, 200, 100, 0, Math.PI * 2);
        ctx.fill();

        // Eyes
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(120, 180, 10, 0, Math.PI * 2);
        ctx.arc(180, 180, 10, 0, Math.PI * 2);
        ctx.fill();

        // Mouth
        ctx.fillStyle = "red";
        if (mouth === "smile") {
            ctx.beginPath();
            ctx.arc(150, 220, 30, 0, Math.PI, false);
        } else {
            ctx.beginPath();
            ctx.moveTo(120, 220);
            ctx.lineTo(180, 220);
        }
        ctx.stroke();
    }

    function randomizeAvatar() {
        const colors = ["#ffcc00", "#ff99cc", "#66ccff", "#99ff99"];
        const mouths = ["smile", "neutral"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomMouth = mouths[Math.floor(Math.random() * mouths.length)];
        drawAvatar(randomColor, "black", randomMouth);
    }

    randomizeAvatar();
});
document.addEventListener("DOMContentLoaded", () => {
    const avatarCanvas = document.getElementById("avatarCanvas");
    if (!avatarCanvas) return;

    const ctx = avatarCanvas.getContext("2d");
    const avatarImage = new Image();
    avatarImage.src = "/assets/images/avatars/default_avatar.png";

    avatarImage.onload = () => {
        ctx.drawImage(avatarImage, 0, 0, avatarCanvas.width, avatarCanvas.height);
    };

    document.getElementById("avatarSelector").addEventListener("change", (event) => {
        const selectedAvatar = event.target.value;
        avatarImage.src = `/assets/images/avatars/${selectedAvatar}.png`;
    });
});

import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.min.js";

document.addEventListener("DOMContentLoaded", () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 300 / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(300, 400);
    document.getElementById("avatarCanvas").appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xffcc00 });
    const avatarHead = new THREE.Mesh(geometry, material);
    scene.add(avatarHead);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(2, 2, 2);
    scene.add(light);

    camera.position.z = 3;

    function animate() {
        requestAnimationFrame(animate);
        avatarHead.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
});
