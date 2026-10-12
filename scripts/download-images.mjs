import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85&fm=webp',
    dest: 'public/images/maya/dr-maya-reynolds.webp',
  },
  {
    url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=85&fm=webp',
    dest: 'public/images/maya/maya-in-session.webp',
  },
  {
    url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85&fm=webp',
    dest: 'public/images/office/office-main-seating.webp',
  },
  {
    url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=85&fm=webp',
    dest: 'public/images/office/office-window-light.webp',
  },
  {
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85&fm=webp',
    dest: 'public/images/office/office-detail.webp',
  },
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85&fm=webp',
    dest: 'public/images/cards/anxiety-grounding.webp',
  },
  {
    url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=85&fm=webp',
    dest: 'public/images/cards/trauma-safety.webp',
  },
  {
    url: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=85&fm=webp',
    dest: 'public/images/cards/burnout-rest.webp',
  },
  {
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85&fm=webp',
    dest: 'public/images/office/santa-monica-coastal.webp',
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed with status ${res.statusCode} for ${url}`));
      }
      const dir = path.dirname(dest);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(dest));
      });
      file.on('error', (err) => {
        fs.unlink(dest, () => reject(err));
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log('Downloading curated warm coastal photography...');
  for (const item of images) {
    try {
      await downloadFile(item.url, item.dest);
      console.log(`✓ Downloaded ${item.dest}`);
    } catch (err) {
      console.error(`✗ Error downloading ${item.dest}:`, err.message);
    }
  }
  console.log('All images ready.');
}

run();
