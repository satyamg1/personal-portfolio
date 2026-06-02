const fs = require("node:fs");
const zlib = require("node:zlib");

const width = 1400;
const height = 980;
const data = Buffer.alloc((width * 4 + 1) * height);

function putPixel(row, col, r, g, b, a = 255) {
  const idx = row * (width * 4 + 1) + 1 + col * 4;
  data[idx] = r;
  data[idx + 1] = g;
  data[idx + 2] = b;
  data[idx + 3] = a;
}

function rect(x, y, w, h, color) {
  for (let row = y; row < y + h; row += 1) {
    if (row < 0 || row >= height) continue;
    for (let col = x; col < x + w; col += 1) {
      if (col < 0 || col >= width) continue;
      putPixel(row, col, color[0], color[1], color[2], color[3] ?? 255);
    }
  }
}

function blend(base, over, alpha) {
  return base.map((channel, index) =>
    Math.round(channel * (1 - alpha) + over[index] * alpha)
  );
}

for (let row = 0; row < height; row += 1) {
  const filterIdx = row * (width * 4 + 1);
  data[filterIdx] = 0;
  for (let col = 0; col < width; col += 1) {
    const x = col / width;
    const y = row / height;
    const haze = Math.sin((x * 5.7 + y * 3.2) * Math.PI) * 0.06;
    let color = [
      235 + Math.round(24 * x + 16 * haze),
      238 + Math.round(14 * y),
      229 + Math.round(21 * (1 - x)),
    ];
    const glowA = Math.max(0, 1 - Math.hypot(x - 0.18, y - 0.12) * 2.2);
    const glowB = Math.max(0, 1 - Math.hypot(x - 0.92, y - 0.76) * 2.4);
    color = blend(color, [14, 111, 92], glowA * 0.38);
    color = blend(color, [57, 91, 143], glowB * 0.27);
    putPixel(row, col, color[0], color[1], color[2], 255);
  }
}

rect(110, 118, 560, 410, [255, 255, 255, 238]);
rect(150, 164, 260, 18, [32, 34, 37]);
rect(150, 210, 430, 12, [108, 116, 124]);
rect(150, 246, 360, 12, [14, 111, 92]);
rect(150, 300, 500, 130, [230, 239, 235]);
rect(176, 326, 160, 14, [57, 91, 143]);
rect(176, 358, 420, 10, [100, 106, 112]);
rect(176, 386, 330, 10, [100, 106, 112]);

rect(720, 175, 540, 600, [255, 255, 255, 232]);
rect(770, 235, 250, 16, [32, 34, 37]);
rect(770, 292, 430, 88, [220, 239, 233]);
rect(810, 326, 110, 14, [14, 111, 92]);
rect(770, 430, 430, 88, [237, 231, 221]);
rect(810, 464, 170, 14, [182, 123, 47]);
rect(770, 568, 430, 88, [226, 233, 244]);
rect(810, 602, 150, 14, [57, 91, 143]);

rect(250, 610, 430, 210, [32, 34, 37, 238]);
rect(292, 654, 185, 16, [255, 255, 255]);
rect(292, 700, 300, 12, [119, 181, 166]);
rect(292, 734, 250, 12, [217, 191, 144]);
rect(292, 768, 320, 12, [143, 163, 197]);

rect(580, 502, 300, 110, [14, 111, 92, 240]);
rect(616, 540, 205, 14, [255, 255, 255]);
rect(616, 574, 142, 10, [220, 239, 233]);

function crc32(buf) {
  let crc = -1;
  for (let i = 0; i < buf.length; i += 1) {
    crc ^= buf[i];
    for (let j = 0; j < 8; j += 1) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
  }
  return (crc ^ -1) >>> 0;
}

function chunk(type, bytes) {
  const name = Buffer.from(type);
  const len = Buffer.alloc(4);
  len.writeUInt32BE(bytes.length);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([name, bytes])));
  return Buffer.concat([len, name, bytes, crc]);
}

const header = Buffer.alloc(13);
header.writeUInt32BE(width, 0);
header.writeUInt32BE(height, 4);
header[8] = 8;
header[9] = 6;

const png = Buffer.concat([
  Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
  chunk("IHDR", header),
  chunk("IDAT", zlib.deflateSync(data, { level: 9 })),
  chunk("IEND", Buffer.alloc(0)),
]);

fs.writeFileSync("assets/hero-workspace.png", png);
