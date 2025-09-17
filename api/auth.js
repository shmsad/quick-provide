import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const auth = { login: 'admin', password: '1234' }; // Username & Password

    // Authorization header check
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password && login === auth.login && password === auth.password) {
        // Serve index.html from public folder
        const filePath = path.join(process.cwd(), 'public', 'index.html');
        const html = fs.readFileSync(filePath, 'utf8');
        res.status(200).send(html);
    } else {
        res.setHeader('WWW-Authenticate', 'Basic realm="Protected"');
        res.status(401).send('Authentication required.');
    }
}
