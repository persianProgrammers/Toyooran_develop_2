const fs = require('fs');
let code = fs.readFileSync('src/components/ProductCatalogSection.tsx', 'utf8');

// 1. Revert hero section to 100dvh
code = code.replace(
  'className="w-full min-h-[60vh] md:min-h-[80vh] flex flex-col justify-center relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 z-10"',
  'className="w-full min-h-[100dvh] flex flex-col justify-center relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 z-10"'
);

// 2. Make the category section EXACTLY 100dvh as requested (or min-h-100dvh)
const oldCatWrapper = `<div className="flex flex-col justify-start mb-16 relative z-20 pt-12 sm:pt-16">`;
const newCatWrapper = `<div className="w-full min-h-[100dvh] flex flex-col justify-center mb-8 relative z-20 pt-16">`;
code = code.replace(oldCatWrapper, newCatWrapper);

fs.writeFileSync('src/components/ProductCatalogSection.tsx', code);
