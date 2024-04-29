```markdown
# Tata Communications Sustainability Report 2023-24
## Installation
### Step 1
Clone the repository using the following command:
```bash
git clone https://github.com/KalolwalaCodebase/Tata-Communications.git
```
### Step 2
Install dependencies using npm:
```bash
npm install
```
## Development
### Step 3
Run the development server:
```bash
npm run dev
```
## Package.json
```json
{
  "name": "tata-communication",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "bootstrap": "^5.3.3",
    "framer-motion": "^11.0.8",
    "pace-js": "^1.2.4",
    "react": "^18.2.0",
    "react-bootstrap": "^2.10.1",
    "react-dom": "^18.2.0",
    "react-intersection-observer": "^9.8.1",
    "react-router-dom": "^6.22.3",
    "react-scroll": "^1.9.0",
    "react-transition-group": "^4.4.5"
  },
  "devDependencies": {
    "@types/react": "^18.2.56",
    "@types/react-dom": "^18.2.19",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.56.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "vite": "^5.1.4"
  }
}
```
```