import fs from 'fs/promises';
import path from 'path';
import { sizes } from '../lib/styles/size.ts';

function extractClasses(obj) {
    const classes = [];
    Object.values(obj).forEach(value => {
        if (typeof value === 'string') {
            classes.push(...value.split(' ').filter(c => c.trim()));
        }
    });
    return classes;
}
const safelist = [
    ...extractClasses(sizes),

];

console.log('Safelist classes:', safelist);

async function generateSafelist() {
    // const safelistClasses = [
    //     'bg-red-500',
    //     'text-lg',
    //     'hover:bg-green-500',
    //     // add dynamically generated classes here
    // ];

    const content = safelist.join(' ');
    const filePath = path.join(process.cwd(), 'dist', 'safelist.txt');

    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, content);

    console.log('Safelist file written to', filePath);
}

generateSafelist().catch(console.error);
