import fs from 'fs/promises';
import path from 'path';
import { sizes } from '../lib/styles/size.ts';
import { bg } from '../lib/styles/bg.ts';

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
    ...extractClasses(bg),

];

async function generateSafelist() {
    const content = JSON.stringify(safelist, null, 2)
    console.log('Generated safelist content:', content);
    const filePath = path.join(process.cwd(), 'dist', 'safelist.json');

    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, content);


}

generateSafelist().catch(console.error);
