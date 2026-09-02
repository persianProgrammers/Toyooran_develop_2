const fs = require('fs');
let code = fs.readFileSync('src/components/ProductCatalogSection.tsx', 'utf8');

// Remove min-h-[100dvh] and huge margins from the category section wrapper
code = code.replace(
  'className="w-full min-h-[100dvh] flex flex-col justify-start mb-8 relative z-20 pt-12 md:pt-20"',
  'className="w-full flex flex-col justify-start mb-4 relative z-20 pt-8 sm:pt-12 md:pt-16"'
);

// Remove the huge margin top from the product grid wrapper
code = code.replace(
  '<motion.div className="mt-8 sm:mt-12">',
  '<motion.div className="mt-2 sm:mt-4">'
);

fs.writeFileSync('src/components/ProductCatalogSection.tsx', code);
