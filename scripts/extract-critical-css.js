// scripts/extract-critical-css.js
// Script para extraer CSS crítico automáticamente

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { PurgeCSS } from 'purgecss';

async function extractCriticalCSS() {
  try {
    console.log('🔍 Extrayendo CSS crítico...');

    // Lee el CSS compilado
    const cssPath = join(process.cwd(), 'dist/assets/index-*.css');
    const cssFiles = require('glob').sync(cssPath);

    if (cssFiles.length === 0) {
      throw new Error('No se encontró el archivo CSS compilado');
    }

    const css = readFileSync(cssFiles[0], 'utf8');

    // Extrae solo lo necesario para el above-the-fold
    const purgeCSSResult = await new PurgeCSS().purge({
      content: [
        {
          raw: `
            <header></header>
            <nav></nav>
            <section class="hero-section"></section>
            <div class="container"></div>
            <h1 class="hero-heading font-bold text-white text-center"></h1>
            <button class="btn-primary"></button>
            <img loading="eager" />
          `,
          extension: 'html'
        }
      ],
      css: [{ raw: css }],
      safelist: [
        'html',
        'body',
        '*',
        '::before',
        '::after',
        /^hero-/,
        /^btn-/,
        'container',
        'text-white',
        'font-bold',
        'text-center'
      ]
    });

    const criticalCSS = purgeCSSResult[0].css;

    // Guarda el CSS crítico
    const outputPath = join(process.cwd(), 'dist/critical.css');
    writeFileSync(outputPath, criticalCSS, 'utf8');

    console.log('✅ CSS crítico extraído en dist/critical.css');
    console.log(`📦 Tamaño: ${(criticalCSS.length / 1024).toFixed(2)} KB`);

    return criticalCSS;

  } catch (error) {
    console.error('❌ Error extrayendo CSS crítico:', error);
    process.exit(1);
  }
}

extractCriticalCSS();