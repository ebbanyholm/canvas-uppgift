// Några grundläggande inställningar
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = 1 * window.innerHeight;

canvas.style.width = "100%";
canvas.style.height = "100%";

// Genom variabeln c kommer man åt det mesta som
// med canvas att göra
const c = canvas.getContext("2d");
const midX = canvas.width / 2;
const midY = canvas.height / 2;

// Matar ut canvas dimensioner till konsolen, pröva att
// ändra storlekn på fönstret och ladda däörefter om sidan.
console.log(
	`Bredd på canvas: ${canvas.width},
Höjd på canvas: ${canvas.height}`
);

function drawPicture() {
	const c = canvas.getContext("2d");
	const midX = canvas.width / 2;
	const midY = canvas.height / 2;

	c.beginPath();
	c.rect(20, midY + midY / 3 - 5, (3 * midX) / 5, (2 * midY) / 3);
	c.stroke();
	c.beginPath();
	c.rect(
		canvas.width - (3 * midX) / 5 - 20,
		midY + midY / 3 - 5,
		(3 * midX) / 5,
		(2 * midY) / 3
	);
	c.stroke();

	c.beginPath();
	c.moveTo(20, midY + midY / 3 - 5);
	c.lineTo((3 * midX) / 10 + 20, midY - 60);
	c.stroke();
	c.beginPath();
	c.moveTo((3 * midX) / 10 + 20, midY - 60);
	c.lineTo(20 + (3 * midX) / 5, midY + midY / 3 - 5);
	c.stroke();

	c.beginPath();
	c.moveTo(canvas.width - (3 * midX) / 5 - 20, midY + midY / 3 - 5);
	c.lineTo(canvas.width - (3 * midX) / 10 - 20, midY - 60);
	c.stroke();
	c.beginPath();
	c.moveTo(
		canvas.width - (3 * midX) / 5 - 20 + (3 * midX) / 5,
		midY + midY / 3 - 5
	);
	c.lineTo(canvas.width - (3 * midX) / 10 - 20, midY - 60);
	c.stroke();

	const x = midX / 12;
	const y = midY / 4;
	c.fillStyle = "brown";
	c.fillRect(midX - x / 2, canvas.height - y, x, y);
	c.beginPath();
	c.moveTo(midX - x / 2, canvas.height - y);
	c.lineTo(midX - x / 2, canvas.height);
	c.stroke();
	c.beginPath();
	c.moveTo(midX - x / 2, canvas.height - y);
	c.lineTo(midX - x / 2 + x, canvas.height - y);
	c.stroke();
	c.beginPath();
	c.moveTo(midX - x / 2 + x, canvas.height - y);
	c.lineTo(midX - x / 2 + x, canvas.height);
	c.stroke();
	c.beginPath();
	c.moveTo(midX - x / 2 + x, canvas.height);
	c.lineTo(midX - x / 2, canvas.height);
	c.stroke();

	c.fillStyle = "green";
	c.beginPath();
	c.ellipse(
		midX,
		midY + y + 17,
		2 * y,
		1.5 * x,
		Math.PI / 2,
		2.15 * Math.PI,
		1.85 * Math.PI
	);
	c.stroke();
	c.fill();
}
drawPicture();
