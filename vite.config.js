import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// O site é publicado em https://<user>.github.io/rayssen_leonardo/
// portanto o base precisa apontar para o subdiretório do repositório.
export default defineConfig({
  plugins: [react()],
  base: '/rayssen_leonardo/',
});
